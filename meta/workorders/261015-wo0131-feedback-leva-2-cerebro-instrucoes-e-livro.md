# WO 0131 — feedback dos vizinhos, leva 2: CEREBRO, Instrucoes, prompt de atualizacao e o livro de leitura

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa).
> **Config sugerida:** modelo padrao, esforco medio. 26 edicoes em nove arquivos, mais o `index.html` gerado, todas TROCAR (a ancora vai repetida no
> texto novo) menos a ultima, que acrescenta no fim do `meta/DECISIONS.md`.
> **Pre-requisito:** HEAD = `b1fb048` (o `/wrap` da wo0130), `main` = `origin/main`. Harness em **19/19 · 106/106 · 0 erros**, `C43` em 62 clausulas, v1.123.0.
> **Base:** analise `meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md` (leva 2) e o relatorio de aplicacao da wo0130.
> **Depende de:** wo0130 (aplicada, `1286fdf`; fecho `b1fb048`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu
> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu
> no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `e889eb33930411a3773790404dc062771e7df343  meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md` (status e desvios, LF)
> - `193e09e100b0e8c7af4b27ce821907d7687562b9  logs/2026-10-15.md` (secao do chat acrescentada depois da do Code, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure a frase-chave do texto NOVO (coluna «depois» da Edicao 28). Se ja existir, **PULE** e diga.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-159`, CHANGELOG, `i-N65`, o livro de leitura. A
> Edicoes 21 e 22 tocam o `meta/STATUS.md`, que e do `/wrap`: o numero da versao (excecao da `D-158`, pelo `C54`) e o caminho
> que o `/wrap` da wo0130 abreviou e que deixou o `C103` vermelho no repo vivo desde `b1fb048`.

> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `1286fdf`, e reconferidas em `b1fb048`; as ancoras longas foram **recortadas
> do arquivo vivo por prefixo**, exigindo ocorrencia unica, e nao redigitadas; as 26 aplicadas por script numa replica
> `git archive HEAD | tar -x` que recusou ancora com 0 ou 2+ ocorrencias, e depois de novo **a partir do texto desta WO**,
> com comparacao byte a byte):
> - `src/index.template.html` — em `HYGIENE_RULES`, a entrada «Quem abre, fecha» e a do DECISIONS («cresce devagar»); `L.push(UPDATE_PROTOCOL.intro);`; no fecho do CEREBRO, os itens 3 e 5 e o trecho «aplicada, aqui o relatório»; na sonda, o «Gatilho da promoção»; na correspondência, «O que fica pendente do outro lado»; em `handoffComo`, a «Regra dura — nunca reconstruir»; nas Instrucoes, a linha do «Fecho do turno»; no prompt de update, o «Compare»; e o `KIT_VERSION`
> - `validate.js` — a clausula `["CLAUDE.md: vocabulario de ato"` do `C43` e a linha de abertura do `G25`
> - `meta/CEREBRO.md` — o titulo «### Refino deste CEREBRO.md» e a linha «Segredo não mora na pasta-pai» da secao do canal
> - `.claude/skills/apply-wo/SKILL.md` — a linha «Leia o arquivo de WO em» e a linha do fim de linha «todo `.md` são **LF**»
> - `meta/IDEAS.md` — o titulo «## 📮 Feedback para o Kit» e o titulo da `i-N64`
> - `meta/STATUS.md`, `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.123.0`; `meta/DECISIONS.md` — o fim do arquivo

---

## 1. Por que

Segunda e ultima leva da analise de 15/10: as regras que moram no **CEREBRO gerado**, na linha do fecho das
**Instrucoes** e no **prompt de atualizacao**, e o **livro de leitura** — a tabela que diz ate onde o KCM leu o feedback de
cada vizinho, para o atraso de seis semanas nao se repetir. As regras que valem para a casa entram tambem no
`meta/CEREBRO.md`, com clausula no `C43`. Corta a **v1.124.0** (regra da `D-158`).

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · **105/106** (`C103` vermelho no repo vivo) | **19/19 · 107/107** (entra o `C106`) | `node validate.js index.html` |
| Clausulas do `C43` | 62 | **70** | `node validate.js index.html \| grep -oE "em [0-9]+ clausulas"` |
| `C54` | v1.123.0 | **v1.124.0 nos tres lugares** | linha do `C54` |
| `C28` | padrao 6603 · +Code 546 · combo 7521 | **padrao 6662 · +Code 546 · combo 7580** (de 7600) | linha do `C28` |
| `index.html` gerado | 901.168 bytes | **905.587 bytes** | a linha `OK:` do `node build.js` |

- **O teto ficou quase cheio:** combo a 20 caracteres do limite, `+Code` a 4. Registre a linha do `C28` crua no relatorio.
- **Dois vermelhos do harness ja corrigidos antes desta WO sair:** o `C19` barrou a lista dos cinco itens do fecho nas
  Instrucoes (a `D-142` proibe), e a frase que a substituiu estourou o combo do `narrative` (7.611); ficou a forma curta.
- **Duas provas negativas rodadas e restauradas:** «livro de leitura» tirado do `meta/CEREBRO.md` → `C43` vermelho; «nunca
  vai inteiro» tirado do gerado → `C106` vermelho.

**`numstat` previsto** (`git diff --cached --numstat`; `--ignore-cr-at-eol` se o seu git acusar fim de linha):

| Arquivo | + | − |
|---|---|---|
| `validate.js` | 30 | 0 |
| `src/index.template.html` | 16 | 6 |
| `index.html` | 16 | 6 |
| `meta/DECISIONS.md` | 18 | 0 |
| `meta/IDEAS.md` | 12 | 0 |
| `meta/CEREBRO.md` | 9 | 0 |
| `meta/CHANGELOG.md` | 9 | 1 |
| `.claude/skills/apply-wo/SKILL.md` | 5 | 2 |
| `meta/STATUS.md` | 2 | 2 |
| `.claude/skills/wrap/SKILL.md` | 3 | 0 |

Mais a analise e o log do dia (cabecalho) e esta WO, sem edicao sua.

## Inventario

26 edicoes, saidas do script que as aplicou na replica. **1–11:** produto (CEREBRO gerado, Instrucoes, prompt de update).
**12:** `KIT_VERSION`. **13–14:** harness (`C43` +8, `C106`). **15–20:** a casa (CEREBRO, skill `apply-wo`, livro de leitura,
`i-N65`). **21–22:** STATUS — a versao e o caminho abreviado. **23:** skill `/wrap` da casa. **24–26:** CHANGELOG e `D-159`.

**Fim de linha.** Blocos em LF. `src/index.template.html`, `meta/CEREBRO.md`, `meta/DECISIONS.md` e `validate.js` estao
em **CRLF na sua arvore**, como a skill `wrap`: compare com os `\r` removidos e grave com o fim de linha que o arquivo ja tinha.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; `git log -1 --oneline` = `b1fb048`.
2. `sha1sum meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md logs/2026-10-15.md` = cabecalho.
3. `git status --short` = exatamente ` M logs/2026-10-15.md`, ` M meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md`,
   `?? .claude/launch.json` e `?? meta/workorders/261015-wo0131-feedback-leva-2-cerebro-instrucoes-e-livro.md`.
4. `node build.js` e `node validate.js index.html`: `901168` bytes, `105/106` — **o `C103` vermelho e o esperado** (caminho
   abreviado no STATUS; a Edicao 22 o corrige) — e `em 62 clausulas`. Qualquer outro vermelho = **PARE e reporte**.

## Edicao 1 — `src/index.template.html` — higiene gerada: edicao manual, sintaxe por raia, ausencia, IDEAS antes da spec

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  "**Quem abre, fecha — e o que não fechar, declara.** Toda tarefa cria coisas **fora** do repositório: processo, porta, servidor de desenvolvimento, arquivo temporário, download de teste. Elas são de quem as criou, e a tarefa termina com a máquina como a encontrou. O que não puder ser fechado entra no relatório **com o caminho**, não como nota vaga — é exatamente o que ninguém lembra de limpar, e o custo aparece longe: servidor esquecido entre sessões chega a travar a pasta e impedir o teste seguinte; arquivo de teste largado numa pasta pessoal vira pergunta («isto aqui é seu?») numa conversa que já tinha fechado. E vale o par: **entrega bloco para outro rodar quem NÃO pode rodá-lo.** Quem tem o terminal executa e relata; devolver bloco para o dono colar, tendo como rodar, é trocar de raia.",
````

**Texto:**

````
  "**Instrução de edição manual entrega o comando que MOSTRA o alvo antes do que o altera.** «Ache a entrada que começa com X e apague a linha» é verdadeira e inútil quando o arquivo tem uma linha só, enorme: o dono abre, não acha e não sabe o que fazer. Em JSON, entregue o comando que edita, não a descrição do que procurar — o dono tem terminal, e a mão dele não é o lugar de resolver busca em texto.",
  "**A sintaxe do comando é da RAIA que o roda.** O executor roda num shell do tipo Bash, onde a barra invertida escapa o caractere seguinte: comando para ele usa `/` nos caminhos. O dono cola no shell dele, e a barra invertida só entra onde esse shell a exige; em comando `git`, `/` funciona nos dois — prefira. E todo comando que o dono copia vai em **bloco cercado**, nunca em código inline: o Markdown come a barra invertida antes de `_`, e o terminal recebe outro nome de arquivo.",
  "**Ao medir a AUSÊNCIA de um artefato, abra-o antes de concluir por que ele falta.** A medição «não está versionado» pode estar certa e a conclusão «ficou órfão» errada: a razão costuma estar escrita no próprio arquivo — no cabeçalho, uma decisão do dono de mantê-lo fora.",
  "**Antes de especificar uma frente, releia as entradas do IDEAS dela.** O resumo da conversa perde requisito que o IDEAS já detalhava, e a pergunta que o IDEAS já respondia volta a ser feita — gastando a rodada que a captura existia para poupar.",
  "**Quem abre, fecha — e o que não fechar, declara.** Toda tarefa cria coisas **fora** do repositório: processo, porta, servidor de desenvolvimento, arquivo temporário, download de teste. Elas são de quem as criou, e a tarefa termina com a máquina como a encontrou. O que não puder ser fechado entra no relatório **com o caminho**, não como nota vaga — é exatamente o que ninguém lembra de limpar, e o custo aparece longe: servidor esquecido entre sessões chega a travar a pasta e impedir o teste seguinte; arquivo de teste largado numa pasta pessoal vira pergunta («isto aqui é seu?») numa conversa que já tinha fechado. E vale o par: **entrega bloco para outro rodar quem NÃO pode rodá-lo.** Quem tem o terminal executa e relata; devolver bloco para o dono colar, tendo como rodar, é trocar de raia.",
````

## Edicao 2 — `src/index.template.html` — higiene gerada: DECISIONS por evento e Status fechado

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  "DECISIONS cresce devagar: quando passar de ~700 linhas ou uma decisão for substituída, mova as antigas para um arquivo de arquivo morto.",
````

**Texto:**

````
  "DECISIONS arquiva por EVENTO, não por tamanho: entrada resolvida ou decisão substituída vai para o arquivo morto, e o tamanho (~700 linhas) é só alarme. Para o critério ser mecânico, toda entrada traz `**Status:**` com valor fechado (aceita · substituída por X · resolvida · aberta) — «resolvido» que não está escrito no Status é opinião.",
````

## Edicao 3 — `src/index.template.html` — entrega por arquivo inteiro deixa de contradizer o modo Code

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push(UPDATE_PROTOCOL.intro);
````

**Texto:**

````
  L.push(UPDATE_PROTOCOL.intro);
  if(codeModeOn()){ L.push(""); L.push("**Com executor no repositório, esta seção vale para o arquivo que você autora inteiro — e um teste decide o resto: arquivo com seção de OUTRO autor nunca vai inteiro.** Entregá-lo inteiro é sobrescrever o outro autor (o log do dia com as seções do Code é o caso clássico); ali só cabe âncora, numa WO. Arquivo novo vai inteiro na primeira vez; documento grande e vivo, por WO."); }
````

## Edicao 4 — `src/index.template.html` — fecho gerado: arquivar e mover

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push("3. **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**, como a Config e o Handoff: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. **A lista é EXAUSTIVA:** todo arquivo avulso do mount entra numa das duas. Omissão é ambígua e o leitor não tem como desfazer a ambiguidade — pode significar «já extraí tudo» ou «nunca abri», e as duas pedem ações opostas. **«Arquivar» é afirmação forte:** só entra o que você leu INTEIRO naquele turno; na dúvida, «Manter» com o motivo. **E «Manter: não li» tem prazo** — fila indefinida não é cuidado: um relatório ficou quatro turnos nessa fila carregando a armadilha que voltou a acontecer duas vezes enquanto ele esperava. **Monte a lista a partir de uma LISTAGEM do mount, nunca da memória do que chegou neste turno** — é a diferença entre um comando e uma lembrança, e a lembrança só devolve o que é novo. **Terceiro estado, obrigatório:** arquivo já arquivado em turno anterior **continua no mount**, então continua na lista — numa terceira linha **Já arquivado:**, só os nomes, sem motivo, uma linha. Sem esse estado a lista não tem saída: ou cresce para sempre, ou os itens caem em silêncio — e cair em silêncio foi o que aconteceu cinco turnos depois de esta regra ser escrita, com quem a escreveu. Nome por nome — e não espere que eu pergunte.");
````

**Texto:**

````
  L.push("3. **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**, como a Config e o Handoff: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. **A lista é EXAUSTIVA:** todo arquivo avulso do mount entra numa das duas. Omissão é ambígua e o leitor não tem como desfazer a ambiguidade — pode significar «já extraí tudo» ou «nunca abri», e as duas pedem ações opostas. **«Arquivar» é afirmação forte:** só entra o que você leu INTEIRO naquele turno; na dúvida, «Manter» com o motivo. **E «Manter: não li» tem prazo** — fila indefinida não é cuidado: um relatório ficou quatro turnos nessa fila carregando a armadilha que voltou a acontecer duas vezes enquanto ele esperava. **Monte a lista a partir de uma LISTAGEM do mount, nunca da memória do que chegou neste turno** — é a diferença entre um comando e uma lembrança, e a lembrança só devolve o que é novo. **Terceiro estado, obrigatório:** arquivo já arquivado em turno anterior **continua no mount**, então continua na lista — numa terceira linha **Já arquivado:**, só os nomes, sem motivo, uma linha. Sem esse estado a lista não tem saída: ou cresce para sempre, ou os itens caem em silêncio — e cair em silêncio foi o que aconteceu cinco turnos depois de esta regra ser escrita, com quem a escreveu. Nome por nome — e não espere que eu pergunte. **Arquivar é MOVER para a pasta de arquivo, nunca apagar** — e nenhuma linha do fecho sugere destruir arquivo do usuário: o verbo errado na linha de contrato é repetido fielmente, turno após turno.");
````

## Edicao 5 — `src/index.template.html` — fecho gerado: handoff nunca versionado

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push("5. **Handoff** — por último, só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Handoff de conversa completa: o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`.");
````

**Texto:**

````
  L.push("5. **Handoff** — por último, só quando houver arquivo trocando de mão: arquivo por arquivo, onde cada um vai. Handoff de conversa completa: o artefato se chama `AAMMDD-HANDOFF-BRIEF.md`. **O handoff nunca é versionado nem entra nas pastas do projeto:** é artefato de transferência, como a correspondência; o que nele for durável já tem endereço nos documentos de contexto.");
````

## Edicao 6 — `src/index.template.html` — exemplo do fecho deixa de pedir relatorio colado

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
peça o **relatório** («aplicada, aqui o relatório»)
````

**Texto:**

````
peça o **relatório** («woNNNN aplicada; relatório na pasta-pai» — o relatório é arquivo, nunca texto colado)
````

## Edicao 7 — `src/index.template.html` — sonda: versionar nao e promover, codigo de producao, oraculo

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push("- **Gatilho da promoção: a sonda foi rodada uma SEGUNDA vez para comparar antes/depois.** A partir daí ela não é mais descartável — é instrumento sem teste, e o custo de deixá-la assim só cresce.");
````

**Texto:**

````
  L.push("- **Gatilho da promoção: a sonda foi rodada uma SEGUNDA vez para comparar antes/depois.** A partir daí ela não é mais descartável — é instrumento sem teste, e o custo de deixá-la assim só cresce.");
  L.push("- **Versionar não é promover.** Guardar a sonda no repositório, para ela atravessar uma troca de conversa, não a faz dar veredito; o gatilho acima vale para a promoção. E antes de promover, confira duas coisas: **a sonda chama o código de produção** que a correção vai mudar (sonda que reimplementa a regra antiga mede a regra antiga) e, se ela mede desempenho de uma consulta, **mede também o acerto**, contra um oráculo de força bruta — tempo bom com resultado errado já passou dois meses anunciado.");
````

## Edicao 8 — `src/index.template.html` — correspondencia: livro de leitura

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push("- **O que fica pendente do outro lado é seu, não dele.** Carta enviada e não respondida não é memória: vira item com gatilho no registro de ideias («se não vier resposta até X, decido sozinho por Y»). Esperar resposta sem gatilho é como o projeto trava sem ninguém perceber.");
````

**Texto:**

````
  L.push("- **O que fica pendente do outro lado é seu, não dele.** Carta enviada e não respondida não é memória: vira item com gatilho no registro de ideias («se não vier resposta até X, decido sozinho por Y»). Esperar resposta sem gatilho é como o projeto trava sem ninguém perceber.");
  L.push("- **Com a pasta do outro projeto vinculada, leia a seção de feedback dele direto — e mantenha um livro de leitura.** Uma linha por projeto no seu registro de ideias: onde fica a seção dele, o último item lido, a data. Ao abrir a conversa com a pasta dele concedida, confira se há item além do marcador. Sem isso, a seção do outro lado acumula sem que ninguém saiba que precisa procurar — já ficaram 58 entradas sem leitura por seis semanas.");
````

## Edicao 9 — `src/index.template.html` — reserva: a ferramenta do Projeto entrega o arquivo inteiro

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    "Regra dura — nunca reconstruir de fragmentos: se for editar/reescrever/reproduzir um arquivo e só houver FRAGMENTOS (RAG, sem mount, sem anexo), o assistente faz a parte que NÃO depende dele e então PEDE o arquivo de forma direta e específica — nunca adivinha o resto nem gera uma versão falsa/incompleta.",
````

**Texto:**

````
    "Regra dura — nunca reconstruir de fragmentos: se for editar/reescrever/reproduzir um arquivo e só houver FRAGMENTOS (RAG, sem mount, sem anexo), o assistente faz a parte que NÃO depende dele e então PEDE o arquivo de forma direta e específica — nunca adivinha o resto nem gera uma versão falsa/incompleta.",
    "Sem mount e sem pasta vinculada, a ferramenta do Projeto (leitura de documento) entrega o arquivo INTEIRO: só fragmento de busca (RAG) obriga a pedir o arquivo. Ausência de mount não é bloqueio.",
````

## Edicao 10 — `src/index.template.html` — Instrucoes geradas: o fecho diz quantos itens tem, sem lista-los (D-142)

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    lines.push("- **Fecho do turno** — formato fixo (divisor, listas, condição por linha) que não cabe aqui: **copie o esqueleto do CEREBRO**, não reconstitua de memória. `Estado` abre com `Base:` — o lido NESTE turno.");
````

**Texto:**

````
    lines.push("- **Fecho do turno** — formato fixo (divisor, listas, condição por linha) que não cabe aqui: **copie o esqueleto do CEREBRO**, não reconstitua de memória — o esqueleto tem cinco itens; sem saber nomeá-los, abra-o. `Estado` abre com `Base:` — o lido NESTE turno.");
````

## Edicao 11 — `src/index.template.html` — prompt de update: comparar por bloco, cobertura por arquivo, vocabulario

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  L.push("- **Compare** com o arquivo vivo equivalente do projeto (o destino real esta no manifesto).");
````

**Texto:**

````
  L.push("- **Compare** com o arquivo vivo equivalente do projeto (o destino real esta no manifesto).");
  L.push("- **Compare por BLOCO de texto, nao por cabecalho.** Skill e paragrafo corrido, sem cabecalho, e o comparador por cabecalho responde «nada novo» com a mesma cara de quem olhou. Declare a cobertura POR ARQUIVO: «arquivo X: N blocos no pacote, N comparados» — cobertura em lote esconde exatamente o arquivo que ninguem abriu.");
  L.push("- **Vocabulario novo nao renomeia arquivo antigo.** Quando o kit troca um termo (spec por WO), os arquivos ja nomeados ficam como estao: renomear em massa forja historico e deixa orfaos os ponteiros.");
````

## Edicao 12 — `src/index.template.html` — corte de versao (D-158)

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
const KIT_VERSION = "1.123.0";
````

**Texto:**

````
const KIT_VERSION = "1.124.0";
````

## Edicao 13 — `validate.js` — C43: 62 -> 70 clausulas

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
````

**Texto:**

````
    // wo0131 (D-159): a segunda leva do feedback dos tres projetos — as regras de CEREBRO que a casa
    // tambem carrega, conferidas nos dois lados.
    ["CEREBRO: edicao manual mostra o alvo", /MOSTRA o alvo antes do que o altera/,   ["cerebro"]],
    ["CEREBRO: sintaxe por raia",            /A sintaxe do comando [eé] da RAIA/,       ["cerebro"]],
    ["CEREBRO: abrir o ausente",             /abra-o antes de concluir por que ele falta/, ["cerebro"]],
    ["CEREBRO: IDEAS antes da spec",         /releia as entradas do IDEAS dela/,       ["cerebro"]],
    ["CEREBRO: arquivar e mover",            /Arquivar [eé] MOVER/,                     ["cerebro"]],
    ["CEREBRO: handoff nao versionado",      /O handoff nunca [eé] versionado/,         ["cerebro"]],
    ["CEREBRO: versionar nao e promover",    /Versionar n[aã]o [eé] promover/,          ["cerebro"]],
    ["CEREBRO: livro de leitura",            /[Ll]ivro de leitura/,                     ["cerebro"]],
    ["CLAUDE.md: vocabulario de ato", /`apply` · `wrap` · `probe` · `explore`/, ["claudeMd"]],
````

## Edicao 14 — `validate.js` — check novo: 106 -> 107

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
````

**Texto:**

````
check("C106 a segunda leva do feedback dos vizinhos chega ao gerado (wo0131, D-159): o fecho diz quantos itens tem, o modo Code nao manda entregar tudo inteiro, e o update compara por bloco", () => {
  const S=T.STATE; const prev=Object.assign({}, S.workmode||{}); const fora=[];
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    S.workmode={}; const ins=T.buildInstr(n), semCode=T.buildClaudeMd(n);
    S.workmode={codeMode:"yes"}; const comCode=T.buildClaudeMd(n);
    if(!/o esqueleto tem cinco itens/.test(ins)) fora.push(id+": a linha do fecho nas Instrucoes nao diz quantos itens o esqueleto tem");
    if(!/nunca vai inteiro/.test(comCode)) fora.push(id+": com Code, o CEREBRO ainda manda entregar todo documento inteiro");
    if(/nunca vai inteiro/.test(semCode)) fora.push(id+": sem Code, o teste do outro autor vazou");
    if(/aplicada, aqui o relat/.test(comCode)) fora.push(id+": o exemplo do fecho ainda pede o relatorio colado");
  });
  S.workmode={codeMode:"yes"};
  const up=T.buildUpdatePrompt(T.normNiche(T.NICHES.dev));
  if(!/Compare por BLOCO de texto/.test(up)) fora.push("update: sem o metodo de comparacao por bloco");
  if(!/POR ARQUIVO/.test(up)) fora.push("update: cobertura declarada em lote");
  S.workmode=prev;
  assert(fora.length===0, fora.join(" | "));
  return "ok (19 nichos)";
});

check("G25 ritual cita o doc-ancora de cada nicho; Instr nao cita .md inexistente (choque CONTEXT)", () => {
````

## Edicao 15 — `meta/CEREBRO.md` — casa: as regras da leva 2 que valem aqui

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
### Refino deste CEREBRO.md (dogfooding do G19 — wo0055)
````

**Texto:**

````
- **Instrução de edição manual entrega o comando que MOSTRA o alvo antes do que o altera.** «Ache a entrada que começa com X e apague a linha» é verdadeira e inútil quando o arquivo tem uma linha só, enorme: o dono abre, não acha e não sabe o que fazer. Em JSON, entregue o comando que edita, não a descrição do que procurar — o dono tem terminal, e a mão dele não é o lugar de resolver busca em texto.
- **A sintaxe do comando é da RAIA que o roda.** O executor roda num shell do tipo Bash, onde a barra invertida escapa o caractere seguinte: comando para ele usa `/` nos caminhos. O dono cola no shell dele, e a barra invertida só entra onde esse shell a exige; em comando `git`, `/` funciona nos dois — prefira. E todo comando que o dono copia vai em **bloco cercado**, nunca em código inline: o Markdown come a barra invertida antes de `_`, e o terminal recebe outro nome de arquivo.
- **Ao medir a AUSÊNCIA de um artefato, abra-o antes de concluir por que ele falta.** A medição «não está versionado» pode estar certa e a conclusão «ficou órfão» errada: a razão costuma estar escrita no próprio arquivo — no cabeçalho, uma decisão do dono de mantê-lo fora.
- **Antes de especificar uma frente, releia as entradas do IDEAS dela.** O resumo da conversa perde requisito que o IDEAS já detalhava, e a pergunta que o IDEAS já respondia volta a ser feita — gastando a rodada que a captura existia para poupar.
- **Arquivar é MOVER para `notas-arquivadas\`, nunca apagar** — o verbo errado na linha de contrato é repetido fielmente, turno após turno.
- **O handoff nunca é versionado nem entra no repositório:** `AAMMDD-HANDOFF-BRIEF.md` mora na pasta-pai e se arquiva como a correspondência.
- **Versionar não é promover** (sonda): guardar a sonda no repo não a faz dar veredito; antes de promover, ela chama o código de produção e, se mede desempenho, mede também o acerto contra um oráculo.

### Refino deste CEREBRO.md (dogfooding do G19 — wo0055)
````

## Edicao 16 — `meta/CEREBRO.md` — casa: o gatilho do livro de leitura

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
- **Segredo não mora na pasta-pai** nem em nota `.txt`: o que está ali entra no contexto todo turno.
````

**Texto:**

````
- **Segredo não mora na pasta-pai** nem em nota `.txt`: o que está ali entra no contexto todo turno.
- **Livro de leitura dos vizinhos (D-159):** a tabela no topo de «Feedback para o Kit», no `meta/IDEAS.md`, diz até onde lemos a seção de feedback de cada projeto. Ao abrir a conversa com a pasta de um vizinho concedida, confira a seção dele contra o marcador e diga no `Base:` se há item novo. Existe porque 58 entradas ficaram seis semanas sem leitura.
````

## Edicao 17 — `.claude/skills/apply-wo/SKILL.md` — apply-wo da casa: caminho dobrado (relatorio da wo0130)

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
Leia o arquivo de WO em `meta/workorders/$ARGUMENTS` e execute-o. Se o nome não vier na invocação,
````

**Texto:**

````
Leia o arquivo de WO em `meta/workorders/$ARGUMENTS` e execute-o (se o argumento já começar por
`meta/workorders/`, use-o como está). Se o nome não vier na invocação,
````

## Edicao 18 — `.claude/skills/apply-wo/SKILL.md` — apply-wo da casa: o fim de linha afirmado estava errado (relatorio da wo0130)

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
  máquina; `validate.js`, `build.js`, os `src/niches/*.js` e todo `.md` são **LF**. *No índice do git
````

**Texto:**

````
  máquina. Os demais variam com o `core.autocrlf` da máquina — medido em 2026-10-15: `validate.js`,
  `meta/CEREBRO.md`, `meta/DECISIONS.md`, o molde de WO e a skill `wrap` são **CRLF** na árvore, o resto
  LF; confira com `git ls-files --eol <arquivo>` antes de editar. *No índice do git
````

## Edicao 19 — `meta/IDEAS.md` — o livro de leitura, aberto com o estado de hoje

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## 📮 Feedback para o Kit
````

**Texto:**

````
## 📮 Feedback para o Kit

> **Livro de leitura (D-159)** — até onde o KCM leu a seção de feedback de cada vizinho. Atualize ao ler; confira ao abrir a conversa com a pasta do vizinho concedida.
>
> | Projeto | Seção de feedback | Último item lido | Lido em |
> |---|---|---|---|
> | Sand-Land-Map | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-AZ` e `IDEIA-084` | 2026-10-15 |
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | leva de 2026-10-02 | 2026-10-15 |
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 | 2026-10-15 |
````

## Edicao 20 — `meta/IDEAS.md` — i-N65: a entrada de produto da triagem

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## i-N64 — O `/wrap` confere a FORMA do STATUS antes de editar, não só o que o relatório afirma — RESOLVIDA em 2026-10-15 (wo0130, `D-158`): passo de contagem nas duas skills `/wrap`, a gerada e a da casa
````

**Texto:**

````
## i-N65 — Rótulo de bug e idioma do código escolhidos na montagem do kit — ABERTA, produto, pede análise

**Origem:** GameDataHub, feedback de 2026-07-18 e de 2026-09-18 — duas adoções seguidas com o mesmo custo. O kit gera `FIX-N` e código em inglês; o GameDataHub usa `BUG-00N` e código em pt-BR, e cada pacote de atualização pede a mesma troca manual em quatro artefatos (DECISIONS, LOG-TEMPLATE, skill `wrap`, molde de WO). **A ideia:** dois campos na montagem — rótulo de bug e idioma do código — aplicados pelo gerador em todas as superfícies. Pede análise: toca o pacote de atualização, as revogações e o `C43`.

## i-N64 — O `/wrap` confere a FORMA do STATUS antes de editar, não só o que o relatório afirma — RESOLVIDA em 2026-10-15 (wo0130, `D-158`): passo de contagem nas duas skills `/wrap`, a gerada e a da casa
````

## Edicao 21 — `meta/STATUS.md` — so o numero da versao (C54), como na wo0130

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> Versão atual: **v1.123.0**. Teste:
````

**Texto:**

````
> Versão atual: **v1.124.0**. Teste:
````

## Edicao 22 — `meta/STATUS.md` — o caminho que o /wrap da wo0130 abreviou: o C103 o le e acusa, e o harness do repo esta vermelho desde b1fb048

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
`meta/workorders/261015-wo0131-...md` (novo)
````

**Texto:**

````
`meta/workorders/261015-wo0131-feedback-leva-2-cerebro-instrucoes-e-livro.md` (novo)
````

## Edicao 23 — `.claude/skills/wrap/SKILL.md` — wrap da casa: o fecho so de doc tambem roda o harness

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
````

**Texto:**

````
- **Depois de escrever STATUS, DECISIONS ou log, rode `node validate.js index.html` antes do commit** — sem
  build, que o `index.html` não mudou. O `C102` e o `C103` leem prosa: fecho «só de doc» também quebra o
  harness, e foi assim que um caminho abreviado no STATUS deixou o repo vermelho sem ninguém ver (D-159).
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
````

## Edicao 24 — `meta/CHANGELOG.md`

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
> Histórico de versões. Versão atual: **v1.123.0**.
````

**Texto:**

````
> Histórico de versões. Versão atual: **v1.124.0**.
````

## Edicao 25 — `meta/CHANGELOG.md` — entrada nova no topo

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## v1.123.0 — A primeira leva do feedback dos vizinhos, e a regra que faltava para cortar versão (wo0130, D-158)
````

**Texto:**

````
## v1.124.0 — A segunda leva do feedback dos vizinhos, e o livro de leitura que impede o atraso de se repetir (wo0131, D-159)
- **CEREBRO gerado:** instrução de edição manual entrega o comando que mostra o alvo · a sintaxe do comando é da raia que o roda, e comando do dono vai em bloco cercado · ao medir a ausência de um artefato, abra-o antes de concluir por quê · releia o IDEAS da frente antes de especificar · DECISIONS arquiva por evento, com `Status:` fechado · arquivar é mover · o handoff nunca é versionado · versionar uma sonda não é promovê-la (código de produção, oráculo) · sem mount, a ferramenta do Projeto entrega o arquivo inteiro · com Code, «arquivo inteiro» passa a valer só para o que o assistente autora, e arquivo com seção de outro autor nunca vai inteiro · o exemplo do fecho deixa de pedir o relatório colado · **livro de leitura** na correspondência entre projetos.
- **Instruções geradas:** a linha do fecho diz que o esqueleto tem cinco itens e manda abri-lo a quem não souber nomeá-los — sem listar os campos, que é o que a `D-142` proíbe. Custo medido no `C28`.
- **Prompt de atualização:** comparar por bloco, cobertura declarada por arquivo; vocabulário novo não renomeia arquivo antigo.
- **A casa:** as mesmas regras no `meta/CEREBRO.md`, o livro de leitura aberto no `meta/IDEAS.md`, a `i-N65` (rótulo de bug e idioma na montagem) registrada como produto, e duas correções na skill `apply-wo` que o relatório da wo0130 apontou.
- Origem: `FK-AH`, `FK-AI`, `FK-AJ`, `FK-AK`, `FK-AL`, `FK-AN`, `FK-AO`, `FK-AV` (Sand-Land-Map); 18/09, 25/09, 28/09 e 29/09 (GameDataHub); 11/07, 28/08, 21/09 e 07/10 (satelite-web). Análise `261015-ANALISE-feedback-dos-tres-projetos.md`.
- Harness **19/19 · 107/107** (entra o `C106`); `C43` de **62 para 70** cláusulas.

## v1.123.0 — A primeira leva do feedback dos vizinhos, e a regra que faltava para cortar versão (wo0130, D-158)
````

## Edicao 26 — `meta/DECISIONS.md` — D-159 no fim do arquivo

**Modo:** ACRESCENTAR no fim do arquivo, com uma linha em branco antes.

**Texto:**

````
## D-159 — A segunda leva do feedback dos vizinhos entra pelo CEREBRO, pelas Instruções e pelo prompt de atualização, e nasce o livro de leitura

**Data:** 2026-10-15 · **WO:** 0131 · **Análise:** `meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md` · **Antecede:** `D-158` (leva 1).

**Decisão.** Entram as regras da triagem que moram no CEREBRO gerado (doze), na linha do fecho das Instruções e no prompt de atualização (duas), e as que valem para a casa entram também no `meta/CEREBRO.md` — oito cláusulas novas no `C43` (62 → 70) e o `C106` para o que não tem par instalado. Corta a **v1.124.0** pela regra da `D-158`.

**O livro de leitura.** A causa do atraso não era desatenção: nada disparava a leitura das seções de feedback, que moram no repositório de quem escreve. O remédio é barato porque o canal pasta (`D-157`) alcança os vizinhos: uma tabela no topo de «Feedback para o Kit» com o último item lido de cada projeto, conferida na abertura da conversa em que a pasta do vizinho estiver concedida. No kit, a seção «Correspondência entre projetos» ensina o mesmo. **Vigiar:** se a próxima leitura atrasar de novo, a tabela vira check.

**Do relatório da wo0130**, duas correções na skill `apply-wo` da casa: ela afirmava que todo `.md` é LF (medido: cinco arquivos estão em CRLF na árvore do dono) e não aceitava o caminho completo no argumento, que dobrava `meta/workorders/`. A segunda é também erro do chat, que passava o caminho completo na linha `/apply-wo`; a linha volta a levar só o nome do arquivo.

**A sugestão do satelite-web de 07/10 (listar os itens do fecho nas Instruções) entra em outra forma.** Ela tem evidência — depois de uma compactação, o chat fechou pela versão curta e esqueceu o roteiro —, mas a lista em linha é o que a `D-142` proíbe, e o `C19` acusou. Entra a contagem: a linha diz que o esqueleto tem cinco itens, e quem não souber nomeá-los abre o CEREBRO. A perda de memória vira gatilho, sem ensinar a forma corrida.

**E uma do `/wrap` dela, que deixou o harness vermelho.** O fecho citou no STATUS o caminho da wo0131 abreviado com reticências, e o `C103` confere que caminho citado existe, e acusou — no repo vivo, desde `b1fb048`. O `/wrap` tinha rodado o harness ANTES de escrever, e fecho só de doc não roda depois. Esta WO corrige o caminho e acrescenta à skill `/wrap` da casa: depois de escrever STATUS, DECISIONS ou log, o harness roda antes do commit.

**Já entregue pela leva 1, sem repetir aqui:** o roteiro no corpo da resposta (terceira regra de item do molde, wo0130).

**Recusadas, com motivo (na análise):** `.gitattributes` no kit de arranque, entrega incremental em arquivo separado, infra multi-máquina. **Produto:** `i-N65`.
````

## Edicao 27 — build e harness

`node build.js` → `OK: index.html (905587 bytes) a partir de 19 modulo(s) + template.`
`node validate.js index.html` → `19/19`, `107/107`, `VERDE`. Copie cruas para o relatorio as linhas do `C28`, do `C43`
(`em 70 clausulas`), do `C54` e do `C106`.

## Edicao 28 — conferencia, antes e depois

`grep -c` conta LINHAS. Rode cada um logo depois da Edicao 0 e de novo depois da 27.

| Comando | Antes | Depois |
|---|---|---|
| `grep -c "MOSTRA o alvo antes do que o altera" src/index.template.html` | 0 | 1 |
| `grep -c "MOSTRA o alvo antes do que o altera" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "Versionar não é promover" src/index.template.html` | 0 | 1 |
| `grep -c "Versionar não é promover" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "livro de leitura" src/index.template.html` | 0 | 1 |
| `grep -c "Livro de leitura dos vizinhos" meta/CEREBRO.md` | 0 | 1 |
| `grep -c "nunca vai inteiro" src/index.template.html` | 0 | 1 |
| `grep -c "o esqueleto tem cinco itens" src/index.template.html` | 0 | 1 |
| `grep -c "Compare por BLOCO de texto" src/index.template.html` | 0 | 1 |
| `grep -c "DECISIONS cresce devagar: quando passar" src/index.template.html` | 1 | 0 |
| `grep -c "aplicada, aqui o relatório" src/index.template.html` | 1 | 0 |
| `grep -c '^const KIT_VERSION = "1.124.0";' src/index.template.html` | 0 | 1 |
| `grep -c '^check("C106 ' validate.js` | 0 | 1 |
| `grep -c "^## v1.124.0 " meta/CHANGELOG.md` | 0 | 1 |
| `grep -c "^## D-159 " meta/DECISIONS.md` | 0 | 1 |
| `grep -c "^## i-N65 " meta/IDEAS.md` | 0 | 1 |
| `grep -c "Livro de leitura (D-159)" meta/IDEAS.md` | 0 | 1 |
| `grep -c "medido em 2026-10-15" .claude/skills/apply-wo/SKILL.md` | 0 | 1 |
| `grep -c "use-o como está" .claude/skills/apply-wo/SKILL.md` | 0 | 1 |
| `grep -c "wo0131-\.\.\.md" meta/STATUS.md` | 1 | 0 |
| `grep -c "antes do commit\*\* — sem" .claude/skills/wrap/SKILL.md` | 0 | 1 |

**De leitura:** no `meta/IDEAS.md`, a tabela do livro de leitura fica **logo abaixo** do titulo «📮 Feedback para o Kit»,
antes da entrada de 2026-09-02; e a `i-N65` fica **acima** da `i-N64`.

## Edicao 29 — commit e push (verde = sem perguntar)

O bloco nao traz rodape de coautoria; se o seu ambiente acrescenta o dele, e o dele que vale.

```
git add src/index.template.html index.html validate.js meta/CEREBRO.md meta/IDEAS.md meta/CHANGELOG.md meta/DECISIONS.md meta/STATUS.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md meta/analises/261015-ANALISE-feedback-dos-tres-projetos.md logs/2026-10-15.md meta/workorders/261015-wo0131-feedback-leva-2-cerebro-instrucoes-e-livro.md
git commit -m "feat(kit): v1.124.0, segunda leva do feedback dos vizinhos e o livro de leitura" -m "Doze regras no CEREBRO gerado, a linha do fecho das Instrucoes e duas no prompt de atualizacao, da triagem do feedback dos tres projetos; as que valem para a casa entram tambem no CEREBRO dela, com o C43 de 62 para 70 clausulas e o C106 novo. Livro de leitura: tabela no IDEAS com o ultimo item lido de cada vizinho, conferida ao abrir a conversa com a pasta dele. Duas correcoes na skill apply-wo vindas do relatorio da wo0130; o caminho abreviado no STATUS que deixou o C103 vermelho, e o wrap da casa passa a rodar o harness depois de escrever. i-N65 registrada. D-159."
git push
```

## Relatorio

Na pasta-pai, `AAMMDD-HHMM-code-kcm-apply-wo0131.txt`, com o `HHMM` de `date +%y%m%d-%H%M` rodado na hora e o corpo
minimo de oito partes.

/wrap
