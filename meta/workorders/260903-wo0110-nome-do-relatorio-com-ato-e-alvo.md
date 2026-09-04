# WO 0110 — o nome do relatório passa a dizer do que ele trata (`code-<slug>-<ato>-<alvo>`)

> **Tipo:** WO de CODIGO + doc instalado. Toca `src/index.template.html`, `validate.js` e quatro superficies instaladas do proprio KCM. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo mais capaz, esforco medio. Sao nove substituicoes literais e um check reescrito; o risco nao esta na dificuldade, esta em esquecer uma das nove.
> **Pre-requisito:** v1.122.0 com a wo0109 ja aplicada, arvore limpa.
> **Base:** analise `260903-ANALISE-forma-do-fecho-e-nome-do-relatorio.md`, entregue no mesmo turno, **Decidida** pelo dono: opcao **F com G**.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** todas lidas NESTE turno, no mount gerado em 2026-09-03 20:28 (commit `ca4e31b`). **O mount NAO trazia a wo0109 aplicada** — nenhuma ancora desta WO toca `meta/DECISIONS.md` nem `meta/STATUS.md`, os dois unicos arquivos que a wo0109 altera, entao a base e valida mesmo assim. Cada ancora foi contada com `grep -c` = **1** e, alem disso, **aplicada de verdade** num sandbox reconstruido do mount.
>
> **Afirmacao sobre artefato legivel:** as nove substituicoes abaixo foram executadas em sandbox, seguidas de `node build.js` (`index.html` 836.117 -> **836.745 bytes**) e `node validate.js` (**18/18 · 100/100 · VERDE**). O par negativo tambem foi medido: revertendo apenas a linha da skill `apply-wo`, o `C30` fica **VERMELHO**. As ancoras chegam testadas.
>
> **Numero de checklist e DERIVADO:** as contagens foram tiradas do sandbox depois de aplicar esta WO, nao estimadas.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

O padrao atual e `AAMMDD-HHMM-code-<slug>.txt`, com `<slug>` = nome do projeto. Dentro de um repo, **todo relatorio tem o mesmo slug** — entao o unico campo que distingue um do outro e a hora: `260903-2011-code-kcm.txt` e `260903-2014-code-kcm.txt` nao dizem qual e a aplicacao e qual e o fecho, e nao ha como saber sem abrir os dois.

O `mapsmith` aprendeu isso "errado" e chegou a algo melhor: `260819-1335-code-apply-wo0101.txt`. O dono decidiu adotar, com uma correcao — **somar em vez de trocar**. O `<slug>` nao e enfeite: o proprio texto do kit o justifica com *«a pasta-pai costuma ser compartilhada por varios repos»*, e o mapsmith o perdeu ao trocar. Fica `code-<slug>-<ato>-<alvo>`, com `<ato>` de **vocabulario fechado** — sem lista fechada o campo vira texto livre e a praticidade acaba em tres meses.

## 2. Contexto factual

- **Medido — o inventario e de NOVE pontos, nao cinco.** Cinco no gerador (`src/index.template.html`) e quatro nas superficies instaladas do proprio KCM. O risco desta WO e exatamente o que a analise nomeou: *mudanca de padrao que muda tres superficies e esquece a quarta e como a familia das revogacoes nasce.*
- **Medido — um dos cinco nao muda.** A skill `wrap` localiza o relatorio anterior pelo glob `../AAMMDD-HHMM-code-*.txt`, **ordenando por commit**. O glob continua casando com os nomes novos: nada a fazer ali, e essa e a razao de a WO ter oito edicoes e nao nove.
- **Medido — o harness ja ancorava o padrao antigo.** O `C30` exigia `/AAMMDD-HHMM-code-<slug>\.txt/` nas duas skills. Sem reescreve-lo, esta WO deixa o harness vermelho; com ele reescrito, o harness passa a **obrigar** que cada skill use o ato certo — garantia mais forte do que a anterior.
- **Medido — o teto nao e tocado.** As oito edicoes ficam em `claudeMd`, nas duas skills e no texto do `settings`; nenhuma em `buildInstr`. O harness verde confirma o teto por nicho e o orcamento por modo.
- **Decidido (analise, secao «Consequencias»):** o KCM aplica em si na mesma WO. Ninguem baixa o pacote de update do KCM para atualizar o KCM, e ja houve refinamento que entrou no gerado e nao na casa.

**O formato, para referencia de quem aplica:**

```
AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt
                          |      |
                          |      +-- a WO (wo0110), ou 2-3 palavras com hifen (teto-narrative)
                          +--------- FECHADO: apply · wrap · probe · explore
```

`260903-2011-code-kcm-apply-wo0108.txt` · `260903-2014-code-kcm-wrap-wo0108.txt`

---

## Edicao 1 — `src/index.template.html` · CLAUDE.md gerado, secao «Relatório em arquivo»

**Ancora:**

```
grave o MESMO relatório também em `../AAMMDD-HHMM-code-<slug>.txt` — pasta-PAI do repo, fora do versionamento (troque `<slug>` pelo nome curto do projeto; a pasta-pai costuma ser compartilhada por vários repos).
```

**Substituir por:**

```
grave o MESMO relatório também em `../AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt` — pasta-PAI do repo, fora do versionamento. **`<slug>`** = nome curto do projeto (a pasta-pai costuma ser compartilhada por vários repos). **`<ato>`** = vocabulário FECHADO: `apply` · `wrap` · `probe` · `explore` — nada fora desta lista. **`<alvo>`** = a WO (`wo0108`) quando houver uma; senão, duas ou três palavras com hífen sobre o que foi feito (`teto-narrative`). Exemplo: `260903-2011-code-kcm-apply-wo0108.txt`. O nome existe para responder «qual relatório trata do quê» sem abrir nenhum deles.
```

## Edicao 2 — `src/index.template.html` · skill `apply-wo` gerada

**Ancora:**

```
Grave o MESMO relatório em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo).
```

**Substituir por:**

```
Grave o MESMO relatório em `../AAMMDD-HHMM-code-<slug>-apply-<alvo>.txt` (pasta-pai do repo) — o ato é sempre `apply` nesta skill, e `<alvo>` é a WO aplicada (`wo0108`).
```

## Edicao 3 — `src/index.template.html` · skill `wrap` gerada

**Ancora:**

```
Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` (pasta-pai do repo).
```

**Substituir por:**

```
Grave o relatório de trabalho em `../AAMMDD-HHMM-code-<slug>-wrap-<alvo>.txt` (pasta-pai do repo) — o ato é sempre `wrap` nesta skill, e `<alvo>` é a WO que fechou (`wo0108`) ou, sem WO, duas ou três palavras com hífen.
```

## Edicao 4 — `src/index.template.html` · lista de obrigacoes do `settings.json`

**Ancora:**

```
Sem ele, o relatorio de trabalho em `../AAMMDD-HHMM-code-<slug>.txt` nao tem onde ser gravado
```

**Substituir por:**

```
Sem ele, o relatorio de trabalho em `../AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt` nao tem onde ser gravado
```

## Edicao 5 — `validate.js` · o `C30` passa a exigir o ato certo em cada skill

**Ancora** (linha inteira, dentro do `check("C30 …")`):

```
  ["applyWo","wrap"].forEach(k => assert(/AAMMDD-HHMM-code-<slug>\.txt/.test(kit[k]), "skill "+k+" nao grava o relatorio no arquivo (regra so no CLAUDE.md evapora)"));
```

**Substituir por** (tres asserts — os dois atos e o vocabulario fechado):

```
  assert(/AAMMDD-HHMM-code-<slug>-apply-<alvo>\.txt/.test(kit.applyWo), "skill applyWo nao grava o relatorio no arquivo com o ato apply (regra so no CLAUDE.md evapora)");
  assert(/AAMMDD-HHMM-code-<slug>-wrap-<alvo>\.txt/.test(kit.wrap), "skill wrap nao grava o relatorio no arquivo com o ato wrap (regra so no CLAUDE.md evapora)");
  assert(/`apply` · `wrap` · `probe` · `explore`/.test(kit.claudeMd), "o vocabulario fechado de <ato> sumiu do CLAUDE.md: sem lista fechada o campo vira texto livre");
```

> **O `C30` continua contando como UM check** — o total permanece **100**, não 101. Se o total mudar, algo além desta edição entrou.

## Edicao 6 — `.claude/skills/apply-wo/SKILL.md` (superficie instalada do KCM)

**Ancora:**

```
- **Grave o mesmo relatório em `../AAMMDD-HHMM-code-kcm.txt`**
```

**Substituir por:**

```
- **Grave o mesmo relatório em `../AAMMDD-HHMM-code-kcm-apply-<alvo>.txt`** (`<alvo>` = a WO aplicada, ex. `wo0110`)
```

## Edicao 7 — `.claude/skills/wrap/SKILL.md` (superficie instalada do KCM)

**Ancora:**

```
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm.txt`**
```

**Substituir por:**

```
- **Grave o relatório de trabalho em `../AAMMDD-HHMM-code-kcm-wrap-<alvo>.txt`** (`<alvo>` = a WO que fechou, ou duas ou três palavras com hífen)
```

## Edicao 8 — `CLAUDE.md` (raiz do KCM, superficie instalada)

**Ancora:**

```
Grave o MESMO relatório também em `../AAMMDD-HHMM-code-kcm.txt` (pasta-PAI do repo, fora do versionamento)
```

**Substituir por:**

```
Grave o MESMO relatório também em `../AAMMDD-HHMM-code-kcm-<ato>-<alvo>.txt` (pasta-PAI do repo, fora do versionamento) — `<ato>` do vocabulário fechado `apply` · `wrap` · `probe` · `explore`, `<alvo>` = a WO ou duas ou três palavras com hífen
```

---

## Fora de escopo

- **A skill `wrap`, linha do glob `../AAMMDD-HHMM-code-*.txt`.** Não muda: o glob casa com os nomes novos e a ordenação é por commit. Mexer ali sem necessidade é risco puro.
- **Renomear relatórios antigos** na pasta-pai. Nome de arquivo já escrito é registro do que aconteceu; o padrão novo vale do próximo em diante.
- **A forma do fecho de turno (B, A e a cláusula da frase copiável).** É a wo0111, de propósito separada — ver a análise, seção «Ordem de execução».
- **Estender o `C43` ao `meta/workorders/_TEMPLATE.md`** (`i-N60`). O gatilho dela é «a próxima WO que tocar o `validate.js`», e **esta WO toca**. Mesmo assim fica fora: o `C43` cobre superfícies instaladas do KCM, e acrescentar um alvo novo a ele no mesmo commit que reescreve o `C30` mistura duas mudanças de instrumento. **Reporte que o gatilho disparou** — a decisão de quando pagar é do dono.

## Armadilhas desta WO

- **São nove pontos e um deles é «não mexer».** Conte no fim: `AAMMDD-HHMM-code-<slug>` não pode sobrar em lugar nenhum do gerador **exceto** o glob `code-*.txt`.
- **A Edição 5 é código, não texto.** O `·` do vocabulário fechado (`apply` · `wrap` · `probe` · `explore`) entra **dentro de uma regex** — é um caractere literal e precisa chegar igual. Se o editor trocar o separador por outro caractere, o `C30` fica vermelho com mensagem confusa.
- **As Edições 2 e 3 são quase iguais** («Grave o MESMO relatório» na `apply-wo`, «Grave o relatório de trabalho» na `wrap`). Trocar uma pela outra deixa as duas skills com o ato errado, e o `C30` reescrito pega — mas só depois do build.
- **A ordem importa:** `node build.js` **antes** de `node validate.js`. O harness lê o `index.html` construído, não o template.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, e o `index.html` cresce de **836.117** para **836.745 bytes**. *(Número medido no sandbox. Divergência pequena é possível se a wo0109 tiver alterado algo que entre no build — ela não altera; divergência grande: **PARE e reporte**.)*
- [ ] `node validate.js` → **18/18 nichos · 100/100 checagens · 0 erros**. O total continua **100**.
- [ ] `grep -c 'AAMMDD-HHMM-code-<slug>\.txt' src/index.template.html` → **0** *(era 3: CLAUDE.md gerado, as duas skills; o quarto ponto é o texto do settings, que usa a mesma forma)*.
- [ ] `grep -c 'AAMMDD-HHMM-code-<slug>-' src/index.template.html` → **4** *(derivado do sandbox: CLAUDE.md, apply-wo, wrap, settings)*.
- [ ] `grep -c 'AAMMDD-HHMM-code-\*\.txt' src/index.template.html` → **1** *(o glob da `wrap`, intocado)*.
- [ ] `grep -rc 'code-kcm\.txt' CLAUDE.md .claude/skills/` → **0 em todos** *(os três pontos instalados migraram)*.
- [ ] `grep -c 'AAMMDD-HHMM-code-kcm-' CLAUDE.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md` → **1 em cada**.
- [ ] **Par negativo, se quiser confirmar a rede:** reverter só a Edição 2 e rodar `build` + `validate` deve dar **VERMELHO no C30**. Medido no sandbox. Desfaça a reversão depois.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js`, `CLAUDE.md`, `.claude/skills/apply-wo/SKILL.md`, `.claude/skills/wrap/SKILL.md` — mais a WO e a análise (novas). Nada além.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** que o gatilho da `i-N60` disparou (esta WO tocou o `validate.js`) e que a extensão do `C43` ficou fora de escopo.

**E grave este relatório já no padrão novo:** `../260903-HHMM-code-kcm-apply-wo0110.txt`. A WO que institui o padrão é a primeira a usá-lo.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js CLAUDE.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md meta/analises/260903-ANALISE-forma-do-fecho-e-nome-do-relatorio.md meta/workorders/260903-wo0110-nome-do-relatorio-com-ato-e-alvo.md
```

```
git commit -m "feat(kit): o nome do relatorio passa a dizer do que ele trata" -m "AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt, com ato de vocabulario fechado (apply, wrap, probe, explore). Antes, todo relatorio de um repo tinha o mesmo nome e so a hora os distinguia. Adotado do mapsmith, somando em vez de trocar: o slug fica, porque a pasta-pai e compartilhada por varios repos. Oito edicoes em cinco superficies do gerador e tres instaladas do KCM; o C30 passa a exigir o ato certo em cada skill. Harness 18/18 100/100."
```

```
git push
```
