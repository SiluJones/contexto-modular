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
