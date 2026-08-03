# WO 0080 — Modelo de análise no pacote, contagem repetida no STATUS e IDEAS por ID

> **Tipo:** template + harness. Nenhum arquivo de nicho.
> **Config sugerida:** Sonnet 5, esforço **Médio**. Sete edições ancoradas + um check.
> **Pré-requisito:** `v1.100.0`, commit `126f754`, harness **18/18 · 79/79 · 0 erros**.
> **ATENÇÃO — push:** o relatório da wo0079 (`260803-0955-code-kcm.txt`) registra que o `git push` de
> `126f754` **ficou aguardando confirmação**. A linha de status do manifesto diz «limpo», que é verdade
> sobre a árvore e nada diz sobre `ahead/behind`. **Confirme com `git rev-list --left-right --count
> origin/main...main` antes de começar** e relate o que encontrou.
> **Base:** `IDEAS-mapsmith.md`, «Feedback para o Kit» — itens do `/wrap`, do `_TEMPLATE.md` de
> `analises/` e do IDEAS por status+ID. Levas **C e D de 4** (as últimas).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada edição; se já existir, **PULE**.

> **Canal dos meta neste ciclo = CODE.**

---

## 1. Por que

**(C) Valor repetido em prosa envelhece onde ninguém olha.** Uma frente irmã relatou que o `/wrap`
atualiza a contagem de testes no cabeçalho do `STATUS.md` e **esquece a mesma contagem no meio do
texto** — aconteceu duas vezes seguidas, e o chat teve de corrigir nas duas. Eles observaram o mesmo com
uma frase de estado («abrindo e usável até a aba X»), que ficou defasada por idêntica razão. Ou seja: o
problema não é contagem, é **qualquer valor repetido**. A correção é uma linha na skill: ao mudar um
número ou um estado, procure o **valor antigo no arquivo inteiro**.

**(D-i) O kit manda criar `analises/` e não manda o modelo — mas mandar o modelo fura a pasta
preguiçosa.** A frente irmã tem razão: o modelo é o que faz a convenção pegar, e hoje o kit só descreve
o esqueleto no CEREBRO, deixando o assistente escrevê-lo do zero. Só que o protocolo de update diz «para
cada arquivo, compare e adote o que falta» — mandar o `_TEMPLATE.md` como arquivo comum criaria
`meta/analises/` **vazia** em todo projeto que receber o pacote, violando a regra de que pasta nasce no
primeiro uso.

A saída não é escolher um lado: é **uma terceira natureza no pacote**. Ele já ramifica entre `template`
(comparar e adotar é seguro) e `fusao` (propor merge, o usuário decide). Entra `modelo-em-espera`:
*guarde; só coloque se a pasta já existir aqui; se não existe, o arquivo não entra e **isso não é
pendência***. A ressalva vira ramo do protocolo em vez de observação num campo de texto.

**(D-ii) O IDEAS por status+ID é desvio legítimo e a válvula não sabia disso.** A frente irmã organiza o
IDEAS por status e ID estável porque o roadmap e o registro de decisões **referenciam ideias por ID** —
adotar a divisão por autor do template seria regressão. Não vale criar uma variante no kit (mais
superfície para manter); vale a válvula de desvio **nomear este caso** como exemplo do que ela autoriza.
Regra que não dá exemplo do que permite é lida como se não permitisse nada.

---

## Edição 1 — `src/index.template.html` · a skill `/wrap` do kit confere o valor antigo

**Âncora** (linha do array `wrap` em `buildCodeKitFiles()`):

```
    "Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

**Substituir por:**

```
    "Ao mudar um número ou um estado no `STATUS.md` (contagem de testes/checagens, versão, «funciona até X»), procure o valor ANTIGO no arquivo INTEIRO e atualize todas as ocorrências — o cabeçalho não é o único lugar onde ele aparece, e a cópia esquecida no meio do texto passa a mentir.",
    "Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo). Se a escrita for negada, diga e siga.",
```

> Esta frase existe **uma vez** — a do `apply-wo` diz «Grave o MESMO relatório», com o «MESMO». Se a
> âncora casar duas vezes, PARE.

## Edição 2 — `src/index.template.html` · a válvula de desvio ganha o exemplo do IDEAS por ID

**Âncora** (fim da regra «Válvula de desvio registrado» em `HYGIENE_RULES`):

```
Desviar SEM registrar é que é o erro; desviar registrando é como o kit aprende. E não duplique o que a estrutura já cobre.
```

**Substituir por:**

```
Desviar SEM registrar é que é o erro; desviar registrando é como o kit aprende. E não duplique o que a estrutura já cobre. **Exemplo já visto e legítimo:** projeto cujo roadmap e registro de decisões referenciam ideias por **ID estável** organiza o IDEAS por status + ID, não pela divisão por autor do template — adotar o template ali seria regressão, e o desvio é o certo.
```

## Edição 3 — `src/index.template.html` · função que gera o modelo de análise

**Âncora:**

```
function buildWoTemplate(){
```

**Inserir IMEDIATAMENTE ANTES** a função abaixo, seguida de uma linha em branco (a âncora reaparece no
fim):

```
function buildAnaliseTemplate(){
  return [
    "# ANALISE — <assunto>",
    "",
    "> **Status:** Rascunho | Em discussao | Decidida | Implementada | Abandonada | Substituida",
    "> **Data:** AAAA-MM-DD (data de criacao; nao muda depois)",
    "",
    "> Analise e para quando a pergunta ainda e do dono. Se ele ja decidiu o QUE, isto nao e analise:",
    "> e decisao registrada + ordem de trabalho. E se a leitura derrubar a premissa que disparou tudo,",
    "> PARE — o achado tecnico vai para as armadilhas da ordem de trabalho, nao volta como pergunta.",
    "",
    "## Problema",
    "",
    "[O que doi, para quem, e o que acontece se nada for feito.]",
    "",
    "## Restricoes / o que foi medido",
    "",
    "[Numeros, limites e fatos conferidos — com o comando ou a fonte que os produziu. Opiniao aqui",
    "contamina tudo o que vem depois.]",
    "",
    "## Opcoes consideradas",
    "",
    "[Uma por bloco, INCLUSIVE as descartadas, cada uma com o motivo do descarte.]",
    "",
    "## Recomendacao",
    "",
    "[UMA, explicita, com o porque. Analise que devolve duas opcoes equivalentes empurra a decisao",
    "de volta sem ter reduzido nada.]",
    "",
    "## Riscos",
    "",
    "[O que pode dar errado se a recomendacao for seguida — e o sinal que mostraria isso cedo.]",
    "",
    "## Ponto de decisao",
    "",
    "[A pergunta unica que o dono precisa responder para isto virar trabalho.]",
    ""
  ].join("\n");
}

function buildWoTemplate(){
```

> O `join("\n")` usa `\n` simples — é conteúdo de arquivo gerado, não código do template.

## Edição 4 — `src/index.template.html` · o pacote passa a levar o modelo

**Âncora** (primeira linha do bloco dos ignores recomendados em `buildUpdatePack`):

```
  files.push({ flat: updateFlat("gitignore"), real: ".gitignore", nature: "template",
```

**Inserir IMEDIATAMENTE ANTES:**

```
  files.push({ flat: updateFlat("analises._TEMPLATE.md"), real: "meta/analises/_TEMPLATE.md", nature: "modelo-em-espera",
    role: "Modelo de analise. So coloque quando a pasta NASCER — nao crie a pasta para receber o modelo.", content: buildAnaliseTemplate() });
```

> **Fora do `if(codeOn)` de propósito:** a convenção de análise é universal aos 18 nichos, não do Modo
> Code. O C36 confere as duas configurações.

## Edição 5 — `src/index.template.html` · a legenda explica a terceira natureza

**Âncora:**

```
  L.push("> e propor merge, o usuario decide — nunca substituicao cega.");
```

**Substituir por:**

```
  L.push("> e propor merge, o usuario decide — nunca substituicao cega. Natureza `modelo-em-espera` =");
  L.push("> guarde: so coloque no destino se a pasta JA existir neste projeto. Pasta nasce no primeiro uso,");
  L.push("> nunca para receber um modelo — se ela nao existe aqui, o arquivo nao entra e isso NAO e pendencia.");
```

## Edição 6 — `src/index.template.html` · o CEREBRO aponta para o modelo do pacote

**Âncora** (trecho no MEIO da linha «Modelo:» da seção de análise):

```
- **Modelo:** ao escrever a primeira, deixe também um `analises/_TEMPLATE.md` com esse esqueleto — o modelo é o que faz a convenção pegar.
```

**Substituir por:**

```
- **Modelo:** o pacote de atualização do kit já traz um `analises/_TEMPLATE.md` pronto, com natureza «modelo-em-espera» — coloque-o quando a pasta nascer, e não antes. Sem o pacote, escreva o modelo junto com a primeira análise: o modelo é o que faz a convenção pegar.
```

> O resto da linha (a regra de reinclusão no `.flatdropignore`) **não muda** — case só este trecho.

## Edição 7 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.100.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.101.0";
```

## Edição 8 — `validate.js` · check C36

**Âncora** (primeira linha do check C35):

```
check("C35 medicao delegada (wo0079): secao no CEREBRO dos 18, gatilho SO no modo Code, secao sem ancora no modelo de WO, formato de retorno no kit do Code", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C35):

```
check("C36 modelo de analise no pacote + contagem repetida no STATUS (wo0080): natureza modelo-em-espera, pasta preguicosa preservada, wrap confere valor antigo, valvula cita IDEAS por ID", () => {
  const n=T.normNiche(T.NICHES.dev);
  T.STATE.workmode = T.STATE.workmode || {};
  const prev=T.STATE.workmode.codeMode;
  [true,false].forEach(on => {
    T.STATE.workmode.codeMode = on ? "yes" : "no";
    const pack=T.buildUpdatePack(n);
    assert(pack, "pacote de update nao foi gerado (codeOn="+on+")");
    const mod=pack.files.filter(f => f.real==="meta/analises/_TEMPLATE.md");
    assert(mod.length===1, "pacote deveria levar exatamente 1 modelo de analise (codeOn="+on+"), levou "+mod.length);
    assert(mod[0].nature==="modelo-em-espera", "modelo de analise com natureza '"+mod[0].nature+"' — deveria ser modelo-em-espera, senao o protocolo cria a pasta");
    assert(/NASCER/.test(mod[0].role||""), "o papel do modelo nao avisa que a pasta tem de nascer antes");
    assert(/## Recomendacao/.test(mod[0].content||""), "modelo de analise sem a secao de recomendacao");
    assert(/Analise e para quando a pergunta ainda e do dono/.test(mod[0].content||""), "modelo de analise nao carrega o degrau de saida do funil (D-112)");
    assert(/modelo-em-espera/.test(pack.manifest||""), "manifesto do pacote nao explica a natureza modelo-em-espera");
    assert(/Pasta nasce no primeiro uso/.test(pack.manifest||""), "manifesto nao protege a pasta preguicosa");
  });
  T.STATE.workmode.codeMode=prev;
  const kit=T.buildCodeKitFiles();
  assert(/procure o valor ANTIGO no arquivo INTEIRO/.test(kit.wrap), "skill wrap nao manda conferir a contagem repetida fora do cabecalho");
  Object.keys(T.NICHES).forEach(id => {
    const cmd=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/organiza o IDEAS por status \+ ID/.test(cmd), id+": valvula de desvio sem o exemplo legitimo do IDEAS por ID");
    assert(/natureza «modelo-em-espera»/.test(cmd), id+": CEREBRO ainda manda escrever o modelo de analise do zero, ignorando o pacote");
  });
  return "ok";
});
```

---

## Dogfood — a skill `/wrap` deste repo

## Edição 9 — `.claude/skills/wrap/SKILL.md`

**Âncora** (a linha do relatório em arquivo, acrescentada pela wo0074):

```
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga.
```

**Inserir IMEDIATAMENTE ANTES:**

```
- **Ao mudar um número ou um estado no `meta/STATUS.md`** (contagem de checagens, versão, «harness
  NN/NN»), procure o valor ANTIGO no arquivo INTEIRO e atualize todas as ocorrências — o cabeçalho não
  é o único lugar onde ele aparece.
```

---

## Fora de escopo

- **Não** criar `meta/analises/` neste repo nem em nenhum outro por causa desta WO. O modelo já existe
  aqui; o que muda é o **pacote** passar a levá-lo.
- **Não** criar variante «IDEAS por ID» no kit. A Edição 2 apenas **autoriza e exemplifica** o desvio.
- **Não** mexer na skill `apply-wo` (a Edição 1 é só do `/wrap` — é lá que a contagem do STATUS muda).
- **Não** tocar nas Instruções. O C28 deve imprimir os **mesmos** números da v1.100.0.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `validate.js` e `.claude/skills/wrap/SKILL.md` são **LF**.
- **Edição 1:** a frase-âncora aparece em duas skills com uma palavra de diferença (`apply-wo` diz «Grave
  o **MESMO** relatório»). A âncora aqui é a versão **sem** o «MESMO» — confira que casou 1x.
- **Edição 3 insere uma função inteira**, não uma linha. O `\n` dentro do `join` é conteúdo, não escape
  do template.
- **Edição 4 fica FORA do `if(codeOn)`.** Se entrar dentro, o C36 fecha na configuração sem Modo Code.
- **Edições 2 e 6 substituem trecho no MEIO de linhas longas.** Case a frase-âncora, nunca a linha.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `validate.js`, `.claude/skills/wrap/SKILL.md`,
      `index.html` e os `meta/`. Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 80/80 checagens · 0 erros**.
- [ ] C28 idêntico à v1.100.0:
      `padrao 6618/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7512/7600`.
- [ ] Gere um pacote de update (nicho qualquer, com e sem Modo Code) e confirme no `_UPDATE-MANIFEST.md`
      que o modelo de análise aparece com natureza **`modelo-em-espera`** e que a legenda explica a
      natureza nova.
- [ ] Confirme que **nenhuma pasta `analises/` foi criada** em lugar nenhum por conta desta WO.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-114** — «o pacote de update passa a levar o modelo de análise sob a natureza
  nova `modelo-em-espera` (guarde; só coloque se a pasta já existir), preservando a pasta preguiçosa; o
  `/wrap` passa a conferir valor repetido no `STATUS.md` inteiro; a válvula de desvio nomeia o IDEAS por
  status+ID como desvio legítimo». Registre por que a natureza nova foi preferível a uma ressalva no
  campo de papel: **o protocolo ramifica por natureza**, então a exceção precisava ser um ramo, não um
  texto que o leitor pode ignorar.
- `meta/CHANGELOG.md`: **v1.101.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.101.0`, harness `18/18 · 80/80`. **Aplique
  aqui a própria regra da Edição 1:** procure `79/79` no arquivo inteiro, não só no cabeçalho.
- `meta/IDEAS.md`, «Feedback para o Kit»: marcar como **implementadas** as três observações do Mapsmith
  desta leva (`/wrap` e contagem repetida; `_TEMPLATE.md` de `analises/` no pacote; IDEAS por status+ID
  na válvula). Com isso **as quatro levas do feedback do Mapsmith estão fechadas** — anotar que resta
  apenas a mensagem de volta à frente, que é raia do chat.
- `meta/IDEAS.md`, ideia nova **com gatilho**: «`modelo-em-espera` é a primeira natureza nova do pacote
  desde que o protocolo existe. Outros artefatos podem caber nela (modelo de log, modelo de spec, guia
  de pasta que ainda não nasceu). **Gatilho:** quando um segundo arquivo pedir a mesma natureza,
  revisar se o protocolo precisa de uma seção própria para ela em vez de uma linha na legenda.»

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · build/validate · commit. Grave em
`../AAMMDD-HHMM-code-kcm.txt`. **Diga também o estado do push do `126f754`**, conferido no início.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js .claude/skills/wrap/SKILL.md index.html meta/
```

```
git commit -m "feat(kit): modelo de analise no pacote, contagem repetida no STATUS e IDEAS por ID (wo0080, D-114)" -m "O pacote de update passa a levar o modelo de analise sob a natureza nova modelo-em-espera: guarde e so coloque se a pasta ja existir, preservando a regra de que pasta nasce no primeiro uso. O modelo ja carrega o degrau de saida do funil. A skill wrap passa a procurar o valor antigo no STATUS inteiro, nao so no cabecalho. A valvula de desvio nomeia o IDEAS por status+ID como desvio legitimo. Check C36. Bump 1.101.0."
```

```
git push
```
