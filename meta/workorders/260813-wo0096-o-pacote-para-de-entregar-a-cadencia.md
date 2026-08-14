# WO 0096 — O pacote de update para de entregar a cadência que ele manda varrer

> **Tipo:** WO de CÓDIGO + registro (mista). Doze substituições literais e um bloco de check.
> **Config sugerida:** Sonnet, esforço **médio**. Nenhuma edição é longa; a atenção vai para o que **não** trocar.
> **Pré-requisito:** `KIT_VERSION 1.114.0`, commit `ebc95ed`, `main` limpo, harness **18/18 · 93/93 · 0 erros**. Confirmado no mount (`_MANIFEST` de 13/08 18:09).
> **Base:** `mapsmith_10_-_v4.md`, bloco 4 (2026-08-13) — o fecho do update deles, 20/20 comparados.
> **Depende de:** wo0095.
> **Bloqueia:** o pacote do Sand-Land-Map. **É a última correção antes dele.**
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e diga no relatório.

> **Canal dos meta neste ciclo = CODE.** Esta WO **é** o registro: aplique as Edições 6 e 7.

---

## 1. Por que

**O Mapsmith fechou o update em 20/20 e, nos últimos oito arquivos, achou a D-125 viva pela terceira vez.** A formulação deles é o achado, e é maior que os três arquivos que citaram:

> *«As varreduras alcançaram o CEREBRO, as Instruções, o `CLAUDE.md` e os modelos de 16 nichos — e **não alcançaram os templates de conteúdo do próprio pacote de update**. É a camada que o kit *entrega* para virar o `meta/` de outro projeto. **Cada projeto novo nasce com a cadência errada e depois recebe um pacote mandando corrigi-la.**»*

**Eles acharam três; a varredura completa achou onze.** Eles usaram `grep` nos oito templates de conteúdo do nicho `dev`; varri **os 20 arquivos do pacote nos 18 nichos** — 96 ocorrências, das quais **11 são cadência revogada** e 85 são domínio ou relato.

**E o meu primeiro instrumento também errou por baixo.** A expressão que usei na varredura inicial (`/sess[aã]/i`) **não casa «sessões»** — o plural tem `õ`. O `STATUS__template-update.md` que eles apontaram não apareceu na minha primeira lista, e só entrou quando ampliei para `/sess[aãoõáà]/i`. **A ausência que o meu instrumento reportou era do instrumento, não do arquivo** — pela terceira vez nesta negociação, e a regra que a D-126 registrou vale contra mim de novo.

**Nada disto é acidente de descuido: é a mesma camada esquecida três vezes.** wo0094 varreu os artefatos gerados; wo0095 varreu os modelos dos nichos; e o **pacote de update** — que é o que o kit efetivamente entrega a terceiros — nunca foi varrido por check nenhum. O remédio, portanto, não é a décima primeira substituição: é o C49 passar a **abrir o pacote inteiro**, nos 18 nichos, e falhar ali.

**A refinaria de quatro casos (D-127, D-129) sustentou a varredura**, e é o que separa 11 de 96:

| caso | exemplo aqui | destino |
|---|---|---|
| **manda** | *«o assistente lê no início de cada sessão para se ambientar»* (CONTEXT) | sai |
| **relata** | *«a armadilha que já custou uma sessão»* (CEREBRO) | fica |
| **estrutura** | *«# Logs de sessao»* no `.flatdropignore` | sai |
| **domínio** | *«usuário sem sessão que abre /painel»* (SPEC) · o nicho de RPG inteiro | fica |

E um quinto caso que só apareceu aqui: **o contraste deliberado.** O CEREBRO diz *«Não é cerimônia de início de SESSÃO: é de TURNO»* — a frase existe para **opor** os dois termos. Trocar destruiria o argumento. Fica.

## 2. Contexto factual

Medido em sandbox no estado `ebc95ed` (repo reconstruído do mount de hoje 18:09, build reproduzindo `index.html` byte a byte — **813.428** — e harness verde 18/18 · 93/93 antes de qualquer edição, com os `.claude/` do próprio repo presentes).

- **96 ocorrências** de «sessão/sessões/sessao» no pacote, somando os 18 nichos. **11 são cadência revogada; 85 ficam** — 54 são as três linhas genéricas do CEREBRO (relato + contraste) replicadas nos 18 nichos, e 31 são o domínio do RPG.
- **Custo de teto: ZERO.** Nenhuma edição toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**.
- `index.html` vai de **813.428 → 813.436** bytes (+8).

---

## Inventário — de onde saiu a lista de edições

**Saiu do artefato, e do artefato certo desta vez:** `buildUpdatePack()` gerado para **cada um dos 18 nichos**, com o `content` de cada um dos 20 arquivos aberto e lido — não os arquivos-fonte, e não só o nicho `dev`.

**Não truncado.** 18 × 20 arquivos.

**Contagem declarada: 11 pontos de cadência**, em 6 templates de conteúdo + 3 pontos do `src/index.template.html` + 2 em módulos de nicho. **Conteste antes de agir.**

> **O que NÃO foi olhado:** o `index.html` como página (a parte de marketing/documentação da ferramenta) não foi varrido — ali «sessão» aparece em texto explicativo ao usuário final, fora do que vira `meta/` de projeto. Declarado para não virar «conferido».

---

## Edição 1 — `src/index.template.html` · bump de versão

**Âncora:**

```
const KIT_VERSION = "1.114.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.115.0";
```

---

## Edição 2 — `src/index.template.html` · três substituições de uma linha

Cada uma é única no arquivo.

| # | procurar | substituir por |
|---|---|---|
| 2a | `no fim da primeira sessão de trabalho real` | `no fim da primeira conversa de trabalho real` |
| 2b | `nunca usou em N sessões é peso morto` | `nunca usou em N conversas é peso morto` |
| 2c | `para que a primeira sessao depois de uma transferencia` | `para que a primeira conversa depois de uma transferencia` |

**E uma quarta, dentro do `.flatdropignore` gerado** — atenção às aspas escapadas:

| # | procurar | substituir por |
|---|---|---|
| 2d | `# Logs de sessao: o \"agora\" fica no meta/STATUS.md` | `# Logs do dia: o \"agora\" fica no meta/STATUS.md` |

---

## Edição 3 — `src/niches/*.js` · os templates de conteúdo do pacote

**Seis substituições literais**, em todos os nichos onde aparecerem:

| procurar | substituir por |
|---|---|
| `O assistente lê no início de cada sessão para se ambientar.` | `O assistente lê no início de cada conversa para se ambientar.` |
| `não estado do agora — por isso vive aqui, e não no STATUS, que é reescrito a cada sessão.` | `não estado do agora — por isso vive aqui, e não no STATUS, que é reescrito a cada conversa.` |
| `Só o que dá para pegar nas próximas sessões.` | `Só o que dá para pegar nos próximos turnos.` |
| `que o assistente reexplicaria a cada sessão sem isto.` | `que o assistente reexplicaria a cada conversa sem isto.` |
| `Não é lido no início da sessão; o assistente consulta sob demanda` | `Não é lido no início da conversa; o assistente consulta sob demanda` |
| `Use quando há jargão que se repete entre sessões.` | `Use quando há jargão que se repete entre conversas.` |

**Contagem esperada: `dev.js` 6 · `research.js` 1 · total 7.** Divergiu, **PARE e reporte**.

---

## Edição 4 — `src/niches/narrative.js` e `src/niches/brainstorm.js` · dois gatilhos

| arquivo | procurar | substituir por |
|---|---|---|
| `narrative.js` | `**Assunto grande demais pede sessão própria.** Reconhecer isso e propor a sessão dedicada` | `**Assunto grande demais pede conversa própria.** Reconhecer isso e propor a conversa dedicada` |
| `brainstorm.js` | `["Ideias geradas numa sessão"` | `["Ideias geradas numa conversa"` |

> As duas são **gatilho de tabela** — texto que manda. O do `brainstorm` dispara uma entrega; o do `narrative` manda propor uma coisa. Não são rótulo.

---

## Edição 5 — `validate.js` · o C49 abre o pacote inteiro

**Âncora** (uma linha, dentro do C49):

```
  // (2) o log na tabela de docs vem por gatilho de evento, nao por cadencia
```

**Inserir IMEDIATAMENTE ANTES** (a âncora permanece):

```
  // (1c) e o PACOTE DE UPDATE inteiro — a camada que o kit entrega para virar o `meta/` de outro
  //       projeto. As varreduras anteriores alcancaram o CEREBRO, as Instrucoes, o CLAUDE.md e os
  //       modelos dos nichos, e NAO alcancaram os templates de conteudo do pacote: cada projeto
  //       novo nascia com a cadencia errada e depois recebia um pacote mandando corrigi-la.
  //       Achado do mapsmith ao fechar o update (mapsmith_10 - v4). Ver D-130.
  const CADENCIA_NO_PACOTE = /lê no início de cada sess|no início da sess|reescrito a cada sess|próximas sess|reexplicaria a cada sess|Logs de sess|primeira sess(ão|ao) de trabalho|pede sess(ão|ao) própria|geradas numa sess|em N sess/i;
  Object.keys(T.NICHES).forEach(id => {
    if(DOMINIO_SESSAO.has(id)) return;
    const S = T.STATE; S.workmode = S.workmode || {}; const prev = S.workmode.codeMode;
    S.workmode.codeMode = "yes";
    const pack = T.buildUpdatePack(T.normNiche(T.NICHES[id]));
    S.workmode.codeMode = prev;
    (pack.files||[]).forEach(f => {
      const linha = String(f.content||"").split("\n").find(l => REVOGADO.test(l) || CADENCIA_NO_PACOTE.test(l));
      assert(!linha, id+"/"+(f.flat||"?")+": o PACOTE DE UPDATE ainda entrega a cadencia revogada — «"+String(linha).trim().slice(0,90)+"»");
    });
  });
```

> **Este é o bloco que faltava desde a wo0094.** Ele reaproveita `REVOGADO` e `DOMINIO_SESSAO`, que já existem acima no mesmo check — se o seu editor reclamar de variável indefinida, o bloco foi colado fora do C49.

---

## Edição 6 — `meta/DECISIONS.md` · registra a D-130

**Âncora** (última linha do arquivo, fim da D-129):

```
 **Custo de teto ZERO** — títulos vivem nos modelos de nicho, fora de `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.541 → 813.428** bytes: 113 a menos, a correção encolhe. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu).
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

---

## D-130 — O pacote de update era a camada que nenhuma varredura alcançava: cada projeto nascia com a cadência errada e depois recebia um pacote mandando corrigi-la (wo0096)

**Base.** `mapsmith_10_-_v4.md`, bloco 4 (2026-08-13) — o fecho do update deles, 20/20 comparados, 7/7 decisões.

**O achado, na formulação deles, é maior que os três arquivos que citaram:** *«as varreduras alcançaram o CEREBRO, as Instruções, o `CLAUDE.md` e os modelos de 16 nichos — e não alcançaram os templates de conteúdo do próprio pacote de update. É a camada que o kit entrega para virar o `meta/` de outro projeto. Cada projeto novo nasce com a cadência errada e depois recebe um pacote mandando corrigi-la.»*

**Eles acharam três; a varredura completa achou onze.** Eles usaram `grep` nos oito templates de conteúdo do nicho `dev`; a varredura daqui abriu **os 20 arquivos do pacote nos 18 nichos** — 96 ocorrências, das quais **11 são cadência revogada** e 85 ficam.

**E o instrumento daqui também errou por baixo, pela terceira vez nesta negociação.** A expressão da primeira varredura (`/sess[aã]/i`) **não casa «sessões»**, cujo plural tem `õ` — o `STATUS__template-update.md` que eles apontaram não apareceu na primeira lista e só entrou depois de ampliar para `/sess[aãoõáà]/i`. **A ausência que o instrumento reportou era do instrumento, não do arquivo.** É a D-126 valendo contra o próprio autor de novo, e a razão de o remédio desta WO ser um check e não onze substituições.

**O que separa 11 de 96 é a refinaria de quatro casos** (D-127, D-129): *manda* sai (*«lê no início de cada sessão»*); *relata* fica (*«a armadilha que já custou uma sessão»*); *estrutura* sai (*«# Logs de sessao»* no `.flatdropignore`); *domínio* fica (a sessão HTTP do `SPEC`, e o nicho de RPG inteiro). **E um quinto caso apareceu aqui: o contraste deliberado** — o CEREBRO diz *«Não é cerimônia de início de SESSÃO: é de TURNO»*, e a frase existe para **opor** os dois termos. Trocar destruiria o argumento.

**O remédio é o check, não a substituição.** Onze correções fecham o buraco de hoje; o C49 abrindo `buildUpdatePack()` nos 18 nichos fecha a camada. Três varreduras seguidas (wo0094 nos gerados, wo0095 nos modelos de nicho, esta no pacote) mostram que o problema nunca foi a lista de strings: era o **conjunto de superfícies que o instrumento conhecia**.

**Nota sobre o merge do Mapsmith, que fecha aqui.** Eles encerraram em **20/20 comparados e 7/7 decisões**, com onze WOs, cinco das quais **não precisaram tocar o arquivo comparado** — e disseram isso em vez de contar como feito. Recusaram uma novidade nossa com motivo escrito (o `IDEAS` por autor: 91 ideias, reordenar seria reescrita destrutiva de 1.053 linhas, e a informação já existe em prosa mais rica). E deixaram registrada a lição de método que vale para o kit: **comparação estrutural não desce ao nível do item** — a regra «ler antes de sobrescrever» escapou do merge deles por ser item de lista dentro de uma seção que já existia dos dois lados, e foi preciso um alerta externo para achá-la num arquivo que eles tinham aberto, lido e dado por mergeado. É a irmã invertida do R4.

`KIT_VERSION 1.115.0`. **Custo de teto ZERO** — nada toca `buildInstr`: C28 permanece `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`, folga do `narrative` em **295**. `index.html` de **813.428 → 813.436** bytes. Harness **18/18, 93/93, 0 erros** (nenhum check novo — o C49 cresceu pela terceira vez).
```

---

## Edição 7 — `meta/IDEAS.md` · fecha o ciclo do Mapsmith

**Âncora:**

```
## 📮 Feedback para o Kit
```

**Inserir IMEDIATAMENTE APÓS** (a âncora permanece):

```

### 2026-08-13 — O update do Mapsmith fechou: 20/20, 7/7 — e o último achado foi a camada que nenhum check via (D-130, wo0096)
*«Cada projeto novo nasce com a cadência errada e depois recebe um pacote mandando corrigi-la.»* O **pacote de update** — a camada que o kit entrega para virar o `meta/` de outro projeto — nunca tinha sido varrido por check nenhum. Eles acharam três ocorrências nos templates do nicho `dev`; a varredura completa dos 20 arquivos nos 18 nichos achou **onze**. O remédio é o C49 abrir o pacote, não a décima primeira substituição.

**E o instrumento daqui errou por baixo pela terceira vez:** `/sess[aã]/i` não casa «sessões». O arquivo que eles apontaram não apareceu na minha primeira lista. **Ausência relatada por instrumento é uma afirmação** — a D-126 valendo contra quem a escreveu.

**Um quinto caso na refinaria, que só apareceu aqui: o contraste deliberado.** *«Não é cerimônia de início de SESSÃO: é de TURNO»* existe para opor os dois termos; trocar destruiria o argumento. A refinaria fica com cinco: manda · relata · estrutura · domínio · contraste.

**Balanço do primeiro ciclo completo de update com um projeto irmão.** Onze WOs do lado deles, cinco sem tocar o arquivo comparado; **oito decisões nossas** nasceram do retorno (D-127 a D-130 vieram só dos três últimos merges). A varredura por fato (D-124) achou o que nenhuma comparação de template acharia — inclusive contradições internas ao repositório deles. **O que o ciclo provou é que o retorno do merge conserta mais o kit do que o projeto**, e que o valor está no atrito, não na aceitação.

**Lição de método que eles registraram e vale para nós:** *comparação estrutural não desce ao nível do item*. A regra «ler antes de sobrescrever» escapou do merge deles por ser **item de lista** dentro de uma seção que já existia dos dois lados — foi preciso um alerta externo para achá-la num arquivo já aberto, lido e dado por mergeado. Irmã invertida do R4: lá o conteúdo velho sobrevivia invisível à comparação; aqui o novo passou despercebido pelo mesmo motivo. **Vale como armadilha do próprio prompt de update.**
```

---

## Fora de escopo

- **`rpg.js` e o pacote do nicho de RPG** — domínio, 31 ocorrências que ficam. O check exclui `rpg` por `DOMINIO_SESSAO`, que a wo0095 instalou.
- **As três linhas genéricas do CEREBRO** (relato + contraste), replicadas nos 18 nichos: 54 ocorrências que ficam.
- **A página do `index.html`** (marketing/documentação ao usuário final) — não é `meta/` de projeto; declarado como não olhado.
- **O `IDEAS` por autor** — o Mapsmith recusou com motivo registrado; não é para revisitar.
- **Sand-Land-Map** — o pacote sai **depois** desta WO.

## Armadilhas desta WO

- **O que NÃO trocar continua sendo a maior parte.** 85 das 96 ocorrências ficam. Antes de qualquer substituição fora da lista, passe a frase pelos cinco casos: manda · relata · estrutura · domínio · contraste.
- **A Edição 2d tem aspas escapadas** (`\"agora\"`) dentro do literal. Copie exatamente.
- **Fim de linha:** `src/index.template.html` é **CRLF**; `src/niches/*.js` e `validate.js` são **LF**. As substituições são de trecho — não reformate. Confira: template com **0 LF soltos**.
- **A Edição 5 depende de `REVOGADO` e `DOMINIO_SESSAO`**, que já existem no C49 (wo0094 e wo0095). Se não existirem, o bloco foi colado no check errado — **PARE**.
- **`(ão|ao)` na regex** cobre as duas grafias, com e sem acento, porque o `.flatdropignore` gerado é sem acento e os modelos são com. Não «simplifique».
- **Nenhum check novo.** O total continua **93/93** — o C49 cresceu. Se virar 94, algo a mais foi colado.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra `src/index.template.html`, **3 arquivos** em `src/niches/` (`dev.js`, `research.js`, `narrative.js`, `brainstorm.js` — quatro, se contar os dois gatilhos), `validate.js`, `index.html`, `meta/DECISIONS.md`, `meta/IDEAS.md` — e nada além.
- [ ] **Inventário declarado: 11 pontos de cadência.** Refaça a contagem. Divergiu, **PARE e reporte**.
- [ ] `grep -c "sessão" src/niches/rpg.js` continua **32** (o valor que a wo0095 deixou). Se caiu, a varredura comeu o domínio.
- [ ] `node build.js` sem erro; `node validate.js index.html` → **18/18 nichos, 93/93 checagens, 0 erros**, com **C49 verde**.
- [ ] **C28 imprime exatamente:** `padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`.
- [ ] `index.html` com **813.436 bytes**; template com **0 LF soltos**.
- [ ] **Passo de verificação (os três campos):**
  - **Quem roda:** quem aplica. Leitura de artefato gerado e execução do harness, mesma máquina, reversível.
  - **Chega no ramo?** `buildUpdatePack()` chamado 18 vezes pelo bloco novo do C49 — é o único caminho que abre o `content` dos 20 arquivos do pacote. As Edições 2, 3 e 4 alimentam esse `content`.
  - **Prova de vida:** o verde não prova que o bloco novo morde — foi a ausência dele que deixou onze linhas passarem por três varreduras. **Force o sinal:** em `src/niches/dev.js`, troque `reexplicaria a cada conversa sem isto` por `reexplicaria a cada sessão sem isto`, rode `node build.js && node validate.js index.html`, e confirme que o **C49 falha citando `dev/GLOSSARY__template-update.md`**. Desfaça. *(Se ficar verde, o bloco foi colado fora do laço ou o `if(DOMINIO_SESSAO...)` está engolindo tudo.)*
- [ ] **O que esta tarefa criou fora do repositório já foi fechado?** Diga, mesmo que seja «nada».

## Relatório de aplicação

O que foi feito · desvios · arquivos tocados com a contagem · validação (C28, C49, bytes) · o que ficou aberto fora do repositório · commit e push. **Resolva o push antes de escrever**, e **escreva o log do dia**.

> **Para o `/wrap`:** o `meta/STATUS.md` cita a versão. Atualize as **vivas** para `v1.115.0` e acrescente **D-130**. **A contagem de checagens NÃO muda** (93/93) e os números de orçamento também não. Sessão nova no topo.

## Commit — blocos separados, mensagem SEM acento

> **Blocos são o QUE rodar.** Verde: rode os três.

```
git add src/index.template.html src/niches validate.js index.html meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/workorders/260813-wo0096-o-pacote-para-de-entregar-a-cadencia.md
```

```
git commit -m "fix(kit): o pacote de update para de entregar a cadencia que ele manda varrer" -m "O mapsmith fechou o update em 20/20 e achou a terceira ocorrencia viva da mesma doenca. A formulacao deles e maior que os tres arquivos que citaram: as varreduras alcancaram o CEREBRO, as Instrucoes, o CLAUDE.md e os modelos dos nichos, e nao alcancaram os templates de conteudo do proprio pacote - a camada que o kit entrega para virar o meta de outro projeto. Cada projeto novo nascia com a cadencia errada e depois recebia um pacote mandando corrigi-la." -m "Eles acharam tres nos templates do nicho dev; a varredura completa dos 20 arquivos nos 18 nichos achou onze, de 96 ocorrencias - as outras 85 sao dominio ou relato. O que separa e a refinaria de quatro casos, que ganhou um quinto aqui: o contraste deliberado, quando a frase existe para opor sessao e turno." -m "E o instrumento daqui errou por baixo pela terceira vez: a expressao da primeira varredura nao casava sessoes, cujo plural tem til. O arquivo que eles apontaram nao apareceu na minha lista. Ausencia relatada por instrumento e uma afirmacao." -m "Por isso o remedio e o check e nao a substituicao: o C49 passa a abrir buildUpdatePack nos 18 nichos. Tres varreduras seguidas mostraram que o problema nunca foi a lista de strings, era o conjunto de superficies que o instrumento conhecia. Sete provas negativas. Custo de teto zero. wo0096, D-130."
```

```
git push
```
