# ANÁLISE — Música gerada por IA no nicho `music`: um eixo «Produção», o bloco do Cancioneiro dentro do kit, e quem é a fonte

> **Status:** Decidida (2026-11-14: B; dois valores — Tocada · Gerada por IA (Suno); as skills copiadas com carimbo — com a recomendação do Cancioneiro, carta 04) — implementada na wo0167 (v1.141.0)
> **Data:** 261114 · **Base:** v1.140.0 na árvore (wo0166, sem commit ao escrever), HEAD `d0f9237`
> **Vira:** uma WO de código (v1.141.0) e a carta 03 ao Cancioneiro · **Decisão:** `D-179`

## Problema

O dono vai abrir um projeto de música com o KCM, gerando as faixas no Suno e organizando no Cancioneiro. O nicho `music` foi escrito para música **tocada** (DAW, arranjo, mix, master): não cita o Suno nenhuma vez. A ideia está na `i-N25` desde junho, e o material para ela chegou em 31/10 (carta 01 do Cancioneiro, com o `kit-musica/` pronto); desde então espera esta análise.

## Restrições / o que foi medido

`[medido em 2026-11-14 no src/ da árvore, no repo do Cancioneiro e no Album-Referencias]`

- **O nicho hoje:** `src/niches/music.js`, 325 linhas; arquivos PROJETO, FAIXAS, LETRAS, ARRANJO, STATUS, DECISIONS, REFERENCIAS (opcional); campo «DAW / ferramenta» com 11 DAWs e «Outra»; o princípio `sound_honest` («não ouço áudio»). **«Suno»: 0 ocorrências.**
- **O teto das Instruções não impede:** as do `music` têm 4.712 caracteres no padrão e 5.261 com o Code; a Parte 1 do bloco do Cancioneiro tem 679 (medido por eles com `len()`). Somadas: 5.391 e 5.940, abaixo dos 6.900. O pior nicho hoje é o `narrative`, com 5.944.
- **O kit do Cancioneiro** (`cancioneiro\kit-musica\`, DEC-027 deles: «o KCM copia daqui, não o contrário»): `BLOCO-SUNO.md` (Parte 1, cinco linhas para as Instruções; Parte 2, uma seção para o CEREBRO: o artefato é o pedido, onde cada coisa mora, o orçamento do Suno, a revisão antes de entregar, o ciclo de uma faixa, a interface que muda); as skills `macetes-suno` (8,8 KB) e `revisar-faixa` (6,7 KB, oito conferências com script); o prompt-modelo do JSON (`schema/PROMPT-PARA-CHATS.md`). Eles mantêm os limites em sincronia com o app por um `validate.py`. Hoje o Cancioneiro está na 0.20.0 (fórmulas de referência, 14/11).
- **Medido por eles nos guias antigos do dono**, escritos sem essas regras: 72 de 151 letras acima de 5.000 caracteres (o Suno corta em silêncio), 138 de 151 styles acima de 10 tags.
- **O Album-Referencias** (`Music\Pop-Rock`, `music` v1.127.0), o único projeto real do nicho com Suno: seis itens ao kit em 17/10. Dois já resolvidos (o `[NOME]`, `D-176`; o `CONTEXT.md` na abertura, `D-175`). Os quatro abertos: **(a)** não há camada de ferramenta de geração — onde mora o Style/Lyrics, o direito de upload, o nome de artista (o Cinzeiro tinha um `GUIA-PRODUCAO.md` fora do kit); **(b)** as tags de seção dependem do gênero; **(c)** o LOG-TEMPLATE pede «Gerações no Suno» e «Medições pendentes»; **(d)** o FAIXAS não tem campo para Style/Lyrics. **O resultado:** a nota do dono de 29/10 — das três faixas geradas, só a primeira agradou; as outras duas ficaram longe da referência.
- **Terceira voz:** o Senhores Da Guerra (`narrative` + `animation`) também não tem lugar para a ferramenta de IA de produção (`i-N83`, item 1). Fica fora desta análise: é outro nicho e outra ferramenta.

## Opções consideradas

**A — Nada no kit.** O dono cola a Parte 1 nas Instruções, a Parte 2 no CEREBRO e sobe as skills e o prompt-modelo, como o README do Cancioneiro ensina («Como usar hoje»). Funciona hoje. Custo: cada projeto repete a colagem, o merge do próximo pacote do KCM não conhece o bloco (pode tratá-lo como desvio ou apagá-lo), e os quatro itens do Album-Referencias continuam sem lugar.

**B — Um eixo «Produção» no nicho, com o bloco dentro do kit.** Um campo no construtor — **Tocada · Gerada por IA (Suno) · As duas** — que, ligado ao Suno: põe a Parte 1 nas Instruções e a Parte 2 no CEREBRO, **com carimbo de origem** (o arquivo e a data do Cancioneiro de onde veio); leva as duas skills no pacote, também carimbadas; acrescenta o prompt «Gerar faixa para o Suno» (que entrega o JSON do contrato do Cancioneiro); e resolve os quatro itens do Album-Referencias no molde — o FAIXAS ganha a coluna do estado de geração e aponta para o JSON como o copiável, o LOG-TEMPLATE ganha «Gerações» e «Medições pendentes», e a Parte 2 ganha duas linhas que faltavam (direito de upload e nome de artista: pergunta ao dono, nunca supõe; tags de seção conforme o gênero). Com «Tocada», nada muda. Um check confere que, com o eixo ligado, o gerado tem a Parte 1, a Parte 2, as duas skills e o carimbo, e que com «Tocada» não tem nada disso.

**C — Um ponteiro, sem cópia.** Com o eixo ligado, o CEREBRO ganha uma seção curta que aponta para o `kit-musica/` do Cancioneiro (caminho, o que colar, o que subir) e nada mais. Sem cópia, sem deriva. Custo: o dono continua colando à mão, e um projeto aberto sem acesso à pasta do Cancioneiro fica sem as regras.

## Recomendação

**B.** O teto cabe, o Cancioneiro já escreveu o bloco para ser copiado (DEC-027 deles) e já mapeou cada peça num campo do nicho; e os quatro itens do único projeto real só têm onde morar se o nicho souber do Suno. **A regra de sincronia vai escrita:** a fonte das regras do Suno é o Cancioneiro; o texto no kit leva o carimbo de origem; limite que muda chega por carta do Cancioneiro e vira WO do KCM, com o carimbo novo. A WO copia o texto **byte a byte** dos arquivos deles (lidos no disco no turno), sem reescrever.

## Riscos

- **Deriva entre as cópias:** o kit fica com uma foto do Cancioneiro. Mitigação: o carimbo (o projeto vê de quando é a regra) e a carta. O KCM não consegue conferir o repo deles no CI.
- **O Suno muda a interface:** a Parte 2 já diz isso e manda acreditar no dono («o Exclude não aparece no v6-mini gratuito»).
- **Teto apertando:** 5.940 com o Code e o Suno. A próxima frase nas Instruções do `music` mede o `C28` antes.
- **«As duas»** soma as duas camadas; a medida acima vale para ela (a Parte 1 entra uma vez só).

## Ponto de decisão

1. **B como recomendado** — ou A (nada) ou C (ponteiro)?
2. **O eixo:** três valores (Tocada · Gerada por IA (Suno) · As duas), como recomendado, ou só dois?
3. **As skills:** copiadas no pacote com carimbo (B), ou só apontadas para o Cancioneiro?
