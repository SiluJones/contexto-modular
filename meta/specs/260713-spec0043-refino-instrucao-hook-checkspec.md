# spec0043 — Refino de instruções no CEREBRO + hook de pré-commit (i-N38) + `/check-spec` (i-N39)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.67.1` (pós-spec0042, commit `1dceff9` — **e o push feito**).
> **Resultado esperado:** **18/18 nichos · 47/47 checagens · 0 erros.**
> **⚠️ Já validado:** a Tarefa A e a Tarefa B foram executadas numa cópia do repo (build + validate) antes
> desta spec ser escrita. As tarefas C e D são de toolchain (fora do harness) e vêm com teste manual.
>
> **NÃO faz parte desta spec:** a unificação de paleta dos nichos. Ela é a **spec0044** (ver §Anexo).

---

## Tarefa A — `src/index.template.html`: o CEREBRO ensina a conversa a cuidar do próprio orçamento

O CEREBRO já autoriza o projeto a adaptar as Instruções, mas não diz **como** — e é aí que a conversa
erra dos dois lados: ou infla (acrescenta e nunca corta) ou poda demais (apaga a regra que existia por
um motivo). Esta seção fecha isso.

**Âncora:**
```javascript
  L.push("");
  L.push("## Tabela de gatilhos (evento → o que o assistente entrega)");
```
**Substituir por:**
```javascript
  // Refino das Instruções do Projeto (i-N48): a conversa cuida do proprio orcamento de instrucao
  L.push("");
  L.push("## Refino das Instruções do Projeto (a conversa cuida do próprio orçamento)");
  L.push("");
  L.push("As Instruções do Projeto são lidas em **toda mensagem**: cada palavra é cobrada em todo turno. A versão que o kit gera é um **ponto de partida genérico**; este projeto deve convergir para uma versão **mais curta e mais específica** — sem perder processo.");
  L.push("");
  L.push("**Como refinar (proponha ao usuário, não edite sozinho):**");
  L.push("- **Corte o que não se aplica.** Princípio, gatilho ou regra que este projeto nunca usou em N sessões é peso morto — proponha remover, dizendo o que sai.");
  L.push("- **Especialize o que se aplica.** Troque o exemplo genérico pelo caso real deste projeto: instrução concreta economiza mais token do que instrução curta e vaga.");
  L.push("- **Não confunda encurtar com esquecer.** Regra que já evitou um erro real (está no DECISIONS) NÃO sai. Se algo sai, some ao CEREBRO — o CEREBRO é lido sob demanda, as Instruções em toda mensagem: mover é barato, apagar é caro.");
  L.push("- **Não inche.** Antes de acrescentar uma regra, pergunte se ela cabe no CEREBRO. Só vai para as Instruções o que precisa ser lembrado em TODO turno.");
  L.push("- **Uma regra por linha, verbo no imperativo, sem preâmbulo.** Prosa explicativa vive no CEREBRO.");
  L.push("- **Teto:** as Instruções não devem passar de ~6.900 caracteres. Ao propor uma mudança, diga o tamanho antes e depois.");
  L.push("- **Registre:** toda mudança de instrução vira uma linha no DECISIONS (o que mudou e por quê) e um item em «Feedback para o Kit» no IDEAS — é assim que o kit aprende com este projeto.");

  L.push("");
  L.push("## Tabela de gatilhos (evento → o que o assistente entrega)");
```

---

## Tarefa B — `validate.js`: novo check **G19**

**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G19 CEREBRO ensina a refinar as proprias Instrucoes (orcamento, sem perder processo)", () => {
  const n = T.normNiche(T.NICHES.dev);
  const md = T.buildClaudeMd(n);
  assert(/## Refino das Instruções do Projeto/.test(md), "secao de refino ausente no CEREBRO");
  assert(/6\.?900/.test(md), "o teto de caracteres nao aparece na secao de refino");
  assert(/DECISIONS/.test(md) && /Feedback para o Kit/.test(md), "refino sem registro em DECISIONS/IDEAS");
  return "ok";
});

// ============ SUMARIO ============
```

---

## Tarefa C — i-N38: hook de pré-commit que bloqueia commit sem verde

### C1 — criar `.githooks/pre-commit` (arquivo novo)
```sh
#!/bin/sh
# KCM — pre-commit (i-N38). Bloqueia commit que toque o produto sem harness verde.
# Bypass consciente: git commit --no-verify

staged=$(git diff --cached --name-only)
echo "$staged" | grep -qE '^(src/|index\.html|build\.js|validate\.js|build-manifest\.json)' || exit 0

command -v node >/dev/null 2>&1 || { echo "pre-commit: node nao encontrado no PATH."; exit 1; }

echo "pre-commit: rodando build..."
node build.js || { echo "pre-commit: BUILD FALHOU - commit bloqueado."; exit 1; }

# o index.html commitado precisa ser o do build atual
if ! git diff --quiet -- index.html; then
  echo "pre-commit: index.html estava DESATUALIZADO em relacao a src/."
  echo "            Ele acabou de ser reconstruido. Rode: git add index.html  e refaca o commit."
  exit 1
fi

echo "pre-commit: rodando harness..."
node validate.js index.html || { echo "pre-commit: HARNESS VERMELHO - commit bloqueado."; exit 1; }

echo "pre-commit: verde. seguindo."
exit 0
```

### C2 — ligar o hook (rodar uma vez; o `core.hooksPath` fica no `.git/config`, que não é versionado)
```bash
git config core.hooksPath .githooks
git update-index --chmod=+x .githooks/pre-commit
```
> No Windows funciona: o Git executa hooks pelo shell que ele mesmo embarca (Git Bash), mesmo com você
> operando no PowerShell.

### C3 — documentar em `BUILD.md`
Acrescente uma seção curta: o que o hook faz, como ligar num clone novo (o comando de C2 — o
`core.hooksPath` **não** viaja no `git clone`) e o bypass (`--no-verify`), deixando claro que o bypass
é para emergência, não para rotina.

### C4 — teste manual (obrigatório, e faça-o de verdade)
1. Estrague de propósito um check no `validate.js` (ex.: troque `18` por `19` no G1), `git add`, tente
   commitar → **o commit deve ser bloqueado**.
2. Desfaça, `git add`, commite → **passa**.
3. Relate as duas saídas no resumo da sessão.

---

## Tarefa D — i-N39: `/check-spec`, gate **read-only** antes de aplicar uma spec

### D1 — criar `.claude/commands/check-spec.md` (arquivo novo)
```markdown
---
description: Confere uma spec contra o repo ANTES de aplicar. Read-only — nao edita nada.
---

Voce vai CONFERIR a spec `$ARGUMENTS` contra o estado atual do repo. **Nao edite, nao crie, nao rode
build/commit.** Este comando e um portao de leitura: ele existe para descobrir, ANTES de mexer, se a
spec e aplicavel como esta escrita.

Passos:

1. Leia a spec inteira. Liste, numeradas, TODAS as edicoes que ela pede (arquivo · tipo · ancora).
2. Para CADA ancora ("Ancora / Substituir por"), procure o texto exato no arquivo-alvo e conte as
   ocorrencias:
   - **1 ocorrencia** → ok.
   - **0 ocorrencias** → ANCORA MORTA (a spec envelheceu ou o texto foi alterado). Mostre o trecho
     atual mais parecido, para o autor corrigir a spec.
   - **2+ ocorrencias** → ANCORA AMBIGUA. Diga quantas e onde.
3. Confira os pre-requisitos declarados: versao/commit citados na spec batem com `git log -1` e com o
   `meta/STATUS.md`? A arvore esta limpa (`git status --short`)? Se a spec pede arquivo NOVO, ele ja
   existe (colisao)?
4. Verifique se o repo esta verde ANTES de aplicar: `node validate.js index.html` (leitura, nao muda
   nada). Se ja estiver vermelho, diga — nao se aplica spec sobre repo vermelho.
5. Aponte contradicoes internas: dois trechos da spec editando a mesma linha; tarefa que depende de
   outra que ela mesma nao faz; check novo que colide com check existente.

Entregue:

- **VEREDITO: APLICAVEL** / **APLICAVEL COM RESSALVAS** / **NAO APLICAVEL**
- Tabela: edicao · arquivo · ancora encontrada? (1 / 0 / N) · observacao
- A lista do que o autor da spec precisa corrigir antes de voce aplicar
- **Nenhuma alteracao no repo.** Se voce editou algo, voce errou.
```

### D2 — documentar em `BUILD.md` (uma linha no fluxo)
O ciclo de uma spec passa a ser: **`/check-spec <caminho>` → aplicar → build → validate → commit**.

---

## Tarefa E — docs (append)

- **`meta/DECISIONS.md` → D-072:** o CEREBRO passa a ensinar o refino das próprias Instruções (orçamento
  explícito, «mover é barato, apagar é caro», registro em DECISIONS/IDEAS). **D-073:** portões de
  processo — hook de pré-commit (harness verde obrigatório) e `/check-spec` (conferência read-only antes
  de aplicar). Justificativa: as duas regressões mais caras da história do projeto (âncora morta e commit
  sem harness) agora são impedidas por máquina, não por disciplina.
- **`meta/IDEAS.md`:** **i-N38** e **i-N39** → **FECHADAS**. Registrar **i-N48 — refino de instrução pela
  própria conversa** como **FECHADA** (nasceu e morreu nesta spec). Registrar **i-N49 — paleta unificada
  dos nichos** (ver Anexo; é a spec0044).
- **`meta/STATUS.md`:** v1.67.1 → **v1.68.0** (minor: CEREBRO novo + toolchain); testes **18/18 · 47/47**.
- **`meta/CHANGELOG.md`:** entrada da v1.68.0.
- **`BUILD.md`:** seções do hook e do `/check-spec` (C3 e D2).

---

## Verificação

1. `node build.js` → 18 módulos.
2. `node validate.js index.html` → **18/18 · 47/47 · 0 erros**.
3. Teste do hook (C4) — as duas saídas, relatadas.
4. `/check-spec meta/specs/260713-spec0043-*.md` rodado **contra esta própria spec** como ensaio: ele
   deve reportar as âncoras A e B como encontradas (1 ocorrência cada). Se ele apontar âncora morta,
   **pare e me avise** — quer dizer que o repo divergiu.
5. Abrir o `index.html`, gerar o CEREBRO de qualquer nicho e conferir a olho a seção **«Refino das
   Instruções do Projeto»**.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js .githooks/pre-commit .claude/commands/check-spec.md \
        BUILD.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md \
        meta/specs/260713-spec0043-refino-instrucao-hook-checkspec.md
git commit -m "feat(cerebro+toolchain): refino de instrucao pela propria conversa, hook de pre-commit e /check-spec (spec0043, D-072/D-073)

- CEREBRO: secao 'Refino das Instrucoes do Projeto' (orcamento de 6900, mover e barato apagar e caro,
  registro em DECISIONS/IDEAS) + G19 no harness
- i-N38: .githooks/pre-commit bloqueia commit que toque o produto sem build+harness verdes
- i-N39: /check-spec confere ancoras, pre-requisitos e estado verde ANTES de aplicar (read-only)
- 18/18, 47/47, 0 erros"
git push
```

---

## Anexo — o que vem na **spec0044** (paleta unificada) · NÃO fazer agora

Diagnóstico: o KCM tem **duas cores por nicho** e elas não conversam.
- **Card** (tela de escolha): `cardColor`, no `src/niches/<id>.js`.
- **Página do nicho:** o bloco `html[data-niche="<id>"]{ --amber: … }` no `src/index.template.html`.
- **`career` não tem entrada `[data-niche]`** — por isso a página dele herda o âmbar padrão (o do dev).
  **É esta a causa do «a cor do carreira é igual à do dev»** — a spec0042 mexeu só no card.

A spec0044 vai unificar as duas fontes por nicho, usando a preferência já dada pelo usuário como âncora,
e resolver os **choques** que a unificação cria (dois nichos caindo na mesma cor).
