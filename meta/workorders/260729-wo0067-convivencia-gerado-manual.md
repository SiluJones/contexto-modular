# wo0067 — Convivência gerado × manual: bloco marcado no `.flatdropignore`, verificação no ponto de uso, fim do HUB

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.88.0` (pós-wo0066), harness **18/18 · 67/67 · 0 erros**, árvore limpa.
> **Resultado esperado:** `v1.89.0`, harness **18/18 · 68/68 · 0 erros** (check novo **C24**).
>
> **Toca `src/` e `validate.js`** → exige `node build.js` + `node validate.js index.html`.
>
> **Já testada pelo chat:** sandbox reconstruído do mount de 29/07 (v1.88.0), edições aplicadas,
> build + harness — **18/18 · 68/68 · 0 erros**, com anti-teste do C24 (pus uma linha depois do
> `# <<<` → vermelho na asserção certa). **Custo de teto: zero** — tudo novo vive no CEREBRO e no
> arquivo gerado. `narrative` 6612, `game` 6520, `dev` 6117 — inalterados.
>
> **Base:** feedback do FlatDrop (0.14.0) lido no mount — `meta/IDEAS.md` §«Feedback para o Kit»,
> `meta/analises/260728-ANALISE-bloco-gerenciado-vs-manual.md`, `260729-HANDOFF-BRIEF.md` e o
> `flatdrop/core.py`. O que foi aceito, refinado e recusado está registrado abaixo.

---

## Contexto — o que o primeiro projeto pós-v1.87 devolveu

O FlatDrop é o primeiro repo a rodar um ciclo inteiro com as regras novas do kit. Ele devolveu **doze
itens**. Esta WO aplica os cinco de maior valor; os do protocolo de update vão na próxima leva.

**Aceitos como vieram:**

1. **O kit ensina `pasta/*` e não segue.** Verificado: o gerador emite `logs/` na forma antiga duas
   linhas acima do comentário que ensina a forma nova, e manda reincluir o modelo com
   `!analises/_TEMPLATE.md` sem exigir o `analises/*` que faz o `!` valer. Bug nosso, dos dois lados.
2. **A regra «sua cópia não é a fonte da verdade» está longe de onde ela quebra.** Ela mora em
   «Regras de higiene»; o erro acontece ao preencher a linha **Estado**, dezenas de linhas depois.
   **Regra sem gatilho no ponto de uso é decoração** — e aconteceu lá duas horas depois de eles
   trazerem essa mesma regra do kit.
3. **Campo obrigatório induz confabulação.** O bloco pede **Estado** todo turno; sem leitura fresca, a
   saída de menor atrito é preencher com a memória — que, logo depois de entregar um trabalho, é a
   *expectativa* de que ele foi aplicado. O formato precisa admitir «não verificado» como resposta de
   primeira classe.
4. **Falta no kit o princípio do artefato gerado que convive com edição humana.** Eles tropeçaram
   duas vezes no mesmo padrão (o `.flatdropignore` e, antes, o apêndice do CEREBRO). As três
   propriedades que faltavam: enxergar o que existe fora, precedência por posição, não desfazer o que
   não é seu.
5. **Gatilho de análise mais afiado.** «Mudança não-trivial» é subjetivo; **«mudar o formato de um
   artefato que outra pessoa vai ler ou editar»** é testável, e teria pego as três correções que
   exigiram redesenho na sessão deles.

**Aceito com refino (não como veio):**

6. **«A regra do `!` depende da ferramenta, não do padrão.»** Eles mediram: com `PathSpec` a negação
   funciona mesmo sob pasta excluída — quem a matava era a **poda de diretório** na varredura. Está
   certo, e é o motivo real. Mas **não** trocamos a frase por «é só a poda»: no **git puro** a
   limitação é normativa e documentada (não se reinclui arquivo sob pasta excluída). O texto novo diz
   as duas coisas — a poda como causa comum nas ferramentas, o git como regra documentada — porque
   quem lê precisa acertar nos dois mundos.

**Convenção nova, decidida pelo autor:** o `.flatdropignore` que o kit emite passa a ter os
marcadores `# >>> flatdrop-editor` / `# <<<`, com **regra dentro, comentário fora e nada depois do
fim**. Isto foi verificado contra `flatdrop/core.py`: `build_flatdropignore` monta o arquivo como
`pre + bloco_regenerado + pos` — o que estiver **dentro** do bloco é reescrito a cada salvamento
(comentário some), o que estiver **fora** sobrevive intacto. A limitação conhecida está escrita no
próprio arquivo gerado: **regra sobre caminho que ainda não existe não sobrevive dentro do bloco**,
porque o editor só re-deriva o que enxerga na árvore.

---

## Tarefa A — `structuredFlatdropignore` reescrita (`src/index.template.html`)

**Substitua a função inteira.** Ela começa em `function structuredFlatdropignore(codeOn){` e termina
na primeira linha `}` sozinha depois dela (hoje logo após `return L.join("\n");`).

```js
function structuredFlatdropignore(codeOn){
  // Convencao KCM (wo0067): comentario SO fora do bloco (dentro, o editor do FlatDrop apaga
  // no proximo salvamento, porque reescreve o bloco inteiro); REGRA so dentro; nada depois
  // do marcador de fim, porque vale a ultima regra que casa.
  const L = [
    "# .flatdropignore — enxuga o que sobe ao Projeto do Claude (tudo segue versionado no git).",
    "# Sintaxe .gitignore; salvo na raiz; tem a palavra final sobre o .gitignore.",
    "#",
    "# COMO ESTE ARQUIVO E ORGANIZADO:",
    "# - Explicacao e comentario ficam AQUI EM CIMA, fora do bloco. Dentro do bloco eles somem:",
    "#   o editor do FlatDrop reescreve o bloco inteiro a cada salvamento.",
    "# - REGRA (o que some do mount) vai DENTRO do bloco \"# >>> flatdrop-editor\".",
    "# - NADA depois do \"# <<<\": vale a ULTIMA regra que casa, entao o que vier depois vence o bloco.",
    "#",
    "# FORMA: use \"pasta/*\" (o CONTEUDO), nunca \"pasta/\" (a PASTA). Motivo real: a ferramenta que le",
    "# este arquivo costuma PODAR o diretorio casado antes de descer, e um \"!\" la dentro nunca chega",
    "# a ser avaliado (no git puro a limitacao e documentada: nao se reinclui arquivo sob pasta",
    "# excluida). Com \"pasta/*\" a varredura desce e o \"!arquivo\" volta a valer.",
    "# Corolario: modelo/guia de pasta ignorada precisa do PAR completo — a linha \"pasta/*\" e a",
    "# linha \"!pasta/_TEMPLATE.md\" logo depois dela, dentro do bloco.",
    "#",
    "# Logs de sessao: o \"agora\" fica no meta/STATUS.md; o diario nao precisa ir ao mount.",
    "# Analises (meta/analises/, uma por decisao nao-trivial; a pasta nasce no primeiro uso):",
    "# enquanto forem POUCAS, deixe subir — a analise \"Em discussao\" precisa ser relida no turno",
    "# seguinte, e analise que o assistente nao ve nao e discutida, e reescrita do zero. Quando",
    "# pesarem, acrescente ESTE PAR dentro do bloco (modelo sempre sobe; corpo, nao):",
    "#   meta/analises/*",
    "#   !meta/analises/_TEMPLATE.md"
  ];
  if(codeOn){
    L.push("#");
    L.push("# WOs aplicadas: o desfecho vive em meta/DECISIONS.md e meta/CHANGELOG.md; o corpo pesa.");
    L.push("# Para estudar UMA WO no Projeto, reinclua nominalmente: !meta/workorders/<arquivo>.md");
    L.push("# (a linha do \"!\" vai dentro do bloco, logo depois de meta/workorders/*)");
  }
  L.push("");
  L.push("# >>> flatdrop-editor");
  L.push("logs/*");
  if(codeOn) L.push("meta/workorders/*");
  L.push("# <<<");
  return L.join("\n");
}
```

---

## Tarefa B — campo **Estado** com verificação no ponto de uso

**Âncora (linha única):**

```js
  L.push("2. **Estado** — uma linha: onde o projeto está agora (versão/fase e, havendo harness, o resultado dos testes) e o commit, quando existir.");
```

**Substituir por:**

```js
  L.push("2. **Estado** — uma linha: onde o projeto está agora (versão/fase e, havendo harness, o resultado dos testes) e o commit, quando existir. **Todo dado desta linha vem de leitura feita NESTE turno.** Se você não verificou, escreva «não verificado nesta rodada» — é resposta de primeira classe, não falha. Campo obrigatório sem dado fresco puxa a resposta da memória, e logo depois de entregar um trabalho a memória é a *expectativa* de que ele foi aplicado: previsão vestida de observação.");
```

---

## Tarefa C — gatilho concreto de análise

**Âncora (linha única):**

```js
  L.push("- **Mudança pequena não pede análise.**
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
  L.push("- **Gatilho concreto, além do «não-trivial»:** mudar o **formato de um artefato que outra pessoa — ou o você do futuro — vai ler ou editar** pede análise, mesmo quando o diff é pequeno. Nome de arquivo, estrutura de pasta, layout de bloco gerado, campo de formulário, vocabulário de um termo em uso: o custo não está no diff, está em quem vai conviver com ele.");
```

---

## Tarefa D — princípio do artefato gerado (`HYGIENE_RULES`)

**Âncora (linha única):**

```js
  "A sua cópia não é a fonte da verdade:
```

**Ação:** INSERIR **imediatamente antes** da âncora (novo item da lista):

```js
  "Artefato gerado que convive com edição humana precisa de três coisas: (i) **enxergar o que existe fora dele** — senão duplica em silêncio o que a pessoa já escreveu; (ii) **precedência definida por posição** — quem vence quando os dois falam do mesmo; (iii) **nunca apagar nem desfazer o que não é seu**. Bloco gerado dentro de arquivo editável: delimite com marcadores, mantenha-o no FIM do arquivo, escreva só dentro deles, e diga na primeira linha que ali dentro é território da ferramenta (o que a pessoa escrever ali será reescrito). Se o gerado não enxerga o manual, ele desfaz gestos sem avisar — e o sintoma aparece longe da causa.",
```

---

## Tarefa E — `validate.js`: asserção antiga + check **C24**

**E1 — Âncora (linha única, dentro do C21):**

```js
  assert(/# !meta\/analises\/_TEMPLATE\.md/.test(raw), "flatdropignore gerado nao ensina a reinclusao do modelo");
```

**Substituir por** (o texto novo não usa mais o `# ` colado):

```js
  assert(/!meta\/analises\/_TEMPLATE\.md/.test(raw), "flatdropignore gerado nao ensina a reinclusao do modelo");
```

**E2 — Expor o gerador ao harness. Âncora (dentro da constante `SHIM`, linha 7):**

```js
window.__T = {NICHES, STATE,
```

**Substituir por:**

```js
window.__T = {structuredFlatdropignore, NICHES, STATE,
```

**E3 — Âncora (linha única):**

```js
check("C23 a copia nao e a fonte da verdade
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
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

```

---

## Tarefa F — bump

**Âncora:** `const KIT_VERSION = "1.88.0";` → **Substituir por:** `const KIT_VERSION = "1.89.0";`

---

## Tarefa G — dogfood: o `.flatdropignore` do KCM adota a convenção

Hoje o arquivo da raiz não tem marcadores (é 100% curadoria manual) e ainda escreve `logs/` na forma
antiga — o mesmo defeito que o FlatDrop apontou no template. **Substitua o conteúdo inteiro por:**

```
# .flatdropignore — contexto-modular
# Sintaxe .gitignore. Salvo na RAIZ do repo, versionado, tem a palavra final sobre o .gitignore.
# Objetivo: enxugar o que sobe ao mount do Projeto do Claude SEM tirar o que o desenvolvimento precisa.
# Tudo listado aqui CONTINUA versionado no git — so nao e ENVIADO ao Projeto (FlatDrop != deploy != git).
#
# COMO ESTE ARQUIVO E ORGANIZADO (convencao KCM, wo0067):
# - Explicacao e comentario ficam AQUI EM CIMA, fora do bloco. Dentro do bloco eles somem: o editor
#   do FlatDrop reescreve o bloco inteiro a cada salvamento (core.build_flatdropignore = pre + bloco + pos).
# - REGRA (o que some do mount) vai DENTRO do bloco "# >>> flatdrop-editor".
# - NADA depois do "# <<<": vale a ULTIMA regra que casa, entao o que vier depois vence o bloco.
# - Limite conhecido: regra sobre caminho que ainda NAO existe nao sobrevive dentro do bloco (o editor
#   so re-deriva o que enxerga na arvore). Se precisar de uma, deixe-a fora e nao use o editor aqui.
#
# FORMA: use "pasta/*" (o CONTEUDO), nunca "pasta/" (a PASTA). Motivo real: a ferramenta que le este
# arquivo costuma PODAR o diretorio casado antes de descer, e o "!" la dentro nunca chega a ser
# avaliado (no git puro a limitacao e documentada: nao se reinclui arquivo sob pasta excluida). Com
# "pasta/*" a varredura desce e o "!" volta a valer. Medido pelo FlatDrop (FIX-011/DEC-025): com
# PathSpec a negacao funciona — quem a matava era a poda.
# Corolario (wo0063): modelo e guia de pasta ignorada SEMPRE voltam com "!", no PAR completo e na
# MESMA leva em que nascem.
#
# WOs/specs aplicadas: o desfecho vive em meta/DECISIONS.md, meta/CHANGELOG.md e meta/STATUS.md; o
# corpo bruto e historico e pesa no mount. Para estudar UMA no Projeto, reinclua nominalmente dentro
# do bloco, ex.: !meta/workorders/260727-wo0063-analise-no-produto.md
# Analises: enquanto forem POUCAS, sobem — a analise "Em discussao" precisa ser relida no turno
# seguinte. Quando pesarem, acrescente o par dentro do bloco:
#   meta/analises/*
#   !meta/analises/_TEMPLATE.md
# Logs diarios: o "agora" esta no meta/STATUS.md; o consolidado no meta/CHANGELOG.md.
# index.html: e gerado (~230 KB) e o planejamento sempre ancora em src/index.template.html.
#   (Para inspecionar o build DENTRO do Projeto, reinclua com !index.html dentro do bloco.)
# INSTRUCOES-DO-PROJETO.md: ja e lido em todo turno pelo painel do Projeto (437fd39).

# >>> flatdrop-editor
meta/specs/*
meta/workorders/*
!meta/workorders/_GUIA-doc-por-wo.md
!meta/analises/_TEMPLATE.md
logs/*
index.html
INSTRUCOES-DO-PROJETO.md
# <<<
```

> **Confira depois de salvar:** `python -c "..."` não é necessário — basta rodar o FlatDrop uma vez e
> ver se o mount continua com o mesmo conjunto de arquivos de antes (mesma contagem no `_MANIFEST`).
> Se algo que subia parou de subir, é a ordem das linhas `!` — elas têm de vir **depois** da exclusão
> que anulam.

---

## Tarefa H — aposentar o HUB de infraestrutura

O `meta/HUB.md` do KCM é o HUB **de toolchain** (KCM · ASU · FlatDrop), escrito à mão. Ele está parado
desde 2026-07-03: o «Status relâmpago» ainda diz *v1.34.0, 17/17 + 32/32*, quatro meses de versões
atrás. As três frentes agora se coordenam bilateralmente, pelo mount e pelo «Feedback para o Kit» —
que funcionou: esta WO inteira nasceu de um feedback que chegou **sem** o HUB.

1. **Consumir antes de apagar.** Os três itens da caixa de entrada do KCM foram conferidos contra o
   código:
   - *C4 — «editar existente → ASU; criar novo → arquivo inteiro»*: **já aplicado** (o texto atual
     distingue os dois casos, e a instrução curta já menciona o ASU).
   - *ASU nos próprios docs*: recomendação híbrida, sem mudança de contrato — vira nota no IDEAS.
   - *Exportação sinalizar os modos ativos*: **parcialmente aplicado** — o `_UPDATE-MANIFEST.md` já
     grava `ASU sim/nao · Code sim/nao`. O que falta (sinalizar na tela **antes** de exportar) vira
     item aberto no IDEAS.
2. **Preservar os contratos** — é a única coisa do HUB que o KCM ainda usa. Acrescente ao
   `meta/CONTEXT.md`, ao final da seção 8, a subseção:

```markdown
### Dependências externas (herdadas do HUB, aposentado na wo0067)

O KCM depende de dois formatos que **não são dele**. O HUB de toolchain foi aposentado, mas os
contratos continuam:

| Contrato | Forma travada | Dono |
|---|---|---|
| **Manifesto FlatDrop** | cabeçalho `<!-- flatdrop-manifest v1 -->`, tabela `caminho original ↔ nome na pasta` | FlatDrop |
| **Instrução ASU** | `format_version: "1.0"`, `path_mode: relative` + `--root` | ASU |

O KCM é dono de **um**: a diretriz ASU condensada que o switch `asuMode` injeta no CEREBRO — ela
depende do `format_version "1.0"` e **aponta** para o `INSTRUCTION_GUIDE.md` do ASU em vez de
congelá-lo. Se algum dos dois formatos mudar, o sintoma aparece aqui: o assistente emite YAML que o
aplicador recusa, ou traduz nome-plano para caminho errado. Coordenação agora é bilateral, pelo
«Feedback para o Kit» de cada projeto.
```

3. **Apagar** `meta/HUB.md`: `git rm meta/HUB.md`. **Não** mexa no `buildHub()` do produto — o HUB
   **gerado** (para grupos de projetos de conteúdo, como as frentes de um jogo) continua sendo uma
   feature do kit; o que morre é o HUB de infraestrutura do KCM.
4. Se houver referência a `meta/HUB.md` em `meta/CEREBRO.md`, `CLAUDE.md` ou `meta/CONTEXT.md`,
   troque pela nova subseção — **reporte** onde encontrou.

---

## Tarefa I — registros

1. **`meta/DECISIONS.md`** — **D-101 — Convivência gerado × manual: bloco marcado, verificação no
   ponto de uso, HUB aposentado.** Registre as três decisões e, explicitamente, **o que foi recusado**:
   trocar «o `!` não reinclui» por «é só a poda» — a limitação do git puro é normativa, e o texto
   passa a dizer as duas coisas. Contexto: primeiro ciclo completo de um projeto (FlatDrop 0.14.0) com
   as regras pós-v1.87.
2. **`meta/CHANGELOG.md`** — `## v1.89.0 — Convivencia gerado x manual + fim do HUB (wo0067, D-101)`.
3. **`meta/STATUS.md`** — append + versão **v1.89.0** · 68/68.
4. **`meta/IDEAS.md`** — em «Feedback para o Kit», registre que o FlatDrop foi a fonte desta leva. E
   abra:
   - **Protocolo de update (próxima leva):** `_UPDATE-PROMPT` deve pedir o estado do repo antes de
     comparar; afirmar que template genérico **nunca** substitui arquivo vivo refinado; marcar
     `.claude/commands/` como legado; e a linha do `SPEC.md` no manifesto precisa dizer que é
     spec-de-feature (SDD), sob demanda, e **não** o modelo das WOs.
   - **Sinalizar os modos ativos na tela antes de exportar** o template-update (vindo do HUB).
   - **Migrar o próprio KCM de `.claude/commands/` para `.claude/skills/`** — o produto já emite
     skills; a casa ficou no formato antigo.
   - **Nota (ASU nos próprios docs):** recomendação híbrida, sem mudança de contrato.

---

## Verificação

1. `node build.js` · `node validate.js index.html` → **18/18 · 68/68 · 0 erros**, **C24 verde**.
2. Teto inalterado: `narrative` **6612**, `game` **6520**, `dev` **6117**.
3. `meta/HUB.md` ausente; `grep -rn "HUB.md" --exclude-dir=.git .` sem referência órfã (o `buildHub`
   do template **não** conta — é outra coisa).
4. `git status` limpo.

---

## Commit (bloco separado, sem acento)

```bash
git add -A
git commit -m "feat(kit): convivencia gerado x manual + verificacao no ponto de uso (wo0067, D-101)

- .flatdropignore gerado passa a ter o bloco do editor: regra dentro, comentario fora, nada depois
- corrige logs/ para logs/* e entrega o par completo do modelo de analise (bug apontado pelo FlatDrop)
- explica o motivo real do pasta/*: a poda de diretorio, alem da regra normativa do git puro
- campo Estado do bloco de fecho exige leitura feita no turno e admite 'nao verificado'
- gatilho concreto de analise: mudar formato de artefato que outro vai ler ou editar
- principio novo: artefato gerado que convive com edicao humana (enxergar, precedencia, nao desfazer)
- HUB de infraestrutura aposentado; contratos externos preservados no CONTEXT
- check C24; KIT_VERSION 1.89.0; harness 18/18, 68/68, 0 erros"
git push
```
