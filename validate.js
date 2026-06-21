// validate.js — harness do Kit de Contexto Universal (reconstruido da receita CONTEXT §3)
// Uso: node validate.js [caminho/para/index.html]   (default: index.html)
// REGRA DE OURO: 17/17 nichos, 0 erros. Anti-testes em anti-test.js.
const fs = require("fs");
const { JSDOM } = require("jsdom");

const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes};';

function loadT(htmlPath){
  const html = fs.readFileSync(htmlPath, "utf8");
  const m = html.match(/<script>([\s\S]*?)<\/script>/);
  if(!m) throw new Error("bloco <script> nao encontrado em " + htmlPath);
  let code = m[1];
  code = code.replace(/\nboot\(\);?\s*$/m, "\n" + SHIM + "\n");
  if(!code.includes("window.__T")) code += "\n" + SHIM + "\n";
  // node --check do script extraido (sintaxe)
  new Function(code); // lanca SyntaxError se invalido
  const dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>", {
    runScripts: "dangerously", url: "https://localhost/", pretendToBeVisual: true
  });
  const s = dom.window.document.createElement("script");
  s.textContent = code;
  dom.window.document.body.appendChild(s);
  if(!dom.window.__T) throw new Error("__T nao foi populado (erro de execucao do script)");
  return dom.window.__T;
}

// ---- runner ----
const path = process.argv[2] || "index.html";
const results = [];
let T;
function check(name, fn){
  try { const d = fn(); results.push({name, ok:true, detail: d||""}); }
  catch(e){ results.push({name, ok:false, detail: e.message}); }
}
function assert(cond, msg){ if(!cond) throw new Error(msg||"assercao falhou"); return true; }

try { T = loadT(path); }
catch(e){ console.error("FALHA AO CARREGAR:", e.message); process.exit(2); }

const ids = Object.keys(T.NICHES);

// ============ GLOBAIS ============
check("G1 shim/__T populado, 14 chaves, 17 nichos", () => {
  assert(T && Object.keys(T).length >= 12, "poucas chaves no shim");
  assert(ids.length === 17, "esperado 17 nichos, achou " + ids.length);
  return ids.length + " nichos";
});

check("G2 BEHAVIORS_BASE = 13 (P12/P13 no fim)", () => {
  assert(T.BEHAVIORS_BASE.length === 13, "esperado 13, achou " + T.BEHAVIORS_BASE.length);
  const last = T.BEHAVIORS_BASE.slice(-2).map(b=>b[0]);
  assert(last[0] === "shrink_hygiene" && last[1] === "research_refute", "P12/P13 fora de ordem: " + last.join(","));
  return "13 ok";
});

check("G3 buildHub smoke (Canone Central + D1..D6 + codigos curados)", () => {
  const hub = T.buildHub();
  assert(/C.none Central/.test(hub), "sem Canone Central");
  assert(/Identificad/.test(hub), "sem tabela de identificadores");
  ["D1","D2","D3","D4","D5","D6"].forEach(d => assert(new RegExp("\\b"+d+"\\b").test(hub), "sem "+d));
  return "len " + hub.length;
});

check("G3b variador de duplicata (DEV0/DEV1; unico sem sufixo)", () => {
  const dup = T.computeCodes([{niche:"dev"},{niche:"dev"},{niche:"design"}]);
  assert(dup[0] === "DEV0" && dup[1] === "DEV1", "variador falhou: " + JSON.stringify(dup));
  assert(dup[2] === "DSGN", "codigo curado design errado: " + dup[2]);
  const one = T.computeCodes([{niche:"dev"}]);
  assert(one[0] === "DEV", "unico nao deveria ter sufixo: " + one[0]);
  return JSON.stringify(dup);
});

check("G4 switch HUB round-trip (dev: no->sem / yes->com)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.groupMode = "no";
  const noHub = T.buildClaudeMd(dev);
  T.STATE.topbar.groupMode = "yes";
  const yesHub = T.buildClaudeMd(dev);
  T.STATE.topbar.groupMode = "no";
  assert(!/HUB/.test(noHub), "groupMode=no nao deveria ter HUB");
  assert(/HUB/.test(yesHub), "groupMode=yes deveria ter HUB");
  assert(noHub !== yesHub, "round-trip nao alterou o CEREBRO.md");
  return "ok";
});

check("G5 switch ASU round-trip (dev: no->sem / yes->com diretriz+comando)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.asuMode = "no";
  const noAsu = T.buildClaudeMd(dev);
  T.STATE.topbar.asuMode = "yes";
  const yesAsu = T.buildClaudeMd(dev);
  T.STATE.topbar.asuMode = "no";
  assert(!/Sa.da de c.digo via ASU/.test(noAsu), "asuMode=no nao deveria ter a diretriz ASU");
  assert(/Sa.da de c.digo via ASU/.test(yesAsu), "asuMode=yes deveria ter a diretriz ASU");
  assert(/python -m src apply/.test(yesAsu), "diretriz ASU sem o comando de aplicacao");
  assert(/INSTRUCTION_GUIDE\.md/.test(yesAsu), "diretriz ASU sem apontar o guia");
  assert(noAsu !== yesAsu, "round-trip do ASU nao alterou o CEREBRO.md");
  return "ok";
});

// ============ POR NICHO (17) ============
const COMP = "Princípios universais (definição completa no CEREBRO.md)";
ids.forEach(id => {
  check("N["+id+"] Instr+CEREBRO, teto 6500, universais comprimidos, sem undefined, IDEAS/HUB, chips", () => {
    const n = T.normNiche(T.NICHES[id]);
    const instr = T.buildInstr(n);
    const cmd = T.buildClaudeMd(n);
    assert(instr && instr.length > 200, "Instrucoes vazias/curtas");
    assert(cmd && cmd.length > 1000, "CEREBRO.md vazio/curto");
    assert(instr.length <= 6500, "Instrucao excede 6500: " + instr.length);
    assert(instr.includes(COMP), "linha comprimida dos universais ausente");
    // P12/P13 dentro da linha comprimida
    const compline = instr.split("\n").find(l => l.includes(COMP)) || "";
    assert(/encolher/i.test(compline), "P12 (higiene ao encolher) ausente na linha comprimida");
    assert(/refut/i.test(compline), "P13 (refutar) ausente na linha comprimida");
    assert(!/undefined/.test(instr), "'undefined' nas Instrucoes");
    assert(!/undefined/.test(cmd), "'undefined' no CEREBRO.md");
    // arquivos: exatamente 1 IDEAS, 0 HUB.md
    const files = T.effectiveFiles(n).map(f => f.name);
    const ideas = files.filter(nm => /^IDE(A|IA)S\.md$/i.test(nm));
    assert(ideas.length === 1, "IDEAS.md deveria aparecer 1x, achou " + ideas.length);
    assert(!files.some(nm => /HUB\.md/i.test(nm)), "HUB.md nao deve entrar no download por-nicho");
    // chips FIX-004: opts sempre [v,l]
    const sec = n.builderSection;
    if(sec){
      const norm = T.normBuilderSection(sec);
      const groups = norm.groups || [];
      groups.forEach(g => (g.opts||[]).forEach(o => {
        assert(Array.isArray(o) && o.length === 2, "chip nao normalizado para [v,l] em "+id+": "+JSON.stringify(o));
      }));
    }
    return "instr " + instr.length;
  });
});

// ============ DIRETRIZES VERSIONADAS (ancoradas em texto real) ============
const dev = T.normNiche(T.NICHES.dev);
const devCmd = T.buildClaudeMd(dev);

check("C1 D-018 mount (upload direto + conector do GitHub) no CEREBRO.md", () => {
  assert(/upload direto/i.test(devCmd), "sem 'upload direto'");
  assert(/conector do GitHub/i.test(devCmd), "sem 'conector do GitHub'");
  return "ok";
});
check("C2 i-N19 'pista, nao fato' (P8 refinado)", () => {
  assert(/pista, n.o fato/i.test(devCmd), "sem 'STATUS e pista, nao fato'"); return "ok";
});
check("C3 i-N22 valvula de desvio registrado", () => {
  assert(/Desviar SEM registrar/i.test(devCmd), "sem valvula de desvio"); return "ok";
});
check("C4 i-N21 «Feedback para o Kit»", () => {
  assert(/Feedback para o Kit/i.test(devCmd), "sem gatilho Feedback para o Kit"); return "ok";
});
check("C5 IDEAS universal 'CRIA na primeira necessidade'", () => {
  assert(/CRIA na primeira necessidade/i.test(devCmd), "sem regra de criacao do IDEAS"); return "ok";
});
check("C6 personalizacao das Instrucoes (v1.32.0)", () => {
  assert(/adaptar as Instru..es do Projeto a ESTE projeto/i.test(devCmd), "sem diretriz de personalizacao"); return "ok";
});
check("C7 game: ROTEIRO + AGUARDANDO DESIGN + '## Código / build' (conteudo de template)", () => {
  const game = T.normNiche(T.NICHES.game);
  const files = T.effectiveFiles(game);
  assert(files.some(f => /ROTEIRO\.md/i.test(f.name)), "sem ROTEIRO.md");
  const blob = files.map(f => f.content || "").join("\n");
  assert(/AGUARDANDO DESIGN/.test(blob), "sem AGUARDANDO DESIGN no conteudo");
  assert(/##\s*Código \/ build/.test(blob), "sem secao Codigo / build no LOG do game");
  return "ok";
});
check("C8 narrative: writes_prose ('Escreve com o autor') + kishotenketsu", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  const nc = T.buildClaudeMd(narr);
  assert(/Escreve com o autor/i.test(nc), "sem behavior writes_prose");
  assert(/kish.tenketsu/i.test(nc), "sem kishotenketsu");
  return "ok";
});
check("C9 game: builds_game ('Cria o jogo, não só o documento')", () => {
  const game = T.normNiche(T.NICHES.game);
  const gc = T.buildClaudeMd(game);
  assert(/Cria o jogo, n.o s. o documento/i.test(gc), "sem behavior builds_game"); return "ok";
});

// ============ SUMARIO ============
const fail = results.filter(r => !r.ok);
console.log("\n=== HARNESS — " + path + " ===");
results.forEach(r => console.log((r.ok ? "  ok  " : " FAIL ") + r.name + (r.detail ? "  ["+r.detail+"]" : "")));
const nicheChecks = results.filter(r => /^N\[/.test(r.name));
const nicheOk = nicheChecks.filter(r => r.ok).length;
console.log("\nNichos: " + nicheOk + "/" + nicheChecks.length + " verdes | Checagens totais: " + (results.length - fail.length) + "/" + results.length);
if(fail.length){ console.log("RESULTADO: VERMELHO (" + fail.length + " falha(s))"); process.exit(1); }
console.log("RESULTADO: VERDE — 17/17, 0 erros");
