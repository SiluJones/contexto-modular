# WO 0095 — Título que define a UNIDADE do documento muda junto; e a exceção de domínio vira nomeada

> **Tipo:** WO de CÓDIGO + registro (mista). **Pequena em risco, 49 substituições repetidas em 17 módulos.**
> **Config sugerida:** Sonnet, esforço **médio**. Nenhuma edição é longa; a atenção vai para o que **não** trocar.
> **Pré-requisito:** `KIT_VERSION 1.113.0`, commit `8062423`, `main` limpo, harness **18/18 · 93/93 · 0 erros**. **Confirmado no mount desta vez** (`_MANIFEST` de 13/08 09:44).
> **Base:** `mapsmith_10_-_v3.md`, bloco 8 (2026-08-13) — o merge deles comparou o `LOG-TEMPLATE` do pacote linha a linha e recusou adotá-lo: *«adotar seria regredir»*.
> **Depende de:** wo0094.
> **Bloqueia:** o pacote do Sand-Land-Map e qualquer regeração do pacote do Mapsmith.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 5 e 6.

---

## 1. Por que

**O Mapsmith comparou o `LOG-TEMPLATE` do pacote com o deles e recusou adotá-lo, com razão:**

> *«E o `LOG-TEMPLATE` do pacote ainda carrega a cadência revogada em cinco linhas — “Formato do Log de Sessão”, “Objetivo da sessão”, “Última Sessão”. O nosso foi corrigido pela wo0085 (…) **Adotar seria regredir.** Volta ao kit: é a D-125 violada no gerado de novo, num arquivo que a varredura de 15 linhas não alcançou.»*

**Eles estão certos, e a wo0094 errou por excesso de zelo com a regra que eles mesmos nos deram.** A D-127 diz: a revogação atinge o que **manda**, não o que **relata**. Eu apliquei isso e classifiquei `## Objetivo da sessão` e `Formato do Log de Sessão` como **título**, portanto rótulo, portanto fica.

**Faltou o terceiro caso.** Há títulos que **rotulam** e títulos que **estruturam** — e este documento mudou de unidade: o log passou a ser **por dia** (`logs/AAAA-MM-DD.md`, com `## Conversa N` para cada conversa, wo0094). Um arquivo por dia cujo corpo pergunta *«qual era o objetivo da sessão»* e cujo fim aponta para *«a próxima sessão»* **não tem um rótulo desatualizado: tem a unidade errada**. Quem preenche escreve uma sessão por arquivo e o nome do arquivo desmente.

**A refinaria, então, tem três casos e não dois:**

| o texto | exemplo | o que acontece |
|---|---|---|
| **manda** | «ao final de cada sessão, entregue X» | sai — é a cadência revogada |
| **relata** | «isso já custou uma sessão inteira» | fica — reescrever falsifica o registro |
| **estrutura** | `## Objetivo da sessão` num arquivo por dia | **sai** — define a unidade, e a unidade mudou |

**E há um quarto caso, que a mesma varredura quase atropelou: o domínio.** No nicho de RPG, «sessão» é a **mesa de jogo**; o log dele é mesmo por sessão, e `Modelo do log de sessão (pós-jogo)` está certo. A wo0094 já preservou as 33 ocorrências dele à mão. Esta WO transforma isso em **exceção nomeada no instrumento**, em vez de disciplina de quem varre — porque a próxima varredura cega quebraria o nicho, e o check é que tem de saber.

## 2. Contexto factual

Medido em sandbox no estado `8062423` (repo reconstruído do mount de hoje 09:44, build reproduzindo `index.html` byte a byte — **813.541** — e harness verde 18/18 · 93/93 antes de qualquer edição, com os `.claude/` do próprio repo presentes).

- A cadência de **instrução** já saiu na wo0094 e está limpa; o que resta é **estrutural**: 49 pontos em 17 módulos.
- **`career.js` tinha um caso que a wo0094 não pegou:** `# logs/AAAA-MM-DD.md — log de sessão` — título do próprio arquivo de log, o mais estrutural de todos.
- **Custo de teto: ZERO.** C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`; folga do `narrative` em **295**.
- `index.html` vai de **813.541 → 813.428** bytes — **113 a menos**: a correção encolhe.

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato:** o `content` dos `contextFiles` de cada um dos 18 nichos, aberto e lido, mais o `role` do `LOG-TEMPLATE.md` de cada um. A pergunta feita a cada linha foi a da tabela acima — *manda, relata, estrutura ou domínio?*

**Não truncado.** Os 18 nichos.

**Contagem declarada: 49 substituições em 17 módulos** (`custom.js` não tem nenhuma). **Conteste antes de agir** — a tabela por arquivo está na Edição 2.

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.113.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.114.0";
```

---

## Edição 2 — `src/niches/*.js` · os títulos que estruturam

**Dez substituições literais**, aplicadas em **todos os nichos EXCETO `rpg.js`**:

| procurar | substituir por |
|---|---|
| `# LOG-TEMPLATE.md — Formato do Log de Sessão` | `# LOG-TEMPLATE.md — Formato do Log do Dia` |
| `## Objetivo da sessão` | `## Objetivo do dia` |
| `## Foco da sessão` | `## Foco do dia` |
| `## 💬 Última Sessão` | `## 💬 Última conversa` |
| `## 💬 Última sessão` | `## 💬 Última conversa` |
| `«Última Sessão» do STATUS` | `«Última conversa» do STATUS` |
| `recuperar o detalhe de uma sessão antiga` | `recuperar o detalhe de um dia antigo` |
| `[Ações para a próxima sessão.]` | `[Ações para o próximo turno.]` |
| `[O que fazer na próxima sessão.]` | `[O que fazer no próximo turno.]` |
| `# logs/AAAA-MM-DD.md — log de sessão` | `# logs/AAAA-MM-DD.md — log do dia` |

**Em `rpg.js`, APENAS esta:**

| procurar | substituir por |
|---|---|
| `## 💬 Última sessão` | `## 💬 Última conversa` |

> **`rpg.js` é domínio.** `SESSAO.md`, `Modelo do log de sessão (pós-jogo)`, `## Resumo da sessão`, `Prep da próxima sessão`, `Log — Sessão [N]`, `## 🎲 Próxima sessão` — **tudo fica**. Ali a sessão é a mesa de jogo, e o log dela é mesmo por sessão. A única que muda é o cabeçalho genérico do STATUS, que é do kit e não do domínio.

**Contagem por arquivo — confira contra a sua:**

| arquivo | subs | | arquivo | subs |
|---|---|---|---|---|
| `animation.js` | 3 | | `game.js` | 3 |
| `brainstorm.js` | 3 | | `marketing.js` | 3 |
| `business.js` | 3 | | `music.js` | 3 |
| `career.js` | 2 | | `narrative.js` | 3 |
| `client.js` | 2 | | `pixel.js` | 3 |
| `comics.js` | 3 | | `product.js` | 3 |
| `cuisine.js` | 2 | | `research.js` | 3 |
| `design.js` | 3 | | `rpg.js` | **1** |
| `dev.js` | 6 | | `custom.js` | **0** |
| | | | **total** | **49** |

---

## Edição 3 — `validate.js` · a expressão revogada ganha os títulos estruturais

**Âncora** (uma linha, dentro do C49):

```
  const REVOGADO = /ao final de (cada|uma) sess|ritual de in[ií]cio de sess|fim de sess|em toda sess|lido toda sess|log da sess|ideias da sess|handoff de sess/i;
```

**Substituir por:**

```
  // A wo0095 acrescentou os TITULOS que definem a UNIDADE do documento. Rotulo que so nomeia
  // fica (D-127, MANDA x RELATA); titulo que ESTRUTURA muda junto, porque o log passou a ser
  // por DIA — «## Objetivo da sessao» num arquivo por dia nao e rotulo, e a unidade errada.
  const REVOGADO = /ao final de (cada|uma) sess|ritual de in[ií]cio de sess|fim de sess|em toda sess|lido toda sess|log da sess|ideias da sess|handoff de sess|Formato do Log de Sess|## Objetivo da sess|## Foco da sess|Última Sess|próxima sess\.|log de sess/i;
```

---

## Edição 4 — `validate.js` · a exceção de domínio, nomeada

**Âncora** (a abertura do primeiro laço do C49, logo abaixo da linha do `assert` do `claudeMd`):

```
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
```

**Substituir por:**

```
  // Nicho em que «sessao» e VOCABULARIO DE DOMINIO, nao cadencia de trabalho: no RPG a sessao e a
  // mesa de jogo, e o log dela e mesmo por sessao. E a regra MANDA x RELATA (D-127) levada ao
  // instrumento: varredura cega aqui quebraria o nicho. Excecao nomeada, nao silenciosa.
  const DOMINIO_SESSAO = new Set(["rpg"]);
  Object.keys(T.NICHES).forEach(id => {
    if(DOMINIO_SESSAO.has(id)) return;
    const n = T.normNiche(T.NICHES[id]);
    const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
```

**E, no segundo laço do mesmo check** (o que varre os `contextFiles`), âncora:

```
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    (n.contextFiles||[]).forEach(f => {
```

**Substituir por:**

```
  Object.keys(T.NICHES).forEach(id => {
    if(DOMINIO_SESSAO.has(id)) return;
    const n = T.normNiche(T.NICHES[id]);
    (n.contextFiles||[]).forEach(f => {
```

---

## Edição 5 — `meta/DECISIONS.md` · registra a D-129

**Âncora** (última linha do arquivo, fim da D-128):

```
`KIT_VERSION 1.113.0`. **Custo de teto NEGATIVO** — «log do dia» é mais curto que «log da sessão»: C28 sai de `padrao 6611/6900 · combo 7497/7600` para **`padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`**, e a folga do `narrative` sobe de 289 para **295**. `index.html` cresce **+4.369** bytes. Harness **18/18, 92/92 → 93/93, 0 erros**.
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-129 — A refinaria MANDA × RELATA tem um terceiro caso: título que define a UNIDADE do documento muda junto. E a exceção de domínio sai da disciplina e entra no instrumento (wo0095)

**Base.** `mapsmith_10_-_v3.md`, bloco 8 (2026-08-13). Eles compararam o `LOG-TEMPLATE` do pacote linha a linha com o deles e **recusaram adotá-lo**: *«adotar seria regredir»*. Estavam certos.

**O erro foi meu, por excesso de zelo com a regra que eles mesmos nos deram.** A D-127 diz que a revogação atinge o texto que **manda**, não o que **relata**. Apliquei na wo0094 e classifiquei `## Objetivo da sessão` e `Formato do Log de Sessão` como **título**, portanto rótulo, portanto fica. **Faltou o terceiro caso:** há título que **rotula** e título que **estrutura**. Este documento mudou de unidade — o log passou a ser por **dia**, com `## Conversa N` para cada conversa. Um arquivo por dia cujo corpo pergunta *«qual era o objetivo da sessão»* e cujo fim aponta para *«a próxima sessão»* **não tem rótulo desatualizado: tem a unidade errada**, e quem preenche escreve uma sessão por arquivo enquanto o nome do arquivo desmente.

**A refinaria fica com três casos:** *manda* → sai; *relata* → fica (reescrever falsifica o registro); *estrutura* → **sai, porque define a unidade e a unidade mudou**.

**E um quarto caso ganha lugar no instrumento, não na disciplina: o domínio.** No nicho de RPG, «sessão» é a mesa de jogo — `SESSAO.md`, `Log — Sessão [N]`, `Prep da próxima sessão` — e o log dele é mesmo por sessão. A wo0094 preservou as 33 ocorrências **à mão**, contando com quem varre lembrar. Agora o C49 traz `DOMINIO_SESSAO = new Set(["rpg"])`, com o motivo escrito ao lado: **exceção nomeada, não silenciosa**. A prova negativa 6 remove a exceção e confirma que sem ela o nicho reprova — isto é, que ela carrega peso.

**Um caso que a wo0094 não tinha alcançado:** `career.js` trazia `# logs/AAAA-MM-DD.md — log de sessão`, o título do próprio arquivo de log, que é o mais estrutural de todos.

**Nota de método.** É a segunda vez que o Mapsmith devolve uma regra melhor que a nossa e a terceira que o retorno do merge conserta o kit em vez do projeto. **A varredura por fato (D-124) já se pagou três vezes**, e desta vez o que ela achou foi a nossa própria aplicação errada da regra que eles nos deram no dia anterior.

`KIT_VERSION 1.114.0`. **Custo de teto ZERO** — títulos vivem nos modelos de nicho, fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.541 → 813.428** bytes: 113 a menos, a correção encolhe. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu).
```

---

## Edição 6 — `meta/IDEAS.md` · registra o retorno

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-13 — O Mapsmith recusou adotar o nosso `LOG-TEMPLATE`, e estava certo (D-129, wo0095)
*«Adotar seria regredir.»* O `LOG-TEMPLATE` do pacote ainda tinha «Formato do Log de Sessão», «Objetivo da sessão» e «Última Sessão» **depois** da varredura da wo0094 — porque eu classifiquei títulos como rótulo e deixei. **Faltava o terceiro caso da refinaria deles:** título que **estrutura** muda junto, porque define a unidade do documento, e a unidade virou o dia. Um arquivo por dia que pergunta «qual era o objetivo da sessão» não tem rótulo velho: tem a unidade errada.

**E o quarto caso saiu da disciplina e entrou no instrumento:** «sessão» no nicho de RPG é a mesa de jogo. A wo0094 preservou as 33 ocorrências à mão, contando com memória; agora o C49 traz a exceção **nomeada**, com prova negativa que confirma que ela carrega peso.

**Terceira vez que o retorno do merge conserta o kit em vez do projeto** — e desta vez o que ele achou foi a nossa aplicação errada da regra que eles nos deram no dia anterior.
```

---

## Fora de escopo

- **`rpg.js` como domínio** — 32 ocorrências que ficam. Só o cabeçalho genérico do STATUS muda.
- **O `LOG-TEMPLATE` vivo do Mapsmith** — está à frente do nosso e não deve ser tocado por eles; é o kit que se alinha.
- **Os oito `meta/` de conteúdo do merge deles** — decisão deles, e a expectativa (baixo rendimento) é razoável.

## Armadilhas desta WO

- **O que NÃO trocar é a maior parte do trabalho.** `rpg.js` inteiro exceto uma linha; e, nos outros nichos, nada que **relate** («já custou uma sessão») — a wo0094 já limpou o que **manda**, e o que sobra de «sessão» fora desta lista é relato ou domínio. **Varredura cega quebra o nicho de RPG.**
- **Fim de linha:** `src/index.template.html` é **CRLF**; `src/niches/*.js` e `validate.js` são **LF**. As substituições nos nichos são de trecho — não reformate. Confira: template com **0 LF soltos**.
- **A Edição 4 tem duas âncoras parecidas** (dois laços `Object.keys(T.NICHES).forEach` dentro do mesmo check). A primeira tem `const S = T.STATE` logo abaixo; a segunda tem `(n.contextFiles||[])`. **Confira qual é qual antes de editar.**
- **`próxima sess\.` na regex** tem o ponto escapado de propósito — casa `[Ações para a próxima sessão.]` e **não** casa `## 🎲 Próxima sessão` do RPG. Não «simplifique» tirando o escape.
- **`index.html` ENCOLHE.** 813.541 → **813.428**. Se crescer, alguma substituição virou inserção.
- **Nenhum check novo.** O total continua **93/93** — o C49 é que cresceu. Se virar 94, algo a mais foi colado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra `src/index.template.html`, **17 arquivos** em `src/niches/`, `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além. **`custom.js` não pode aparecer.**
- [ ] **Inventário declarado: 49 substituições em 17 módulos.** Confira contra a tabela da Edição 2. Divergiu, **PARE e reporte**.
- [ ] `grep -c "sessão" src/niches/rpg.js` deve dar **32** (era 33; só o cabeçalho do STATUS muda). Se cair mais, a varredura comeu o domínio — **PARE**.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 93/93 checagens, 0 erros**, com **C49 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **813.428 bytes** (113 a MENOS); template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** O `content` dos `contextFiles` de cada nicho (Edição 2) e o C49 em `validate.js` (Edições 3 e 4). O segundo laço do C49 abre esse `content` — é o caminho exato.
  - **Prova de vida:** o verde não prova que a exceção de domínio carrega peso. **Force o sinal:** troque `new Set(["rpg"])` por `new Set([])` no `validate.js`, rode o harness, e confirme que o **C49 falha citando `rpg`**. Desfaça. *(Se ficar verde com a exceção vazia, ela é decorativa e a varredura de RPG não está protegida por nada.)*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados com a contagem por nicho · validação (C28, C49, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão. Atualize as **vivas** para `v1.114.0` e acrescente **D-129**. **A contagem de checagens NÃO muda** (93/93) e os números de orçamento também não. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html src/niches validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260813-wo0095-titulo-que-estrutura-muda-junto.md
```

```
git commit -m "fix(kit): titulo que define a unidade do documento muda junto" -m "O mapsmith comparou o LOG-TEMPLATE do pacote com o deles e recusou adotar: adotar seria regredir. Estavam certos. Depois da varredura da wo0094 o modelo ainda dizia Formato do Log de Sessao, Objetivo da sessao e Ultima Sessao, porque eu classifiquei titulo como rotulo e deixei." -m "Faltava o terceiro caso da refinaria que eles nos deram: ha titulo que rotula e titulo que estrutura. O log passou a ser por DIA, com uma secao por conversa. Um arquivo por dia cujo corpo pergunta qual era o objetivo da sessao nao tem rotulo velho: tem a unidade errada, e quem preenche escreve uma sessao por arquivo enquanto o nome do arquivo desmente." -m "E o quarto caso saiu da disciplina e entrou no instrumento: sessao no nicho de RPG e a mesa de jogo. A wo0094 preservou as 33 ocorrencias a mao, contando com memoria; agora o check traz a excecao nomeada, com prova negativa confirmando que ela carrega peso." -m "49 substituicoes em 17 modulos; career tinha o titulo do proprio arquivo de log, que a wo0094 nao alcancou. Seis provas negativas. Custo de teto zero e o index encolhe 113 bytes. wo0095, D-129."
```

```
git push
```
