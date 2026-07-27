Leia o arquivo de WO em `meta/workorders/$ARGUMENTS` e execute-o.

Regras de aplicação:
- Localize cada âncora EXATAMENTE. Se não achar uma, PARE e reporte — nunca chute um lugar próximo.
- O `src/index.template.html` usa **CRLF**: âncora de mais de uma linha colada com `\n` não casa — edite linha a linha.
- Não toque em nada fora das edições nomeadas na WO.
- WO só de doc (`meta/`) NÃO precisa de build. WO que toca `src/` (template ou nicho) precisa de `node build.js` e depois `node validate.js index.html` — regra de ouro **18/18 nichos, 0 erros** (o total de checagens sobe a cada check novo; o que não muda é 18/18 e 0 erros).
- Nunca edite o `index.html` direto: ele é **gerado**. Edite `src/` e rode o build.
- Ao terminar, rode `git diff` e confira que bate com a forma esperada (aditivo + as substituições previstas; sem remoção acidental) ANTES de commitar.
- Faça o bloco «Ao terminar» da WO (append em STATUS/DECISIONS) e o commit indicado (mensagem SEM acento).
- Achado que foge do texto literal da WO (âncora já aplicada, arquivo ausente, tarefa que já existia): **reporte** — não improvise nem duplique.
