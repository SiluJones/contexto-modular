# Spec — Refino das 4 skills de escrita: 10 técnicas de campo (Q3, D-054)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca SO `src/niches/narrative.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260704-spec0025-refino-skills-tecnicas.md`**
> Config: **Sonnet + esforco Alto** basta (diff exato ja validado; 4 substituicoes por ancora + build + harness).
> **Diff ja validado no chat:** build OK, harness **17/17, 33/33, 0 erros**, `N[narrative]` intacto em **6688/6900**. As 10 tecnicas confirmadas presentes nos SKILL.md gerados (via `buildSkillMd`): escrita-serial 4/4, voz-calibragem 3/3, textura-mundo 3/3, checagem-continuidade 1/1. **CEREBRO NAO incha** — as tecnicas engordam os SKILL.md do zip, o ponteiro no CEREBRO e fixo (36.382 chars, igual). Template e validate NAO sao tocados.
> Base: `meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md` (Q3) — comparacao com as 4 skills provadas em campo (Novel 2/3). Nao e preciso re-subir os feedbacks; as 10 tecnicas ja estao na analise.

## Contexto
A spec0022 capturou o PROTOCOLO das skills (nomes, gatilhos, sanduiche, 6 erros nomeados), mas as skills de campo tinham TECNICA CONCRETA (o «como fazer», com exemplos antes/depois e testes operacionais) que ficou de fora — a serial-fiction de campo tem 160 linhas contra ~20 geradas. Esta spec incorpora as 10 tecnicas de maior valor nos `body` das 4 skills. Como as skills agora saem no `skills.zip` (spec0023), enriquece-las NAO tem custo de contexto por-turno — o ponteiro no CEREBRO nao muda.

**NAO fazer:** nao tocar `src/index.template.html` nem `validate.js`; nao mexer em `applyStub`, `description`, `gatilho` nem nos contextFiles; so ampliar os quatro `body`. Manter a separacao corpo-generico vs. «Aplicacao neste projeto» (o stub fica em branco).

## Tarefa A — `escrita-serial`: técnicas de cena (discurso direto, teste de imersão, ratio, POV paralelo, flag de uma frase)

**Ancora:**
```
          "## 2. DURANTE (escrevendo)",
          "- Capítulo padrão 900–1.400 palavras. Mais longo só se a cena exigir organicamente — e aí gerar POR CENA, re-ancorando a voz entre cenas. A densidade de erro cresce com o tamanho da saída.",
          "- A unidade de geração é a CENA; o capítulo é montagem.",
          "",
```
**Substituir por:**
```
          "## 2. DURANTE (escrevendo)",
          "- Capítulo padrão 900–1.400 palavras. Mais longo só se a cena exigir organicamente — e aí gerar POR CENA, re-ancorando a voz entre cenas. A densidade de erro cresce com o tamanho da saída.",
          "- A unidade de geração é a CENA; o capítulo é montagem.",
          "",
          "### Técnicas de cena (o «como», não só o «o quê»)",
          "- **Flag de uma frase, não esqueleto sempre:** para cena simples, a fase 1 pode ser só uma linha — «Antes de escrever: [a questão]. Prossigo com [X] ou prefere [Y]?». O esqueleto completo (beats + variações) fica para cena que toca mecânica nova, contradiz cânone, é POV paralelo ou mexe com questão aberta do STATUS. Não pesar o trivial.",
          "- **Informação de mundo entra como FALA, não resumo do narrador.** «O Intendente explicou que cada um receberia pontos» ❌ → «— Cada um de vocês recebe cem pontos. Gastem com sabedoria. — O Intendente não sorriu.» ✅. Discurso direto do personagem de autoridade, não exposição reportada.",
          "- **Teste de imersão:** se remover o diálogo e nada se perde além do que o narrador já resumiria, o diálogo é redundante — corte ou reescreva. E vice-versa: se o narrador resume o que deveria ser vivido em cena, converta em diálogo/ação.",
          "- **Ratio de diálogo:** cena com interação/autoridade/grupo pede diálogo real, não parágrafos de narração com uma fala solta. Mire ~40% de diálogo nessas cenas (calibrável por obra) — abaixo disso, provavelmente virou palestra.",
          "- **POV paralelo, regra de ouro:** cada POV deve revelar algo que o outro não podia. Se o segundo POV só recobre o mesmo terreno com outras palavras, ele não se justifica — e reusar a mesma metáfora/imagem denuncia o autor único por trás dos dois.",
          "",
```

## Tarefa B — `checagem-continuidade`: pergunta-oráculo

**Ancora:**
```
          "## Lista de invariantes (a memória viva)",
          "Vive no topo de CONTINUIDADE.md e SÓ CRESCE. Todo erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. Toda prosa nova é relida contra ela.",
          "",
```
**Substituir por:**
```
          "## Lista de invariantes (a memória viva)",
          "Vive no topo de CONTINUIDADE.md e SÓ CRESCE. Todo erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. Toda prosa nova é relida contra ela.",
          "",
          "## Pergunta-oráculo (o teste operacional do «a partir do estado»)",
          "Antes de dar a um personagem uma capacidade, informação ou reação: «se eu apagasse meu conhecimento do arco planejado e lesse SÓ os capítulos anteriores, este personagem teria acesso a isso agora?» Se a resposta depende de algo que só o autor/plano sabe, é capability bleeding — recue ao que a página já estabeleceu.",
```

## Tarefa C — `voz-calibragem`: cura do drift cognitivo + anti-correção

**Ancora:**
```
          "- **Espelho de erros:** todo erro de voz documentado (FIX / invariante) ganha uma linha em VOZ.md → «O que EVITAR». As duas listas dessincronizam se só uma for atualizada.",
          "- Subjetivo vs. mecânico: sobre «a cena merece o pagamento emocional?», ofereça observação de leitor, não veredito — a decisão volta ao autor."
```
**Substituir por:**
```
          "- **Espelho de erros:** todo erro de voz documentado (FIX / invariante) ganha uma linha em VOZ.md → «O que EVITAR». As duas listas dessincronizam se só uma for atualizada.",
          "- **Cura do drift cognitivo (não só o diagnóstico):** para cada verbo mental marcado («inventariou», «calculou», «arquivou», «avaliou»), pergunte «que gesto físico observável comunica a mesma conclusão?» e troque. «Ela inventariou a sala» → «Os olhos dela correram os cantos, contando saídas.» O leitor deduz o processo pela ação.",
          "- **Teste do «ela-não-come»:** releia 2–3 parágrafos do personagem mais analítico; se nada ali é sensorial ou físico (só pensamento e dedução), falta corpo — o personagem virou uma câmera que analisa. Ancore-o num gesto, num desconforto, numa reação do corpo.",
          "- **Anti-correção (não vá longe demais):** não troque o verbo mental por um sinônimo mental («avaliou» por «ponderou») — isso é o mesmo tique com outra roupa. E não elimine TODA cognição: o alvo é PROPORÇÃO, não extinção do traço. Um personagem analítico ainda pensa; ele só não narra o próprio fluxograma.",
          "- Subjetivo vs. mecânico: sobre «a cena merece o pagamento emocional?», ofereça observação de leitor, não veredito — a decisão volta ao autor."
```

## Tarefa D — `textura-mundo`: retecer, revelar por atrito, checklist 1-de-3

**Ancora:**
```
          "- **Equação de mecânica:** para sistema com mais de uma variável interagindo, amarre a EQUAÇÃO proativamente (GLOSSARY/CONTINUIDADE) — definir cada termo isolado não previne a confusão, que aparece ao montar o conjunto.",
          "- **Personagem analítico precisa de corpo:** tell físico e ação, não só processo mental — senão «não come, só analisa»."
```
**Substituir por:**
```
          "- **Equação de mecânica:** para sistema com mais de uma variável interagindo, amarre a EQUAÇÃO proativamente (GLOSSARY/CONTINUIDADE) — definir cada termo isolado não previne a confusão, que aparece ao montar o conjunto.",
          "- **Personagem analítico precisa de corpo:** tell físico e ação, não só processo mental — senão «não come, só analisa».",
          "",
          "## Fazer o mundo respirar (técnicas de textura)",
          "- **Retecer fora de cena:** mencione de passagem um secundário/lugar/rotina numa cena onde ele NÃO está — sugere vida contínua. Ex.: entre capítulos, o restaurante ganha «uma nona mesa»; ninguém narra a reforma, mas o mundo se moveu. Barato e poderoso.",
          "- **Revelar por atrito, não por palestra:** dois secundários discordando sobre algo pequeno na frente do protagonista ensinam a cultura/regra sem infodump. O leitor aprende vendo a fricção, não ouvindo a explicação. Antídoto direto ao maior risco do nicho (exposição empilhada).",
          "- **Checklist «pelo menos 1 dos 3 por capítulo»** (torna a textura auditável, não só aspiracional): (a) um secundário com vida própria demonstrada; (b) um lugar que existe independente da trama; (c) um evento nos bastidores que o protagonista não causou. Um por capítulo já mantém o mundo vivo."
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 33/33, 0 erros.** `N[narrative]` segue em `instr 6688` e o CEREBRO nao cresce (as tecnicas vao pros SKILL.md do zip, nao pro ponteiro). Depois, ABRA o index.html, nicho **Narrativa & Ficção** (skills ligadas por padrao), baixe `skills.zip` e confira: `escrita-serial/SKILL.md` tem «Técnicas de cena» (teste de imersão, ratio de diálogo, flag de uma frase, POV regra de ouro); `voz-calibragem/SKILL.md` tem a cura do drift + «ela-não-come» + anti-correção; `textura-mundo/SKILL.md` tem «Fazer o mundo respirar» (retecer, revelar por atrito, checklist 1-de-3); `checagem-continuidade/SKILL.md` tem a «Pergunta-oráculo».

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-054: «Refino das 4 skills de escrita (Q3): incorporadas 10 tecnicas concretas das skills provadas em campo (Novel 2/3) — discurso direto vs. reportado + teste de imersao, ratio de dialogo ~40%, flag de uma frase, regra de ouro do POV paralelo (escrita-serial); cura do drift cognitivo (verbo mental->gesto fisico) + teste ela-nao-come + anti-correcao (voz-calibragem); retecer fora de cena, revelar por atrito, checklist 1-de-3 (textura-mundo); pergunta-oraculo (checagem-continuidade). Sem custo de contexto: as tecnicas vao pros SKILL.md do zip (spec0023), o ponteiro no CEREBRO nao muda. Base: meta/ANALISE-CEREBRO-MODOS-E-SKILLS.md.»
- **`meta/CHANGELOG.md`** — v1.52.0 no topo.
- **`meta/IDEAS.md`** — nota de que a Q3 (refino das skills) foi aplicada; encerra o ciclo do refino narrativo (fases A/B + Q1/Q2/Q3). Restam: spec0026 (Modo Code espelha D-052) e a fase futura (reforma dos 3 universais + feedback ambiental, junto de i-N36).
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI a propria spec
```
git add src/niches/narrative.js index.html meta/specs/260704-spec0025-refino-skills-tecnicas.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: refino das 4 skills de escrita com 10 tecnicas de campo (D-054)" -m "discurso direto/teste de imersao/ratio/POV; cura do drift cognitivo; retecer/atrito/checklist; pergunta-oraculo; sem custo de contexto (vao pro zip); 17/17 33/33 0 erros"
git push
```
