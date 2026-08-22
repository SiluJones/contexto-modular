# WO 0102 — A conferência sai de quem tem o viés: a leva do Mapsmith 11

> **Tipo:** WO de CÓDIGO (gerador + harness + skills instaladas).
> **Config sugerida:** modelo leve, `/effort` **médio** — onze edições literais, todas já testadas; nenhuma pede julgamento. O que exige atenção é o CRLF do template e as linhas longas.
> **Pré-requisito:** v1.119.0, commit `9af3993`, harness **18/18 · 96/96 · 0 erros**, árvore limpa fora de `.claude/launch.json` (não rastreado conhecido).
> **Base:** `meta/analises/260820-ANALISE-a-afirmacao-verificavel.md` (opções B1, B2, E, aceitas na resposta do dono de 2026-08-21), mais os nove itens registrados no `meta/IDEAS.md` pela wo0101, mais a nota `260820-2247.txt` do Mapsmith.
> **Depende de:** wo0101 (aplicada, `9af3993`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** o item e diga no relatório — não duplique.
>
> **Âncoras lidas em:** *(o campo que esta própria WO institui — estreando por auto-aplicação)*
> Todas as onze âncoras foram lidas **neste turno**, no repo reconstruído em sandbox a partir do mount de 2026-08-21 12:45, e **todas as edições foram aplicadas e validadas lá antes desta WO existir**. Trechos literais lidos:
> - `src/index.template.html` L1173 → `"**Quem abre, fecha — e o que não fechar, declara.** Toda tarefa cria coisas **fora** do repositório`
> - `src/index.template.html` L1075 (P8, cauda) → `em vez de inferir cegamente ou regenerar o que já foi feito."],`
> - `src/index.template.html` L2676 (item Estado) → `aí escreva «commit não legível pelo mount» e **peça uma vez** (\`git log -1 --oneline\`)`
> - `src/index.template.html` L2677 (item Arquivar) → `3. **Arquivar / Manter** — só se houver notas avulsas no mount.`
> - `src/index.template.html` L3190-3191 (modelo de WO) → `"> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**",`
> - `src/index.template.html` L3406/3408/3420/3422 (skills geradas) → as duas linhas `"Verde: \`add\`, \`commit\` e \`push\` sem perguntar. Vermelho: ...`, idênticas entre si exceto pelo trecho final do relatório
> - `validate.js` L503-504 → `check("C52 duas coberturas, o esqueleto do relatorio e o gatilho do verde (wo0100)`
> - `validate.js` L871 → `["ancora exata",       /PARE e reporte/i,                 ["applyWo"]],`
> - `.claude/skills/apply-wo/SKILL.md` L10-11 e L32-34; `.claude/skills/wrap/SKILL.md` L7-8 e L22-23
>
> **Canal dos meta neste ciclo = CODE.** Faça os appends previstos na seção «Ao terminar»; o chat não entrega doc depois desta WO.
>
> **Próximo comando:** `/wrap` — o fecho grava o log do dia, o D-135 e a atualização do STATUS.

---

## 1. Por que

O dono aceitou as três opções da análise (B1, B2 e E) e recusou a única gradação que eu havia sugerido: esperar um segundo consumidor antes de promover a regra tipada a princípio. A razão dele encerra o assunto — **isto não é funcionalidade, é correção de defeito, e defeito óbvio não espera consumidor aparecer.** Então E entra nos dois lugares: no cabeçalho da WO e como refinamento do P8.

O que a leva compra, em uma frase: **tira a conferência de quem tem o viés.** As regras desta família que falharam dez vezes em duas séries são todas autoendereçadas — quem confere é quem erra, cumprir não produz artefato, e descumprir não deixa buraco. As que nunca falharam neste projeto ou passam a conferência para outro (o «PARE e reporte») ou são mecânicas (C43, C37). Esta WO converte quatro regras do primeiro tipo no segundo.

## 2. Contexto factual

**[medido no sandbox, 2026-08-21]** — repo reconstruído do mount, build e harness rodados de verdade.

- Base conferida antes de mexer: `index.html` **823.845 bytes**, harness **18/18 · 96/96 · 0 erros**, C28 em `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`. Bate com o STATUS — o sandbox é o repo.
- Depois das onze edições: `index.html` **828.852 bytes**, harness **18/18 · 97/97 · 0 erros**, e o **C28 imprime os cinco números idênticos**. *Custo de teto: ZERO.* Era a condição que a análise impôs, e ela se cumpre porque tudo entrou em `HYGIENE_RULES`, no texto completo dos princípios e nos artefatos do kit-Code — todos fora do `buildInstr`.
- Ausência conferida por busca antes de escrever: o kit **não tinha nenhuma regra** sobre comando entregue pela metade nem sobre quem executa (`quem executa`: 0 · `destrutivo`: 0 · `o que este comando`: 0). O que existia era só a proibição de caminho ambíguo em comando destrutivo — e o comando que estourou no Mapsmith era um `verify` que só lê.
- **Duas provas negativas rodadas:** (i) trocar `RECUSA a WO se vier vazio` por `confere se vier vazio` → C53 vermelho na asserção certa; (ii) reinverter a ordem no item Estado, pondo a exceção depois do «peça uma vez» → C53 vermelho pela asserção de ordem, que é a que carrega mais peso e a que nenhuma outra checagem cobriria.
- **O C43 cobrou a casa sozinho.** Ao ganhar as quatro cláusulas novas, ele ficou vermelho apontando `.claude/skills/wrap/SKILL.md` do próprio KCM atrás do gerado — antes de eu pensar nisso. Segunda vez nesta série que a D-121 se cobra antes do autor.

**[lido no `260820-2247.txt`, do Mapsmith, e conferido aqui]**

- Eles afirmaram que a regra «commit não legível pelo mount» é **falsa** desde que o FlatDrop escreve o manifesto. **Refutado por leitura:** a exceção existe — só chega ~400 caracteres **depois** da instrução, no fim de uma linha imensa. Quem lê de cima para baixo já pediu antes de alcançá-la. O defeito é de **ordem**, não de conteúdo, e é a mesma família da FK-O (a cláusula que impedia o pedido impossível estava na fatia 3; o defeito aconteceu na fatia 1). A E3 conserta a ordem e preserva o conteúdo.
- Eles concluíram que o `mtime` por arquivo é dispensável porque o cabeçalho do manifesto já dá a idade do lote. **Meio certo:** o cabeçalho responde «o lote é novo» — e teria refutado a crença que estourou lá. **Não responde** «qual arquivo mudou», que é a metade cara e a que nunca foi cumprida. A E3b registra o fato medido (o mount zera a data por arquivo) e a consequência operacional: conferir mudança é conferência de **conteúdo**, não de data.

**[deduzido, e marcado como tal]**

- Que a i-N56 acaba de disparar: o C31 reprovou a primeira redação da E3 porque a asserção testa a **prosa literal** (`manifesto da cópia achatada já trouxer o estado do repo`), não o comportamento. Reescrevi preservando a frase. **Inferência:** o gatilho de evento daquela ideia ocorreu. Registrar é da Edição 11; decidir o que fazer com ela não é desta WO.

---

## Edição 1 — `src/index.template.html` · `HYGIENE_RULES`: o comando vai inteiro e diz quem executa

**Âncora** *(início do item «Quem abre, fecha», ocorrência única — CRLF)*:

```
  "**Quem abre, fecha — e o que não fechar, declara.**
```

**Inserir IMEDIATAMENTE ANTES** dessa linha (item novo da lista, terminando em `",` e quebra CRLF):

```
  "**Todo comando entregue ao usuario vai INTEIRO e diz QUEM executa.** Inteiro: nada de `<...>`, `<caminho>` ou reticencias no lugar de um valor que voce ja tem impresso na conversa. Placeholder so vale quando o valor e genuinamente desconhecido — e ai vem NOMEADO («troque `<id>` pelo id do mapa»), nunca como reticencias. Quem executa: **«e do usuario» e conclusao, nao rotulo, e exige nomear o impedimento** — a pergunta de uma linha antes de escrever isso e *o que este comando faz que o executor nao consegue?*, e sem resposta o comando e do executor. **Impedimento de um passo nao se herda para o passo vizinho:** descobrir que a rede local derruba HTTPS nao torna manual um comando que so le arquivo local. Custo medido em campo: cinco tarefas seguidas carimbadas «conferencia do dono» para um comando que o executor rodaria sozinho, e um caminho entregue com reticencias que estava completo em tres relatorios do mesmo dia.",
```

## Edição 2 — `src/index.template.html` · P8 ganha a afirmação tipada por espécie

**Âncora** *(fim do texto completo do princípio, ocorrência única)*:

```
em vez de inferir cegamente ou regenerar o que já foi feito."],
```

**Substituir por:**

```
em vez de inferir cegamente ou regenerar o que já foi feito. **E afirmação sobre artefato legível não é opinião, é leitura** — três espécies: o que uma FERRAMENTA faz, o que um SÍMBOLO ou arquivo do repositório contém, e em que ESTADO está o mount. Nenhuma se responde de memória: ou se lê, ou se declara não lida — e **declarar não lida não autoriza entregar em cima**. Entregar avisando «não li» é pior que não avisar: o aviso soa como método cuidadoso e desarma justamente quem conferiria."],
```

## Edição 3 — `src/index.template.html` · item **Estado**: a exceção do manifesto vem ANTES do pedido

**Âncora** *(ocorrência única, dentro da linha longa do bloco de fecho)*:

```
aí escreva «commit não legível pelo mount» e **peça uma vez** (`git log -1 --oneline`), em vez de repetir a ressalva todo turno.
```

**Substituir por:**

```
aí **comece pelo manifesto**: se o **manifesto da cópia achatada já trouxer o estado do repo** (último commit, branch, limpo/sujo), o dado está lido — use-o e NÃO peça, registrando que é foto da hora da geração, não do turno. Só quando não houver manifesto, ou ele não trouxer o estado, escreva «commit não legível pelo mount» e **peça uma vez** (`git log -1 --oneline`), em vez de repetir a ressalva todo turno. **A ordem desta regra é a regra:** exceção escrita depois da instrução chega tarde, porque quem lê de cima para baixo já pediu.
```

> **Cuidado:** a frase `manifesto da cópia achatada já trouxer o estado do repo` é cobrada literalmente pelo **C31**. Ela está preservada de propósito. Se você reescrever a edição «para ficar melhor», o C31 fica vermelho — foi o que aconteceu na primeira tentativa.

## Edição 4 — `src/index.template.html` · item **Estado**: o mount não carrega idade por arquivo

**Âncora** *(ocorrência única, mais adiante na MESMA linha longa — aplique DEPOIS da Edição 3)*:

```
**Se o manifesto da cópia achatada já trouxer o estado do repo** (último commit, branch, limpo/sujo), use-o e não peça — registrando que é foto da hora da geração, não do turno.
```

**Substituir por** *(a cláusula virou redundante com a Edição 3; o lugar passa a carregar o fato medido)*:

```
**O mount não carrega idade por arquivo** — medido: os arquivos chegam com a data zerada, e a única idade legível é a do manifesto, que vale para o lote inteiro e não diz qual arquivo mudou. Logo, «isto mudou desde que li?» é conferência de CONTEÚDO (uma frase-chave, um `grep`), nunca de data.
```

## Edição 5 — `src/index.template.html` · **Arquivar / Manter** exaustivo, com leitura forte e prazo

**Âncora** *(ocorrência única)*:

```
3. **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**, como a Config e o Handoff: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. Nome por nome — e não espere que eu pergunte.
```

**Substituir por:**

```
3. **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**, como a Config e o Handoff: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. **A lista é EXAUSTIVA:** todo arquivo avulso do mount entra numa das duas. Omissão é ambígua e o leitor não tem como desfazer a ambiguidade — pode significar «já extraí tudo» ou «nunca abri», e as duas pedem ações opostas. **«Arquivar» é afirmação forte:** só entra o que você leu INTEIRO naquele turno; na dúvida, «Manter» com o motivo. **E «Manter: não li» tem prazo** — fila indefinida não é cuidado: um relatório ficou quatro turnos nessa fila carregando a armadilha que voltou a acontecer duas vezes enquanto ele esperava. Nome por nome — e não espere que eu pergunte.
```

## Edição 6 — `src/index.template.html` · modelo de WO ganha «Âncoras lidas em» e «Próximo comando»

**Âncora** *(duas linhas consecutivas do cabeçalho do modelo, ocorrência única — CRLF entre elas)*:

```
    "> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**",
    "> o item e diga no relatorio — nao duplique.",
```

**Inserir IMEDIATAMENTE APÓS** a segunda linha:

```
    "> **Ancoras lidas em:** para CADA edicao, o arquivo e o trecho literal que voce leu NESTE turno para escrever a ancora.",
    "> Campo OBRIGATORIO em WO que edita arquivo existente. **Quem aplica RECUSA a WO se vier vazio** — a conferencia sai de",
    "> quem escreveu (que tem o vies) e vai para quem aplica (que nao tem), que e o mesmo desenho que faz o «PARE e reporte»",
    "> funcionar todas as vezes. O campo pede o TRECHO, nao uma marca de conferido: nao se escreve o trecho sem abrir o arquivo.",
    "> **Afirmacao sobre artefato legivel nao e opiniao, e leitura** — o que uma ferramenta faz, o que um simbolo contem, em que",
    "> estado esta o mount. Nao cite simbolo, caminho ou capacidade de ferramenta que voce nao leu neste turno; declarar «nao li»",
    "> nao autoriza escrever a WO em cima.",
    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",
    "> Ele vai CRU e SOZINHO na ultima linha do relatorio, sem frase de apresentacao: texto em volta esconde o comando.",
```

## Edição 7 — `src/index.template.html` · skill gerada `apply-wo`: a recusa

**Âncora** *(ocorrência única)*:

```
    "Leia o arquivo de WO indicado em `meta/workorders/` e execute-o.",
```

**Inserir IMEDIATAMENTE APÓS:**

```
    "ANTES de editar: se a WO edita arquivo existente e o cabeçalho dela NÃO traz o campo «Âncoras lidas em» preenchido, RECUSE — não aplique, e diga que falta. Quem escreveu a WO é quem tem o viés; esta conferência é sua justamente por isso.",
```

## Edição 8 — `src/index.template.html` · skill gerada `wrap`: o passo `1b`

**Âncora** *(ocorrência única)*:

```
    "Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva)
```

**Inserir IMEDIATAMENTE ANTES** dessa linha:

```
    "ANTES de escrever qualquer coisa: abra o relatório mais recente em `../AAMMDD-HHMM-code-*.txt` e confira o que ele AFIRMA contra `git status` e `git log` — relatório é escrito antes da última ação, então um push que saiu depois dele fica registrado como não feito. Divergência vira uma linha de correção no log do dia; conferência que passa não vira linha.",
```

## Edição 9 — `src/index.template.html` · a linha **Verde/Vermelho** das DUAS skills geradas

> **Atenção — duas ocorrências quase idênticas.** A linha aparece em `applyWo` e em `wrap`; elas diferem **só no final**: a de `applyWo` diz `Grave o MESMO relatório em`, a de `wrap` diz `Grave o relatório de trabalho em`. Use o final como desambiguador e **edite as duas**.

**Em CADA uma**, faça duas substituições dentro da linha:

**(a)** substituir `Verde: \`add\`, \`commit\` e \`push\` sem perguntar.` por:

```
Verde: `add`, `commit` e `push` sem perguntar — e, se a WO declarar um **Proximo comando**, termine o relatorio com ele CRU e SOZINHO na ultima linha, sem frase de apresentacao (texto em volta esconde o comando).
```

**(b)** substituir `Sem a ferramenta, caia no menu numerado em texto e DIGA que caiu no fallback.` por:

```
Sem a ferramenta, caia no menu numerado em texto e DIGA que caiu no fallback. **O cartao serve para ESCOLHER, nao para DISPARAR:** ele nao contorna `disable-model-invocation`, entao nao o use para oferecer «rodar a skill agora» — medido duas vezes, isso acrescenta um passo sem tirar nenhum.
```

## Edição 10 — `validate.js` · o check **C53** e as quatro cláusulas novas no **C43**

**(a) Âncora** *(ocorrência única, LF)*:

```
check("C52 duas coberturas
```

**Inserir IMEDIATAMENTE ANTES** dessa linha o bloco do C53 abaixo, seguido de uma linha em branco:

```js
check("C53 a conferencia sai de quem tem o vies (wo0102): ancoras lidas na WO, comando inteiro e quem executa, Arquivar exaustivo, 1b no fecho, cartao escolhe e nao dispara", () => {
  const kit = T.buildCodeKitFiles();
  // (1) B1 — o campo de ancoras lidas existe E e recusavel por quem aplica
  assert(/Ancoras lidas em:/.test(kit.woTemplate), "modelo de WO sem o campo «Ancoras lidas em» — sem ele a leitura da ancora continua sendo promessa de quem escreve");
  assert(/RECUSA a WO se vier vazio/.test(kit.woTemplate), "o campo de ancoras existe mas ninguem o cobra: campo sem recusa e campo opcional");
  assert(/RECUSE/.test(kit.applyWo), "a skill apply-wo nao recusa WO sem ancoras lidas — a conferencia continua com quem tem o vies");
  assert(/pede o TRECHO, nao uma marca de conferido/.test(kit.woTemplate), "o campo aceita marca de conferido: e assim que campo obrigatorio vira ritual (D-102)");
  // (2) E — afirmacao sobre artefato legivel, por especie
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/afirmação sobre artefato legível não é opinião, é leitura/.test(cmd), id+": o P8 nao tipa a afirmacao — «confira antes de afirmar» e autoenderecado e falhou dez vezes em duas series");
    assert(/declarar não lida não autoriza entregar em cima/.test(cmd), id+": falta a metade que doeu — declarar «nao li» e entregar assim mesmo e pior que nao declarar");
    // (3) comando inteiro e quem executa
    assert(/vai INTEIRO e diz QUEM executa/.test(cmd), id+": nada obriga o comando a chegar inteiro — reticencias no lugar de valor que se tem devolve trabalho ao dono");
    assert(/o que este comando faz que o executor nao consegue\?/.test(cmd), id+": «e do dono» segue sendo rotulo sem impedimento nomeado");
    assert(/nao se herda para o passo vizinho/.test(cmd), id+": falta a parte que custou cinco tarefas — impedimento de um passo herdado para o vizinho");
    // (4) B2 — Arquivar exaustivo, leitura forte, prazo
    assert(/A lista é EXAUSTIVA/.test(cmd), id+": Arquivar/Manter sem exaustividade — omissao continua ambigua entre «li tudo» e «nunca abri»");
    assert(/«Arquivar» é afirmação forte/.test(cmd), id+": Arquivar sem leitura forte vira despacho");
    assert(/«Manter: não li» tem prazo/.test(cmd), id+": «Manter: nao li» sem prazo e fila indefinida — foi assim que um relatorio ficou quatro turnos fechado");
    // (5) a ordem da excecao no item Estado, e o mount sem idade por arquivo
    const iEst = cmd.indexOf("2. **Estado**"), fEst = cmd.indexOf("3. **Arquivar", iEst);
    const est = iEst > -1 ? cmd.slice(iEst, fEst > -1 ? fEst : iEst) : "";
    assert(est.length > 0, id+": o item Estado do bloco de fecho sumiu");
    assert(est.indexOf("manifesto da cópia achatada já trouxer o estado do repo") < est.indexOf("peça uma vez"), id+": a excecao do manifesto vem DEPOIS do «peca uma vez» — quem le de cima para baixo ja pediu (mesma familia da FK-O)");
    assert(/mount não carrega idade por arquivo/.test(est), id+": o item Estado nao diz que o mount zera a data por arquivo — sem isso a regra manda medir o que nao existe");
  });
  // (6) o cartao escolhe, nao dispara; e o verde enuncia o proximo comando
  [["apply-wo",kit.applyWo],["wrap",kit.wrap]].forEach(([nome,txt]) => {
    assert(/serve para ESCOLHER, nao para DISPARAR/.test(txt), "skill "+nome+": o cartao entrou sem o limite medido — usa-lo para disparar acrescenta um passo sem tirar nenhum");
    assert(/CRU e SOZINHO na ultima linha/.test(txt), "skill "+nome+": o caminho verde nao enuncia o proximo comando — o buraco nunca foi de execucao, e de enunciacao");
  });
  assert(/Proximo comando:/.test(kit.woTemplate), "modelo de WO sem o campo «Proximo comando» — sem ele a skill nao tem o que enunciar no verde");
  // (7) 1b no fecho: o relatorio anterior e conferido contra o repo
  assert(/relat[oó]rio mais recente/.test(kit.wrap), "a skill wrap nao confere o relatorio anterior contra o repo — relatorio escrito antes da ultima acao afirma o contrario do que houve");
  assert(/conferência que passa não vira linha/.test(kit.wrap), "sem essa clausula a conferencia vira ruido no log todo dia");
  return "ok";
});
```

**(b) Âncora** *(última linha da tabela `CLAUSULAS` do C43, ocorrência única)*:

```
    ["ancora exata",       /PARE e reporte/i,                 ["applyWo"]],
```

**Inserir IMEDIATAMENTE APÓS:**

```js
    // wo0102: as quatro clausulas da leva do Mapsmith 11. Entram AQUI, e nao so no C53, porque
    // e esta tabela que confere o GERADO e o INSTALADO lado a lado — a casa e o primeiro instalado.
    ["cartao escolhe",     /para ESCOLHER, n[\u00e3a]o para DISPARAR/, ["wrap","applyWo"]],
    ["proximo comando no verde", /CRU e SOZINHO na [u\u00fa]ltima\s+linha/, ["wrap","applyWo"]],
    ["recusa sem ancoras lidas", /RECUSE/,                           ["applyWo"]],
    ["1b confere o relatorio anterior", /relat[o\u00f3]rio mais recente/, ["wrap"]],
```

> As regras toleram acento e quebra de linha de propósito: as skills **geradas** são escritas sem acento e em linha única; as **instaladas** do KCM usam acento e quebram em 100 colunas. Regex literal reprovaria a casa por formatação, não por conteúdo — foi o que aconteceu na primeira tentativa.

## Edição 11 — a casa: `.claude/skills/apply-wo/SKILL.md` e `.claude/skills/wrap/SKILL.md`

> Sem esta edição o **C43 fica VERMELHO** — é ele que confere gerado e instalado lado a lado. Não é opcional nem «para depois».

**(a) `.claude/skills/apply-wo/SKILL.md`** — âncora:

```
Regras de aplicação:
- Localize cada âncora EXATAMENTE.
```

**Inserir** entre as duas linhas:

```
- **ANTES de editar:** se a WO edita arquivo existente e o cabeçalho dela NÃO traz o campo «Âncoras
  lidas em» preenchido, **RECUSE** — não aplique, e diga que falta. Quem escreveu a WO é quem tem o
  viés; esta conferência é sua justamente por isso.
```

**(b) mesmo arquivo** — âncora `caia no menu numerado em texto e **diga que caiu no fallback**. Se a minha escolha chegar depois, o relatório se`, inserir entre `**.` e `Se a minha`:

```
**O cartão
  serve para ESCOLHER, não para DISPARAR:** ele não contorna `disable-model-invocation`, então não o use para oferecer «rodar a
  skill agora» — medido duas vezes, isso acrescenta um passo sem tirar nenhum.
```

**(c) mesmo arquivo** — âncora `- **Grave o mesmo relatório em \`../AAMMDD-HHMM-code-kcm.txt\`**`, inserir IMEDIATAMENTE ANTES:

```
- **Se a WO declarar um «Próximo comando»**, termine o relatório com ele **CRU e SOZINHO na última
  linha**, sem frase de apresentação — texto em volta esconde o comando em vez de destacá-lo.
```

**(d) `.claude/skills/wrap/SKILL.md`** — âncora `- **Relate:** o que foi feito`, inserir IMEDIATAMENTE ANTES:

```
- **ANTES de escrever qualquer coisa:** abra o **relatório mais recente** em `../AAMMDD-HHMM-code-*.txt`
  e confira o que ele AFIRMA contra `git status` e `git log`. O relatório é escrito antes da última
  ação, então um push que saiu depois dele fica registrado como não feito. Divergência vira uma linha
  de correção no log do dia; **conferência que passa não vira linha**.
```

**(e) mesmo arquivo** — âncora `Sem a ferramenta, caia no menu numerado em texto e **diga que caiu no fallback**. Se a minha escolha`, inserir entre `**.` e `Se a minha`:

```
**O cartão serve
  para ESCOLHER, não para DISPARAR:** ele não contorna `disable-model-invocation`, então não o use para
  oferecer «rodar a skill agora» — medido duas vezes, isso acrescenta um passo sem tirar nenhum.
```

**(f) mesmo arquivo** — âncora `chegar depois, o relatório se REESCREVE — não fica valendo a versão velha.`, inserir IMEDIATAMENTE APÓS:

```
  **Se a tarefa declarar um «Próximo comando»**, termine o relatório com ele **CRU e SOZINHO na última
  linha**, sem frase de apresentação — texto em volta esconde o comando.
```

---

## Fora de escopo

- **A carta ao FlatDrop não muda por esta WO.** A versão corrigida sai pela raia do chat, fora do repositório.
- **Nada nas Instruções (`buildInstr`).** Foi condição da análise e está medido: C28 com os cinco números idênticos. Se algum número subir, **PARE** — alguma edição vazou para o lugar errado.
- **A i-N56 (o check que engessa a regra que consolida) não vira frente aqui.** Entra como registro na Edição 12 do bloco «Ao terminar»; decidir o que fazer com ela é de outro ciclo.
- **Não «aproveite a viagem»** para mexer no C31 — ele está verde e a Edição 3 foi escrita para mantê-lo assim.

## Armadilhas desta WO

- **CRLF no template, LF no `validate.js`.** Âncora de mais de uma linha colada com o separador errado não casa. Na dúvida, edite linha a linha.
- **Edição 9 tem duas ocorrências quase idênticas.** O desambiguador é o final da linha (`Grave o MESMO relatório` × `Grave o relatório de trabalho`). Se você editar a mesma duas vezes, o C43 acusa a que faltou.
- **As Edições 3 e 4 vivem na MESMA linha longa.** Aplique na ordem: a 4 depende de a 3 já ter saído do caminho.
- **Edição 11 é a que se esquece.** O harness a cobra, mas só depois do build — não commite antes de rodar.
- **A frase do C31 é intocável.** Reescrever a Edição 3 «para ficar melhor» derruba o C31.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` — sem erro, **18 módulos**.
- [ ] `node validate.js index.html` → **18/18 nichos · 97/97 checagens · 0 erros**. *O 97 é o número esperado: 96 + o C53.*
- [ ] O C28 imprime **exatamente** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`. **Qualquer número diferente = PARE**: alguma edição caiu dentro do `buildInstr`.
- [ ] `index.html` fica em **828.852 bytes** (era 823.845). Diferença de poucos bytes é aceitável se o harness estiver verde; diferença de milhares, não.
- [ ] `grep -c "vai INTEIRO e diz QUEM executa" src/index.template.html` → **1**.
- [ ] `grep -c "Ancoras lidas em:" src/index.template.html` → **1**.
- [ ] `grep -c "para ESCOLHER, nao para DISPARAR" src/index.template.html` → **2** *(as duas skills geradas)*.
- [ ] `grep -c "CRU e SOZINHO na ultima linha" src/index.template.html` → **3**. *Três, não dois: as duas skills geradas **mais** o modelo de WO, que também usa a frase na Edição 6. A previsão foi escrita como «2» e a simulação do texto final a refutou antes desta WO sair — é o C51 funcionando, e é a quarta vez seguida que uma previsão de `grep` erraria sem ela.*
- [ ] `git diff --stat` mostra **5 arquivos**: `src/index.template.html`, `validate.js`, `index.html`, `.claude/skills/apply-wo/SKILL.md`, `.claude/skills/wrap/SKILL.md`. Nada além.

## Ao terminar — registros (canal CODE)

**`meta/DECISIONS.md`** — acrescente:

```
### D-135 — A conferência sai de quem tem o viés (wo0102)
Aceitas as opções B1, B2 e E da análise `260820-ANALISE-a-afirmacao-verificavel.md`. O modelo de WO ganha o campo obrigatório «Âncoras lidas em», com **recusa por quem aplica** — mesmo desenho do «PARE e reporte», que tem zero falhas medidas neste projeto; o campo pede o TRECHO literal, não uma marca de conferido, porque campo obrigatório sem dado fresco vira ritual (D-102). O P8 passa a tipar a afirmação em três espécies (ferramenta · símbolo · estado do mount) e a dizer que **declarar «não li» não autoriza entregar em cima**. «Arquivar/Manter» vira exaustivo, com «Arquivar» só para o lido inteiro no turno e prazo para «Manter: não li». O item Estado passa a **começar pelo manifesto** — a exceção estava escrita depois da instrução e chegava tarde (família da FK-O) — e registra o fato medido de que o mount zera a data por arquivo, o que torna «mudou desde que li?» uma conferência de conteúdo, nunca de data. Entram ainda: comando entregue INTEIRO e com o executor nomeado (o kit não tinha regra nenhuma sobre isso, e a proibição existente só cobria comando destrutivo); enunciação do próximo comando no caminho VERDE, cru e sozinho na última linha; e o limite medido do `AskUserQuestion` — serve para ESCOLHER, não para DISPARAR, porque não contorna `disable-model-invocation`. **Recusada** a gradação de esperar um segundo consumidor antes de promover a regra tipada: correção de defeito não é funcionalidade e não espera consumidor. **Custo de teto: zero** (C28 idêntico). Cobrado pelo C53, e pelas quatro cláusulas novas do C43, que conferem gerado e instalado lado a lado.
```

**`meta/IDEAS.md`** — na entrada de 2026-08-20, marque os itens (2) a (7) como **implementados pela wo0102**, e acrescente à seção de ideias abertas:

```
- **i-N56 disparou (gatilho de evento cumprido, wo0102):** o C31 reprovou a primeira redação do item Estado porque a asserção testa a **prosa literal** (`manifesto da cópia achatada já trouxer o estado do repo`), não o comportamento. A edição foi reescrita para preservar a frase e o check ficou verde — mas o gatilho da ideia ocorreu: *o check que consolida uma regra restringe como ela pode ser refinada depois.* Não vira frente agora; fica ABERTA com o caso concreto anexado, que é o que faltava a ela.
```

**`meta/STATUS.md`** — versão **v1.120.0**, harness **18/18 · 97/97**. **Procure o valor antigo (`96`) no arquivo INTEIRO** e atualize todas as ocorrências — o cabeçalho não é o único lugar.

**`meta/CHANGELOG.md`** — entrada da v1.120.0 resumindo a leva.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal · arquivos tocados · resultado de build/validate com os números · o commit. **Não** substitua pelo bloco de fecho do chat.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md meta/workorders/260821-wo0102-a-conferencia-sai-de-quem-tem-o-vies.md
```

```
git commit -m "feat(kit): a conferencia sai de quem tem o vies (v1.120.0)" -m "Campo Ancoras lidas em no modelo de WO, com recusa por quem aplica. P8 tipa a afirmacao em tres especies e nega que declarar nao lido autorize entregar em cima. Arquivar/Manter exaustivo, com leitura forte e prazo para nao li. Item Estado comeca pelo manifesto e registra que o mount zera a data por arquivo. Comando vai inteiro e diz quem executa. Proximo comando enunciado no caminho verde, cru e sozinho. AskUserQuestion serve para escolher e nao para disparar. Passo 1b confere o relatorio anterior contra o repo. Check C53 com duas provas negativas, e quatro clausulas novas no C43 que cobram a casa. Teto inalterado: C28 identico."
```

```
git push
```
