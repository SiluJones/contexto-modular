# ANÁLISE — O modo «direto na máquina»: o que os três projetos já decidiram, e o que o kit precisa absorver

> **Status:** Em discussão
> **Data:** 261013 · **Base:** KCM v1.122.0, commit `4cc5557` (`main` = `origin/main`) · GameDataHub `7b15fd7` · satelite-web `760411f` · Sand-Land-Map `bad361f` — os quatro lidos no disco nesta conversa, com `git log`
> **Vira:** — · **Decisão:** — · **Origem:** `i-N62`, `D-156`

---

## Problema

O kit inteiro descreve um chat que só vê o que foi enviado: o ritual manda «reveja o mount», a entrega manda «nome de download desachatado», o CEREBRO fala de `_MANIFEST` e FlatDrop. Esse canal morreu (`D-156`). Enquanto o texto não muda, **todo projeto gerado nasce com Instruções que mandam fazer o que não existe**, e cada projeto descobre o canal novo sozinho — o que já aconteceu três vezes, com três respostas diferentes.

## O que foi medido

### Contagem no texto do kit (comando: `grep -r -i -o -E "<padrão>" src | wc -l`)

| Padrão | `src/` (o que o kit gera) | `meta/CEREBRO.md` | `INSTRUCOES-DO-PROJETO.md` |
|---|---|---|---|
| `mount` | 67 | 43 | 10 |
| `FlatDrop` | 21 | 14 | 3 |
| `_MANIFEST` | 8 | 6 | 2 |
| `download` | 41 | 1 | 1 |
| `pasta vinculada\|pasta conectada\|app desktop` | **0** | **0** | **0** |

### Os três projetos, lado a lado (lido nos arquivos citados, não deduzido)

| | GameDataHub | Sand-Land-Map | satelite-web |
|---|---|---|---|
| Entrou no modo | 01–02/10 | 26/09 (1º contato), formalizado 08/10 | 28/09 |
| Decisão escrita | `DEC-085` | `DEC-079` + análise `261008-ANALISE-refino-das-instrucoes.md` | nenhuma de canal; `FIX-075`, `FIX-076` tratam efeitos |
| Instruções descrevem o canal novo? | sim | sim (seção «Canal») | **não** — ainda «liste o mount a cada turno» |
| O que o chat GRAVA | WO, log, análise, doc pequeno ou de curadoria (CEREBRO, Instruções, CONTEXT) | WO, análise, sonda, arquivo novo/pequeno, suas seções do log | WO + `.patch`, SQL e scripts que o dono roda (direto na pasta definitiva) |
| O que fica com o Code | código, STATUS, DECISIONS, IDEAS, CHANGELOG, commit, push | commit, push, STATUS (sempre pelo `/wrap`) | STATUS, logs, `DEC-`/`FIX-`, commit, push |
| Git pelo chat | só leitura, `GIT_OPTIONAL_LOCKS=0` | só leitura, `GIT_OPTIONAL_LOCKS=0` | só leitura, **sem** `GIT_OPTIONAL_LOCKS` (0 ocorrências em CEREBRO, CLAUDE, Instruções e skills) |
| Como o Code confere o que o chat gravou | `sha1sum` na Edição 0 da WO | «Âncoras lidas em» + commit | tamanhos em bytes no Passo 0 |
| Validação antes de entregar a WO | o que roda (Python 3.14, Flask, smokes) fica com o Code | réplica `git archive HEAD \| tar -x`, script que recusa âncora 0 ou 2+, `npm run check`, build | `tsc` e `eslint` na área do chat (o disco do notebook estava lento) |
| Ritual por turno | os 4 arquivos + `git log`/`status` + pasta-pai | **dividido:** 4 arquivos na abertura; por turno só `git log -3`, `git status`, pasta-pai | os 4 arquivos + «liste o mount» |
| Notas e relatórios | pasta-pai; chat arquiva em `notas-arquivadas\` | pasta-pai; chat arquiva em `zz notas-arquivadas/` (`DEC-069`) | pasta-pai; chat arquiva em `zz notas-arquivadas/` (`DEC-104`) |
| FlatDrop | dormente, plano B | rotulado «canal de reserva», nada apagado | «fora de uso desde 28/09», texto mantido |
| Ferramenta além do disco | — | Chrome do dono | Chrome do notebook (mede a tela no ar) + MCP do Supabase |

### Incidentes medidos nos três

1. **`.git/index.lock` deixado por um `git status` comum** do chat (GDH, 01/10). O sandbox não conseguia apagar. Origem do `GIT_OPTIONAL_LOCKS=0`.
2. **Fim de linha:** o terminal do chat é uma VM Linux; o `git status` mostrou arquivos «modificados» que eram só `i/lf w/crlf` (Sand, 26/09). O KCM viu o mesmo ontem: `DECISIONS.md` em CRLF na árvore e LF no índice (relatório da wo0128).
3. **Instruções divergentes entre o painel e o repo — nos quatro projetos.** Sand (`FK-AZ`, 08/10), satelite (`FIX-076`, 12/10: cópia escrita fora do repo, 8 185 caracteres acima do teto), KCM (`D-156`: «18 nichos»), e o painel deste Projeto **ainda diz «18 nichos» hoje** — conferido no texto das Instruções que chega a esta conversa.
4. **Troca de conta por limite semanal** (satelite, 09–11/10): o projeto rodou num Projeto temporário em outra conta; foi assim que a cópia das Instruções saiu do repo.
5. **Arquivo sumido no arquivamento:** `satelite-web.bat` não estava mais na pasta-pai depois que o chat arquivou; nenhum comando o citou (log de 12/10, sem explicação).
6. **Segredo na pasta-pai:** o GDH tem um `cf_clearance` em `- Comando.txt`; o satelite tem `.env` na pasta-pai. Com o chat lendo a pasta-pai a cada turno, o que mora lá entra no contexto.
7. **Imagem entregue pelo chat ganha bloco C2PA** (~6 KB) na passagem para a máquina: pixels idênticos, md5 e tamanho diferentes (satelite, 11/10). Conferência por hash de imagem falha.

### O ambiente do chat, medido nesta conversa

Uma única concessão abriu quatro pastas de projetos diferentes (`Contexto`, `Game Data Hub`, `satelite-web`, `Sand Land`) como `$HOME/mnt/<nome>`. Cada comando começa do zero, tem teto de 180 s, e o que roda em segundo plano morre com a chamada (Sand o registrou primeiro). Apagar vem desligado.

### O que NÃO li

Os CEREBROs inteiros, os STATUS (70 mil a 214 mil caracteres cada) e os logs anteriores a 09/10 dos três. Li: Instruções inteiras, as decisões de canal inteiras, a análise 261008 do Sand inteira, o «Feedback para o Kit» de canal dos três, os logs de 09 a 13/10 do satelite nas linhas de canal, e todas as notas soltas das pastas-pai, menos o `.env`.

## O que os três já decidiram — e onde concordam

**Concordam em tudo o que é estrutural**, sem terem combinado:

- **As raias não mudam.** O chat ganhou disco, não ganhou commit. Nos três, o Code segue sendo quem valida, commita e relata. O GDH escreveu a razão: *«poder gravar não deve mudar as raias; o ganho real foi tirar o passo baixar e mover»* — e o `D-156` mede o mesmo do lado do KCM: o Code pegou erro do chat quatro vezes nesta série.
- **O chat grava no lugar definitivo** o que ele autora inteiro, em vez de entregar para download.
- **O chat lê o Git e nunca escreve nele.**
- **Notas e relatórios ficam na pasta-pai, e o chat arquiva movendo, nunca apagando.**
- **O texto do canal antigo não se apaga; vira reserva.**

**Divergem em três pontos**, e é aqui que o kit tem trabalho:

1. **Quais documentos são do chat.** GDH dá ao chat CEREBRO, Instruções e CONTEXT inteiros; satelite dá CONTEXT, IDEAS, GLOSSARY, HISTORY; Sand decide por WO, num banner «Canal dos meta». A regra «um escritor por doc por ciclo» sobreviveu nos três, mas cada um a imprime de um jeito.
2. **Como o Code sabe que o arquivo que vai commitar é o que o chat gravou.** `sha1sum` (GDH), bytes (satelite), commit das âncoras (Sand). Só o `sha1sum` pega edição feita por um terceiro escritor entre a gravação e o commit — é ele que **substitui mecanicamente o que o mount impunha pelo meio**.
3. **O ritual por turno.** Só o Sand o dividiu, com medição: os quatro arquivos somavam ~310 mil caracteres por turno, e a regra dura que ninguém cumpre ensina a ignorar as outras. No KCM, `STATUS.md` sozinho tem **277 183** caracteres (`wc -m`).

## A pergunta do `i-N62`, respondida pelos dados

O `i-N62` perguntava se o modo novo é (a) terceira raia, (b) variante do modo Code, ou (c) substituto do mount. **Nenhuma das três**, e foi o GDH que deu a forma certa: *«tratar chat com disco como um modo, como já trata o Code»*.

São **dois eixos independentes**:

- **Executor:** `Code = sim | não` — quem commita e valida. Já existe no kit.
- **Canal do chat:** `disco | mount` — por onde o chat lê e escreve. Novo.

O que muda com o canal não é a divisão de trabalho, é **o que impõe essa divisão**: no mount, o meio impedia o chat de escrever; no disco, só a regra impede. Daí os três pontos de divergência acima serem exatamente os três lugares onde o kit precisa trocar «o meio garante» por «uma regra conferível garante».

As quatro combinações:

| | Code = sim | Code = não |
|---|---|---|
| **disco** | os três projetos de hoje | chat grava tudo; **commit é do dono, em bloco CMD** — o chat não pode commitar (apagar desligado → `.lock` órfão) |
| **mount** | o KCM até 12/10 | o kit original |

## Opções

**A. Só trocar a palavra.** «mount» → «pasta» nas 67 ocorrências de `src/`. Barato, e errado: o ritual por turno continua pesando 300 mil caracteres, a cópia conferível por hash não entra, e o projeto sem Code ganha uma instrução para um commit que o chat não consegue dar.

**B. Eixo «Canal» no gerador, com `disco` como padrão e `mount` como reserva (recomendada).** O kit gera o bloco de canal conforme a escolha, como já faz com o Code. O texto de mount fica, carimbado como reserva — a mesma forma que o Sand adotou e o GDH repetiu. O que entra no bloco `disco` é só o que os três já validaram em campo.

**C. Reescrever o kit para disco e apagar o mount.** O canal mudou três vezes em quatro dias em setembro (`FK-AY` do Sand), as contas gratuitas do dono ainda estão no layout antigo, e quem abre a conversa no site sem pasta vinculada continua no mount. Descartada pelo mesmo motivo que o Sand descartou: apaga o que volta a valer.

## Recomendação

**Opção B**, com este conteúdo para o bloco `disco` — cada linha tem origem medida:

1. **Ritual dividido:** abertura de conversa lê os quatro arquivos; cada turno roda `git log -3 --oneline`, `git status --short` e lista a pasta-pai. Commit novo que toque um dos quatro manda relê-lo. *(Sand, DEC-079)*
2. **Git do chat:** só leitura, sempre `GIT_OPTIONAL_LOCKS=0`. *(GDH, Sand; incidente 1)*
3. **Arquivo que o chat grava** vai para o lugar definitivo, em LF, relendo do disco antes de sobrescrever; arquivo que o dono roda é gravado antes da resposta que o cita, e conferido com `ls`. *(GDH, satelite FIX-075)*
4. **Edição 0 da WO confere o `sha1sum`** de cada arquivo que o chat gravou e a WO vai commitar. *(GDH)*
5. **Tabela de dono por documento** no CEREBRO gerado, com padrão: chat → análise, WO, CONTEXT, CEREBRO, Instruções, GLOSSARY; Code → STATUS, DECISIONS, CHANGELOG, logs (seção do Code); IDEAS por WO. O projeto pode mudar a tabela; não pode deixá-la implícita. *(divergência 1)*
6. **Notas na pasta-pai**, arquivamento movendo para uma pasta dentro dela, **listando antes e depois** do movimento. *(os três; incidente 5)*
7. **Segredo não mora na pasta-pai** — `.env` e cookie ficam no repo ignorado ou fora das pastas concedidas. *(incidente 6)*
8. **Instruções:** a fonte é o arquivo do repo; WO que as muda termina pedindo ao dono que cole no painel, e o tamanho sai de `wc -m`, nunca de número gravado. *(incidente 3, quatro projetos)*
9. **Ambiente:** teto de 180 s, nada em segundo plano, fim de linha da VM não é mudança real. *(Sand, incidente 2)*

Para o **FlatDrop**: rebaixar a ferramenta de exceção — conversa no site sem pasta vinculada, e contas gratuitas. Nada se apaga; os `.bat` das pastas-pai continuam funcionando.

Para o **próprio KCM** (dogfooding): adotar os itens 1, 2, 5 e 8 nas Instruções e no CEREBRO da casa na mesma leva, porque o KCM hoje está no modo `disco` descrevendo o `mount`.

## Riscos

- **Desenhar o eixo a partir de três projetos que são todos `Code = sim`.** A célula `disco × Code = não` não tem caso rodado. Ela entra no gerador como desenho, com o rótulo de `i-N61` (nunca rodado), não como prática.
- **O canal pode mudar de novo.** É o argumento a favor de manter o mount como reserva, não contra mudar o padrão.
- **Ritual leve vira ritual nenhum.** O Sand pôs o vigia: turno que afirma estado sem `Base:` com commit falhou o ritual.
- **Tabela de dono por documento envelhece** como qualquer regra em prosa. Candidata a check do harness depois que existir.
- **Tamanho:** o bloco novo sobe as Instruções geradas; o teto precisa ser medido no gerado, nos 19 nichos, antes da WO.

## Ponto de decisão

1. **O enquadramento:** dois eixos (executor × canal) em vez de (a)/(b)/(c)? Se sim, a WO de kit nasce dele.
2. **Padrão do gerador:** `disco` por padrão e `mount` como reserva, ou o usuário escolhe sem padrão?
3. **Os nove itens do bloco `disco`:** algum sai, ou falta algum?
4. **O KCM se converte na mesma leva** (itens 1, 2, 5, 8 nas Instruções e no CEREBRO da casa), ou numa WO própria antes da de kit?
5. **Carta aos três projetos** com os achados que valem para eles agora — sem esperar o kit: `GIT_OPTIONAL_LOCKS` no satelite, `sha1sum` na Edição 0 para Sand e satelite, segredos fora da pasta-pai no GDH e no satelite?
