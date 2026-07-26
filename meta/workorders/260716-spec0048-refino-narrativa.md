# spec0048 — Refino do nicho Narrativa: B1–B5 (nicho)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.70.1` (pós-spec0047, commit `7b762a5`, pushado), harness **18/18 · 53/53 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 54/54 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução do repo **pós-0047** em sandbox (`node build.js` +
> `node validate.js index.html`) → **verde 18/18 · 54/54**. Todas as âncoras são byte-exatas contra
> `src/niches/narrative.js` (CRLF; copie como está) e **únicas** (conferido na aplicação).
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** `meta/analises/260716-ANALISE-REFINO-NARRATIVE.md` §B. Segunda e última spec do refino
> narrativo (a spec0047 fez a base). **Teto:** nenhuma pressão — B1/B2/B3/B5 vão para as **skills** e B4 para
> os **gatilhos** (que vivem no CEREBRO, não nas Instruções); `N[narrative]` fica em **6702/6900** (folga 198),
> inalterado.

## O quê (cada item vem de um FIX real de projeto em produção)

- **B1** — 5 erros nomeados novos na skill `checagem-continuidade` (hedge de POV · familiaridade cedo demais
  · transição ausente · eco não verificado · craft sem verificação).
- **B2** — passo PRÉ «a cena já existe?» na skill `escrita-serial` (evita reescrever cena aprovada do zero).
- **B3** — bloco «processando notas de revisão do autor» na `escrita-serial` (interpretar antes de transcrever).
- **B4** — gatilho «concluída **OU revisada**» (revisão de capítulo existente dispara o mesmo gatilho triplo).
- **B5** — técnica «eco físico vs. eco comportamental» na skill `textura-mundo` (reconhecimento tardio de parentesco/identidade).

Tudo em `src/niches/narrative.js`, exceto o check e o bump de versão.

---

## Tarefa A — `src/niches/narrative.js`

### A1 (B1) — 5 erros nomeados após «Beat silencioso» (skill `checagem-continuidade`)
**Âncora:**
```javascript
          "- **Beat silencioso sem fechamento:** eco de risco anterior sem uma linha de fechamento antes do corte de cena lê como fio abandonado.",
```
**Substituir por:**
```javascript
          "- **Beat silencioso sem fechamento:** eco de risco anterior sem uma linha de fechamento antes do corte de cena lê como fio abandonado.",
          "- **Narração que hedgeia o próprio POV:** o personagem-foco sempre sabe o que ELE fez, disse ou quis — «provavelmente», «não sabia bem o que tinha dito» sobre si mesmo é falso. Incerteza só é legítima sobre a reação ou a intenção do OUTRO. (3ª limitada e 1ª pessoa.)",
          "- **Vazamento de familiaridade cedo demais:** capítulo-ponte logo após um marco (primeiro encontro, primeiro dia) que importa linguagem de rotina/intimidade («como sempre», «ele já tinha me mostrado») insustentável no tempo curto decorrido — em geral por reaproveitar frases do capítulo SEGUINTE, que cobre a relação madura. Variante temporal do capability bleeding: cheque o tempo decorrido, não só a habilidade.",
          "- **Transição ausente disfarçada de economia:** cena nova (sobretudo abrupta ou chocante) sem a frase mínima de ambientação — onde, quando, o que estava acontecendo. Prosa econômica corta adjetivo e explicação de emoção; nunca a orientação básica da cena.",
          "- **Eco não verificado:** corrigir um fato canônico num arquivo sem buscar ativamente as reafirmações do mesmo fato — parafraseadas, não citadas — nos outros arquivos. Regra-mãe: fonte única, eco citado (o fato mora num lugar mestre; os outros citam, não reparafraseiam). Ao mudar um fato, faça a busca ativa pelos ecos.",
          "- **Craft afirmado sem verificação:** apresentar uma «regra de ofício» (ritmo, estrutura, o que «funciona») como consenso estabelecido sem confrontar com a prática real. É o P13 dentro da escrita — pesquise para refutar antes de afirmar com confiança.",
```

### A2 (B2) — passo PRÉ «a cena já existe?» (skill `escrita-serial`)
**Âncora:**
```javascript
          "- Levantar em CONTINUIDADE.md o «Estado atual» do personagem e a LISTA NEGATIVA: o que ele AINDA NÃO tem (skills, informações, relações não estabelecidas).",
```
**Substituir por:**
```javascript
          "- **A cena já existe?** Antes de escrever, cheque se ela não foi escrita e aprovada em algum arquivo do Projeto — reler o capítulo anterior (âncora de voz) NÃO substitui essa busca. Reescrever do zero uma cena já aprovada é retrabalho e perda de versão.",
          "- Levantar em CONTINUIDADE.md o «Estado atual» do personagem e a LISTA NEGATIVA: o que ele AINDA NÃO tem (skills, informações, relações não estabelecidas).",
```

### A3 (B3) — bloco «processando notas de revisão» após a última técnica de cena (skill `escrita-serial`)
**Âncora:**
```javascript
          "- **POV paralelo, regra de ouro:** cada POV deve revelar algo que o outro não podia. Se o segundo POV só recobre o mesmo terreno com outras palavras, ele não se justifica — e reusar a mesma metáfora/imagem denuncia o autor único por trás dos dois.",
```
**Substituir por:**
```javascript
          "- **POV paralelo, regra de ouro:** cada POV deve revelar algo que o outro não podia. Se o segundo POV só recobre o mesmo terreno com outras palavras, ele não se justifica — e reusar a mesma metáfora/imagem denuncia o autor único por trás dos dois.",
          "",
          "### Processando notas de revisão do autor (interpretar antes de transcrever)",
          "- **Interpretar, não colar.** A nota pode vir fora de ordem cronológica ou conter contexto destinado só ao seu raciocínio, não à prosa. Decida ONDE (e SE) cada ponto entra na cena — não cole a informação no ponto exato em que foi mencionada.",
          "- **Separe o que é para a cena do que é para o seu entendimento.** Parte da nota vira texto; parte só orienta você — classifique antes de escrever.",
          "- **Nota longa = processar por inteiro.** Nota com muitos pontos numerados corre risco de ser absorvida pela metade: enumere, aplique um a um e confira ao fim que nenhum ficou de fora.",
          "- **Nunca dramatizar mecânica em momento de ação** (cruza com «vocabulário de mecânica na diegese»).",
```

### A4 (B5) — «eco físico vs. eco comportamental» (skill `textura-mundo`)
**Âncora:**
```javascript
          "- **Retecer fora de cena:** mencione de passagem um secundário/lugar/rotina numa cena onde ele NÃO está — sugere vida contínua. Ex.: entre capítulos, o restaurante ganha «uma nona mesa»; ninguém narra a reforma, mas o mundo se moveu. Barato e poderoso.",
```
**Substituir por:**
```javascript
          "- **Retecer fora de cena:** mencione de passagem um secundário/lugar/rotina numa cena onde ele NÃO está — sugere vida contínua. Ex.: entre capítulos, o restaurante ganha «uma nona mesa»; ninguém narra a reforma, mas o mundo se moveu. Barato e poderoso.",
          "- **Eco físico vs. eco comportamental (reconhecimento tardio de parentesco/identidade):** a herança se revela por dois canais — o físico (traço visível: cor de olho, um gesto herdado) e o comportamental (invisível: um tique, um valor, uma reação sob pressão). Para a revelação tardia, plante os dois antes e deixe o comportamental fazer o trabalho — mais forte e menos óbvio que o físico.",
```

### A5 (B4a) — gatilho «concluída OU revisada» (`triggersExtra`)
> `triggersExtra` renderiza no **CEREBRO** (não nas Instruções) — por isso o teto não muda e o check C10 confere no CEREBRO.
**Âncora (fragmento único):** `["Capítulo ou cena concluída", "Gatilho TRIPLO`
**Substituir por:** `["Capítulo/cena concluída OU revisada (correção de capítulo existente conta igual)", "Gatilho TRIPLO`

### A6 (B4b) — heading do gatilho triplo na skill `checagem-continuidade` (livre de teto)
**Âncora:**
```javascript
          "## Gatilho triplo — capítulo concluído (não é um passo só)",
```
**Substituir por:**
```javascript
          "## Gatilho triplo — capítulo concluído OU REVISADO (revisão de capítulo existente dispara o mesmo) (não é um passo só)",
```

---

## Tarefa B — `src/index.template.html`: bump `KIT_VERSION` (invariante i-N50)
**Âncora:** `const KIT_VERSION = "1.70.1";`
**Substituir por:** `const KIT_VERSION = "1.71.0";`

---

## Tarefa C — `validate.js`: check **C10** (trava o conteúdo novo)

**Âncora:** `check("G25 ritual cita o doc-ancora`
**Substituir por** (insira o bloco C10 ANTES da linha do G25, que permanece logo depois):
```javascript
check("C10 narrative refino spec0048: 5 erros nomeados + cena-existe + notas-revisao + eco fisico + gatilho revisada", () => {
  const narr=T.normNiche(T.NICHES.narrative);
  const sk=name=>narr.skillsPack.skills.find(s=>s.name===name);
  const cont=T.buildSkillMd(sk("checagem-continuidade"));
  ["hedgeia o próprio POV","familiaridade cedo demais","Transição ausente","Eco não verificado","Craft afirmado sem"].forEach(k=>assert(cont.includes(k),"checagem-continuidade sem: "+k));
  const serial=T.buildSkillMd(sk("escrita-serial"));
  assert(/A cena já existe\?/.test(serial),"escrita-serial sem passo 'a cena ja existe'");
  assert(/Processando notas de revisão do autor/.test(serial),"escrita-serial sem bloco de notas de revisao");
  const textura=T.buildSkillMd(sk("textura-mundo"));
  assert(/Eco físico vs\. eco comportamental/.test(textura),"textura-mundo sem eco fisico/comportamental");
  const cmd=T.buildClaudeMd(narr);
  assert(/concluída OU revisada/.test(cmd),"gatilho nao virou 'concluida OU revisada' no CEREBRO (triggersExtra vive no CEREBRO, nao nas Instrucoes)");
  return "ok";
});

check("G25 ritual cita o doc-ancora
```
> **Nota:** `T.buildSkillMd` e `narr.skillsPack.skills` já existem (SHIM + spread de `normNiche`). Não precisa mexer no SHIM.

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-081:** nicho Narrativa refinado a partir do feedback de 4 projetos reais
  (análise 260716 §B): 5 erros nomeados novos em `checagem-continuidade` (cada um de um FIX real —
  My Little Lady FIX-006/007/008, My mother DEC-007, P13), passo PRÉ «a cena já existe?» (My mother FIX-001),
  bloco «processando notas de revisão» (I will die, princípios 21-23), gatilho «concluída OU revisada»
  (My Little Lady FIX-005), eco físico vs. comportamental (My Little Lady). Check C10. Teto inalterado (skills/CEREBRO).
- **`meta/IDEAS.md`:** as entradas de «Feedback para o Kit» cobertas por B1–B5 → marcar **INCORPORADAS**
  (referência: análise 260716 §B). Itens **B6/B7/C/D/E** da análise seguem **abertos** para as próximas levas.
- **`meta/STATUS.md`:** v1.70.1 → **v1.71.0** (minor: refino de nicho + check novo); testes
  **18/18 · 54/54 · 0 erros**; `KIT_VERSION 1.71.0`; somar C10 na linha de método.
- **`meta/CHANGELOG.md`:** entrada v1.71.0 no topo.

---

## Verificação

1. `/check-spec meta/specs/260716-spec0048-refino-narrativa.md` → APLICÁVEL.
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 54/54 · 0 erros** (hook roda sozinho).
3. `grep -n "6900" validate.js` segue **vazio** (não tocamos o teto); C10 e G25 verdes.
4. **Visual:** nicho **Narrativa**, aba CEREBRO → o pacote de skills (se ligado) mostra os 5 erros novos em
   `checagem-continuidade`, o passo «a cena já existe?» e o bloco «processando notas de revisão» em
   `escrita-serial`, e o «eco físico vs. comportamental» em `textura-mundo`; a tabela de gatilhos diz
   «concluída OU revisada».
5. `git diff --stat` — `src/niches/narrative.js` + `src/index.template.html` + `validate.js` + `index.html` + 4 meta-docs + a própria spec.

---

## Commit (bloco separado, sem acento)

```bash
git add src/niches/narrative.js src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0048-refino-narrativa.md
git commit -m "feat(narrative): refino do nicho a partir de feedback de 4 projetos reais (spec0048, D-081)

- checagem-continuidade: 5 erros nomeados novos (hedge de POV, familiaridade cedo demais,
  transicao ausente, eco nao verificado, craft sem verificacao)
- escrita-serial: passo PRE 'a cena ja existe?' + bloco 'processando notas de revisao'
- textura-mundo: eco fisico vs comportamental (reconhecimento tardio de parentesco)
- gatilho 'concluida OU revisada'; check C10; KIT_VERSION 1.71.0; teto inalterado (6702)
- 18/18, 54/54, 0 erros"
git push
```
