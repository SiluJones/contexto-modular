---
name: wrap
description: Encerra a tarefa na raia de execução — relatório de trabalho, appends em STATUS/DECISIONS e o commit pronto. Use quando o usuário pedir /wrap ou mandar fechar a tarefa.
disable-model-invocation: true
---

Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
- **ANTES de escrever qualquer coisa:** abra o **relatório mais recente** em `../AAMMDD-HHMM-code-*.txt`
  e confira o que ele AFIRMA contra `git status` e `git log`. O relatório é escrito antes da última
  ação, então um push que saiu depois dele fica registrado como não feito. Divergência vira uma linha
  de correção no log do dia; **conferência que passa não vira linha**.
- **Relate:** o que foi feito, os achados e desvios do texto literal da WO (âncora já aplicada,
  arquivo ausente, tarefa que já existia), os arquivos tocados e o resultado de `build`/`validate`.
- Atualize `meta/STATUS.md` (append na «Última sessão»; ajuste a versão se mudou — NÃO reescreva o
  arquivo).
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão,
  atualize o **Status** dela (e os elos «Vira» / «Decisão») — análise não se apaga, muda de estado.
- **Resolva o push ANTES de escrever o relatório** — o relatório é o ÚLTIMO passo, sempre.
  **Verde** (`git diff` conferido e, se tocou `src/`, build + harness verdes): rode `add`, `commit` e
  `push` você mesmo, SEM perguntar. Você tem o terminal; entregar bloco para eu colar é trocar de raia.
  **Vermelho** (harness falhou, âncora não achada, `git diff` fora do previsto): NÃO commite nem
  empurre — ofereça as saídas reais pelo **menu de opções** da ferramenta `AskUserQuestion`, com a
  recomendada em primeiro lugar e marcada `(Recomendado)`. **Nunca pergunte em prosa — e menu numerado
  escrito no corpo da mensagem TAMBÉM é prosa**, porque me obriga a digitar a escolha em vez de clicar.
  Sem a ferramenta, caia no menu numerado em texto e **diga que caiu no fallback**. **O cartão serve
  para ESCOLHER, não para DISPARAR:** ele não contorna `disable-model-invocation`, então não o use para
  oferecer «rodar a skill agora» — medido duas vezes, isso acrescenta um passo sem tirar nenhum. Se a minha escolha
  chegar depois, o relatório se REESCREVE — não fica valendo a versão velha.
  **Se a tarefa declarar um «Próximo comando»**, termine o relatório com ele **CRU e SOZINHO na última
  linha**, sem frase de apresentação — texto em volta esconde o comando.
  Mensagem de commit SEM acento.
- **Ao mudar um número ou um estado no `meta/STATUS.md`** (contagem de checagens, versão, «harness
  NN/NN»), procure o valor ANTIGO no arquivo INTEIRO e atualize todas as ocorrências — o cabeçalho não
  é o único lugar onde ele aparece.
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga.
