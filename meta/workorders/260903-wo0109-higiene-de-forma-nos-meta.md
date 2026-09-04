# WO 0109 — higiene de forma nos `meta/`: quatro títulos em nível errado, um separador que faltou e um carimbo congelado

> **Tipo:** WO de DOC (higiene). Nenhum arquivo em `src/` — sem build, sem validate.
> **Config sugerida:** modelo padrao, esforco medio-baixo. Sao seis edicoes pequenas, todas com ancora literal.
> **Pre-requisito:** v1.122.0, commit `ca4e31b`, arvore limpa (exceto `.claude/launch.json`, que segue fora do versionamento).
> **Base:** dois achados reportados pelo Code nos relatorios `260903-2011` e `260903-2014` (o `###` e o `KIT_VERSION`), mais o desvio declarado pelo proprio Code ao aplicar a wo0108 (o separador da D-138), e a autorizacao do dono no turno de 2026-09-03.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** cada edicao troca uma forma por outra. Se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** todas lidas NESTE turno, no mount gerado em 2026-09-03 20:28 (commit `ca4e31b`):
> - `meta/DECISIONS.md` — `### D-135 — A conferência sai de quem tem o viés (wo0102)` · `### FIX-036 — O carimbo de versão mentia (wo0103)` · `### D-136 — A lista não perde item e o relatório não mente (wo0105)` · `### D-137 — Os dois carimbos respondem sozinhos (wo0106)` · `## D-138 — O canal para avisar um instalado é PARQUEADO, porque a janela entre levas é deliberada` — **`grep -c` = 1 para cada um dos cinco**.
> - `meta/STATUS.md` — `combo **7491**/7600. \`KIT_VERSION 1.119.0\`. **Enxugamento` — `grep -c` = **1**.
>
> **Numero de checklist e DERIVADO:** as contagens abaixo foram simuladas contra o texto final desta WO aplicado aos arquivos vivos, nao estimadas.
>
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro. Nao ha doc do chat para estes arquivos. *(A analise entregue no mesmo turno — `260903-ANALISE-forma-do-fecho-e-nome-do-relatorio.md` — nao e editada por esta WO e nao entra no `git add` dela: ela ainda esta em discussao e o dono decide antes de arquiva-la.)*

---

## 1. Por que

Tres defeitos de forma, todos pequenos, todos ja reportados e nenhum consertado — e essa e a razao de irem juntos: item trivial que sobrevive a dois relatorios vira pendencia perpetua, que e o pior dos tres estados.

1. **As quatro ultimas entradas do `DECISIONS.md` estao em `###`** enquanto D-001 a D-134 e a nova D-138 usam `##`. Efeito real: as quatro aparecem como **subitens da D-134** em qualquer sumario ou leitor que respeite hierarquia — quatro decisoes recentes escondidas dentro de uma antiga.
2. **A D-138 entrou sem o separador `---`** que precede todas as outras entradas recentes. Desvio declarado pelo Code ao aplicar a wo0108 — ele seguiu o texto literal da WO, que estava incompleto. O erro foi de quem escreveu a WO, nao de quem aplicou.
3. **O `STATUS.md` carrega `KIT_VERSION 1.119.0` na linha rolante**, tres versoes atras do `v1.122.0` que a **mesma linha** declara vinte palavras antes. E o defeito que o FIX-036 corrigiu — carimbo que responde e responde mentira — sobrevivendo dentro do arquivo que o `C54` le, porque o check casa `Versão atual: **vX.Y.Z**` e para na primeira ocorrencia.

## 2. Contexto factual

- **Medido.** `grep -n "^### D-13"` no `meta/DECISIONS.md` devolve quatro linhas: D-135 (1691), FIX-036 (1696), D-136 (1701), D-137 (1706). A D-138 (1709) esta em `##`. Todas as demais entradas do arquivo usam `##`.
- **Medido.** As quatro entradas em `###` sao precedidas por `---`; a D-138 nao e.
- **Medido.** `grep -c 'KIT_VERSION 1.119.0' meta/STATUS.md` devolve **3**. Só **uma** delas e estado (a linha rolante do topo, junto do orcamento de teto); as outras duas estao dentro de entradas de sessao historicas.
- **Deduzido, e e a razao de a Edicao 3 apagar em vez de atualizar.** O numero escrito a mao e derivavel: o `C54` confere a constante `KIT_VERSION` contra o topo do `CHANGELOG` e o cabecalho do `STATUS` **a cada build**. Manter o valor escrito duplica a fonte e garante que ele envelheca de novo na proxima versao. Vale a regra do proprio kit: escreva a REGRA, nao o valor.

---

## Edicao 1a — `meta/DECISIONS.md` · titulo da D-135 sobe para `##`

**Ancora** (linha inteira do titulo):

```
### D-135 — A conferência sai de quem tem o viés (wo0102)
```

**Substituir por:**

```
## D-135 — A conferência sai de quem tem o viés (wo0102)
```

## Edicao 1b — `meta/DECISIONS.md` · titulo do FIX-036 sobe para `##`

**Ancora:**

```
### FIX-036 — O carimbo de versão mentia (wo0103)
```

**Substituir por:**

```
## FIX-036 — O carimbo de versão mentia (wo0103)
```

## Edicao 1c — `meta/DECISIONS.md` · titulo da D-136 sobe para `##`

**Ancora:**

```
### D-136 — A lista não perde item e o relatório não mente (wo0105)
```

**Substituir por:**

```
## D-136 — A lista não perde item e o relatório não mente (wo0105)
```

## Edicao 1d — `meta/DECISIONS.md` · titulo da D-137 sobe para `##`

**Ancora:**

```
### D-137 — Os dois carimbos respondem sozinhos (wo0106)
```

**Substituir por:**

```
## D-137 — Os dois carimbos respondem sozinhos (wo0106)
```

## Edicao 2 — `meta/DECISIONS.md` · a D-138 ganha o separador que faltou

**Ancora** (linha inteira do titulo da D-138, a ultima entrada do arquivo):

```
## D-138 — O canal para avisar um instalado é PARQUEADO, porque a janela entre levas é deliberada
```

**Substituir por** (o `---`, uma linha em branco, e o titulo — exatamente como as entradas anteriores):

```
---

## D-138 — O canal para avisar um instalado é PARQUEADO, porque a janela entre levas é deliberada
```

> **Se já existir um `---` imediatamente antes da linha da D-138**, esta edição já está feita: **PULE** e diga no relatório. Não empilhe um segundo separador.

## Edicao 3 — `meta/STATUS.md` · sai o carimbo congelado da linha rolante

**Ancora** (trecho no meio da linha rolante do topo, logo apos o orcamento por modo — `grep -c` = 1):

```
combo **7491**/7600. `KIT_VERSION 1.119.0`. **Enxugamento
```

**Substituir por:**

```
combo **7491**/7600. **Enxugamento
```

> **Por que apagar e nao atualizar para 1.122.0:** o valor e derivavel e ja verificado a cada build pelo `C54`; a mesma linha ja declara `Versão atual: **v1.122.0**` vinte palavras antes. Reescrever o numero garante que ele envelheca de novo — e o instantaneo de dado derivavel que a regra de higiene proibe.

---

## Fora de escopo

- **As outras duas ocorrências de `KIT_VERSION 1.119.0`** no `meta/STATUS.md`. Elas estão dentro de entradas de sessão históricas: **relatam** o que era verdade naquele momento, e relato não se reescreve para consertar regra. Só sai a que **afirma estado**.
- Qualquer implementação da análise entregue no mesmo turno (forma do fecho, nome do relatório). Esta WO é higiene do que já estava reportado.
- Renumerar, reordenar ou resumir entradas do `DECISIONS.md`. Só o nível de título muda.

## Armadilhas desta WO

- **`grep -c 'KIT_VERSION 1.119.0'` devolve 3 no `STATUS.md`, e só uma sai.** A âncora da Edição 3 é longa de propósito, para casar apenas a ocorrência da linha rolante. Se a busca curta for usada, duas linhas de relato histórico serão destruídas.
- **Os quatro títulos da Edição 1 são parecidos entre si.** Cada um é único como linha inteira (`grep -c` = 1, medido). Aplicar por prefixo `### D-13` casaria os quatro de uma vez — o que até daria o resultado certo, mas sem a conferência item a item; se preferir fazer assim, **relate que fez assim**.
- **Ordem entre as Edições 1d e 2.** São linhas vizinhas (D-137 em 1706, D-138 em 1709). Aplique 1d antes de 2, ou confira as duas âncoras depois de cada troca.
- **O arquivo é grande.** `git diff` deve mostrar **seis** linhas alteradas no `DECISIONS.md` (quatro títulos + duas do separador) e **uma** no `STATUS.md`. Mais que isso, algo casou onde não devia: **PARE e reporte**.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente dois** arquivos: `meta/DECISIONS.md` e `meta/STATUS.md`. Nada além (mais a própria WO, nova).
- [ ] `grep -c "^### D-13" meta/DECISIONS.md` → **0** *(era 3: D-135, D-136, D-137)*.
- [ ] `grep -c "^### FIX-036" meta/DECISIONS.md` → **0** *(era 1)*.
- [ ] `grep -c "^## D-13" meta/DECISIONS.md` → **9** *(D-130 a D-138. Número **derivado** de simular esta WO contra o arquivo vivo — a primeira versão deste item dizia 6, estimado de cabeça e errado. Se vier diferente de 9, recontar antes de seguir e reportar a divergência como achado, não como detalhe.)*
- [ ] `grep -c "^## FIX-036" meta/DECISIONS.md` → **1**.
- [ ] O `---` aparece **uma única vez** imediatamente antes da linha `## D-138`, e não há dois separadores seguidos ali.
- [ ] `grep -c 'KIT_VERSION 1.119.0' meta/STATUS.md` → **2** *(era 3; as duas que ficam são relato histórico dentro de entradas de sessão)*.
- [ ] `grep -c 'Versão atual: \*\*v1.122.0\*\*' meta/STATUS.md` → **1** *(intacto — a Edição 3 não pode tocar o carimbo que o `C54` lê)*.
- [ ] **WO só de doc, mas não inerte:** o `C54` lê o `meta/STATUS.md`, e a Edição 3 mexe nele. Não precisa de `build.js`, mas se quiser a rede completa, `node validate.js` deve fechar **18/18 · 100/100 · 0 erros**. *Já medido no sandbox do chat, com as seis edições desta WO aplicadas: verde.*

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da conferência · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** se `grep -c "^## D-13"` devolveu número diferente do previsto, e qual.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/DECISIONS.md meta/STATUS.md meta/workorders/260903-wo0109-higiene-de-forma-nos-meta.md
```

```
git commit -m "docs(meta): corrige nivel de titulo de quatro decisoes, o separador da D-138 e o carimbo congelado do STATUS" -m "D-135, FIX-036, D-136 e D-137 estavam em ### e apareciam como subitens da D-134. A D-138 entrou sem o separador que precede as outras (desvio declarado na wo0108). O STATUS carregava KIT_VERSION 1.119.0 na linha rolante, tres versoes atras do que a mesma linha declara; o valor sai em vez de ser atualizado, porque o C54 ja o confere a cada build."
```

```
git push
```
