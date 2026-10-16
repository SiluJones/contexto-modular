# WO 0132 — fecho da conversa: as pendencias que so existiam no chat entram no IDEAS

> **Tipo:** DOC (registro). Sem build: o `index.html` nao muda. **Roda o harness mesmo assim** — o `C102` e o `C103`
> leem prosa (regra da `D-159`).
> **Config sugerida:** modelo padrao, esforco baixo. Duas edicoes num arquivo so, as duas TROCAR.
> **Pre-requisito:** HEAD = `ede5005`, `main` = `origin/main`. Harness **19/19 · 107/107**, v1.124.0.
> **Base:** fecho da conversa de 2026-10-12 a 2026-10-16 (log de 16/10).
> **Arquivos que o chat gravou no disco e esta WO versiona:** um por linha, com o `sha1sum` que o chat mediu
> ao grava-los. A Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu
> no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `9c8c753f490fe747ac16dd3292f94a269adc5c79  logs/2026-10-16.md` (novo, secao do chat, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** procure `^## i-N66 ` e `^### 2026-10-15 — Cartas enviadas`; se ja existirem, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro.

> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `ede5005`, recortadas do arquivo por prefixo, com ocorrencia
> unica; aplicadas numa replica `git archive HEAD | tar -x` e de novo **a partir do texto desta WO**, com comparacao
> byte a byte):
> - `meta/IDEAS.md` — o titulo da `i-N65` e o titulo `### 2026-09-02 — Carta 02 do satelite-web`

---

## 1. Por que

Tres pendencias e um envio so existiam no chat ou num handoff, que e transitorio: o teto das Instrucoes quase cheio
(`i-N67`), os prompts de setup sem o eixo canal (`i-N66`), as conferencias de tela do dono (`i-N68`), e as tres
cartas de 15/10 com o que cada uma pede de volta e quando cobrar. Fato que so o chat sabe nao existe para a
proxima conversa.

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; `git log -1 --oneline` = `ede5005`.
2. `sha1sum logs/2026-10-16.md` = cabecalho.
3. `git status --short` = exatamente `?? .claude/launch.json`, `?? logs/2026-10-16.md` e `?? meta/workorders/261016-wo0132-fecho-da-conversa-pendencias-no-ideas.md`.

## Edicao 1 — `meta/IDEAS.md` — tres entradas novas, acima da i-N65

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
## i-N65 — Rótulo de bug e idioma do código escolhidos na montagem do kit — ABERTA, produto, pede análise
````

**Texto:**

````
## i-N68 — Conferências de tela pendentes do dono — ABERTA, gatilho: a próxima vez que o dono abrir o `index.html` no navegador

**Origem:** duas conferências que só o olho humano faz, e que nenhum arquivo registrava como pendentes `[medido: grep no STATUS e no IDEAS, 2026-10-16]`.
- **wo0129:** o grupo «modo» do topo mostra **quatro** botões (Grupo, Code, ASU, **Mount**), e clicar em Mount troca a prévia das Instruções para o texto com «reveja o mount». Declarada «do dono» no relatório de aplicação da wo0129.
- **wo0121 a wo0127:** o roteiro de conferência de tela de seis itens, entregue em 2026-09-15 e **sem resposta** — registrado só no handoff de 2026-10-12, que é transitório. Reemitir só se o dono quiser; as versões v1.123.0 e v1.124.0 não mexeram na interface além do botão Mount.

**Como fecha:** o dono responde no chat; o chat registra a resposta com `[relatado pelo dono]`.

## i-N67 — O teto das Instruções geradas está quase cheio nos dois eixos — ABERTA, gatilho: antes da próxima regra que precise morar nas Instruções

**Medido na wo0131** `[medido por instrumento: C28]`: padrão **6.662/6.900**, incremento do Code **546/550**, combo **7.580/7.600**. A wo0131 teve de encurtar uma frase porque o combo do `narrative` deu 7.611. A próxima regra que precise estar nas Instruções — e não no CEREBRO — vai exigir cortar outra.

**A ideia:** análise antes da próxima leva. Mede o que cada linha das Instruções custa e quantas vezes ela evitou erro (o `DECISIONS` diz), e decide entre três saídas: cortar o que o CEREBRO já cobre, subir o teto com justificativa medida, ou mover o texto do ramo do Code para a skill `apply-wo`, que só o executor lê. **Não decidido.**

## i-N66 — Os prompts de setup e de transferência não conhecem o eixo canal — ABERTA, gatilho: a próxima WO de kit

**Achado em 2026-10-16**, quando o dono colou o prompt «E» (Conversa pesada — transferir agora) para fechar esta conversa. Na versão com Code, ele pede o brief «para eu colar como primeira mensagem» e o arquivo novo ou pequeno «inteiro para eu baixar». As duas frases são do canal mount. A wo0129 levou o eixo canal às Instruções e ao CEREBRO, mas **não aos prompts de setup** (`PROMPTS_BASE`), e nenhum check os compara com o canal. **Pergunta do dono, registrada:** com o canal pasta, precisa mandar o prompt inteiro? Resposta dada no chat: **não** — «o chat fecha a conversa com o handoff» basta, porque as Instruções e o CEREBRO já carregam a regra; o prompt só repete e, nas duas frases, contradiz.

**A ideia:** os prompts ganham o ramo do canal, como as Instruções ganharam — no canal pasta, o brief é gravado na pasta-pai e a conversa nova o lê pelo ritual; o arquivo pequeno vai direto para o lugar dele. E um check que confira que nenhum prompt, no canal pasta, manda baixar ou colar arquivo.

## i-N65 — Rótulo de bug e idioma do código escolhidos na montagem do kit — ABERTA, produto, pede análise
````

## Edicao 2 — `meta/IDEAS.md` — as cartas de 15/10 e seus gatilhos, no topo da secao de feedback

**Modo:** TROCAR a ancora pelo texto (o texto ja traz a ancora).

**Ancora** (ocorre exatamente 1 vez):

````
### 2026-09-02 — Carta 02 do satelite-web: três achados de uso, e um deles corrige uma conclusão nossa
````

**Texto:**

````
### 2026-10-15 — Cartas enviadas aos três vizinhos, com o que cada uma pede de volta (aguardando, com gatilho)

Entregues pelo chat na pasta-pai de cada destinatário, depois das levas v1.123.0 e v1.124.0; a cópia do KCM está em `../notas-arquivadas/` `[medido por instrumento: cmp das cópias, 2026-10-15]`. Cada uma responde o feedback do destinatário item por item, com o destino e a versão.
- **Sand-Land-Map, carta 05.** Pede: se a forma «trocar», com a âncora repetida no texto, atrapalha a leitura da WO. Declara pendente a leitura do `DECISIONS` deles, prometida na carta 04. **Gatilho:** a próxima conversa com a pasta deles concedida.
- **GameDataHub, carta 01** (a primeira). Pede: tirar o `cf_clearance` do `- Comando.txt` da pasta-pai — **ainda lá** `[medido, 2026-10-15]`; e se o executor deles também aplica WO lendo do texto dela. **Gatilho:** a próxima leitura do livro.
- **satelite-web, carta 03.** Confirma o `FIX-091` deles (locks e `.env`, resolvidos no mesmo dia). Pede dados de campo da `DEC-138` (o chat aplicando SQL pelo MCP): quantos aplicados e quantos desfeitos. **Gatilho: 2026-11-15** — sem resposta, o KCM mede sozinho no `meta/sql/` e no log deles.

### 2026-09-02 — Carta 02 do satelite-web: três achados de uso, e um deles corrige uma conclusão nossa
````

## Edicao 3 — harness, sem build

`node validate.js index.html` → `19/19`, `107/107`, `VERDE`.

## Edicao 4 — conferencia, antes e depois

| Comando | Antes | Depois |
|---|---|---|
| `grep -c "^## i-N66 " meta/IDEAS.md` | 0 | 1 |
| `grep -c "^## i-N67 " meta/IDEAS.md` | 0 | 1 |
| `grep -c "^## i-N68 " meta/IDEAS.md` | 0 | 1 |
| `grep -c "^### 2026-10-15 — Cartas enviadas" meta/IDEAS.md` | 0 | 1 |

**De leitura:** as tres `i-N` novas ficam **acima** da `i-N65`, na ordem 68, 67, 66; a entrada das cartas fica logo
abaixo da tabela do livro de leitura e acima da entrada de 2026-09-02.

**`numstat` previsto:** `meta/IDEAS.md` **27 + / 0 −**; mais o log de 16/10 (novo) e esta WO.

## Edicao 5 — commit e push (verde = sem perguntar)

```
git add meta/IDEAS.md logs/2026-10-16.md meta/workorders/261016-wo0132-fecho-da-conversa-pendencias-no-ideas.md
git commit -m "docs(meta): fecho da conversa, pendencias e cartas com gatilho no IDEAS" -m "i-N66 (prompts sem o eixo canal), i-N67 (teto das Instrucoes quase cheio), i-N68 (conferencias de tela do dono) e a entrada das tres cartas de 15/10 com o que cada uma pede de volta. Log do dia 16/10."
git push
```

## Relatorio

Na pasta-pai, `AAMMDD-HHMM-code-kcm-apply-wo0132.txt`, com o `HHMM` de `date +%y%m%d-%H%M` e o corpo minimo de oito partes.

/wrap
