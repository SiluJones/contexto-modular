Leia o arquivo de spec em `meta/specs/$ARGUMENTS` e execute-o.

Regras de aplicação:
- Localize cada âncora EXATAMENTE. Se não achar uma, PARE e reporte — nunca chute um lugar próximo.
- Não toque em nada fora das edições nomeadas na spec.
- Spec só de doc (meta/) NÃO precisa de build. Spec que toca `index_template.html` precisa de `node build.js` e depois `node validate.js` (tem que passar 17/17).
- Ao terminar, rode `git diff` e confira que bate com a forma esperada (aditivo + as substituições previstas; sem remoção acidental) ANTES de commitar.
- Faça o bloco "Ao terminar" da spec (append em STATUS/DECISIONS) e o commit indicado (mensagem SEM acento).
