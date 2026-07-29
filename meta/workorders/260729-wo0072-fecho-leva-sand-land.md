# wo0072 — Fecho da leva sand-land: gaveta «Adiadas» com gatilho, tipos de seção no HISTORY, pacote de update transitório

> **Tipo:** WO de código + registro. **Canal dos meta neste ciclo = CODE.**
> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Médio** — são cinco edições de texto de
> template, sem lógica nova. Terminal **PowerShell**.
> **Pré-requisito:** `v1.93.0` (pós-wo0071, commit `e501d72`), harness **18/18 · 72/72 · 0 erros**.
> **Resultado esperado:** `v1.94.0`, harness **18/18 · 73/73 · 0 erros** (check novo **C29**).
> **Base:** `IDEAS-sand-land.md` §«Feedback para o Kit» (itens 1 e 3) e a nota `260729-1252.txt`.
>
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir,
> **PULE** e diga no relatório.
>
> **Já testada pelo chat:** sandbox do mount v1.93.0, 6 edições, build + harness — **18/18 · 73/73 ·
> 0 erros**, com dois anti-testes do C29. **Custo de teto: zero.**

---

## ⚠️ Correção de um erro meu na wo0071

A wo0071 dizia, nas armadilhas: «o `validate.js` **é CRLF**». **Está errado.** Medi agora:
`validate.js`, `build.js` e os `src/niches/*.js` são **LF**; só o `src/index.template.html` é **CRLF**.
Não causou dano (as âncoras daquela WO eram todas de linha única), mas a informação errada podia
custar uma sessão na próxima âncora multi-linha. Esta WO usa a informação certa: **âncora multi-linha
em `.js` cola com `\n`; no `index.template.html`, com `\r\n`.**

---

## 1. Por quê

Sobravam três itens do sand-land — os dois pequenos das sugestões de template e a lição de processo
que eu vinha mantendo na lista de «Manter» há três sessões, sem aplicar. A razão do atraso era
sequenciamento (a corrente wo0069→0071 era sobre o teto e tinha de fechar na ordem), não esquecimento;
mas «esperando a vez» por três turnos é exatamente como um item morre. Fecha agora.

**Item 1 — gaveta de adiadas com gatilho.** O IDEAS já tem «Ativas», «Em avaliação», «Concluídas» e
«Descartadas». Falta o estado mais comum de todos: **decidi não fazer agora**. Hoje essa ideia fica em
«Ativas» (e polui a lista do que está em jogo) ou em «Descartadas» (e é uma mentira: não foi
descartada). O que o sand-land acrescenta, e é a parte boa, é a **exigência do gatilho de volta** —
ideia adiada sem gatilho é ideia perdida, porque ninguém relê uma lista de adiadas por esporte.

**Item 3 — tipos de seção no HISTORY.** O arquivo-baú enumera três exemplos de conteúdo; faltavam os
dois que mais se perdem: a **pesquisa de convenções** (o que já foi investigado antes de adotar um
padrão externo — é o que impede pesquisar de novo em seis meses) e a **autópsia** (sintoma → causa
raiz → correção → como evitar).

**A nota `260729-1252.txt`.** A regra do protocolo de update dizia que o pacote é «entrada
transitória», e o projeto do sand-land tirou-o do mount **antes** de o merge fechar; três trechos de
prosa genérica ficaram de fora e só foram recuperados quando o pacote voltou. Duas lições, e a segunda
é a mais reaproveitável: enquanto o merge estiver em curso o pacote **fica**; e, se ele já saiu, o
assistente **declara a cobertura de leitura** — quais faixas leu verbatim e quais não. Foi essa
declaração que permitiu fechar a lacuna com um diff dirigido em vez de refazer o merge inteiro.

**Recusado (registrado para não voltar):** a taxonomia estendida do IDEAS com IDs `IDEIA-NNN`,
referências de origem e as gavetas «Reduzidas/Reescopadas» e «Longo prazo». Boa para um projeto com
centenas de ideias, cara para todos os outros — aumenta o vocabulário que cada projeto precisa
aprender antes de escrever a primeira linha. Só a gaveta de adiadas passou o corte, e passou por ser
um **estado que já existe na prática** e não tinha lugar.

---

## Edição 1 — `src/index.template.html` · gaveta «Adiadas» no template universal de IDEAS

Arquivo **CRLF**: se colar âncora de mais de uma linha com `\n`, não casa.

**Âncora:**

```
## Concluídas
(implementadas — com a referência: versão, decisão, entrega)
```

**Substituir por:**

```
## Adiadas
(decisão consciente de não fazer AGORA — cada item com **o gatilho que a traz de volta**: «quando o terceiro caso aparecer», «se o arquivo passar de X». Ideia adiada sem gatilho é ideia perdida: ninguém relê uma lista de adiadas por esporte.)

## Concluídas
(implementadas — com a referência: versão, decisão, entrega)
```

---

## Edição 2 — `src/index.template.html` · a lição do pacote transitório

**Âncora** (trecho único, na seção «Ao receber um template-update do KCM»):

```
Antes de comparar, o assistente lista o mount e diz em que versão/commit o projeto está: comparar sem saber o estado atual é comparar com memória.
```

**Substituir por:**

```
Antes de comparar, o assistente lista o mount e diz em que versão/commit o projeto está: comparar sem saber o estado atual é comparar com memória. **O pacote é entrada transitória, mas não descartável no meio do caminho:** enquanto um merge estiver em curso, ele precisa continuar no mount até o merge fechar — pacote que sai antes do fim leva embora o original de comparação, e o que ficou de fora só aparece depois. Se ele já saiu, o assistente **declara a cobertura de leitura**: quais faixas leu **verbatim** e quais não. É essa declaração que permite fechar a lacuna com um diff dirigido em vez de refazer o merge inteiro.
```

---

## Edição 3 — `src/niches/dev.js` · dois tipos de seção no HISTORY

Arquivo **LF** — âncora multi-linha cola com `\n`.

**Âncora:**

```
## 3. [Procedimento herdado]
[Passo a passo que raramente muda.]
```

**Substituir por:**

```
## 3. [Procedimento herdado]
[Passo a passo que raramente muda.]

## 4. [Pesquisa de convenções]
[O que foi investigado antes de adotar um padrão externo (nome, formato, biblioteca) e o que se decidiu a partir dela. Registra o que JÁ foi pesquisado — é o que impede alguém pesquisar de novo em seis meses.]

## 5. [Autópsia de um problema resolvido]
[Sintoma → causa raiz → correção → como evitar de novo. Vale sobretudo quando o sintoma apareceu longe da causa.]
```

---

## Edição 4 — `src/niches/research.js` · os mesmos dois tipos, no vocabulário do nicho

**Âncora:**

```
## 3. [Decisão metodológica histórica]
[Por que tal método/recorte foi adotado numa fase anterior.]
```

**Substituir por:**

```
## 3. [Decisão metodológica histórica]
[Por que tal método/recorte foi adotado numa fase anterior.]

## 4. [Pesquisa de convenções]
[O que foi investigado antes de adotar um padrão externo (norma de citação, taxonomia, ferramenta) e o que se decidiu a partir dela. Registra o que JÁ foi pesquisado — é o que impede pesquisar de novo em seis meses.]

## 5. [Autópsia de um problema resolvido]
[Sintoma → causa raiz → correção → como evitar de novo. Vale sobretudo quando o sintoma apareceu longe da causa.]
```

---

## Edição 5 — `src/niches/dev.js` · gaveta «Adiadas» no IDEAS próprio do dev

O `dev` tem IDEAS próprio (com emoji por seção), então recebe a gaveta no vocabulário dele.

**Âncora:**

```
## ✅ Concluídas
> Ideia que virou realidade.
```

**Substituir por:**

```
## 🛌 Adiadas
> Decisão consciente de não fazer agora. Cada item com **o gatilho que a traz de volta** («quando o terceiro caso aparecer», «se o build passar de X»): ideia adiada sem gatilho é ideia perdida.
- **[Ideia]** — adiada porque [motivo] — **volta quando** [gatilho concreto].

---

## ✅ Concluídas
> Ideia que virou realidade.
```

---

## Edição 6 — `src/niches/brainstorm.js` · a gaveta já existe; falta o gatilho

O `brainstorm` já tem «Em banho-maria (boas, mas não agora)» — **não crie seção nova**; a gaveta dele
só precisa da exigência do gatilho. Respeitar o vocabulário de cada nicho é de propósito: o kit cobra
a **regra**, não o nome da seção.

**Âncora:**

```
## Em banho-maria (boas, mas não agora)
> Ideias válidas que não cabem nesta rodada — guardadas de propósito.
- **i-[N]** — [a ideia] — adiada porque [não é o foco agora / depende de X].
```

**Substituir por:**

```
## Em banho-maria (boas, mas não agora)
> Ideias válidas que não cabem nesta rodada — guardadas de propósito. Cada uma com **o gatilho que a traz de volta**: ideia adiada sem gatilho é ideia perdida, porque ninguém relê esta lista por esporte.
- **i-[N]** — [a ideia] — adiada porque [não é o foco agora / depende de X] — **volta quando** [o gatilho concreto].
```

---

## Edição 7 — `validate.js` · check **C29**

Arquivo **LF**.

**Âncora:**

```js
check("C28 teto por configuracao
```

**Ação:** INSERIR **imediatamente antes**:

```js
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

```

---

## Edição 8 — bump

**Âncora:** `const KIT_VERSION = "1.93.0";` → **Substituir por:** `const KIT_VERSION = "1.94.0";`

---

## Fora de escopo

Não implementa a taxonomia estendida do IDEAS (recusada, ver §1). Não cria seção «Adiadas» no
`brainstorm` (a dele já existe com outro nome). Não mexe em `FILTROS.md` nem em nenhum outro arquivo do
`brainstorm`. Não toca em orçamento de teto — nada aqui entra nas Instruções.

## Armadilhas desta WO

- **Fins de linha, agora medidos:** `index.template.html` é **CRLF**; `validate.js`, `build.js` e os
  `src/niches/*.js` são **LF**. A wo0071 dizia o contrário sobre o `validate.js` — desconsidere.
- A **Edição 5** e a **Edição 6** parecem a mesma coisa e não são: uma **cria** a gaveta (dev), a outra
  só **acrescenta a exigência do gatilho** na gaveta que já existe (brainstorm). Não crie «Adiadas» no
  brainstorm.
- A **Edição 1** mexe no template universal; o `dev` e o `brainstorm` **não** o usam (têm IDEAS
  próprio). Se você editar só o universal, o C29 reprova nos dois.

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` + `node validate.js index.html` → **18/18 · 73/73 · 0 erros**.
- [ ] O **C29** verde, imprimindo `ok (18 IDEAS · 2 HISTORY)`.
- [ ] O **C28** continua verde com os mesmos números (`padrao 6628/6900 · +Code 529/550 · +ASU 372/400
      · compart 435/450 · combo 7529/7600`) — nada desta WO entra nas Instruções.
- [ ] `git diff` em `src/index.template.html`, `src/niches/dev.js`, `src/niches/research.js`,
      `src/niches/brainstorm.js`, `validate.js`, `index.html` e os registros.

## Registros (canal CODE)

1. **`meta/DECISIONS.md`** — **D-106 — Gaveta de adiadas com gatilho de volta; HISTORY ganha pesquisa
   e autópsia; pacote de update fica até o merge fechar.** Registre o critério que separou o que
   entrou do que não entrou: passou a gaveta porque é **estado que já existe na prática e não tinha
   lugar**; não passou a taxonomia estendida porque aumenta o vocabulário obrigatório de todo projeto.
   Registre também que a **regra é cobrada, o nome da seção não** — cada nicho usa o vocabulário dele
   (o `brainstorm` já tinha «Em banho-maria»).
2. **`meta/CHANGELOG.md`** — `## v1.94.0 — Fecho da leva sand-land (wo0072, D-106)`.
3. **`meta/STATUS.md`** — append + versão **v1.94.0** · 73/73.
4. **`meta/IDEAS.md`** — em «Feedback para o Kit», fechar os dois itens do sand-land e a nota
   `260729-1252` como **atendidos**, creditando o projeto. **A leva do sand-land fecha aqui** — não
   sobra item aberto dele.
5. **`meta/CONTEXT.md`** — na §7 (armadilhas conhecidas), acrescente:
   `17. **Fim de linha por arquivo:** `src/index.template.html` é **CRLF**; `validate.js`, `build.js` e
   `src/niches/*.js` são **LF**. Âncora multi-linha colada com o separador errado não casa — e a
   wo0071 chegou a afirmar o contrário sobre o `validate.js` (wo0072).`

## Commit — blocos separados, mensagem SEM acento

```bash
git add -A
```

```bash
git commit -m "feat(kit): fecho da leva sand-land (wo0072, D-106)" -m "IDEAS ganha a gaveta de adiadas exigindo o gatilho que traz a ideia de volta, no vocabulario de cada nicho (universal e dev criam a secao; brainstorm ja tinha banho-maria e recebe so a exigencia). HISTORY do dev e do research ganham dois tipos de secao: pesquisa de convencoes e autopsia. O protocolo de update passa a dizer que o pacote fica no mount ate o merge fechar e que o assistente declara a cobertura de leitura quando ele sai antes. Registrado tambem o fim de linha real por arquivo, corrigindo o que a wo0071 afirmou. Check C29; KIT_VERSION 1.94.0; harness 18/18, 73/73, 0 erros."
```

```bash
git push
```
