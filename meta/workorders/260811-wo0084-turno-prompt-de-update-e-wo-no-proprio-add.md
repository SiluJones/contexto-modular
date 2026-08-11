# WO 0084 — vocabulario turno x conversa, o prompt de update que alcanca projeto desatualizado, e a WO que entra no proprio git add

> **Tipo:** WO de CODIGO.
> **Config sugerida:** Sonnet, esforco medio — nove edicoes, todas com texto exato. O volume esta na quantidade, nao na dificuldade.
> **Pre-requisito:** `KIT_VERSION 1.104.0`, commit `1555048`, `main` == `origin/main`, harness
> **18/18 · 83/83 · 0 erros**. A arvore tem **1 nao rastreado** (a wo0083) — a Edicao 9 versiona.
> **Base:** `260811-HANDOFF-BRIEF.md` §3.2 e §3.1. Decisao do autor (2026-08-11): vocabulario **turno**.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** procure `Ritual de início de turno` em `src/index.template.html` antes de comecar.
> Se ja existir, **PULE a Edicao 3** e diga no relatorio.

> **Canal dos meta neste ciclo = CODE.** Esta WO e o registro: faca os appends da Edicao 9.

---

## 1. Por que

**(a) O prompt de update nao alcanca quem ele existe para alcancar.** A wo0082 pos duas secoes novas no `_UPDATE-MANIFEST.md` — «Linhas revogadas» e o carimbo de modos — e a regra de usa-las no CEREBRO gerado. Mas o CEREBRO de um projeto desatualizado e **justamente o arquivo velho que o update vem consertar**: ele nao conhece a regra. A unica superficie garantida a chegar la e o **prompt** que o usuario cola — e ele nao menciona nem uma coisa nem outra. Ciclo fechado: a instrucao para usar o mecanismo mora no arquivo que o mecanismo existe para corrigir. Descoberto no **primeiro uso em campo** (pacotes para *My Little Lady* e *I will die*, 2026-08-08); os dois prompts tiveram de ser escritos a mao.

**(b) A WO nunca versiona a si mesma.** O bloco `git add` de cada WO lista a WO *anterior*, entao a ultima fica sempre nao rastreada. **Aconteceu tres vezes seguidas** (wo0081, wo0082, wo0083 — esta ultima segue pendurada agora). Nao e descuido de quem aplica: e o modelo que ensina errado.

**(c) «Sessao» nomeia coisas que acontecem a cada turno.** O autor decidiu o vocabulario: **turno** = uma troca · **conversa** = o fio inteiro. O caso duro nao e estetico: **`## Ritual de início de sessão`** contradiz a **D-111**, que manda fazer a abertura *antes de QUALQUER outra ferramenta*, **todo turno**. Mesma coisa com a linha `Início de sessão` na tabela de gatilhos e com a «Recomendacao de configuracao (fim de sessao)», que sai no Bloco de fecho — e o Bloco de fecho e por turno desde a wo0058, com gatilho proprio na tabela desde a wo0082. Enquanto isso, a linha `Fim de sessão` vive **coladinha** em `Fim de QUALQUER turno de trabalho`, e os dois eventos ficam indistinguiveis.

## 2. Contexto factual

- **Medido:** `[Ss]ess[ãa]o` aparece **19x** no CEREBRO gerado do `narrative` e **5x** nas Instrucoes. **Nao e um rename:** boa parte esta correta e **fica** — `logs/AAAA-MM-DD.md` e da conversa, «Duas sessoes no mesmo dia = o MESMO arquivo» e `## Sessão N` sao convencao de nome de log, `SESSAO.md` do nicho `rpg` e sessao de mesa (outro sentido), e a tabela da UI sobre quando abrir conversa nova tambem esta certa. Esta WO troca **treze ocorrencias**, uma a uma, e **nao usa `sed`**.
- **Armadilha de medicao, registrada porque quase me enganou:** `grep -o "sess[ãa]o"` no shell devolveu **0** num arquivo que tinha 19 — falha de locale em acento. **Meça com Python** quando o padrao tiver acento:
  `python -c "import io,re; print(len(re.findall('[Ss]ess[ãa]o', io.open('/caminho','encoding=utf-8').read())))"`
- **Medido no sandbox** (repo reconstruido deste mount, `build` + `validate` reais): **18/18 · 84/84 · 0 erros**.
- **Custo de teto NEGATIVO:** C28 sai de `padrao 6618/6900 · combo 7512/7600` para **`padrao 6611/6900 · combo 7505/7600`**. A folga do `narrative` sobe de **282 para 289** — «turno» e mais curto que «sessão», e «Ao final da conversa» e mais curto que «Ao final de cada sessão». O prompt de update e o modelo de WO nao passam por `buildInstr`.
- **Medido (prova negativa do C40, quatro vezes, uma de cada vez):** devolvendo o ritual a «de sessao», apagando a linha das revogacoes do prompt, tirando a WO do proprio `git add`, e devolvendo `Fim de sessão` a tabela — o C40 falhou nos quatro casos.

---

## Edicao 1 — `src/index.template.html` · bump de versao

**Ancora:**

```
const KIT_VERSION = "1.104.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.105.0";
```

---

## Edicao 2 — `src/index.template.html` · o prompt de update carrega as duas secoes

**2a — as duas secoes, ANTES da lista de arquivos.**

**Ancora** (em `buildUpdatePrompt`):

```
  L.push("Estes arquivos sao **genericos/estruturais** — propositalmente vazios do especifico desta obra; nao estranhe a falta de conteudo. Para cada um:");
```

**Substituir por** (o bloco abaixo **termina** com a mesma linha da ancora — nao a duplique):

```js
  L.push("**Duas coisas que a comparacao de arquivos NAO produz — leia no `_UPDATE-MANIFEST.md` ANTES de comecar:**");
  L.push("");
  L.push("1. **Secao «Linhas revogadas».** O merge so enxerga o que e NOVO no template. Algumas linhas foram **apagadas de proposito** pelo kit, e o texto antigo pode continuar vivo aqui, invisivel a comparacao, dirigindo comportamento que ja foi corrigido. Procure cada texto listado — no CEREBRO, nas Instrucoes e nas skills — e me mostre o que achar antes de mexer.");
  L.push("2. **Carimbo de modos.** O manifesto declara com quais modos este pacote foi gerado. Secao de um modo declarado como `nao` que ainda exista no seu arquivo e sobra de configuracao antiga — **ou** este pacote foi gerado com o modo esquecido. Voce nao tem como distinguir os dois casos: **reporte como choque com a secao citada e nao remova sozinho.**");
  L.push("");
  L.push("Isto vale mesmo que o CEREBRO deste projeto nao fale de revogacao nem de carimbo: se ele e antigo, e justamente ele que este pacote vem consertar.");
  L.push("");
  L.push("Estes arquivos sao **genericos/estruturais** — propositalmente vazios do especifico desta obra; nao estranhe a falta de conteudo. Para cada um:");
```

> A **posicao importa e o C40 a verifica**: as duas secoes tem de vir ANTES de `Arquivos no pacote:`. Quem le de cima para baixo ja comecou a comparar antes de saber que elas existem.

**2b — o fecho do prompt.**

**Ancora:**

```
  L.push("Comece listando o que encontrou em (a), (b) e (c). Eu decido os merges.");
```

**Substituir por:**

```js
  L.push("Comece pelas duas secoes do manifesto (linhas revogadas e carimbo de modos), e so entao liste o que encontrou em (a), (b) e (c). Eu decido os merges.");
```

---

## Edicao 3 — `src/index.template.html` · o ritual passa a ser de TURNO

Duas ocorrencias, em funcoes diferentes. **Aplique as duas.**

**3a — nas Instrucoes** (`buildInstr`). **Ancora:**

```
lines.push("## Ritual de início de sessão");
```

**Substituir por:**

```js
lines.push("## Ritual de início de turno");
```

**3b — no CEREBRO** (`buildClaudeMd`). **Ancora:**

```
L.push("## Ritual de início de sessão");
```

**Substituir por:**

```js
L.push("## Ritual de início de turno");
```

---

## Edicao 4 — `src/index.template.html` · a tabela de gatilhos separa turno de conversa

**4a — Ancora** (em `TRIGGERS_BASE`):

```
  ["Início de sessão", "Lê CEREBRO.md → CONTEXT.md → STATUS.md → última entrada do CHANGELOG."],
```

**Substituir por:**

```js
  ["Início de turno", "Lê CEREBRO.md → CONTEXT.md → STATUS.md → última entrada do CHANGELOG. **Todo turno**, não só ao abrir a conversa."],
```

**4b — Ancora** (a ultima entrada do mesmo array):

```
  ["Fim de sessão", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou algo) + log da sessão."],
```

**Substituir por:**

```js
  ["Fim da conversa", "Entrega os arquivos completos afetados: STATUS.md + CHANGELOG.md (se fechou algo) + log do dia."],
```

---

## Edicao 5 — `src/index.template.html` · a entrega de arquivos completos e da CONVERSA

**5a — Ancora** (`buildInstr`):

```
lines.push("## Ao final de cada sessão, entregue arquivos completos");
```

**Substituir por:**

```js
lines.push("## Ao final da conversa, entregue arquivos completos");
```

**5b — Ancora** (`buildClaudeMd`):

```
L.push("## Ao final de cada sessão, o assistente entrega (como arquivos completos)");
```

**Substituir por:**

```js
L.push("## Ao final da conversa, o assistente entrega (como arquivos completos)");
```

---

## Edicao 6 — `src/index.template.html` · as quatro linhas restantes

Cada uma e uma linha so. **Aplique todas.**

| # | Ancora | Substituir por |
|---|---|---|
| 6a | `L.push("## Recomendação de configuração (fim de sessão)");` | `L.push("## Recomendação de configuração (fim de turno)");` |
| 6b | `L.push("No fim de cada sessão, junto do resumo` | `L.push("No fim de cada turno, junto do resumo` |
| 6c | `order.push("última entrada do \`CHANGELOG.md\` — vê o que mudou desde a sessão anterior");` | `order.push("última entrada do \`CHANGELOG.md\` — vê o que mudou desde a conversa anterior");` |
| 6d | `lines.push("- Logs detalhados de sessão NÃO ficam no Projeto` | `lines.push("- Logs detalhados do dia NÃO ficam no Projeto` |

> Nas ancoras 6b e 6d, o resto da linha **fica intacto** — substitua so o inicio.

---

## Edicao 7 — `src/index.template.html` · a interface e os comentarios

Quatro linhas, no HTML e em comentarios de codigo. Nao afetam o produto gerado, mas o kit se le a si mesmo.

| # | Ancora | Substituir por |
|---|---|---|
| 7a | `contexto</span> = fica no Projeto (lido toda sessão · pequeno) ·` | `contexto</span> = fica no Projeto (lido em todo turno · pequeno) ·` |
| 7b | `<div class="glabel">Saídas obrigatórias <span class="gn">· ao fim de cada sessão</span></div>` | `<div class="glabel">Saídas obrigatórias <span class="gn">· ao fim da conversa</span></div>` |
| 7c | `   contexto = vive no Projeto (lido toda sessão) · histórico = cresce/Git ·` | `   contexto = vive no Projeto (lido em todo turno) · histórico = cresce/Git ·` |
| 7d | `  // essencial, rolante e qualquer outro → contexto (fica no Projeto, lido toda sessão)` | `  // essencial, rolante e qualquer outro → contexto (fica no Projeto, lido em todo turno)` |

**NAO toque** em nenhuma outra ocorrencia de «sessao». Especificamente ficam como estao: a legenda do rodape da barra lateral (`contexto entre sessões`), a tabela de quando abrir conversa nova (`Sessão sobre muita coisa já pronta`, `mandou "continue" mais de 2 vezes na sessão`), o prompt C (`Primeira sessão de um projeto`), as linhas do handoff (`o que foi feito nesta sessão`), a tabela de logs (`Duas sessões no mesmo dia`, `## Sessão N`), `SESSAO.md` do nicho `rpg`, `no fim da primeira sessão de trabalho real`, `nunca usou em N sessões`, `Verificação (sessão seguinte)` do ASU, e as regras de higiene que citam `log da sessão`.

---

## Edicao 8 — `src/index.template.html` e `validate.js` · a WO entra no proprio git add

**8a — o modelo de WO.** **Ancora** (em `buildWoTemplate`):

```
    "## Commit — blocos separados, mensagem SEM acento",
```

**Substituir por:**

```js
    "## Commit — blocos separados, mensagem SEM acento",
    "",
    "**A propria WO entra no `git add`.** Ela e o registro do que foi feito; se cada WO versionar so a anterior, a ultima fica sempre nao rastreada — ja aconteceu tres vezes seguidas. Se ela ja estiver versionada, o `add` nao faz nada e isso NAO e erro.",
    "",
    "```",
```

**8b — o comando.** **Ancora** (logo abaixo, dentro do primeiro bloco de crase):

```
    "git add [caminhos]",
```

**Substituir por:**

```js
    "git add [caminhos] [o caminho DESTA WO]",
```

**8c — o check C40.** **Ancora** em `validate.js`:

```
check("C39 skill ficha-de-choque
```

**Inserir IMEDIATAMENTE ANTES** o bloco abaixo, seguido de uma linha em branco:

```js
check("C40 vocabulario turno x conversa + o prompt de update alcanca projeto desatualizado + a WO entra no proprio git add (wo0084)", () => {
  // (1) o que acontece a cada troca chama-se TURNO; o que acontece uma vez por fio chama-se CONVERSA
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    const instr = T.buildInstr(n), cmd = T.buildClaudeMd(n);
    [["Instrucoes",instr],["CEREBRO",cmd]].forEach(([onde,txt]) => {
      assert(/## Ritual de início de turno/.test(txt), id+" ("+onde+"): ritual ainda se chama 'de sessao' — ele roda a CADA turno (D-111), e o nome contradiz a regra");
      assert(!/Ritual de início de sessão/.test(txt), id+" ("+onde+"): sobrou 'Ritual de início de sessão'");
      assert(!/lido toda sessão/.test(txt), id+" ("+onde+"): 'lido toda sessão' — contexto e lido em todo turno");
    });
    assert(/Ao final da conversa/.test(instr) && /Ao final da conversa/.test(cmd), id+": a entrega de arquivos completos e da CONVERSA, e o titulo nao diz isso");
    assert(/Início de turno/.test(cmd), id+": tabela de gatilhos sem a linha 'Inicio de turno'");
    assert(/\*\*Todo turno\*\*, não só ao abrir a conversa/.test(cmd), id+": o gatilho de inicio nao diz que vale todo turno");
    assert(/Fim da conversa/.test(cmd), id+": tabela de gatilhos ainda diz 'Fim de sessao' ao lado de 'Fim de QUALQUER turno' — os dois eventos ficam indistinguiveis");
    assert(/Fim de QUALQUER turno/.test(cmd), id+": perdeu o gatilho do bloco de fecho por turno (wo0082)");
    assert(/fim de turno\)/.test(cmd), id+": a recomendacao de configuracao ainda se declara 'fim de sessao' — ela sai no bloco de fecho, que e por turno");
  });
  // (2) o prompt de update — unica superficie garantida a chegar num projeto desatualizado
  T.STATE.workmode = T.STATE.workmode || {};
  const prev = T.STATE.workmode.codeMode;
  T.STATE.workmode.codeMode = "yes";
  const prompt = T.buildUpdatePrompt(T.normNiche(T.NICHES.narrative));
  T.STATE.workmode.codeMode = prev;
  assert(/Linhas revogadas/.test(prompt), "o prompt de update nao manda ler as linhas revogadas — a regra mora no CEREBRO, que e justamente o arquivo velho que o update vem consertar");
  assert(/[Cc]arimbo de modos/.test(prompt), "o prompt de update nao manda conferir o carimbo de modos");
  assert(/nao remova sozinho/.test(prompt), "o prompt nao proibe remover sobra de modo por conta propria");
  assert(/nao fale de revogacao nem de carimbo/.test(prompt), "o prompt nao cobre o caso do projeto cujo CEREBRO e antigo demais para conhecer o mecanismo");
  const ondeRevog = prompt.indexOf("Linhas revogadas"), ondeArquivos = prompt.indexOf("Arquivos no pacote:");
  assert(ondeRevog > -1 && ondeArquivos > -1 && ondeRevog < ondeArquivos, "as duas secoes aparecem DEPOIS da lista de arquivos — quem le de cima para baixo ja comecou a comparar antes de saber delas");
  // (3) a WO entra no proprio git add
  const wo = T.buildWoTemplate();
  assert(/git add \[caminhos\] \[o caminho DESTA WO\]/.test(wo), "o modelo de WO nao inclui a propria WO no git add");
  assert(/A propria WO entra no `git add`/.test(wo), "o modelo de WO nao explica por que ela entra no proprio add");
  assert(/NAO e erro/.test(wo), "sem a clausula de idempotencia: quem aplica vai reportar o add vazio como problema");
  return "ok";
});
```

**8d — o export que o check precisa.** **Ancora** (linha do `SHIM`):

```
buildUpdatePrompt, fileBehaviorLabel
```

**Substituir por:**

```
buildUpdatePrompt, buildWoTemplate, fileBehaviorLabel
```

---

## Edicao 9 — `meta/` · registro (append) e o arquivo pendurado

**9a — versionar a wo0083**, nao rastreada desde 2026-08-08:
`meta/workorders/260807-wo0083-skill-ficha-de-choque-no-narrativo.md`. **Se ela ja estiver versionada, o `add` nao faz nada e isso NAO e erro** — so diga no relatorio. Se o `.gitignore` a excluir, **PARE e reporte**; nao force com `-f`.

**9b — `meta/DECISIONS.md`:** append de **D-118**, no formato dos vizinhos. Conteudo obrigatorio: o vocabulario decidido (**turno** = uma troca · **conversa** = o fio inteiro), e que a troca **nao foi cosmetica** — `Ritual de início de sessão` contradizia a D-111, e `Fim de sessão` colado em `Fim de QUALQUER turno` tornava os dois eventos indistinguiveis; a lista do que **ficou** como «sessao» e por que (log do dia, `SESSAO.md` do rpg, conversa nova); o furo do `buildUpdatePrompt` achado no primeiro uso em campo, com o diagnostico — **a instrucao de usar o mecanismo morava no arquivo que o mecanismo vem consertar**, e o prompt e a unica superficie garantida a chegar num projeto desatualizado; a regra do `git add` incluir a propria WO, com a contagem (**tres vezes seguidas**); a armadilha do `grep` com acento; check **C40**; `KIT_VERSION 1.105.0`; **custo de teto NEGATIVO** (`padrao 6618 -> 6611`, folga do `narrative` **282 -> 289**, `combo 7512 -> 7505`); harness **83/83 -> 84/84, 0 erros**.

**9c — `meta/IDEAS.md`:** registrar como implementados os dois itens que o handoff brief mandava anotar (o furo do `buildUpdatePrompt`; o padrao do `git add` que nao inclui a propria WO). Se ainda nao estiverem la, entram ja fechados, com o numero de ocorrencias.

**9d — `meta/STATUS.md`:** nova secao `## 💬 Última sessão (2026-08-11 — v1.105.0)` no topo, rebaixando a anterior. **Corrija a DATA DO CABECALHO** — a linha 1 ainda diz `2026-08-03`, tres sessoes atrasada; e residuo do tipo que a D-114 tenta impedir, e a data do titulo nao estava na varredura. **Antes de escrever qualquer numero, procure o valor ANTIGO no arquivo INTEIRO** (`1.104.0`, `83/83`, `folga 282`, `2026-08-03`) e atualize **todas** as ocorrencias de estado atual, preservando as historicas dentro dos blocos de sessoes passadas. Registrar tambem: os dois pacotes de update para *My Little Lady* e *I will die* foram **entregues e aplicados pelo autor** (2026-08-08/11), com o retorno dos merges **pendente por escolha dele** — nao e bloqueio; e que a **proxima frente e o estudo e extracao do feedback do Mapsmith e do Sand Land**.

---

## Fora de escopo

- **Nao** trocar nenhuma ocorrencia de «sessao» fora da lista das Edicoes 3 a 7 (ver o paragrafo de exclusao na Edicao 7).
- **Nao** usar `sed` nem substituicao global: e desambiguacao, e cada ocorrencia foi decidida uma a uma.
- **Nao** mexer no formato dos logs (`## Sessão N`, `logs/AAAA-MM-DD.md`): e convencao de nome, e mexer nela ricocheteia nos `LOG-TEMPLATE.md` dos 18 nichos.
- **Nao** reabrir o desvio da D-113 (medicao como bloco colavel): ele pertence a frente do Mapsmith/sand-land, que comeca na proxima conversa.
- **Nao** estender a skill `ficha-de-choque` a `game`/`rpg`: espera uma leva real rodada.

## Armadilhas desta WO

- **`src/index.template.html` e CRLF** (`validate.js` e LF). Esta WO tem **duas insercoes multi-linha** (Edicoes 2a e 8a). Depois de aplicar tudo, **normalize** e confira:

```
python -c "import io,re; p='src/index.template.html'; d=io.open(p,'rb').read(); d=re.sub(rb'(?<!\r)\n', b'\r\n', d); io.open(p,'wb').write(d); print(d.count(b'\n')-d.count(b'\r\n'))"
```

  Deve imprimir **0**. Nao rode isso em `validate.js` nem nos `src/niches/*.js` — eles sao LF.
- **Edicao 2a: a linha da ancora reaparece no fim do substituto.** Nao a duplique nem a apague.
- **Edicao 3: sao DUAS ocorrencias** (`lines.push` no `buildInstr` e `L.push` no `buildClaudeMd`). Aplicar so uma deixa Instrucoes e CEREBRO se contradizendo, e o C40 pega.
- **Ao conferir a varredura, meça com Python.** `grep` do shell falha em `[ãa]` por locale e devolve zero num arquivo cheio.
- **Numero de check:** C40 e o proximo livre (o ultimo em uso e C39). Se ja existir, **PARE e reporte**.
- **Nao edite `index.html` a mao.** Edite `src/` e rode `node build.js`.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff` mostra exatamente `src/index.template.html`, `validate.js`, `index.html`, `meta/STATUS.md`, `meta/DECISIONS.md`, `meta/IDEAS.md` — mais a wo0083 (Edicao 9a) e esta propria WO, e nada alem.
- [ ] Normalizacao CRLF rodada; o comando das Armadilhas imprime **0**.
- [ ] `node build.js` roda sem erro.
- [ ] `node validate.js` fecha **18/18 · 84/84 · 0 erros**, com **C40 verde**.
- [ ] **C28 imprime `padrao 6611/6900 · +Code 522/550 · +ASU 372/400 · compart 372/450 · combo 7505/7600`** — o teto tem de **CAIR**. Se ficou igual ou subiu, alguma edicao nao entrou ou vazou; **PARE e reporte**.
- [ ] **Teste manual que a validacao nao cobre:** abra `index.html`, escolha **Narrativa & Ficcao**, ligue **Modo Code**, e va a aba de atualizacao. No **prompt de update** exibido, confirme que as duas secoes («Linhas revogadas» e carimbo de modos) aparecem **antes** da lista `Arquivos no pacote:`. Depois confira, no CEREBRO gerado na tela, que a tabela de gatilhos traz as tres linhas separadas — `Início de turno`, `Fim de QUALQUER turno de trabalho` e `Fim da conversa` — e que o titulo do ritual diz **turno**.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da validacao · o commit
e o push. **Escreva-o DEPOIS de resolver o push.**

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/STATUS.md meta/DECISIONS.md meta/IDEAS.md meta/workorders/260807-wo0083-skill-ficha-de-choque-no-narrativo.md meta/workorders/260811-wo0084-turno-prompt-de-update-e-wo-no-proprio-add.md
```

```
git commit -m "fix(kit): vocabulario turno x conversa, prompt de update que alcanca projeto desatualizado, WO no proprio git add (wo0084, D-118)" -m "- o prompt de update nao mencionava as linhas revogadas nem o carimbo de modos, e a regra de usa-los morava no CEREBRO: justamente o arquivo velho que o update vem consertar. O prompt e a unica superficie garantida a chegar num projeto desatualizado" -m "- modelo de WO passa a incluir a propria WO no git add: cada WO versionava so a anterior, e a ultima ficava sempre nao rastreada (tres vezes seguidas)" -m "- vocabulario decidido pelo autor: turno = uma troca, conversa = o fio inteiro. Nao e cosmetico: Ritual de inicio de sessao contradizia a D-111 (abertura a cada turno) e Fim de sessao colado em Fim de QUALQUER turno tornava os dois eventos indistinguiveis" -m "- treze ocorrencias trocadas uma a uma; log do dia, SESSAO.md do rpg e conversa nova ficam como estao" -m "- check C40 novo; wo0083 versionada; data do cabecalho do STATUS corrigida" -m "- KIT_VERSION 1.105.0; custo de teto NEGATIVO (padrao 6618 -> 6611, folga do narrative 282 -> 289); 18/18, 83/83 -> 84/84, 0 erros"
```

```
git push
```
