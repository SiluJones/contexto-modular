# ANÁLISE — Teto das Instruções por configuração (Modo Code / ASU estourando os 6.900)

> **Status:** Em discussão
> **Data:** 260727 · **Base:** v1.87.0 (medido no sandbox, pós-wo0065; o repo está em v1.86.0)
> **Vira:** [a decidir] · **Decisão:** [a registrar]

## Problema

O teto de **6.900 caracteres** para as Instruções do Projeto é uma das poucas regras numéricas do KCM,
e a única que protege o documento **lido em toda mensagem**. Ele é medido no harness a cada build.

Só que ele é medido em **uma** configuração: a padrão, com **Modo Code e Modo ASU desligados**. Nenhum
check liga esses switches. Resultado: a régua existe, mas não olha para as configurações em que o
documento é maior.

O que isso produz hoje, em números reais:

- **13 dos 18 nichos** entregam Instruções **acima** do teto quando o usuário liga Code + ASU.
- O pior caso medido é `narrative` com **8.081** caracteres — **1.181 acima** do teto — e nada fica
  vermelho no harness.
- Pior ainda: o CEREBRO gerado **ensina o teto ao projeto-filho** («as Instruções não devem passar de
  ~6.900 caracteres. Ao propor uma mudança, diga o tamanho antes e depois»). Ou seja, **o kit entrega
  um documento que viola a regra que ele mesmo ensina**, e pede ao projeto que respeite um limite que
  o próprio pacote já estourou antes de o projeto escrever uma linha.

Se nada for feito: cada WO que acrescenta uma linha «só no modo Code» segue passando verde por
construção, e a distância entre a régua e a realidade continua crescendo em silêncio. **Esta WO
(wo0065) foi um exemplo:** acrescentou 93 chars ao modo Code e passou 66/66 sem que o número aparecesse
em lugar nenhum — eu só descobri porque fui medir à mão.

## Restrições / o que foi medido

Medido no sandbox com o `index.html` da v1.87.0, `buildInstr()` por nicho, teto `INSTR_TETO = 6900`.

**Tamanho das Instruções por configuração** (excerto — os 6 maiores e o menor):

| Nicho | Padrão | +Code | +ASU | +Code+ASU |
|---|---|---|---|---|
| `narrative` | 6612 | 7391 **(+491)** | 7987 **(+1087)** | **8081 (+1181)** |
| `game` | 6520 | 7299 **(+399)** | 7895 **(+995)** | **7989 (+1089)** |
| `career` | 5962 | 6741 | 7337 **(+437)** | 7431 **(+531)** |
| `rpg` | 5813 | 6592 | 7188 **(+288)** | 7282 **(+382)** |
| `client` | 5753 | 6532 | 7128 **(+228)** | 7222 **(+322)** |
| `dev` | 6117 | 6211 | 6807 | 6901 **(+1)** |
| `custom` | 3281 | 4060 | 4656 | 4750 |

- **Estouram só com +Code:** 2 (`narrative`, `game`).
- **Estouram só com +ASU:** 9.
- **Estouram com Code+ASU:** **13 de 18**.
- `skillsMode` **não** toca as Instruções (custo 0) — o ponteiro de skills vive no CEREBRO (D-052).
- `dev` é o único nicho que quase não sente o +Code (**+94** contra **+779** nos demais): as linhas de
  commit/README já entram no padrão dele, porque são liberadas também por `CHANGELOG.md` no conjunto de
  arquivos do nicho.

**De onde vem o peso** (linhas que cada modo acrescenta, medidas em `narrative`):

| Modo | Linha | Chars |
|---|---|---|
| Code | `**Commit:** …` | 233 |
| Code | `**.gitignore:** …` | 238 |
| Code | `**README:** …` | 211 |
| Code | `**WO nunca vai sozinha:** …` (wo0065) | 93 |
| ASU | `ASU: **editar** código, doc de heading estável…` | **514** |
| ASU | `**Feedback ASU:** …` | 174 |
| | **Total Code + ASU** | **≈ 1.469** |

A linha do ASU, com **514 caracteres**, é a maior linha isolada de toda a Instrução — mais que o dobro
da segunda colocada.

**O segundo furo: o «pior caso» também não é o pior caso.** O check `G16` («teto no PIOR CASO, todos os
chips/multi marcados, ≤ 7600») varia chips e campos multi, mas **não** liga os modos. Medindo o pior
caso de verdade (chips/multi **e** Code+ASU):

| | Máximo medido |
|---|---|
| G16 como está hoje | **7.098** (`narrative`) — verde, folga de 502 |
| Pior caso real (chips/multi + modos) | **8.567** (`narrative`) — **967 acima** do limite do G16 |

Seis nichos passariam de 7.600 nesse cenário (`narrative`, `game`, `career`, `design`, `dev`, `client`).

**Restrição de método:** ligar os modos no G16 **hoje** deixa o harness vermelho na hora. Qualquer opção
que mexa no check precisa vir junto (ou depois) da redução — não antes.

**Restrição de origem:** o 6.900 não é arbitrário. Veio da D-045, que subiu o teto de 6.500 para 6.900
depois de medir que o valor anterior era conservador — mas a medição foi feita, também ali, **na
configuração padrão**. O número nunca foi calibrado para os modos; ele simplesmente nunca os viu.

## Opções consideradas

**(A) Documentar e aceitar** — deixar o teto valendo só para a configuração padrão, dizendo isso em
voz alta no CEREBRO e no CONTEXT. *Custo:* zero. *Descartada como solução isolada:* não resolve o
problema real (o documento lido a cada mensagem continua 20% maior que o limite declarado) e piora o
constrangimento de ensinar ao filho uma regra que o pacote viola. Serve como **complemento** de
qualquer opção, não como resposta.

**(B) Subir o teto para cobrir o medido** (algo como 8.600). *Custo:* uma linha. *Descartada:* faz o
harness ficar verde sem que nada tenha melhorado. O teto existe para ser um freio; um freio calibrado
pelo pior caso atual não freia nada — e o próximo modo empurra o número de novo.

**(C) Teto por configuração, com orçamento explícito por modo** — manter 6.900 na configuração padrão e
travar o **incremento** de cada modo (ex.: Code ≤ +800, ASU ≤ +600), com o check medindo as quatro
combinações. *Custo:* um check novo (~72 medições, barato) + a decisão dos orçamentos. *Vantagem:* põe
a régua exatamente onde o crescimento acontece, e cada WO futura que engordar um modo bate na trava.
*Limite:* sozinha, ela **legitima** os 8.081 de hoje como orçamento aceito.

**(D) Curar as linhas dos modos** — o mesmo tratamento que os comportamentos receberam na wo0056-A/
wo0057 (versão curta na Instrução, definição completa no CEREBRO). Os alvos são óbvios: a linha do ASU
(514) e as três linhas de repositório do modo Code (682 somados, todas com prosa explicativa que
pertence ao CEREBRO). *Estimativa* (rotulada como estimativa — não medi o texto reduzido): dá para
tirar **600–800 chars** sem perder regra, o que levaria `narrative`+Code+ASU de 8.081 para a faixa de
**7.300–7.500**. *Custo:* uma WO de curadoria com risco real de perder nuance — a linha do ASU carrega
lógica condicional de quando usar patch, não é enfeite.

**(E) Escopar as linhas por nicho** — só emitir `.gitignore`/README onde faz sentido. *Descartada:*
quem liga o Modo Code quer as três; o ganho seria concentrado nos nichos que menos sofrem.

## Recomendação

**(D) seguida de (C), com (A) embutida.** Nesta ordem, e em duas WOs separadas:

1. **Curar primeiro.** Reduzir a linha do ASU e as três de repositório é o único movimento que melhora
   o produto de verdade — e é o que já foi provado no KCM (a curadoria dos 13 princípios cortou 27% sem
   perder regra). Com o número menor, a régua nova nasce quase verde em vez de nascer como dívida.
2. **Depois travar por configuração.** Check novo medindo padrão / +Code / +ASU / +Code+ASU, com o teto
   base de 6.900 preservado e um **orçamento por modo** para o excedente. O `G16` passa a incluir os
   modos no pior caso, com o limite recalibrado depois de (1) — nunca antes, ou o harness fica vermelho
   na hora.
3. **Dizer em voz alta** no CEREBRO gerado e no `CONTEXT.md`: o teto de 6.900 é da configuração padrão;
   ligar Code/ASU tem um orçamento próprio. Um número que o leitor não consegue reproduzir é pior que
   número nenhum.

Por que não só (C): travar sem curar carimba o tamanho atual como aceitável. Por que não só (D): curar
sem travar deixa o furo aberto para a próxima linha «só no modo Code» — que é exatamente como chegamos
aqui.

## Riscos

- **Curadoria que perde regra.** A linha do ASU não é prosa: ela decide *quando* o patch se aplica. Se
  o encurtamento virar ambiguidade, o assistente passa a gerar patch onde não devia. Mitigação: a
  versão longa vai inteira para o CEREBRO e o harness passa a exigir as duas pontas (padrão do `short`
  da wo0056-A, que já tem check).
- **Orçamento por modo vira teto frouxo.** Se os orçamentos forem calibrados pelo que existe hoje, é a
  opção (B) com outro nome. Devem ser definidos **depois** da curadoria, e apertados.
- **Verde falso no meio do caminho.** Entre a WO de curadoria e a do check, o furo continua aberto.
  Prazo curto entre as duas, ou uma só WO com as duas metades.
- **Nicho que já está no limite no padrão.** `narrative` (6612) e `game` (6520) têm menos de 400 de
  folga na configuração padrão. Qualquer linha nova universal — mesmo fora dos modos — some com essa
  folga em duas WOs. Isso é um problema à parte, e a curadoria dos modos **não** o resolve.

## Ponto de decisão

1. **Confirma a ordem curar → travar**, em duas WOs, ou prefere uma WO só com as duas metades?
2. **Qual orçamento por modo** parece certo: apertado (Code +500 / ASU +400, exigindo curadoria mais
   agressiva) ou folgado (Code +800 / ASU +600, praticamente o tamanho atual)? A resposta muda o quanto
   a WO de curadoria precisa cortar.
3. **O `G16` deve passar a incluir os modos** no pior caso? Se sim, com que limite — e sabendo que ele
   só pode entrar depois da curadoria.
4. Vale a pena, na mesma leva, **medir e publicar a folga da configuração padrão** de `narrative` e
   `game` no `STATUS.md` a cada versão, já que são os dois que sempre chegam primeiro no teto?
