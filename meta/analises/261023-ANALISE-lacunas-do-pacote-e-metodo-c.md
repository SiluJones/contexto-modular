# ANÁLISE — O que o merge do v1.129.0 achou nos vizinhos (i-N73), e o método C como modo do kit (i-N71)

> **Status:** Decidida em 2026-10-24 — os cinco pontos aceitos pelo dono como recomendados, com uma correção no item 1b (abaixo); a `i-N73` vira a wo0142, e o piloto do método C fica para depois dela
> **Data:** 261023 · **Base:** v1.131.0, commit `4814df2` (`main` = `origin/main`); medido numa réplica `git archive` de `322a027`; relatórios do Code em `../notas-arquivadas/`; seções de feedback dos três vizinhos lidas em 23/10 (Mapoteca `57ffe6e`, GameDataHub `4c9de45`, satelite-web `74ef8d2`)
> **Vira:** `meta/workorders/261024-wo0142-lacunas-do-pacote.md` · **Decisão:** `D-169` · **Origem:** `i-N73` e `i-N71` (livro de leitura de 2026-10-23)

## Problema

Duas frentes que chegaram juntas no livro de leitura de 23/10.

1. **`i-N73` — cinco lacunas do kit que o merge do v1.129.0 achou nos vizinhos e que a v1.131.0 não conserta.** Três são da mesma família que a `D-166` atacou (duas regras que não podem valer juntas); duas são caminhos que o canal pasta mudou e o kit não acompanhou.
2. **`i-N71` — o método C.** O satelite-web mandou o dado de campo pedido: 10 WOs, 10 verdes. A pergunta é se o kit passa a oferecer o método C, e como.

## Restrições / o que foi medido

### 1. As cinco lacunas (`i-N73`), na v1.131.0

`[medido em sandbox]` — template de `322a027`, CEREBRO e Instruções do nicho dev, Code ligado, canal pasta.

| # | O que | Onde nasce | Lado velho |
|---|---|---|---|
| 1a | **Config:** o CEREBRO diz que a «Config recomendada» sai SEMPRE (`D-140`, wo0111); as Instruções dizem «no fim, **se a PRÓXIMA etapa pedir config diferente**, recomende-a» | Instruções: `buildInstr` (l. 2366); CEREBRO: `buildClaudeMd` (l. 2841) | as Instruções (a regra do «sempre» é posterior e é a do esqueleto) |
| 1b | **Divisor:** «**Próximo** vem antes de um divisor; o resto vem depois dele» × o esqueleto, logo abaixo, que abre com `---` **antes** do Próximo e não tem divisor depois dele | `buildClaudeMd` (l. 2841 × o esqueleto) | **o esqueleto** — *corrigido em 2026-10-24, na réplica da WO:* a ordem que o dono aprovou é a do texto (`D-094`, wo0060: «Próximo antes do divisor, o resto depois»), e o `C19` a cobra; o esqueleto da wo0111 é que saiu trocado. A primeira versão desta análise dava o esqueleto como certo «porque é o que se copia» — premissa que a decisão registrada desmente |
| 1c | **Bullets fora do lugar:** «Sincronia com o CEREBRO», «Uma regra por linha», «Teto», «Teto por configuração» e «Registre» estão no código da seção de fecho, depois de «Vale para todo turno» (l. 2869–2873), e não na seção «Refino das Instruções» (l. 2748), onde é o lugar deles | `buildClaudeMd` | não é contradição: é posição |
| 2 | **`.claude/` no canal pasta:** «Arquivo sob `.claude/` o chat entrega INTEIRO, **para download**» (`HYGIENE_RULES`, l. 1188) — regra do mount; no canal pasta a ponte do chat não grava em `.claude/` («Writing to .claude is not permitted via remote tools», GameDataHub) | `HYGIENE_RULES` | — |
| 3 | **`wc -m` sem locale:** o kit manda medir as Instruções com `wc -m` (seção de canal do CEREBRO, l. 2615; skill `wrap` gerada, l. 3750; e a skill `wrap` da casa) | — | — |

**O dado que resolve a 2** `[medido no repo]`: na wo0140 o Code editou `.claude/skills/wrap/SKILL.md` da casa por WO, sem bloqueio; o que o classificador barra é o `.claude/settings.json` — a configuração de permissão do próprio executor (`HYGIENE_RULES`, l. 1188: «a barreira existe para ele não se autoconceder permissão»). O GameDataHub fez o mesmo com as skills na fusão do v1.129.0 (cópia de `..\kcm-merge-v1129-skills\` pelo Code, sha1 conferido).

**O dado que confirma a 3** `[medido no repo, relatório do /wrap da wo0141]`: as Instruções da casa têm 7.199 caracteres (`len()` do texto em UTF-8; `LC_ALL=C.UTF-8 wc -m`); o `wc -m` puro do Git Bash do Code deu **7.463** — bytes. No terminal do chat (`LANG=C.UTF-8`) os dois batem. O GameDataHub tomou uma decisão em cima de um estouro de teto que não existia (7.625 «caracteres» que eram 7.399).

**Duas que já vieram para a casa sem estarem no kit:**
- **(4) A pasta do histórico das conversas (CDC):** os três vizinhos e o KCM (`D-168`) chegaram à mesma regra sem combinar — só leitura, fora do git e do «Arquivar», e o número da conversa vem dela.
- **(5) O que o GameDataHub devolve ao molde de WO:** «Prova de vida» já existe no molde (o par negativo, `C42`), mas não diz «o teste novo roda contra o código de ANTES e tem de falhar no número previsto»; a remoção já tem regra («quebre em duas edições numeradas», l. 3529); **faltam** «âncora ou texto novo que começa ou termina em linha em branco engana quem aplica» e «relatório e log pela ferramenta de escrita, nunca `echo -e`/`printf`» (no GameDataHub, um `\261` de caminho virou byte inválido).

### 2. O método C (`i-N71`)

**O que o satelite-web mediu** (carta de 20/10): wo0219–wo0228, **10 verdes**, nenhuma parada no Code, nenhum erro conhecido no commit, nenhum documento com dois escritores. O chat carrega a verificação (tsc, ESLint, o desenho num Chromium); o Code confere o inventário (md5), roda lint e build, commita e publica. Erros pegos antes do commit, no chat: uma premissa de roteiro e uma contagem; a cópia velha do canal de arquivo, duas vezes.

**O que o KCM mede de si mesmo** `[medido: relatórios de apply wo0120–wo0140, notas arquivadas]`: desde a wo0130, quando o chat passou a aplicar cada WO por script numa réplica **a partir do texto dela** e a rodar build e harness antes de entregar, **0 de 12 WOs** tiveram desvio de conteúdo. O que o Code ainda achou foi: (a) três vezes, o chat afirmar LF num arquivo que é CRLF na árvore (wo0128, wo0138, wo0140) — a réplica nasce de `git archive`, que entrega o índice em LF e não vê a árvore; (b) um erro do próprio script do Code (wo0129); (c) o caminho dobrado na chamada da skill. Antes da wo0130, o Code pegava erros de contagem da WO (wo0121, wo0123, wo0124, wo0126, wo0127). **Ou seja: nesta casa, a mudança já é verificada duas vezes, e a segunda passada só pega o que a primeira não enxerga por construção (o fim de linha da árvore).** É o custo que o método C elimina — e o defeito da `D-163` (a idempotência da transcrição) só existiu porque a mudança é transcrita duas vezes.

**O que a amostra não responde:** o caso em que o chat erra e só o Code veria. No satelite-web não houve; no KCM, o único que houve (o fim de linha) desaparece quando o chat grava na árvore. Mas as duas amostras são de projetos em que o chat tem um verificador forte (tsc + ESLint; build + harness de 113 checks). **Projeto sem verificador** — os nichos não-código, ou código sem testes — não tem amostra nenhuma. E o Observatorio, que nasceu no método C, ainda não foi lido.

## Opções consideradas

**Para a `i-N73`:**
- **L1. Uma WO de kit com as cinco:** 1a e 1b consertadas pelo lado velho e entrando no `C111` como pares (o 1c como asserção de posição); a 2 com o caminho medido; a 3 com a forma de medir escrita; a 4 como item opcional na seção «Canal do chat» do CEREBRO gerado; a 5 com as duas cláusulas que faltam no molde e a frase do «antes do código» na Prova de vida. *Recomendada.*
- **L2. Só as três contradições agora**, o resto depois. Descartada: as cinco tocam as mesmas superfícies (CEREBRO, Instruções, molde, skill `wrap`), e duas WOs seguidas no mesmo lugar é o custo que a `D-138` evita.

**Para a 2 (`.claude/` no canal pasta)**, o caminho que o dado sustenta: **skill** (`.claude/skills/*`) muda por WO, como qualquer arquivo — o Code edita; **`.claude/settings.json`** o chat grava inteiro na **pasta-pai** (`AAMMDD-claude-settings.json`) e o fecho dá ao dono o comando exato de cópia — é a única coisa que nem o chat nem o Code gravam, e é por desenho.

**Para a 4 (a pasta do CDC no kit):** item **opcional e condicional** na seção «Canal do chat» do CEREBRO gerado — «se o dono mantém uma pasta de histórico das conversas (por exemplo, exportada pelo CDC), ela é só leitura…» —, sem caminho fixo e sem tocar as Instruções. O kit não sabe se o projeto usa o CDC.

**Para a `i-N71`:**
- **M1. Não mudar nada; esperar mais amostras.** Barato, mas o dado que falta (o projeto sem verificador) não aparece esperando.
- **M2. O kit documenta o método C como variante do modo Code:** uma seção curta no CEREBRO gerado com o Code ligado — «o chat grava direto na árvore e verifica; a WO vira ordem de conferência: inventário com hash, `git status` contra o inventário, validação, commit, push; o Code não reescreve» —, **com a condição de entrada escrita**: só vale quando o chat tem como rodar a verificação do projeto antes de entregar. Sem botão novo, sem custo nas Instruções.
- **M3. Piloto na casa primeiro:** o KCM passa a trabalhar no método C por dez WOs — o chat grava `src/` e `meta/` na árvore, roda build e harness numa réplica, e a WO só confere e publica. Mede o que a casa ganha (uma transcrição a menos; o fim de linha visível) e o que perde (o chat escrevendo em arquivos que o Code também escrevia: STATUS e a seção do log).
- **M4. Modo novo no gerador** (um botão). Descartada para agora: com duas amostras e nenhuma de projeto sem verificador, um botão vende uma garantia que ninguém mediu.

## Recomendação

1. **`i-N73`: L1, uma WO de kit, v1.132.0** — as cinco lacunas, com os pares novos no `C111` e a regra do `.claude/` pelo dado medido (skill por WO; `settings.json` pelo dono). Corrige também a skill `wrap` da casa (o `wc -m`).
2. **`i-N71`: M3 e depois M2.** Piloto do método C na casa por dez WOs, começando pelas de documentação; com o dado de dois projetos de natureza diferente (web com tsc/ESLint; gerador com harness), o kit ganha a variante documentada (M2), com a condição de entrada. O Observatorio entra como terceira amostra quando for lido.
3. **Pacote aos vizinhos:** de novo um só, depois da WO da `i-N73` — eles estão no merge do v1.131.0 agora.

## Riscos

- **O teto das Instruções:** a 1a encurta as Instruções (sai «se a PRÓXIMA etapa pedir config diferente»); nenhuma das cinco acrescenta texto lá. O incremento do Code segue em 540/550.
- **A regra do `settings.json` empurra um passo para o dono.** É o único arquivo do kit que ninguém da conversa grava, e é por desenho — vale dizer isso no fecho, não esconder.
- **O piloto do método C muda o dono por documento da casa:** STATUS e a seção do log, hoje do Code, passariam ao chat. É reversível (voltar é a próxima WO), mas precisa ser escrito antes de começar, ou os dois escritores brigam.
- **Duas amostras com verificador forte.** A variante do kit (M2) tem de dizer em que projeto ela não vale — sem isso, um projeto sem testes adota a forma e perde a rede.

## Ponto de decisão

1. Uma WO de kit com as cinco lacunas da `i-N73` (L1), cortando a v1.132.0?
2. `.claude/` no canal pasta: skill por WO; `settings.json` gravado pelo chat na pasta-pai e copiado pelo dono?
3. A pasta do histórico das conversas no kit como item opcional da seção «Canal do chat», só no CEREBRO?
4. Método C: piloto na casa por dez WOs (M3) antes de o kit documentar a variante (M2)?
5. Um pacote só aos vizinhos, depois da WO da `i-N73`?
