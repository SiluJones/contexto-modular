// validate.js — harness do Kit de Contexto Universal (reconstruido da receita CONTEXT §3)
// Uso: node validate.js [caminho/para/index.html]   (default: index.html)
// REGRA DE OURO: 18/18 nichos, 0 erros. Anti-testes em anti-test.js.
const fs = require("fs");
const { JSDOM } = require("jsdom");

const SHIM = 'window.__T = {NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles, PROMPTS_BASE};';

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
check("G1 shim/__T populado, 14 chaves, 18 nichos", () => {
  assert(T && Object.keys(T).length >= 12, "poucas chaves no shim");
  assert(ids.length === 18, "esperado 18 nichos, achou " + ids.length);
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

check("G4 switch HUB round-trip (dev: no->sem / yes->com; grupo fora do topbar)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="groupMode"), "groupMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.groupMode = "no";
  const noHub = T.buildClaudeMd(dev);
  T.STATE.workmode.groupMode = "yes";
  const yesHub = T.buildClaudeMd(dev);
  T.STATE.workmode.groupMode = "no";
  assert(!/HUB/.test(noHub), "groupMode=no nao deveria ter HUB");
  assert(/HUB/.test(yesHub), "groupMode=yes deveria ter HUB");
  assert(noHub !== yesHub, "round-trip nao alterou o CEREBRO.md");
  return "ok";
});

check("G5 switch ASU round-trip (dev: no->sem / yes->com diretriz+comando)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="asuMode"), "asuMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.asuMode = "no";
  const noAsu = T.buildClaudeMd(dev);
  T.STATE.workmode.asuMode = "yes";
  const yesAsu = T.buildClaudeMd(dev);
  T.STATE.workmode.asuMode = "no";
  assert(!/Sa.da de c.digo via ASU/.test(noAsu), "asuMode=no nao deveria ter a diretriz ASU");
  assert(/Sa.da de c.digo via ASU/.test(yesAsu), "asuMode=yes deveria ter a diretriz ASU");
  assert(/python -m src apply/.test(yesAsu), "diretriz ASU sem o comando de aplicacao");
  assert(/INSTRUCTION_GUIDE\.md/.test(yesAsu), "diretriz ASU sem apontar o guia");
  assert(noAsu !== yesAsu, "round-trip do ASU nao alterou o CEREBRO.md");
  return "ok";
});

check("G6 skills-pack (narrative: controle no builder, default LIGADO, fora do topbar; ponteiro no CEREBRO)", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  T.STATE.builder = T.STATE.builder || {};
  // default LIGADO: builder sem skillsMode => skills ativas
  delete T.STATE.builder.skillsMode;
  const defSk = T.buildClaudeMd(narr);
  assert(/Skills de escrita/i.test(defSk), "default deveria ser LIGADO (secao de skills presente sem setar nada)");
  T.STATE.builder.skillsMode = "no";
  const noSk = T.buildClaudeMd(narr);
  T.STATE.builder.skillsMode = "yes";
  const yesSk = T.buildClaudeMd(narr);
  delete T.STATE.builder.skillsMode;
  assert(!/Skills de escrita/i.test(noSk), "skillsMode=no nao deveria ter a secao de skills");
  assert(/Skills de escrita/i.test(yesSk), "skillsMode=yes nao deveria ter a secao de skills");
  // ponteiro: os NOMES das 4 skills aparecem na tabela de gatilhos
  assert(/escrita-serial/.test(yesSk) && /checagem-continuidade/.test(yesSk) && /voz-calibragem/.test(yesSk) && /textura-mundo/.test(yesSk), "ponteiro sem alguma das 4 skills");
  // corpo NAO vaza pro CEREBRO
  assert(!/name: escrita-serial/.test(yesSk), "corpo da skill (frontmatter) vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/<!-- Preencha com o específico/.test(yesSk), "stub vazou pro CEREBRO — deveria ficar so no zip");
  assert(!/pode apagar este ap.ndice/i.test(yesSk), "instrucao autodestrutiva nao pode existir no CEREBRO");
  assert(/skills\.zip/i.test(yesSk), "ponteiro sem apontar o pacote skills.zip");
  assert(noSk !== yesSk, "round-trip do skills-pack nao alterou o CEREBRO.md");
  // buildSkillMd rende um SKILL.md valido
  const md = T.buildSkillMd(narr.skillsPack.skills[0]);
  assert(/^---\nname: escrita-serial\ndescription: /.test(md), "buildSkillMd sem frontmatter valido");
  assert(/Aplicação neste projeto/.test(md), "buildSkillMd sem a secao 'Aplicacao neste projeto'");
  // o controle SAIU do topbar (nao esta mais entre os toggles universais)
  assert(!(narr.topbar||[]).some(t=>t.id==="skillsMode"), "skillsMode NAO deveria mais estar no topbar (moveu pro builder)");
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="skillsMode"), "dev nunca teve skillsMode no topbar");
  return "ok";
});

check("G7 modo Code (dev: kit vira download separado, ponteiro no CEREBRO, sem inline nem 'apagar')", () => {
  const dev = T.normNiche(T.NICHES.dev);
  assert(!(dev.topbar||[]).some(t=>t.id==="codeMode"), "codeMode NAO deveria mais estar no topbar (moveu pro painel Modo de trabalho)");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.codeMode = "no";
  const noC = T.buildClaudeMd(dev);
  T.STATE.workmode.codeMode = "yes";
  const yesC = T.buildClaudeMd(dev);
  T.STATE.workmode.codeMode = "no";
  assert(!/Kit de arranque do Claude Code/i.test(noC), "codeMode=no nao deveria ter a secao do kit");
  assert(/Kit de arranque do Claude Code/i.test(yesC), "codeMode=yes deveria ter a secao (ponteiro) do kit");
  assert(/claude-code-kit\.zip/i.test(yesC), "ponteiro sem apontar o pacote claude-code-kit.zip");
  assert(!/pode apagar este ap.ndice/i.test(yesC), "instrucao autodestrutiva 'apagar apendice' nao pode existir no CEREBRO");
  assert(!/<NOME DO PROJETO> — guia para o Claude Code/.test(yesC), "conteudo do CLAUDE.md vazou inline pro CEREBRO — deveria ficar so no zip");
  assert(!/"deny": \["Bash\(rm -rf/.test(yesC), "conteudo do settings.json vazou inline pro CEREBRO — deveria ficar so no zip");
  assert(noC !== yesC, "round-trip do modo Code nao alterou o CEREBRO.md");
  const f = T.buildCodeKitFiles();
  assert(/^# <NOME DO PROJETO>/.test(f.claudeMd) && /< 200 linhas/.test(f.claudeMd), "CLAUDE.md starter invalido");
  assert(/"permissions"/.test(f.settings) && /"deny"/.test(f.settings), "settings.json starter invalido");
  assert(/^---\nname: apply-spec\ndescription: /.test(f.applySpec) && /disable-model-invocation: true/.test(f.applySpec), "apply-spec nao esta no formato Skill atual");
  assert(/^---\nname: wrap\ndescription: /.test(f.wrap) && /disable-model-invocation: true/.test(f.wrap), "wrap nao esta no formato Skill atual");
  return "ok";
});

check("G8 selos de estado: presente quando liga / ausente quando desliga / ordem estavel (grupo, Code, ASU)", () => {
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.groupMode = "no"; T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "no";
  assert(T.workBadges().length === 0, "nenhum modo ligado deveria dar 0 selos");
  T.STATE.workmode.groupMode = "yes"; T.STATE.workmode.codeMode = "yes"; T.STATE.workmode.asuMode = "yes";
  const all = T.workBadges().map(s=>s.id);
  assert(all.length === 3, "3 modos ligados deveriam dar 3 selos, deu " + all.length);
  assert(all.join(",") === "group,code,asu", "ordem instavel: " + all.join(","));
  T.STATE.workmode.groupMode = "no"; T.STATE.workmode.codeMode = "no";
  const one = T.workBadges();
  assert(one.length === 1 && one[0].id === "asu", "so ASU ligado deveria dar so o selo ASU");
  assert(/»/.test(one[0].glyph), "selo ASU deveria usar o chevron duplo »");
  T.STATE.workmode.asuMode = "no";
  return "ok";
});

// ============ POR NICHO (18) ============
const COMP = "Princípios universais (definição completa no CEREBRO.md)";
ids.forEach(id => {
  check("N["+id+"] Instr+CEREBRO, teto 6900, universais comprimidos, sem undefined, IDEAS/HUB, chips", () => {
    const n = T.normNiche(T.NICHES[id]);
    const instr = T.buildInstr(n);
    const cmd = T.buildClaudeMd(n);
    assert(instr && instr.length > 200, "Instrucoes vazias/curtas");
    assert(cmd && cmd.length > 1000, "CEREBRO.md vazio/curto");
    assert(instr.length <= 6900, "Instrucao excede 6900: " + instr.length);
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
      const grupos = norm.items || norm.groups || [];   // formato normalizado e .items (FIX spec0042)
      assert(grupos.length > 0, "builderSection sem itens apos normalizar em " + id);
      grupos.forEach(g => (g.opts||[]).forEach(o => {
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
check("C8 narrative: writes_prose + modos de colaboração + disciplina-sanduíche + kishotenketsu", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  const nc = T.buildClaudeMd(narr);
  assert(/Escreve com o autor/i.test(nc), "sem behavior writes_prose");
  assert(/RASCUNHO DIRIGÍVEL/i.test(nc) && /DIREÇÃO CRIATIVA/i.test(nc), "sem os dois modos de colaboração");
  assert(!/A IA não escreve a história/i.test(nc), "never_writes ainda presente (contradição)");
  assert(/capability bleeding/i.test(nc), "sem erro nomeado: capability bleeding");
  assert(/Lista de invariantes/i.test(nc), "sem auditoria pós-escrita (Lista de invariantes)");
  assert(/A PARTIR do estado atual/i.test(nc), "sem princípio estado-atual-vs-plano");
  assert(/kish.tenketsu/i.test(nc), "sem kishotenketsu");
  const contFile = (narr.contextFiles||[]).find(f=>/CONTINUIDADE/i.test(f.name));
  assert(contFile && /Estado atual/i.test(contFile.content) && /Lista de invariantes/i.test(contFile.content), "CONTINUIDADE sem Estado atual / Lista de invariantes");
  const persFile = (narr.contextFiles||[]).find(f=>/PERSONAGENS/i.test(f.name));
  assert(persFile && /Tell físico/i.test(persFile.content), "PERSONAGENS sem tell físico");
  return "ok";
});
check("C9 game: builds_game ('Cria o jogo, não só o documento')", () => {
  const game = T.normNiche(T.NICHES.game);
  const gc = T.buildClaudeMd(game);
  assert(/Cria o jogo, n.o s. o documento/i.test(gc), "sem behavior builds_game"); return "ok";
});

check("G9 update-pack: nomes planos unicos, manifesto presente, modos gatilham, CEREBRO/INSTRUCOES = fusao (dev)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.builder  = T.STATE.builder  || {};
  // modos alvo desligados
  T.STATE.workmode.codeMode = "no";
  T.STATE.builder.skillsMode = "no";
  const p0 = T.buildUpdatePack(dev);
  assert(p0 && p0.files && p0.files.length, "pack vazio");
  assert(/kcm-update-manifest/.test(p0.manifest), "manifesto ausente/sem assinatura");
  const flats0 = p0.files.map(f => f.flat);
  assert(new Set(flats0).size === flats0.length, "nomes planos colidiram: " + flats0.join(","));
  assert(flats0.every(n => n.indexOf("__template-update") > 0), "algum nome sem o afixo __template-update");
  assert(!p0.files.some(f => /^\.claude|^CLAUDE\.md$/.test(f.real)), "kit-Code entrou com Code desligado");
  assert(p0.files.some(f => f.real === "meta/CEREBRO.md" && f.nature === "fusao"), "CEREBRO deveria ser fusao");
  assert(p0.files.some(f => f.real === "INSTRUCOES-DO-PROJETO.md" && f.nature === "fusao"), "INSTRUCOES deveria ser fusao");
  // com Code ligado, o kit entra e os nomes seguem unicos
  T.STATE.workmode.codeMode = "yes";
  const p1 = T.buildUpdatePack(dev);
  const flats1 = p1.files.map(f => f.flat);
  assert(new Set(flats1).size === flats1.length, "nomes planos colidiram com Code: " + flats1.join(","));
  assert(p1.files.some(f => f.real === ".claude/settings.json"), "kit-Code nao entrou com Code ligado");
  T.STATE.workmode.codeMode = "no";
  return "ok";
});

check("G10 update-prompt: disparo para IA (compara/nao-sobrescreve) e SEM blocos de diff (regra dura de entrega)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const s = T.buildUpdatePrompt(dev);
  assert(s && s.length > 0, "prompt vazio");
  assert(/compare/i.test(s), "prompt sem a rotina de comparacao");
  assert(/nunca sobrescreva|substituicao cega/i.test(s), "prompt sem a regra de nao-sobrescrever");
  assert(s.indexOf("```") === -1, "prompt NAO pode conter blocos de diff (fere a regra dura de entrega)");
  return "ok";
});

check("G11 downloads completos: gerados (CEREBRO em meta/, INSTRUCOES) na fonte compartilhada", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const gen = T.generatedContextFiles(dev);
  assert(gen.some(f => f.name === "CEREBRO.md" && f.meta === true && f.content && f.content.length), "CEREBRO ausente/errado nos gerados");
  assert(gen.some(f => f.name === "INSTRUCOES-DO-PROJETO.md" && f.meta === false && f.content && f.content.length), "INSTRUCOES ausente/errado nos gerados");
  return "ok";
});

check("G12 CEREBRO ensina a lidar com template-update (Fase C, i-N40)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const c = T.buildClaudeMd(dev);
  assert(/template-update/.test(c), "CEREBRO sem o protocolo de template-update");
  assert(/nunca sobrescreve|substituição cega|substituicao cega/i.test(c), "protocolo sem a regra de nao-sobrescrever");
  assert(/fusao|fusão/i.test(c), "protocolo sem a distincao template/fusao");
  return "ok";
});

check("G13 update-pack inclui os ignores (.gitignore e .flatdropignore)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const p = T.buildUpdatePack(dev);
  assert(p.files.some(f => f.real === ".gitignore" && f.content && f.content.length), "update pack sem .gitignore");
  assert(p.files.some(f => f.real === ".flatdropignore" && f.content && f.content.length), "update pack sem .flatdropignore");
  const flats = p.files.map(f => f.flat);
  assert(new Set(flats).size === flats.length, "nomes planos colidiram ao somar os ignores");
  return "ok";
});

check("G14 transferencia mode-aware: Code NAO regenera meta; vanilla so o que mudou; brief nao vence os arquivos", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const E = T.PROMPTS_BASE.find(x => x.id === "E");
  const F = T.PROMPTS_BASE.find(x => x.id === "F");
  assert(E && F, "prompts E/F ausentes");
  T.STATE.workmode = T.STATE.workmode || {};
  T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "no"; T.STATE.workmode.groupMode = "no";
  const vanilla = E.body({}, dev);
  assert(/HANDOFF-BRIEF/.test(vanilla), "transferencia sem HANDOFF-BRIEF");
  assert(/apenas os arquivos que mudaram/i.test(vanilla), "vanilla deveria pedir so os arquivos que mudaram");
  assert(!/gere todos os arquivos de contexto/i.test(vanilla), "voltou o anti-padrao de regenerar tudo");
  T.STATE.workmode.codeMode = "yes";
  const code = E.body({}, dev);
  assert(/n[aã]o regenere/i.test(code), "modo Code deveria proibir regenerar os meta no chat");
  assert(/commitado|commit/i.test(code), "modo Code deveria exigir commit/push antes de transferir");
  T.STATE.workmode.codeMode = "no"; T.STATE.workmode.asuMode = "yes";
  const asu = E.body({}, dev);
  assert(/\.yaml|ASU/i.test(asu), "modo ASU deveria mandar as edicoes por instrucao .yaml");
  T.STATE.workmode.asuMode = "no";
  const f = F.body({}, dev);
  assert(/ARQUIVOS vencem/i.test(f), "retomada sem a regra de precedencia (arquivos vencem o brief)");
  return "ok";
});

check("G15 nicho career: campos chegam a saida, behaviors-chave e arquivos do dossie", () => {
  const c = T.NICHES.career;
  assert(c, "nicho career ausente");
  const n = T.normNiche(c);
  const keys = (n.behaviors||[]).map(b => b.id || b[0]);
  ["evidence_first","scope_ledger","benchmark_sourced","counterargue_before_irreversible","mine_projects","vent_is_not_fact"]
    .forEach(k => assert(keys.includes(k), "behavior ausente no career: " + k));
  const files = T.effectiveFiles(n).map(f => f.name);
  ["EVIDENCIAS.md","DOSSIE.md","SITUACAO.md","MERCADO.md","PLANO.md","DECISIONS.md"]
    .forEach(f => assert(files.includes(f), "arquivo ausente no career: " + f));
  // spec0033: campo de topbar precisa CHEGAR ao buildInstr (nao pode ser metadado morto)
  T.STATE.topbar = T.STATE.topbar || {};
  T.STATE.topbar.momentSel = "Negociando na atual";
  T.STATE.topbar.frentes = ["Aumento/revisão de cargo","Estudo"];
  const instr = T.buildInstr(n);
  assert(/Momento: Negociando na atual/.test(instr), "campo Momento nao chegou as Instrucoes");
  assert(/Aumento\/revis.o de cargo/.test(instr), "campo Frentes (multi) nao chegou as Instrucoes");
  assert(instr.length <= 6900, "instrucao do career excede 6900: " + instr.length);
  T.STATE.topbar.momentSel = ""; T.STATE.topbar.frentes = [];
  return "ok";
});

check("G16 teto no PIOR CASO (todos os chips/multi marcados) <= 7600 em todos os nichos", () => {
  const over = [];
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    T.STATE.builder = {}; T.STATE.topbar = {};
    const sec = n.builderSection ? T.normBuilderSection(n.builderSection) : null;
    if(sec) (sec.items || sec.groups || []).forEach(g => { T.STATE.builder[g.name] = (g.opts||[]).map(o => o[0]); });
    (n.topbar||[]).forEach(f => { if(f.type === "multi") T.STATE.topbar[f.id] = (f.options || f.opts || []).slice(); });
    const len = T.buildInstr(n).length;
    if(len > 7600) over.push(id + ":" + len);
  });
  T.STATE.builder = {}; T.STATE.topbar = {};
  assert(over.length === 0, "estouraram o teto de pior caso -> " + over.join(", "));
  return "ok";
});

check("G17 SO vive no modal e o DOM vem antes do script (D-059)", () => {
  const html = fs.readFileSync(path, "utf8");
  const dlg = html.indexOf('id="cfg-dialog"');
  const os  = html.indexOf('id="g-os"');
  const scr = html.lastIndexOf("<script>");
  assert(dlg > 0 && os > 0, "cfg-dialog ou g-os ausentes");
  assert(os > dlg, "o select do SO nao esta dentro do modal de configuracoes");
  assert(os < scr, "DOM do SO depois do <script> final (D-059: listener anexaria em null)");
  const gameTb = T.NICHES.game.topbar || [];
  ["engineSel","phase"].forEach(fid => {
    const f = gameTb.find(x => x.id === fid);
    assert(f && f.panel === "modal", "campo " + fid + " do game deveria ter panel:modal");
  });
  return "ok";
});

check("G18 career: area-alvo e fronteiras sao chips multiplos e amplos", () => {
  const n = T.normNiche(T.NICHES.career);
  const sec = T.normBuilderSection(n.builderSection);
  const it = (k) => (sec.items || []).find(g => g.name === k);
  ["target","limits"].forEach(k => {
    const g = it(k);
    assert(g, "grupo ausente no career: " + k);
    assert(g.kind === "chips", "grupo " + k + " deveria ser chips (multipla escolha)");
    assert((g.opts||[]).length >= 10, "grupo " + k + " com poucas opcoes: " + (g.opts||[]).length);
  });
  return "ok";
});

check("G19 CEREBRO ensina a refinar as proprias Instrucoes (orcamento, sem perder processo)", () => {
  const n = T.normNiche(T.NICHES.dev);
  const md = T.buildClaudeMd(n);
  assert(/## Refino das Instruções do Projeto/.test(md), "secao de refino ausente no CEREBRO");
  assert(/6\.?900/.test(md), "o teto de caracteres nao aparece na secao de refino");
  assert(/DECISIONS/.test(md) && /Feedback para o Kit/.test(md), "refino sem registro em DECISIONS/IDEAS");
  return "ok";
});

check("G20 paleta unificada: cardColor == cor da pagina (--amber) em TODOS os nichos", () => {
  const html = fs.readFileSync(path, "utf8");
  const faltando = [], divergente = [];
  Object.keys(T.NICHES).forEach(id => {
    const re = new RegExp('html\\[data-niche="' + id + '"\\]\\{[^}]*--amber:\\s*(#[0-9a-fA-F]{6})');
    const m = html.match(re);
    if(!m){ faltando.push(id); return; }
    const pagina = m[1].toLowerCase();
    const card = String(T.NICHES[id].cardColor || "").toLowerCase();
    if(pagina !== card) divergente.push(id + " card:" + card + " pagina:" + pagina);
  });
  assert(faltando.length === 0, "nicho sem bloco [data-niche] no CSS -> " + faltando.join(", "));
  assert(divergente.length === 0, "card e pagina com cores diferentes -> " + divergente.join(" | "));
  return "ok";
});

check("G21 paleta sem colisao: nenhuma cor principal repetida entre nichos", () => {
  const vistos = {};
  const dup = [];
  Object.keys(T.NICHES).forEach(id => {
    const c = String(T.NICHES[id].cardColor || "").toLowerCase();
    if(vistos[c]) dup.push(c + " -> " + vistos[c] + " e " + id);
    vistos[c] = id;
  });
  assert(dup.length === 0, "cor principal repetida -> " + dup.join(" | "));
  return "ok";
});

// ============ SUMARIO ============
const fail = results.filter(r => !r.ok);
console.log("\n=== HARNESS — " + path + " ===");
results.forEach(r => console.log((r.ok ? "  ok  " : " FAIL ") + r.name + (r.detail ? "  ["+r.detail+"]" : "")));
const nicheChecks = results.filter(r => /^N\[/.test(r.name));
const nicheOk = nicheChecks.filter(r => r.ok).length;
console.log("\nNichos: " + nicheOk + "/" + nicheChecks.length + " verdes | Checagens totais: " + (results.length - fail.length) + "/" + results.length);
if(fail.length){ console.log("RESULTADO: VERMELHO (" + fail.length + " falha(s))"); process.exit(1); }
console.log("RESULTADO: VERDE — " + nicheOk + "/" + nicheChecks.length + ", 0 erros");
