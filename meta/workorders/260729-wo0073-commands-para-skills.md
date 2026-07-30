# wo0073 — O KCM migra de `.claude/commands/` para `.claude/skills/` (dogfood do que o kit já cobra)

> **Tipo:** WO de repositório (não toca `src/` nem `validate.js`). **Canal dos meta neste ciclo = CODE.**
> **Raia:** Code. **Config:** modelo **Sonnet 5**, esforço **Médio**, terminal **PowerShell**.
> **Pré-requisito:** `v1.94.0` (pós-wo0072, commit `f002812`), harness **18/18 · 73/73 · 0 erros`**,
> árvore limpa.
> **Resultado esperado:** mesma versão `1.94.0` e mesmo harness **73/73** — **sem bump**: o produto não
> muda, só a casa. Rodar o harness aqui é conferência, não requisito.
>
> **Idempotência:** se um `.claude/skills/<nome>/SKILL.md` já existir, **PULE** a criação e reporte.
>
> **Não precisa de `node build.js`** — nada em `src/` é tocado.

---

## 1. Por quê

Desde a wo0068 o kit **marca `.claude/commands/` como formato legado** no protocolo de update e manda
os projetos migrarem para `.claude/skills/<nome>/SKILL.md`. O KCM continuou nos `commands/`. É o
«faça o que mando, não faça o que faço» — e o pior tipo, porque é o kit desobedecendo a regra que ele
mesmo cobra dos filhos no momento em que eles atualizam.

**A invocação não muda.** As skills nascem com `disable-model-invocation: true`, que é o que faz uma
skill se comportar como comando explícito: `/apply-wo <arquivo>` continua sendo a forma de chamar, e
o modelo não a dispara por conta própria. É o mesmo formato que o kit já emite para os projetos-filhos
desde a wo0065.

**O que muda de verdade:** os três arquivos ganham `name` e `description` no front-matter. O
`description` é o que faz a skill ser encontrada — e o `check-wo`, que hoje é o único com front-matter,
já provou que funciona.

---

## Edição 1 — criar `.claude/skills/apply-wo/SKILL.md`

Arquivo **novo**. Conteúdo (é o `commands/apply-wo.md` atual, com front-matter e a correção de fim de
linha da wo0072):

```markdown
---
name: apply-wo
description: Aplica uma WO de meta/workorders/ ao repo do KCM — localiza cada âncora exatamente, substitui, valida e para se não achar. Use quando o usuário pedir /apply-wo ou mandar aplicar uma WO nomeada.
disable-model-invocation: true
---

Leia o arquivo de WO em `meta/workorders/$ARGUMENTS` e execute-o. Se o nome não vier na invocação,
PEÇA — não escolha uma WO por conta própria.

Regras de aplicação:
- Localize cada âncora EXATAMENTE. Se não achar uma, PARE e reporte — nunca chute um lugar próximo.
- **Fim de linha por arquivo:** `src/index.template.html` é **CRLF**; `validate.js`, `build.js` e os
  `src/niches/*.js` são **LF**. Âncora de mais de uma linha colada com o separador errado não casa —
  na dúvida, edite linha a linha.
- Antes de inserir, confira a **idempotência**: procure a frase-chave do texto NOVO. Se já existir,
  PULE o item e diga no relatório — não duplique.
- Não toque em nada fora das edições nomeadas na WO.
- WO só de doc (`meta/`) NÃO precisa de build. WO que toca `src/` (template ou nicho) precisa de
  `node build.js` e depois `node validate.js index.html` — regra de ouro **18/18 nichos, 0 erros**
  (o total de checagens sobe a cada check novo; o que não muda é 18/18 e 0 erros).
- Nunca edite o `index.html` direto: ele é **gerado**. Edite `src/` e rode o build.
- Ao terminar, rode `git diff` e confira que bate com a forma esperada (aditivo + as substituições
  previstas; sem remoção acidental) ANTES de commitar.
- Faça o bloco «Ao terminar»/«Registros» da WO (append em STATUS/DECISIONS) e o commit indicado
  (mensagem SEM acento).
- Feche com o **relatório de trabalho** — o que fez, achados e desvios do texto literal da WO,
  arquivos tocados, resultado de build/validate, o commit. **Não** use o bloco de fecho do chat:
  aquele é da raia de planejamento.
```

---

## Edição 2 — criar `.claude/skills/check-wo/SKILL.md`

Arquivo **novo**. Conteúdo: o `commands/check-wo.md` atual, com `name` e
`disable-model-invocation` acrescentados ao front-matter que ele já tem, e o fim de linha corrigido:

```markdown
---
name: check-wo
description: Confere uma WO contra o repo ANTES de aplicar — portao read-only que nao edita nada. Use quando o usuario pedir /check-wo ou quiser saber se uma WO ainda e aplicavel.
disable-model-invocation: true
---

Voce vai CONFERIR a WO `$ARGUMENTS` (em `meta/workorders/`) contra o estado atual do repo. **Nao
edite, nao crie, nao rode build/commit.** Isto e um portao de leitura: existe para descobrir, ANTES
de mexer, se a WO e aplicavel como esta escrita.

Passos:

1. Leia a WO inteira. Liste, numeradas, TODAS as edicoes que ela pede (arquivo · tipo · ancora).
2. Para CADA ancora ("Ancora / Substituir por"), procure o texto exato no arquivo-alvo e conte as
   ocorrencias:
   - **1 ocorrencia** → ok.
   - **0 ocorrencias** → ANCORA MORTA (a WO envelheceu ou o texto foi alterado). Mostre o trecho
     atual mais parecido, para o autor corrigir a WO.
   - **2+ ocorrencias** → ANCORA AMBIGUA. Diga quantas e onde.
   **Fim de linha por arquivo:** `src/index.template.html` e **CRLF**; `validate.js`, `build.js` e os
   `src/niches/*.js` sao **LF**. Confira linha a linha antes de declarar ancora morta por isso.
3. Confira os pre-requisitos declarados: versao/commit citados na WO batem com `git log -1` e com o
   `meta/STATUS.md`? A arvore esta limpa (`git status --short`)? Se a WO pede arquivo NOVO, ele ja
   existe (colisao)? Se ela cria um check novo, o numero ja esta em uso?
4. Verifique se o repo esta verde ANTES de aplicar: `node validate.js index.html` (leitura, nao muda
   nada) — regra de ouro **18/18 nichos, 0 erros**. Se ja estiver vermelho, diga — nao se aplica WO
   sobre repo vermelho.
5. Aponte contradicoes internas: dois trechos da WO editando a mesma linha; tarefa que depende de
   outra que ela mesma nao faz; check novo que colide com check existente.

Entregue:

- **VEREDITO: APLICAVEL** / **APLICAVEL COM RESSALVAS** / **NAO APLICAVEL**
- Tabela: edicao · arquivo · ancora encontrada? (1 / 0 / N) · observacao
- A lista do que o autor da WO precisa corrigir antes de voce aplicar
- **Nenhuma alteracao no repo.** Se voce editou algo, voce errou.
```

---

## Edição 3 — criar `.claude/skills/wrap/SKILL.md`

Arquivo **novo**. Conteúdo: o `commands/wrap.md` atual, com front-matter:

```markdown
---
name: wrap
description: Encerra a tarefa na raia de execução — relatório de trabalho, appends em STATUS/DECISIONS e o commit pronto. Use quando o usuário pedir /wrap ou mandar fechar a tarefa.
disable-model-invocation: true
---

Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
- **Relate:** o que foi feito, os achados e desvios do texto literal da WO (âncora já aplicada,
  arquivo ausente, tarefa que já existia), os arquivos tocados e o resultado de `build`/`validate`.
- Atualize `meta/STATUS.md` (append na «Última sessão»; ajuste a versão se mudou — NÃO reescreva o
  arquivo).
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão,
  atualize o **Status** dela (e os elos «Vira» / «Decisão») — análise não se apaga, muda de estado.
- Me mostre o `git diff` e o comando de commit pronto: um bloco por comando (`git add` /
  `git commit` / `git push`), mensagem SEM acento, e o `git commit` em bloco separado para eu copiar
  isolado.
```

---

## Edição 4 — remover os comandos antigos

```bash
git rm .claude/commands/apply-wo.md .claude/commands/check-wo.md .claude/commands/wrap.md
```

Se a pasta `.claude/commands/` ficar vazia, o git a remove sozinho. **Não** crie `.gitkeep` nela.

---

## Fora de escopo

Não muda o produto: o kit já emite skills desde a wo0065. Não entrega o `check-wo` aos
projetos-filhos (o kit emite `apply-wo` e `wrap`; o `check-wo` segue aberto no IDEAS, esperando mais
quilometragem). Não mexe em `.claude/settings.json`. Sem bump de `KIT_VERSION` — nada em `src/`.

## Armadilhas desta WO

- **Não migre o conteúdo dos skills genéricos do produto para cá.** Os do KCM são mais específicos
  (18/18, `src/index.template.html`, `node build.js`) e é assim que devem ficar — o genérico é para
  os filhos.
- O `check-wo` **já tem** front-matter (só com `description`). Acrescente `name` e
  `disable-model-invocation`; não duplique o bloco `---`.
- Teste a invocação depois: chame `/apply-wo` sem argumento e confirme que a skill **pede** o nome em
  vez de escolher uma WO sozinha.

## Depois de aplicar — conferência antes do commit

- [ ] Os três `SKILL.md` existem em `.claude/skills/{apply-wo,check-wo,wrap}/`.
- [ ] `.claude/commands/` não existe mais.
- [ ] `/apply-wo`, `/check-wo` e `/wrap` continuam sendo invocáveis pelo nome.
- [ ] `node validate.js index.html` → **18/18 · 73/73 · 0 erros** (conferência, não requisito).
- [ ] `git diff --stat` mostra 3 adições e 3 remoções em `.claude/`, mais os registros.

## Registros (canal CODE)

1. **`meta/DECISIONS.md`** — **D-107 — O KCM migra para `.claude/skills/`.** Racional: o kit marca
   `commands/` como legado no protocolo de update desde a wo0068 e a casa ficou no formato antigo;
   a invocação não muda (`disable-model-invocation: true` faz a skill se comportar como comando
   explícito). Registre também que o `check-wo` continua **fora** do que o kit entrega aos filhos.
2. **`meta/CHANGELOG.md`** — entrada `## (repo) Migracao de commands para skills (wo0073, D-107)`
   **sem** número de versão nova, já que o produto não mudou. Se o formato do arquivo exigir versão,
   registre como `v1.94.0 (repo)`.
3. **`meta/STATUS.md`** — append na «Última sessão». A versão **não muda**.
4. **`meta/IDEAS.md`** — feche o item «migrar o próprio KCM de `.claude/commands/` para
   `.claude/skills/`». O item «avaliar entregar o `/check-wo` aos projetos» **continua aberto**.

## Commit — blocos separados, mensagem SEM acento

```bash
git add -A
```

```bash
git commit -m "chore(repo): migra commands para skills (wo0073, D-107)" -m "Os tres comandos do KCM passam a .claude/skills/<nome>/SKILL.md com front-matter e disable-model-invocation true, que e o que faz a skill se comportar como comando explicito - a invocacao /apply-wo, /check-wo e /wrap nao muda. O kit marca commands como legado desde a wo0068 e a casa estava no formato antigo. Sem bump: nada em src/ foi tocado, produto inalterado, harness segue 18/18 e 73/73."
```

```bash
git push
```
