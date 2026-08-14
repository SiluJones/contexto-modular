# WO 0098 — Varredura muda não é varredura limpa: o pacote confere se as superfícies chegaram

> **Tipo:** WO de CÓDIGO + registro (mista). Quatro edições no template, uma no `validate.js`.
> **Config sugerida:** Sonnet, esforço **médio**.
> **Pré-requisito:** `KIT_VERSION 1.116.0`, commit `6e498b6`, `main` limpo, harness **18/18 · 93/93 · 0 erros**. Confirmado no mount (`_MANIFEST` de 14/08 10:00).
> **Base:** auditoria do `.claude/` do Sand-Land-Map, possível só hoje — a pasta esteve **ausente do mount desde o início da negociação** e ninguém percebeu.
> **Depende de:** wo0097.
> **Bloqueia:** o pacote do Sand-Land-Map.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 5 e 6.

---

## 1. Por que

**O `.claude/` do Sand-Land-Map nunca esteve no mount, em nenhuma das rodadas desta negociação — e o defeito não é deles: é meu, e é do kit.**

O `.gitignore` deles tinha uma contradição interna (`# NAO ignore .claude/…` na linha 2, `.claude/` na linha 21), o FlatDrop obedeceu à regra e pulou a pasta, e **eu varri o que chegou e chamei de auditoria completa**. Só na última rodada eu declarei a ausência — e mesmo então, dentro de uma frase mal escrita que confundiu o autor, sugerindo que o problema era do Mapsmith.

**A ausência valia mais que tudo o que eu varri.** Repostos os três arquivos hoje, os três estão pré-D-108/D-115:

| arquivo | o que tem |
|---|---|
| `.claude/skills/wrap/SKILL.md` | *«Entregue o commit em TRÊS blocos separados»* — a revogação **v1.104.0** literal |
| `.claude/skills/apply-wo/SKILL.md` | *«Só então proponha o commit em 3 blocos separados»* — a mesma |
| `.claude/settings.json` | sem `Write`, sem `additionalDirectories`, sem `defaultMode` |

**São exatamente as duas superfícies que o pacote manda varrer primeiro** — e o merge deles teria rodado a instrução *«varra as skills primeiro»* sobre um mount sem skills, achado nada, e concluído «limpo».

**O defeito estrutural é esse: uma instrução que executa e não faz nada é pior que instrução nenhuma.** Instrução ausente deixa a lacuna visível; instrução que roda no vazio produz **silêncio, e silêncio é lido como limpeza**. O pacote diz «varra as skills» sem nunca perguntar se as skills chegaram.

**E há a segunda metade, que é do projeto e não do pacote:** o que o `.gitignore` esconde **não tem backup nem histórico**. As skills e as permissões do Sand-Land-Map ficaram fora do versionamento por tempo indeterminado, por causa de uma linha que contradiz o comentário duas linhas acima dela no mesmo arquivo.

**Nota de honestidade, porque é o padrão que se repete.** Esta é a **quarta vez** nesta negociação em que uma ausência relatada (ou não relatada) por mim era do instrumento, não do arquivo: o `grep … || echo "ausente"` que inventou um arquivo faltando; a expressão `/sess[aã]/i` que não casava «sessões»; a auditoria do Mapsmith que não abriu o pacote; e agora uma auditoria «completa» sobre um mount ao qual faltava a pasta mais perigosa. **A regra da D-126 continua certa e continua sendo violada por quem a escreveu** — daí o remédio ser um check e um gatilho, não uma promessa.

## 2. Contexto factual

Medido em sandbox no estado `6e498b6` (repo reconstruído do mount de hoje 10:00, build reproduzindo `index.html` byte a byte — **814.394** — e harness verde 18/18 · 93/93 antes de qualquer edição).

- O `_TREE_Sand-Land-Map.md` de ontem registrava `.claude/ [ignorada: gitignore]`; o de hoje traz os três arquivos, com `launch.json` e `settings.local.json` corretamente pulados.
- **Custo de teto: ZERO.** Prompt de update, higiene e gatilhos vivem fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**.
- `index.html` vai de **814.394 → 816.174** bytes.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** o `buildUpdatePrompt()` gerado, lido inteiro na ordem em que o leitor o lê — foi assim que a inversão apareceu (a ordem de varrer vinha antes de qualquer conferência de presença). Mais as `HYGIENE_RULES` e a `TRIGGERS_BASE`, lidas inteiras.

**Não truncado.** O prompt inteiro, as 17 regras de higiene, a tabela de gatilhos inteira.

**Contagem declarada: 1 defeito estrutural**, atendido em **3 superfícies** — o prompt (pré-voo), a higiene (o que o ignore esconde) e a tabela de gatilhos (o evento da varredura muda). **Conteste antes de agir.**

> **Esta é qual pergunta: «está lá?» ou «presta?»** — aplicando a regra que a wo0097 instituiu. Este inventário responde **«está lá?»**: confirmei que o prompt não conferia presença e que a higiene não tinha a regra. **Não responde «presta?»**: se o pré-voo de fato muda o comportamento do merge do outro lado, só o merge do Sand-Land-Map dirá.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.116.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.117.0";
```

---

## Edição 2 — `src/index.template.html` · o pré-voo das superfícies, no prompt de update

**Âncora** (uma linha):

```
  L.push("**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
```

**Substituir por:**

```
  L.push("**Antes de comparar qualquer coisa:** liste o mount e me diga em que versao/commit este projeto esta. O pacote descreve o KIT, nao o seu repo — comparar sem saber o estado atual e comparar com memoria.");
  L.push("");
  L.push("**E confira se as superficies que eu vou mandar varrer estao AQUI.** Diga quais destes o mount NAO tem: `.claude/settings.json`, `.claude/skills/*`, `CLAUDE.md`, `meta/*`. **Ausencia nao e «nada a fazer» — e cegueira**, e ela costuma ter causa: `.gitignore` ou `.flatdropignore` deste projeto excluindo a pasta. Se as skills nao chegaram, a instrucao «varra as skills primeiro» vira um comando que executa e nao faz nada, e a superficie mais perigosa fica intacta parecendo limpa. Nesse caso me diga ANTES de comparar o resto: e mais barato refazer o upload agora do que descobrir depois que meia varredura foi no vazio.");
```

> **A posição é a regra.** Este bloco tem de vir **antes** da instrução «Varra as skills primeiro» — o C50 afirma isso por índice, porque um pré-voo que aparece depois da ordem chega quando o leitor já varreu no vazio.

---

## Edição 3 — `src/index.template.html` · `HYGIENE_RULES`, o que o ignore esconde

**Âncora** (início da regra da wo0092):

```
  "**Antes de destruir ou sobrescrever, leia o que está lá
```

**Substituir por:**

```
  "**O que o `.gitignore`/`.flatdropignore` esconde, o assistente não audita — e não sabe que não auditou.** As duas listas decidem o que chega ao Projeto, e uma linha errada ali apaga uma superfície inteira **sem erro nenhum**: a varredura roda, não acha nada, e o silêncio é lido como limpeza. O caso que dói é `.claude/` — skills e permissões, que são lidas ANTES de trabalhar. **Duas conferências baratas:** (1) o comentário do arquivo bate com as regras dele? «NÃO ignore .claude/» duas linhas acima de `.claude/` é contradição que ninguém relê; (2) o que está ignorado está **versionado em algum lugar**? Config ignorada não tem backup nem histórico, e some com a máquina. **Ausência de resultado não é resultado:** antes de dizer «varri e está limpo», confirme que havia o que varrer.",
  "**Antes de destruir ou sobrescrever, leia o que está lá
```

---

## Edição 4 — `src/index.template.html` · `TRIGGERS_BASE`, o evento da varredura muda

**Âncora** (a entrada da wo0092):

```
  ["Vai sobrescrever, mover ou apagar algo que ja existe (arquivo, pasta, config, artefato baixado)",
```

**Substituir por:**

```
  ["Uma varredura ou conferencia nao achou NADA no lugar onde deveria achar algo", "Confirme que o arquivo chegou ao mount antes de concluir que esta limpo. Cheque `.gitignore` e `.flatdropignore`: pasta excluida produz varredura muda, e silencio de ferramenta nao e ausencia de problema."],
  ["Vai sobrescrever, mover ou apagar algo que ja existe (arquivo, pasta, config, artefato baixado)",
```

---

## Edição 5 — `validate.js` · check C50

**Âncora** (início do C49 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C49 o retorno do primeiro merge (wo0094): o gerado nao usa o vocabulario que ele revoga, a sonda tem terceiro estado, e amostra nao e cobertura", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C50 varredura muda nao e varredura limpa (wo0098): o pacote confere se as superficies chegaram, e a higiene cobra o que o ignore esconde", () => {
  const n = T.normNiche(T.NICHES.dev);
  const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
  S.workmode.codeMode = "yes";
  const prompt = T.buildUpdatePrompt(n);
  S.workmode.codeMode = prev;
  // (1) o prompt confere as superficies ANTES de mandar varrer — senao a instrucao vira no-op silencioso
  assert(/confira se as superficies que eu vou mandar varrer estao AQUI/i.test(prompt), "o prompt manda varrer as skills primeiro sem conferir se elas chegaram — instrucao que executa e nao faz nada e pior que instrucao nenhuma");
  assert(/`\.claude\/skills\/\*`/.test(prompt), "a lista de superficies a conferir nao nomeia as skills, que sao a mais perigosa");
  assert(/Ausencia nao e «nada a fazer» — e cegueira/.test(prompt), "o prompt nao diz o que a ausencia significa, entao ela vira 'nada a fazer'");
  assert(/gitignore|flatdropignore/i.test(prompt), "o prompt nao aponta a causa provavel da ausencia");
  // o pre-flight precisa vir ANTES da instrucao de varrer as skills
  const iPre = prompt.indexOf("confira se as superficies"), iVarra = prompt.indexOf("Varra as **skills** primeiro");
  assert(iPre > -1 && iVarra > -1 && iPre < iVarra, "o pre-flight das superficies vem DEPOIS da ordem de varrer — quem le ja varreu no vazio antes de chegar nele");
  // (2) higiene: o que o ignore esconde
  Object.keys(T.NICHES).forEach(id => {
    const cmd = T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/o assistente não audita — e não sabe que não auditou/.test(cmd), id+": higiene sem a regra do que o ignore esconde");
    assert(/Ausência de resultado não é resultado/.test(cmd), id+": falta a formula que impede ler silencio como limpeza");
    assert(/versionado em algum lugar/.test(cmd), id+": a regra nao cobra que o ignorado tenha backup em algum lugar");
    assert(/Uma varredura ou conferencia nao achou NADA/.test(cmd), id+": tabela de gatilhos sem o evento da varredura muda");
  });
  return "ok";
});
```

---

## Edição 6 — `meta/DECISIONS.md` · registra a D-132

**Âncora** (última linha do arquivo, fim da D-131):

```
to de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.436 → 814.394** bytes. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu pela quarta vez).
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-132 — Varredura muda não é varredura limpa: o pacote confere se as superfícies chegaram antes de mandar varrê-las (wo0098)

**Base.** Auditoria do `.claude/` do Sand-Land-Map, possível só em 2026-08-14 — a pasta esteve **ausente do mount durante toda a negociação** e ninguém percebeu.

**O defeito não é do projeto: é do kit e de quem auditou.** O `.gitignore` deles tinha uma contradição interna (`# NAO ignore .claude/…` na linha 2, `.claude/` na linha 21), o FlatDrop obedeceu à regra e pulou a pasta, e a auditoria **varreu o que chegou e chamou de completa**.

**A ausência valia mais que tudo o que foi varrido.** Repostos hoje, os três arquivos estão pré-D-108/D-115: a skill `wrap` manda *«Entregue o commit em TRÊS blocos separados»*, o `apply-wo` manda *«Só então proponha o commit em 3 blocos separados»* — a revogação **v1.104.0** literal, duas vezes — e o `settings.json` não tem `Write`, `additionalDirectories` nem `defaultMode`. **São exatamente as superfícies que o pacote manda varrer primeiro**, e o merge teria rodado a instrução sobre um mount sem elas, achado nada, e concluído «limpo».

**O princípio geral: instrução que executa e não faz nada é pior que instrução nenhuma.** Instrução ausente deixa a lacuna visível; instrução que roda no vazio produz **silêncio, e silêncio é lido como limpeza**. Por isso o remédio é um **pré-voo**, e por isso a posição dele importa — o C50 afirma por índice que ele vem **antes** da ordem de varrer, porque um pré-voo tardio chega quando o leitor já varreu no vazio.

**Segunda metade, do lado do projeto:** o que o `.gitignore` esconde **não tem backup nem histórico**. A higiene ganha as duas conferências baratas — *o comentário do arquivo bate com as regras dele?* e *o que está ignorado está versionado em algum lugar?* — mais a fórmula que fecha o buraco: **ausência de resultado não é resultado**.

**Nota de honestidade, porque é o padrão que se repete.** Esta é a **quarta vez** nesta negociação em que uma ausência relatada por mim era do instrumento e não do arquivo: o `grep … || echo "ausente"` que inventou um arquivo faltando (D-126); a expressão `/sess[aã]/i` que não casava «sessões» (D-130); a auditoria do Mapsmith que não abriu o pacote (D-130); e agora uma auditoria «completa» sobre um mount sem a pasta mais perigosa. **A regra da D-126 continua certa e continua sendo violada por quem a escreveu** — daí o remédio ser check e gatilho, não promessa. E foi o autor quem apontou, de novo.

**Check C50 novo**, com **cinco provas negativas**: sem o pré-voo · pré-voo sem dizer o que a ausência significa · higiene sem a regra do ignore · sem «ausência de resultado não é resultado» · sem o gatilho da varredura muda. A asserção da **ordem** (pré-voo antes da varredura) é a que carrega mais peso e não tem prova negativa própria — ela falharia junto com a primeira.

`KIT_VERSION 1.117.0`. **Custo de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **814.394 → 816.174** bytes. Harness **18/18, 93/93 → 94/94, 0 erros**.
```

---

## Edição 7 — `meta/IDEAS.md` · registra o achado

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-14 — O `.claude/` do Sand-Land-Map nunca esteve no mount, e a auditoria não percebeu (D-132, wo0098)
Um `.gitignore` com contradição interna escondeu a pasta; o FlatDrop obedeceu; e **a auditoria varreu o que chegou e chamou de completa**. Repostos hoje, os três arquivos estão pré-D-115: as duas skills mandam entregar o commit em três blocos ao dono, e o `settings.json` não tem `Write`. **São as superfícies que o pacote manda varrer primeiro** — o merge teria rodado a instrução sobre um mount sem elas e concluído «limpo».

**Princípio geral que entra no kit:** *instrução que executa e não faz nada é pior que instrução nenhuma.* Ausente, a lacuna fica visível; rodando no vazio, produz silêncio — e silêncio é lido como limpeza. Daí o pré-voo no prompt de update, com a posição travada por check: antes da ordem de varrer, não depois.

**Quarta ocorrência do mesmo padrão nesta negociação**, sempre do lado de cá: `grep … || echo "ausente"` inventando arquivo faltando; `/sess[aã]/i` não casando «sessões»; a auditoria que não abriu o pacote; e agora esta. **A D-126 continua sendo violada por quem a escreveu**, e nas quatro vezes foi o autor ou o projeto irmão que apontou — nunca o instrumento daqui.

**Aberto, com gatilho:** vale perguntar se o `.flatdropignore` do próprio KCM esconde alguma superfície do nosso mount. *Gatilho: a próxima varredura que der zero num lugar onde deveria dar alguma coisa.*
```

---

## Fora de escopo

- **Corrigir o `.claude/` do Sand-Land-Map** — é do projeto deles; o pacote e o guia levam o diagnóstico.
- **O `.gitignore` deles** — já corrigido pelo autor.
- **Auditar o `.flatdropignore` do KCM** — registrado no IDEAS com gatilho.

## Armadilhas desta WO

- **Fim de linha:** `src/index.template.html` é **CRLF**, `validate.js` é **LF**. Todas as âncoras são de uma linha. Confira: **0 LF soltos**.
- **As Edições 3 e 4 inserem ANTES da âncora** — as regras da wo0092 permanecem logo abaixo. Se «Antes de destruir ou sobrescrever» ou «Vai sobrescrever, mover ou apagar» sumirem, **PARE**.
- **A Edição 2 tem acentuação mista de propósito:** o prompt de update é sem acento (convenção dele), a higiene da Edição 3 é com. O C50 procura as duas formas literalmente.
- **`\.claude\/skills\/\*` na regex** tem três escapes obrigatórios.
- **A asserção de ordem do C50** usa `indexOf` nas duas frases. Se você mover o bloco novo para depois de «Varra as **skills** primeiro», o check falha — de propósito.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 1 defeito, 3 superfícies.** Divergiu, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 94/94 checagens, 0 erros**, com **C50 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **816.174 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os quatro campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildUpdatePrompt()` (Edição 2), `HYGIENE_RULES` (3) e `TRIGGERS_BASE` (4). O C50 gera o prompt de verdade e afirma sobre ele, inclusive sobre a **ordem** dos dois blocos.
  - **Esta é qual pergunta:** **«está lá?»**. O harness confirma que o texto existe e em que ordem. **NÃO responde «presta?»** — se o pré-voo muda o comportamento do merge do outro lado, só o merge do Sand-Land-Map dirá.
  - **Prova de vida:** mova temporariamente o `L.push` do pré-voo para **depois** do bloco «A excecao que a regra acima NAO cobre», rode `node build.js && node validate.js index.html`, e confirme que o **C50 falha** com a mensagem sobre o leitor já ter varrido no vazio. Desfaça. *(Se ficar verde, a asserção de ordem não está mordendo, e ela é a que carrega mais peso nesta WO.)*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C50, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão e a contagem. Atualize as **vivas** para `v1.117.0` e `94/94`, cite o **C50** antes do C49, acrescente **D-132**. Orçamento inalterado. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260814-wo0098-varredura-muda-nao-e-varredura-limpa.md
```

```
git commit -m "fix(kit): o pacote confere se as superficies chegaram antes de mandar varre-las" -m "O .claude/ do sand-land nunca esteve no mount durante toda a negociacao. Um gitignore com contradicao interna escondeu a pasta, o flatdrop obedeceu, e a auditoria varreu o que chegou e chamou de completa." -m "A ausencia valia mais que tudo o que foi varrido: repostos hoje, os tres arquivos estao pre-D-115. As duas skills mandam entregar o commit em tres blocos ao dono e o settings.json nao tem Write. Sao exatamente as superficies que o pacote manda varrer primeiro, e o merge teria rodado a instrucao sobre um mount sem elas e concluido limpo." -m "Principio geral: instrucao que executa e nao faz nada e pior que instrucao nenhuma. Ausente, a lacuna fica visivel; rodando no vazio, produz silencio - e silencio e lido como limpeza. O pre-voo entra no prompt de update com a posicao travada por check: antes da ordem de varrer, nao depois." -m "Higiene ganha o que o ignore esconde, com as duas conferencias baratas, e a tabela ganha o gatilho da varredura muda. Quarta vez nesta negociacao em que uma ausencia relatada era do instrumento e nao do arquivo. Check C50, cinco provas negativas. Custo de teto zero. wo0098, D-132."
```

```
git push
```
