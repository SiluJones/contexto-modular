# wo0069 — Curadoria das linhas de modo (opção D da análise do teto) + o ASU pela interface

> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Alto**, terminal **PowerShell**.
> **Pré-requisito:** `v1.90.0` (pós-wo0068, commit `fa5e0c1`), harness **18/18 · 69/69 · 0 erros**.
> **Resultado esperado:** `v1.91.0`, harness **18/18 · 70/70 · 0 erros** (check novo **C26**).
>
> **Tipo:** WO de código (`src/` + `validate.js`) + registro. **Canal dos meta neste ciclo = CODE.**
> **Base:** `meta/analises/260727-ANALISE-teto-por-configuracao.md`, opção **(D)** aprovada pelo autor,
> e a informação nova de que o ASU é usado **pela interface**.
>
> **Idempotência:** antes de cada substituição, procure a frase-chave do texto NOVO. Se já estiver lá,
> **PULE** o item e diga no relatório — não duplique.
>
> **Já testada pelo chat:** sandbox do mount v1.90.0, 6 edições, build + harness — **18/18 · 70/70 ·
> 0 erros**, com dois anti-testes do C26.

---

## Por quê

A análise do teto mediu o problema: **13 dos 18 nichos** entregavam Instruções acima de 6.900 quando
o usuário ligava Modo Code + ASU, com o pior caso em **8.097** (`narrative`). A opção **(D)** —
curar as linhas de modo antes de instalar qualquer trava — foi a aprovada, e a razão é que travar sem
curar carimbaria o tamanho atual como orçamento aceito.

**A curadoria não corta regra: corta duplicação.** Conferi antes de cortar — o CEREBRO gerado **já
traz** a seção «Saída de código via ASU (patch)» com o escopo por tipo de arquivo, os docs rolantes e
a verificação obrigatória, e **já traz** «Artefatos de repo (.gitignore, README)». As linhas longas
das Instruções eram repetição do que o CEREBRO detalha — exatamente o padrão que a wo0056-A resolveu
para os princípios (versão curta na Instrução, definição completa no CEREBRO, check nas duas pontas).

**Informação nova do autor, que muda o texto do ASU:** ele aplica as instruções **pela interface**,
guarda o `.yaml` fora da raiz do projeto e arquiva depois. As conversas dos projetos vinham gastando
espaço com instrução de execução e ficando confusas sobre onde guardar o arquivo — coisa que não é
problema delas. O trabalho do assistente termina no **`.yaml` válido**: âncoras copiadas do arquivo
vivo, estratégia existente no guia, caminhos conferidos. Se esbarrar em limitação da ferramenta, o
caminho é o «Feedback para o ASU» — não improvisar.

### Resultado medido

| | Antes | Depois |
|---|---|---|
| `narrative` +Code+ASU | 8.097 (**+1.197** acima do teto) | **7.529** (+629) |
| `game` +Code+ASU | 8.005 (+1.105) | **7.437** (+537) |
| `career` +Code+ASU | 7.447 (+547) | **6.879** (dentro) |
| Nichos acima do teto no combo cheio | **13 de 18** | **2 de 18** |
| Incremento máximo do **+Code** | 779 | **529** |
| Incremento máximo do **+ASU** | 690 | **372** |
| `dev` na configuração **padrão** | 6.334 (folga 566) | **6.084** (folga **816**) |

`narrative` e `game` na configuração padrão **não mudam** (6.628 e 6.536): as linhas curadas são
todas condicionais aos modos. O ganho do `dev` no padrão vem da fusão `.gitignore`+README, que ele
paga por ter `CHANGELOG.md` no conjunto de arquivos.

---

## Edição 1 — `src/index.template.html` · linha do ASU nas Instruções

**Âncora** (linha única, dentro de `buildInstr`):

```js
  if(asuModeOn()) lines.push("ASU: **editar** código, doc de heading estável (DECISIONS + o doc de contexto estável do projeto) ou trecho localizado de capítulo → instrução `yaml` **para baixar** (nome `AAMMDD-asuNNNN.yaml`, bytes exatos, âncora copiada do arquivo real). **Escrita nova**, **reescrita profunda** e **docs rolantes** (STATUS/CHANGELOG/IDEAS/HISTORY e equivalentes que acumulam por higiene) → arquivo inteiro para baixar. Apliquei ASU? Confira no disco cada arquivo tocado antes de seguir, mesmo sem eu pedir. Detalhe no CEREBRO.");
```

**Substituir por:**

```js
  if(asuModeOn()) lines.push("ASU: **editar** o que já existe → instrução `yaml` para baixar (`AAMMDD-asuNNNN.yaml`, bytes exatos, âncora copiada do arquivo vivo). **Escrita nova, reescrita profunda e docs rolantes** → arquivo inteiro. Escopo por tipo de arquivo e verificação: CEREBRO.");
```

> **O que saiu e onde está:** a enumeração dos docs rolantes e a verificação pós-aplicação seguem
> **inteiras** no CEREBRO, §«Saída de código via ASU (patch)», itens 3 e «Verificação obrigatória».
> O C26 reprova o build se qualquer uma das duas pontas sumir.

---

## Edição 2 — `src/index.template.html` · linha de feedback do ASU

**Âncora:**

```js
  if(asuModeOn()) lines.push("**Feedback ASU:** se gerou instrução ASU ou esbarrou numa limitação/pedido de melhoria da ferramenta nesta sessão, registre em «Feedback para o ASU» no IDEAS antes de fechar.");
```

**Substituir por:**

```js
  if(asuModeOn()) lines.push("**Feedback ASU:** limitação ou pedido de melhoria da ferramenta → «Feedback para o ASU» no IDEAS, antes de fechar.");
```

---

## Edição 3 — `src/index.template.html` · `.gitignore` + README viram uma linha

São **quatro** linhas consecutivas hoje (dois `if` idênticos, cada um com seu `push`). Localize o
par pelo texto do `push`.

**3a — Âncora:**

```js
    lines.push("**`.gitignore`:** em projeto com repo, entregue um `.gitignore` adequado ao stack na PRIMEIRA leva que crie estrutura (ex.: node_modules, dist, .env, outputs, backups). Não espere o usuario pedir; entregue junto com os primeiros arquivos.");
```

**Substituir por:**

```js
    lines.push("**Entregáveis de repo (sem eu pedir):** `.gitignore` adequado ao stack na PRIMEIRA leva que criar estrutura; `README.md` quando a estrutura estabilizar — se for cedo, DIGA que está adiando e por quê. Detalhe no CEREBRO.");
```

**3b — REMOVER as DUAS linhas seguintes** (o `if` e o `push` do README), que ficam logo abaixo:

```js
  if(asuModeOn() || codeModeOn() || coreFiles.some(n=>/CHANGELOG/i.test(n)))
    lines.push("**README:** entregue/atualize o `README.md` quando a estrutura estabilizar (nao no rascunho inicial, para nao nascer desatualizado). Se ainda for cedo, DIGA que esta adiando e por que — nunca simplesmente omita.");
```

> **Cuidado:** a linha `if(asuModeOn() || codeModeOn() || coreFiles.some(...))` aparece **duas vezes**
> em sequência — uma para cada `push`. Remova **a segunda** (a que precede o `push` do README) junto
> com o `push`; a primeira continua servindo à linha fundida. O detalhe dos dois artefatos segue no
> CEREBRO, em «Artefatos de repo (.gitignore, README)».

---

## Edição 4 — `src/index.template.html` · linha do commit, sem a redundância

**Âncora** (trecho único):

```
mensagem sem acento. Não pule o commit. Bloco git parcial
```

**Substituir por:**

```
mensagem sem acento. Bloco git parcial
```

> «Não pule o commit» já é dito pelo **ENTREGUE** no começo da mesma linha.

---

## Edição 5 — `src/index.template.html` · CEREBRO: onde termina o trabalho do assistente

**Âncora** (trecho único, na seção «Saída de código via ASU (patch)»):

```
Acompanhe de UMA linha: `python -m src apply <arquivo>.yaml --root <RAIZ> --dry-run`. Nunca XML.
```

**Substituir por:**

```
O seu trabalho termina no `.yaml` **válido** — âncoras copiadas do arquivo vivo, estratégia existente no guia, caminhos conferidos. **Como o usuário aplica (interface do ASU ou linha de comando) e onde ele guarda o arquivo não é assunto seu:** não emita instruções de execução nem invente pasta de destino, a menos que ele peça. Se ele pedir a linha: `python -m src apply <arquivo>.yaml --root <RAIZ> --dry-run`. Nunca XML.
```

---

## Edição 6 — `validate.js` · check **C26**

**Âncora:**

```js
check("C25 protocolo de update e gatilho
```

**Ação:** INSERIR **imediatamente antes** da âncora:

```js
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
  assert(inc <= 950, "os modos voltaram a inchar: incremento de " + inc + " chars (limite de vigilancia: 950)");
  return "ok (incremento dos modos: " + inc + ")";
});

```

> O limite de **950** é de **vigilância**, não a trava definitiva — hoje o incremento é **901**. A
> trava por configuração (opção C da análise) é a próxima frente e substitui este número.

---

## Edição 7 — bump

**Âncora:** `const KIT_VERSION = "1.90.0";` → **Substituir por:** `const KIT_VERSION = "1.91.0";`

---

## Edição 8 — `meta/analises/260727-ANALISE-teto-por-configuracao.md`: registrar as respostas

**8a — Âncora** (cabeçalho):

```
> **Status:** Em discussão
```

**Substituir por:**

```
> **Status:** Decidida (parcial — (D) aplicada na wo0069; (C) na fila)
```

**8b — Âncora:**

```
> **Vira:** [a decidir] · **Decisão:** [a registrar]
```

**Substituir por:**

```
> **Vira:** wo0069 (curadoria, opção D) → WO da trava por configuração (opção C) · **Decisão:** D-103
```

**8c —** ACRESCENTAR ao final do arquivo, depois da seção «Ponto de decisão»:

```markdown

---

## Respostas do autor (2026-07-29) e o que foi medido depois

**(A) Documentar e aceitar** — adotada como **complemento**, não como resposta isolada, conforme a
análise recomendava.
**(B) Subir o teto** — **recusada.** Racional do autor: daria margem para os projetos engordarem as
Instruções; o teto só sobe quando as recomendações e o custo real de token/caractere avançarem —
não para acomodar o que já cresceu.
**(C) Teto por configuração** — **aceita, depois de (D)**.
**(D) Curar as linhas de modo** — **aceita e aplicada na wo0069.**
**(E) Escopar por nicho** — **descartada**, como a análise recomendava.

**1. Ordem curar → travar, em duas WOs:** confirmada.

**2. Orçamento por modo — apertado ou folgado?** A curadoria respondeu com número. Depois da wo0069
o incremento máximo medido é **+529 (Code)** e **+372 (ASU)**, contra 779 e 690 antes. A recomendação
é fixar o orçamento **logo acima do que já cumprimos**: **Code ≤ 550 · ASU ≤ 400**. Isso é «apertado»
na definição útil do termo — um orçamento que já é cumprido hoje, de modo que a próxima linha de modo
só entra se outra for curada. O «folgado» (800/600) legitimaria de volta exatamente o que acabou de
ser cortado. **Sobre o medo de perder regra:** a curadoria da wo0069 não cortou nenhuma — cortou
duplicação, e o C26 exige as duas pontas (versão curta na Instrução **e** definição completa no
CEREBRO). Esse é o mecanismo que torna a curadoria agressiva segura: o que sai da Instrução tem de
estar provado no CEREBRO, senão o build fica vermelho.

**3. O `G16` deve incluir os modos?** Recomendação: **não** transformar o G16 no check de tudo.
Ele mede o pior caso de **conteúdo** (chips/multi) e deve continuar assim. Os modos ganham um check
próprio, e a diferença é conceitual: **trave o incremento, não o total.** O total varia com a riqueza
do nicho (a `narrative` é grande porque a narrativa é grande) e o kit não controla isso; o incremento
é exatamente o que as linhas de modo custam, e é o que cada WO nova empurra para cima. O total no
combo cheio ganha uma tolerância documentada — o mesmo **7.600** que o G16 já usa como pior caso, e
que `narrative` (7.529) e `game` (7.437) agora cumprem, em vez de um número novo inventado.

**4. Publicar a folga no STATUS a cada versão:** aceito, com a ordem de prioridade pedida —
**`dev` primeiro** (é o nicho com mais projetos e o que trouxe o feedback do sand-land), depois
`narrative` e `game`, que são os que chegam antes no teto.
```

---

## Fora de escopo

Não instala a trava por configuração (opção C) — ela é a WO seguinte, e depende dos números que esta
WO acabou de mudar. Não mexe no `G16`. Não toca nas linhas de modo do **Skills** (custo zero medido
nas Instruções). Não aplica nada do feedback do **sand-land** (FK-A/B/C e as sugestões de CEREBRO e
IDEAS) — é a leva seguinte, e a maior parte dela vive no CEREBRO, que não disputa teto.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` + `node validate.js index.html` → **18/18 · 70/70 · 0 erros**, **C26 verde**
      (a mensagem do C26 imprime o incremento; deve dizer **901**).
- [ ] Configuração **padrão** inalterada: `narrative` **6628**, `game` **6536**. `dev` cai para **6084**.
- [ ] `git diff` mostra só `src/index.template.html`, `validate.js`, `index.html`, `meta/analises/...`
      e os registros.
- [ ] Nenhuma linha de regra desapareceu sem contrapartida no CEREBRO — é o que o C26 prova.

## Registros (canal CODE)

1. **`meta/DECISIONS.md`** — **D-103 — Curar antes de travar: as linhas de modo perdem a duplicação,
   não a regra.** Registre os números (13→2 nichos acima do teto; incremento 1469→901) e as respostas
   (A) a (E) do autor, com o racional da recusa de (B): o teto só sobe quando o custo real de
   token/caractere avançar, não para acomodar crescimento.
2. **`meta/CHANGELOG.md`** — `## v1.91.0 — Curadoria das linhas de modo (wo0069, D-103)`.
3. **`meta/STATUS.md`** — append + versão **v1.91.0** · 70/70 + a linha de folga na ordem nova:
   **`dev` 6084/6900 (folga 816)** · `narrative` 6628 (272) · `game` 6536 (364).
4. **`meta/IDEAS.md`** — abrir: **WO da trava por configuração (opção C)** com os números
   recomendados (Code ≤ 550 · ASU ≤ 400 · total ≤ 7600 nos combos) e a decisão de **não** inflar o G16.

## Commit — blocos separados, mensagem SEM acento

```bash
git add -A
```

```bash
git commit -m "feat(kit): curadoria das linhas de modo (wo0069, D-103)" -m "Linha do ASU, feedback do ASU e artefatos de repo passam a versao curta nas Instrucoes, com a definicao completa preservada no CEREBRO e provada pelo check C26 nas duas pontas. Nichos acima do teto no combo Code+ASU caem de 13 para 2; incremento dos modos cai de 1469 para 901. CEREBRO passa a dizer que o trabalho do assistente termina no yaml valido: como o usuario aplica e onde guarda nao e assunto da conversa. KIT_VERSION 1.91.0; harness 18/18, 70/70, 0 erros."
```

```bash
git push
```
