# WO 0114 — a casa passa a carregar o que o kit ensina: medição delegada e o par sonda/exploração

> **Tipo:** WO de DOC (a casa vive o que publica). Toca **apenas** `meta/CEREBRO.md`. Sem `src/`, sem `validate.js`.
> **Config sugerida:** modelo padrao, esforco medio. Uma insercao grande de texto e uma correcao de uma palavra.
> **Pre-requisito:** v1.122.0 com wo0113 aplicada, commit `512e400`, arvore limpa.
> **Base:** decisao do dono (opcao **a**, transplante adaptado), a partir da medicao da exploracao de 04/09 e da leitura do `mapsmith` (commit `79974f2`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se as secoes ja existirem, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-05** (commit `512e400`). `grep -c` = **1** para cada, e a insercao foi aplicada de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** as duas edicoes foram executadas em sandbox e `node validate.js` seguiu **18/18 · 101/101 · VERDE**. `meta/CEREBRO.md` vai de **40.691** para **46.990 bytes**, e de **15** para **17** secoes de primeiro nivel. **Nenhum check le este arquivo** — o verde apenas confirma que nada mais foi afetado; a rede desta WO e o `git diff`.
>
> **Custo de teto: ZERO.** O `meta/CEREBRO.md` e o CEREBRO **da casa**: nao e gerado, nao vai para nenhum nicho e nao entra em `buildInstr`. Os cinco numeros do `C28` nao se movem.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

**Medido, e o numero e zero:** `grep -ci` no `meta/CEREBRO.md` devolve **0** para «sonda», **0** para «exploração», **0** para «quem tem o disco mede» e **0** para «candidatos a checagem». O CEREBRO **gerado** tem 24 secoes; o da casa, 15. Nao e redacao diferente — e ausencia.

O kit ensina as duas secoes para os 18 nichos, e a casa opera sem nenhuma das duas. Como o KCM e o unico projeto que **nunca recebe pacote de update**, nada corrige isso sozinho: ou entra por WO, ou nao entra.

E o KCM e, entre todos, o projeto que **mais depende de medicao delegada** — todo turno do chat depende de um relatorio do Code ou de um sandbox reconstruido do mount. A regra que faltava e exatamente a que governa esse trabalho.

## 2. Contexto factual

- **Medido — a genealogia, para o registro nao mentir.** As duas secoes nasceram no `mapsmith`, nao aqui: a skill de exploracao e as sondas em script foram desenvolvidas la, e o Code de la roda os scripts na maquina e devolve relatorio ao chat. O KCM ja recebeu esse material uma vez, em sessao anterior, e **fez uma passada rasa**; a wo0112 foi a segunda tentativa, e esta e a terceira — a que finalmente traz o texto para dentro da casa.
- **Medido — o que foi lido para redigir:** a secao «Medição delegada» do `CEREBRO.md` deles (linhas 265–275), a secao «Sonda e exploração» (276–296), a **DEC-0029** (exploracao produz hipotese, script produz evidencia; as sete conferencias da sonda foram enumeradas a mao e por isso o FIX-0008 sobreviveu), a **DEC-0042** (medicao delegada nao ganha artefato proprio) e a **DEC-0051** (todo numero publicado carrega como foi obtido; medicao incompleta sai declarada).
- **Adaptacao propria do KCM, e nao esta no texto de ninguem:** as marcas de origem passam de tres para **quatro**. La sao `[medido]`, `[deduzido]`, `[relatado]`. Aqui o chat **consegue** medir, reconstruindo o repo em sandbox a partir do mount — e o mount chega achatado, entao o sandbox **pode divergir do repositorio real**. Caso medido: a wo0111 previu 839.264 bytes, o Code obteve 839.262, e a diferenca eram 2 bytes de uma linha em branco que so existia no meu sandbox. Dai `[medido no repo]` e `[medido em sandbox]` serem marcas distintas.
- **Medido — o paragrafo sobre as 101 checagens nao e retorica.** Os tres exemplos citados sao deste repositorio e estao nos registros: o `_TEMPLATE.md` 6.618 bytes atras (wo0108), as quatro decisoes em `###` (wo0109) e o `KIT_VERSION` congelado dentro da linha que o `C54` le (wo0109). Os tres apareceram **de raspao**.
- **Achado de raspao NESTA leitura, e por isso a Edicao 2 existe:** o comando de build documentado no CEREBRO da casa diz «casco + **17** modulos». Sao **18** — o proprio `build.js` imprime «18 modulo(s)» a cada execucao. Uma ocorrencia viva (linha 199). *A outra mencao a «17 módulos» (linha 21) e **relato historico** dentro de «Mudanças nesta revisão (v1.34.0)», quando eram 17 mesmo: **nao se toca**, registro e congelado.*

---

## Edicao 1 — `meta/CEREBRO.md` · as duas secoes entram antes da Validacao

**Ancora** (titulo de secao, `grep -c` = 1):

```
## ✅ Validação (sempre antes de publicar)
```

**Inserir IMEDIATAMENTE ANTES dessa linha** o bloco abaixo, seguido de uma linha em branco. *(O lugar e proposital: medir e explorar vem antes de validar, e a secao de Validacao passa a ser o terceiro estado do funil no proprio documento.)*

```
## 📏 Medição delegada (quem tem o disco mede, quem tem o contexto decide)

O chat lê o que chega pelo mount — achatado, sem árvore de pastas, sem histórico do git — e tem teto de contexto. O Code lê o repositório inteiro, no Windows, e não tem nenhum dos dois limites. Quando o dado que falta é **estado de arquivo** (quantas linhas, quantos bytes, se existe, o que declara), a saída não é deduzir nem pedir upload de arquivo grande: é **mandar medir**.

- **A regra:** quem tem acesso ao disco mede, quem tem contexto decide. Nunca afirme estado de arquivo que você não leu — nem para justificar uma escolha, nem para escrever caminho «mais ou menos certo». Caminho com `...` no meio é o sintoma clássico de estado deduzido.
- **O pedido de medição não é ordem de trabalho.** Não tem âncora, não tem edição, não tem commit. Se virar WO, você já estará escrevendo a ordem sem os números de que ela precisava — que é exatamente o erro que a medição evita.
- **Peça número cru, não interpretação.** Diga o comando ou o que contar, e peça de volta o valor **e o comando que o produziu**. Executor que interpreta devolve opinião no lugar de dado — e opinião de quem mediu é a mais difícil de contestar depois, porque parece medida.
- **Onde o pedido mora e onde o número pousa.** O pedido vai **dentro da WO**, na seção «Medição prévia», ou numa WO cujo único trabalho seja medir. O resultado sai no **relatório da execução** — `.txt` na pasta-pai, não versionado. O que sobrevive à leitura o chat leva ao meta canônico: `DECISIONS.md` se mudou uma decisão, `IDEAS.md` se mudou o destino de uma ideia, «Armadilhas» da WO se revelou risco. **Não crie pasta nem tipo de artefato novo para acomodar uma medição** — o custo nunca é o arquivo, é a estrutura que passa a pedir manutenção para sempre. **Número medido e não registrado volta a ser deduzido no turno seguinte.**
- **Todo número publicado carrega COMO foi obtido**, e aqui são quatro marcas, não três: `[medido no repo]` · `[medido em sandbox]` · `[deduzido]` · `[relatado pelo dono]`. A quarta é a que este projeto precisou acrescentar: o chat **consegue** medir, reconstruindo o repositório em sandbox a partir do mount — e o sandbox nasce de um mount achatado, então **pode divergir do repositório real**. Caso medido: a wo0111 previu 839.264 bytes e o Code obteve 839.262; a diferença eram 2 bytes de uma linha em branco que só existia no sandbox. `[medido em sandbox]` é forte o bastante para escrever a WO e fraco o bastante para não virar veredito sobre o repo.
- **Medição incompleta SAI, desde que saia declarada como incompleta.** Segurar o número até estar certo entrega o defeito depois que o outro lado já dependeu dele. Diga o que não foi medido e por quê; ausência declarada é dado, ausência silenciosa vira zero.
- **Fato que o dono relata no chat não existe até estar num arquivo — e a origem vai junto.** `[relatado pelo dono]` e `[medido no repo]` têm forças diferentes, e a diferença é o que permite decidir se vale remedir. Apagar a marca é pior que não registrar: cria um fato de primeira classe a partir de uma lembrança.

## 🔎 Sonda e exploração — o par que produz evidência, e o instrumento que ele vira

A medição delegada responde a pergunta que alguém já soube fazer. Quando ninguém sabe ainda qual é a pergunta, ela não basta:

- **Exploração** — passada de leitura **sem hipótese prévia** que devolve **candidatos a checagem**. Descobre as perguntas que ninguém fez. **Produz hipótese.** Tem gatilho próprio: a skill `/sondar` (wo0112), que o dono chama.
- **Sonda** — script **determinístico**, escrito pela raia de planejamento e rodado pela de execução, que devolve um relatório pequeno. Responde pergunta que alguém já sabia fazer. **Produz evidência.**
- **Instrumento** — a sonda que amadureceu: versionada, com teste, e **dando veredito**. Aqui o instrumento já existe e se chama `validate.js`. **O gatilho da promoção é preciso: no momento em que uma sonda é rodada uma SEGUNDA vez para comparar antes/depois, ela deixou de ser descartável — é instrumento sem teste.**

**Funil:** `exploração` (levanta a pergunta) → `sonda` (mede) → `instrumento` (mede sempre) → `análise` (raciocina) → WO (muda). **Análise e WO mudam o repositório e vão com commit; exploração e sonda, não** — estas duas não têm âncora nem commit, e o relatório é a única saída.

**Três propriedades do relatório — as três juntas, ou ele vira lixo:** (1) tabela e contagens, nunca prosa: número ao lado do comando que o produziu; (2) **o que NÃO foi olhado é declarado**, e amostragem é o caso difícil — amostra parece cobertura, então diga **quantos de quantos**; (3) todo achado vem com o comando que o reproduz, e o que não se reproduz vai para «observações descartadas», com o motivo.

**A exploração NÃO parte da lista de checagens do instrumento.** Se ela só olhar onde o `validate.js` já olha, só acha o que ele já acharia. **E aqui isso é grave:** as 101 checagens nasceram uma a uma, cada uma de uma reclamação, de uma WO ou de uma suspeita nossa — **nenhuma nasceu de perguntar ao artefato o que ele declara**. Foi por isso que o `_TEMPLATE.md` ficou 6.618 bytes atrás por seis WOs, que quatro decisões viveram em `###` sem ninguém ver, e que o `KIT_VERSION` congelou três versões dentro da linha que o `C54` lê: **os três apareceram de raspão, enquanto se procurava outra coisa.**

**Exploração e sonda não dão veredito; o instrumento dá, e é para isso que ele existe.** A sonda relata o fato e **não nomeia a causa** — ausências de origens diferentes produzem o mesmo sintoma. **Existência não é aptidão:** «está no arquivo?» e «o que está no arquivo presta?» são perguntas diferentes; ao escrever uma sonda, pergunte o que ela NÃO abre.

**Onde mora.** Fora do que sobe ao Projeto: relatório em `../AAMMDD-HHMM-code-kcm-explore-<alvo>.txt`, com o ato `explore` do vocabulário fechado. O que sobe ao registro é o que foi **extraído** — um número no `DECISIONS`, um candidato no `IDEAS`. **O relatório é insumo, não memória.**
```

## Edicao 2 — `meta/CEREBRO.md` · o comando de build diz 17 e sao 18

**Ancora** (comentario dentro do bloco `bash` da secao de Validacao, `grep -c` = 1):

```
# 1. Remontar o index.html a partir do casco + 17 modulos
```

**Substituir por:**

```
# 1. Remontar o index.html a partir do casco + 18 modulos
```

---

## Fora de escopo

- **A menção a «17 módulos» na linha 21**, dentro de «Mudanças nesta revisão (v1.34.0)». É **relato**: naquela versão eram 17. Registro é congelado; a revogação atinge o texto que MANDA, não o que RELATA.
- **A `i-N60`** (disparou pela quinta vez em contagem, mas **esta WO não toca o `validate.js`**, então o gatilho dela não conta nesta rodada) e a **IDEA-137**.
- **A IDEA-126 do mapsmith** — «o `/wrap` reinterpreta o `/apply-wo` e às vezes o contradiz», com duas ocorrências medidas lá. O KCM tem a mesma conferência 1b, com a mesma lacuna (ela compara commit e estado do git, não os **achados**). É candidato para o kit, não para a casa, e é frente própria.
- Qualquer mudança no CEREBRO **gerado**. Ele já tem as duas seções; o problema era só a casa.

## Armadilhas desta WO

- **É a maior inserção de texto contínuo já feita no `meta/CEREBRO.md`** (6.299 bytes). Confira o começo **e o fim**: o bloco termina em «**O relatório é insumo, não memória.**» e a linha seguinte deve ser em branco, antes de `## ✅ Validação`.
- **Os dois títulos levam emoji** (📏 e 🔎), como as demais seções do arquivo. Se o editor os perder, o arquivo fica inconsistente com o resto — não quebra nada, mas relate.
- **`«»`, `·`, `—`, `→` e as crases entram literais.**
- **Nenhum check lê este arquivo.** O harness verde não prova que esta WO foi aplicada corretamente: **a rede aqui é o `git diff`**, lido com os olhos. Rode o `validate.js` mesmo assim, para confirmar que nada mais se mexeu.
- **Não use `sed -i`** — o arquivo é CRLF (incidente da wo0112).

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **um único** arquivo: `meta/CEREBRO.md` (mais a WO, nova). Nada além.
- [ ] `wc -c meta/CEREBRO.md` → de **40.691** para **≈46.990 bytes**.
- [ ] `grep -c "^## " meta/CEREBRO.md` → **17** *(era 15)*.
- [ ] `grep -ci "quem tem o disco mede" meta/CEREBRO.md` → **1** *(era 0)*.
- [ ] `grep -ci "candidatos a checagem" meta/CEREBRO.md` → **1** *(era 0)*.
- [ ] `grep -c "medido em sandbox" meta/CEREBRO.md` → **2** *(a marca na lista e a explicação dela)*.
- [ ] `grep -c "17 modulos" meta/CEREBRO.md` → **0**, e `grep -c "18 modulos"` → **1**.
- [ ] `grep -c "17 módulos" meta/CEREBRO.md` → **1** *(a linha 21, relato histórico, que **deve** continuar lá)*.
- [ ] `node validate.js` → **18/18 · 101/101 · 0 erros**, inalterado. *(Confirmação de que nada mais foi tocado; nenhum check lê este arquivo.)*

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · o `git diff` conferido com os olhos · o commit e o push, escrito **depois** de resolver o push.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0114.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/CEREBRO.md meta/workorders/260905-wo0114-cerebro-da-casa-recebe-medicao-e-sonda.md
```

```
git commit -m "docs(cerebro): a casa passa a carregar medicao delegada e o par sonda/exploracao" -m "O CEREBRO gerado tem 24 secoes e o da casa tinha 15: grep de sonda, exploracao, quem tem o disco mede e candidatos a checagem devolvia zero em todas. O kit ensinava as duas secoes para os 18 nichos e a casa operava sem nenhuma, sendo o unico projeto que nunca recebe pacote de update. As secoes vem adaptadas do mapsmith (DEC-0029, DEC-0042, DEC-0051) com uma marca de origem a mais que o original: medido em sandbox, porque aqui o chat mede reconstruindo o repo do mount achatado e o sandbox pode divergir. Corrige tambem o comando de build documentado, que dizia 17 modulos onde sao 18."
```

```
git push
```
