# ANÁLISE — O canal pasta no resto do kit: o que a wo0135 não alcançou

> **Status:** Decidida em 2026-10-19 — os quatro pontos aceitos pelo dono como recomendados; vira a wo0137
> **Data:** 261018 · **Base:** v1.128.0, commit `a92b025` (`main` = `origin/main`); satelite-web `6eee385` lido no disco
> **Vira:** `meta/workorders/261019-wo0137-canal-pasta-no-update-e-no-kit-do-code.md` · **Decisão:** `D-164` · **Origem:** pergunta do dono em 2026-10-18 («a transição para o trabalho direto na máquina já foi completamente refinada?»); `i-N70`

## Problema

A `D-157` fez do canal um eixo do kit, e a `D-162` (wo0135) deu o ramo do canal às Instruções e aos prompts A, D, E, F, travado pelo `C109`. O dono perguntou se o resto já está condizente com o modo escolhido. **Não está.** O que falta não é cosmético num ponto: o **prompt de atualização** — o primeiro texto que o chat de um vizinho lê quando recebe o pacote — é inteiro do canal mount, e o próximo passo do KCM é justamente entregar a v1.128.0 aos três vizinhos, que trabalham os três no canal pasta.

## Restrições / o que foi medido

**Sonda** `[medido em sandbox — réplica de `2213d6f`, reconstruída igual byte a byte ao `index.html` do repo]`: todo texto que o kit gera no canal pasta (`mountMode` vazio), nos 19 nichos × sem modo, Code, ASU e os dois, procurado por `mount`, `_MANIFEST`, `FlatDrop`, `flatdropignore`, «baixar», «anexe», «upload», «subir/suba/subi/sobe», «no/do/ao Projeto» e «para eu colar» (com maiúscula em «Projeto»; linhas distintas, recortadas em 90 caracteres):

| Superfície | Linhas distintas | O que é |
|---|---|---|
| Instruções | 2 | ambas legítimas: «colar no Code» (a linha `/apply-wo`) e o `.yaml` do ASU «para baixar» — fora do `C109` de propósito |
| Prompts A, D, E, F | 0 | o `C109` cobre |
| **Prompt de atualização** (`buildUpdatePrompt`) | **23** | «Subi um template-update… No mount há um `_UPDATE-MANIFEST.md`», «liste o mount», «diga quais destes o mount NÃO tem», `.flatdropignore` «o que sobe ao Projeto» — o prompt inteiro supõe o mount |
| `CLAUDE.md` gerado (Code) | 1 | «Eu leio só o que chega pelo mount; você lê o disco» — falso no canal pasta, em que o chat lê o disco |
| Molde de WO gerado | 2 | «Ele sobe sempre ao Projeto (o `.flatdropignore` ignora…)» e «estado está o mount» |
| Prompt C («do zero») | 1 | «Prontos para eu subir a um Projeto do claude.ai (ou versionar)» |
| Prompts H, J (música, narrativa) | 3 | falso positivo («a tensão sobe») |
| Manifesto do pacote | 3 | o cabeçalho «Nome no upload», o papel do `.flatdropignore` e uma revogação histórica (v1.90.0) — a última é relato e fica |
| **CEREBRO** | **47** | em 19 seções; cobertas pelo aviso da seção «Canal do chat — pasta vinculada»: «toda menção a mount, `_MANIFEST`, FlatDrop, upload e nome de download no resto deste arquivo é canal de reserva» |

**O que o aviso do CEREBRO resolve e o que não resolve.** Ele resolve a seção de transferência (9 linhas), o manifesto de achatamento e o canal do Projeto: são texto de reserva e se leem assim. Não resolve as regras que **disparam no canal pasta** e estão escritas em vocabulário do mount, porque aí a tradução é feita pelo modelo a cada turno:

- o bloco de fecho: «Arquivar / Manter — só se houver notas avulsas **no mount**» (lido ao pé da letra, no canal pasta a linha nunca apareceria; a seção do canal diz o contrário, que as notas moram na pasta-pai);
- a abertura de turno: «liste o mount, leia o cabeçalho da cópia achatada», ao lado do «Ritual em dois tempos» do canal pasta — duas aberturas de turno no mesmo arquivo;
- **a entrega sem Code:** «Cada arquivo abaixo vem INTEIRO e atualizado, pronto para você **baixar e substituir**» — contradiz as Instruções, que desde a wo0135 dizem «grave cada documento direto no lugar dele»;
- os princípios P8 e P11 (`i-N70`).

**Fato novo do vizinho** `[lido no disco, satelite-web `c4acd1e` e `DEC-178`]`: em 18/10 o satelite-web adotou o **«método C»** — o chat grava direto na árvore do repositório **tudo** o que entrega, inclusive edições em arquivo existente e STATUS, DECISIONS e log, e roda `tsc` e ESLint antes; a WO deixa de carregar âncoras e vira a **ordem de conferência e publicação** (inventário com o md5 final de cada arquivo, `git status` contra o inventário, lint, build, commit, push); o Code não reescreve — falhou, para e relata. Aposentaram o `.patch` e a pasta por WO porque os erros recentes deles aconteciam nessas cópias intermediárias. É a forma extrema do que o KCM já faz pela metade: aqui o chat aplica a WO por script numa réplica e o Code aplica de novo no repositório. **O defeito que a wo0136 acabou de corrigir — a idempotência da transcrição — só existe porque a mudança é transcrita duas vezes.** Não há dado de campo ainda: são cinco WOs no método novo, num dia.

## Opções consideradas

**A. Uma WO agora para as superfícies pequenas, antes do pacote** — prompt de atualização, `CLAUDE.md` gerado, molde de WO e prompt C ganham o ramo do canal, pela técnica da wo0135 (o texto antigo vira o ramo do mount, sem redigitar), e o `C109` passa a varrer também essas superfícies. O CEREBRO fica para uma segunda análise. *Recomendada.*

**B. Tudo de uma vez, CEREBRO incluso.** São 47 linhas em 19 seções, o `C43` da casa compara o CEREBRO, e os princípios universais mudam os 19 nichos. É o tamanho da wo0129 inteira, e atrasaria o pacote que os vizinhos esperam. Descartada para agora — a pressa é do prompt de atualização, não do CEREBRO.

**C. Entregar o pacote como está e avisar na carta que o prompt fala do mount.** Barato, mas é exatamente o padrão que a `D-157` combateu: o texto lido em toda conversa ensina o canal errado, e a carta envelhece. Descartada.

**Para o CEREBRO (segunda etapa):** a opção que a medição sugere não é ramificar as 47 linhas, e sim **só as que disparam no canal pasta** — fecho, abertura de turno, entrega sem Code, P8, P11 e o gatilho de varredura que diz «confirme que o arquivo chegou ao mount» —, deixando a seção de transferência e o achatamento inteiros como reserva, que é o que o aviso já diz deles. Absorve a `i-N70`.

**Para o método C:** não muda nada agora. Registrar como ideia com gatilho e pedir ao satelite-web o dado de campo depois de dez WOs: quantas pararam no Code, por quê, e se algum erro passou para o commit.

## Recomendação

Opção A, nesta ordem: **(1)** WO do canal pasta no prompt de atualização, `CLAUDE.md`, molde e prompt C, com o `C109` estendido — corta a **v1.129.0**; **(2)** o dono gera e entrega o pacote v1.129.0 aos três vizinhos; **(3)** segunda análise, só do CEREBRO, absorvendo a `i-N70`; **(4)** o método C entra no IDEAS como ideia nova com gatilho de dez WOs no satelite-web.

**Onde o pacote mora no canal pasta** (o prompt de atualização precisa dizer): proposta — o dono descompacta o zip **na pasta-pai do projeto**, numa pasta `AAMMDD-kcm-update-vX.Y.Z/`, fora do repositório e nunca versionada, como as cartas; o chat lista ali, compara com o repositório, e ao fechar o merge **move** a pasta para `notas-arquivadas/`. É a mesma regra que a seção do canal já dá para notas e relatórios.

## Riscos

- **O prompt de atualização é lido por um chat que ainda não tem a versão nova do kit:** ele precisa funcionar nos dois canais sem depender do CEREBRO que está chegando. O ramo tem de ser escolhido pelo modo do PACOTE (o `mountMode` de quem gerou), e o dono tem de gerar o pacote com o canal certo — vale uma linha na carta.
- **Um vizinho pode ter adaptado o próprio fluxo de update** (o satelite-web acabou de mudar o método). O prompt novo não deve prescrever o formato da WO de merge, só onde o pacote está e como compará-lo.
- **O `C109` cresce de escopo:** hoje confere 380 textos; com o prompt de atualização dos 19 nichos e o kit do Code, sobe. Vigiar o tempo do harness.

## Ponto de decisão

1. Aceita a ordem da recomendação (WO pequena e pacote antes do CEREBRO)?
2. O pacote no canal pasta mora na pasta-pai, em `AAMMDD-kcm-update-vX.Y.Z/`, e é arquivado movendo depois do merge?
3. O CEREBRO numa segunda análise, ramificando só as regras que disparam no canal pasta?
4. O método C do satelite-web vira ideia com gatilho (dez WOs, dado de campo pedido a eles), sem mudar a casa agora?
