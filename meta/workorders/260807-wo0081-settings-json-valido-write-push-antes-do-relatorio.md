# WO 0081 — settings.json valido, Write no allow, push antes do relatorio e CONTINUIDADE que cresce

> **Tipo:** WO de CODIGO.
> **Config sugerida:** Sonnet, esforco medio — as nove edicoes sao mecanicas e o texto exato esta aqui.
> **Pre-requisito:** `KIT_VERSION 1.101.0`, commit `315d4bd`, `main` == `origin/main`, arvore limpa,
> harness **18/18 · 80/80 · 0 erros**.
> **Base:** `meta/analises/260807-ANALISE-feedback-dois-narrativos.md` (leva 1) + a nota `260805-0834.txt`
> + a resposta do autor de 2026-08-07. Defeitos reportados pelo projeto *My Little Lady* em 2026-07-23.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um
> lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO. Se ja existir, **PULE** o
> item e diga no relatorio.

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: faca os appends previstos na Edicao 10
> (STATUS + DECISIONS) e nao espere doc do chat.

---

## 1. Por que

O `.claude/settings.json` que o kit gera termina com um comentario `//` **depois** do `}` final. JSON nao
aceita comentario: o Claude Code descarta o arquivo inteiro como malformado e **nenhuma** permissao vale.
Junto com o `allow` cai o `additionalDirectories: ["../"]` — a chave de que dependem o **relatorio em
arquivo** (D-108, v1.95.0) e a **medicao delegada** (D-113, v1.100.0). Duas frentes foram construidas em
cima de uma permissao que, no arquivo entregue, nunca chegou a existir.

No mesmo arquivo, `Write` nao esta no `allow` — e a skill `/wrap`, que o proprio kit entrega, manda criar
`logs/AAAA-MM-DD.md`. A skill pede o que a permissao nega.

Nenhum dos 80 checks pegou isso porque **o harness nunca abriu um `.json` pelo parser**: `grep -c
"JSON.parse" validate.js` retorna **0**, e o unico check do arquivo (`validate.js`, C-Code) testa por
substring `/"permissions"/` e `/"deny"/` — as duas casam num arquivo quebrado. E a mesma doenca da D-110
uma superficie acima: o kit validava o que gera pelo texto, nunca pelo leitor do formato.

Em paralelo, dois itens independentes: `CONTINUIDADE.md` e classificada como *snapshot* na tabela do
CEREBRO, contra o proprio nicho narrativo, que declara o arquivo como **CRESCE** (append-only); e o kit do
Code nao diz **nada** sobre push — nem quando empurrar, nem em que ordem —, o que produziu relatorios
afirmando "push pendente" enquanto o push saia logo depois, sem registro (`260803-1000.txt`,
`260805-0834.txt`). A ordem nunca foi escrita, entao o relatorio mentia por construcao.

## 2. Contexto factual

- **Medido neste mount** (`_MANIFEST` gerado 2026-08-07 06:15, commit `315d4bd`, `main` limpo):
  `src/index.template.html` emite o `settings.json` com a linha de comentario apos o `}`; o `allow` tem
  `Read, Edit, Grep, Glob` + cinco `Bash(git …)` e **nao** tem `Write`; `validate.js` tem **zero**
  ocorrencias de `JSON.parse`; `fileBehaviorLabel` casa `/BRIEF|CONTINU/` e devolve `Snapshot`, enquanto
  `src/niches/narrative.js` declara o papel do arquivo como *"A memoria factual. CRESCE."*.
- **Medido:** o `.claude/settings.json` **do proprio KCM** e JSON valido e nao tem o defeito — foi escrito
  a mao, nao gerado. Ele tambem nao lista `Write`, mas tem `"defaultMode": "acceptEdits"`, que cobre o
  caso. **Por isso esta WO nao toca no settings do proprio repo.**
- **Medido:** as nove edicoes abaixo foram aplicadas num sandbox reconstruido a partir deste mount;
  `node build.js` + `node validate.js` rodaram de verdade e fecharam **18/18 · 81/81 · 0 erros**, com
  **custo de teto zero** — C28 imprime os mesmos numeros da v1.101.0
  (`padrao 6618/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600`).
- **Medido (prova negativa do C37):** com o comentario devolvido ao JSON, com o `Write` removido, e com a
  CONTINUIDADE de volta a `Snapshot`, o C37 **falhou** nos tres casos, um de cada vez.
- **Decidido pelo autor (2026-08-07):** o Code empurra sozinho quando estiver verde; quando nao estiver,
  nao empurra e **nao pergunta em prosa** — fecha com menu numerado, a recomendada em 1; e o relatorio e
  escrito **depois** da decisao de push, seja ela qual for.

---

## Edicao 1 — `src/index.template.html` · bump de versao

**Ancora** (constante logo apos `INSTR_TETO`):

```
const KIT_VERSION = "1.101.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.102.0";
```

---

## Edicao 2 — `src/index.template.html` · `Write` no allow do settings gerado

**Ancora** (dentro de `buildCodeKitFiles`, no array `const settings`):

```
    '      "Read", "Edit", "Grep", "Glob",',
```

**Substituir por:**

```
    '      "Read", "Write", "Edit", "Grep", "Glob",',
```

---

## Edicao 3 — `src/index.template.html` · o comentario sai de dentro do JSON

**Ancora** (ultima entrada do mesmo array `const settings`, logo antes de `].join("\n");`):

```
    "// Adicione seu comando de build/teste ao allow — ex.: \"Bash(npm run build:*)\", \"Bash(npm test:*)\"."
```

**Remover a linha inteira** (a linha anterior, `    "",`, **fica como esta**, virgula final inclusive —
uma virgula sobrando no fim de um array JS e valida e produz exatamente a mesma string).

O lembrete nao se perde: ele ja existe em dois lugares corretos — no `CLAUDE.md` gerado
(*"Adicione seus comandos de build/teste ao `allow` de `.claude/settings.json`"*) e na tabela de arquivos
do CEREBRO gerado. **Nao reescreva o lembrete em lugar nenhum.**

---

## Edicao 4 — `src/index.template.html` · CONTINUIDADE cresce; BRIEF continua snapshot

**Ancora** (dentro de `function fileBehaviorLabel`):

```
  if(/BRIEF|CONTINU/.test(n)) return "Snapshot (atualiza antes de migrar)";
```

**Substituir por** (uma linha so — o arquivo e CRLF; ver Armadilhas):

```
  if(/CONTINU/.test(n)) return "Cresce (memória factual, append-only)"; if(/BRIEF/.test(n)) return "Snapshot (atualiza antes de migrar)";
```

---

## Edicao 5 — `src/index.template.html` · secao de push no `CLAUDE.md` gerado

**Ancora** (dentro de `buildCodeKitFiles`, no array `const claudeMd`):

```
    "## Relatório em arquivo (sempre, sem pedir)",
```

**Inserir IMEDIATAMENTE ANTES** as seis linhas abaixo (esta e a **unica** insercao multi-linha desta WO —
use CRLF, ver Armadilhas):

```
    "## Push e relatório — nesta ordem, sempre",
    "- **Verde** (validação passou, ou WO só de doc com o `git diff` conferido) → `add`, `commit` e **`push`, sem perguntar.** Não peça permissão para o que já está decidido.",
    "- **Vermelho** (validação falhou, âncora não encontrada, `git diff` com arquivo fora do previsto) → **não commite e não empurre.** E **não pergunte em prosa** («posso dar push?») — pergunta escrita no meio do texto passa despercebida. Feche com um **menu numerado** de saídas reais, a recomendada em **1** — ex.: `1) corrigir <o quê> e revalidar (recomendado)  2) reverter as edições  3) commitar local, sem push  4) empurrar assim mesmo`.",
    "- **O relatório é o ÚLTIMO passo** — só depois de resolvido o push. Ele diz o que de fato aconteceu: empurrado (com o hash), não empurrado (com o motivo), ou aguardando a escolha do menu. **Relatório escrito antes da decisão conta metade da história** e vira mentira assim que o push sai; se a escolha chegar depois, **reescreva o relatório**, não deixe a versão velha valendo.",
    "",
```

---

## Edicao 6 — `src/index.template.html` · skill `apply-wo` do kit-Code

**Ancora** (ultima linha util do array `const applyWo`, antes de `"WO: $ARGUMENTS"`):

```
    "Grave o MESMO relatório em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

**Substituir por** (uma linha so):

```
    "Verde: `add`, `commit` e `push` sem perguntar. Vermelho: nao commite nem empurre — feche com MENU NUMERADO (a recomendada em 1), nunca com pergunta em prosa. Resolva o push ANTES de escrever o relatorio. Grave o MESMO relatório em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

---

## Edicao 7 — `src/index.template.html` · skill `wrap` do kit-Code

**Ancora** (ultima linha util do array `const wrap`):

```
    "Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

**Substituir por** (uma linha so):

```
    "Verde: `add`, `commit` e `push` sem perguntar. Vermelho: nao commite nem empurre — feche com MENU NUMERADO (a recomendada em 1), nunca com pergunta em prosa. Resolva o push ANTES de escrever o relatorio. Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

---

## Edicao 8 — `src/index.template.html` · modelo de WO (`buildWoTemplate`)

**Ancora** (secao `## Relatorio de aplicacao` do modelo):

```
    "O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit.",
```

**Substituir por** (uma linha so):

```
    "O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit e o push. Escreva-o DEPOIS de resolver o push: relatorio anterior a decisao conta so parte da historia.",
```

---

## Edicao 9 — `src/index.template.html` · o pacote de update alcanca quem JA instalou

Consertar o gerador nao conserta os projetos que ja baixaram o arquivo quebrado — e a D-102 impede que o
template generico substitua um `.claude/*` vivo. O unico canal que chega la e o papel do arquivo no
pacote de atualizacao.

**Ancora** (dentro de `buildUpdatePack`, no bloco `if(codeOn)`):

```
      role: "Permissoes do Claude Code.", content: k.settings });
```

**Substituir por** (uma linha so):

```
      role: "Permissoes do Claude Code. CORRECAO OBRIGATORIA no arquivo que voce ja tem: se houver uma linha comecando com // depois do } final, APAGUE-A — o JSON fica invalido e TODAS as permissoes param de valer em silencio, inclusive additionalDirectories (relatorio em arquivo e medicao fora da raiz). Confira tambem que Write esta no allow.", content: k.settings });
```

---

## Edicao 10 — `validate.js` · check C37 e o export que ele precisa

**10a — expor `fileBehaviorLabel` ao harness.**

**Ancora** (linha do `SHIM`, no topo do arquivo):

```
buildUpdatePrompt, generatedContextFiles
```

**Substituir por:**

```
buildUpdatePrompt, fileBehaviorLabel, generatedContextFiles
```

**10b — o check novo.**

**Ancora:**

```
check("C36 modelo de analise no pacote
```

**Inserir IMEDIATAMENTE ANTES** o bloco abaixo, seguido de uma linha em branco:

```js
check("C37 artefato do kit abre no parser do proprio formato (wo0081): settings.json valido, Write no allow, push antes do relatorio, CONTINUIDADE nao e snapshot", () => {
  const kit = T.buildCodeKitFiles();
  // (1) todo artefato emitido com extensao .json abre no JSON.parse — nunca por substring
  const jsonArtifacts = [[".claude/settings.json (kit-Code)", kit.settings]];
  T.STATE.workmode = T.STATE.workmode || {};
  const prevMode = T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const pack = T.buildUpdatePack(T.normNiche(T.NICHES.dev));
  T.STATE.workmode.codeMode = prevMode;
  (pack && pack.files ? pack.files : []).forEach(f => {
    if(/\.json$/.test(f.real||"")) jsonArtifacts.push([f.real+" (pacote de update)", f.content]);
  });
  assert(jsonArtifacts.length >= 2, "o check perdeu o alvo: esperava o settings.json do kit-Code E o do pacote de update");
  jsonArtifacts.forEach(([nome, txt]) => {
    assert(typeof txt === "string" && txt.trim(), nome+": artefato .json vazio");
    try { JSON.parse(txt); }
    catch(e){ assert(false, nome+" nao e JSON valido ("+e.message+") — um comentario // ou virgula sobrando quebra o arquivo inteiro e derruba TODAS as permissoes em silencio"); }
  });
  // (2) o conteudo de que as frentes recentes dependem
  const st = JSON.parse(kit.settings);
  const allow = (st.permissions||{}).allow||[];
  assert(allow.includes("Write"), "settings.json sem Write no allow — o Code nao consegue criar logs/ nem arquivo novo, e a skill wrap manda criar");
  assert(allow.includes("Read") && allow.includes("Edit"), "settings.json perdeu Read/Edit do allow");
  assert(Array.isArray((st.permissions||{}).additionalDirectories), "settings.json sem additionalDirectories — relatorio em arquivo (D-108) e medicao fora da raiz (D-113) morrem em silencio");
  const setEntry = (pack && pack.files ? pack.files : []).find(f => f.real === ".claude/settings.json");
  assert(setEntry && /CORRECAO OBRIGATORIA/.test(setEntry.role||""), "pacote de update nao avisa os projetos JA instalados — consertar o gerador nao conserta quem ja baixou");
  // (3) push resolvido antes do relatorio, e menu numerado em vez de pergunta em prosa
  assert(/## Push e relat/.test(kit.claudeMd), "CLAUDE.md do kit-Code sem a secao de push");
  assert(/menu\*\* numerado|menu numerado|MENU NUMERADO/i.test(kit.claudeMd), "CLAUDE.md nao manda usar menu numerado no caso vermelho");
  assert(/relat[oó]rio [eé] o ÚLTIMO passo/i.test(kit.claudeMd), "CLAUDE.md nao poe o relatorio depois do push");
  [["apply-wo",kit.applyWo],["wrap",kit.wrap]].forEach(([nome,txt]) => {
    assert(/MENU NUMERADO/.test(txt), "skill "+nome+" nao manda fechar com menu numerado no caso vermelho");
    assert(/push ANTES de escrever o relatorio/.test(txt), "skill "+nome+" nao ordena push antes do relatorio");
  });
  assert(/DEPOIS de resolver o push/.test(kit.woTemplate), "modelo de WO nao ordena relatorio depois do push");
  // (4) CONTINUIDADE cresce; BRIEF continua snapshot
  const lab = T.fileBehaviorLabel({name:"CONTINUIDADE.md", cat:"hist"});
  assert(/Cresce/.test(lab), "CONTINUIDADE.md rotulada como '"+lab+"' — o proprio nicho declara que CRESCE (append-only)");
  assert(/Snapshot/.test(T.fileBehaviorLabel({name:"BRIEF.md", cat:"hist"})), "BRIEF perdeu o rotulo de snapshot ao separar de CONTINUIDADE");
  return "ok ("+jsonArtifacts.length+" artefato(s) .json parseado(s))";
});
```

---

## Edicao 11 — `meta/STATUS.md` e `meta/DECISIONS.md` · registro (append)

**11a — `meta/DECISIONS.md`:** append de **D-115** ao final, no formato das entradas vizinhas
(`## D-115 — ...` + **Decisao.** + **Por que.**). Conteudo obrigatorio: os quatro defeitos com os numeros
medidos da secao 2 desta WO; a regra do push (verde empurra, vermelho fecha com menu numerado e nao
pergunta em prosa, relatorio sempre depois da decisao); o check **C37** e o principio que ele instala —
**artefato emitido com extensao de formato conhecido e aberto pelo parser daquele formato, nao por
substring**; o achado de que consertar o gerador nao conserta o instalado, e por isso a Edicao 9;
`KIT_VERSION 1.102.0`; custo de teto **zero**; harness **18/18, 80/80 -> 81/81, 0 erros**.

**11b — `meta/STATUS.md`:** nova secao `## 💬 Última sessão (2026-08-07 — v1.102.0)` no topo do bloco de
sessoes, rebaixando a atual para `## 💬 Sessão anterior`. **Antes de escrever qualquer numero, procure o
valor ANTIGO no arquivo INTEIRO** (`1.101.0`, `80/80`) e atualize **todas** as ocorrencias, nao so o
cabecalho — a copia esquecida no meio do texto passa a mentir. Registrar tambem que a **leva 1** da
analise `260807-ANALISE-feedback-dois-narrativos.md` esta fechada e que as levas 3 e 4 seguem abertas.

---

## Fora de escopo

- **Nao** tocar em `.claude/settings.json` do proprio KCM: foi medido, e JSON valido, e o
  `"defaultMode": "acceptEdits"` ja cobre a ausencia de `Write`.
- **Nao** mexer na D-113 (medicao como bloco colavel). O autor tirou isso desta leva — vai para a frente
  de feedback do Mapsmith/sand-land.
- **Nao** criar a skill de extracao de acervo nem tocar em `src/niches/narrative.js`: e a leva 4, e ela
  comeca por analise.
- **Nao** aproveitar a viagem para curar outras linhas do `CLAUDE.md` gerado.

## Armadilhas desta WO

- **`src/index.template.html` e CRLF** (`validate.js`, `build.js`, `src/niches/*.js` sao LF). Oito das
  nove edicoes de codigo tem **ancora e substituto de uma linha so**, exatamente por isso. A **Edicao 5**
  e a unica insercao multi-linha: as linhas novas precisam entrar com **CRLF**. Conferencia depois de
  aplicar: `python -c "d=open('src/index.template.html','rb').read(); print(d.count(b'\n')-d.count(b'\r\n'))"`
  deve imprimir **0**.
- **Edicao 3:** a linha anterior (`    "",`) **fica com a virgula**. Nao "limpe" a virgula sobrando — e
  valida em JS, e mexer nela exigiria ancora multi-linha num arquivo CRLF, que e o que estamos evitando.
- **Edicao 4:** o resultado sao **dois `if` na mesma linha**. E deliberado, pelo mesmo motivo.
- **Edicao 10a:** o `SHIM` e uma string longa numa linha so; o trecho `buildUpdatePrompt,
  generatedContextFiles` e unico, mas confira que a substituicao nao quebrou as aspas simples da string.
- **Numero de check:** C37 e o proximo livre (o ultimo em uso e C36). Se `validate.js` ja tiver um C37 ao
  aplicar, **PARE e reporte** — nao renumere por conta propria.
- **Nao edite `index.html` a mao.** Edite `src/` e rode `node build.js`.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`,
      `meta/STATUS.md`, `meta/DECISIONS.md` — e nada alem.
- [ ] `grep -c "// Adicione seu comando de build/teste" src/index.template.html` retorna **0**.
- [ ] Nenhuma linha LF orfa em `src/index.template.html` (comando na secao de Armadilhas → **0**).
- [ ] `node build.js` roda sem erro.
- [ ] `node validate.js` fecha **18/18 nichos · 81/81 checagens · 0 erros**, com o **C37 verde**.
- [ ] **C28 imprime os mesmos numeros de antes** — `padrao 6618/6900 · +Code 522/550 · +ASU 372/400 ·
      compart 372/450 · combo 7512/7600`. Se qualquer um mudou, **PARE e reporte**: alguma edicao vazou
      para as Instrucoes, e nenhuma delas deveria.
- [ ] **Teste manual que a validacao nao cobre:** abra `index.html` no navegador, ligue o **Modo Code** em
      qualquer nicho, baixe o **kit do Claude Code (.zip)** e abra `.claude/settings.json` — o arquivo
      precisa terminar no `}` (sem nenhuma linha `//` depois) e ter `"Write"` no `allow`. Depois, no nicho
      **narrativa**, confira na tabela de documentos do CEREBRO que `CONTINUIDADE.md` aparece como
      **Cresce**, e que um arquivo com `BRIEF` no nome continua como **Snapshot**.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o
commit e o push. **Escreva-o DEPOIS de resolver o push** — esta WO instala essa ordem no produto, e seria
tolice aplica-la sem cumpri-la aqui. **Nao** substitua este relatorio pelo bloco de fecho do chat.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/STATUS.md meta/DECISIONS.md
```

```
git commit -m "fix(kit): settings.json valido, Write no allow, push antes do relatorio e CONTINUIDADE que cresce (wo0081, D-115)" -m "- .claude/settings.json gerado terminava com comentario // depois do } final: JSON invalido derrubava TODAS as permissoes em silencio, inclusive additionalDirectories, de que dependem o relatorio em arquivo (D-108) e a medicao delegada (D-113)" -m "- Write entra no allow: a skill wrap mandava criar logs/ e a permissao negava" -m "- kit do Code ganha a ordem do push: verde empurra sozinho; vermelho nao commita nem empurra e fecha com menu numerado (recomendada em 1), nunca com pergunta em prosa; relatorio e sempre o ultimo passo, depois da decisao" -m "- CONTINUIDADE deixa de ser rotulada como snapshot na tabela do CEREBRO: o proprio nicho narrativo declara que CRESCE (append-only)" -m "- pacote de update avisa os projetos JA instalados sobre o settings.json quebrado; consertar o gerador nao conserta quem ja baixou" -m "- check C37 novo: todo artefato emitido com extensao .json abre no JSON.parse, nunca por substring (o harness tinha 80 checks e zero JSON.parse)" -m "- KIT_VERSION 1.102.0; custo de teto zero; 18/18, 80/80 -> 81/81, 0 erros"
```

```
git push
```
