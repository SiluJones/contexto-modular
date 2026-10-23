# WO 0141 — a pasta do historico do CDC e so leitura, e o livro de leitura de 23/10

> **Tipo:** DOC — so a casa (`meta/CEREBRO.md`, `meta/IDEAS.md`, `meta/DECISIONS.md`). Nao toca `src/` nem o `index.html`: **nao corta versao** (`D-158`), e nao precisa de build — a rede e o `git diff`. O harness roda uma vez no fim porque o `C43`, o `C102` e o `C103` leem o `meta/CEREBRO.md`.
> **Config sugerida:** modelo padrao, esforco baixo. 7 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`; todas as ancoras sao de UMA linha inteira.
> **Pre-requisito:** HEAD = `37b657c`, `main` = `origin/main`. Harness em **19/19 · 113/113 · 0 erros**, v1.131.0.
> **Base:** pedido do dono em 2026-10-23 (a pasta do historico do CDC, a mesma clausula que ele incluiu nos tres vizinhos) e o livro de leitura do mesmo dia (log de 23/10).
> **Depende de:** wo0140 (aplicada, `5378763`; fecho `37b657c`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `b9878b7c8c32f8a230a612542a87997dc7297d7d  INSTRUCOES-DO-PROJETO.md` (a frase do historico do CDC no paragrafo «Canal», LF)
> - `40e593e9cc038c07da0e0a6664cecb6cea590cb1  meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (status «Implementada», LF)
> - `0e70441f236c9559691aae9cc7ae5d576d8c3bff  logs/2026-10-22.md` (novo, secao do chat, LF)
> - `3a7b268d7604dacb2facbd963dc9afb1e40df41e  logs/2026-10-23.md` (novo, secao do chat, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada edicao, procure o texto NOVO INTEIRO no arquivo. Se ja estiver, **PULE** e diga.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `37b657c`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `meta/CEREBRO.md` — a linha «- **Notas e relatórios na pasta-pai `Contexto\`**»
> - `meta/IDEAS.md` — as tres linhas do livro de leitura, o titulo `### 2026-10-19 — Livro de leitura` e os titulos da `i-N72` e da `i-N71`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-168`, a regra no CEREBRO da casa, o livro de leitura, a `i-N71` com o dado de campo e a `i-N73` nova. **As Instrucoes, a analise e os logs de 22 e 23/10 sao do chat:** esta WO so os versiona pelo sha1. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por esta WO nem por nenhum comando dela.**

---

## 1. Por que

O dono exporta as conversas de cada projeto com o CDC para uma pasta de historico e incluiu, nos tres vizinhos, a regra de que essa pasta e so leitura para o chat; o KCM nao tinha. Aqui o risco e maior: a pasta mora dentro de `notas-arquivadas\`, o destino de todo «Arquivar». Esta WO poe a regra inteira no CEREBRO da casa (a frase curta ja esta nas Instrucoes, gravada pelo chat) e registra o livro de leitura de 23/10, que trouxe cinco lacunas do kit ainda abertas na v1.131.0 (`i-N73`) e o dado de campo do metodo C (`i-N71`).

## Inventario

- `meta/CEREBRO.md`: 1 item novo, logo abaixo de «Notas e relatórios na pasta-pai».
- `meta/IDEAS.md`: 3 linhas do livro trocadas; 1 entrada nova (2026-10-23) acima da de 19/10; a `i-N73` nova acima da `i-N72`; o titulo da `i-N71`.
- `meta/DECISIONS.md`: `D-168` no fim.

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `37b657c`. Se diferente, **PARE e reporte**.
2. `sha1sum INSTRUCOES-DO-PROJETO.md meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-22.md logs/2026-10-23.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M INSTRUCOES-DO-PROJETO.md`, ` M meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md`, `?? .claude/launch.json`, `?? logs/2026-10-22.md`, `?? logs/2026-10-23.md`, `?? meta/workorders/261023-wo0141-historico-do-cdc-e-livro.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c '^## D-168 ' meta/DECISIONS.md` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `meta/CEREBRO.md` · a pasta do historico do CDC, logo abaixo das notas

**Ancora** (a linha inteira):

```
- **Notas e relatórios na pasta-pai `Contexto\`**, fora do Git. O chat lê inteiro, registra e arquiva **movendo** para `notas-arquivadas\` — mover, nunca apagar —, listando antes e depois.
```

**Substituir por:**

```
- **Notas e relatórios na pasta-pai `Contexto\`**, fora do Git. O chat lê inteiro, registra e arquiva **movendo** para `notas-arquivadas\` — mover, nunca apagar —, listando antes e depois.
- **A pasta do histórico das conversas é do dono, só leitura: `notas-arquivadas\- Histórico - KCM (CDC)\` (D-168).** O dono a mantém com o CDC, que exporta cada conversa (`KCM N.md`, `KCM N (simples).md`, `.json`, `.cdc.json` e `cdc-raw\`). O chat pode LER quando a origem de uma decisão ajudar; não põe nada dentro, não move, não renomeia, não apaga e não versiona — **nem no «Arquivar»**: arquivar é mover para a RAIZ de `notas-arquivadas\`, nunca para dentro de uma subpasta dela, e nenhum comando do chat usa curinga ou recursão que alcance essa pasta. **A conversa se numera pelo «KCM N» do histórico**, e o handoff e o log citam esse número: os três vizinhos chegaram à mesma regra sem combinar, e a contagem própria do satelite-web tinha derivado doze conversas.
```

(O texto novo repete a ancora e acrescenta o item logo abaixo.)

## Edicao 2 — `meta/IDEAS.md` · livro de leitura · Mapoteca

**Ancora** (a linha inteira):

```
> | Mapoteca (era Sand-Land-Map) | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-BA`; carta 07 (pede o aviso de lido, `FK-BB`) | 2026-10-19 |
```

**Substituir por:**

```
> | Mapoteca (era Sand-Land-Map) | `meta/IDEAS.md`, «📮 Feedback ao KCM — leva nova» | `FK-BD` (e a `FK-BC`) | 2026-10-23 |
```

## Edicao 3 — `meta/IDEAS.md` · livro de leitura · GameDataHub

**Ancora** (a linha inteira):

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | lições de 2026-10-19 (sessão de 16 a 19/10) | 2026-10-19 |
```

**Substituir por:**

```
> | GameDataHub | `meta/IDEAS.md`, «🔁 Feedback para o Kit» e «🧩 Feedback para o Kit» | «Fusão do v1.129.0: o que o merge achou» (2026-10-20) | 2026-10-23 |
```

## Edicao 4 — `meta/IDEAS.md` · livro de leitura · satelite-web

**Ancora** (a linha inteira):

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 2026-10-12 (nada novo; carta 03 sem resposta) | 2026-10-19 |
```

**Substituir por:**

```
> | satelite-web | `meta/IDEAS.md`, «🧰 Feedback para o Kit» | item de 23/10 (a pasta do CDC); carta do método C de 2026-10-20 | 2026-10-23 |
```

## Edicao 5 — `meta/IDEAS.md` · a leitura de 23/10, acima da de 19/10

**Ancora** (o titulo inteiro):

```
### 2026-10-19 — Livro de leitura: a carta 07 do Mapoteca, as lições do GameDataHub, e as cartas do pacote v1.129.0
```

**Substituir por:**

```
### 2026-10-23 — Livro de leitura: o que o merge do v1.129.0 achou nos três, e as cartas do pacote v1.131.0

- **Mapoteca** (`57ffe6e`): **`FK-BC`** — o pacote v1.129.0 se contradiz em três pontos (a Config «sempre» no CEREBRO × «se a PRÓXIMA etapa pedir» nas Instruções; o texto «Próximo vem antes de um divisor» × o esqueleto que abre com `---`; o carimbo indistinguível × decidível) e cinco bullets do Refino estão no fim do «Bloco de fecho»; sugere conferir Instruções × CEREBRO × manifesto do próprio pacote. **`FK-BD`** — a versão errada do pacote e o nome da pasta. A `FK-BD` e a `FK-BC` (3) estão consertadas na v1.130.0 (`D-166`); a `FK-BC` (1), (2) e (4) foram **conferidas na v1.131.0 e continuam** — ver `i-N73`. **Carta 09** enviada com o pacote. Pendente do nosso lado: a leitura do `DECISIONS` deles.
- **GameDataHub** (`4c9de45`): «Fusão do v1.129.0: o que o merge achou» — a ponte do chat não grava em `.claude/` (o kit manda entregar inteiro sem dizer como, no canal pasta); o `wc -m` conta bytes sem locale UTF-8 (no terminal deles inventou um estouro de teto; no do KCM, `LANG=C.UTF-8`, bate com `len()`); e o que devolvem (prova de vida antes do código, âncora e «Vira» sem borda em branco, remoção como «Substituir» com texto próprio, escrita pela ferramenta e não por `echo -e`). Para a `i-N73`. **Carta 03** enviada.
- **satelite-web** (`74ef8d2`): a **carta do dado de campo do método C** (`261020-satelite-web-para-kcm-i-N71.md`, cópia em `../notas-arquivadas/`; aviso de lido `261023-kcm-leu-i-N71.md` na pasta deles) — ver `i-N71`; e o item de 23/10, **a pasta do histórico do CDC**: só leitura, fora do git e do «Arquivar», e o número da conversa vem dela, com sugestão de o kit prever essa pasta na moldura do CEREBRO. A carta 03 segue sem resposta, gatilho **2026-11-15**. **Carta 05** enviada.
- **A pasta do CDC nos quatro:** os três vizinhos têm a regra, cada um com as próprias palavras; o KCM a adota na wo0141 (`D-168`). Candidata a moldura do kit — `i-N73`.

### 2026-10-19 — Livro de leitura: a carta 07 do Mapoteca, as lições do GameDataHub, e as cartas do pacote v1.129.0
```

(O texto novo termina repetindo a ancora.)

## Edicao 6 — `meta/IDEAS.md` · `i-N73`, acima da `i-N72`

**Ancora** (o titulo inteiro):

```
## i-N72 — O pacote de atualização no canal pasta: o nome do zip não bate com a pasta que o prompt manda procurar, e o receptor não confere a versão — RESOLVIDA em 2026-10-20 (wo0139, `D-166`): o zip e a pasta têm o nome que o prompt cita, e o prompt abre pela versão; `C111`
```

**Substituir por:**

```
## i-N73 — O que o merge do v1.129.0 achou nos três vizinhos e o kit ainda não conserta — ABERTA, gatilho: a próxima análise de kit

**Origem:** o livro de leitura de 2026-10-23, conferido na v1.131.0 `[medido em sandbox]`. **(1)** Três pares contraditórios novos para o `C111`: a Config «sempre» (CEREBRO, bloco de fecho) × «se a PRÓXIMA etapa pedir config diferente» (Instruções); «Próximo vem antes de um divisor» × o esqueleto que abre com `---` antes do Próximo; e os cinco bullets do Refino («Sincronia com o CEREBRO», «Uma regra por linha», «Teto», «Teto por configuração», «Registre») no fim do «Bloco de fecho», depois de «Vale para todo turno» (Mapoteca, `FK-BC`). **(2)** No canal pasta, a ponte do chat não grava em `.claude/`, e o kit manda o chat entregar inteiro o que mora ali sem dizer o caminho (GameDataHub). **(3)** O kit manda medir as Instruções com `wc -m`, que sem locale UTF-8 conta bytes — medir com `len()` do texto em UTF-8, ou `LC_ALL=C.UTF-8 wc -m`, e dizer qual (GameDataHub). **(4)** A pasta do histórico das conversas (CDC) na moldura do CEREBRO: caminho, só leitura, fora do git e do «Arquivar», e o número da conversa vindo dela — os três vizinhos e o KCM chegaram à mesma regra sem combinar (satelite-web, 23/10). **(5)** O que o GameDataHub devolve ao molde de WO: prova de vida antes do código, âncora e «Vira» sem borda em branco, remoção como «Substituir» com texto próprio, escrita pela ferramenta e não por `echo -e`.

## i-N72 — O pacote de atualização no canal pasta: o nome do zip não bate com a pasta que o prompt manda procurar, e o receptor não confere a versão — RESOLVIDA em 2026-10-20 (wo0139, `D-166`): o zip e a pasta têm o nome que o prompt cita, e o prompt abre pela versão; `C111`
```

(O texto novo termina repetindo a ancora.)

## Edicao 7 — `meta/IDEAS.md` · a `i-N71` com o dado de campo

**Ancora** (o titulo inteiro):

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, gatilho: dez WOs no método C no satelite-web
```

**Substituir por:**

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, o dado de campo chegou (2026-10-20: 10 WOs, 10 verdes, nenhuma parada no Code, nenhum erro conhecido no commit, nenhum documento com dois escritores); pede análise do método C como modo do kit, com a pergunta que a amostra não responde — o erro do chat que só o Code veria
```

## Edicao 8 — `meta/DECISIONS.md` · `D-168` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0140» e termina em «harness 112 → **113**.»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-168 — A pasta do histórico das conversas (CDC) é do dono, só leitura, e numera as conversas

**Data:** 2026-10-23 · **WO:** 0141 · **Origem:** pedido do dono em 2026-10-23, depois de incluir a mesma cláusula nos três vizinhos · **Estende:** `D-157` (o canal pasta), a regra «arquivar é mover».

**Decisão.** `notas-arquivadas\- Histórico - KCM (CDC)\` guarda as conversas do KCM exportadas pelo CDC (`KCM N.md`, `(simples).md`, `.json`, `.cdc.json`, `cdc-raw\`). O chat pode ler; não põe nada dentro, não move, não renomeia, não apaga e não versiona. **O «Arquivar» é o ponto de risco desta casa:** a pasta mora dentro de `notas-arquivadas\`, o destino de todo arquivamento — então arquivar é mover para a RAIZ de `notas-arquivadas\`, nunca para dentro de uma subpasta, e nenhum comando do chat usa curinga ou recursão que alcance o histórico. A conversa se numera pelo «KCM N» do histórico (a de 17 a 23/10 é a KCM 22), e o handoff e o log citam esse número. A regra mora no `meta/CEREBRO.md`, e a frase curta nas Instruções da casa, lida em toda mensagem.

**Por que não uma trava no sistema de arquivos.** O atributo de só leitura do Windows impediria o CDC de reexportar as conversas por cima — o dono atualiza a pasta. A proteção que sobra ao chat já existe: apagar vem desligado na pasta vinculada. O resto é regra escrita, no ponto onde o gesto acontece.

**Fora:** a moldura do kit (a pasta do histórico no CEREBRO gerado) — `i-N73`, com as outras lacunas que o merge do v1.129.0 achou.
```

## Edicao 9 — harness (uma vez)

```
node validate.js index.html
```

Esperado: `RESULTADO: VERDE — 19/19, 0 erros` com **113/113**. Sem `node build.js`: esta WO nao toca `src/`. Registre crua no relatorio a linha do `C43`. Vermelho = **PARE**.

## Edicao 10 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 9. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere (medido 0 no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'é do dono, só leitura: `notas-arquivadas' meta/CEREBRO.md       # 0 -> 1
grep -cF '| 2026-10-23 |' meta/IDEAS.md                                   # 0 -> 3
grep -c '^### 2026-10-23 — Livro de leitura' meta/IDEAS.md                # 0 -> 1
grep -c '^## i-N73 ' meta/IDEAS.md                                        # 0 -> 1
grep -c '^## i-N71 .*o dado de campo chegou' meta/IDEAS.md                # 0 -> 1
grep -c '^## D-168 ' meta/DECISIONS.md                                    # 0 -> 1
```

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `meta/CEREBRO.md` | 1 | 0 |
| `meta/IDEAS.md` | 15 | 4 |
| `meta/DECISIONS.md` | 10 | 0 |
| `INSTRUCOES-DO-PROJETO.md` (do chat, ja no disco) | 1 | 1 |
| `meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md` (do chat, ja no disco) | 1 | 1 |
| `logs/2026-10-22.md` (novo, do chat) | 7 | 0 |
| `logs/2026-10-23.md` (novo, do chat) | 12 | 0 |
| `meta/workorders/261023-wo0141-historico-do-cdc-e-livro.md` (esta WO) | 245 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada; os do chat, com `git diff --numstat` no repositorio.

## Edicao 11 — commit e push (verde = sem perguntar)

```
git add meta/CEREBRO.md meta/IDEAS.md meta/DECISIONS.md INSTRUCOES-DO-PROJETO.md meta/analises/261020-ANALISE-contradicoes-do-cerebro-gerado.md logs/2026-10-22.md logs/2026-10-23.md meta/workorders/261023-wo0141-historico-do-cdc-e-livro.md
```

```
git commit -m "docs(meta): a pasta do historico do CDC e so leitura, e o livro de leitura de 23/10 (wo0141, D-168)" -m "A regra no CEREBRO da casa e a frase nas Instrucoes: o chat le, nao mexe, e o Arquivar vai para a raiz de notas-arquivadas; a conversa se numera pelo KCM N. Livro de 23/10; i-N71 com o dado de campo do metodo C; i-N73 com as lacunas do kit que o merge do v1.129.0 achou. Sem corte de versao."
```

```
git push
```

**Depois do push, peça ao dono no relatorio:** recolar o `INSTRUCOES-DO-PROJETO.md` no painel do Projeto (a frase do historico do CDC entrou no paragrafo «Canal»).

---

## Fora de escopo

- A pasta `notas-arquivadas\- Histórico - KCM (CDC)\`: nenhum comando desta WO a lista, le, move ou altera.
- A moldura do kit para a pasta do historico e as outras lacunas da `i-N73`: a proxima analise de kit.
- A analise do metodo C (`i-N71`).

## Armadilhas desta WO

- **Fim de linha.** `meta/CEREBRO.md` e `meta/DECISIONS.md` sao **CRLF** na arvore; os textos novos da Edicao 1 e da Edicao 8 tem varias linhas — grave-os em CRLF. `meta/IDEAS.md` e LF.
- **Edicoes que repetem a ancora dentro do texto novo** (1, 5, 6): a idempotencia e pelo texto novo INTEIRO.
- **O texto da Edicao 1 tem barras invertidas** (`notas-arquivadas\- Histórico - KCM (CDC)\`): recorte, nao redigite.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0141.txt` (`date +%y%m%d-%H%M`, rodado na hora). Analise que mudou de estado: diga no relatorio, nao edite.
