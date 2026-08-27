# WO 0105 — A lista não perde item e o relatório não mente

> **Tipo:** WO de CÓDIGO (gerador + harness + skill instalada).
> **Config sugerida:** modelo leve, `/effort` **médio** — onze edições literais, todas testadas em sandbox. O que exige atenção é o CRLF do template, a Edição 8 (duas ocorrências) e a ordem das Edições 9 e 10.
> **Pré-requisito:** v1.120.0, commit `1cd35c6`, `main` sincronizada com `origin/main`, harness **18/18 · 98/98 · 0 erros**, 1 não rastreado conhecido (`.claude/launch.json`).
> **Base:** o achado do dono em 27/08 (a lista «exaustiva» perdeu um arquivo), a **carta 04** do FlatDrop (§2, §4 e §5), os achados do ciclo deles no `FlatDrop_7.md`, e o erro de método do chat neste mesmo turno, descrito no §2.
> **Depende de:** wo0102 (que escreveu as regras que esta corrige) e wo0103 (`C54`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE** e diga no relatório.
>
> **Âncoras lidas em:** todas as onze foram lidas **neste turno**, no sandbox reconstruído do mount de 2026-08-27 17:38, e **todas as edições foram aplicadas e validadas lá antes desta WO existir**.
> - `src/index.template.html`, bullet da releitura do mount → `O relatório lidera, sempre. Quando os dois discordam, **o relatório vence e a cópia está atrasada** — e a listagem do mount é o único lugar onde essa discordância aparece.`
> - `src/index.template.html`, cauda do P8 → `Entregar avisando «não li» é pior que não avisar: o aviso soa como método cuidadoso e desarma justamente quem conferiria."],`
> - `src/index.template.html`, item Arquivar do bloco de fecho → `Nome por nome — e não espere que eu pergunte.");`
> - `src/index.template.html`, `HYGIENE_RULES` → `"**Todo comando entregue ao usuario vai INTEIRO e diz QUEM executa.**`
> - `src/index.template.html`, skill `wrap` gerada → `"ANTES de escrever qualquer coisa: abra o relatório mais recente em \`../AAMMDD-HHMM-code-*.txt\``
> - `src/index.template.html`, duas ocorrências → `"Verde: \`add\`, \`commit\` e \`push\` sem perguntar — e, se a WO declarar um **Proximo comando**`
> - `src/index.template.html`, modelo de WO → `    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",`
> - `validate.js` L1331 → `assert(/o relatório vence e a cópia está atrasada/.test(cmd), id+": CEREBRO nao diz qual canal vence quando discordam");`
> - `validate.js`, dentro do C53 → `assert(/relat[oó]rio mais recente/.test(kit.wrap), "a skill wrap nao confere o relatorio anterior contra o repo`
> - `validate.js`, tabela do C43 → `["1b confere o relatorio anterior", /relat[o\u00f3]rio mais recente/, ["wrap"]],`
> - `.claude/skills/wrap/SKILL.md` L7-10 → `- **ANTES de escrever qualquer coisa:** abra o **relatório mais recente** em \`../AAMMDD-HHMM-code-*.txt\``
>
> **Afirmação sobre artefato legível:** nada abaixo vem de memória. As contagens do checklist foram **derivadas** por `grep` sobre o arquivo já editado — a própria regra que a Edição 11 institui.
>
> **Canal dos meta neste ciclo = CODE.**
>
> **Próximo comando:** `/wrap`

---

## 1. Por que

Sete correções, e cinco delas vieram de fora ou de cima:

- **O dono mediu que a lista «exaustiva» da wo0102 parou de ser exaustiva.** `260818-HANDOFF-BRIEF.md` saiu da lista em 21/08 e nunca voltou, **estando no mount o tempo todo**. Cinco turnos entre publicar a regra para 18 nichos e violá-la.
- **O FlatDrop devolveu, na carta 04, que «o relatório lidera, sempre» está errado como absoluto** — e o contraexemplo é a rotina normal deles: o dono commita entre relatórios, e aí o manifesto é que está em dia.
- **E devolveu um achado fino sobre o `1b`**: depois que «reabra o relatório» virar regra, *«o mais recente»* fica ambíguo, porque relatório antigo corrigido tem data nova.
- **O ciclo deles produziu duas regras que o kit não tem** — arquivo sob `.claude/` e o bloco de commit — e uma delas custou um ciclo inteiro quando o classificador barrou a WO, corretamente.
- **E o chat errou neste turno**, do jeito descrito no §2, o que abre a quarta espécie do P8.

## 2. Contexto factual

**[medido em sandbox, 2026-08-27]** — repo reconstruído do mount, build e harness rodados.

- Base antes de mexer: `index.html` **828.852 bytes**, **18/18 · 98/98 · 0 erros**, C28 em `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- Depois das onze edições: **833.401 bytes**, **18/18 · 99/99 · 0 erros**, e o **C28 imprime os cinco números idênticos**. *Custo de teto: ZERO.*
- **Duas provas negativas rodadas:** trocar `numa terceira linha **Já arquivado:**` por `numa lista à parte` → C55 vermelho na asserção certa; remover `REABRA o relatorio` das duas skills geradas → **C55 e C43 vermelhos juntos**, que é o desenho funcionando (a cláusula sai do gerado e o C43 acusa que a casa também perde a proteção).
- **A i-N56 disparou três vezes nesta única leva** — ver §3.

**[provado por print, 2026-08-27]** — dois manifestos do FlatDrop, gerados com quase cinco horas de diferença:

| | 12:47 | 17:40 |
|---|---|---|
| commit | `2fc6daa` | `f3f385b` |
| arquivos | **41** | 27 |
| tamanho | 611,6 KB | 377,2 KB |
| git | `1 nao rastreado` | `limpo` |
| tabela contém | **`260827-1144-code-flatdrop.txt`**, sem prefixo de pasta | — |

O relatório de execução estava na **raiz do repositório**. E o corolário fecha: o `.gitignore` deles **não** exclui `logs/`, então se o log do dia já existisse às 12:47 o contador diria `2`. Disse `1`. **O único não rastreado das 12:47 era o próprio relatório.** O relatório da wo0063 deles afirmou que «era o log do dia» — falso, e produzido por raciocínio, não por leitura de um `git status` daquele instante.

**[o erro do chat neste turno, e é ele que origina a Edição 2]**

O chat afirmou, por escrito, que *«os relatórios não foram gravados na raiz do repositório»*. A medição era **real**: o `_TREE` e o manifesto **das 17:40** não mostram `.txt` na raiz, e o `.flatdropignore` não exclui `*.txt`. O erro não foi medir — foi **medir o instante errado**. O mount responde o AGORA; a afirmação era sobre 11:44–12:47. E havia um segundo sinal ignorado: o dono afirmou o fato **como testemunha**, e o mais provável, diante disso, é que a pasta em mãos já tivesse sido arrumada — que é exatamente o que os 41→27 arquivos mostram. **Evidência com a data errada é memória vestida de medição**, e é a única das quatro espécies que passa no teste de «eu li antes de afirmar».

**[deduzido, e marcado como tal]** que o executor do FlatDrop gravou o relatório na raiz **acreditando** tê-lo gravado na pasta-pai: os dois relatórios dizem `../FlatDrop/...` no texto, e o manifesto os desmente. Não lemos o código nem a sessão deles; é inferência a partir dos dois artefatos, e vai como aviso na carta, não como acusação.

## 3. A i-N56 disparou três vezes nesta leva — e desta vez não contorci o texto

Três asserções reprovaram por **frase literal**, não por efeito:

1. `C33` exigia `o relatório vence e a cópia está atrasada` — a frase que a Edição 1 **precisa** apagar.
2. `C53` exigia `relatório mais recente` — a frase que a Edição 6 **precisa** trocar.
3. `C43` exigia a mesma frase na tabela de cláusulas.

Na wo0102 eu reescrevi a edição para caber no check, e registrei que isso era o sintoma. **Desta vez fiz o contrário:** as três asserções passaram a mirar o **efeito** (existe critério de desempate · o fecho abre um relatório anterior e o confronta com o git antes de escrever), e o texto ficou como devia ser. As Edições 9 e 10 são isso.

*Isto não fecha a i-N56* — fecha o caso. Ela continua ABERTA, agora com **quatro** ocorrências e uma resposta praticada.

---

## Edição 1 — `src/index.template.html` · o desempate entre os dois canais

**Âncora** *(ocorrência única)*:

```
O relatório lidera, sempre. Quando os dois discordam, **o relatório vence e a cópia está atrasada** — e a listagem do mount é o único lugar onde essa discordância aparece.
```

**Substituir por:**

```
**Compare os dois carimbos de commit — o do manifesto e o do relatório — e o mais recente vence.** O relatório lidera **por padrão**, porque normalmente nasce primeiro; não por natureza: o dono commita entre relatórios (salva um doc que o chat entregou, corrige um arquivo à mão) e aí o manifesto está à frente e é a cópia que está em dia. Uma vez que se compara em vez de supor, a divergência vira diagnóstico: **iguais** = o mount é o estado pós-aplicação; **manifesto à frente** = houve commit sem executor, o manifesto lidera; **manifesto atrás** = o mount foi gerado antes de aplicar, o relatório lidera; **iguais mas com arquivo divergindo do commit** = há trabalho por cima, leia quais; **dois relatórios com o mesmo commit** = um foi reaberto e corrigido, vale o corrigido.
```

## Edição 2 — `src/index.template.html` · P8 ganha a quarta espécie

**Âncora** *(ocorrência única)*:

```
Entregar avisando «não li» é pior que não avisar: o aviso soa como método cuidadoso e desarma justamente quem conferiria."],
```

**Substituir por:**

```
Entregar avisando «não li» é pior que não avisar: o aviso soa como método cuidadoso e desarma justamente quem conferiria. **E há uma quarta espécie, que se disfarça de leitura porque a medição é real: a evidência com a DATA errada.** O mount responde o AGORA. Se a pergunta é sobre o ENTÃO — o que havia na pasta há seis horas, qual arquivo existia antes de alguém arrumar —, o mount não é prova, e usá-lo assim é memória vestida de medição. **Antes de refutar uma afirmação sobre o passado, confira se o artefato que você abriu é do momento da afirmação**; se não for, o que você tem é uma foto de outro instante, e o silêncio dela não é negativa. Sinal de alarme: quando o dono afirma um fato como testemunha e o seu artefato «não mostra», o mais provável é que ele tenha consertado o que relatou."],
```

## Edição 3 — `src/index.template.html` · «Arquivar / Manter» ganha saída

**Âncora** *(ocorrência única — fim do item 3 do bloco de fecho)*:

```
Nome por nome — e não espere que eu pergunte.");
```

**Substituir por:**

```
**Monte a lista a partir de uma LISTAGEM do mount, nunca da memória do que chegou neste turno** — é a diferença entre um comando e uma lembrança, e a lembrança só devolve o que é novo. **Terceiro estado, obrigatório:** arquivo já arquivado em turno anterior **continua no mount**, então continua na lista — numa terceira linha **Já arquivado:**, só os nomes, sem motivo, uma linha. Sem esse estado a lista não tem saída: ou cresce para sempre, ou os itens caem em silêncio — e cair em silêncio foi o que aconteceu cinco turnos depois de esta regra ser escrita, com quem a escreveu. Nome por nome — e não espere que eu pergunte.");
```

## Edições 4 e 5 — `src/index.template.html` · duas regras de higiene novas

**Âncora** *(início do item da wo0102, ocorrência única)*:

```
  "**Todo comando entregue ao usuario vai INTEIRO e diz QUEM executa.**
```

**Inserir IMEDIATAMENTE ANTES** dessa linha, as duas na ordem abaixo (cada uma terminando em `",` e quebra CRLF):

```
  "**Havendo WO no turno, o bloco de commit e de quem APLICA — e cobre tudo.** A WO ja carrega o proprio `git add`; o chat nao entrega bloco separado por cima, porque dois blocos no mesmo turno significam ou um passo manual para o dono ou um registro que fica para tras. O bloco de quem aplica cobre a WO, os arquivos que o chat entregou para download e qualquer pendencia. **Nao havendo WO, o bloco e do chat.** Salvaguarda: quem aplica confere a presenca no disco do que o chat entregou e, se faltar, commita o resto e RELATA — nunca supoe que chegou.",
  "**Arquivo sob `.claude/` o chat entrega INTEIRO, para download — a WO so o menciona no `git add`.** Configuracao do executor nao e aplicavel pelo executor: o classificador bloqueia, e com razao — a barreira existe para ele nao se autoconceder permissao, e «eu autorizo» dito na conversa nao muda isso. Medido em campo: uma WO que montava delta em `.claude/` foi barrada e custou o ciclo inteiro. A mesma logica vale para qualquer arquivo que governe o que o executor pode fazer.",
```

## Edição 6 — `src/index.template.html` · o `1b` ordena por commit, e olha a pendência

**Âncora** *(ocorrência única, dentro da skill `wrap` gerada)*:

```
    "ANTES de escrever qualquer coisa: abra o relatório mais recente em `../AAMMDD-HHMM-code-*.txt` e confira o que ele AFIRMA contra `git status` e `git log` — relatório é escrito antes da última ação, então um push que saiu depois dele fica registrado como não feito. Divergência vira uma linha de correção no log do dia; conferência que passa não vira linha.",
```

**Substituir por:**

```
    "ANTES de escrever qualquer coisa: abra o relatório que carrega o COMMIT MAIS NOVO em `../AAMMDD-HHMM-code-*.txt` — ordene por commit, não por nome nem por data do arquivo, porque relatório antigo que foi REABERTO tem data nova — e confira o que ele AFIRMA contra `git status` e `git log`. Confira também qualquer relatório anterior que tenha declarado PENDÊNCIA: ele é o que uma sessão futura vai ler, e o `1b` que só olha o mais recente deixa a mentira no disco. Divergência vira uma linha de correção no log do dia; conferência que passa não vira linha.",
```

## Edição 7 — `src/index.template.html` · o relatório com resultado real, reaberto, e fora do repo

> **Atenção — DUAS ocorrências.** A linha aparece em `applyWo` e em `wrap`. **Edite as duas.** Elas diferem só no final (`Grave o MESMO relatório` × `Grave o relatório de trabalho`); use isso para conferir que pegou as duas.

**Em CADA uma**, substituir o trecho:

```
"Verde: `add`, `commit` e `push` sem perguntar — e, se a WO declarar um **Proximo comando**
```

por:

```
"Resolva o push ANTES de escrever o relatorio, e escreva o campo do push com o RESULTADO REAL — nunca «pendente» por antecipacao. Se ele ficar mesmo pendente, REABRA o relatorio e corrija quando resolver: o arquivo que afirma o falso e o que a proxima sessao le. Confira tambem que nenhum relatorio `.txt` ficou DENTRO do repo (`git status` o mostraria como nao rastreado): o lugar dele e a pasta-pai, e relatorio na raiz vira `??` que ninguem identifica. Verde: `add`, `commit` e `push` sem perguntar — e, se a WO declarar um **Proximo comando**
```

*(o resto da linha, a partir de `, termine o relatorio com ele CRU e SOZINHO`, fica intacto.)*

## Edição 8 — `src/index.template.html` · o número do checklist é derivado

**Âncora** *(ocorrência única, no cabeçalho do modelo de WO)*:

```
    "> **Proximo comando:** o comando que o usuario deve rodar quando esta WO fechar em verde — ou apague a linha.",
```

**Inserir IMEDIATAMENTE ANTES** dessa linha:

```
    "> **Numero de checklist e DERIVADO, nunca estimado.** Toda contagem prevista (`grep -c`, quantidade de bullets, de",
    "> arquivos) sai de simular o texto final DESTA WO, incluindo o que ela propria manda inserir — a WO costuma citar as",
    "> frases que insere, na prosa e no checklist, e a contagem ingenua erra por isso. Numero de memoria vira desvio no",
    "> relatorio de quem aplica, que estava certo.",
```

## Edição 9 — `validate.js` · o `C33` passa a mirar o efeito

**Âncora** *(ocorrência única, L1331)*:

```js
    assert(/o relatório vence e a cópia está atrasada/.test(cmd), id+": CEREBRO nao diz qual canal vence quando discordam");
```

**Substituir por:**

```js
    // wo0105 / i-N56 (3a ocorrencia na mesma leva): a regra deixou de SUPOR direcao e passou a MEDIR
    // (carta 04 do FlatDrop: o dono commita entre relatorios, e ai o manifesto e que lidera). A assercao
    // mira o efeito — «ha um criterio explicito de desempate entre os dois canais» — nao a frase antiga.
    assert(/mais recente vence/.test(cmd) && /manifesto/.test(cmd) && /relat[oó]rio lidera \*\*por padrão\*\*/.test(cmd),
      id+": CEREBRO nao da criterio de desempate entre manifesto e relatorio — supor direcao erra quando o dono commita entre relatorios");
```

## Edição 10 — `validate.js` · o `C53` e o `C43` também

**(a) Âncora** *(ocorrência única, dentro do C53)*:

```js
  assert(/relat[oó]rio mais recente/.test(kit.wrap), "a skill wrap nao confere o relatorio anterior contra o repo — relatorio escrito antes da ultima acao afirma o contrario do que houve");
```

**Substituir por:**

```js
  // wo0105 / i-N56 (2a ocorrencia): a assercao mira o EFEITO — «o fecho abre um relatorio anterior e o
  // confronta com o git ANTES de escrever» — em vez da frase «relatorio mais recente», que a wo0105
  // precisou trocar por «o que carrega o commit mais novo». Frase literal engessa o refino; efeito nao.
  assert(/ANTES de escrever qualquer coisa/.test(kit.wrap) && /relat[oó]rio/i.test(kit.wrap)
      && /git status/.test(kit.wrap) && /git log/.test(kit.wrap),
    "a skill wrap nao confere um relatorio anterior contra o repo ANTES de escrever — relatorio escrito antes da ultima acao afirma o contrario do que houve");
```

**(b) Âncora** *(ocorrência única, tabela `CLAUSULAS` do C43)*:

```js
    ["1b confere o relatorio anterior", /relat[o\u00f3]rio mais recente/, ["wrap"]],
```

**Substituir por:**

```js
    ["1b confere o relatorio anterior", /ANTES de escrever qualquer coisa/, ["wrap"]],
    // wo0105: as tres clausulas do relatorio que a casa tambem tem de carregar.
    ["push com resultado real",  /RESULTADO REAL/,                        ["wrap"]],
    ["relatorio se reabre",      /REABRA o relat[o\u00f3]rio/,            ["wrap"]],
    ["relatorio fora do repo",   /DENTRO do repo/,                        ["wrap"]],
```

## Edição 11 — `validate.js` · o check **C55**

**Âncora** *(ocorrência única)*:

```js
check("C54 o carimbo de versao nao mente
```

**Inserir IMEDIATAMENTE ANTES**, seguido de uma linha em branco:

```js
check("C55 a lista nao perde item e o relatorio nao mente (wo0105): terceiro estado no Arquivar, especie temporal no P8, carimbos comparados, .claude entregue inteiro, push com resultado real", () => {
  const kit = T.buildCodeKitFiles();
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    // (1) Arquivar/Manter: terceiro estado + derivada de listagem. Sem os dois a lista "exaustiva"
    // perde item em silencio — medido: sumiu um arquivo do mount cinco turnos depois da wo0102.
    assert(/Monte a lista a partir de uma LISTAGEM do mount/.test(cmd), id+": a lista de Arquivar ainda sai da memoria do que chegou — memoria so devolve o que e novo");
    assert(/Já arquivado:/.test(cmd), id+": falta o terceiro estado — sem saida, ou a lista cresce para sempre ou os itens caem em silencio");
    // (2) P8: a quarta especie, a evidencia com a data errada
    assert(/evidência com a DATA errada/.test(cmd), id+": o P8 nao cobre a medicao real sobre o instante errado — e a especie que se disfarca de leitura");
    assert(/o mount não é prova/.test(cmd), id+": falta dizer que o mount responde o AGORA, nao o ENTAO");
    // (3) desempate entre os dois canais, por medicao e nao por suposicao
    assert(/mais recente vence/.test(cmd), id+": sem criterio de desempate, «o relatorio lidera sempre» erra quando o dono commita entre relatorios");
    // (4) e (5) as duas regras de higiene novas
    assert(/Arquivo sob `\.claude\/` o chat entrega INTEIRO/.test(cmd), id+": nada diz que configuracao do executor nao e aplicavel pelo executor — o classificador barra e o ciclo se perde");
    assert(/o bloco de commit e de quem APLICA/.test(cmd), id+": dois blocos de commit no mesmo turno = passo manual para o dono ou registro que fica para tras");
  });
  // (6) o relatorio: resultado real, reabertura, e nao ficar dentro do repo
  assert(/RESULTADO REAL/.test(kit.wrap), "a skill wrap nao exige o campo do push com resultado real — «pendente» por antecipacao vira mentira no disco");
  assert(/REABRA o relatorio/.test(kit.wrap), "sem reabertura, o relatorio que afirma o falso fica no disco e e o que a proxima sessao le");
  assert(/nenhum relatorio `\.txt` ficou DENTRO do repo/.test(kit.wrap), "nada manda conferir onde o relatorio foi gravado — relatorio na raiz vira nao rastreado que ninguem identifica");
  assert(/COMMIT MAIS NOVO/.test(kit.wrap), "o 1b ainda ordena por data — relatorio REABERTO tem data nova e passa a mascarar o que interessa");
  assert(/declarado PEND[ÊE]NCIA/.test(kit.wrap), "o 1b so olha um relatorio: o que declarou pendencia fica mentindo no disco (medido em campo)");
  // (7) o numero do checklist e derivado do texto da propria WO
  assert(/DERIVADO, nunca estimado/.test(kit.woTemplate), "o modelo de WO nao exige derivar as contagens do texto final — numero de memoria vira desvio de quem aplica, que estava certo");
  return "ok";
});
```

## Edição 12 — a casa: `.claude/skills/wrap/SKILL.md`

> Sem esta edição o **C43 fica VERMELHO** — foi conferido em sandbox, ele acusa nominalmente `.claude/skills/wrap/SKILL.md`.

**Âncora** *(ocorrência única — o bullet do `1b`)*:

```
- **ANTES de escrever qualquer coisa:** abra o **relatório mais recente** em `../AAMMDD-HHMM-code-*.txt`
  e confira o que ele AFIRMA contra `git status` e `git log`. O relatório é escrito antes da última
  ação, então um push que saiu depois dele fica registrado como não feito. Divergência vira uma linha
  de correção no log do dia; **conferência que passa não vira linha**.
```

**Substituir por:**

```
- **ANTES de escrever qualquer coisa:** abra o relatório que carrega o **COMMIT MAIS NOVO** em
  `../AAMMDD-HHMM-code-*.txt` — ordene por commit, **não** por nome nem por data do arquivo, porque
  relatório antigo que foi **reaberto** tem data nova — e confira o que ele AFIRMA contra `git status`
  e `git log`. Confira também **qualquer relatório anterior que tenha declarado PENDÊNCIA**: ele é o
  que uma sessão futura vai ler. O relatório é escrito antes da última ação, então um push que saiu
  depois dele fica registrado como não feito. Divergência vira uma linha de correção no log do dia;
  **conferência que passa não vira linha**.
- **O campo do push se escreve com o RESULTADO REAL**, nunca «pendente» por antecipação. Se ficar
  mesmo pendente, **REABRA o relatório** e corrija quando resolver — o arquivo que afirma o falso é o
  que a próxima sessão lê. E confira que nenhum relatório `.txt` ficou **DENTRO do repo**
  (`git status` o mostraria como não rastreado): o lugar dele é a pasta-pai, e relatório na raiz vira
  um `??` que ninguém identifica.
```

---

## Fora de escopo

- **Não fechar a i-N56.** Ela ganha o quarto caso e uma resposta praticada; decidir se vira regra do harness é de outro ciclo.
- **Não mexer no `C31`.** Ele está verde e nenhuma edição desta WO toca a frase que ele cobra.
- **Nenhuma carta.** A resposta à carta 04 sai pela raia do chat, depois desta WO, para chegar com a regra escrita em vez da promessa.
- **Não corrigir os relatórios antigos do KCM** que declararam pendência de push. A regra passa a valer daqui para a frente; reescrever registro velho falsificaria o que foi escrito.

## Armadilhas desta WO

- **CRLF no template, LF no `validate.js`.**
- **A Edição 7 tem DUAS ocorrências.** Se editar só uma, o C55 passa (ele testa `kit.wrap`) e o **C43 acusa** a que faltou. Confira a contagem no checklist.
- **A Edição 3 termina com `");`** — é o fim de um `L.push(...)`. Se apagar o `);` o build quebra com erro de sintaxe, não com check vermelho.
- **As Edições 9, 10 e 11 mexem no mesmo arquivo em três lugares distantes.** Aplique na ordem e confira o `git diff` antes do build.
- **A ordem entre gerador e harness importa:** com as Edições 9 e 10 aplicadas e o gerador ainda velho, o harness fica vermelho de propósito. Não confunda com erro de aplicação — aplique **tudo** antes de rodar.

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` — sem erro, **18 módulos**.
- [ ] `node validate.js index.html` → **18/18 nichos · 99/99 checagens · 0 erros**. *99 = 98 + o C55.*
- [ ] C28 imprime **exatamente** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`. **Diferente = PARE.**
- [ ] `index.html` fica em **833.401 bytes** (era 828.852).
- [ ] Contagens **derivadas do texto final**, não estimadas — todas em `src/index.template.html`:
      `Já arquivado:` → **1** · `evidência com a DATA errada` → **1** · `mais recente vence` → **1** ·
      ``Arquivo sob `.claude/` o chat entrega INTEIRO`` → **1** · `o bloco de commit e de quem APLICA` → **1** ·
      `DERIVADO, nunca estimado` → **1** · `COMMIT MAIS NOVO` → **1** ·
      **`RESULTADO REAL` → 2** e **`REABRA o relatorio` → 2** *(as duas skills geradas — é isto que prova que a Edição 7 pegou as duas ocorrências)*.
- [ ] **Prova negativa, obrigatória:** troque `numa terceira linha **Já arquivado:**` por `numa lista à parte`, rode `build` + `validate`, confirme o **C55 vermelho**, e **desfaça**.
- [ ] `git diff --stat` mostra **4 arquivos**: `src/index.template.html`, `validate.js`, `index.html`, `.claude/skills/wrap/SKILL.md`.

## Ao terminar — registros (canal CODE)

**`meta/DECISIONS.md`** — acrescente:

```
### D-136 — A lista não perde item e o relatório não mente (wo0105)
Sete correções, cinco vindas de fora. **(1)** «Arquivar/Manter» ganha saída: a lista se monta a partir de uma LISTAGEM do mount, nunca da memória do que chegou, e ganha o terceiro estado «Já arquivado» — sem ele a lista ou cresce para sempre ou perde item em silêncio, que foi o que o dono mediu cinco turnos depois da wo0102, com quem escreveu a regra. **(2)** O P8 ganha a quarta espécie: **a evidência com a DATA errada**, que se disfarça de leitura porque a medição é real — o mount responde o AGORA, e usá-lo para refutar uma afirmação sobre o ENTÃO é memória vestida de medição; sinal de alarme é o dono afirmar como testemunha e o artefato «não mostrar», porque o mais provável é que ele tenha consertado o que relatou. **(3)** «O relatório lidera, sempre» vira **«compare os dois carimbos, o mais recente vence»** — devolução da carta 04 do FlatDrop, com o contraexemplo da rotina deles (o dono commita entre relatórios) e a tabela de cinco diagnósticos. **(4)** O `1b` ordena por **commit**, não por data, e passa a conferir também qualquer relatório que tenha declarado pendência — o de data mais nova pode ser um relatório antigo reaberto. **(5)** O campo do push se escreve com resultado real, o relatório se **reabre** se ficar pendente, e o fecho confere que nenhum `.txt` ficou dentro do repo — medido em campo: um relatório na raiz do repositório virou o `??` que ninguém identificou, e o executor que tentou identificá-lo respondeu errado por raciocínio em vez de leitura. **(6)** Arquivo sob `.claude/` o chat entrega INTEIRO: configuração do executor não é aplicável pelo executor, e o classificador barra com razão. **(7)** Havendo WO no turno, o bloco de commit é de quem aplica e cobre tudo. **Custo de teto: zero** (C28 idêntico). Cobrado pelo **C55** e por três cláusulas novas do C43. *Registro de método:* a i-N56 disparou três vezes nesta leva, e desta vez as asserções foram remiradas ao **efeito** em vez de o texto ser contorcido — o oposto do que a wo0102 fez.
```

**`meta/IDEAS.md`** — na seção da **i-N56**, logo após o parágrafo «Gatilho CUMPRIDO (2026-08-22, wo0102)»:

```
**Quarta, quinta e sexta ocorrências (2026-08-27, wo0105) — e a resposta praticada.** Três asserções (`C33`, `C53`, `C43`) reprovaram a leva por **frase literal** em vez de efeito, e as três frases eram exatamente as que a leva precisava trocar. Desta vez **não** se contorceu o texto: as três passaram a mirar o efeito («existe critério de desempate entre os dois canais» · «o fecho abre um relatório anterior e o confronta com o git ANTES de escrever»). A ideia segue ABERTA — o que falta agora não é caso, é decidir se «asserção mira efeito, não frase» vira **regra de escrita de check** no CEREBRO. *Gatilho: a próxima vez que uma leva for reprovada por frase literal.*
```

**`meta/STATUS.md`** — versão **v1.121.0**, harness **18/18 · 99/99**. **Procure `98` no arquivo INTEIRO** e atualize todas as ocorrências.

**`meta/CHANGELOG.md`** — entrada nova da **v1.121.0** resumindo a leva.

> **Atenção:** o **C54** confere `KIT_VERSION` contra o topo do CHANGELOG e o cabeçalho do STATUS. Ao subir para v1.121.0, **atualize `const KIT_VERSION` em `src/index.template.html` no mesmo commit** — foi exatamente isto que a wo0103 teve de consertar.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · desvios do texto literal · arquivos tocados · build/validate com os números · **o resultado da prova negativa** · o commit. Campo do push com o **resultado real**.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html .claude/skills/wrap/SKILL.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md meta/workorders/260827-wo0105-a-lista-nao-perde-item-e-o-relatorio-nao-mente.md
```

```
git commit -m "feat(kit): a lista nao perde item e o relatorio nao mente (v1.121.0)" -m "Arquivar/Manter derivado de listagem do mount e com terceiro estado Ja arquivado. P8 ganha a quarta especie: evidencia com a data errada, que se disfarca de leitura porque a medicao e real. O relatorio lidera sempre vira compare os dois carimbos e o mais recente vence, com tabela de cinco diagnosticos (devolucao da carta 04 do FlatDrop). O passo 1b ordena por commit e confere tambem relatorio que declarou pendencia. Campo do push com resultado real, relatorio se reabre, e o fecho confere que nenhum txt ficou dentro do repo. Arquivo sob .claude o chat entrega inteiro. Havendo WO, o bloco de commit e de quem aplica. Check C55 com prova negativa e tres clausulas novas no C43. Tres assercoes remiradas ao efeito em vez de a frase literal, ao contrario do que a wo0102 fez. Teto inalterado: C28 identico."
```

```
git push
```
