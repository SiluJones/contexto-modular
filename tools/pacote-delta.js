// tools/pacote-delta.js — o delta de pacote para pacote (wo0219, D-211; analise meta/analises/261126-ANALISE-o-update-focado.md)
// Ferramenta do lado do dev (como o build.js): nao entra no produto.
//
// Uso (na raiz do repo do KCM):
//   node tools/pacote-delta.js --de <versao|commit> --nicho <id> [--code] [--mount] [--perfil <perfil.json>] [--saida <pasta>] [--repo <pasta>]
//
// Gera o pacote de update da versao atual (o index.html da raiz) e, junto dele, o _DELTA.md: o que mudou entre
// o pacote que o projeto recebeu na versao dele e o de agora, com o mesmo nicho, os mesmos modos e o mesmo perfil.
// O index.html antigo sai do git (o commit que cortou a versao). O carimbo de versao nao conta como mudanca.
// --perfil: JSON {"topbar": {...}, "builder": {...}, "os": "win-ps"} com o perfil com que o projeto foi gerado (os ids
// dos campos do nicho; "os" e a chave do sistema operacional: win-cmd, win-ps, win-both, macos, linux); sem ele, o padrao do kit.
// --saida: a pasta do pacote; padrao, a pasta-pai do repo com o nome que o prompt do update cita. Pasta existente com
// arquivos: recusa (nada e sobrescrito).
"use strict";
const fs = require("fs"), path = require("path"), cp = require("child_process");

const TETO = 400;
const SHIM = 'window.__D = {STATE: STATE, NICHES: NICHES, normNiche: normNiche,'
  + ' buildUpdatePack: (typeof buildUpdatePack !== "undefined" ? buildUpdatePack : null),'
  + ' KIT_VERSION: (typeof KIT_VERSION !== "undefined" ? KIT_VERSION : "(sem versao)"),'
  + ' buildUpdatePrompt: (typeof buildUpdatePrompt !== "undefined" ? buildUpdatePrompt : null),'
  + ' updatePackFolder: (typeof updatePackFolder !== "undefined" ? updatePackFolder : null),'
  + ' OSENV: (typeof OSENV !== "undefined" ? OSENV : null)};';

// Carrega um index.html (de qualquer versao) e devolve o minimo para gerar o pacote. Shim proprio, e nao o do
// validate.js: o do harness lista funcoes que as versoes antigas nao tinham.
function carregar(html){
  const { JSDOM } = require("jsdom");
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  if(!m) throw new Error("bloco <script> nao encontrado no index.html");
  let code = m[1].replace(/\nboot\(\);?\s*$/m, "\n" + SHIM + "\n");
  if(!code.includes("window.__D")) code += "\n" + SHIM + "\n";
  const dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>", {runScripts: "dangerously", url: "https://localhost/", pretendToBeVisual: true});
  const s = dom.window.document.createElement("script");
  s.textContent = code;
  dom.window.document.body.appendChild(s);
  if(!dom.window.__D) throw new Error("o index.html nao carregou (erro de execucao do script)");
  return dom.window.__D;
}

// Gera o pacote com o nicho, os modos e o perfil pedidos; devolve os arquivos, o manifesto, o prompt e a pasta.
function pacote(D, o){
  const S = D.STATE, prev = {w: S.workmode, n: S.niche, t: S.topbar, b: S.builder, os: D.OSENV ? D.OSENV.value : null};
  try {
    S.workmode = Object.assign({}, S.workmode || {}, {mountMode: o.mount ? "yes" : "", codeMode: o.code ? "yes" : "", groupMode: "no", asuMode: ""});
    S.niche = o.nicho; S.topbar = Object.assign({}, (o.perfil || {}).topbar || {}); S.builder = Object.assign({}, (o.perfil || {}).builder || {});
    if(D.OSENV && (o.perfil || {}).os) D.OSENV.value = o.perfil.os;
    if(!D.buildUpdatePack) throw new Error("a v" + D.KIT_VERSION + " ainda nao gerava pacote de update: nao ha delta — faca o merge completo");
    if(!D.NICHES[o.nicho]) throw new Error("o nicho «" + o.nicho + "» nao existe na v" + D.KIT_VERSION);
    const n = D.normNiche(D.NICHES[o.nicho]), pk = D.buildUpdatePack(n);
    return {versao: D.KIT_VERSION, manifest: pk.manifest, prompt: D.buildUpdatePrompt ? D.buildUpdatePrompt(n) : "",
      pasta: D.updatePackFolder ? D.updatePackFolder(n) : "kcm-update-" + o.nicho + "-v" + D.KIT_VERSION,
      files: pk.files.map(f => ({real: f.real, flat: f.flat, nature: f.nature, content: f.content || ""}))};
  } finally { S.workmode = prev.w; S.niche = prev.n; S.topbar = prev.t; S.builder = prev.b; if(D.OSENV) D.OSENV.value = prev.os; }
}

// Diff de linhas por LCS, com 2 linhas de contexto. Devolve {mudadas, hunks: [texto]}.
function diffLinhas(a, b, ctx){
  ctx = ctx == null ? 2 : ctx;
  let ini = 0; while(ini < a.length && ini < b.length && a[ini] === b[ini]) ini++;
  let fa = a.length, fb = b.length; while(fa > ini && fb > ini && a[fa - 1] === b[fb - 1]){ fa--; fb--; }
  const A = a.slice(ini, fa), B = b.slice(ini, fb), n = A.length, m = B.length;
  const L = new Int32Array((n + 1) * (m + 1));
  for(let i = n - 1; i >= 0; i--) for(let j = m - 1; j >= 0; j--)
    L[i * (m + 1) + j] = A[i] === B[j] ? L[(i + 1) * (m + 1) + j + 1] + 1 : Math.max(L[(i + 1) * (m + 1) + j], L[i * (m + 1) + j + 1]);
  const ops = [];
  for(let k = 0; k < ini; k++) ops.push([" ", a[k], k, k]);
  let i = 0, j = 0;
  while(i < n || j < m){
    if(i < n && j < m && A[i] === B[j]){ ops.push([" ", A[i], ini + i, ini + j]); i++; j++; }
    else if(i < n && (j >= m || L[(i + 1) * (m + 1) + j] >= L[i * (m + 1) + j + 1])){ ops.push(["-", A[i], ini + i, ini + j]); i++; }
    else { ops.push(["+", B[j], ini + i, ini + j]); j++; }
  }
  for(let k = fa; k < a.length; k++) ops.push([" ", a[k], k, fb + (k - fa)]);
  const mudadas = ops.filter(x => x[0] !== " ").length, hunks = [];
  let k = 0;
  while(k < ops.length){
    if(ops[k][0] === " "){ k++; continue; }
    let s = Math.max(0, k - ctx), e = k;
    while(e < ops.length){
      let prox = e; while(prox < ops.length && ops[prox][0] === " ") prox++;
      if(prox >= ops.length || prox - e > 2 * ctx){ e = Math.min(ops.length, e + ctx); break; }
      e = prox + 1;
    }
    const h = ops.slice(s, e);
    hunks.push("@@ -" + (h[0][2] + 1) + " +" + (h[0][3] + 1) + " @@\n" + h.map(x => x[0] + x[1]).join("\n"));
    k = e;
  }
  return {mudadas, hunks};
}

// Compara dois pacotes arquivo por arquivo, com o carimbo das duas versoes neutralizado.
function delta(velho, novo){
  const norm = s => s.split(velho.versao).join("X.Y.Z").split(novo.versao).join("X.Y.Z");
  const V = new Map(velho.files.map(f => [f.real, f])), N = new Map(novo.files.map(f => [f.real, f]));
  const itens = [];
  [...new Set([...N.keys(), ...V.keys()])].forEach(real => {
    const v = V.get(real), n = N.get(real), nature = (n || v).nature;
    if(!v){ itens.push({real, nature, situacao: "novo", mudadas: n.content.split("\n").length, hunks: []}); return; }
    if(!n){ itens.push({real, nature, situacao: "saiu do pacote", mudadas: 0, hunks: []}); return; }
    if(v.content === n.content){ itens.push({real, nature, situacao: "igual", mudadas: 0, hunks: []}); return; }
    const d = diffLinhas(norm(v.content).split("\n"), norm(n.content).split("\n"));
    itens.push({real, nature, situacao: d.mudadas ? "mudou" : "só o carimbo", mudadas: d.mudadas, hunks: d.hunks});
  });
  const fusao = itens.filter(x => x.nature !== "do-kit" && x.situacao !== "saiu do pacote").reduce((t, x) => t + x.mudadas, 0);
  return {de: velho.versao, para: novo.versao, itens, fusao, acimaDoTeto: fusao > TETO};
}

function cerca(s){ const r = (s.match(/`+/g) || []).reduce((t, x) => Math.max(t, x.length), 0); return "`".repeat(Math.max(3, r + 1)); }

function renderDelta(d, o){
  const L = [];
  L.push("# _DELTA.md — o que mudou no pacote desde a versão deste projeto");
  L.push("");
  if(d.semBase){
    L.push("> Gerado por `tools/pacote-delta.js` do KCM. **Sem base:** este projeto foi gerado num kit anterior ao pacote de update" + (o.commit ? " (commit `" + o.commit + "`)" : "") + ", e não há pacote antigo para comparar. **Faça o merge completo** do `_UPDATE-PROMPT.md` (v" + d.para + "); este arquivo não traz trechos.");
    return L.join("\n") + "\n";
  }
  L.push("> Gerado por `tools/pacote-delta.js` do KCM: o pacote da **v" + d.de + "**" + (o.commit ? " (commit `" + o.commit + "`)" : "") + " e o da **v" + d.para + "**, com o mesmo nicho (`" + o.nicho + "`), os mesmos modos (Code: " + (o.code ? "sim" : "não") + "; canal: " + (o.mount ? "mount" : "pasta") + ") e o mesmo perfil (" + (o.perfilNome || "vazio: o padrão do kit") + "). O carimbo de versão não conta como mudança.");
  L.push("> **Linhas de diff a fundir:** " + d.fusao + " (fora os arquivos `do-kit`, que se trocam inteiros) · **teto: " + TETO + "**.");
  L.push(d.acimaDoTeto
    ? "> **Acima do teto: faça o merge completo** do `_UPDATE-PROMPT.md`. Este arquivo serve só de mapa."
    : "> **Como usar:** funda só os trechos abaixo. Os arquivos «igual» e «só o carimbo» não se comparam: troque-lhes só o carimbo. Os `do-kit` se trocam inteiros, como sempre. A varredura das revogadas e o perfil do manifesto seguem valendo. Trecho que não bate com o arquivo vivo (o projeto especializou aquele ponto) vira pergunta ao dono, como no merge completo.");
  L.push("");
  L.push("| Arquivo | Natureza | Situação | Linhas |");
  L.push("|---|---|---|---|");
  d.itens.forEach(x => L.push("| `" + x.real + "` | " + x.nature + " | " + x.situacao + " | " + x.mudadas + " |"));
  d.itens.filter(x => x.hunks.length).forEach(x => {
    const corpo = x.hunks.join("\n"), f = cerca(corpo);
    L.push(""); L.push("## `" + x.real + "` — " + x.mudadas + " linhas" + (x.nature === "do-kit" ? " (do-kit: troque inteiro; o diff é só para ler)" : ""));
    L.push(""); L.push(f + "diff"); L.push(corpo); L.push(f);
  });
  return L.join("\n") + "\n";
}

function args(argv){
  const o = {code: false, mount: false};
  for(let i = 0; i < argv.length; i++){
    const a = argv[i];
    if(a === "--code") o.code = true; else if(a === "--mount") o.mount = true;
    else if(["--de", "--nicho", "--perfil", "--saida", "--repo"].includes(a)) o[a.slice(2)] = argv[++i];
    else throw new Error("argumento desconhecido: " + a);
  }
  if(!o.de || !o.nicho) throw new Error("uso: node tools/pacote-delta.js --de <versao|commit> --nicho <id> [--code] [--mount] [--perfil perfil.json] [--saida pasta] [--repo pasta]");
  return o;
}

function git(repo, a){ return cp.execFileSync("git", ["-C", repo].concat(a), {encoding: "utf8", maxBuffer: 64 * 1024 * 1024, env: Object.assign({}, process.env, {GIT_OPTIONAL_LOCKS: "0"})}); }

function commitDaVersao(repo, de){
  if(/^[0-9a-f]{7,40}$/.test(de)) return de;
  const v = de.replace(/^v/, ""), alvo = "v" + v + ")";
  const linhas = git(repo, ["log", "--format=%H %s"]).split("\n").filter(l => l.indexOf(alvo) > -1);
  if(linhas.length) return linhas[linhas.length - 1].split(" ")[0].slice(0, 7);
  // reserva: o commit mais antigo em que o index.html passou a dizer KIT_VERSION = "<versao>"
  const s = git(repo, ["log", "--format=%H", "-S", 'KIT_VERSION = "' + v + '"', "--", "index.html"]).trim().split("\n").filter(Boolean);
  if(s.length) return s[s.length - 1].slice(0, 7);
  throw new Error("nenhum commit corta a v" + v + " (nem «" + alvo + "» no titulo, nem KIT_VERSION no index.html); passe o commit em --de");
}

function main(){
  const o = args(process.argv.slice(2));
  const raiz = path.join(__dirname, ".."), repo = o.repo || raiz;
  o.commit = commitDaVersao(repo, o.de);
  if(o.perfil){ o.perfilNome = "`" + path.basename(o.perfil) + "`"; o.perfil = JSON.parse(fs.readFileSync(o.perfil, "utf8")); }
  let velho = null;
  try { velho = pacote(carregar(git(repo, ["show", o.commit + ":index.html"])), o); }
  catch(e){ if(!/nao gerava pacote de update/.test(e.message)) throw e; }
  const novo = pacote(carregar(fs.readFileSync(path.join(raiz, "index.html"), "utf8")), o);
  const d = velho ? delta(velho, novo) : {de: "(anterior ao pacote de update)", para: novo.versao, itens: [], fusao: 0, acimaDoTeto: true, semBase: true};
  const saida = o.saida || path.join(raiz, "..", novo.pasta);
  if(fs.existsSync(saida) && fs.readdirSync(saida).length) throw new Error("a pasta de saida ja tem arquivos, nada foi gravado: " + saida);
  fs.mkdirSync(saida, {recursive: true});
  novo.files.forEach(f => { const p = path.join(saida, f.flat); fs.mkdirSync(path.dirname(p), {recursive: true}); fs.writeFileSync(p, f.content); });
  fs.writeFileSync(path.join(saida, "_UPDATE-MANIFEST.md"), novo.manifest);
  if(novo.prompt) fs.writeFileSync(path.join(saida, "_UPDATE-PROMPT.md"), novo.prompt);
  fs.writeFileSync(path.join(saida, "_DELTA.md"), renderDelta(d, o));
  if(d.semBase){ console.log("sem base (" + o.commit + ": anterior ao pacote de update) -> v" + d.para + " · " + o.nicho + " · " + novo.files.length + " arquivos · MERGE COMPLETO · " + saida); return; }
  const mud = d.itens.filter(x => x.situacao !== "igual" && x.situacao !== "só o carimbo").length;
  console.log("v" + d.de + " (" + o.commit + ") -> v" + d.para + " · " + o.nicho + " · " + d.itens.length + " arquivos, " + mud + " com mudanca · " + d.fusao + " linhas a fundir (teto " + TETO + (d.acimaDoTeto ? ": ACIMA, merge completo" : "") + ") · " + saida);
}

module.exports = {carregar, pacote, diffLinhas, delta, renderDelta, TETO};
if(require.main === module){ try { main(); } catch(e){ console.error("pacote-delta: " + e.message); process.exit(1); } }
