# wo0071 — Teto por configuração (opção C): trava o incremento, não o total

> **Tipo:** WO de código + registro. **Canal dos meta neste ciclo = CODE.**
> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.92.0` (pós-wo0070, commit `e2b9a74`), harness **18/18 · 71/71 · 0 erros**.
> **Resultado esperado:** `v1.93.0`, harness **18/18 · 72/72 · 0 erros** (check novo **C28**).
> **Base:** `meta/analises/260727-ANALISE-teto-por-configuracao.md`, opção **(C)**, com os números
> aprovados pelo autor (**Code ≤ 550 · ASU ≤ 400**) e a ordem confirmada (curar → travar; a curadoria
> foi a wo0069).
>
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir,
> **PULE** o item e diga no relatório.
>
> **Já testada pelo chat:** sandbox do mount v1.92.0, 5 edições, build + harness — **18/18 · 72/72 ·
> 0 erros**, com dois anti-testes do C28 (inflei uma linha de modo → vermelho no balde certo; tirei a
> publicação dos números no CEREBRO → vermelho). **Custo de teto: zero** na configuração padrão
> (`narrative` 6628, `game` 6536, `dev` 6084 — inalterados).

---

## 1. Por quê

O 6.900 vigiava **uma** configuração — a padrão, com os modos desligados. Nenhum check ligava Modo
Code ou ASU, e por isso toda linha «só no modo Code» passava verde por construção. A wo0069 curou o
excesso (13 nichos acima do teto → 2; incremento 1.469 → 901); esta WO instala a régua que impede a
volta.

**O princípio, que é o coração da decisão:** trava-se o **incremento**, não o total. O total varia com
a riqueza do nicho — a `narrative` é grande porque narrativa é grande, e isso é do projeto, não do
kit. O incremento é exatamente o que as linhas de modo custam, e é o que cada WO nova empurra para
cima. Por isso o **G16 não muda**: ele mede o pior caso de *conteúdo* (chips e multi) e deve continuar
fazendo só isso.

### Um achado da medição: o modelo de dois números tinha um buraco

Ao instalar o check, ele reprovou **17 de 18 nichos** com «+ASU +807 > 400». Investigando: as linhas
de **commit** e de **entregáveis de repo** são liberadas por `asuModeOn() || codeModeOn() || CHANGELOG`
— ou seja, **qualquer** modo de trabalho as liga. No modelo de dois números elas eram cobradas do
Code (que vem primeiro) e ficavam **sem dono** quando só o ASU estava ligado. Decomposto:

| Balde | Hoje | Orçamento |
|---|---|---|
| **Compartilhado** (linhas que qualquer modo liga) | **435** | 450 |
| **Modo Code** sobre o padrão | **529** | **550** |
| **ASU**, marginal sobre o que o Code já custa | **372** | **400** |
| **Total** no combo cheio | **7.529** | **7.600** |
| Padrão (o teto de sempre) | **6.628** | **6.900** |

Os dois números que você aprovou **valem exatamente como aprovados** — o que a medição acrescentou foi
o terceiro balde, que existia e não era vigiado por ninguém. Sem ele, dava para engordar uma linha
compartilhada indefinidamente e passar verde nos dois orçamentos.

---

## Edição 1 — `src/index.template.html` · as constantes do orçamento

**Âncora:**

```js
const INSTR_TETO = 6900;
```

**Substituir por:**

```js
const INSTR_TETO = 6900;
/* Teto por configuracao (wo0071, opcao C da analise 260727): o 6900 vale na configuracao PADRAO.
   Ligar um modo tem orcamento proprio, e o que se trava e o INCREMENTO (o que o kit controla),
   nao o total (que varia com a riqueza do nicho). O total nos combos tem a tolerancia do pior
   caso ja usado pelo G16. */
const INSTR_TETO_MODOS = 7600;
const MODO_ORCAMENTO = { code: 550, asu: 400, compartilhado: 450 };
```

---

## Edição 2 — `src/index.template.html` · o CEREBRO publica os números que o harness cobra

**Âncora:**

```js
  L.push("- **Teto:** as Instruções não devem passar de ~6.900 caracteres. Ao propor uma mudança, diga o tamanho antes e depois.");
```

**Substituir por** (duas linhas; a segunda é um **template literal** com crase, porque interpola as
constantes — copie exatamente, inclusive as crases):

```js
  L.push(`- **Teto:** na configuração **padrão**, as Instruções não devem passar de ~**6.900** caracteres. Ao propor uma mudança, diga o tamanho antes e depois.`);
  L.push(`- **Teto por configuração.** Ligar um modo de trabalho tem orçamento próprio, porque o custo é real e recorrente: **+${MODO_ORCAMENTO.code}** para o Modo Code sobre o padrão, **+${MODO_ORCAMENTO.asu}** para o ASU sobre o que o Code já custa, e **${MODO_ORCAMENTO.compartilhado}** para as linhas que *qualquer* modo de trabalho liga (elas têm limite próprio, senão crescem sem dono). O **total** com modos ligados não passa de **${INSTR_TETO_MODOS}**. O que se trava é o **incremento**, não o total: o total depende de quanta coisa este projeto tem, e isso é seu; o incremento é o que a regra nova custa, e é o que precisa caber. Não caber é sinal de que outra linha precisa ser curada primeiro — mandar detalhe para este CEREBRO é de graça, e a versão curta fica na Instrução.`);
```

> O texto **lê as constantes** de propósito: número publicado à mão divergiria do número cobrado no
> primeiro ajuste de orçamento. O C28 confere que os três aparecem.

---

## Edição 3 — `validate.js` · o `SHIM` expõe as constantes novas

**Âncora** (dentro da constante `SHIM`, linha 7):

```js
window.__T = {structuredFlatdropignore, NICHES, STATE,
```

**Substituir por:**

```js
window.__T = {INSTR_TETO_MODOS, MODO_ORCAMENTO, structuredFlatdropignore, NICHES, STATE,
```

---

## Edição 4 — `validate.js` · o `C26` passa a ler o orçamento

**Âncora:**

```js
  assert(inc <= 950, "os modos voltaram a inchar: incremento de " + inc + " chars (limite de vigilancia: 950)");
```

**Substituir por:**

```js
  const orc=T.MODO_ORCAMENTO.code + T.MODO_ORCAMENTO.asu;
  assert(inc <= orc, "os modos voltaram a inchar: incremento de " + inc + " chars (orcamento: " + orc + ")");
```

> O 950 era limite de vigilância provisório da wo0069. Agora ele é **derivado** do orçamento — uma
> fonte só.

---

## Edição 5 — `validate.js` · check **C28**

**Âncora:**

```js
check("C27 leva sand-land
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
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

```

> A mensagem de sucesso **imprime os cinco números a cada rodada**. É o instrumento que faltava: a
> deriva do orçamento passa a ser visível sem ninguém ir medir à mão.

---

## Edição 6 — bump

**Âncora:** `const KIT_VERSION = "1.92.0";` → **Substituir por:** `const KIT_VERSION = "1.93.0";`

---

## Fora de escopo

Não mexe no **G16** (segue medindo só o pior caso de conteúdo — chips/multi). Não cura mais nenhuma
linha: a curadoria foi a wo0069 e os baldes já cabem. Não toca no `skillsMode` (custo zero medido nas
Instruções). Não implementa a gaveta «Adiadas com gatilho» do template de IDEAS nem as sugestões de
`HISTORY.md` do sand-land — seguem abertas.

## Armadilhas desta WO

- A **Edição 2** troca uma string de aspas duplas por **duas template literals com crase**. Se colar
  com aspas, o `${...}` sai literal no CEREBRO e o C28 reprova — a mensagem será «CEREBRO nao publica
  os tres orcamentos».
- A **Edição 3** mexe na linha do `SHIM`, que é uma string única e longa. Não reformate a linha;
  só acrescente os dois nomes no começo do objeto.
- O `validate.js` **é CRLF**: âncora multi-linha colada com `\n` não casa.

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` + `node validate.js index.html` → **18/18 · 72/72 · 0 erros**.
- [ ] O **C28** aparece verde e imprime exatamente:
      `ok (padrao 6628/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7529/7600)`.
      Se algum número divergir, **pare e reporte** — significa que outra coisa entrou nas Instruções.
- [ ] O **C26** continua verde (agora lendo o orçamento em vez do 950 fixo).
- [ ] `git diff` só em `src/index.template.html`, `validate.js`, `index.html` e os registros.

## Registros (canal CODE)

1. **`meta/DECISIONS.md`** — **D-105 — Teto por configuração: trava o incremento, não o total.**
   Registre: os três baldes com os números aprovados (Code 550 · ASU 400 · compartilhado 450) e o
   total 7600; a decisão de **não** inflar o G16 e por quê; e o achado da medição — o modelo de dois
   números deixava as linhas compartilhadas **sem dono**, o que só apareceu porque o check foi escrito
   e rodado antes de a WO ser entregue.
2. **`meta/CHANGELOG.md`** — `## v1.93.0 — Teto por configuracao (wo0071, D-105)`, com a linha de
   números que o C28 imprime.
3. **`meta/STATUS.md`** — append + versão **v1.93.0** · 72/72. Na linha de folga, acrescente a linha
   do orçamento por modo (é o número que passa a ser vigiado a cada build).
4. **`meta/analises/260727-ANALISE-teto-por-configuracao.md`** — mude o Status para
   **`Decidida e implementada (D + C)`** e acrescente ao final, na seção de respostas, um parágrafo
   curto: a opção (C) foi implementada na wo0071 com **três** baldes em vez de dois, porque a medição
   revelou o balde compartilhado; os números aprovados não mudaram.
5. **`meta/IDEAS.md`** — feche o item da «WO da trava por configuração». Abra: **revisar o orçamento
   quando o custo real de token/caractere mudar** — é a única condição, registrada pelo autor, em que
   o teto sobe (a opção B foi recusada justamente para não acomodar crescimento).

## Commit — blocos separados, mensagem SEM acento

```bash
git add -A
```

```bash
git commit -m "feat(kit): teto por configuracao - trava o incremento (wo0071, D-105)" -m "O 6900 passa a valer explicitamente para a configuracao padrao; ligar um modo tem orcamento proprio: Code +550 sobre o padrao, ASU +400 marginal, compartilhado 450 para as linhas que qualquer modo liga, e total 7600 nos combos. O check C28 mede os 18 nichos em quatro configuracoes e imprime os cinco numeros a cada rodada. O G16 nao muda: ele mede o pior caso de conteudo. Achado da medicao: o modelo de dois numeros deixava as linhas compartilhadas sem dono. KIT_VERSION 1.93.0; harness 18/18, 72/72, 0 erros."
```

```bash
git push
```
