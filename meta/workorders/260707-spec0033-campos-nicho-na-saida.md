# Spec — Campos de nicho na saída: bloco "Contexto do projeto" nas Instruções + conserto do Estágio (i-N41)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `src/niches/game.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS** (17/17, 0 erros).
> **Harness: sem check novo nem alterado** — segue **35/35**. O bloco só emite quando há valor em `STATE.topbar`; no teste (topbar vazia) não emite → o teto N (`instr.length ≤ 6900`) fica intacto para todos os nichos. O Code confirma 35/35 pós-build.
> Aplicar com: **`/apply-spec 260707-spec0033-campos-nicho-na-saida.md`**
> Config: **Sonnet + esforco Alto** (toca a geração — `buildInstr` — mas de forma aditiva e guardada por presença de valor).
> **Diff conferido no chat contra o template vivo v1.57.0** (pós spec0032, commit 899102a). Build/harness ficam com o Code.
> Base: **i-N41** (registrada pela spec0032) + `meta/ANALISE-ACOES-CONFIG-E-CAMPOS.md`. **Aplicar depois da spec0032.** Fecha o achado que tornaria o gênero multi apenas cosmético.

## Contexto
A spec0032 fez o gênero de jogo virar multi-seleção — mas rastreando `buildInstr` confirmou-se que
`genreSel`/`engineSel` **não entram na saída**: `buildInstr` consome só nome (`tb.project|projeto|peca|tema`),
estágio (`tb.version|versao|fase`) e idioma (`tb.langSel`). Sem esta spec, o usuário marca gêneros que não
moldam o contexto gerado. Esta spec fia os campos de nicho **ainda não consumidos** (com valor) num bloco
**"Contexto do projeto"** logo após o "Estágio", nas **Instruções** (lidas em toda mensagem).

**Por que nas Instruções e não no CEREBRO:** o próprio CEREBRO declara que define "COMO o assistente age, não
O QUE o projeto é (isso é o CONTEXT)". Identidade/contexto do projeto pertence ao cabeçalho das Instruções,
onde `# Projeto`/`Domínio`/`Estágio` já vivem. `buildClaudeMd` **não é tocado**.

**Conserto de brinde (desencontro latente):** o campo "Fase" tem `id:"phase"` (narrativa e game), mas o
"Estágio" checa `tb.fase` — então **a Fase nunca entrou na saída** em nichos que usam `phase`. Esta spec
estende o check para `|| tb.phase`, e o bloco de contexto pula `phase` (já consumido no Estágio) para não
duplicar. Assim a Fase passa a aparecer como "Estágio:", consistente entre nichos.

**NAO fazer:** não tocar `buildClaudeMd`; não mexer no builder/`STATE.builder`; não emitir nada quando o campo
está vazio (bloco guardado por presença de valor — mantém o teto de 6900 intacto no teste).

---

## Tarefa A — `src/index.template.html`: estender o Estágio + bloco de contexto
**Ancora** (o bloco do Estágio em `buildInstr`):
```
  if(tb.version || tb.versao || tb.fase){
    lines.push(`Estágio: ${tb.version || tb.versao || tb.fase}.`);
  }
```
**substituir-BLOCO por:**
```
  if(tb.version || tb.versao || tb.fase || tb.phase){
    lines.push(`Estágio: ${tb.version || tb.versao || tb.fase || tb.phase}.`);
  }
  // Contexto do projeto: campos de nicho ainda não consumidos acima (ex.: gênero, engine), só se tiverem valor (spec0033)
  const HEADER_IDS = ["project","projeto","peca","tema","version","versao","fase","phase","langSel"];
  const ctxBits = (niche.topbar || []).filter(f => !HEADER_IDS.includes(f.id)).map(f => {
    const v = tb[f.id];
    const shown = Array.isArray(v) ? v.filter(Boolean).join(", ") : (v == null ? "" : String(v).trim());
    return shown ? `${f.label}: ${shown}` : "";
  }).filter(Boolean);
  if(ctxBits.length) lines.push(`Contexto do projeto: ${ctxBits.join(" · ")}.`);
```

---

## Tarefa B — `src/niches/game.js`: rótulo limpo do gênero
Com o gênero agora entrando na saída, o rótulo verboso fica feio ("Gênero (pode ser mais de um): …"). Os chips
já deixam claro que é multi.
**Ancora:**
```
    { id:"genreSel", label:"Gênero (pode ser mais de um)", type:"multi", panel:"modal",
```
**substituir-BLOCO por:**
```
    { id:"genreSel", label:"Gênero", type:"multi", panel:"modal",
```

---

## Tarefa C — harness
**Nada a mudar.** Após `node build.js`: `node validate.js index.html` → **17/17, 35/35, 0 erros**. O bloco só
emite com valor preenchido; o check N roda com `STATE.topbar` vazio, então `instr.length` não muda (narrativa
segue em 6688 ≤ 6900). Se algum N acusar estouro, é sinal de que aquele nicho tem campo com **default** não
vazio — reporte antes de prosseguir (não deveria acontecer: os campos extras não têm default preenchido).

## Verificação visual (no navegador)
1. Nicho **Game design**: no modal (engrenagem → aba Nicho), marcar alguns gêneros; a aba **Instruções** passa
   a mostrar, após "Estágio", uma linha **"Contexto do projeto: Gênero: Ação, RPG · Engine: Godot."** (só os
   campos com valor).
2. Preencher a **Fase** (select): agora aparece como **"Estágio: Protótipo."** (antes não aparecia — conserto).
3. Sem nenhum campo extra preenchido: **nenhuma** linha de contexto (saída limpa, como antes).
4. Narrativa e demais nichos: comportamento igual (campos extras entram só se existirem e tiverem valor).

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: `buildInstr` ganha bloco **"Contexto do projeto"** após o Estágio,
  emitindo campos de nicho não-consumidos e com valor (multi vira lista separada por vírgula); **conserto** do
  desencontro `phase`/`fase` no Estágio (Fase passa a aparecer). `buildClaudeMd` intacto (contexto ≠ CEREBRO).
  Fecha a **i-N41**.
- **`meta/IDEAS.md`** — marcar **i-N41** como resolvida/implementada (append de status ou mover para o padrão de
  ideias fechadas do projeto).
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0033 aplicada (campos de nicho na saída + conserto do
  Estágio); bump minor.

## Próximas specs (contexto)
- **spec0034** — download estruturado (projeto novo) OU atualizar (i-N40). Recomendo o **download estruturado**
  primeiro (independente, entrega valor imediato de bootstrap); atualizar (i-N40, mais pesado) por último.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: campos de nicho entram na saida via bloco Contexto do projeto + conserto do Estagio (spec0033, i-N41)" -m "buildInstr emite os campos de nicho nao-consumidos e com valor (genero multi vira lista) apos o Estagio; conserta desencontro phase/fase (Fase passa a aparecer); buildClaudeMd intacto (contexto e do CONTEXT, nao do CEREBRO); bloco guardado por presenca de valor mantem teto 6900 no teste; harness 35/35 inalterado"
git push
```
