# WO 0138 — o livro de leitura de 19/10, o aviso de lido como pratica da casa, e os dois defeitos do pacote

> **Tipo:** DOC — so a casa (`meta/IDEAS.md`, `meta/CEREBRO.md`, `meta/DECISIONS.md`). Nao toca `src/` nem o `index.html`: **nao corta versao** (`D-158`), e nao precisa de build — a rede e o `git diff`. O harness roda uma vez no fim porque o `C43`, o `C102` e o `C103` leem o `meta/CEREBRO.md`.
> **Config sugerida:** modelo padrao, esforco baixo. 6 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira.
> **Pre-requisito:** HEAD = `1d31add`, `main` = `origin/main`. Harness em **19/19 · 111/111 · 0 erros**, v1.129.0.
> **Base:** o livro de leitura de 2026-10-19 (log do dia, «Conversa 3 (chat)» e «Conversa 4 (chat)»); pedido do dono em 2026-10-19.
> **Depende de:** wo0137 (aplicada, `d11995f`; fecho `1d31add`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `0437a48efe0299112fe94dd3fd78fe171d012e2d  logs/2026-10-19.md` (secoes «Conversa 3 (chat)» e «Conversa 4 (chat)», LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `1d31add`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `meta/IDEAS.md` — as tres linhas do livro de leitura (`> | Sand-Land-Map |`, `> | GameDataHub |`, `> | satelite-web |`), o titulo `### 2026-10-17 — Livro de leitura` e o titulo da `i-N71`
> - `meta/CEREBRO.md` — a linha «- **Livro de leitura dos vizinhos (D-159):**»; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-165`, o livro de leitura e a `i-N72` no IDEAS, o aviso de lido no CEREBRO. **O log de 19/10 e do chat:** esta WO so o versiona pelo sha1.

---

## 1. Por que

Em 2026-10-19 o chat leu os tres vizinhos e escreveu as cartas do pacote v1.129.0. Tres coisas precisam sair do log para o registro: **(1)** o livro de leitura avanca — o Sand-Land-Map agora se chama **Mapoteca**, mandou a carta 07 (pede um aviso de lido, `FK-BB`, e corrige a carta 06 com a `FK-BA`), e o GameDataHub tem tres licoes novas; **(2)** o aviso de lido vira pratica da casa (`D-165`), no formato que o Mapoteca propos; **(3)** o pacote entregue chegou da v1.127.0 e com um nome de pasta que o prompt da v1.129.0 nao reconhece — dois defeitos do kit, registrados na `i-N72` para a proxima WO de kit.

## Inventario

- `meta/IDEAS.md`: 3 linhas do livro trocadas; 1 entrada nova (2026-10-19) acima da de 2026-10-17; 1 ideia nova (`i-N72`) acima da `i-N71`.
- `meta/CEREBRO.md`: 1 item novo («Aviso de lido») logo abaixo do «Livro de leitura dos vizinhos».
- `meta/DECISIONS.md`: `D-165` no fim.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `1d31add`. Se diferente, **PARE e reporte**.
2. `sha1sum logs/2026-10-19.md` = o do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-19.md`, `?? .claude/launch.json`, `?? meta/workorders/261019-wo0138-livro-de-leitura-e-aviso-de-lido.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^## D-165 ' meta/DECISIONS.md` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `meta/IDEAS.md` · livro de leitura · Mapoteca (era Sand-Land-Map)

**Ancora** (a linha inteira):

```
> | Sand-Land-Map | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-AZ` e `IDEIA-084` (sem verbete novo; carta 06 lida) | 2026-10-17 |
```

**Substituir por:**

```
> | Mapoteca (era Sand-Land-Map) | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-BA`; carta 07 (pede o aviso de lido, `FK-BB`) | 2026-10-19 |
```

## Edicao 2 — `meta/IDEAS.md` · livro de leitura · GameDataHub

**Ancora** (a linha inteira):

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | resposta à carta 01, de 2026-10-16 | 2026-10-17 |
```

**Substituir por:**

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | lições de 2026-10-19 (sessão de 16 a 19/10) | 2026-10-19 |
```

## Edicao 3 — `meta/IDEAS.md` · livro de leitura · satelite-web

**Ancora** (a linha inteira):

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 (nada novo; carta 03 sem resposta) | 2026-10-17 |
```

**Substituir por:**

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 (nada novo; carta 03 sem resposta) | 2026-10-19 |
```

## Edicao 4 — `meta/IDEAS.md` · a leitura de 19/10, acima da de 17/10

**Ancora** (o titulo inteiro):

```
### 2026-10-17 — Livro de leitura: o que os três responderam às cartas de 15/10
```

**Substituir por:**

```
### 2026-10-19 — Livro de leitura: a carta 07 do Mapoteca, as lições do GameDataHub, e as cartas do pacote v1.129.0

- **Mapoteca** (era Sand-Land-Map; `alexmaxtercraft/mapoteca`, pasta `C:\Users\alexk\Creator\Mapa Interativo\Mapoteca\mapoteca`, `DEC-087` deles; commit `929a059`). **Carta 07** (`261019-mapoteca-para-kcm-07-aviso-de-lido.md`, cópia em `../notas-arquivadas/`): **(a)** pede um **aviso de lido** — a leitura que só existe no repositório de quem leu não chega a quem enviou, e o chat deles quase reescreveu a carta 06, já lida; formato `AAMMDD-<quem-leu>-leu-<NN>.md` na pasta-pai de quem enviou, três linhas (data e commit; o que foi extraído e para onde; se vem resposta), sem consumir número do contador (`FK-BB`); **(b)** corrige a carta 06: desde 2026-10-18 há a **`FK-BA`** — regra sobre o que vai NA MENSAGEM da entrega não pode morar só no molde de WO, que é lido para escrever a WO e não a mensagem; tem de estar nas Instruções e no bloco de fecho, com condição observável, e o molde não deve ter seção de roteiro para preencher. Ambas para triagem; a `FK-BA` é da família do resumo do fecho nas Instruções (`D-142`). **Respondida pela carta 08**; avisos de lido do KCM `261019-kcm-leu-06.md` e `-07.md` na pasta deles; o aviso deles da carta 08 (`261019-mapoteca-leu-08.md`) diz que o merge vai pela wo0169 deles quando a pasta do pacote aparecer. Segue pendente do nosso lado a leitura do `DECISIONS` deles; `DEC-056` aberta.
- **GameDataHub** (`90f388a`): item de 2026-10-19, «Lições da sessão de 16 a 19/10» — **(a)** a frase do «Peça no próximo turno», quando volta, É o pedido (o chat a leu como lembrete e refez o turno anterior); **(b)** âncora ou «Vira» que começa ou termina em linha em branco engana o executor (aplicou só em parte e racionalizou a diferença de linhas) — o gerador deles recusa as duas, e a WO diz «saldo diferente do previsto = VERMELHO»; **(c)** prova de vida antes do código — o teste novo roda contra o código de antes e tem de falhar no número previsto. As três para triagem; (b) é candidata ao molde de WO. **Carta 02** enviada com o pacote: a idempotência deles virou a `D-163`, sem a metade «e a âncora ausente».
- **satelite-web** (`6eee385`): nada novo desde 2026-10-12; a carta 03 segue sem resposta (pendência 6 do STATUS deles), gatilho **2026-11-15**. **Carta 04** enviada com o pacote: o método C (`DEC-178`) registrado como `i-N71`, dado de campo pedido para depois de dez WOs.
- **O pacote que chegou às três pastas é da v1.127.0, não da v1.129.0** `[medido em 2026-10-19]` — ver `i-N72`. As cartas anunciam a v1.129.0; o dono regenera.

### 2026-10-17 — Livro de leitura: o que os três responderam às cartas de 15/10
```

## Edicao 5 — `meta/IDEAS.md` · `i-N72`, acima da `i-N71`

**Ancora** (o titulo inteiro):

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web
```

**Substituir por:**

```
## i-N72 — O pacote de atualização no canal pasta: o nome do zip não bate com a pasta que o prompt manda procurar, e o receptor não confere a versão — ABERTA, gatilho: a próxima WO de kit

**Origem:** a entrega do pacote v1.129.0 aos três vizinhos, em 2026-10-19 `[medido]`. **(1)** O zip se chama `${niche.id}-template-update.zip` (`downloadUpdatePack`) e descompacta em `dev-template-update/`, mas desde a v1.129.0 o `_UPDATE-PROMPT.md` do canal pasta diz que o pacote mora em `AAMMDD-kcm-update-vX.Y.Z/`; o Mapoteca deixou o merge com gatilho nesse nome, que não dispararia. **(2)** O pacote que chegou era da **v1.127.0** — os três zips idênticos, `Kit: v1.127.0` no manifesto —, gerado por um `index.html` desatualizado, enquanto as cartas anunciavam a v1.129.0. Nada no pacote manda o receptor conferir a versão do manifesto contra a que lhe foi anunciada; quem pegou foi o KCM, lendo o manifesto do lado de lá.

**Proposta, para a WO:** no canal pasta, o download se chama `AAMMDD-kcm-update-vX.Y.Z.zip`, e o zip traz o conteúdo dentro de uma pasta com esse nome, para «Extrair tudo» criar a pasta certa sem o dono renomear; e o `_UPDATE-PROMPT.md` abre mandando conferir a linha `Kit:` do manifesto contra a versão que a carta ou o dono anunciou — diferente = PARE e avise antes de comparar qualquer coisa. Um check no harness confere que o nome do download e o nome que o prompt cita são o mesmo.

## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web
```

(O corpo da `i-N71` continua logo abaixo, como esta.)

## Edicao 6 — `meta/CEREBRO.md` · o aviso de lido, logo abaixo do livro de leitura

**Ancora** (a linha inteira do livro de leitura):

```
- **Livro de leitura dos vizinhos (D-159):** a tabela no topo de «Feedback para o Kit», no `meta/IDEAS.md`, diz até onde lemos a seção de feedback de cada projeto. Ao abrir a conversa com a pasta de um vizinho concedida, confira a seção dele contra o marcador e diga no `Base:` se há item novo. Existe porque 58 entradas ficaram seis semanas sem leitura.
```

**Substituir por:**

```
- **Livro de leitura dos vizinhos (D-159):** a tabela no topo de «Feedback para o Kit», no `meta/IDEAS.md`, diz até onde lemos a seção de feedback de cada projeto. Ao abrir a conversa com a pasta de um vizinho concedida, confira a seção dele contra o marcador e diga no `Base:` se há item novo. Existe porque 58 entradas ficaram seis semanas sem leitura.
- **Aviso de lido (D-165):** carta de vizinho lida ganha, no turno em que é lida, um aviso na pasta-pai de **quem enviou**, ao lado da carta: `AAMMDD-kcm-leu-<NN>.md`, três linhas — data da leitura e o commit do KCM; o que foi extraído e para onde (`D-NNN`, versão), ou «lido, sem extração ainda»; se vem resposta e até quando. Não consome número do contador de cartas. Existe porque o livro de leitura só mostra a leitura a quem leu: o Mapoteca quase reescreveu uma carta que o KCM já tinha lido (`FK-BB`, carta 07).
```

(O texto novo repete a linha do livro inteira e acrescenta o item do aviso de lido logo abaixo.)

## Edicao 7 — `meta/DECISIONS.md` · `D-165` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0137» e termina em «harness 110 → **111**.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-165 — Carta de vizinho lida deixa um aviso de lido na pasta de quem enviou

**Data:** 2026-10-19 · **WO:** 0138 · **Origem:** carta 07 do Mapoteca (`FK-BB`) · **Estende:** `D-159` (o livro de leitura).

**Decisão.** Quando o KCM lê uma carta de vizinho, deixa no mesmo turno um aviso na pasta-pai de quem enviou, ao lado da carta: `AAMMDD-kcm-leu-<NN>.md`, com três linhas — data da leitura e o commit do KCM; o que foi extraído e para onde, ou «lido, sem extração ainda»; se vem resposta e até quando. O aviso não consome número do contador compartilhado. Adotado no formato que o Mapoteca propôs, que faz o mesmo com as cartas do KCM desde a carta 08 (`261019-mapoteca-leu-08.md`).

**Por quê.** O livro de leitura (`D-159`) resolve o atraso do lado de quem lê, mas mora no repositório de quem leu: quem enviou não vê. O Mapoteca listou a carta 06 como «não entregue» e propôs reescrevê-la, dois dias depois de o KCM tê-la lido. O canal pasta já alcança a pasta-pai do vizinho, então o aviso custa um arquivo de três linhas.

**Fora:** virar regra gerada para todo projeto do kit — a `FK-BB` vai para a triagem com a `FK-BA`. Aqui é prática da casa, escrita no `meta/CEREBRO.md`.
```

## Edicao 8 — harness (uma vez)

```
node validate.js index.html
```

Esperado: `RESULTADO: VERDE — 19/19, 0 erros` com **111/111**. Sem `node build.js`: esta WO nao toca `src/`. Registre crua no relatorio a linha do `C43`. Vermelho = **PARE**.

## Edicao 9 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 8. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere (medido 0 no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF '> | Mapoteca (era Sand-Land-Map) |' meta/IDEAS.md              # 0 -> 1
grep -cF '| 2026-10-19 |' meta/IDEAS.md                                 # 0 -> 3
grep -c '^### 2026-10-19 — Livro de leitura' meta/IDEAS.md              # 0 -> 1
grep -c '^## i-N72 ' meta/IDEAS.md                                      # 0 -> 1
grep -cF '**Aviso de lido (D-165):**' meta/CEREBRO.md                   # 0 -> 1
grep -c '^## D-165 ' meta/DECISIONS.md                                  # 0 -> 1
```

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `meta/IDEAS.md` | 16 | 3 |
| `meta/CEREBRO.md` | 1 | 0 |
| `meta/DECISIONS.md` | 10 | 0 |
| `logs/2026-10-19.md` (as secoes do chat, ja no disco) | 23 | 0 |
| `meta/workorders/261019-wo0138-livro-de-leitura-e-aviso-de-lido.md` (esta WO) | 222 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada; o log, com `git diff --numstat` no repositorio.

## Edicao 10 — commit e push (verde = sem perguntar)

```
git add meta/IDEAS.md meta/CEREBRO.md meta/DECISIONS.md logs/2026-10-19.md meta/workorders/261019-wo0138-livro-de-leitura-e-aviso-de-lido.md
```

```
git commit -m "docs(meta): livro de leitura de 19/10, aviso de lido como pratica da casa e os dois defeitos do pacote (wo0138, D-165)" -m "Sand-Land-Map vira Mapoteca no livro; carta 07 (FK-BA, FK-BB) e licoes do GameDataHub registradas; i-N72: o zip do pacote nao bate com a pasta que o prompt cita, e o receptor nao confere a versao. Sem corte de versao."
```

```
git push
```

---

## Fora de escopo

- Consertar o nome do zip e a conferencia de versao no `_UPDATE-PROMPT.md` (`i-N72`): mexe em `src/` e corta versao — e a proxima WO de kit.
- A triagem da `FK-BA`, da `FK-BB` e das licoes do GameDataHub para o kit gerado.
- O pacote nas pastas dos vizinhos: e do dono regenerar.

## Armadilhas desta WO

- **Fim de linha.** `meta/DECISIONS.md` e **CRLF** na arvore: grave a `D-165` em CRLF. `meta/IDEAS.md` e `meta/CEREBRO.md` sao LF.
- **As Edicoes 4, 5 e 6 repetem a ancora dentro do texto novo:** a idempotencia e pelo texto novo INTEIRO.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0138.txt` (`date +%y%m%d-%H%M`, rodado na hora).
