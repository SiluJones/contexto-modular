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
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga.
