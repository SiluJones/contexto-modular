---
name: wrap
description: Encerra a tarefa na raia de execução — relatório de trabalho, appends em STATUS/DECISIONS e o commit pronto. Use quando o usuário pedir /wrap ou mandar fechar a tarefa.
disable-model-invocation: true
---

Encerre a tarefa atual (fechamento da raia de EXECUÇÃO — relatório, não o bloco de fecho do chat):
- **ANTES de escrever qualquer coisa:** abra o relatório que carrega o **COMMIT MAIS NOVO** em
  `../AAMMDD-HHMM-code-*.txt` — ordene por commit, **não** por nome nem por data do arquivo, porque
  relatório antigo que foi **reaberto** tem data nova — e confira o que ele AFIRMA contra `git status`
  e `git log`. Confira também **qualquer relatório anterior que tenha declarado PENDÊNCIA**: ele é o
  que uma sessão futura vai ler. O relatório é escrito antes da última ação, então um push que saiu
  depois dele fica registrado como não feito. Divergência vira uma linha de correção no log do dia;
  **conferência que passa não vira linha**.
- **Sobre MEDIÇÃO você não conclui: cita e aponta.** O `1b` compara commit e estado do git — o que o
  git responde. Achado numérico do relatório anterior (bytes, contagens, qual chave) o git **não**
  desmente: ou você reroda a medição e diz que rerodou, ou escreve «medido no relatório X, não
  reconferido aqui». Contradizer sem remedir é caro — o log do dia guarda o relatório **errado**, e
  desempatar dois registros que se negam custa uma sessão e exige os dois em mãos, que é o que se perde.
- **O campo do push se escreve com o RESULTADO REAL**, nunca «pendente» por antecipação. Se ficar
  mesmo pendente, **REABRA o relatório** e corrija quando resolver — o arquivo que afirma o falso é o
  que a próxima sessão lê. E confira que nenhum relatório `.txt` ficou **DENTRO do repo**
  (`git status` o mostraria como não rastreado): o lugar dele é a pasta-pai, e relatório na raiz vira
  um `??` que ninguém identifica.
- **Escreva o log do dia em `logs/AAAA-MM-DD.md`** (formato em `meta/LOG-TEMPLATE.md`). Se o arquivo
  do dia **não existe, CRIE** — não regenerar é uma coisa, não criar é outra. Se já existe,
  **acrescente** com `## Conversa N`: o nome é da data, não da conversa, e arquivo novo por conversa
  quebra o nome. **Duas conversas no mesmo dia = o MESMO arquivo.** O log é para o humano ler depois,
  e é a única peça deste ciclo que não sobe ao mount — o que não for escrito aqui só existe nos
  relatórios da pasta-pai, que ninguém varre. Cinco linhas escritas hoje valem mais que uma página
  reconstituída na semana que vem.
- **Relate:** o que foi feito, os achados e desvios do texto literal da WO (âncora já aplicada,
  arquivo ausente, tarefa que já existia), os arquivos tocados e o resultado de `build`/`validate`.
- Atualize `meta/STATUS.md` (append na «Última sessão»; ajuste a versão se mudou — NÃO reescreva o
  arquivo).
- **Antes do commit, conte a ESTRUTURA que você editou.** No `STATUS.md`, o bloco da sessão anterior
  tem de continuar no arquivo depois da sua edição — procure o título dele: mover tem duas metades, e a
  que some é sempre a de apagar. Estrutura que costuma duplicar (`<details>`, o bloco do topo do
  STATUS) tem contagem esperada — `grep -c` da abertura e do fechamento, um de cada. Aviso em prosa já falhou duas
  vezes seguidas; contagem não.
- Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça os caracteres com `LC_ALL=C.UTF-8 wc -m` (sem o locale, `wc -m` conta bytes) e escreva o número no relatório, ao lado do
  teto do projeto: teto que ninguém mede envelhece calado.
- O `HHMM` do nome do relatório sai de `date +%y%m%d-%H%M`, rodado na hora — nunca de cabeça.
- **Versão (D-158):** WO que muda o que o kit **gera** já traz o corte de minor (`KIT_VERSION`, topo do
  CHANGELOG e «Versão atual» do STATUS). Se ela tocou `src/` e não cortou, aponte no relatório.
- **Depois de escrever STATUS, DECISIONS ou log, rode `node validate.js index.html` antes do commit** — sem
  build, que o `index.html` não mudou. O `C102` e o `C103` leem prosa: fecho «só de doc» também quebra o
  harness, e foi assim que um caminho abreviado no STATUS deixou o repo vermelho sem ninguém ver (D-159).
- Acrescente `D-0NN` / `FIX-0NN` em `meta/DECISIONS.md` se houve decisão ou correção registrável.
- Se alguma análise de `meta/analises/` foi decidida, implementada ou abandonada nesta sessão, **diga no relatório**
  qual e para que estado — não edite: a análise é do chat (CEREBRO, «Canal do chat», dono por documento), e ele atualiza o **Status** e os elos «Vira» / «Decisão» no turno seguinte. Análise não se apaga, muda de estado.
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
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm-wrap-<alvo>.txt`** (`<alvo>` = a WO que fechou, ou duas ou três palavras com hífen; pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga.
