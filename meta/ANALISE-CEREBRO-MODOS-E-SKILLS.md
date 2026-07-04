# Análise técnica — inchaço do CEREBRO, arquitetura de modos e refino das skills

> Documento de curadoria (raia Chat). Responde a três questões técnicas levantadas pelo usuário,
> com base em pesquisa (doc oficial Agent Skills, best practices de CLAUDE.md, pesquisa UX de toggles)
> e na comparação entre as skills que o KCM gera e as 4 skills provadas em campo (re-subidas).
> Data: 2026-07-03. Base do kit: v1.49.0 (pós-spec0022).

---

## QUESTÃO 1 — O apêndice de skills/code no CEREBRO é inchaço? É a forma eficiente?

### O diagnóstico é correto, e agora é mensurável
Medi o impacto real: com o toggle de skills LIGADO, o apêndice adiciona **10.055 caracteres ao
CEREBRO.md — um aumento de 29%** (de 34.858 para 44.913 chars). O Modo Code adiciona outro bloco
comparável quando ligado. **Sua intuição está tecnicamente certa: isso é inchaço**, e a pesquisa
converge com força nesse ponto.

### O que a prática profissional diz (e por que importa aqui)
O CEREBRO.md do KCM é o análogo direto do CLAUDE.md do Claude Code: um arquivo lido no início e
que **persiste no contexto** enquanto for consultado. A literatura de 2026 é unânime sobre o custo:

1. **Progressive disclosure é a arquitetura correta — e ela diz o OPOSTO do que estamos fazendo.**
   O princípio inteiro das Agent Skills é: o corpo da skill **NÃO** entra no contexto até o gatilho
   disparar; só o par `name`+`description` (30–100 tokens) fica pré-carregado. A doc oficial:
   *"reference files don't consume context tokens until actually read"*. Um caso documentado
   converteu regras procedurais em skills on-demand e **cortou 41% do overhead sempre-carregado**;
   outro recuperou ~15.000 tokens/sessão (82% de melhora) tirando conteúdo do CLAUDE.md upfront.

2. **O que estamos fazendo é o anti-padrão nomeado.** Ao emitir o SKILL.md INTEIRO como texto
   dentro do CEREBRO, transformamos progressive disclosure em eager loading — exatamente o
   "CLAUDE.md bloat" que a pesquisa manda evitar. O corpo das 4 skills fica no contexto do
   assistente ANTES de qualquer pedido de prosa, derrotando o mecanismo que justifica skills.

3. **O efeito "lost in the middle" agrava.** Modelos atendem pior ao meio de contextos longos
   (queda de acurácia >30% em casos medidos). Um CEREBRO 29% maior não só custa token — **enterra
   as regras que importam** no meio do arquivo. As Instruções por-turno do KCM já operam sob teto
   de caracteres justamente por isso; o CEREBRO merece a mesma disciplina.

### PORÉM — há uma distinção crucial que salva parte do design atual

O apêndice não é inútil; ele é **um instalador, não um runtime**. A diferença muda o veredito:

- **O CEREBRO NÃO é o SKILL.md.** No fluxo do KCM, o apêndice é um STARTER que o usuário copia
  para `.claude/skills/<nome>/SKILL.md` (ou sobe em claude.ai settings) e **depois apaga do CEREBRO**
  (o próprio texto gerado já diz isso: "pode apagar este apêndice"). Se o usuário seguir a instrução,
  o inchaço é TRANSITÓRIO — existe só na primeira sessão de setup, não em todo turno para sempre.
- **O mesmo vale para o Modo Code:** o apêndice do `CLAUDE.md`/`apply`/`wrap` é material de arranque
  ("depois de criar, pode apagar este apêndice"). É andaime, não parede.

**O problema real, então, não é a existência do apêndice — é que ele é FRÁGIL:** depende do usuário
lembrar de apagá-lo, e enquanto não apaga, paga o custo em todo turno. Um andaime que o usuário
esquece de remover vira dívida permanente. E há um segundo problema: **entregar o SKILL.md como
texto dentro de outro .md é desajeitado** — o usuário tem que recortar 4 blocos, criar 4 pastas,
colar 4 arquivos. Fricção que convida ao erro.

### Recomendação (a forma eficiente e inteligente)
Três níveis, do mais barato ao ideal:

**Nível 1 — mínimo, imediato (barato):** deixar explícito e IMPOSSÍVEL de ignorar que o apêndice
é descartável. Hoje a instrução de apagar está no fim do bloco; deveria estar no TOPO, em destaque,
com um marcador visual claro (ex.: `<!-- INSTALADOR: apague este bloco inteiro após instalar as skills -->`).
Isso não resolve a fricção de instalação, mas transforma inchaço-permanente-por-esquecimento em
inchaço-transitório-consciente. É uma spec doc-only trivial.

**Nível 2 — melhor (a forma que a arquitetura pede):** **não emitir os SKILL.md no CEREBRO.**
Em vez disso, gerar os arquivos de skill como **downloads separados** — do mesmo jeito que o kit
já entrega STATUS.md, IDEAS.md etc. como arquivos próprios. A aba de saída ganharia, com o toggle
ligado, botões "baixar escrita-serial/SKILL.md" etc. (ou um .zip do pacote `.claude/skills/`).
O CEREBRO ganha só um parágrafo CURTO: "Este projeto usa 4 skills de escrita (ver pacote baixado);
consulte-as nos gatilhos X/Y/Z." Isso é progressive disclosure de verdade: o CEREBRO aponta,
não inlina. Zero inchaço permanente, zero fricção de recorte. **É a recomendação principal.**

**Nível 3 — ideal de longo prazo (fora do escopo agora):** o KCM já tem o conceito de "saída"
como arquivo. Um "modo pacote" que empacota tudo (CEREBRO + contextFiles + skills + .claude/)
num .zip pronto para descompactar na raiz do projeto seria o passo natural — mas é trabalho de
casco maior, candidato a uma fase própria.

> **Veredito Q1:** o inchaço é real e mensurável (+29%), e a pesquisa condena inlinar corpo de
> skill em arquivo sempre-carregado. MAS o design atual é defensável como *instalador transitório* —
> o pecado é ele ser fácil de esquecer. O caminho certo é o **Nível 2**: emitir as skills como
> downloads separados e deixar no CEREBRO só o ponteiro. Mesma lógica beneficiaria o Modo Code.

---

## QUESTÃO 2 — Os switches na barra superior viraram um monstro

### O diagnóstico é correto e a pesquisa UX é dura com o padrão atual
Hoje o topbar acumula 3 toggles universais (grupo, ASU, Code) + agora 1 condicional (skills no
narrative). O usuário relata o sintoma clássico: **"às vezes aperto um modo querendo outro porque
ocupam quase o mesmo espaço"**. A pesquisa nomeia exatamente esse problema:

1. **Toggle é para binário imediato e INDEPENDENTE — não para configurar um "modo" com efeitos
   sistêmicos.** A literatura (Cieden, Justinmind, NN/g) é explícita: toggle dentro de formulário
   introduz ambiguidade de modelo mental ("isso aplica agora ou quando eu gerar?") e é fonte
   conhecida de erro. Os "modos" do KCM não são preferências binárias tipo dark-mode; são
   **decisões de configuração do projeto** que mudam o que sai. Isso é outro tipo de controle.

2. **Alvos de toque próximos + rótulos densos = erro de seleção.** A pesquisa pede ≥44px de alvo,
   8–12px de padding, e agrupamento com espaçamento por categoria. Quatro toggles lado a lado com
   rótulos longos ("Desenvolver no Claude Code?") violam isso — daí o clique errado.

3. **Cognitive load: agrupar por categoria com heading.** NN/g e Justinmind convergem: controles
   relacionados devem viver sob um heading que os contextualiza, com progressive disclosure para
   o que não é sempre relevante. Quatro switches soltos numa barra não têm essa estrutura.

### Recomendação para os 3 universais (precisa de fase própria — não decidir no susto)
Você está certo em querer pesquisar isso a fundo (UX + web design + psicológico) antes de mexer.
Registro as direções que a pesquisa sustenta, para uma fase futura:

- **Reenquadrar "modos" como o que são: configuração, não toggles soltos.** Um painel "Modo de
  trabalho" recolhível (progressive disclosure), aberto sob demanda, com os controles agrupados e
  explicados — em vez de 3–4 switches sempre visíveis competindo por atenção. Reduz load e clique-errado.
- **Considerar segmented/checklist com rótulo externo claro** em vez de toggles, já que não são
  binários-imediatos de preferência. (A pesquisa distingue: toggle = on/off instantâneo; escolha
  de configuração = checkbox/segmented com confirmação implícita ao gerar.)
- **Feedback de estado explícito:** cada modo ligado deveria ter um selo visível no output
  ("ASU: ligado" já existe como callout — bom padrão a estender aos outros).

Isso é **i-N36-adjacente** (ou item novo). Não escrevo essa spec agora; ela precisa da pesquisa
que você mesmo pediu, e mexe no casco em ponto sensível (topbar é compartilhado pelos 17 nichos).

### Para o modo skills (narrativa) — a decisão que dá para tomar JÁ
Você sugeriu tirar o toggle de skills do topbar e pô-lo "em outro lugar, talvez a barra lateral".
**Concordo, e a arquitetura ajuda:** o toggle de skills já é NICHE-SCOPED (só aparece no narrative),
então ele nem pertence conceitualmente à fileira dos 3 universais. Opções, da mais simples à melhor:

- **(a) Movê-lo para dentro do painel do nicho** — junto do builder "A obra" (onde já vivem Gênero,
  Formato, Colaboração). Faz sentido semântico: "skills de escrita" é uma escolha DA OBRA, não um
  modo global. Fica ao lado de "Colaboração", agrupado sob heading, longe dos toggles universais.
  Elimina o risco de clique-errado (não divide espaço com os 3 universais) e não exige repensar
  os universais agora. **É a recomendação.**
- **(b) Barra lateral** — possível, mas a barra lateral hoje é navegação (Início/Instruções/
  Prompts/Templates/Tokens/HUB); enfiar um controle de configuração ali quebra a função dela.
  Menos coerente que (a).

> **Veredito Q2:** o monstro dos 3 universais é real, mas a reforma pede a fase de pesquisa que
> você já previu — não mexer no susto. Para o modo skills, dá para agir já: **movê-lo do topbar
> para o builder "A obra"**, ao lado de "Colaboração", onde é semanticamente uma escolha da obra
> e não compete espaço com os universais. Spec pequena, ganho imediato de clareza.

---

## QUESTÃO 3 — O que faltou aproveitar das 4 skills de campo (refino)

Comparei o que o KCM gera (skillsPack) com as 4 skills reais re-subidas. **O esqueleto está certo:
os 4 nomes, os gatilhos, os 6 erros nomeados, o sanduíche, o princípio "a partir do estado" — tudo
que importa como PROTOCOLO foi capturado.** Mas as skills de campo (sobretudo a serial-fiction do
Novel 2, com 160 linhas contra as ~20 que gerei) têm técnicas concretas que ficaram de fora. As
mais valiosas, para incorporar no `body` das skills geradas:

### Faltou em `escrita-serial` (a mais sub-aproveitada)
1. **Discurso direto vs. reportado + teste de imersão.** Regra de campo: informação de mundo entra
   como FALA do personagem de autoridade, nunca resumida pelo narrador ("O Intendente explicou que…"
   ❌ vs. "— Cada um receberá pontos…" ✅). Com o teste: "se remover o diálogo e nada se perde além
   do que o narrador já resumiu, o diálogo é redundante; e vice-versa." **Alto valor, universal.**
2. **Ratio mínimo de diálogo (~40%)** em cenas com autoridade/grupo — verificar antes de entregar.
   (Número é calibrável por obra; o princípio "cena de interação precisa de diálogo real" é geral.)
3. **Flag de uma frase antes de escrever** (não um esqueleto inteiro): se a cena toca mecânica nova,
   contradiz cânone, é POV paralelo, ou mexe com questão aberta do STATUS → *"Antes de escrever: [a
   questão]. Prossigo com [X] ou prefere [Y]?"* Isso REFINA a "duas fases" que gerei — a fase 1 não
   precisa ser sempre esqueleto completo; para cena simples, uma frase de flag basta. Bom para não
   pesar o trivial (encaixa no P10 do próprio KCM).
4. **POV paralelo — regra de ouro explícita:** "cada POV deve revelar algo que o outro não podia."
   Eu citei "metáfora repetida em POV paralelo" como erro; faltou a regra POSITIVA que a evita.

### Faltou em `textura-mundo`
5. **Técnica "retecer fora de cena":** mencionar de passagem nome/lugar/rotina de secundário numa
   cena onde ele NÃO está — sugere vida contínua. (Ex. de campo: o restaurante ganhando "uma nona
   mesa" entre capítulos, sem cena dedicada.) Concreta e ensinável.
6. **"Revelar por atrito, não por palestra":** dois secundários discordando sobre algo pequeno na
   frente do protagonista revela cultura sem infodump. **Antídoto direto ao maior risco do nicho.**
7. **Checklist "pelo menos 1 dos 3 por capítulo"** (um secundário com vida própria / um lugar que
   existe sozinho / um evento nos bastidores). Torna a diretriz auditável, não só aspiracional.

### Faltou em `voz-calibragem`
8. **Técnica de substituição passo a passo** (não só "evite drift cognitivo"): para cada verbo
   mental marcado, perguntar "que gesto físico observável comunica a mesma conclusão?" e trocar —
   com o par antes/depois. E o **"teste do ela-não-come"**: reler 2–3 parágrafos do personagem mais
   analítico; se nada é sensorial/físico, falta corpo. Eu nomeei o erro; a skill de campo dá a CURA.
9. **Anti-correção:** não trocar "inventariou" por sinônimo mental ("avaliou"); não eliminar TODA
   cognição — o alvo é PROPORÇÃO, não extinção do traço. Evita que a correção vire outro tique.

### Faltou em `checagem-continuidade`
10. **Pergunta-oráculo de verificação:** "se eu apagasse meu conhecimento do arco planejado e lesse
    só os capítulos anteriores, este personagem teria acesso a isso agora?" É o teste operacional
    que transforma o princípio "a partir do estado" em ação concreta.

### O que fiz MELHOR que o campo (manter)
- **Generalização:** as skills de campo têm "Aplicação neste projeto" fundida no corpo (nomes reais:
  Ren, Do-hyeon, Espaço Branco). Eu separei corpo genérico de stub em branco — que é o que permite
  o KIT gerar. Isso está certo; ao incorporar as técnicas acima, manter a separação.
- **Cobertura de erros nomeados:** consolidei 6 erros num lugar (a de campo espalha por skills).

> **Veredito Q3:** o protocolo foi capturado; faltou a CAMADA DE TÉCNICA CONCRETA (o "como fazer",
> com exemplos antes/depois e testes operacionais) que é o que torna uma skill acionável em vez de
> aspiracional. As 10 adições acima são o refino — todas cabem no `body` das 4 skills, sem mudar a
> arquitetura. Isso VAI aumentar o tamanho do apêndice, o que reforça a recomendação da Q1 (Nível 2:
> emitir como download separado, não inlinar no CEREBRO) ANTES de engordar as skills.

---

## Ordem recomendada das próximas specs
1. **spec0023 — Q1 Nível 2:** skills viram downloads separados; CEREBRO fica só com o ponteiro
   curto. (Destrava tudo: sem isso, engordar as skills piora o inchaço.)
2. **spec0024 — Q2 modo skills:** mover o toggle do topbar para o builder "A obra".
   (Pode ir junto da 0023 se tocarem os mesmos pontos do casco — avaliar âncoras.)
3. **spec0025 — Q3 refino:** incorporar as 10 técnicas de campo no `body` das 4 skills.
4. **Fase futura (i-N36 + item novo):** reforma dos 3 modos universais — só depois da pesquisa
   UX/psicológica dedicada que o usuário pediu. Não fazer no susto.
