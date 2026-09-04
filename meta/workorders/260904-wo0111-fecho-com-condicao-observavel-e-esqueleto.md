# WO 0111 — o bloco de fecho para de derivar: condição observável, esqueleto literal e frase copiável

> **Tipo:** WO de CODIGO + doc instalado. Toca `src/index.template.html`, `validate.js`, `meta/CEREBRO.md` e duas skills instaladas. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo mais capaz, esforco medio-alto. Sao onze substituicoes literais; nenhuma e dificil, e o risco esta em transcrever texto longo com acento, `«»`, `·` e `—` errado.
> **Pre-requisito:** v1.122.0 com wo0109 e wo0110 aplicadas, commit `c6a0f38`, arvore limpa.
> **Base:** analise `260903-ANALISE-forma-do-fecho-e-nome-do-relatorio.md` (ja no repo, «Parcialmente implementada»), decidida pelo dono: **B + A**, mais a clausula da frase copiavel que ele forneceu no turno seguinte.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** todas lidas NESTE turno, no mount gerado em **2026-09-04 07:35** (commit `c6a0f38`, com wo0109 e wo0110 ja dentro). Cada ancora contada com `grep -c` = **1** e, alem disso, aplicada de verdade num sandbox reconstruido desse mount.
>
> **Afirmacao sobre artefato legivel:** as onze substituicoes foram executadas em sandbox, seguidas de `node build.js` (`index.html` 836.745 -> **839.264 bytes**) e `node validate.js` (**18/18 · 100/100 · VERDE**). Par negativo medido: removendo apenas a linha do esqueleto, o `C19` fica **VERMELHO**. As ancoras chegam testadas.
>
> **Numero de checklist e DERIVADO:** contagens tiradas do sandbox depois de aplicar esta WO.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

O bloco de fecho tem formato fixo escrito desde a wo0058, e mesmo assim **deriva** — entre projetos e, pior, dentro da mesma conversa. Medido nesta mesma conversa, contra o texto que o define: quatro turnos, **quatro formas diferentes** (Ação e Peça fundidos em prosa; Arquivar/Manter virando frase corrida com avulsos no mount; Handoff ausente com tres arquivos trocando de mao; a linha `/apply-wo` faltando por inteiro).

O padrao da falha nao e aleatorio: **a variacao e compensatoria** — quem lembra do campo que esqueceu da ultima vez esquece outro. Isso aponta a causa: o bloco e **reconstituido de memoria** a cada turno, no fim do turno, quando a atencao ja esta gasta. O modelo de WO, que nao deriva, existe como **arquivo para copiar**; o bloco de fecho existia so como prosa descritiva.

Duas causas atacadas aqui:

1. **A clausula de omissao nao tinha condicao observavel.** «Emitindo so as linhas que se aplicam» entrega a decisao ao proprio emissor — o desenho que a D-135 ja identificou como o que falha. No turno em que tres arquivos foram entregues, «nao se aplicava» foi o que aconteceu com o Handoff.
2. **Nao havia esqueleto.** Agora ha, com a condicao de cada linha colada ao rotulo — mitigacao do risco «o esqueleto vira teatro», que a analise levantou: o campo nao aparece com «nada a arquivar» dentro, porque a condicao esta na mesma linha do rotulo.

Mais a clausula que o dono forneceu: **a frase do «Peca no proximo turno» tem de ser copiavel como esta**, sem lacuna para ele preencher com dado ou medicao. Ele descreveu o uso real — copiar, colar, e no maximo acrescentar decisoes por cima — e o caso do mapsmith em que a frase pedia «saida do verify aqui» quando a saida estava no relatorio que o Code havia gerado.

## 2. Contexto factual

- **Medido — custo de teto ZERO.** O bloco e emitido por `buildClaudeMd`: vive no **CEREBRO gerado**, que nao tem teto. Os 6.900 e o orcamento por modo medem `buildInstr`, onde o fecho aparece so como linha de gatilho, que esta WO nao toca. *(A analise dizia o contrario; o erro foi medido e corrigido nela.)*
- **Medido — o `C19` ancorava a frase que sai.** Ele exigia `/só as linhas que se aplicam/` no CEREBRO gerado. Sem reescreve-lo esta WO deixa o harness vermelho; com ele reescrito, o harness passa a exigir as **condicoes**, o **esqueleto** e a **clausula copiavel** — garantia mais forte do que a anterior. Continua sendo **um** check: o total permanece **100**.
- **Medido — a casa estava atras do gerado.** O `meta/CEREBRO.md` do KCM tinha a versao curta do bloco (wo0058/wo0060/wo0064), enquanto o gerado ja trazia o carimbo `Base:` no Estado, a lista **exaustiva** com o terceiro estado «Ja arquivado» e a clausula do «resultado que o usuario saiba produzir». **Nenhuma delas existia na casa.** E o dono foi explicito: ninguem vai baixar o pacote de update do KCM para atualizar o KCM. As Edicoes 5 a 9 fecham essa defasagem no mesmo commit.
- **Medido — sobra do meu recorte de ancora na wo0110.** As Edicoes 6 e 7 daquela WO produziram duplo parentese nas duas skills instaladas (`...ex. \`wo0110\`) (pasta-pai do repo)`). O Code reportou como cosmetico e fiel ao texto. As Edicoes 10 e 11 corrigem — o erro foi de quem escreveu a ancora.

---

## Edicao 1 — `src/index.template.html` · abertura da secao (a condicao observavel)

**Ancora:**

```
Todo turno de trabalho fecha assim, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff). **Próximo** vem antes de um divisor; o resto vem depois dele:
```

**Substituir por:**

```
Todo turno de trabalho fecha assim. **Próximo** vem antes de um divisor; o resto vem depois dele. **Quando cada linha aparece é CONDIÇÃO OBSERVÁVEL, não julgamento** — o teste é «a condição é falsa?», nunca «me pareceu que não se aplicava»: **Próximo**, **Estado** e **Config recomendada** saem SEMPRE; **Arquivar / Manter** sai quando houver qualquer arquivo avulso no mount, e essa condição se verifica LISTANDO o mount, não lembrando; **Handoff** sai quando algum arquivo foi entregue NESTE turno. Fora disso a linha não existe — e linha sem conteúdo real não aparece: não escreva «nada a arquivar» nem invente handoff. **Reconstituir este bloco de memória é o que o faz derivar, e a variação é compensatória:** quem lembra do campo que esqueceu da última vez esquece outro — medido em quatro turnos seguidos, quatro formas diferentes, com o formato fixo escrito no arquivo lido a cada mensagem. Por isso o esqueleto abaixo existe: **copie e preencha, não reconstitua.**
```

## Edicao 2 — `src/index.template.html` · item «Próximo», a clausula da frase copiavel

**Ancora** (fim do paragrafo do item 1 — o texto novo entra **imediatamente depois**, na MESMA linha, separado por um espaco):

```
transfere ao usuário um trabalho que ele não sabe que tem — e ele descobre isso escrevendo de volta para perguntar.
```

**Acrescentar ao final da mesma linha:**

```
 **E a frase tem de ser COPIÁVEL COMO ESTÁ:** sem lacuna, reticências ou campo para o usuário preencher com dado ou medição («medidas são ___», «(...)», «saída do X aqui»). O uso real é copiar, colar e no máximo acrescentar decisões por cima; uma lacuna converte um gesto de dois segundos em trabalho de coleta, e irrita mais do que um pedido grande e claro. **A única lacuna aceitável é escolher entre opções já enumeradas no próprio turno** («fase 3: vamos de A, B ou C?») — escolher é barato porque o material já está na tela, produzir dado não é. Pela mesma razão, a frase pode vir com a recomendação já dentro dela, para o usuário só confirmar ou trocar.
```

## Edicao 3 — `src/index.template.html` · o esqueleto (bloco novo de `L.push`)

**Ancora** (inicio da linha que declara de quem e o bloco):

```
  L.push("**De quem é este bloco:** da raia de **planejamento** (o assistente no chat).
```

**Inserir IMEDIATAMENTE ANTES dessa linha, exatamente estas dezesseis linhas:**

```
  L.push("**Esqueleto — copie e preencha; a condição de cada linha está à direita:**");
  L.push("```");
  L.push("---");
  L.push("**Próximo**                                   (sempre)");
  L.push("- **Ação:** <a próxima coisa concreta a fazer>");
  L.push("- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»");
  L.push("**Estado:** Base: <arquivo lido NESTE turno + a data/commit que ELE traz> · <versão ou fase> · <harness> · <commit>   (sempre)");
  L.push("**Arquivar / Manter**                         (se há avulso no mount — listado, não lembrado)");
  L.push("- **Arquivar:** <nome> — <motivo>");
  L.push("- **Manter:** <nome> — <motivo>");
  L.push("- **Já arquivado:** <nomes>");
  L.push("**Config recomendada**                        (sempre)");
  L.push("- **<raia>:** <tipo de modelo> · <esforço>");
  L.push("**Handoff**                                   (se algum arquivo foi entregue NESTE turno)");
  L.push("- `<arquivo>` → <destino>");
  L.push("```");
```

> **Atenção:** as linhas com três crases são `L.push` de uma string com três crases — é o fence do bloco de código **dentro do CEREBRO gerado**, e tem de sair literal. O alinhamento das condições à direita é espaço simples, não tabulação.

## Edicao 4 — `validate.js` · o `C19` passa a exigir o que substituiu a frase antiga

**Ancora** (linha inteira dentro do `check("C19 …")`):

```
  assert(/só as linhas que se aplicam/.test(c),"CEREBRO nao manda condicionar as linhas");
```

**Substituir por:**

```
  assert(/CONDIÇÃO OBSERVÁVEL/.test(c),"CEREBRO nao condiciona as linhas por condicao observavel: voltou a deixar a omissao no julgamento de quem emite");
  assert(/se há avulso no mount/.test(c) && /se algum arquivo foi entregue NESTE turno/.test(c),"o esqueleto do fecho perdeu as condicoes coladas nos rotulos (wo0111)");
  assert(/COPIÁVEL COMO ESTÁ/.test(c),"o item Proximo nao exige a frase copiavel sem lacuna para o usuario preencher");
  assert(/Esqueleto — copie e preencha/.test(c),"CEREBRO sem o esqueleto literal: o bloco volta a ser reconstituido de memoria");
```

> O `C19` continua sendo **um** check. Total permanece **100**.

---

## Edicao 5 — `meta/CEREBRO.md` (KCM) · abertura da secao

**Ancora:**

```
Todo turno de trabalho termina com este bloco, nesta ordem, **emitindo só as linhas que se aplicam** — linha sem conteúdo real não aparece (não escreva «nada a arquivar» nem invente handoff). **Próximo** vem ANTES de um divisor; o resto vem depois dele:
```

**Substituir por:**

```
Todo turno de trabalho termina com este bloco, nesta ordem. **Próximo** vem ANTES de um divisor; o resto vem depois dele. **Quando cada linha aparece é CONDIÇÃO OBSERVÁVEL, não julgamento** — o teste é «a condição é falsa?», nunca «me pareceu que não se aplicava»: **Próximo**, **Estado** e **Config recomendada** saem SEMPRE; **Arquivar / Manter** sai quando houver qualquer arquivo avulso no mount, e a condição se verifica LISTANDO o mount, não lembrando; **Handoff** sai quando algum arquivo foi entregue NESTE turno. Fora disso a linha não existe — e linha sem conteúdo real não aparece: não escreva «nada a arquivar» nem invente handoff. **Reconstituir este bloco de memória é o que o faz derivar, e a variação é compensatória:** quem lembra do campo que esqueceu da última vez esquece outro — medido em quatro turnos seguidos deste projeto, quatro formas diferentes, com o formato fixo escrito no arquivo lido a cada mensagem. Por isso o esqueleto existe: **copie e preencha, não reconstitua.**
```

## Edicao 6 — `meta/CEREBRO.md` (KCM) · item «Próximo»

**Ancora** (fim da linha do item — o texto novo entra **na mesma linha**, apos um espaco):

```
Não é lista de possibilidades: é uma ação e um pedido.
```

**Acrescentar ao final da mesma linha:**

```
 **A frase só pode conter resultado que o usuário saiba produzir:** se o resultado é do executor, peça o **relatório** («aplicada, relatório aqui»); se é fato do usuário, o comando exato e o que esperar ver vêm no MESMO turno. **E tem de ser COPIÁVEL COMO ESTÁ** — sem lacuna, reticências ou campo para preencher com dado ou medição («medidas são ___», «(...)», «saída do X aqui»): o uso real é copiar, colar e no máximo acrescentar decisões por cima, e uma lacuna transforma um gesto de dois segundos em trabalho de coleta. **A única lacuna aceitável é escolher entre opções já enumeradas no próprio turno** («fase 3: A, B ou C?») — escolher é barato porque o material já está na tela; produzir dado não é. Pela mesma razão, a frase pode já trazer a recomendação dentro dela, para o usuário só confirmar ou trocar.
```

## Edicao 7 — `meta/CEREBRO.md` (KCM) · item «Estado» ganha o carimbo `Base:`

**Ancora** (linha inteira):

```
- **Estado** — uma linha: onde o projeto está agora (versão/fase e o resultado do harness) e o commit, quando existir.
```

**Substituir por:**

```
- **Estado** — uma linha: onde o projeto está agora (versão/fase e o resultado do harness) e o commit, quando existir. **Todo dado desta linha vem de leitura feita NESTE turno**, e a linha abre com o carimbo **`Base:`** — qual arquivo foi lido para saber o estado, com a data e o commit que ELE declara (`Base: _MANIFEST 04/09 07:35 · c6a0f38`). Sem cópia achatada, use o doc de estado e a data dele. Se não verificou, escreva «não verificado nesta rodada» — é resposta de primeira classe; se o dado não é legível por este canal, escreva isso, que é outro problema e tem outro remédio. Campo obrigatório sem dado fresco puxa a resposta da memória, e logo depois de entregar um trabalho a memória é a *expectativa* de que ele foi aplicado.
```

## Edicao 8 — `meta/CEREBRO.md` (KCM) · «Arquivar / Manter» exaustivo, com o terceiro estado

**Ancora** (linha inteira):

```
- **Arquivar / Manter** — só se houver notas avulsas no mount. **Em lista**: uma linha **Arquivar:** com os nomes já absorvidos e uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras. Não espere que o usuário pergunte.
```

**Substituir por:**

```
- **Arquivar / Manter** — quando houver arquivo avulso no mount. **Em lista**: uma linha **Arquivar:** com os nomes já absorvidos, uma linha **Manter:** com os que seguem vivos, cada uma com o motivo em poucas palavras, e uma linha **Já arquivado:** com os que foram absorvidos em turno anterior e continuam no mount — só os nomes. **A lista é EXAUSTIVA e sai de uma LISTAGEM do mount, nunca da memória**: todo avulso entra numa das três, porque omissão é ambígua (pode significar «já extraí tudo» ou «nunca abri», e as duas pedem ações opostas), e a memória só devolve o que é novo. **«Arquivar» é afirmação forte:** só entra o que foi lido INTEIRO naquele turno; na dúvida, **Manter** com o motivo. Sem o terceiro estado a lista não tem saída: ou cresce para sempre, ou os itens caem em silêncio. Não espere que o usuário pergunte.
```

## Edicao 9 — `meta/CEREBRO.md` (KCM) · o esqueleto

**Ancora:**

```
**De quem é este bloco (wo0065):**
```

**Substituir por** (o esqueleto, uma linha em branco, e a ancora de volta no fim):

````
**Esqueleto — copie e preencha; a condição de cada linha está à direita:**

```
---
**Próximo**                                   (sempre)
- **Ação:** <a próxima coisa concreta a fazer>
- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»
**Estado:** Base: <arquivo lido NESTE turno + data/commit que ELE traz> · <versão/fase> · <harness> · <commit>   (sempre)
**Arquivar / Manter**                         (se há avulso no mount — listado, não lembrado)
- **Arquivar:** <nome> — <motivo>
- **Manter:** <nome> — <motivo>
- **Já arquivado:** <nomes>
**Config recomendada**                        (sempre)
- **Chat:** <modelo> · <esforço>
- **Code:** <modelo> · <esforço> · <terminal>
**Handoff**                                   (se algum arquivo foi entregue NESTE turno)
- `<arquivo>` → <destino>
```

**De quem é este bloco (wo0065):**
````

---

## Edicao 10 — `.claude/skills/apply-wo/SKILL.md` · o duplo parentese da wo0110

**Ancora:**

```
(`<alvo>` = a WO aplicada, ex. `wo0110`) (pasta-pai do repo)
```

**Substituir por:**

```
(`<alvo>` = a WO aplicada, ex. `wo0110`; pasta-pai do repo)
```

## Edicao 11 — `.claude/skills/wrap/SKILL.md` · o duplo parentese da wo0110

**Ancora:**

```
(`<alvo>` = a WO que fechou, ou duas ou três palavras com hífen) (pasta-pai do repo)
```

**Substituir por:**

```
(`<alvo>` = a WO que fechou, ou duas ou três palavras com hífen; pasta-pai do repo)
```

---

## Fora de escopo

- **A tabela de gatilhos das Instruções** (`Fim de QUALQUER turno de trabalho → Emite o Bloco de fecho`). Não muda: continua apontando para a seção, que é onde o conteúdo vive. Mexer ali gastaria teto sem ganho.
- **Estender o `C43` ao `meta/workorders/_TEMPLATE.md`** (`i-N60`). O gatilho disparou de novo — esta WO toca o `validate.js` pela segunda vez seguida. Continua fora, e **reporte que disparou outra vez**: um gatilho que dispara duas vezes sem ser pago está a caminho de virar pendência perpétua, e a decisão é do dono.
- **Verificar o fecho por instrumento.** Impossível: o harness lê o que o kit emite, nunca a conversa. O `C19` garante que o **texto** existe no CEREBRO, não que alguém o seguiu.

## Armadilhas desta WO

- **É a WO com mais texto acentuado até hoje.** `«»`, `·`, `—`, `→`, `Ó`, `Á` e as três crases entram literais. Se o editor normalizar aspas ou travessões, o `C19` fica vermelho — e a mensagem dirá qual assert caiu.
- **As Edições 2 e 6 são acréscimo NA MESMA LINHA**, não parágrafo novo. Ambas começam com um espaço. Inserir quebra de linha ali muda o markdown do item.
- **As Edições 1/5 e 3/9 são pares quase idênticos** (gerador e casa), com pequenas diferenças de propósito: a casa diz «deste projeto» e traz as raias Chat/Code nomeadas no esqueleto; o gerador diz `<raia>`. Não unifique.
- **A Edição 9 usa fence de quatro crases** na WO porque o conteúdo tem fence de três. O que entra no `CEREBRO.md` é o de **três**.
- **`build` antes de `validate`.** O harness lê o `index.html` construído.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` de **836.745** para **839.264 bytes**. *(Medido no sandbox. Divergência grande: **PARE e reporte**.)*
- [ ] `node validate.js` → **18/18 · 100/100 · 0 erros**. Total continua **100**.
- [ ] `grep -c 'só as linhas que se aplicam' src/index.template.html meta/CEREBRO.md` → **0 nos dois** *(era 1 em cada)*.
- [ ] `grep -c 'CONDIÇÃO OBSERVÁVEL' src/index.template.html meta/CEREBRO.md` → **1 em cada**.
- [ ] `grep -c 'COPIÁVEL COMO ESTÁ' src/index.template.html meta/CEREBRO.md` → **1 em cada**.
- [ ] `grep -c 'Esqueleto — copie e preencha' src/index.template.html meta/CEREBRO.md` → **1 em cada**.
- [ ] `grep -c 'Já arquivado' src/index.template.html meta/CEREBRO.md` → **2 em cada** *(a regra em prosa e a linha do esqueleto; no template o segundo é o `L.push` do esqueleto)*.
- [ ] `grep -c ') (pasta-pai do repo)' .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md` → **0 nos dois**.
- [ ] **Par negativo, opcional:** apagar só a linha `L.push("**Esqueleto — copie e preencha…")` e rodar `build` + `validate` deve dar **VERMELHO no C19**. Medido no sandbox. Desfaça depois.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js`, `meta/CEREBRO.md`, `.claude/skills/apply-wo/SKILL.md`, `.claude/skills/wrap/SKILL.md` — mais a WO (nova). Nada além.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** que o gatilho da `i-N60` disparou pela segunda vez seguida.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0111.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js meta/CEREBRO.md .claude/skills/apply-wo/SKILL.md .claude/skills/wrap/SKILL.md meta/workorders/260904-wo0111-fecho-com-condicao-observavel-e-esqueleto.md
```

```
git commit -m "feat(kit): o bloco de fecho ganha condicao observavel, esqueleto e frase copiavel" -m "A omissao de linha deixa de ser julgamento de quem emite e passa a condicao verificavel: Proximo, Estado e Config sempre; Arquivar/Manter se ha avulso no mount; Handoff se algum arquivo foi entregue no turno. Entra um esqueleto literal para copiar em vez de reconstituir de memoria, com a condicao colada a cada rotulo. O item Proximo passa a exigir frase copiavel como esta, sem lacuna para o dono preencher. O CEREBRO do KCM, que estava atras do gerado, recebe as mesmas regras mais o carimbo Base e a lista exaustiva com o terceiro estado. C19 reescrito: exige as condicoes, o esqueleto e a clausula copiavel. Harness 18/18 100/100."
```

```
git push
```
