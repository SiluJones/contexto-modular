# ANÁLISE — O update focado: o pacote diz só o que mudou desde a versão do projeto

> **Status:** Decidida (2026-11-26: U3, com o teto de 400 linhas de diff; acima dele, o merge completo)
> **Data:** 261126 · **Base:** v1.167.0, HEAD `e34beea`; pacotes gerados na VM do chat a partir do `index.html` de `894be99` (v1.162.0), `1369c85` (v1.167.0) e da réplica da WO de kit (v1.168.0)
> **Vira:** a WO de kit do update focado, se aceita · **Decisão:** a registrar na WO do delta · **Origem:** `i-N114`; o pedido do dono de 26/11 por updates «mais focados»

## Problema

O update enxuto (`D-203`) cortou a varredura das revogadas e a parada no perfil, mas o merge ainda compara o pacote inteiro com o projeto, arquivo por arquivo — 23 a 31 arquivos, mais de 200 KB — mesmo quando o projeto está duas ou três versões atrás e só umas dezenas de linhas mudaram. É o merge que cansa (`261125-ANALISE-o-update-que-cansa.md`): o chat do projeto gasta o turno separando o que o kit mudou do que o projeto especializou, e o kit nunca diz qual é qual.

## Restrições / o que foi medido

**1. O pacote de pacote para pacote** `[medido em sandbox: o mesmo nicho e o mesmo perfil, gerados com o index.html de cada versão; diff -r]` — `narrative`, canal pasta, com o Code, 29 arquivos:

| De → para | Arquivos diferentes | Só o carimbo de versão | Com mudança real | Linhas de diff (sem o carimbo) |
|---|---|---|---|---|
| v1.162.0 → v1.167.0 | 8 de 29 | 2 (`sondar`, `_TEMPLATE.md`) | 6 | 82 |
| v1.162.0 → v1.168.0 (a variante do método C) | 9 de 29 | — | — | 173 (com o carimbo) |

Das 6 com mudança real, o `GUIA-DO-KIT.md` (35 linhas) é `do-kit`, trocado inteiro sem fusão: **a fusão de verdade cai para 5 arquivos e ~47 linhas mudadas**, contra 29 arquivos e 215 KB hoje. Os outros 21 arquivos saem idênticos — o merge os compara só para descobrir isso.

**2. O CHANGELOG como fonte** `[medido no meta/CHANGELOG.md]`: a linha «Para projetos instalados» existe em 7 das últimas 8 versões (desde a v1.162.0) e em nenhuma das 32 anteriores (v1.130.0 a v1.161.0). Quando existe, é prosa («troca a frase do commit no CEREBRO»), sem o texto exato.

**3. O que o projeto já carrega:** o carimbo «Gerado pelo Kit vX» no CEREBRO e nas skills, e, no manifesto, o perfil com que o pacote foi gerado (`D-200`). É o que basta para regerar o pacote na versão do projeto com o mesmo perfil.

**4. Quem consegue gerar o pacote velho:** o `index.html` de cada versão está no histórico do git (o commit da WO que cortou a versão), e o chat do KCM gera pacotes na VM dele desde a KCM 30 (`i-N107`). Para um `index.html` antigo, o shim tem de sair do `validate.js` da mesma versão: o de hoje pede funções que a v1.162.0 não tinha (medido: falhou com o shim novo e passou com o da época). A página publicada não consegue: só tem a versão atual.

## Opções consideradas

- **U1. Um mapa versão → seções tocadas no template**, escrito à mão a cada WO de kit, com um check que exija a entrada. Funciona na página. Custa manutenção para sempre, e o mapa erra calado no dia em que alguém esquece uma seção — o modo de falha do CHANGELOG, que ficou 18 versões sem ser mantido (`i-N59`).
- **U2. O CHANGELOG como fonte** (a linha «Para projetos instalados»). Não cobre antes da v1.162.0, é prosa, e o projeto que está atrás três versões lê três prosas e ainda procura o texto.
- **U3. O delta de pacote para pacote, gerado pelo chat do KCM:** um script de dev (`tools/pacote-delta.js`, fora do produto, como o `build.js`) recebe a versão do projeto, o nicho e o perfil do manifesto; tira do git o `index.html` daquela versão e o de agora; gera os dois pacotes; e escreve um `_DELTA.md` no pacote novo — por arquivo, o diff sem o carimbo, e a lista dos idênticos. O prompt do update manda fundir só os trechos do `_DELTA.md`; o merge inteiro fica para projeto sem carimbo ou anterior à primeira versão que o script sabe gerar. É exato por construção (é o próprio gerador que diz o que mudou) e não pede manutenção.
- **U4. Não mexer** e esperar o merge ficar barato com o método C: não fica — o custo é a comparação, não a gravação.

## Recomendação

**U3.** É o único que diz o texto exato sem trabalho manual. O pacote inteiro continua no zip (a fusão do CEREBRO parte do pacote, `D-203`), e o `_DELTA.md` é o mapa: «estes 5 arquivos, estes trechos; os outros 21 são iguais à sua versão do kit — não compare». O botão do pacote na página segue igual; o delta é o que o chat do KCM acrescenta quando gera o pacote para um vizinho, que é como os updates têm saído desde a KCM 30.

**Escopo da WO:** o script e a sua checagem (um check que gera o delta entre duas versões fixas e confere a contagem); a linha no prompt do update e no GUIA («se o pacote traz `_DELTA.md`, comece por ele»); o manifesto declara a versão de origem do delta. Sem mudança no que o kit gera para quem não recebe delta.

## Riscos

- **O perfil errado gera o delta errado:** se o projeto foi gerado com outro perfil, o delta mostra a diferença de perfil como mudança do kit. O script lê o perfil do manifesto do pacote anterior do projeto, quando existe, e diz qual usou; na dúvida, o merge completo.
- **Versão antiga demais:** antes da v1.151.0 (o GUIA) e das grandes mudanças de forma, o delta fica tão grande quanto o pacote. O script declara o tamanho, e acima de um teto o prompt manda o merge completo.
- **O shim muda com a versão** (medido): o script usa o `validate.js` da mesma versão para carregar o `index.html` antigo.
- **O delta não substitui a varredura das revogadas** para o projeto muito atrasado: as duas convivem, como hoje.

## Ponto de decisão

1. **U3** (o delta gerado pelo chat do KCM), U1, U2 ou U4?
2. O teto acima do qual o delta não serve e o merge é completo: por linhas (por exemplo, 400 linhas de diff) ou por versão (por exemplo, mais de 10 versões atrás)?
