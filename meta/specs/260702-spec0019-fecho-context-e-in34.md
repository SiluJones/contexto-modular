# Spec — Fecho de sessao: atualizar CONTEXT para v1.46.0, limpar pendencia-fantasma, precisar i-N34

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Doc-only** (`meta/CONTEXT.md`, `meta/STATUS.md`, `meta/IDEAS.md`): **sem** build/validate. Rede = `git diff`.
> Aplicar com: **`/apply-spec 260702-spec0019-fecho-context-e-in34.md`**
> Config: **Sonnet + esforco Alto**.

## Contexto (auditoria de fecho)
Auditoria antes de transferir a conversa achou: (1) **CONTEXT.md ficou em v1.42.0** — quatro versoes atras do repo (v1.46.0); nao reflete D-043..D-048. Como o CONTEXT e o mapa que uma nova conversa le para se orientar, deixa-lo defasado recria o problema de deriva. (2) **Pendencia-fantasma no STATUS:** a linha "Pendente: layout (spec de frontend a parte)" ja foi resolvida (D-048) — deve ser marcada concluida. (3) **i-N34** ganha uma frase de precisao (ambos os afixos aplicaveis de forma independente E simultanea, com preview do nome final).

## Tarefa A — CONTEXT.md: carimbo e nota de revisao para v1.46.0

**A.1** — carimbo de versao.
**Ancora:** `> Versão de referência: **v1.42.0** · produto = um \`index.html\` (~589 KB) **gerado** de \`src/\` · **17/17 nichos, 0 erros** no harness.`
**Substituir por:**
```
> Versão de referência: **v1.46.0** · produto = um `index.html` **gerado** de `src/` · **17/17 nichos, 0 erros** no harness.
```

**A.2** — nota de revisao (inserir DEPOIS da nota v1.42.0 existente, como paragrafo `>` novo).
**Ancora:** a linha que termina `...para spec/ASU (D-041). Nada de conteúdo removido.`
**Inserir logo apos ela:**
```
>
> **Mudanças desde v1.42.0 (ate v1.46.0):** ciclo de verificação round-trip (D-042); auditoria de nomes dos 17 nichos + política DEC/FIX por nicho (D-043); diretriz de geração de `.gitignore`/README (D-044); releitura do mount por turno ao sinal de upload + teto da instrução curta 6500→6900 (D-045); refino do escopo do ASU por tipo de arquivo + verificação obrigatória, revisando o D-037 (D-046); D-041 aplicado ao gerador — nomes AAMMDD (D-047); layout desktop: builder 2 colunas até 700px, rail sticky, sem layout shift (D-048). Instrução de projeto do KCM criada (camada lida todo turno).
```

## Tarefa B — STATUS.md: limpar a pendencia-fantasma do layout

**Ancora:** o trecho `Harness 17/17. ✅ **Disciplina v2 (Fases A-D) CONCLUIDA.** Pendente: layout (spec de frontend a parte).`
**Substituir por:**
```
Harness 17/17. ✅ **Disciplina v2 (Fases A-D) CONCLUIDA.** Layout desktop resolvido em v1.46.0 (D-048); mobile/layout empilhado alternativo ficam como i-N33 (futuro).
```

## Tarefa C — IDEAS.md: precisar a i-N34

**Ancora:** a frase final da i-N34 `...a parte nova e a UI dos dois toggles + preview.`
**Substituir por:**
```
a parte nova e a UI dos dois toggles + preview. **Precisao:** prefixo e sufixo sao INDEPENDENTES — cada um com seu switch e sua caixa; podem estar ligados os dois, um so, ou nenhum, e o resultado se combina numa unica passada (ex.: so prefixo `projeto__CLAUDE.md`; so sufixo `CLAUDE__v1.8.md`; ambos `projeto__CLAUDE__v1.8.md`; nenhum `CLAUDE.md`). Preview do nome final atualiza ao vivo conforme os toggles/caixas.
```

## Validar (doc-only)
`git diff` aditivo + as 3 substituicoes nomeadas; zero remocao de outro conteudo.

## Ao terminar (raia do Code — append-only)
- **`meta/STATUS.md`** — append na «Ultima sessao»: «Fecho de sessao: CONTEXT atualizado para v1.46.0, pendencia-fantasma de layout limpa, i-N34 precisada.»

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add meta/CONTEXT.md meta/STATUS.md meta/IDEAS.md meta/specs/260702-spec0019-fecho-context-e-in34.md
git commit -m "docs: fecho de sessao, CONTEXT v1.46.0, limpa fantasma de layout, precisa i-N34" -m "CONTEXT carimbo e nota de revisao ate v1.46.0 (D-043..D-048); STATUS marca layout resolvido; i-N34 detalha afixos independentes e simultaneos com preview"
git push
```
