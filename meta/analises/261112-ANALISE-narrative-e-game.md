# ANÁLISE — Os nichos `narrative` e `game` pelo que os projetos parados ensinaram: a incubadora, a concepção, as invariantes e o DEC em dois lugares

> **Status:** Aberta — aguarda o dono (ponto de decisão no fim)
> **Data:** 261112 · **Base:** v1.137.0 na árvore (wo0162, sem commit ao escrever), HEAD `e2800b4`
> **Vira:** uma ou duas WOs de código (v1.138.0 em diante) e o que for adiado, com gatilho, na `i-N83`, `i-N86` e `i-N87` · **Decisão:** a escrever (`D-177`)

## Problema

Três áreas do mapa (Historiador, Game Design, Novelista; `i-N83`, `i-N86`, `i-N87`) devolveram ao kit o que os projetos de `narrative` e `game` fizeram fora do molde. Todos estão parados desde julho ou agosto: o peso é de **evidência de desenho**, não de pedido aberto. A pergunta é quais itens viram mudança no gerador agora, quais esperam, e qual é a forma de cada um.

## Restrições / o que foi medido

`[medido no src/ da árvore em 2026-11-12, v1.137.0]`

| # | Item | Vozes | No `src/` hoje |
|---|---|---|---|
| N1 | **Incubadora** — o projeto que ainda escolhe a obra (catálogo de premissas; portfólio de sistemas e protótipos), com os arquivos da obra vazios **de propósito** | 3 — Otome Mob e Botsu Route (`narrative`), aevum (`game`) | nada: «incuba» só aparece noutros sentidos; nenhum arquivo para premissas ou protótipos |
| N2 | **Sessão de concepção** produz decisões e reorganização sem uma linha de prosa, e nenhum gatilho dispara | 2 — Botsu Route, Otome Mob | o `narrative` tem «Concepção» só como valor do campo Fase; os 7 gatilhos próprios falam de fato, enredo, inconsistência, capítulo, erro, acervo e voz |
| N3 | **Escopo vence entrega** — «ainda não vamos preencher X» e, na mesma mensagem, uma lista de arquivos a gerar: o assistente seguiu a lista | 1 — Otome Mob | o princípio do pedido composto existe («enumera as partes, executa o que não bloqueia…»), mas não diz qual parte vence quando uma restringe a outra |
| N4 | **VOZ sem prosa aprovada** — em obra nova o VOZ fica vazio quando mais importa | 1 — Botsu Route (lá: «amostras propostas, não aprovadas», trocadas pelo primeiro trecho aprovado) | o molde do VOZ tem «Exemplos de prosa APROVADA (do autor)», sem lugar para a amostra provisória |
| N5 | **Invariantes de mecânica** — um *feel* aprovado regride por patch; vira frase testável («depois do wall-jump sem input, arco; se cair reto, regrediu») | 1 — Hey Mother (`game`), de regressão real | o `game` não tem «invariante» nem «regressão» (0 ocorrências); o `narrative` tem o par exato: a «Lista de invariantes» do CONTINUIDADE, com gatilho que a faz só crescer |
| N6 | **O DEC em dois lugares** — o MECANICAS do aevum tinha decisões que duplicavam o DECISIONS (resolveram com índice num e registro no outro) | 1 voz; **a família medida é maior** | `### DEC-[N]` fora do `DECISIONS.md` em **4 nichos**: MECANICAS (`game`), ENREDO (`narrative`), ARRANJO (`music`), CAMPANHA (`rpg`) — dois arquivos numerando decisão no mesmo projeto |
| N7 | **O ambiente da engine** — `SETUP-GODOT.md`, `.gitignore` do Godot (`.godot/`, `.import/`, `export_presets.cfg`, LFS), validação que não é um comando (abrir o editor e rodar a cena) | 1 — Anima | o `game` lista 11 engines no campo; o `.gitignore` é o genérico; a linha do build no `CLAUDE.md` ganhou na v1.137.0 a ressalva «só documentos: apague» — não a de «a validação é rodar a cena» |
| N8 | **`narrative` + `animation` no mesmo projeto** — BIBLIA e PROJETO com o mesmo papel; PERSONAGENS da animação mais raso; PRODUCAO sem campo para ferramenta de IA | 1 — Senhores Da Guerra | sem mudança desde a leitura; a falta de IA de produção é a mesma da `i-N25` (Cancioneiro, Album-Referencias): **terceira voz** |
| N9 | **O IDEAS termina na seção de feedback** — acréscimo no fim do arquivo cai na seção errada (doze entradas de cânone no «Feedback para o Kit» do My Little Lady) | 1 voz; **família: os 19 nichos** | os três moldes de IDEAS (o universal e os do `dev` e do `brainstorm`) terminam em «Feedback para o Kit» → «Feedback para o ASU» |
| N10 | Do My Little Lady (13 a 19/08): seções do ASU com `ASU: não`; a varredura «pelo fato» sem nomear a tabela de gatilhos; push relatado e não feito; `core.autocrlf` sem `.gitattributes` | 1 | **não conferido item a item nesta análise:** o cabeçalho do STATUS diz o carimbo decidível (`D-166`), o push antes do relatório (`C37`, `C55`) e a armadilha do fim de linha no molde de WO (wo0115) — conferir no pacote quando o projeto reativar |

**Teto das Instruções.** Nenhuma proposta abaixo põe texto nas Instruções; tudo vai para o CEREBRO, os moldes e a tabela de gatilhos (que mora no CEREBRO). Se alguma acabar tocando as Instruções, mede o `C28` antes (hoje, padrão 5.829/6.900 no pior nicho).

## Opções consideradas

**N1 — incubadora.** (a) Nada: o projeto adapta à mão, como os três fizeram. (b) **Arquivo opcional + regra:** `PREMISSAS.md` no `narrative` (catálogo de premissas com estado — viva, em dossiê, escolhida, descartada) e `PROTOTIPOS.md` no `game` (sistemas e protótipos, com o que cada um provou); e no CEREBRO, a regra «enquanto a obra não foi escolhida, os arquivos dela ficam no molde: não preencha por inferência». (c) Um eixo novo no construtor («modo incubadora»), que liga e desliga arquivos. — (c) é o mais limpo para quem usa, e o mais caro: mexe na UI, no `C28` e em toda a matriz de modos. (b) tem três vozes a favor e o custo de dois moldes e uma frase.

**N2 — concepção.** Uma linha em `triggersExtra` do `narrative`: «Sessão de concepção concluída (decisões, sem prosa) → registra cada decisão no DECISIONS, atualiza BIBLIA/ENREDO/PERSONAGENS no que mudou, e o log do dia». O `C114` confere os nomes. Sem alternativa séria.

**N3 — escopo vence entrega.** (a) No `narrative` só. (b) **Universal**, uma cláusula no princípio do pedido composto, no CEREBRO: «se uma parte do pedido restringe o escopo ("ainda não vamos preencher X") e outra pede entrega que a contradiz, a restrição vence, e o assistente diz o conflito em vez de escolher calado». A falha não é de narrativa: é de leitura de pedido.

**N4 — VOZ provisório.** Uma subseção no molde: «Amostras propostas pelo assistente (NÃO aprovadas) — saem quando o primeiro trecho do autor for aprovado». Sem alternativa séria.

**N5 — invariantes de mecânica.** (a) Seção «Invariantes de *feel* (testáveis)» no MECANICAS + gatilho «*Feel* de mecânica aprovado, ou regressão achada → linha permanente nas invariantes (a lista só cresce)», o espelho exato do que o `narrative` já tem. (b) Arquivo próprio (`INVARIANTES.md`). — (a): o padrão já existe no kit e funciona; arquivo novo para uma lista curta é peso.

**N6 — o DEC em dois lugares.** (a) Nada. (b) **Um lugar só:** nos quatro moldes, a seção vira um **índice** («DEC-N → uma linha, o registro inteiro no DECISIONS»), como o aevum resolveu; e um check (par do `C114`) garante que nenhum molde que não seja o DECISIONS abre entrada `DEC-[N]`. (c) Tirar a seção. — (b): mantém o acesso rápido no arquivo do domínio e acaba com a numeração dupla, que é a origem do conflito.

**N7 — engine.** (a) `.gitignore` por engine e a linha de validação do `game` dizendo «se a validação é abrir o editor e rodar a cena, diga qual cena e o que olhar». (b) Esperar a ideia do Custom de jogo (`i11`), onde o ambiente da engine é uma das quatro partes. — Uma voz, projeto parado; a tabela de `.gitignore` por 11 engines é manutenção que ninguém pediu ainda.

**N8 — `narrative` + `animation`.** (a) Mexer nos dois moldes agora. (b) Levar a IA de produção para a análise da `i-N25` (agora com três vozes, em dois nichos), e a sobreposição BIBLIA × PROJETO para quando o modo grupo for revisto. — Uma voz para a sobreposição; a parte da IA já tem lugar.

**N9 — IDEAS.** (a) Mudar a ordem das seções (o problema só muda de lugar). (b) **Regra + marca de fim:** no CEREBRO, «acréscimo vai sob o título da seção certa, nunca no fim do arquivo», e os três moldes terminam numa linha de fim («> Fim do IDEAS. Acréscimo vai sob o título da seção, não aqui.»). — (b): barato, nos 19 nichos, e a marca é visível exatamente onde o erro acontece.

## Recomendação

**WO A (código, v1.138.0): N2, N4, N5, N6 e N9.** Cinco mudanças baratas, medidas, sem texto nas Instruções; duas delas (N6, N9) são famílias que a medição achou maiores que o relato. N6 ganha check novo com prova negativa (`DEC-[N]` só no DECISIONS); N2 e N5 passam pelo `C114`.

**WO B (código, depois da A): N1 (b) e N3 (b).** São as duas de comportamento: a incubadora muda o que o assistente faz com arquivos vazios, e a precedência do escopo muda a leitura de todo pedido. Cada uma com prova no gerado (o CEREBRO dos 19 nichos para N3; o do `narrative` e do `game` para N1) e o `C28` medido.

**Adiar, com gatilho:** N7 → a análise do Custom de jogo (`i11`), ou o primeiro projeto de `game` ativo com engine; N8 → a IA de produção na análise da `i-N25` (terceira voz), a sobreposição BIBLIA × PROJETO na próxima revisão do modo grupo; N10 → conferir no pacote quando o My Little Lady reativar.

## Riscos

- **Molde mais longo em projeto que não precisa:** os dois arquivos da incubadora são **opcionais** e desligados por padrão; o resto são seções curtas.
- **N6 muda o hábito dos projetos vivos:** quem já numera DEC no ENREDO ou no MECANICAS recebe no merge um molde com índice. O pacote marca o arquivo como `template` (compare e adote); o projeto decide. O risco é o choque no merge, não perda de dado.
- **N3 universal pode soar como recusa:** a cláusula manda **dizer** o conflito, não ignorar a entrega. Sem isso, a regra vira «entreguei menos e não avisei».
- **Evidência velha:** todos os projetos estão parados; os pedidos são de agosto e julho. O que pesa a favor é a repetição entre projetos e nichos, não a urgência.

## Ponto de decisão

1. **WO A** (concepção, VOZ provisório, invariantes de mecânica, DEC num lugar só, marca de fim do IDEAS): **seguir como recomendado**, ou tirar algum item?
2. **Incubadora (N1):** (b) arquivo opcional + regra, como recomendado — ou (a) nada, ou (c) eixo no construtor?
3. **Escopo vence entrega (N3):** (b) universal, como recomendado — ou (a) só no `narrative`?
