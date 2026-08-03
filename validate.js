// validate.js — harness do Kit de Contexto Universal (reconstruido da receita CONTEXT §3)
// Uso: node validate.js [caminho/para/index.html]   (default: index.html)
// REGRA DE OURO: 18/18 nichos, 0 erros. Anti-testes em anti-test.js.
const fs = require("fs");
const { JSDOM } = require("jsdom");

const SHIM = 'window.__T = {INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE, BEHAVIORS_BASE, normBehaviors, normNiche, normBuilderSection, buildInstr, buildClaudeMd, effectiveFiles, groupModeOn, buildHub, NICHE_CODE, computeCodes, buildSkillMd, buildCodeKitFiles, workBadges, buildUpdatePack, buildUpdatePrompt, generatedContextFiles, PROMPTS_BASE, INSTR_TETO, KIT_VERSION};';

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
  assert(/^---\nname: apply-wo\ndescription: /.test(f.applyWo) && /disable-model-invocation: true/.test(f.applyWo), "apply-wo nao esta no formato Skill atual");
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
  check("N["+id+"] Instr+CEREBRO, teto INSTR_TETO, universais comprimidos, sem undefined, IDEAS/HUB, chips", () => {
    const n = T.normNiche(T.NICHES[id]);
    const instr = T.buildInstr(n);
    const cmd = T.buildClaudeMd(n);
    assert(instr && instr.length > 200, "Instrucoes vazias/curtas");
    assert(cmd && cmd.length > 1000, "CEREBRO.md vazio/curto");
    assert(instr.length <= T.INSTR_TETO, "Instrucao excede " + T.INSTR_TETO + ": " + instr.length);
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
  assert(instr.length <= T.INSTR_TETO, "instrucao do career excede " + T.INSTR_TETO + ": " + instr.length);
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

check("G22 contador de instrucao: INSTR_TETO exposto e a UI le dele (i-N46)", () => {
  assert(typeof T.INSTR_TETO === "number" && T.INSTR_TETO >= 6000, "INSTR_TETO ausente ou improvavel");
  const html = fs.readFileSync(path, "utf8");
  assert(/id="instr-count"/.test(html), "elemento do contador ausente no HTML");
  assert(/function updateInstrCount/.test(html), "funcao updateInstrCount ausente");
  assert(/len \/ INSTR_TETO/.test(html), "contador nao usa INSTR_TETO como base");
  return "ok";
});

check("G23 prompts de setup mode+entrega-aware (i-N42): C/D com ramos por modo, D e F citam _MANIFEST", () => {
  const byId = id => T.PROMPTS_BASE.find(x => x.id === id);
  const C = byId("C"), D = byId("D"), F = byId("F");
  assert(C && D && F, "prompt C, D ou F ausente");
  const cSrc = C.body.toString(), dSrc = D.body.toString(), fSrc = F.body.toString();
  ["codeModeOn","asuModeOn"].forEach(m => {
    assert(cSrc.includes(m), "prompt C nao ramifica por " + m);
    assert(dSrc.includes(m), "prompt D nao ramifica por " + m);
  });
  assert(/_MANIFEST/.test(dSrc), "prompt D nao menciona _MANIFEST.md");
  assert(/_MANIFEST/.test(fSrc), "prompt F nao menciona _MANIFEST.md na retomada");
  assert(/zero/i.test(C.title), "titulo de C nao deixa claro 'do zero'");
  assert(/andamento|existe|existente/i.test(D.title), "titulo de D nao deixa claro 'projeto existente'");
  const dev = T.normNiche(T.NICHES.dev);
  T.STATE.workmode = { codeMode:"yes" };
  const dCode = D.body({}, dev);
  assert(/Modo Code/.test(dCode), "ramo code de D nao disparou (estado workmode)");
  T.STATE.workmode = { asuMode:"yes" };
  const dAsu = D.body({}, dev);
  assert(/Modo ASU/.test(dAsu), "ramo asu de D nao disparou");
  T.STATE.workmode = {};
  return "ok";
});

check("G24 KIT_VERSION exposto, no rodape e carimbado nos downloads (i-N10)", () => {
  assert(typeof T.KIT_VERSION === "string" && /^\d+\.\d+\.\d+$/.test(T.KIT_VERSION), "KIT_VERSION ausente ou fora do padrao semver");
  const html = fs.readFileSync(path, "utf8");
  assert(/KIT_VERSION/.test(html), "KIT_VERSION nao aparece no bundle");
  assert(/\$\{KIT_VERSION\}`;/.test(html), "rodape nao usa KIT_VERSION");
  assert(/function kitStamp/.test(html), "helper kitStamp ausente");
  assert(/Kit de Contexto Universal v\$\{KIT_VERSION\}/.test(html), "downloads nao carimbam a versao");
  return "ok";
});

check("C32 anatomia do bloco gerado (wo0076): cinco regras + duas obrigacoes no CEREBRO, marcadores nao citados em comentario, Arquivos Criticos no CONTEXT, P11 com a metade estrutural", () => {
  [true,false].forEach(codeOn => {
    const ig=T.structuredFlatdropignore(codeOn);
    const abre=(ig.match(/>>> flatdrop-editor/g)||[]).length;
    const fecha=(ig.match(/# <<</g)||[]).length;
    assert(abre===1, "flatdropignore gerado (codeOn="+codeOn+") tem "+abre+" ocorrencias do marcador de abertura — deve ter exatamente 1 (citar em comentario cria bloco fantasma)");
    assert(fecha===1, "flatdropignore gerado (codeOn="+codeOn+") tem "+fecha+" ocorrencias do marcador de fechamento — deve ter exatamente 1");
  });
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    assert(/Anatomia do bloco gerado/.test(cmd), id+": CEREBRO sem a anatomia do bloco gerado");
    assert(/os marcadores não se citam em comentário/.test(cmd), id+": CEREBRO sem a quinta regra (a que se viola ao documentar a convencao)");
    assert(/recusar, não adivinhar/.test(cmd), id+": CEREBRO sem a obrigacao de recusar diante de ambiguidade");
    assert(/normalizar só o que é seu/.test(cmd), id+": CEREBRO sem a obrigacao de normalizar so o proprio bloco");
    assert(/precisa ficar como está/.test(cmd), id+": P11 sem a metade estrutural do rename (caminho, comando, identificador)");
  });
  const dev=T.normNiche(T.NICHES.dev);
  const arq=T.effectiveFiles(dev)||[];
  const ctx=arq.find(f => f.name==="CONTEXT.md"), st=arq.find(f => f.name==="STATUS.md");
  assert(ctx && /Arquivos Críticos/.test(ctx.content||""), "dev: Arquivos Criticos nao esta no CONTEXT.md, onde os prompts o procuram");
  assert(st && !/Arquivos Críticos/.test(st.content||""), "dev: Arquivos Criticos ainda no STATUS.md (dado estavel em documento volatil)");
  return "ok";
});

check("C31 paridade dos templates de nicho (wo0075): IDEAS de todo nicho tem os dois enderecos de feedback, formato legado nao e alternativa, log por DIA acumula sessoes", () => {
  let overrides=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const ideas=(T.effectiveFiles(n)||[]).find(f => f.name==="IDEAS.md");
    assert(ideas, id+": nicho sem IDEAS.md nos arquivos efetivos");
    const c=ideas.content||"";
    assert(/Feedback para o Kit/.test(c), id+": IDEAS.md sem a secao «Feedback para o Kit» que o CEREBRO manda usar");
    assert(/Feedback para o ASU/.test(c), id+": IDEAS.md sem a secao «Feedback para o ASU»");
    if(!/Segundo cérebro do projeto: captura toda ideia/.test(ideas.role||"")) overrides++;
    const cmd=T.buildClaudeMd(n);
    assert(/Duas sessões no mesmo dia = o MESMO arquivo/.test(cmd), id+": tabela de docs nao resolve duas sessoes no mesmo dia");
    assert(/manifesto da cópia achatada já trouxer o estado do repo/.test(cmd), id+": Estado nao usa o estado do repo quando o manifesto o traz");
  });
  assert(overrides>=2, "esperado ao menos 2 nichos com IDEAS.md proprio (dev, brainstorm) — se caiu, o check perdeu o alvo");
  const raw=fs.readFileSync(path,"utf8");
  assert(!/também funcionaria/.test(raw), "o kit ainda apresenta .claude/commands como alternativa valida em algum lugar");
  assert((raw.match(/formato descontinuado/g)||[]).length>=3, "o .claude/commands nao esta marcado como descontinuado nos tres pontos (instalacao, README do zip, protocolo de update)");
  return "ok ("+overrides+" nichos com IDEAS proprio)";
});

check("C30 contrapeso do gatilho de analise + relatorio em arquivo (wo0074): teste barato antes do gatilho, clausula de abandono, kit do Code grava o relatorio", () => {
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    const instr=T.buildInstr(n);
    const iTeste=cmd.indexOf("Antes de escrever, dois testes baratos");
    const iGatilho=cmd.indexOf("Gatilho concreto, além do");
    assert(iTeste>=0, id+": CEREBRO sem os testes baratos que estreitam o gatilho");
    assert(iGatilho>=0, id+": CEREBRO perdeu o gatilho concreto");
    assert(iTeste<iGatilho, id+": o lado que estreita ficou DEPOIS do que alarga (a ordem e o remedio)");
    assert(/Então isto é execução, não análise/.test(cmd), id+": CEREBRO sem o teste do QUE ja decidido");
    assert(/Abandonar no meio é desfecho legítimo/.test(cmd), id+": CEREBRO sem a clausula de abandono");
    assert(/já é extensível\*\* não é mudar o formato/.test(cmd), id+": CEREBRO sem o limite do formato ja extensivel");
    assert(/pergunta a refazer DEPOIS de ler a fonte/.test(cmd), id+": gatilho nao virou pergunta a refazer apos ler a fonte");
    assert(/QUÊ já decidido = execução/.test(instr), id+": Instrucoes levam so o lado que alarga, sem o contrapeso");
  });
  const kit=T.buildCodeKitFiles();
  assert(/## Relatório em arquivo/.test(kit.claudeMd), "CLAUDE.md do kit nao manda gravar o relatorio em arquivo");
  assert(/Para desligar:\*\* apague esta seção/.test(kit.claudeMd), "o relatorio em arquivo nao tem interruptor local");
  assert(/additionalDirectories/.test(kit.settings), "settings.json do kit nao libera a pasta-pai (a escrita seria negada)");
  ["applyWo","wrap"].forEach(k => assert(/AAMMDD-HHMM-code-<slug>\.txt/.test(kit[k]), "skill "+k+" nao grava o relatorio no arquivo (regra so no CLAUDE.md evapora)"));
  return "ok";
});

check("C29 fecho da leva sand-land (wo0072): gaveta Adiadas com gatilho, tipos de secao no HISTORY, pacote de update transitorio", () => {
  // 1) IDEAS: gaveta de adiadas, com o gatilho de volta
  let vistos=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const ideas=(T.effectiveFiles(n)||[]).find(f=>/^IDEAS\.md$/i.test(f.name||""));
    if(!ideas) return;
    vistos++;
    const c=ideas.content||"";
    // a gaveta existe em cada nicho com o VOCABULARIO dele (Adiadas, banho-maria...);
    // o que o kit cobra em todos e a exigencia do gatilho de volta
    assert(/gatilho que a traz de volta/.test(c), id+": IDEAS nao exige o gatilho que traz a ideia adiada de volta");
    if(id === "narrative"){
      assert(/## Adiadas/.test(c), "o template universal de IDEAS perdeu a gaveta Adiadas");
      assert(c.indexOf("## Adiadas") < c.indexOf("## Concluídas"), "Adiadas fora de ordem no template universal (deve vir antes de Concluidas)");
    }
  });
  assert(vistos>=15, "IDEAS nao foi encontrado na maioria dos nichos (achei "+vistos+")");
  // 2) HISTORY: os dois tipos de secao novos, onde o arquivo existe
  let comHistory=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const h=(T.effectiveFiles(n)||[]).find(f=>/^HISTORY\.md$/i.test(f.name||""));
    if(!h) return;
    comHistory++;
    assert(/Pesquisa de convenções/.test(h.content||""), id+": HISTORY sem o tipo pesquisa de convencoes");
    assert(/Autópsia de um problema resolvido/.test(h.content||""), id+": HISTORY sem o tipo autopsia");
  });
  assert(comHistory>=2, "HISTORY deveria existir em pelo menos 2 nichos (achei "+comHistory+")");
  // 3) CEREBRO: pacote de update e transitorio, mas fica ate o merge fechar + cobertura de leitura
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/continuar no mount até o merge fechar/.test(cmd), id+": CEREBRO nao manda manter o pacote no mount ate o merge fechar");
    assert(/declara a cobertura de leitura/.test(cmd), id+": CEREBRO nao exige declarar o que foi lido verbatim");
  });
  return "ok (" + vistos + " IDEAS · " + comHistory + " HISTORY)";
});

check("C28 teto por configuracao (wo0071): 6900 no padrao, orcamento por modo, total nos combos <= INSTR_TETO_MODOS", () => {
  const S=T.STATE; S.workmode = S.workmode || {};
  const pc=S.workmode.codeMode, pa=S.workmode.asuMode;
  function len(niche, code, asu){
    S.workmode.codeMode = code ? "yes" : "";
    S.workmode.asuMode  = asu  ? "yes" : "";
    return T.buildInstr(niche).length;
  }
  const fora=[]; let maxCode=0, maxAsu=0, maxTotal=0, maxPadrao=0, maxCompart=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const padrao=len(n,0,0), comCode=len(n,1,0), comAsu=len(n,0,1), combo=len(n,1,1);
    const incCode=comCode-padrao, incAsu=combo-comCode, compart=comCode+comAsu-combo-padrao, total=Math.max(comCode,comAsu,combo);
    maxCode=Math.max(maxCode,incCode); maxAsu=Math.max(maxAsu,incAsu); maxCompart=Math.max(maxCompart,compart);
    maxTotal=Math.max(maxTotal,total); maxPadrao=Math.max(maxPadrao,padrao);
    if(padrao > T.INSTR_TETO) fora.push(id+" padrao "+padrao+">"+T.INSTR_TETO);
    if(incCode > T.MODO_ORCAMENTO.code) fora.push(id+" +Code +"+incCode+">"+T.MODO_ORCAMENTO.code);
    if(incAsu  > T.MODO_ORCAMENTO.asu)  fora.push(id+" +ASU(marginal) +"+incAsu+">"+T.MODO_ORCAMENTO.asu);
    if(compart > T.MODO_ORCAMENTO.compartilhado) fora.push(id+" compartilhado +"+compart+">"+T.MODO_ORCAMENTO.compartilhado);
    if(total   > T.INSTR_TETO_MODOS)    fora.push(id+" combo "+total+">"+T.INSTR_TETO_MODOS);
  });
  S.workmode.codeMode=pc; S.workmode.asuMode=pa;
  assert(fora.length===0, "fora do orcamento -> " + fora.join(", "));
  // o produto ENSINA os numeros que o harness cobra (senao o projeto nao consegue reproduzir a conta)
  const cmd=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/Teto por configuração/.test(cmd), "CEREBRO nao ensina o teto por configuracao");
  assert(cmd.indexOf("+"+T.MODO_ORCAMENTO.code)>=0 && cmd.indexOf("+"+T.MODO_ORCAMENTO.asu)>=0 && cmd.indexOf(String(T.MODO_ORCAMENTO.compartilhado))>=0, "CEREBRO nao publica os tres orcamentos (Code, ASU, compartilhado)");
  assert(cmd.indexOf(String(T.INSTR_TETO_MODOS))>=0, "CEREBRO nao publica o total maximo com modos ligados");
  assert(/O que se trava é o \*\*incremento\*\*/.test(cmd), "CEREBRO nao explica que a trava e do incremento, nao do total");
  return "ok (padrao " + maxPadrao + "/" + T.INSTR_TETO + " · +Code " + maxCode + "/" + T.MODO_ORCAMENTO.code + " · +ASU " + maxAsu + "/" + T.MODO_ORCAMENTO.asu + " · compart " + maxCompart + "/" + T.MODO_ORCAMENTO.compartilhado + " · combo " + maxTotal + "/" + T.INSTR_TETO_MODOS + ")";
});

check("C27 leva sand-land (wo0070): modelo de WO, Tecnicas especificas, Estado ilegivel pelo canal, data nao envelhece", () => {
  const k=T.buildCodeKitFiles();
  const wo=k.woTemplate||"";
  assert(/Este arquivo e o MODELO/.test(wo), "modelo de WO ausente do kit do Code");
  assert(/Idempotencia:/.test(wo), "modelo de WO sem a clausula de idempotencia");
  assert(/Canal dos meta neste ciclo/.test(wo), "modelo de WO sem o banner de canal dos meta");
  assert(/Fora de escopo/.test(wo), "modelo de WO sem a secao fora de escopo");
  assert(/Armadilhas desta WO/.test(wo), "modelo de WO sem a secao de armadilhas");
  assert(/Relatorio de aplicacao/.test(wo), "modelo de WO sem o relatorio de aplicacao");
  assert(!/npm run|svelte/i.test(wo), "modelo de WO amarrado a um stack especifico");
  const fd=T.structuredFlatdropignore(true);
  assert(/!meta\/workorders\/_TEMPLATE\.md/.test(fd), "flatdropignore nao reinclui o modelo de WO");
  const idx=fd.split("\n");
  assert(idx.indexOf("meta/workorders/*") < idx.indexOf("!meta/workorders/_TEMPLATE.md"), "a reinclusao vem antes da exclusao (ordem invertida)");
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/## Técnicas específicas deste projeto/.test(cmd), id+": CEREBRO sem a secao Tecnicas especificas");
    assert(/template-update nunca sobrescreve esta seção/.test(cmd), id+": a secao Tecnicas especificas nao esta protegida do template-update");
    assert(/não é legível por este canal/.test(cmd), id+": Estado nao distingue nao-verificado de nao-legivel pelo canal");
    assert(/carimbo de emissão/.test(cmd), id+": falta a contrapartida (data de artefato nao envelhece)");
    assert(/Não suba o `PROMPT_IA.md`/.test(cmd) || !/Saída de código via ASU/.test(cmd), id+": a secao ASU nao avisa para nao subir o PROMPT_IA");
  });
  return "ok (" + wo.length + " chars no modelo)";
});

check("C26 curadoria das linhas de modo (wo0069): versao curta nas Instrucoes, definicao completa no CEREBRO", () => {
  const n=T.normNiche(T.NICHES.narrative);
  T.STATE.workmode = T.STATE.workmode || {};
  const pc=T.STATE.workmode.codeMode, pa=T.STATE.workmode.asuMode;
  T.STATE.workmode.codeMode="yes"; T.STATE.workmode.asuMode="yes";
  const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
  const base=T.buildInstr(T.normNiche(T.NICHES.narrative));
  T.STATE.workmode.codeMode=pc; T.STATE.workmode.asuMode=pa;
  const padrao=T.buildInstr(T.normNiche(T.NICHES.narrative)).length;
  // as duas pontas: curto na Instrucao, completo no CEREBRO
  assert(/ASU: \*\*editar\*\* o que já existe/.test(instr), "linha ASU nao esta na versao curada");
  assert(!/docs rolantes\*\* \(STATUS\/CHANGELOG/.test(instr), "a enumeracao dos docs rolantes voltou para as Instrucoes");
  assert(/Escopo do ASU \(por tipo de arquivo\)/.test(cmd), "CEREBRO perdeu o escopo do ASU por tipo de arquivo");
  assert(/Docs rolantes/.test(cmd), "CEREBRO perdeu a regra dos docs rolantes");
  assert(/Verificação obrigatória/.test(cmd), "CEREBRO perdeu a verificacao pos-aplicacao do ASU");
  assert(/O seu trabalho termina no `\.yaml` \*\*válido\*\*/.test(cmd), "CEREBRO nao delimita onde o trabalho do assistente termina (o usuario aplica pela interface)");
  assert(/não é assunto seu/.test(cmd), "CEREBRO nao proibe inventar instrucao de execucao/pasta de destino do yaml");
  assert(/\*\*Entregáveis de repo \(sem eu pedir\):\*\*/.test(instr), "gitignore+README nao foram fundidos numa linha so");
  assert(!/\*\*README:\*\* entregue\/atualize/.test(instr), "a linha antiga do README continua nas Instrucoes");
  assert(/Artefatos de repo \(\.gitignore, README\)/.test(cmd), "CEREBRO perdeu o detalhe dos artefatos de repo");
  // o incremento dos modos, medido (a trava por configuracao e a proxima frente)
  const inc = instr.length - padrao;
  const orc=T.MODO_ORCAMENTO.code + T.MODO_ORCAMENTO.asu;
  assert(inc <= orc, "os modos voltaram a inchar: incremento de " + inc + " chars (orcamento: " + orc + ")");
  return "ok (incremento dos modos: " + inc + ")";
});

check("C25 protocolo de update e gatilho da releitura (wo0068): estado do repo, template nao substitui vivo, commands legado, SPEC e SDD", () => {
  const dev=T.normNiche(T.NICHES.dev);
  const prompt=T.buildUpdatePrompt(dev);
  assert(/liste o mount e me diga em que versao\/commit/.test(prompt),"_UPDATE-PROMPT nao pede o estado do repo antes de comparar");
  assert(/Template generico NUNCA substitui arquivo vivo refinado/.test(prompt),"_UPDATE-PROMPT nao afirma que template nao substitui vivo");
  assert(/commands\/`? foi substituido por/.test(prompt),"_UPDATE-PROMPT nao marca .claude/commands/ como legado");
  const specFile=(dev.contextFiles||[]).find(f=>/^SPEC\.md$/i.test(f.name||""));
  assert(specFile,"dev perdeu o SPEC.md");
  assert(/Spec-Driven Development/.test(specFile.role||""),"o manifesto do SPEC.md nao diz a origem (SDD)");
  assert(/Não é o modelo das WOs/.test(specFile.role||""),"o manifesto do SPEC.md nao avisa que nao e o modelo das WOs");
  assert(/Sob demanda/i.test(specFile.role||""),"o manifesto do SPEC.md nao diz que e sob demanda");
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
    assert(/Mensagem cheia de pedidos é onde essa releitura mais falha/.test(instr), id+": Instrucoes sem o gatilho da causa 1 (trabalho pedido expulsa ritual)");
    assert(/nunca de memória/.test(instr), id+": Instrucoes perderam a regra de nao responder de memoria");
    assert(/previsão vestida de observação/.test(cmd), id+": CEREBRO sem os modos de falha da releitura");
    assert(/template genérico não é candidato a substituir arquivo vivo refinado/i.test(cmd), id+": CEREBRO nao afirma a regra do template x vivo no protocolo de update");
  });
  return "ok";
});

check("C24 convivencia gerado x manual (wo0067): bloco marcado no .flatdropignore, Estado verificado no turno, gatilho de analise por formato", () => {
  // 1) .flatdropignore gerado: comentario so FORA, regra so DENTRO, bloco por ULTIMO
  [true,false].forEach(codeOn => {
    const txt=T.structuredFlatdropignore(codeOn);
    const lines=txt.split("\n");
    const i=lines.indexOf("# >>> flatdrop-editor");
    const j=lines.indexOf("# <<<");
    assert(i>=0 && j>i, "codeOn="+codeOn+": bloco gerenciado ausente ou invertido");
    assert(j===lines.length-1, "codeOn="+codeOn+": ha conteudo depois do fim do bloco (vence o bloco em silencio)");
    const fora=lines.slice(0,i);
    fora.forEach(l => { if(l.trim()) assert(l.trim().startsWith("#"), "codeOn="+codeOn+": regra fora do bloco -> "+l); });
    const dentro=lines.slice(i+1,j).filter(l=>l.trim());
    assert(dentro.length>0, "codeOn="+codeOn+": bloco vazio");
    dentro.forEach(l => assert(!l.trim().startsWith("#"), "codeOn="+codeOn+": comentario dentro do bloco (o editor apaga) -> "+l));
    assert(dentro.includes("logs/*"), "codeOn="+codeOn+": logs continua na forma antiga (pasta/ em vez de pasta/*)");
    assert(!/^logs\/$/m.test(txt), "codeOn="+codeOn+": ainda emite logs/ puro");
    if(codeOn) assert(dentro.includes("meta/workorders/*"), "codeOn: falta meta/workorders/* dentro do bloco");
  });
  assert(/PODAR o diretorio/.test(T.structuredFlatdropignore(true)), "o arquivo nao explica o motivo real (poda), so o sintoma");
  // 2) CEREBRO: verificacao no ponto de uso + gatilho de analise + regra do artefato gerado
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/vem de leitura feita NESTE turno/.test(cmd), id+": campo Estado sem a exigencia de leitura no turno");
    assert(/não verificado nesta rodada/.test(cmd), id+": Estado nao admite 'nao verificado' como resposta");
    assert(/vai ler ou editar\*\* pede análise/.test(cmd), id+": falta o gatilho concreto de analise por mudanca de formato");
    assert(/precedência definida por posição/.test(cmd), id+": falta a regra do artefato gerado que convive com edicao humana");
  });
  return "ok";
});

check("C23 a copia nao e a fonte da verdade (wo0066): regra de higiene nos 18 CEREBROs, sem custo nas Instrucoes", () => {
  let base=null;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    assert(/A sua cópia não é a fonte da verdade/.test(cmd), id+": CEREBRO sem a regra de releitura antes de afirmar pendencia");
    assert(/releia o arquivo vivo/.test(cmd), id+": CEREBRO nao manda reler o arquivo vivo");
    assert(!/A sua cópia não é a fonte da verdade/.test(T.buildInstr(n)), id+": a regra vazou para as Instrucoes (deve viver so no CEREBRO)");
  });
  return "ok";
});

check("C22 disciplina de entrega no modo Code (wo0065): WO com comando junto, bloco git inteiro, relatorio na raia de execucao", () => {
  const n=T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  const prevC=T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode="yes";
  const instrCode=T.buildInstr(n);
  const kit=T.buildCodeKitFiles();
  const cmd=T.buildClaudeMd(n);
  T.STATE.workmode.codeMode=prevC;
  assert(/\/apply-wo <arquivo>/.test(instrCode),"Instr do modo Code nao manda entregar a linha /apply-wo junto da WO");
  assert(/Bloco git parcial/.test(instrCode),"Instr nao proibe o bloco git parcial (so add)");
  assert(/relatório de trabalho/.test(cmd),"CEREBRO nao separa a raia: bloco de fecho e do planejamento, relatorio e da execucao");
  assert(/RELATE o trabalho/.test(kit.claudeMd),"CLAUDE.md do kit nao manda a raia de execucao relatar");
  assert(/RELATE/.test(kit.applyWo),"skill apply-wo nao pede o relato ao terminar");
  // residuos do rename spec->WO (wo0053) que sobraram no kit do Code
  const kitTxt=[kit.claudeMd,kit.applyWo,kit.wrap,kit.settings].join("\n");
  assert(!/uma spec/i.test(kitTxt),"kit do Code ainda fala em 'uma spec' (vocabulario pre-wo0053)");
  assert(!/arquivo de spec/i.test(kitTxt),"kit do Code ainda fala em 'arquivo de spec'");
  assert(!/Spec: \$ARGUMENTS/.test(kitTxt),"skill apply-wo ainda rotula o argumento como Spec");
  return "ok";
});

check("C21 analise antes do compromisso (wo0063): secao no CEREBRO dos 18, gatilho nas Instrucoes, funil, pasta preguicosa", () => {
  const raw=fs.readFileSync(path,"utf8");
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    const instr=T.buildInstr(n);
    assert(/## Análise antes do compromisso/.test(cmd), id+": CEREBRO sem a secao de analise");
    assert(/nasce no primeiro uso/.test(cmd), id+": CEREBRO nao ensina a pasta preguicosa");
    assert(/Ponto de decisão/.test(cmd), id+": CEREBRO sem o ponto de decisao (analise nao decide sozinha)");
    assert(/renomeie nada por conta própria/.test(cmd), id+": CEREBRO sem a clausula de adocao (outro nome ja em uso)");
    assert(/analises\/AAMMDD-ANALISE-/.test(instr), id+": Instrucoes sem o gatilho da analise");
    const temSpec=(n.contextFiles||[]).some(f=>/^SPEC\.md$/i.test(f.name||""));
    assert(temSpec === /specs\/AAMMDD-/.test(cmd), id+": funil de spec incoerente com a existencia do modelo SPEC.md");
  });
  // modo Code: o funil aponta para a WO
  T.STATE.workmode = T.STATE.workmode || {}; const prev=T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const cmdCode=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/\*\*Funil:\*\* análise → \*\*WO\*\*/.test(cmdCode), "modo Code: funil nao aponta para a WO");
  T.STATE.workmode.codeMode = prev;
  // .flatdropignore gerado: conteudo da pasta (/*), nunca a pasta inteira — senao o "!" nao reinclui
  assert(/meta\/workorders\/\*/.test(raw), "flatdropignore gerado nao usa meta/workorders/* (o ! nao reincluiria)");
  assert(!/L\.push\("meta\/workorders\/", ""\)/.test(raw), "flatdropignore gerado ainda exclui a pasta inteira");
  assert(/!meta\/analises\/_TEMPLATE\.md/.test(raw), "flatdropignore gerado nao ensina a reinclusao do modelo");
  assert(/uma analise por decisao nao-trivial/.test(raw), "README estruturado nao menciona meta/analises/");
  assert(!/analises\/\.gitkeep/.test(raw), "o zip esta criando a pasta analises vazia (deveria nascer no primeiro uso)");
  return "ok";
});

check("C20 nome padrao do handoff nos prompts de transferencia e retomada (wo0061)", () => {
  const raw=fs.readFileSync(path,"utf8");
  const n=(raw.match(/AAMMDD-HANDOFF-BRIEF\.md/g)||[]).length;
  assert(n>=3,"nome AAMMDD-HANDOFF-BRIEF.md deveria estar no CEREBRO + prompts E e F (achei "+n+")");
  assert(!/um HANDOFF-BRIEF\*\*/.test(raw),"prompt de transferencia ainda usa o nome sem convencao de data");
  return "ok ("+n+" ocorrencias)";
});

check("C19 bloco de fecho de turno padronizado (wo0058): gatilho nas Instr + formato condicional no CEREBRO", () => {
  const n=T.normNiche(T.NICHES.dev);
  assert(/Fecho do turno/.test(T.buildInstr(n)),"Instr sem o gatilho do bloco de fecho");
  const c=T.buildClaudeMd(n);
  assert(/## Bloco de fecho de turno/.test(c),"CEREBRO sem a secao do bloco de fecho");
  ["Próximo","Estado","Arquivar / Manter","Config recomendada","Handoff"].forEach(k=>
    assert(new RegExp("\\*\\*"+k+"\\*\\*").test(c),"CEREBRO sem a linha: "+k));
  assert(/só as linhas que se aplicam/.test(c),"CEREBRO nao manda condicionar as linhas");
  assert(/AAMMDD-HANDOFF-BRIEF\.md/.test(c),"CEREBRO nao nomeia o artefato de handoff");
  assert(/\*\*Próximo\*\* vem antes de um divisor/.test(c),"CEREBRO nao fixa a ordem (Proximo antes do divisor)");
  assert(/não uma jaula/.test(c),"CEREBRO nao autoriza o projeto a personalizar o bloco");
  // wo0064: Proximo em duas partes (acao + pedido de volta) e Arquivar/Manter em lista
  assert(/Peça no próximo turno/.test(c),"CEREBRO nao pede a sugestao de pedido no item Proximo");
  assert(/\*\*\(a\) Ação\*\*/.test(c),"CEREBRO nao separa a acao no item Proximo");
  assert(/\*\*Em lista\*\*, como a Config e o Handoff/.test(c),"Arquivar \/ Manter nao esta em formato de lista");
  assert(/uma linha \*\*Arquivar:\*\* .*e uma linha \*\*Manter:\*\*/.test(c),"Arquivar \/ Manter sem as duas linhas nomeadas");
  assert(/Personalização genérica migra para os meta/.test(c),"CEREBRO sem a regra de migracao para os meta/");
  assert(!/Estas instruções trazem só o essencial, lido em toda mensagem/.test(T.buildInstr(n)),"cabecalho auto-referencial nao foi podado");
  return "ok";
});

check("C18 motor do enxugamento (wo0056-A): campo 'short' curado nas Instr, definicao completa no CEREBRO", () => {
  const raw=fs.readFileSync(path,"utf8");
  // (1) motor instalado
  assert(/short:b\[3\]/.test(raw),"normBehaviors nao aceita o 4o elemento (short)");
  assert(/b\.short \|\| shortDef\(b\.def\)/.test(raw),"buildInstr nao prefere o short curado");
  // (2) contrato, para todo nicho que ja tenha short curado
  let curados=0, perdidos=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const instr=T.buildInstr(n), cer=T.buildClaudeMd(n);
    (n.behaviors||[]).filter(b=>b.def).forEach(b => {
      // nenhum comportamento pode sumir das Instrucoes
      if(!instr.includes(b.label)) perdidos.push(id+"/"+b.id);
      if(b.short){
        curados++;
        // a definicao completa PRECISA continuar no CEREBRO
        if(!cer.includes(b.def)) perdidos.push(id+"/"+b.id+" def completa fora do CEREBRO");
        // o short precisa realmente comprimir
        if(b.short.length >= b.def.length) perdidos.push(id+"/"+b.id+" short nao comprime");
      }
    });
  });
  assert(perdidos.length===0,"contrato violado -> "+perdidos.slice(0,4).join(" | "));
  return "ok ("+curados+" curados)";
});

check("C17 auto-refino obrigatorio (wo0055): dever proativo, liberdade de promover regra, feedback ao kit", () => {
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/É dever seu, não meu pedido/.test(md),"CEREBRO sem o dever proativo de refino");
  assert(/Você decide o que merece texto integral/.test(md),"CEREBRO sem a liberdade de promover regra a integral");
  assert(/vira feedback ao kit/.test(md),"CEREBRO sem o caminho de feedback ao KCM");
  assert(/Refino das Instruções do Projeto/.test(md),"bloco de refino (G19) sumiu");
  return "ok";
});

check("C16 SDD leve (wo0054): SPEC.md no dev, criterios de aceite nos prompts, clausula de ambiguidade no analyze", () => {
  const dev=T.normNiche(T.NICHES.dev);
  const spec=(dev.contextFiles||[]).find(f=>f.name==="SPEC.md");
  assert(spec,"dev sem o modelo SPEC.md");
  assert(/Critérios de aceite \(verificáveis\)/.test(spec.content),"SPEC.md sem secao de criterios de aceite");
  assert(/Fora de escopo/.test(spec.content),"SPEC.md sem fora-de-escopo");
  const pj=(dev.promptsExtra||[]).find(p=>p.id==="J");
  assert(pj && /critérios de aceite verificáveis/.test(pj.body({},dev)),"prompt J sem criterios de aceite");
  const gm=T.normNiche(T.NICHES.game);
  const ph=(gm.promptsExtra||[]).find(p=>p.id==="H");
  assert(ph && /Critérios de aceite verificáveis/.test(ph.body({},gm)),"prompt H (game) sem criterios de aceite");
  assert(/ambíguo ou de escala de feature/.test(T.buildClaudeMd(dev)),"analyze sem clausula de ambiguidade");
  return "ok";
});

check("C15 rename spec->WO (spec0053): caminhos, comando e prosa; sem quebrar palavras pt-BR nem CSS", () => {
  const raw=fs.readFileSync(path,"utf8");
  assert(!/meta\/specs\//.test(raw),"ainda ha meta/specs/ (deveria ser meta/workorders/)");
  assert(/meta\/workorders\//.test(raw),"meta/workorders/ ausente");
  assert(!/apply-spec/.test(raw),"ainda ha apply-spec (deveria ser apply-wo)");
  assert(/AAMMDD-woNNNN-desc\.md/.test(raw),"padrao AAMMDD-woNNNN-desc.md ausente");
  assert(/aspect-ratio/.test(raw),"CSS aspect-ratio sumiu (replace cego quebrou o layout)");
  assert(/específico|especial/.test(raw),"palavras pt-BR com 'spec' foram corrompidas");
  return "ok";
});

check("C14 adesao ao ritual (spec0052): mount-check por turno + memoria x mount + fix vazamento ASU no modo Code", () => {
  const n=T.normNiche(T.NICHES.dev);
  assert(/reveja o mount a cada turno/i.test(T.buildInstr(n)),"Instr sem gatilho de reler o mount por turno");
  assert(/não trate o mount como verdade absoluta/.test(T.buildClaudeMd(n)),"CEREBRO sem logica memoria x mount");
  T.STATE.workmode={codeMode:"yes"};
  assert(!/asuNNNN/.test(T.buildClaudeMd(T.normNiche(T.NICHES.dev))),"modo Code sem ASU cita asuNNNN (vazamento)");
  T.STATE.workmode={asuMode:"yes"};
  assert(/asuNNNN/.test(T.buildClaudeMd(T.normNiche(T.NICHES.dev))),"modo ASU deveria citar asuNNNN");
  T.STATE.workmode={};
  return "ok";
});

check("C13 E-ASU (.docx) + B6 retcon no template CONTINUIDADE (spec0051)", () => {
  T.STATE.workmode={asuMode:"yes"};
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/não cobre `.docx`/.test(md),"CEREBRO ASU nao avisa que nao cobre .docx");
  T.STATE.workmode={};
  const cont=(T.NICHES.narrative.contextFiles||[]).find(f=>f.name==="CONTINUIDADE.md");
  assert(cont && /## Retcon — quando o cânone muda/.test(cont.content),"CONTINUIDADE sem secao Retcon");
  return "ok";
});

check("C12 nomes com opcoes nos nichos de ficcao (spec0050): narrativa ambos os modos + game/rpg/comics", () => {
  const nn=T.buildClaudeMd(T.normNiche(T.NICHES.narrative));
  assert(/Em AMBOS os modos: nomear/.test(nn),"narrativa: naming nao esta em ambos os modos");
  assert(!/nomes nunca são pedidos sem/.test(nn),"narrativa: fragmento antigo de naming ainda no modo DC (duplicado)");
  ["game","rpg","comics"].forEach(id=>{
    const md=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/Nomes vêm com opções fundamentadas/.test(md),id+": sem behavior de naming");
  });
  return "ok";
});

check("C11 universais leva C (spec0049): pedido composto + genero em rename + sincronia Instr<->CEREBRO", () => {
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/Pedido composto/.test(md),"cadence sem 'pedido composto'");
  assert(/concordância \(gênero\/número\)/.test(md),"consistency sem regra de genero no rename");
  assert(/Sincronia com o CEREBRO/.test(md),"refino sem regra de sincronia Instr<->CEREBRO");
  assert(T.NICHES && Object.keys(T.NICHES).length===18,"nichos != 18");
  return "ok";
});

check("C10 narrative refino spec0048: 5 erros nomeados + cena-existe + notas-revisao + eco fisico + gatilho revisada", () => {
  const narr=T.normNiche(T.NICHES.narrative);
  const sk=name=>narr.skillsPack.skills.find(s=>s.name===name);
  const cont=T.buildSkillMd(sk("checagem-continuidade"));
  ["hedgeia o próprio POV","familiaridade cedo demais","Transição ausente","Eco não verificado","Craft afirmado sem"].forEach(k=>assert(cont.includes(k),"checagem-continuidade sem: "+k));
  const serial=T.buildSkillMd(sk("escrita-serial"));
  assert(/A cena já existe\?/.test(serial),"escrita-serial sem passo 'a cena ja existe'");
  assert(/Processando notas de revisão do autor/.test(serial),"escrita-serial sem bloco de notas de revisao");
  const textura=T.buildSkillMd(sk("textura-mundo"));
  assert(/Eco físico vs\. eco comportamental/.test(textura),"textura-mundo sem eco fisico/comportamental");
  const cmd=T.buildClaudeMd(narr);
  assert(/concluída OU revisada/.test(cmd),"gatilho nao virou 'concluida OU revisada' no CEREBRO (triggersExtra vive no CEREBRO, nao nas Instrucoes)");
  return "ok";
});

check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
  const RE=/CONTEXT|PROJETO|JOGO|OBRA|PRODUTO|CONCEITO|TEMA|SÉRIE|SERIE/i;
  const semAncora=[], choque=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cf=(n.contextFiles||[]).map(f=>f.name);
    const anchor = ("anchorDoc" in n) ? n.anchorDoc : cf.find(nm=>RE.test(nm));
    // (a) se ha ancora (declarada nao-null ou resolvida), o ritual das Instrucoes E do CEREBRO citam-na
    if(anchor){
      const instr=T.buildInstr(n), cmd=T.buildClaudeMd(n);
      if(!instr.includes(anchor)) semAncora.push(id+" Instr sem "+anchor);
      if(!cmd.includes(anchor)) semAncora.push(id+" CEREBRO sem "+anchor);
    }
    // (b) Instrucoes nunca citam um .md que o nicho nao possui (asu on/off); pega o choque CONTEXT.md
    [{},{asuMode:"yes"}].forEach(wm=>{
      T.STATE.workmode=wm;
      const instr=T.buildInstr(n);
      (instr.match(/\b[A-Z][A-Z-]*\.md\b/g)||[]).forEach(lit=>{
        if(lit==="CONTEXT.md" && !cf.includes("CONTEXT.md")) choque.push(id+" cita "+lit+" (asu:"+(!!wm.asuMode)+")");
      });
    });
    T.STATE.workmode={};
  });
  assert(semAncora.length===0, "ritual sem doc-ancora -> "+semAncora.join(" | "));
  assert(choque.length===0, "Instr cita .md inexistente -> "+choque.join(" | "));
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
