# WO 0120 — a entrega que encolhe declara o que saiu, e ficam registradas as decisões do nicho companion

> **Tipo:** WO de CODIGO + registro. Toca `src/index.template.html`, `validate.js`, `meta/DECISIONS.md`, `meta/IDEAS.md` e `meta/ROADMAP.md`. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo padrao, esforco medio. Uma frase no gerador, um assert e tres registros.
> **Pre-requisito:** v1.122.0 com wo0119 aplicada, commit `4b6403e`, arvore limpa.
> **Base:** analise `260911-ANALISE-nicho-companion-de-jogo.md` (revisao 2) e as respostas do dono em `260911-2004.txt` e `260912-0842.txt`.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-12** (commit `4b6403e`), e aplicadas de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, `node build.js` (`index.html` 846.128 → **846.719 bytes**) e `node validate.js` **18/18 · 103/103 · VERDE**. **Par negativo medido:** trocar a frase da Edicao 1 pelo texto antigo deixa o `C19` **VERMELHO**.
>
> **Medicao previa — teto:** os cinco numeros do `C28` sao **identicos** (`padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`). A frase entra no **CEREBRO gerado**, nao em `buildInstr`.
>
> **Numero de checklist e DERIVADO**, com `grep -o ... | wc -l`.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

**A regra.** Um projeto do dono (o piloto `Fallout 76`) ficou com **quatro** arquivos de guia onde deviam existir **dois**, e os obsoletos eram os **MAIORES** — `guia-fase1.md` com 10.271 bytes contra 7.303 do substituto, `guia-fase2.md` com 14.404 contra 8.159. O assistente de la **mandou apagar os antigos**, em item de handoff explicito. O dono nao apagou, e a razao dele e correta: o substituto era menor, ele nao tinha lido, e ninguem explicou que o conteudo havia migrado para um `MECANICAS.md` novo.

**Mandar apagar nao basta.** O pedido de apagar e justamente o que fica sem lastro quando o substituto encolheu e ninguem diz por que. **Guardar os dois passa a ser a escolha racional** — e a partir dai o projeto tem duas fontes com o mesmo titulo, e o mais gordo e o errado.

**Os registros.** Tres decisoes do dono precisam existir em arquivo antes que esta conversa acabe, porque **nenhuma delas esta em lugar nenhum do repositorio** — sao fato relatado no chat, e fato relatado no chat nao existe para a proxima conversa.

## 2. Contexto factual

- **Medido — o teto nao e tocado.** A frase entra em `buildClaudeMd`, e numa parte **incondicional**: a primeira tentativa a colocou dentro de `if(codeModeOn())` e o `C19` ficou vermelho, porque ele confere o CEREBRO no modo padrao. *A regra vale para qualquer entrega ao dono, com executor ou sem — o lugar certo era antes da bifurcacao.*
- **Medido — a `i-N14` ja previa um vizinho deste nicho, e ninguem ligou os pontos.** A Fase 7 do ROADMAP tem, desde cedo, *«**Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia" (trilhas, fontes/cursos verificados, progresso, glossario)»*. **Progresso + fonte externa verificada + glossario sao exatamente tres das quatro pecas do companion.** A diferenca: a `i-N14` acompanha um **assunto** que o dono quer aprender; o companion acompanha um **artefato** que muda sozinho. Sao irmaos, e desenhar um sem olhar o outro produziria dois nichos com 70% de vocabulario repetido.
- **Relatado pelo dono (nao medido):** o projeto de hardware e **outro nicho**, provavelmente; o Fallout ele mesmo reorganiza, e quer o desenvolvimento do nicho terminado para passar os templates; os cinco nichos nunca rodados ficam registrados para teste futuro, **sem marcacao na interface**.
- **Decidido pelo dono, contra a minha recomendacao inicial:** `PATCHES.md` em vez de `ATUALIZACOES.md`. Eu havia argumentado que «patches» era especifico demais para um nicho generico — **mas o eixo generico caiu junto com a inferencia do hardware**. Com o nicho firmado em companion de **jogo**, o vocabulario do dominio e o certo, e `PATCHES.md` e a palavra que o proprio jogo usa.

---

## Edicao 1 — `src/index.template.html` · a regra da entrega que encolhe

**Ancora** (duas linhas seguidas, dentro de `buildClaudeMd`, na secao de fecho de conversa — **antes** do `if(codeModeOn())`):

```
    L.push(codeModeOn() ? "## Ao final da conversa, o assistente REGISTRA o que falta" : "## Ao final da conversa, o assistente entrega (como arquivos completos)");
    L.push("");
```

**Inserir IMEDIATAMENTE APOS essas duas linhas:**

```
    L.push("**Arquivo que SUBSTITUI outro e ficou MENOR vem com o que saiu e para onde foi** — uma linha basta: «encolheu 3 KB porque a parte de mecânicas migrou para `X.md`». Sem isso, quem recebe não consegue separar «enxugou» de «perdeu conteúdo», e **guardar os dois passa a ser a escolha racional** — foi assim que um projeto ficou com quatro guias onde deviam existir dois, sendo os obsoletos os MAIORES. Mandar apagar o antigo não basta: o pedido de apagar é justamente o que fica sem lastro quando o substituto encolheu e ninguém disse por quê.");
    L.push("");
```

> **NAO coloque isto dentro do `if(codeModeOn())`.** A regra vale para os dois modos — projeto com executor e projeto sem —, e o `C19` confere o CEREBRO no modo **padrao**. Foi exatamente esse o erro da primeira tentativa em sandbox.

## Edicao 2 — `validate.js` · o `C19` guarda a regra

**Ancora** (linha inteira, dentro do `check("C19 …")`):

```
  assert(/Esqueleto — copie e preencha/.test(c),"CEREBRO sem o esqueleto literal: o bloco volta a ser reconstituido de memoria");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0120: entrega que encolhe. Um projeto ficou com quatro guias onde deviam existir dois, e os
  // obsoletos eram os MAIORES: o substituto encolheu porque o conteudo migrou, e isso nao foi dito.
  assert(/SUBSTITUI outro e ficou MENOR/.test(c), "o CEREBRO nao exige declarar o que saiu quando o arquivo entregue encolhe: sem isso, quem recebe guarda os dois");
```

## Edicao 3 — `meta/DECISIONS.md` · a D-149

**Ancora** (inicio da ultima linha do arquivo):

```
**Desvio do texto literal da WO:** o log foi criado como `logs/2026-09-09.md`
```

**Inserir, APOS o fim dessa linha** (parágrafo novo, precedido de linha em branco e de `---`):

```

---

## D-149 — Nasce o nicho «companion de jogo», e a entrega que encolhe passa a declarar o que saiu

**Data:** 2026-09-12 · **Base:** `meta/analises/260911-ANALISE-nicho-companion-de-jogo.md` (revisão 2) · **Decisão do dono** em `260911-2004.txt` e `260912-0842.txt`.

**O caso.** O dono montou um projeto de guia/companion para o jogo Fallout 76 arrastando os templates do nicho **dev**, e o resultado ficou raso em quatro pontos que ele nomeou. A análise mediu o porquê.

**O achado que decide, e não é sobre jogo:** em todos os 18 nichos do kit, **o dono é a fonte da verdade** — ele escreve o livro, projeta o jogo, escreve o código. O documento envelhece só quando ele muda de ideia. Num companion, **a verdade é externa e se move sozinha, em calendário alheio**: o Fallout 76 tem quatro atualizações grandes mais quatro patches de apoio por ano [medido por pesquisa: Fallout Wiki e falloutbuilds, 2026], e elas mexem em armadura, explosivos e balanceamento de build — exatamente o que um guia ensina. Daí decorre tudo o que falhou: `SPEC.md` não serve porque não há o que especificar (ficou com o modelo intacto, 888 bytes), o `CHANGELOG` registra o projeto quando o que importa é o artefato, e um guia envelhece **sem ninguém tocá-lo**.

**Por que não refinar `game` ou `rpg`:** o nicho `game` **já tem `MECANICAS.md`** — e mesmo assim não serve, porque lá mecânicas são **decisão de design** (se documento e jogo divergem, o jogo está errado) e aqui são **fato externo observado** (se divergem, o documento está errado). É a mesma palavra com a direção da verdade invertida.

**Decidido:**
1. **Nicho novo**, eixo «companion de um artefato acompanhado que muda sozinho», **com o Fallout como caso único**. O projeto de hardware fica fora — [relatado pelo dono] será provavelmente outro nicho, e a versão 1 desta análise o tratava como segundo caso do mesmo nicho por **inferência não medida**, corrigida na revisão 2.
2. **Nomes, decididos pelo dono:** `rotas/` (não `guias/`, `detonado/` nem `walkthrough/`), `ALVO.md`, `ESCOLHAS.md`, `PATCHES.md`, `mecanicas/` como **pasta** com `INDICE.md`. Saem `SPEC.md`, `HISTORY.md`, `CHANGELOG.md`, `CONTEXT.md` e `DECISIONS.md`.
3. **`PATCHES.md` contra a recomendação inicial do chat**, e a razão está registrada: o argumento contra era que «patches» seria específico demais para um nicho genérico — **mas o eixo genérico caiu junto com a inferência do hardware**, e com o nicho firmado em jogo o vocabulário do domínio é o certo.
4. **`rotas/` porque detonado e walkthrough prometem o que o jogo-serviço não tem:** os dois significam passo a passo para **vencer** o jogo [medido por pesquisa: Wikipédia, *video game walkthrough* e *strategy guide*], e o Fallout 76 não tem «vencer». `rotas/` serve aos dois casos — um single-player com fim escreve ali um detonado, que é uma rota com destino.
5. **Os dois eixos ficam separados:** o **nome** carrega o assunto e o progresso (estável); o **conteúdo** carrega o carimbo do patch em que cada afirmação volátil foi verificada. Revalidar depois de um patch vira **busca por carimbos antigos**, não releitura — e o new game+ deixa de ser problema, porque só o `STATUS.md` reinicia.
6. **A regra da entrega que encolhe** (Edições 1 e 2 desta WO) vale para os 18 nichos desde já, independente do nicho novo.

**Pendente de desenho, e é o próximo passo:** o nicho **ainda não foi escrito**. E a `i-N14` («Aprendizado/Guia», Fase 7) é irmã dele — progresso, fonte externa verificada e glossário são três peças comuns —, então os dois têm de ser desenhados **olhando um para o outro**, sob pena de nascerem com 70% de vocabulário repetido.
```

## Edicao 4 — `meta/IDEAS.md` · a `i-N61`

**Ancora** (linha inteira do titulo da ideia mais recente):

```
## i-N60 — O modelo de WO instalado ficou 6.618 bytes atrás do gerado, e nenhum check olha para ele — IMPLEMENTADA na wo0116
```

**Inserir IMEDIATAMENTE ANTES dessa linha** (a lista corre em ordem decrescente), seguido de uma linha em branco:

```
## i-N61 — Cinco nichos nunca foram rodados, e o catálogo não distingue desenho de uso real — ABERTA, sem gatilho de data

**Relatado pelo dono em 2026-09-11**, ao decidir o nicho companion: `product`, `business`, `career`, `comics` e `cuisine` nunca foram usados em projeto real — do `cuisine` houve um teste único, não repetido. São cinco de dezoito.

**O que isso custa, e não é teto:** medido em 2026-09-12, as Instruções vão de `narrative` 6.622/6.900 (96%) a `custom` 3.297 (48%), e **o que limita o kit é o nicho mais pesado, não a quantidade** — nicho parado não aperta ninguém. O custo é de **confiança**: um catálogo em que um terço nunca rodou é um catálogo que ninguém sabe se funciona, e cada regra nova é escrita para dezoito nichos assumindo que os dezoito se comportam como os testados.

**Decisão do dono:** ficam registrados para teste futuro em projeto próprio, **sem marcação na interface** — nada de rótulo «não verificado» para o usuário final.

*Sem gatilho de data de propósito: o gatilho é o dono rodar um piloto de qualquer um deles. **Se algum for rodado, a primeira sessão dele é a mais valiosa do kit** — é a única chance de ver um nicho encontrar a realidade pela primeira vez, e isso não se repete.*
```

## Edicao 5 — `meta/ROADMAP.md` · a frente entra na Fase 7, colada na irmã

**Ancora** (a linha da `i-N14`, primeira da Fase 7):

```
- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia"
```

**Substituir o INICIO dessa linha por** (mantendo intacto todo o resto da linha, que continua depois de «Aprendizado/Guia»):

```
- **▶ EM DESENHO — nicho «companion de jogo» (D-149, 2026-09-12):** decidido, **ainda não escrito**. Eixo: acompanhar um artefato externo que muda sozinho. Documentos: `ALVO.md`, `STATUS.md`, `ESCOLHAS.md`, `PATCHES.md`, `GLOSSARY.md`, `IDEAS.md`, `ROADMAP.md`, `mecanicas/` (pasta + `INDICE.md`), `rotas/`, `logs/`. Caso único: o piloto `Fallout 76`. **Desenhar junto com a `i-N14` abaixo, que é irmã dela** — progresso, fonte externa verificada e glossário são peças comuns, e desenhar em separado produz dois nichos com 70% de vocabulário repetido.
- **Guias/tutoriais/wikis** (i-N14): nicho "Aprendizado/Guia"
```

---

## Fora de escopo

- **Escrever o nicho.** É a próxima frente e começa por ler `MECANICAS.md`, `CONTEXT.md` e os quatro guias do Fallout linha a linha — é de lá que sai o vocabulário.
- **Reorganizar o projeto Fallout.** [relatado pelo dono] ele mesmo cuida disso.
- **Marcar os cinco nichos na interface.** Decisão explícita do dono: não.
- **Rodar piloto de nicho parado.** `i-N61`, sem gatilho de data.

## Armadilhas desta WO

- **A Edição 1 é incondicional de propósito.** Dentro do `if(codeModeOn())` o `C19` fica vermelho — medido.
- **A Edição 3 insere no FIM do arquivo**, e o `DECISIONS.md` termina sem quebra de linha extra. Confira que o `---` e o título ficaram separados por linha em branco, como as outras entradas.
- **A Edição 5 substitui só o COMEÇO de uma linha**, preservando o resto. Se o texto da `i-N14` sumir, a edição comeu a linha inteira.
- **A `i-N61` entra ANTES da `i-N60`** — a lista corre em ordem decrescente.
- **Nada de `sed -i` no template** (CRLF).

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` de **846.128** para **846.719 bytes**.
- [ ] `node validate.js` → **18/18 · 103/103 · 0 erros**.
- [ ] Os cinco números do `C28` **inalterados**: `padrao 6622/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7508/7600`.
- [ ] `grep -o "SUBSTITUI outro e ficou MENOR" src/index.template.html | wc -l` → **1**.
- [ ] `grep -o "^## D-149" meta/DECISIONS.md | wc -l` → **1**.
- [ ] `grep -o "^## i-N61" meta/IDEAS.md | wc -l` → **1**, e a linha `## i-N60` vem **depois** dela.
- [ ] `grep -o "EM DESENHO — nicho «companion de jogo»" meta/ROADMAP.md | wc -l` → **1**, e a linha da `i-N14` continua existindo logo abaixo.
- [ ] **Par negativo (medido):** trocar a frase da Edição 1 pelo texto antigo → **VERMELHO no C19**. Desfaça.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js`, `meta/DECISIONS.md`, `meta/IDEAS.md`, `meta/ROADMAP.md` — mais a WO, a análise e o log (novos).

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · os cinco números do `C28` · o commit e o push, escrito **depois** de resolver o push.

**No `/wrap`, o log de hoje JÁ EXISTE** (`logs/2026-09-12.md`, escrito pelo chat como `## Conversa 1`): **acrescente `## Conversa 2`**, não crie arquivo novo nem reescreva o que está lá.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0120.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js meta/DECISIONS.md meta/IDEAS.md meta/ROADMAP.md meta/analises/260911-ANALISE-nicho-companion-de-jogo.md logs/2026-09-12.md meta/workorders/260912-wo0120-entrega-que-encolhe-e-nicho-companion.md
```

```
git commit -m "feat(kit): a entrega que encolhe declara o que saiu, e fica decidido o nicho companion" -m "Um projeto piloto ficou com quatro guias onde deviam existir dois, e os obsoletos eram os maiores: o substituto encolheu porque o conteudo migrou para outro arquivo, e isso nao foi dito ao lado do pedido de apagar. O CEREBRO passa a exigir que arquivo entregue que encolhe venha com o que saiu e para onde foi, guardado pelo C19. Registra tambem a D-149, que decide o nicho companion de jogo (eixo: artefato externo que muda sozinho, com a verdade fora do dono, ao contrario dos 18 nichos atuais), seus nomes e o funil dos dois eixos; a i-N61 sobre os cinco nichos nunca rodados; e a frente no ROADMAP, colada na i-N14, que e irma dela."
```

```
git push
```
