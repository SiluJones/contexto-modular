# WO 0113 — o resumo do fecho para de ensinar a forma errada, e o funil cobre os quatro estados

> **Tipo:** WO de CODIGO. Toca `src/index.template.html` e `validate.js`. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo padrao, esforco medio. Duas edicoes de texto e dois blocos de assert.
> **Pre-requisito:** v1.122.0 com wo0112 aplicada, commit `a55b8b1`, arvore limpa.
> **Base:** exploracao `260904-2340-code-kcm-explore-primeira-passada.txt` (candidatos 1 e 2), decidida pelo dono. A `i-N60` e a IDEA-137 ficam para depois.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-04 22:27** (commit `a55b8b1`). `grep -c` = **1** para cada, e ambas aplicadas de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** as quatro edicoes foram executadas em sandbox, com `node build.js` (`index.html` 844.912 -> **845.091 bytes**) e `node validate.js` (**18/18 · 101/101 · VERDE**). **Par negativo medido:** devolver «(so o que se aplica)» ao resumo deixa o `C19` **VERMELHO**.
>
> **Medicao previa — teto, e este e o ponto delicado desta WO:** a Edicao 1 entra em `buildInstr`, que **tem** teto. A primeira redacao **estourou**: `C28` acusou `narrative combo 7616 > 7600`. Foi encurtada duas vezes ate caber. Numeros finais medidos: **`padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`** — a folga do combo cai de **109 para 92**.
>
> **Numero de checklist e DERIVADO:** contagens tiradas do sandbox depois de aplicar esta WO.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

**Candidato 1 — a wo0111 consertou o lado errado primeiro.** Ela trocou «emitindo so as linhas que se aplicam» por condicao observavel no CEREBRO, e o **resumo do fecho nas Instrucoes** ficou intacto dizendo `- **Fecho do turno** (só o que se aplica): Próximo · Estado (…) · Arquivar/Manter · Config por raia · Handoff. Formato no CEREBRO.` Duas coisas erradas ali:

- **«So o que se aplica» e a mesma clausula de julgamento**, com outras palavras — e as **Instrucoes sao lidas a cada mensagem**, enquanto o CEREBRO e lido no ritual.
- **O resumo lista os cinco campos separados por «·»**, e por isso **ensina** um fecho em linha corrida. Pior: por parecer completo, ele impede a ida ao CEREBRO. «Formato no CEREBRO» soa como referencia opcional.

Isto **nao e hipotese nova**: esta escrito no `meta/IDEAS.md` do mapsmith, secao «Feedback para o Kit», datado de **2026-08-28**, com custo medido de tres turnos deformados — e o dono relata a mesma deformacao no projeto visualizador, de forma independente. **Tres projetos, mesma deformacao, e o feedback ficou uma semana sem ser lido.** A escolha adotada aqui e a sugestao (1) deles: **o resumo nao lista os campos e manda copiar o esqueleto**.

**Candidato 2 — o funil nega commit a dois estados e cala sobre os outros dois.** A frase lista quatro (`exploração → sonda → instrumento → análise → WO`) e diz que exploracao e sonda «nao tem commit, nao mudam o repositorio», com essa negativa encostada na palavra «analise», no mesmo periodo. A analise vai para `meta/analises/`, que **e** versionado. **Mordeu no proprio KCM:** nos ultimos quatro ciclos a analise entrou no `git add` duas vezes (wo0110, wo0112) e ficou de fora uma (wo0109) — e ali eu escrevi que ela «segue em discussao», e o Code repetiu «decisao do dono», atribuindo ao dono uma omissao que era minha. **O mapsmith relatou exatamente este erro, com o mesmo desenrolar, em 2026-08-30.**

## 2. Contexto factual

- **Medido — a variante escapou do grep.** O checklist da wo0111 conferia `grep -c "só as linhas que se aplicam"` → 0. A frase do resumo e «**só o que se aplica**»: nao casa. Regra reescrita em dois lugares com redacoes diferentes so e alcancada por busca que cobre as variantes.
- **Medido — a folga que importava nao era a que eu olhei.** O `narrative` tem folga de **295** no padrao, e eu dimensionei por ela. O `C28` reprovou pelo **combo** (padrao + Code + ASU), cuja folga era **109**. **A folga que vale e a MENOR das cinco**, e no kit ela e sempre a do combo. A redacao final custa **17** caracteres no padrao e **17** no combo.
- **Medido — o texto novo cabe e o antigo nao volta em silencio:** os asserts da Edicao 3 conferem a **linha do resumo**, isolada, e nao o arquivo inteiro. Assert sobre o arquivo daria verde com a frase errada morando noutra secao.
- **Correcao de genealogia, registrada porque muda como lemos o material:** a skill de exploracao e as sondas em script **nasceram no mapsmith**, nao no KCM — o Code de la roda os scripts na maquina e devolve relatorio ao chat. O KCM ja recebeu esse material uma vez, em sessao anterior, e **fez uma passada rasa**. A wo0112 foi a segunda tentativa de absorver a mesma coisa. Isso e dado sobre o processo de absorcao, e nao sobre a skill.

---

## Edicao 1 — `src/index.template.html` · o resumo do fecho nas Instrucoes

**Ancora** (linha inteira, dentro de `buildInstr`):

```
    lines.push("- **Fecho do turno** (só o que se aplica): Próximo · Estado (abre com `Base:` — o lido NESTE turno, com data e commit) · Arquivar/Manter · Config por raia · Handoff. Formato no CEREBRO.");
```

**Substituir por:**

```
    lines.push("- **Fecho do turno** — formato fixo (divisor, listas, condição por linha) que não cabe aqui: **copie o esqueleto do CEREBRO**, não reconstitua de memória. `Estado` abre com `Base:` — o lido NESTE turno.");
```

> **Nao alongue este texto.** Ele foi encurtado **duas vezes** contra o `C28`: a primeira redacao estourou o combo do `narrative` (7616 > 7600) e a segunda passou raspando (7527). Esta cabe com folga de 92. Qualquer palavra a mais aqui custa nos 18 nichos ao mesmo tempo.

## Edicao 2 — `src/index.template.html` · o funil cobre os quatro estados

**Ancora:**

```
**Exploração e sonda não são ordem de trabalho:** não têm âncora, não têm commit, não mudam o repositório.
```

**Substituir por:**

```
**Análise e ordem de trabalho mudam o repositório e vão com commit; exploração e sonda, não:** estas duas não têm âncora, não têm commit, não mudam o repositório — a análise vai para `meta/analises/`, que é versionado, e entra no `git add` da WO que nasce dela.
```

## Edicao 3 — `validate.js` · o `C19` passa a olhar o resumo nas Instrucoes

**Ancora** (linha inteira, dentro do `check("C19 …")`):

```
  assert(/Esqueleto — copie e preencha/.test(c),"CEREBRO sem o esqueleto literal: o bloco volta a ser reconstituido de memoria");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0113: o RESUMO nas Instrucoes e lido a cada mensagem, e era ele que ensinava a forma errada.
  // Nenhuma variante de "se aplica/se aplicam" pode voltar ali, e o resumo nao lista os campos
  // separados por "·" — resumo que parece completo e o que impede alguem de ir ao CEREBRO.
  const instr = T.buildInstr(T.normNiche(T.NICHES.dev));
  const linhaFecho = (instr.split("\n").find(l => /\*\*Fecho do turno\*\*/.test(l)) || "");
  assert(linhaFecho.length > 0, "as Instrucoes perderam a linha do Fecho do turno");
  assert(!/se aplica|se aplicam/.test(linhaFecho), "o resumo do fecho voltou a condicionar por julgamento («so o que se aplica»): a clausula que a wo0111 tirou do CEREBRO nao pode viver no resumo");
  assert(/copie o esqueleto do CEREBRO/.test(linhaFecho), "o resumo do fecho nao manda copiar o esqueleto: resumo que parece completo impede a ida ao CEREBRO");
  assert(!/Arquivar\/Manter · Config/.test(linhaFecho), "o resumo voltou a listar os campos separados por ·, que e o que ensina o fecho em linha corrida");
```

> **Por que a linha isolada, e nao o arquivo:** um assert sobre o texto inteiro das Instrucoes daria verde com a frase errada morando em outra secao. O que se quer garantir e a forma **daquela** linha.

## Edicao 4 — `validate.js` · o `C101` confere a cobertura de commit no funil

**Ancora** (linha inteira, dentro do `check("C101 …")`):

```
  assert(/carimbo vem PRIMEIRO e o tipo depois/.test(cmd), "o CEREBRO nao traz a errata do nome (unica x serie)");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0113: o funil cobre os QUATRO estados quanto a commit, nao so os dois que nao tem.
  assert(/Análise e ordem de trabalho mudam o repositório e vão com commit/.test(cmd), "o funil voltou a negar commit a dois estados sem dizer nada dos outros dois: a analise vai para meta/analises/, que e versionado");
```

> Os dois checks continuam sendo **um cada**. O total permanece **101**.

---

## Fora de escopo

- **A `i-N60`** e a **IDEA-137** (previsao numerica de checklist) — decisao do dono: depois. **Reporte que a `i-N60` disparou pela quarta vez**, ja que esta WO toca o `validate.js`.
- **O CEREBRO do proprio KCM nao ter secao de «Medição delegada» nem «Sonda e exploração»** — achado desta leitura, **medido**: `grep -ci` de «sonda», «exploração», «quem tem o disco mede» e «candidatos a checagem` no `meta/CEREBRO.md` da casa devolve **0** em todas. O kit ensina as duas secoes e a casa nao as tem. E frente propria, com decisao do dono, e nao entra aqui.
- **A segunda sugestao do mapsmith** para o resumo (carregar o que ele nao tem, em vez de mandar ler). Foi descartada pelo teto: ela e mais longa, e a medicao mostrou que nao ha espaco.

## Armadilhas desta WO

- **A Edicao 1 e a unica coisa nesta WO que custa teto**, e ja foi calibrada. Se precisar alterar uma palavra, **remeça a medicao do `C28`** — nao confie na folga do padrao (278), confie na do combo (92).
- **A Edicao 3 usa `\n` e `\*\*` dentro de regex em JavaScript.** No arquivo aplicado, `linhaFecho` divide por `"\n"` (com uma barra) e a regex e `/\*\*Fecho do turno\*\*/`. Se o editor duplicar as barras, o assert nunca casa e o check fica vermelho com mensagem enganosa.
- **A Edicao 4 tem acento dentro da regex** (`Análise`, `repositório`, `vão`). Tem de chegar literal.
- **NAO use `sed -i` no `src/index.template.html`.** O arquivo e CRLF; o `sed` do Git Bash reescreve o arquivo inteiro em LF e o `index.html` encolhe alguns milhares de bytes — foi o incidente da wo0112. Use edicao pontual. *(O mapsmith tem a mesma regra escrita para os arquivos CRLF dele: ancora de uma linha so, e `grep` sem `$`.)*
- **`build` antes de `validate`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` de **844.912** para **≈845.091 bytes**.
- [ ] `node validate.js` → **18/18 · 101/101 · 0 erros**.
- [ ] O `C28` reporta exatamente **`padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`**. *Se o combo vier acima de 7600, a Edição 1 foi alongada no caminho: **PARE**.*
- [ ] `grep -c "só o que se aplica" src/index.template.html` → **0** *(era 1)*.
- [ ] `grep -c "copie o esqueleto do CEREBRO" src/index.template.html` → **1**.
- [ ] `grep -c "Análise e ordem de trabalho mudam o repositório" src/index.template.html` → **1**.
- [ ] **Par negativo (medido no sandbox):** inserir `(só o que se aplica)` de volta na linha do resumo e rodar `build` + `validate` deve dar **VERMELHO no C19**, com a mensagem sobre condicionar por julgamento. Desfaça depois — e **não com `sed -i`**.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js` — mais a WO (nova). Nada além.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · os cinco números do `C28` · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** que a `i-N60` disparou pela quarta vez.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0113.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js meta/workorders/260905-wo0113-resumo-do-fecho-e-funil.md
```

```
git commit -m "fix(kit): o resumo do fecho para de ensinar a forma errada, e o funil cobre os quatro estados" -m "A wo0111 tirou a clausula de julgamento do CEREBRO e deixou a variante no resumo das Instrucoes, que e lido a cada mensagem: o resumo dizia so o que se aplica e listava os cinco campos separados por ponto medio, ensinando um fecho em linha corrida. Agora ele nao lista os campos e manda copiar o esqueleto. O funil passa a dizer que analise e ordem de trabalho vao com commit, cobrindo os quatro estados. Os dois defeitos foram reportados pelo mapsmith em agosto. C19 passa a olhar a linha do resumo nas Instrucoes e C101 a cobertura do funil. Teto recalibrado: combo 7508/7600."
```

```
git push
```
