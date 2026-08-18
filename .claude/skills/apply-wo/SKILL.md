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
- **Resolva o push ANTES de escrever o relatório** — o relatório é o ÚLTIMO passo, sempre.
  **Verde** (âncoras todas achadas, `git diff` na forma prevista, harness verde ou WO só de doc): rode
  `add`, `commit` e `push` você mesmo, SEM perguntar — não me devolva bloco para colar. **Vermelho**
  (qualquer uma falhou): NÃO commite nem empurre — ofereça as saídas reais pelo **menu de opções** da
  ferramenta `AskUserQuestion`, com a recomendada em primeiro lugar e marcada `(Recomendado)`. **Nunca
  pergunte em prosa — e menu numerado escrito no corpo da mensagem TAMBÉM é prosa.** Sem a ferramenta,
  caia no menu numerado em texto e **diga que caiu no fallback**. Se a minha escolha chegar depois, o relatório se
  REESCREVE. Isto vale mesmo quando a WO traz os blocos de `git` no corpo: os blocos são o QUE rodar,
  não um pedido para eu rodar.
- Feche com o **relatório de trabalho** — o que fez, achados e desvios do texto literal da WO,
  arquivos tocados, resultado de build/validate, o commit. **Não** use o bloco de fecho do chat:
  aquele é da raia de planejamento.
- **Grave o mesmo relatório em `../AAMMDD-HHMM-code-kcm.txt`** (pasta-pai do repo). Sempre, sem
  pedido. Se a escrita for negada, diga e siga — o relatório no chat é que vale.
