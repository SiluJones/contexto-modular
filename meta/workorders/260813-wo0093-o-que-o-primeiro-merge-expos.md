# WO 0093 — O que o primeiro merge real expôs: carimbo ambíguo, revogação sem escopo, e um diagnóstico refutado

> **Tipo:** WO de CÓDIGO + registro (mista).
> **Config sugerida:** Sonnet, esforço **médio**. Sete edições, todas mecânicas.
> **Pré-requisito:** `KIT_VERSION 1.111.0`, commit da wo0092 aplicado, `main` limpo, harness **18/18 · 91/91 · 0 erros**.
> **Base:** o **primeiro merge real** do pacote de update, no Mapsmith (`mapsmith_10_-_Retomada.md`, 2026-08-13). O merge correu como devia — nada foi aplicado, tudo foi reportado — e o relatório do outro lado expôs três defeitos nossos, um deles uma afirmação minha **refutada com evidência**.
> **Depende de:** wo0092.
> **Não bloqueia o Mapsmith:** o merge de lá pode seguir com a leva (ii) enquanto esta WO entra aqui. O que ela conserta é o pacote **seguinte** e o do Sand-Land-Map.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

---

## 1. Por que

O primeiro pacote de update chegou ao Mapsmith e o merge fez exatamente o que o prompt pede: **leu, varreu pelo fato, não aplicou nada, e reportou.** Três coisas voltaram, e as três são nossas.

**(a) O carimbo de modos é ambíguo, e travou o merge num ponto legítimo.** O manifesto declara `Modos ligados: skills nao`, e **o mesmo pacote envia duas skills** para `.claude/skills/`. O outro lado registrou:

> *«Ou o toggle “skills” significa outra coisa (uma seção do kit, não a pasta), ou o pacote foi gerado com o modo esquecido. Não removo nada — é exatamente o caso que o manifesto manda reportar.»*

**A leitura está certa e a nossa etiqueta está errada.** `skillsOn` é o **pacote de skills do nicho** (comandos opcionais por domínio); as skills do modo Code — `apply-wo` e `wrap` — viajam com `Code sim`. O leitor não tinha como saber, e a regra «reporte, não remova» funcionou como rede. Pior: o projeto tem uma skill própria (`sondar`, 57 linhas, de onde saiu a nossa D-122) que o carimbo poderia levar alguém a tratar como sobra.

**(b) A revogação não tinha escopo, e o outro lado descobriu o limite antes de nós.** Sobre a revogação `sessão → turno`:

> *«Nem toda ocorrência é instrução. CEREBRO.md:28,36 usam “sessão” como unidade de custo medido (“já custou uma sessão”, “três dias… sem um único log”) — isso é fato histórico, não regra de cadência. Não trocar.»*

**Trocar a palavra num custo medido falsifica o registro para consertar a regra.** A revogação atinge o texto que **manda**, não o que **relata** — e isso não estava escrito em lugar nenhum.

**(c) Um diagnóstico meu foi refutado com evidência, e estava no pacote como fato.** A wo0092 e o guia afirmaram que, sem `Write` no `allow`, *«a permissão nega os dois»* e que essa era *«a metade mecânica da IDEA-056»*. O outro lado mediu:

> *«os relatórios de trabalho existem — foi de `../260811-1311.txt` e dos dezoito irmãos dele que eu li cada aplicação desta semana. E os logs 2026-08-06 a 2026-08-11 foram criados, por WO, em arquivos que não existiam. (…) sem `Write`, o comportamento observado não é negar em silêncio — é pedir aprovação a cada vez, e o dono vem aprovando.»*

**Está certo, e eu estava errado.** A correção continua valendo — atrito e fragilidade —, mas o efeito é outro, e a causa real da IDEA-056 é a que o CEREBRO deles já tinha medido: *«fim de sessão nunca chega numa conversa de planejamento longa»*. **Afirmação sobre o repositório de outro projeto é hipótese até ele medir.**

**O que NÃO precisa de conserto, e vale registrar:** a varredura por fato **funcionou**. Ela achou o que nenhuma comparação de template acharia — uma contradição **dentro** do CEREBRO deles (três linhas mandando «arquivo inteiro, nunca pedaços» e uma quarta, mais nova, mandando delta com âncora, com a prática seguindo a nova e a velha morta sem ninguém notar) — e a regra «reporte, não remova» impediu três falsos positivos que uma busca literal teria apagado.

## 2. Contexto factual

Medido em sandbox no estado da wo0092 (build reproduzindo `index.html` byte a byte — **808.190** —, harness verde 18/18 · 91/91 antes de qualquer edição).

- `skillsOn = skillsPackOn() && niche.skillsPack && (niche.skillsPack.skills||[]).length > 0` — confirmado no fonte: é o pacote do **nicho**. As skills do Code entram sob `if(codeOn)`, em bloco separado.
- **Custo de teto: ZERO.** Manifesto e correções obrigatórias não passam por `buildInstr`. C28 idêntico: `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`. **Sexta leva seguida.**
- `index.html` vai de **808.190 → 809.172** bytes.
- **Erro no guia de entrega, também apontado pelo merge:** o §0 dizia `v1.111.0` e o §1 ainda mandava conferir `v1.110.1` — resíduo da revisão 1. **É a D-123 (instantâneo de dado derivável) violada por mim, no documento que a leva ao outro projeto.** O guia sai corrigido junto desta WO; o número some e dá lugar à regra («a versão que o manifesto carimbar tem de ser a mesma da última decisão registrada»).

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** o relatório de merge do Mapsmith, lido inteiro; o `buildUpdateManifest()` e o `buildUpdatePack()` no fonte; e o `settings.json` deles, relido para conferir a refutação.

**Não truncado.** As três seções do relatório (carimbo, revogadas, correções obrigatórias) e as três respostas (a)(b)(c).

**Contagem declarada: 3 defeitos nossos** — carimbo ambíguo · revogação sem escopo · diagnóstico refutado. **3 regiões** no `src/index.template.html`, **1 ponto** no `validate.js` (C48 novo), **1 documento** fora do repo (o guia). **Conteste antes de agir.**

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.111.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.112.0";
```

---

## Edição 2 — `src/index.template.html` · o carimbo diz de que skills está falando

**Âncora** (uma linha, em `buildUpdateManifest`):

```
  L.push(`- Modos ligados: skills ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"} · ASU ${asuModeOn() ? "sim" : "nao"} · compartilhado ${groupModeOn() ? "sim" : "nao"}`);
```

**Substituir por:**

```
  L.push(`- Modos ligados: skills-do-nicho ${skillsOn ? "sim" : "nao"} · Code ${codeOn ? "sim" : "nao"} · ASU ${asuModeOn() ? "sim" : "nao"} · compartilhado ${groupModeOn() ? "sim" : "nao"}`);
  if(codeOn){
    L.push("- **`skills-do-nicho` NAO e a pasta `.claude/skills/`.** Sao os comandos opcionais do NICHO (um pacote a parte). As skills do modo Code — `apply-wo` e `wrap` — viajam com `Code sim` e estao neste pacote, em `.claude/skills/`. Se voce tem outras skills ali (uma sonda, um lint), elas sao suas: o kit nao as envia e **nao as declara sobra**.");
  }
```

---

## Edição 3 — `src/index.template.html` · a revogação ganha escopo

**Âncora** (uma linha):

```
    L.push("**Varra pelo FATO, nao pela frase.** O texto da tabela e como o KIT dizia — o seu arquivo pode dizer");
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece, e passa a vir depois do bloco novo):

```
    L.push("**A revogacao atinge o texto que MANDA, nao o que RELATA.** «Ao final de cada sessao, entregue X» e");
    L.push("instrucao e sai; «isso ja custou uma sessao inteira» e fato historico medido e FICA — reescrever o");
    L.push("relato falsifica o registro para consertar a regra. Mesma palavra, papeis opostos: antes de trocar,");
    L.push("pergunte se a frase manda fazer algo ou conta o que aconteceu.");
    L.push("");
```

---

## Edição 4 — `src/index.template.html` · o efeito real da falta de `Write`

**Âncora** (uma linha, dentro do array `obrigatorio`):

```
        "**`Write` no `allow`.** Sem ele, as skills mandam criar o log do dia e o relatorio de trabalho, e a permissao nega o que a skill pede. Se o seu arquivo tem `defaultMode: acceptEdits`, ele disfarca a falta — funciona, mas por outro motivo, e para de funcionar no dia em que o modo mudar.",
```

**Substituir por:**

```
        "**`Write` no `allow`.** As skills mandam CRIAR o log do dia e o relatorio de trabalho. Sem `Write` isso nao e negado em silencio — vira **pedido de aprovacao a cada arquivo novo**, e o custo e atrito: numa sequencia longa, o passo que pede permissao e o primeiro a ser pulado. Se o seu arquivo tem `defaultMode: acceptEdits`, ele disfarca a falta — funciona, mas por outro motivo, e para de funcionar no dia em que o modo mudar.",
```

---

## Edição 5 — `validate.js` · check C48

**Âncora** (início do C47 — inserir **imediatamente ANTES**, com uma linha em branco de separação):

```
check("C47 o fecho escreve o log e a medicao tambem e arquivo (wo0092): a skill wrap cria logs/, e nenhum pedido ao executor vai colado na mensagem", () => {
```

**Inserir IMEDIATAMENTE ANTES:**

```
check("C48 o pacote nao confunde quem le (wo0093): carimbo de skills desambiguado, revogacao distingue mandar de relatar, e o efeito de Write e atrito e nao negacao", () => {
  const n = T.normNiche(T.NICHES.dev);
  const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
  S.workmode.codeMode = "yes";
  const pack = T.buildUpdatePack(n); const man = pack.manifest;
  S.workmode.codeMode = prev;
  // (1) o carimbo dizia "skills nao" e o pacote mandava duas skills — o leitor nao tinha como distinguir
  // O assert olha a LINHA do carimbo, nao o manifesto inteiro: a nota explicativa logo abaixo tambem
  // contem "skills-do-nicho", e sem o recorte o check ficava verde com o carimbo antigo (prova
  // negativa 1 da wo0093 mostrou isso).
  const linhaCarimbo = (man.split("\n").find(l => l.indexOf("- Modos ligados:") === 0) || "");
  assert(/skills-do-nicho/.test(linhaCarimbo), "o carimbo ainda diz so 'skills', e o pacote envia `.claude/skills/` mesmo assim — o projeto que recebeu leu como choque e ficou parado, corretamente");
  assert(/NAO e a pasta `\.claude\/skills\/`/.test(man), "o manifesto nao explica que skills-do-nicho e outra coisa da pasta de skills do modo Code");
  assert(/nao as declara sobra/.test(man), "o manifesto nao protege as skills PROPRIAS do projeto (uma sonda, um lint) de serem lidas como sobra de configuracao");
  // (2) revogacao: instrucao sai, relato historico fica
  assert(/atinge o texto que MANDA, nao o que RELATA/.test(man), "a varredura de revogacoes nao distingue instrucao de relato — trocar a palavra num custo medido falsifica o registro para consertar a regra");
  assert(/fato historico medido e FICA/.test(man), "falta o lado que preserva o relato");
  // (3) o efeito de Write ausente e atrito, nao negacao silenciosa (refutado em campo pelo mapsmith)
  const setEntry = pack.files.find(f => f.real === ".claude/settings.json");
  const obrig = (setEntry.obrigatorio||[]).join(" ");
  assert(/pedido de aprovacao a cada arquivo novo/.test(obrig), "a correcao obrigatoria ainda afirma que a falta de Write NEGA — em campo o efeito e pedir aprovacao, e o projeto refutou com os relatorios e logs que existem");
  assert(!/a permissao nega o que a skill pede/.test(obrig), "sobrou a afirmacao refutada de que a permissao nega");
  assert(/o primeiro a ser pulado/.test(obrig), "a correcao nao diz por que o atrito importa, entao vira detalhe cosmetico");
  return "ok";
});
```

---

## Edição 6 — `meta/DECISIONS.md` · registra a D-127

**Âncora** (última linha do arquivo, fim da D-126):

```
`KIT_VERSION 1.111.0`. **Custo de teto ZERO nas nove edições** — quinta leva seguida: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.110.1; folga do `narrative` em **289**. `index.html` de **805.153 → 808.190** bytes. Harness **18/18, 90/90 → 91/91, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-127 — O primeiro merge real do pacote expôs três defeitos nossos: carimbo ambíguo, revogação sem escopo, e um diagnóstico refutado com evidência (wo0093)

**Base.** `mapsmith_10_-_Retomada.md` (2026-08-13) — o primeiro pacote de update a ser processado por um projeto irmão. **O merge correu como o kit projetou:** nada foi aplicado, tudo foi reportado, a varredura foi pelo fato, e o outro lado discordou de nós em três pontos com evidência na mão. Os três eram nossos.

**(a) O carimbo de modos é ambíguo.** O manifesto declara `skills nao` e **o mesmo pacote envia duas skills** para `.claude/skills/`. O outro lado parou e reportou — *«ou o toggle significa outra coisa, ou o pacote foi gerado com o modo esquecido; não removo nada»* — que é exatamente o que a regra do carimbo manda fazer. **A leitura estava certa e a etiqueta errada:** `skillsOn` é o pacote de skills **do nicho**; as skills do modo Code viajam com `Code sim`. Pior, o projeto tem uma skill própria (`sondar`, de onde saiu a nossa D-122) que o carimbo poderia levar alguém a tratar como sobra de configuração. O carimbo passa a dizer `skills-do-nicho`, com nota explícita de que a pasta `.claude/skills/` é outra coisa e de que **skill própria do projeto não é sobra**.

**(b) A revogação não tinha escopo, e o outro lado achou o limite antes de nós.** Sobre `sessão → turno`: *«nem toda ocorrência é instrução — “já custou uma sessão”, “três dias sem um único log” é fato histórico, não regra de cadência»*. **Trocar a palavra num custo medido falsifica o registro para consertar a regra.** A varredura passa a distinguir: **a revogação atinge o texto que MANDA, não o que RELATA.** Mesma palavra, papéis opostos.

**(c) Uma afirmação nossa sobre o repositório deles foi refutada com evidência.** A wo0092 e o guia diziam que, sem `Write` no `allow`, *«a permissão nega os dois»*, e chamavam isso de «a metade mecânica da IDEA-056». Eles mediram: os relatórios de trabalho existem (dezenove arquivos), e os logs de 06 a 11/08 foram **criados** em arquivos que não existiam. **Sem `Write`, o efeito observado é pedir aprovação a cada vez, não negar em silêncio.** A correção continua valendo — atrito e fragilidade, e numa sequência longa o passo que pede permissão é o primeiro a ser pulado —, mas o texto foi corrigido, e a causa real da IDEA-056 é a que o CEREBRO deles já tinha medido: *«fim de sessão nunca chega numa conversa de planejamento longa»*. **Regra que sai daqui: afirmação sobre o repositório de outro projeto é hipótese até ele medir** — e o pacote deve enunciá-la como pergunta, não como diagnóstico.

**O que o merge confirmou que está certo, e é o retorno mais valioso.** A **varredura por fato funcionou**: achou o que nenhuma comparação de template acharia — uma contradição **dentro** do CEREBRO deles, com três linhas mandando «arquivo inteiro, nunca pedaços» e uma quarta, mais nova, mandando delta com âncora; a prática seguiu a nova e a velha esteve morta o tempo todo sem ninguém notar. E a regra **«reporte, não remova»** impediu três falsos positivos que uma busca literal teria apagado (o bloco de commit da raia de planejamento, e dois `git diff` que são o executor conferindo, não entregando).

**Erro de método meu, na mesma entrega.** O guia dizia `v1.111.0` no §0 e `v1.110.1` no §1 — resíduo da revisão anterior, apontado pelo merge. **É a D-123 violada por mim, no documento que a leva ao outro projeto.** O guia passa a não carimbar número: a regra é «a versão do manifesto tem de ser a mesma da última decisão registrada».

**Check C48 novo**, com **cinco provas negativas** — e a primeira delas consertou o próprio check: ele afirmava contra o manifesto inteiro e ficava verde com o carimbo antigo, porque a nota explicativa também contém a palavra nova. Passou a recortar a linha do carimbo. **Segundo caso registrado de prova negativa consertando o instrumento** (o primeiro foi o C45, D-123).

`KIT_VERSION 1.112.0`. **Custo de teto ZERO nas cinco edições** — sexta leva seguida: C28 imprime `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`, idêntico à v1.111.0; folga do `narrative` em **289**. `index.html` de **808.190 → 809.172** bytes. Harness **18/18, 91/91 → 92/92, 0 erros**.
```

---

## Edição 7 — `meta/IDEAS.md` · registra o retorno do primeiro merge

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-13 — O primeiro merge real (Mapsmith): três defeitos nossos, e a confirmação de que a varredura por fato vale (D-127, wo0093)
O pacote chegou e o merge fez o que o kit projetou: **leu, varreu pelo fato, não aplicou nada, reportou.** Voltaram três defeitos, todos nossos — carimbo de modos ambíguo (`skills nao` num pacote que envia duas skills), revogação sem escopo (trocar «sessão» num custo medido falsifica o registro), e **uma afirmação nossa sobre o repositório deles refutada com evidência** (sem `Write` o efeito é pedir aprovação, não negar; os logs e relatórios existem).

**A regra que sai disso:** *afirmação sobre o repositório de outro projeto é hipótese até ele medir.* O pacote deve enunciá-la como pergunta, não como diagnóstico — foi o guia que errou o modo, não a observação.

**E a confirmação que valia o preço da leva inteira:** a varredura por fato achou uma **contradição interna** no CEREBRO deles que nenhuma comparação de template acharia — três linhas mandando «arquivo inteiro, nunca pedaços» contra uma quarta, mais nova, mandando delta com âncora; a prática seguia a nova e a velha estava morta sem ninguém notar. E «reporte, não remova» impediu três falsos positivos que uma busca literal teria apagado. **A D-124 pagou-se no primeiro uso.**

**Ainda aberto de lá, para a leva seguinte:** o merge dos dois `fusao` (CEREBRO e INSTRUCOES) não foi feito — é onde moram as sete decisões D-119…D-126 —, e a pergunta do §6 sobre a seção da sonda descrever o que eles de fato fazem continua sem resposta, por depender desse merge.
```

---

## Fora de escopo

- **O merge do Mapsmith** — decisão deles e do autor; esta WO não o bloqueia nem depende dele.
- **A contradição interna do CEREBRO deles** (R4) — é do projeto deles resolver; o kit já dá a regra nova.
- **Sand-Land-Map** — recebe o pacote depois, já com estas correções.

## Armadilhas desta WO

- **Fim de linha:** template é **CRLF**, `validate.js` é **LF**. Todas as âncoras do template são de **uma linha** nesta WO. Confira ao fim: **0 LF soltos**.
- **A Edição 3 insere ANTES da âncora.** A linha «Varra pelo FATO…» continua existindo, agora depois do bloco novo. Se ela sumir, PARE.
- **`\.claude\/skills\/`** dentro da regex do C48 tem escapes obrigatórios. Copie literalmente.
- **Não «simplifique» `linhaCarimbo` para o manifesto inteiro** no C48 — a nota explicativa contém a mesma palavra, e o check volta a passar com o carimbo antigo. Foi a prova negativa 1 que expôs isso.
- **Números de check:** C48 é o próximo livre (C47 é da wo0092).

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra **exatamente** `src/index.template.html`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 3 defeitos, 3 regiões no template, 1 ponto no `validate.js`.** Divergiu, **PARE e reporte**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 92/92 checagens, 0 erros**, com **C48 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6611/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7497/7600`.
- [ ] `index.html` com **809.172 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildUpdateManifest()` (Edições 2 e 3) e o array `obrigatorio` em `buildUpdatePack()` (Edição 4). O C48 gera o pacote de verdade e afirma sobre o manifesto e sobre o campo.
  - **Prova de vida:** gere o pacote pelo `index.html` (Desenvolvimento · Modo Code ligado) e leia as **cinco primeiras linhas** do `_UPDATE-MANIFEST.md`: o carimbo deve dizer **`skills-do-nicho nao`**, e a linha seguinte deve explicar que a pasta `.claude/skills/` é outra coisa. Depois force o vermelho: troque `skills-do-nicho` de volta para `skills` na Edição 2, rode o harness, confirme que o **C48 falha** com a mensagem sobre o projeto ter ficado parado corretamente, e desfaça.
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados · validação (C28, C48, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita `v1.111.0` e `91/91`. Atualize as vivas para `v1.112.0` e `92/92`, cite o **C48** antes do C47, acrescente **D-127**. Orçamento inalterado. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260813-wo0093-o-que-o-primeiro-merge-expos.md
```

```
git commit -m "fix(kit): o primeiro merge real expos tres defeitos do pacote" -m "O pacote chegou ao mapsmith e o merge fez o que o kit projetou: leu, varreu pelo fato, nao aplicou nada, reportou. Voltaram tres defeitos, os tres nossos." -m "O carimbo declarava skills nao num pacote que envia duas skills - skillsOn e o pacote do NICHO, e as skills do modo Code viajam com Code sim. O leitor nao tinha como distinguir e parou, corretamente. O carimbo passa a dizer skills-do-nicho, e declara que skill propria do projeto nao e sobra." -m "A revogacao nao tinha escopo: trocar sessao por turno num custo medido falsifica o registro para consertar a regra. Passa a valer so para o texto que MANDA, nunca para o que RELATA." -m "E uma afirmacao nossa sobre o repo deles foi refutada com evidencia: sem Write o efeito e pedir aprovacao a cada arquivo, nao negar em silencio - os logs e os dezenove relatorios existem. Regra que fica: afirmacao sobre o repositorio de outro projeto e hipotese ate ele medir." -m "Check C48 com cinco provas negativas, e a primeira consertou o proprio check. Custo de teto zero. wo0093, D-127."
```

```
git push
```
