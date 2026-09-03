# WO 0108 — parqueia o canal de update com a causa declarada, e sincroniza o modelo de WO instalado

> **Tipo:** WO de DOC (registro).
> **Config sugerida:** modelo padrao, esforco medio. Nao ha codigo nem build.
> **Pre-requisito:** v1.122.0, commit `3ea47ad`, arvore limpa, harness verde (18/18 · 100/100).
> **Base:** analise `meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md` (entregue neste mesmo ciclo pelo chat) e a decisao do dono no turno de 2026-09-03.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE** o item e diga no relatorio.
>
> **Ancoras lidas em:** todas as ancoras abaixo foram lidas NESTE turno, no mount gerado em 2026-09-03 00:37 (commit `3ea47ad`), com `grep -c` retornando **1** para cada uma:
> - `meta/ROADMAP.md` — `1. **Canal para avisar um instalado de que algo já foi corrigido.**` … `É o item de maior custo acumulado e o único sem desenho — pede análise antes de WO.`
> - `meta/IDEAS.md` — `*Gatilho de retorno: a segunda vez que um projeto devolver feedback sobre defeito já fechado.*`
> - `meta/IDEAS.md` — `## i-N59 — O CHANGELOG perdeu 18 versões`
> - `meta/DECISIONS.md` — `a âncora é o contrato, o nome do check é comentário`
>
> **Numero de checklist e DERIVADO:** as contagens da conferencia foram simuladas contra o texto final DESTA WO, incluindo as frases que ela propria insere. Onde uma frase e citada por mais de um bloco, o esperado esta declarado item a item.
>
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro dos tres `meta/` que ela toca (ROADMAP, IDEAS, DECISIONS) — nao espere doc do chat para eles. Os dois arquivos que o **chat** entregou neste ciclo (a analise e o `_TEMPLATE.md`) nao sao editados por esta WO: entram so no `git add`, e a Edicao 4 e a conferencia de que chegaram ao disco.

---

## 1. Por que

O item 1 da Fase 6 foi analisado e **parqueado no mesmo dia**, por um fato que nao estava em lugar nenhum do repositorio: a defasagem entre levas e **deliberada** — o dono segura a atualizacao para acumular mudancas e nao obrigar o mesmo projeto a quatro merges numa semana. Sem esse registro, a frente volta em tres meses parecendo problema novo, e o ROADMAP continua chamando de «maior custo acumulado» o que e, em parte, o troco de uma economia escolhida.

Junto, um achado medido no mesmo turno e que **nao e melhoria de viagem, e defeito que bloqueia o proprio trabalho**: `meta/workorders/_TEMPLATE.md` esta **6.618 bytes atras** do modelo que o kit gera (5.020 contra 11.638 sem a linha de carimbo). Faltam ali, entre outros, o campo «Ancoras lidas em» **que a skill `apply-wo` instalada usa para RECUSAR uma WO** — a casa manda recusar um campo que o proprio modelo dela nao pede.

## 2. Contexto factual

Ordem dos fatos, com o que foi **medido** neste turno separado do que e **deduzido**:

1. **Medido.** Sandbox reconstruido do mount: `node build.js` reproduziu `index.html` com **836.117 bytes** (o mesmo numero que o CHANGELOG declara para a v1.122.0) e `node validate.js` fechou **18/18 · 100/100 · VERDE**. Baseline limpo — a unica falha da primeira rodada (`C43`, `.claude/settings.json` ausente) era artefato do sandbox e sumiu ao repor o arquivo.
2. **Medido.** `kit.buildCodeKitFiles().woTemplate` tem **11.661 bytes**; `meta/workorders/_TEMPLATE.md` tem **5.020**. Faltam no instalado: «Ancoras lidas em» com a clausula de recusa, «Afirmacao sobre artefato legivel», «Numero de checklist e DERIVADO», «Proximo comando», a secao «Inventario», a secao «Medicao previa», os cinco campos do passo de verificacao, a nota de CRLF, a WO no proprio `git add` e o relatorio depois do push.
3. **Medido.** Diferenca conferida linha a linha: **nenhuma linha do instalado se perde** na substituicao — as 6 linhas que nao aparecem identicas no novo sao as mesmas linhas reescritas com mais conteudo. Uma delas carrega a **cadencia revogada desde a v1.106.0** («a primeira sessao depois de uma transferencia»), que o gerado ja diz como «conversa».
4. **Medido.** Nenhum check abre `meta/workorders/_TEMPLATE.md`: os oito checks que citam `woTemplate` testam `kit.woTemplate`, o **gerado**. O `C43` — o unico que abre arquivo do proprio repo — cobre as duas skills e o `settings.json`, e nasceu (wo0087) porque *«as skills instaladas ficaram tres versoes atras do gerado sem ninguem notar»*. **O mesmo defeito reapareceu no vizinho que o check nao cobre.**
5. **Medido, e NAO e achado.** Os quatro carriers do carimbo de versao tem **zero** ocorrencias no repo do KCM — mas isso e **decisao registrada** na wo0106, que declarou o carimbo nas superficies instaladas do proprio KCM fora de escopo por assimetria de proposito (o KCM e o kit). Por isso o `_TEMPLATE.md` entregue pelo chat vem **sem** a linha de carimbo que o gerado traz: desvio consciente, declarado aqui, para nao contrariar a wo0106 por descuido.
6. **Deduzido.** Estender o `C43` ao `_TEMPLATE.md` fecharia a classe inteira, mas e mudanca de codigo com escolha de desenho (quais clausulas portadoras conferir) — fica como `i-N60` com gatilho, nao entra nesta WO.

---

## Edicao 1 — `meta/ROADMAP.md` · Fase 6, item 1 vira parqueado com gatilho

**Ancora** (item 1 da lista «▶ Aberto, na ordem que a evidência sugere», na `## ▶ Fase 6`):

```
1. **Canal para avisar um instalado de que algo já foi corrigido.** O kit é *pull* e por leva; entre levas os projetos reresolvem o resolvido. **Já aconteceu três vezes** (mapsmith 19/08, flatdrop duas vezes). É o item de maior custo acumulado e o único sem desenho — pede análise antes de WO.
```

**Substituir por:**

```
1. **Canal para avisar um instalado de que algo já foi corrigido. ⏸ PARQUEADO em 2026-09-03, com gatilho — ver `meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md` e a D-138.** O kit é *pull* e por leva; entre levas os projetos reresolvem o resolvido. **Aconteceu três vezes** (mapsmith 19/08, flatdrop duas vezes), e o custo dos três casos continua real. **O que a análise mudou:** a janela entre levas **é deliberada** — o dono a declarou no turno em que a análise foi entregue, e a razão é evitar que o mesmo projeto pague quatro merges numa semana. Parte do custo é, portanto, **preço escolhido de uma economia**, não sintoma de defeito, e este item deixa de ser «o de maior custo acumulado» sem que nenhum dos fatos medidos mude. As duas peças recomendadas ficam **desenhadas e não aplicadas**: a lista «já corrigido» no manifesto do pacote (custo de teto **zero**) e o gatilho no receptor (custo de teto não medido — é a peça cara, e é a que o dono recusa por ora, com razão pelo que se sabe hoje). *Gatilho de volta, mais alto que o anterior de propósito: **um projeto instalado pagar uma WO** por defeito que o kit já corrigiu — trabalho executado, não item de feedback. O gatilho antigo já disparou e foi ele que produziu a análise; repeti-lo reabriria a frente pelo mesmo custo que o dono decidiu pagar.*
```

## Edicao 2 — `meta/IDEAS.md` · desfecho do item (9) da extracao do Mapsmith 11

**Ancora** (ultima frase do item **(9)**, dentro da entrada `### 2026-08-20 — Extração do Mapsmith 11`):

```
*Gatilho de retorno: a segunda vez que um projeto devolver feedback sobre defeito já fechado.*
```

**Inserir IMEDIATAMENTE APOS** (na mesma linha nao — paragrafo novo, com uma linha em branco antes):

```

**Desfecho (2026-09-03): o gatilho disparou, a análise saiu no mesmo dia — e a frente foi parqueada, porque a causa que faltava não era técnica.** O dono declarou que **a janela entre levas é deliberada**: ele segura a atualização para acumular o máximo de mudanças e não obrigar o mesmo projeto a merges quatro vezes numa semana. Isto requalifica o item (9) sem apagar nada do que ele mediu: os três casos custaram o que custaram, mas **o kit não estava cego, estava esperando** — e quem decide o tamanho da janela é a mesma pessoa que aplicaria as correções. A análise (`meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md`) deixa as duas peças desenhadas e não aplicadas, e o gatilho de volta sobe de patamar: **um projeto pagar uma WO** por defeito já corrigido, não mais um item de feedback. Ver D-138.
```

## Edicao 3 — `meta/IDEAS.md` · nasce a `i-N60`

**Ancora** (titulo da ideia imediatamente anterior — a nova entra ANTES dela, para que a lista siga em ordem decrescente):

```
## i-N59 — O CHANGELOG perdeu 18 versões
```

**Inserir IMEDIATAMENTE ANTES** (bloco completo, com uma linha em branco depois dele):

```
## i-N60 — O modelo de WO instalado ficou 6.618 bytes atrás do gerado, e nenhum check olha para ele — ABERTA, com gatilho

**Medido em 2026-09-03, em sandbox reconstruído do mount `3ea47ad`:** `meta/workorders/_TEMPLATE.md` tinha **5.020 bytes** contra **11.638** do que o kit gera. Faltava ali, entre outras coisas, o campo **«Âncoras lidas em» — que a skill `apply-wo` instalada usa para RECUSAR uma WO**. A casa mandava recusar um campo que o próprio modelo dela não pedia, e o arquivo ainda carregava uma linha revogada desde a v1.106.0 («a primeira sessão depois de uma transferência»). O conteúdo foi sincronizado no mesmo ciclo (wo0108).

**O achado que fica não é o atraso, é a cegueira.** Os oito checks que citam `woTemplate` testam `kit.woTemplate` — o **gerado**. O `C43` é o único que abre arquivo do próprio repositório, e cobre as duas skills e o `settings.json`. Ele nasceu (wo0087) porque *«as skills instaladas ficaram três versões atrás do gerado sem ninguém notar»* — e o mesmo defeito reapareceu **no vizinho que ele não cobre**. Corrigir o arquivo não impede a terceira ocorrência; o que impediria é o `C43` passar a conferir cláusulas portadoras também no `meta/workorders/_TEMPLATE.md`.

*Não vira WO agora porque é mudança de código com escolha de desenho — quais cláusulas portadoras conferir, e o que fazer com as diferenças legítimas entre a casa e o gerado (o carimbo de versão é uma delas, fora de escopo por decisão da wo0106). **Gatilho: a próxima WO que tocar o `validate.js`** — o custo de acrescentar um trecho ao `C43` é baixo o bastante para pegar carona, e alto demais para justificar um ciclo próprio.*

```

## Edicao 4 — `meta/DECISIONS.md` · D-138

**Ancora** (fim da entrada D-137, ultima do arquivo):

```
a âncora é o contrato, o nome do check é comentário
```

**Inserir IMEDIATAMENTE APOS o paragrafo que contem a ancora** (bloco completo, precedido de uma linha em branco). *Atencao ao nivel de titulo:* as quatro ultimas entradas do arquivo (D-135, FIX-036, D-136, D-137) usam `###`, enquanto D-001 a D-134 usam `##`. **Use `##`** — e reporte no relatorio que a divergencia continua nas quatro anteriores, que esta WO nao corrige.

```
## D-138 — O canal para avisar um instalado é PARQUEADO, porque a janela entre levas é deliberada

**Data:** 2026-09-03 · **Base:** `meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md` · **Supersede:** nada; requalifica o item 1 da Fase 6 do ROADMAP.

**Decisão:** não construir, por ora, nem a lista «já corrigido» no manifesto (O3) nem o gatilho no receptor (O5). As duas ficam **desenhadas e não aplicadas** na análise.

**Por quê, e é um fato que nenhum documento tinha:** a distância entre levas de update **é escolha do dono** — ele acumula mudanças de propósito para não obrigar o mesmo projeto a quatro merges numa semana. Com isso, o problema muda de natureza: não há um agente desinformado a ser avisado; **o kit não estava cego, estava esperando**, e quem decide o tamanho da janela é a mesma pessoa que aplicaria as correções. O custo medido dos três casos (mapsmith 19/08; FlatDrop com um pedido pendurado numa v1.97.0 que nunca foi entregue, 23 versões depois; a devolução do `ahead/behind` paga duas vezes) continua real e não é apagado — é, em parte, o troco dessa economia.

**Por que não é abandono nem pendência:** o kit exige um terceiro estado desde o caso do i18n, que ficou aberto por inação durante 88 versões. Esta decisão é o terceiro estado: **parqueada com gatilho**. *Gatilho de volta: um projeto instalado pagar uma **WO** por defeito que o kit já corrigiu — trabalho executado, não item de feedback.* O gatilho anterior («a segunda vez que devolverem feedback sobre defeito fechado») foi cumprido e produziu a análise; mantê-lo reabriria a frente pelo mesmo custo que o dono decidiu pagar.

**Voto contrário registrado, para não voltar como dúvida:** o O5 é a única peça que alcançaria o caso de janela curta (o mapsmith redescobriu o defeito **um dia** depois da correção, sem pacote no meio). Ele foi recusado pelo custo em instrução nos 18 nichos, não por não funcionar. Se o gatilho disparar, é por ele que a frente reabre.
```

---

## Fora de escopo

- **Estender o `C43` ao `meta/workorders/_TEMPLATE.md`.** É o conserto real da classe (Contexto 4/6), e fica na `i-N60` com gatilho declarado. Esta WO não toca `validate.js` nem `src/`.
- **Carimbo de versão nas superfícies instaladas do KCM.** Fora de escopo por decisão da wo0106; o `_TEMPLATE.md` entregue vem sem a linha propositalmente.
- **Corrigir o nível de título das quatro últimas entradas do `DECISIONS.md`** (`###` onde o resto usa `##`). Reportar, não consertar — é varredura própria e não deve viajar de carona num registro.
- **O `KIT_VERSION 1.119.0` congelado na linha 4 do `meta/STATUS.md`**, três versões atrás do que a mesma linha declara. Achado do turno anterior, também não corrigido aqui.
- Qualquer implementação do O3 ou do O5.

## Armadilhas desta WO

- **A âncora da Edição 2 termina em `.*` e a frase inteira aparece uma única vez** — conferido com `grep -c` = 1. Mas ela é uma frase em itálico dentro de um parágrafo longo: insira o texto novo como **parágrafo separado**, não no fim da mesma linha.
- **A âncora da Edição 4 é uma frase que também existe no `meta/STATUS.md`.** Dentro do `DECISIONS.md` ela é única (`grep -c` = 1). Edite o arquivo certo.
- **Ordem das ideias no `IDEAS.md`:** a `i-N60` entra **antes** da `i-N59`, porque a lista corre em ordem decrescente. Inserir depois inverte a ordem e é exatamente o defeito que a wo0107 teve de conferir.
- **Os dois arquivos do chat não são gerados por esta WO.** Se algum não estiver no disco na hora do `add`, **commite o resto e relate** — não suponha que chegou.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** cinco arquivos: `meta/ROADMAP.md`, `meta/IDEAS.md`, `meta/DECISIONS.md`, `meta/workorders/_TEMPLATE.md`, `meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md` — mais a própria WO. Nada além.
- [ ] `grep -c "PARQUEADO em 2026-09-03" meta/ROADMAP.md` → **1**.
- [ ] `grep -c "a janela entre levas é deliberada" meta/ROADMAP.md meta/IDEAS.md meta/DECISIONS.md` → ROADMAP **0**, IDEAS **1**, DECISIONS **1**. *Números derivados de simular esta WO contra os arquivos vivos, não estimados — e a primeira versão deste item dizia «DECISIONS 0», errado: a frase está no **título** da D-138, que esta mesma WO insere. O ROADMAP é o único 0 porque lá o negrito parte a frase — o texto inserido é `a janela entre levas **é deliberada**`, e os dois asteriscos no meio impedem o casamento literal. Se algum dos três vier diferente, é a inserção que saiu do lugar — **PARE e reporte**.*
- [ ] `grep -c "^## D-138" meta/DECISIONS.md` → **1**, e com **dois** `#`, não três.
- [ ] `grep -c "^## i-N60" meta/IDEAS.md` → **1**, e a linha `## i-N59` vem **depois** dela no arquivo.
- [ ] `grep -c "Ancoras lidas em" meta/workorders/_TEMPLATE.md` → **1** (era **0** antes; é o sinal de que o arquivo do chat chegou ao disco).
- [ ] `grep -c "primeira sessao depois de uma transferencia" meta/workorders/_TEMPLATE.md` → **0** (era 1: a linha revogada desde a v1.106.0 saiu junto).
- [ ] `wc -c meta/workorders/_TEMPLATE.md` → **11.638** ± o que a normalização de fim de linha do `.gitattributes` (`* text=auto`) alterar. Divergência maior que isso: **PARE e reporte** — o arquivo errado foi salvo.
- [ ] **WO só de doc:** não precisa de build. A rede é o `git diff`. *(Nada em `src/` foi tocado; o harness de referência deste ciclo é o do sandbox do chat: 18/18 · 100/100 · verde, sobre `3ea47ad`.)*

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · resultado da conferência acima · o commit e o push. Escreva-o **depois** de resolver o push. **Reporte também**, sem corrigir: se as quatro últimas entradas do `DECISIONS.md` continuam em `###`, e se o `KIT_VERSION` da linha 4 do `STATUS.md` continua em 1.119.0.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/ROADMAP.md meta/IDEAS.md meta/DECISIONS.md meta/workorders/_TEMPLATE.md meta/analises/260903-ANALISE-canal-para-avisar-o-instalado.md meta/workorders/260903-wo0108-parqueia-canal-de-update-e-sincroniza-modelo-de-wo.md
```

```
git commit -m "docs(roadmap): parqueia o canal de update com a causa declarada e sincroniza o modelo de WO" -m "A janela entre levas e deliberada: o dono acumula mudancas para nao obrigar o mesmo projeto a quatro merges numa semana. O item 1 da Fase 6 vira parqueado com gatilho (D-138), a analise entra em meta/analises, e o modelo de WO instalado sai de 5020 para 11638 bytes, ganhando o campo Ancoras lidas em que a skill apply-wo usa para recusar. Abre i-N60 sobre o C43 nao cobrir o modelo instalado."
```

```
git push
```
