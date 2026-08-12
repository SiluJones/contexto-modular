# WO 0087 — O KCM é usuário do próprio kit: o instalado deixa de ficar atrás do gerado

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. As sete edições são mecânicas; a mais delicada é a inserção do C43 no `validate.js`, que traz uma regex com barras invertidas (ver Armadilhas).
> **Pré-requisito:** `KIT_VERSION 1.107.0`, commit `3677718`, `main` com no máximo os não rastreados conhecidos, harness **18/18 · 86/86 · 0 erros**.
> **Base:** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §A, aprovada pelo autor em 2026-08-12 («vai a §A, aceito todas as suas recomendações»). Defeito observado em campo no fecho da wo0086 (`260812-0911-code-kcm.txt`) e apontado pelo autor no mesmo dia. Item **FK-L(b)** do Sand-Land-Map, aberto desde 2026-08-09.
> **Depende de:** wo0086 (aplicada, `d432d05`; `/wrap` em `3677718`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** o item e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

> **Aviso, e é o ponto desta WO:** o `/apply-wo` que você está executando agora é a versão **antiga**, sem a ordem verde/vermelho. A Edição 2 corrige justamente isso. Até ela entrar, siga a ordem manualmente: **resolva o push antes de escrever o relatório**, e no caso verde rode os três comandos você mesmo, sem me devolver bloco.

---

## 1. Por que

**O `/wrap` da wo0086 entregou os três blocos de `git` para o autor colar.** O executor tem terminal e podia rodá-los; e o relatório, escrito antes do push, é **estruturalmente incapaz** de dizer se o push aconteceu — o arquivo `260812-0911-code-kcm.txt` termina com «COMMIT — Ainda NÃO executado».

**A causa não é a skill estar mal escrita. É a casa não ter aplicado a si mesma o que publica para os outros.** Lido no fonte, os dois arquivos, hoje:

| | o que diz |
|---|---|
| **kit gerado** (`buildCodeKitFiles()`, skill `wrap`) | *«Verde: `add`, `commit` e `push` sem perguntar. Vermelho: nao commite nem empurre — feche com MENU NUMERADO (a recomendada em 1)… Resolva o push ANTES de escrever o relatorio.»* — correto desde a **D-115** |
| **`.claude/skills/wrap/SKILL.md` do próprio KCM** | *«Me mostre o `git diff` e o comando de commit pronto: um bloco por comando… para eu copiar isolado.»* — texto **pré-D-115** |

A D-115(g) diz, com todas as letras, que *«consertar o gerador não conserta o instalado»*, e criou um pacote de update para alcançar terceiros. **O KCM não se incluiu entre os instalados.**

**O mesmo defeito, e mais grave, no `/apply-wo`.** Ele também é pré-D-115: sem verde/vermelho, sem menu numerado, sem «resolva o push antes do relatório». Ele funcionou nas wo0085 e wo0086 **por acidente**, porque as WOs traziam os blocos de `git` no corpo. Numa WO que não os trouxesse, o defeito apareceria na **aplicação**, não no fecho.

**Por que nada pegou.** As 86 checagens leem o `index.html` e as strings que o kit **emite**. Nenhuma abre um arquivo de `.claude/` **do repositório** — verificado. O instrumento mede o que é fácil de medir: a saída da função, não o que está instalado ao lado dela.

**E a regra que teria pego também já existia.** A higiene «Varra pelo fato, não pela frase» (D-116) termina em: *«E as skills por último e com mais atenção: são a superfície mais esquecida e a mais perigosa, porque são lidas ANTES de trabalhar, então uma linha morta ali dirige o trabalho seguinte em vez de só informar mal.»* Descrição literal do que aconteceu.

## 2. Contexto factual

Medido em sandbox no estado `3677718` (repo reconstruído do mount, build reproduzindo `index.html` byte a byte — **791.994** —, harness verde 18/18 · 86/86 antes de qualquer edição).

- **Os três arquivos de `.claude/` do KCM são LF puro** (0 CRLF) — verificado. As âncoras multi-linha são seguras neles.
- **`.claude/settings.json` do KCM não tem `Write` no `allow`.** A D-115(b) o pôs no gerado; o instalado nunca recebeu. Funciona hoje só porque o arquivo tem `defaultMode: "acceptEdits"`, que auto-aceita escrita — **um segundo mecanismo cobrindo uma permissão ausente**. Tem `additionalDirectories: ["../"]`, esse sim correto.
- **As skills do KCM são mais ricas que as geradas** (fim de linha por arquivo, regra de ouro 18/18, atualização de análise decidida). **Isto não é dívida — é personalização legítima**, e a migração NÃO as substitui pelas genéricas: acrescenta a cláusula que falta e remove a linha errada.
- **Custo de teto: ZERO**, medido. Nenhuma edição toca `buildInstr`: C28 imprime os mesmos números (`padrao 6611 · +Code 514 · +ASU 372 · compart 372 · combo 7497`).

---

## Inventário — de onde saiu a lista de edições

*(Primeira WO a usar a seção que a wo0086 instituiu.)*

**Saiu do artefato.** A pergunta feita ao repositório foi «que arquivos do próprio KCM deveriam carregar as cláusulas que o kit publica no `buildCodeKitFiles()`?». O gerador emite exatamente **quatro** artefatos instaláveis: `CLAUDE.md`, `.claude/settings.json`, `.claude/skills/apply-wo/SKILL.md` e `.claude/skills/wrap/SKILL.md`. Cada um foi aberto no repositório e comparado com o gerado, cláusula por cláusula — não pelo texto inteiro, porque o instalado é legitimamente mais rico.

**Não truncado.** Os quatro, sem exceção.

**Contagem declarada: 3 arquivos instalados divergem, 1 não.** As duas skills e o `settings.json` estão atrás; o `CLAUDE.md` do KCM **não** está — ele é um documento próprio do projeto, não uma cópia do starter genérico, e não carrega a seção de push do kit. **Conteste antes de agir:** se você achar quatro divergências, ou duas, o número é o achado.

---

## Edição 1 — `.claude/skills/wrap/SKILL.md` · a ordem do push substitui o bloco colável

**Âncora** (três linhas; arquivo é **LF**):

```
- Me mostre o `git diff` e o comando de commit pronto: um bloco por comando (`git add` /
  `git commit` / `git push`), mensagem SEM acento, e o `git commit` em bloco separado para eu copiar
  isolado.
```

**Substituir por:**

```
- **Resolva o push ANTES de escrever o relatório** — o relatório é o ÚLTIMO passo, sempre.
  **Verde** (`git diff` conferido e, se tocou `src/`, build + harness verdes): rode `add`, `commit` e
  `push` você mesmo, SEM perguntar. Você tem o terminal; entregar bloco para eu colar é trocar de raia.
  **Vermelho** (harness falhou, âncora não achada, `git diff` fora do previsto): NÃO commite nem
  empurre — feche com **MENU NUMERADO** de saídas reais (a recomendada em 1), nunca com pergunta em
  prosa. Se a minha escolha chegar depois, o relatório se REESCREVE — não fica valendo a versão velha.
  Mensagem de commit SEM acento.
```

---

## Edição 2 — `.claude/skills/apply-wo/SKILL.md` · a mesma ordem, com a cláusula que faltava

**Âncora** (duas linhas; arquivo é **LF**):

```
- Faça o bloco «Ao terminar»/«Registros» da WO (append em STATUS/DECISIONS) e o commit indicado
  (mensagem SEM acento).
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```
- **Resolva o push ANTES de escrever o relatório** — o relatório é o ÚLTIMO passo, sempre.
  **Verde** (âncoras todas achadas, `git diff` na forma prevista, harness verde ou WO só de doc): rode
  `add`, `commit` e `push` você mesmo, SEM perguntar — não me devolva bloco para colar. **Vermelho**
  (qualquer uma falhou): NÃO commite nem empurre — feche com **MENU NUMERADO** de saídas reais (a
  recomendada em 1), nunca com pergunta em prosa. Se a minha escolha chegar depois, o relatório se
  REESCREVE. Isto vale mesmo quando a WO traz os blocos de `git` no corpo: os blocos são o QUE rodar,
  não um pedido para eu rodar.
```

> A última frase é deliberada: é ela que impede o defeito de voltar disfarçado de obediência à WO.

---

## Edição 3 — `.claude/settings.json` · `Write` e `Edit` no allow

**Âncora:**

```
      "Read",
      "Glob",
      "Grep",
```

**Substituir por:**

```
      "Read",
      "Write",
      "Edit",
      "Glob",
      "Grep",
```

> **Confira com o parser depois:** `node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json','utf8'));console.log('ok')"`. Uma vírgula sobrando derruba **todas** as permissões em silêncio (D-115/C37) — e o C43 desta WO passa a checar isso automaticamente.

---

## Edição 4 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.107.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.107.1";
```

---

## Edição 5 — `validate.js` · check C43

**Âncora** (início do C42 — inserir **imediatamente ANTES** desta linha, com uma linha em branco entre o bloco novo e ela):

```
check("C42 a conferencia sai do artefato (wo0086): tres campos por passo, inventario declarado e nao truncado, e a frase pedida so cobra o que o dono sabe produzir", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
/* C43 (wo0087) — O KCM e usuario do proprio kit. Este e o UNICO check que abre arquivo
   de `.claude/` DO REPOSITORIO: todos os outros testam o que o kit EMITE, e foi por isso
   que as skills instaladas ficaram tres versoes atras do gerado sem ninguem notar. */
check("C43 o instalado nao fica atras do gerado (wo0087): skills e settings do proprio KCM carregam as clausulas que o kit publica", () => {
  const pathmod = require("path");
  const raiz = pathmod.dirname(pathmod.resolve(path));
  const lerRepo = (rel) => {
    const abs = pathmod.join(raiz, rel);
    assert(fs.existsSync(abs), "arquivo do proprio repo ausente: " + rel + " — o KCM usa o kit que publica, e sem este arquivo nao ha o que conferir");
    return fs.readFileSync(abs, "utf8");
  };
  const kit = T.buildCodeKitFiles();
  const instWrap = lerRepo(".claude/skills/wrap/SKILL.md");
  const instApply = lerRepo(".claude/skills/apply-wo/SKILL.md");
  const instSet = lerRepo(".claude/settings.json");

  // (1) clausulas portadoras: cada uma e conferida NOS DOIS LADOS.
  //     Some do gerado -> falha aqui tambem (o kit deixou de publicar a regra).
  //     Some do instalado -> falha aqui (a casa ficou para tras). Foi este o caso da wo0087.
  const CLAUSULAS = [
    ["ordem do push",      /push ANTES de escrever o relat/i, ["wrap","applyWo"]],
    ["caso verde",         /Verde[\s\S]{0,400}?sem perguntar/i, ["wrap","applyWo"]],
    ["caso vermelho",      /MENU NUMERADO/i,                  ["wrap","applyWo"]],
    ["recomendada em 1",   /recomendada em 1/i,               ["wrap","applyWo"]],
    ["relatorio em arquivo", /-code-/,                        ["wrap","applyWo"]],
    ["ancora exata",       /PARE e reporte/i,                 ["applyWo"]],
  ];
  const gerado = { wrap: kit.wrap, applyWo: kit.applyWo };
  const instalado = { wrap: instWrap, applyWo: instApply };
  CLAUSULAS.forEach(([nome, re, alvos]) => {
    alvos.forEach(alvo => {
      assert(re.test(gerado[alvo]), "o kit GERADO perdeu a clausula '"+nome+"' na skill "+alvo+" — se ela sair daqui, o check para de proteger a casa tambem");
      assert(re.test(instalado[alvo]), "a skill INSTALADA `.claude/skills/"+(alvo==="wrap"?"wrap":"apply-wo")+"/SKILL.md` nao tem a clausula '"+nome+"' que o kit publica: consertar o gerador nao conserta o instalado (D-115), e a casa e o primeiro instalado");
    });
  });

  // (2) a regressao especifica que originou este check, nomeada para nao voltar disfarcada
  assert(!/para eu copiar isolado/i.test(instWrap), "o `/wrap` instalado voltou a entregar bloco de git para o dono colar — quem tem terminal roda; entregar bloco e trocar de raia (FK-L do sand-land)");
  assert(!/comando de commit pronto/i.test(instWrap), "o `/wrap` instalado voltou a prometer 'o comando de commit pronto' em vez de executar");

  // (3) settings do proprio repo: JSON valido pelo PARSER (D-115/C37), Write no allow, pasta-pai liberada
  let cfg;
  try { cfg = JSON.parse(instSet); }
  catch(e){ assert(false, ".claude/settings.json do proprio repo nao e JSON valido ("+e.message+") — o Claude Code descarta o arquivo INTEIRO em silencio e caem todas as permissoes juntas"); }
  const allow = (cfg.permissions && cfg.permissions.allow) || [];
  assert(allow.includes("Write"), ".claude/settings.json do repo sem `Write` no allow — as skills mandam criar log e relatorio, e a permissao nega o que a skill pede (D-115)");
  assert(Array.isArray(cfg.permissions && cfg.permissions.additionalDirectories) && cfg.permissions.additionalDirectories.length > 0, ".claude/settings.json do repo sem `additionalDirectories` — sem ele o relatorio em arquivo na pasta-pai nao tem como ser gravado (D-108)");

  return "ok (instalado confere com o gerado em " + CLAUSULAS.length + " clausulas)";
});
```

> **Duas notas de implementação.** (a) `path` (a variável do `validate.js`, o caminho do html) e `pathmod` (o módulo `path` do Node) são coisas diferentes e coexistem de propósito — não renomeie nem «simplifique» uma na outra. (b) O check confere **cláusulas**, não texto idêntico: as skills do KCM são legitimamente mais ricas que as genéricas, e um `assert` de igualdade byte a byte seria errado — apagaria a personalização que a válvula de desvio registrado permite.

---

## Edição 6 — `meta/DECISIONS.md` · registra a D-121

**Âncora** (última linha do arquivo, fim da D-120):

```
`KIT_VERSION 1.107.0`. **Custo de teto ZERO** — as três superfícies vivem fora de `buildInstr`: C28 imprime os mesmos números da v1.106.0 (`padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`), folga do `narrative` em **289**. O modelo de WO cresce de **5.921 para 8.406** caracteres (número que o C27 e o C42 reportam; não há teto sobre ele). Harness **18/18, 85/85 → 86/86, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-121 — O KCM é usuário do próprio kit: o instalado deixa de ficar atrás do gerado, e um check passa a vigiar isso (wo0087)

**Base.** `meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md` §A, aprovada pelo autor em 2026-08-12. Defeito observado no fecho da wo0086 e apontado pelo autor no mesmo dia. Item **FK-L(b)** do Sand-Land-Map, aberto desde 2026-08-09.

**O que aconteceu.** O `/wrap` entregou os três blocos de `git` para o autor colar, e o relatório — escrito antes do push — não tinha como dizer se o push acontecera: `260812-0911-code-kcm.txt` termina em «COMMIT — Ainda NÃO executado». O autor apontou que o executor tem terminal e devia rodá-los, perguntando no máximo uma vez.

**A causa, e ela é mais interessante que o sintoma.** A skill `wrap` que o kit **emite** está correta desde a D-115: verde empurra sem perguntar, vermelho fecha com menu numerado, e o push se resolve **antes** do relatório. O arquivo `.claude/skills/wrap/SKILL.md` **do próprio KCM** continuava com o texto pré-D-115 («me mostre o comando de commit pronto… para eu copiar isolado»). **A D-115(g) escreveu que «consertar o gerador não conserta o instalado» e criou um pacote de update para alcançar terceiros — sem incluir a própria casa entre os instalados.**

**O mesmo defeito, e mais grave, no `/apply-wo`.** Também pré-D-115. Ele passou pelas wo0085 e wo0086 **por acidente**: as duas WOs traziam os blocos de `git` no corpo. Numa WO sem eles, o defeito apareceria na aplicação, não no fecho — o risco silencioso deste ciclo.

**Terceiro achado, da mesma varredura.** O `.claude/settings.json` do KCM não tinha `Write` no `allow` (a D-115(b) o pôs no gerado). Funcionava porque o arquivo tem `defaultMode: "acceptEdits"`, que auto-aceita escrita: **um segundo mecanismo cobrindo uma permissão ausente** — funciona, mas por motivo diferente do que o kit documenta, e o dia em que o `defaultMode` mudar as skills passam a pedir o que a permissão nega.

**Por que 86 checagens não pegaram.** Todas liam o `index.html` e as strings que o kit emite; **nenhuma abria um arquivo de `.claude/` do repositório**. O instrumento media o que era fácil de medir — a saída da função — e não o que estava instalado ao lado dela. É a doença que o Mapsmith nomeou em `260810-ANALISE-o-instrumento-mede-o-que-e-facil.md`, aplicada ao instrumento do próprio kit. E a regra que teria pego já existia: a higiene da D-116 termina em *«as skills por último e com mais atenção: são lidas ANTES de trabalhar, então uma linha morta ali dirige o trabalho seguinte em vez de só informar mal»* — descrição literal do ocorrido.

**Decisão, em três partes.** (1) As duas skills e o `settings.json` do KCM recebem as cláusulas que o kit publica — **acrescentando, não substituindo**: as skills do KCM são legitimamente mais ricas (fim de linha por arquivo, regra de ouro 18/18, atualização de análise decidida), e trocá-las pelas genéricas apagaria personalização que a válvula de desvio registrado autoriza. (2) O **C43** passa a abrir os arquivos de `.claude/` **do repositório** e a conferir cláusula por cláusula contra o que `buildCodeKitFiles()` emite. (3) A lição fica registrada em forma geral: **todo update do gerador tem um passo de auto-aplicação, porque a casa é o primeiro instalado.**

**Como o C43 é construído, e por que assim.** Ele confere **cláusulas portadoras**, nunca igualdade de texto — igualdade byte a byte proibiria a personalização. E confere **nos dois lados**: se a cláusula sumir do **gerado**, o check falha ali também, com mensagem própria (*«se ela sair daqui, o check para de proteger a casa tambem»*). Um check que só olhasse o instalado poderia ficar verde justamente quando o kit parasse de publicar a regra. Inclui ainda duas negativas nomeadas contra o texto exato da regressão («para eu copiar isolado», «comando de commit pronto»), para o defeito não voltar disfarçado, e parseia o `settings.json` do repo com `JSON.parse` — o princípio da D-115/C37 aplicado, agora, ao arquivo que o KCM usa.

**Sete provas negativas rodadas**, uma por ponta: `/wrap` instalado voltando ao bloco colável · `/apply-wo` instalado sem a ordem do push · `settings` sem `Write` · `settings` com JSON quebrado (o defeito histórico da D-115) · `settings` sem `additionalDirectories` · skill instalada ausente de todo · e **o gerado perdendo a cláusula**, que é a ponta que um check ingênuo não cobriria.

`KIT_VERSION 1.107.1` (correção, não feature). **Custo de teto ZERO** — nenhuma edição toca `buildInstr`: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.107.0. Harness **18/18, 86/86 → 87/87, 0 erros**.
```

---

## Edição 7 — `meta/IDEAS.md` · registra a leva e o que ela responde ao sand-land

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-12 — FK-L(b) do Sand-Land-Map, «entrega blocos quem não pode executá-los» — ACEITO E IMPLEMENTADO em casa primeiro (D-121, wo0087)
O sand-land escreveu em 2026-08-09: *«o chat entrega porque não tem disco; o executor roda, e só pergunta uma vez, quando tudo está verde»*. Em 2026-08-12 o `/wrap` do **próprio KCM** fez exatamente o contrário, e o autor apontou. **A skill que o kit publica já estava certa desde a D-115 — quem estava errado era o arquivo instalado dentro do KCM**, três versões atrás do gerado. Corrigido, e com um check novo (**C43**) que abre os arquivos de `.claude/` do repositório e os confere contra `buildCodeKitFiles()`: é o primeiro check do harness a olhar o que o KCM **usa** em vez do que ele **emite**.

**Lição em forma geral, para não depender de lembrar:** *todo update do gerador tem um passo de auto-aplicação — a casa é o primeiro instalado.* A D-115(g) já dizia que consertar o gerador não conserta o instalado, e criou pacote de update para terceiros sem se incluir na lista.

**Ainda aberto da FK-L, metade (a) — «quem abre, fecha».** Processo, porta e arquivo temporário são de quem os criou. **Segunda ocorrência medida, desta vez aqui:** o teste manual da wo0086 baixou um `claude-code-kit.zip` para a pasta de Downloads do autor, tentou limpar e a ferramenta negou — e o autor teve de perguntar o que era. Duas ocorrências, dois projetos. *Gatilho: entra na próxima leva que tocar o modelo de WO ou o bloco de fecho.*

**Para o Mapsmith, resposta ao pedido de volta nº 2** («a regra do `/wrap` pegou a contagem repetida na terceira vez?»): **pegou.** No `/wrap` de 2026-08-12 a varredura achou uma segunda menção a `KIT_VERSION 1.106.0` na mesma linha do cabeçalho, longe do começo, corrigiu, e preservou corretamente as ocorrências históricas dentro de «Sessão anterior». Três ocorrências do esquecimento, a terceira pega pela regra.
```

---

## Fora de escopo

- **`CLAUDE.md` do KCM** — não diverge: é documento próprio do projeto, não cópia do starter genérico. O C43 não o testa, de propósito.
- **FK-L metade (a), «quem abre, fecha»** — registrada no IDEAS com gatilho; não entra aqui.
- **B1 (a sonda), B2, B3, B5** da análise — seguem sem decisão do autor.
- **`.claude/launch.json`** (criado na wo0085) — segue não versionado; esta WO não o toca nem opina.
- **Estender o C43 aos outros artefatos gerados** (CEREBRO, Instruções, modelo de WO instalado) — tentador e fora de escopo: aumentaria a superfície do check antes de sabermos se as seis cláusulas bastam.

## Armadilhas desta WO

- **Fim de linha:** os três arquivos de `.claude/` são **LF puro** (verificado: 0 CRLF nos três), assim como o `validate.js`. Só o `src/index.template.html` é CRLF, e a única edição nele é de **uma linha** (Edição 4). Não há risco de âncora multi-linha quebrada nesta WO — mas confira ao fim que o template continua com **0 LF soltos**.
- **A Edição 5 contém barras invertidas dentro de regex** (`/Verde[\s\S]{0,400}?sem perguntar/i`, `/push ANTES de escrever o relat/i`). **Copie literalmente.** Se o `node validate.js` acusar erro de sintaxe, foi aqui — e não «conserte» a regex: reporte.
- **A regex do «caso verde» é multi-linha de propósito.** A versão de uma linha só (`[^\n]*`) foi tentada e **falhou** contra o texto real, porque a cláusula ocupa três linhas no arquivo instalado. Não a reaperte.
- **Não substitua as skills do KCM pelas geradas.** A operação é **acrescentar a cláusula e remover a linha errada**, preservando tudo que é específico do KCM. Se o `git diff` mostrar as skills encolhendo muito, algo saiu errado — PARE.
- **Não «melhore» nada de passagem.** Esta WO iguala o instalado ao publicado; qualquer melhoria que apareça no caminho vira ideia no IDEAS, não edição.
- **Número de check:** o próximo livre era **C43**; o C42 é da wo0086. Conferido no `validate.js`.
- **O `/apply-wo` que você está rodando é a versão antiga.** Até a Edição 2 entrar, aplique a ordem do push manualmente.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `.claude/skills/wrap/SKILL.md`, `.claude/skills/apply-wo/SKILL.md`, `.claude/settings.json`, `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. *(O `meta/STATUS.md` fica para o `/wrap`.)*
- [ ] **Inventário declarado: 3 arquivos instalados divergiam.** Refaça a contagem: se você encontrar um quarto arquivo do `.claude/` atrás do gerado, **PARE e reporte antes de editar** — a divergência é o achado.
- [ ] `node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json','utf8'));console.log('settings ok')"` imprime `settings ok`.
- [ ] `node build.js` roda sem erro; `node validate.js index.html` → **18/18 nichos, 87/87 checagens, 0 erros**, com **C43 verde** reportando `ok (instalado confere com o gerado em 6 clausulas)`.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. Diferente disso, algo vazou para `buildInstr` — **PARE e reporte**.
- [ ] Template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de arquivos do próprio repo e uma execução do harness — reversível, na mesma máquina.
  - **Chega no ramo?** O C43 em `validate.js` é o único caminho que passa pelo código novo; e `buildCodeKitFiles()` no `src/index.template.html` é o lado gerado com que ele compara. Rodar o harness já exercita os dois.
  - **Prova de vida:** «87/87 verde» sozinho não prova nada — o C43 poderia estar passando por engano. **Force o sinal:** temporariamente troque `"Write"` por `"Writ"` no `.claude/settings.json`, rode o harness e confirme que o C43 **falha** com a mensagem sobre `Write` no allow; desfaça e confirme que volta a verde. Sem ver o vermelho, o verde não significa nada.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · validação (números do C28, C43 e a contagem do inventário) · commit e push. **Resolva o push antes de escrever isto** — é o que esta WO existe para instalar.

> **Para o `/wrap`:** o cabeçalho do `meta/STATUS.md` (linha 4) cita `v1.107.0`, `86/86` e a lista de concluídos. Atualize todas as ocorrências vivas: `1.107.0` → `1.107.1`, `86/86` → `87/87`, cite o **C43** antes do C42, acrescente **D-121**. Os números de orçamento **não mudam**. Não toque nos históricos dentro de blocos de sessões passadas. Sessão nova no topo, a atual vira «Sessão anterior».

## Commit — blocos separados, mensagem SEM acento

> **Estes blocos são o QUE rodar, não um pedido para me devolver.** Verde: rode os três.

```
git add .claude/skills/wrap/SKILL.md .claude/skills/apply-wo/SKILL.md .claude/settings.json src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/260812-ANALISE-o-que-sobrou-do-feedback.md meta/workorders/260812-wo0087-o-instalado-nao-fica-atras-do-gerado.md
```

```
git commit -m "fix(kit): o KCM aplica a si mesmo o kit que publica" -m "A skill wrap que o kit EMITE esta correta desde a D-115: verde empurra sem perguntar, vermelho fecha com menu numerado, e o push se resolve antes do relatorio. O arquivo instalado dentro do proprio KCM continuava tres versoes atras, entregando bloco de git para o dono colar - e o relatorio, escrito antes do push, nao tinha como dizer se o push acontecera." -m "O apply-wo tinha o mesmo defeito e passou por acidente nas duas WOs anteriores, porque elas traziam os blocos de git no corpo. O settings.json do repo nao tinha Write no allow: funcionava so pelo defaultMode acceptEdits, um segundo mecanismo cobrindo uma permissao ausente." -m "Nenhuma das 86 checagens abria um arquivo de .claude do repositorio: todas testavam o que o kit emite. O C43 novo abre os arquivos instalados e os confere contra buildCodeKitFiles por clausula, nos dois lados - se a regra sumir do gerado, ele falha ali tambem." -m "FK-L(b) do sand-land, aberto desde 09/08. Sete provas negativas. Custo de teto zero. wo0087, D-121."
```

```
git push
```
