# WO 0112 — a exploração ganha gatilho: o kit passa a gerar a skill `/sondar`

> **Tipo:** WO de CODIGO + doc instalado. Toca `src/index.template.html`, `validate.js` e instala uma skill nova na casa. **Exige `node build.js` e `node validate.js`.**
> **Config sugerida:** modelo mais capaz, esforco medio. A skill nova e um bloco longo de texto que entra como array JS — o risco esta na transcricao, nao na logica.
> **Pre-requisito:** v1.122.0 com wo0111 aplicada, commit `d25f38f`, arvore limpa.
> **Base:** analise `260904-ANALISE-a-exploracao-sem-gatilho.md`, decidida pelo dono: **A, com D depois**; skill entra, errata do nome entra na mesma WO, `i-N60` fica para depois.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** todas lidas NESTE turno, no mount gerado em **2026-09-04 12:15** (commit `d25f38f`). Cada ancora contada com `grep -c` = **1** e aplicada de verdade em sandbox reconstruido desse mount.
>
> **Afirmacao sobre artefato legivel:** as nove edicoes foram executadas em sandbox, seguidas de `node build.js` (`index.html` 839.262 -> **844.917 bytes**) e `node validate.js` (**18/18 · 101/101 · VERDE**). **Dois pares negativos medidos:** trocar a clausula «NAO parta da lista de checagens que ja existe» por seu oposto deixa o `C101` **VERMELHO**; e o `C43` passa a falhar se a skill instalada na casa perder essa mesma clausula. As ancoras chegam testadas.
>
> **Medicao previa — teto:** os cinco numeros do `C28` sao **identicos antes e depois** (`padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`). Custo de teto **ZERO**, e a razao esta medida: a skill e arquivo do kit do Code, a errata vive no CEREBRO gerado, e a **tabela de gatilhos tambem e do CEREBRO** — e consumida em `buildClaudeMd`, nao em `buildInstr`. *(A analise supunha que o gatilho custaria teto. Supunha errado.)*
>
> **Numero de checklist e DERIVADO:** contagens tiradas do sandbox depois de aplicar esta WO.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

O CEREBRO gerado ensina o par **sonda/exploração** por inteiro — funil, terceiro estado, as três propriedades do relatório, a regra de que nenhuma das duas dá veredito, o esqueleto do relatório. E o kit entrega **duas** skills: `apply-wo` e `wrap`. **A exploração existe como conhecimento e não existe como comando.**

O `mapsmith` fabricou a terceira sozinho (`.claude/skills/sondar/SKILL.md`, 3.520 bytes). É o mesmo defeito que a wo0111 tratou noutro campo: regra que vive só como prosa é reconstituída de memória; regra que vive como artefato executável, não. Só que aqui a consequência é pior — o fecho **derivava**, a exploração simplesmente **não acontece**.

O preço está medido na própria casa: o `_TEMPLATE.md` **6.618 bytes** atrás do gerado, os quatro títulos em `###` e o `KIT_VERSION` congelado foram os três achados das últimas WOs, e **os três apareceram de raspão**, enquanto se procurava outra coisa. Nenhum veio de instrumento — e o `C43` existe exatamente porque *«as skills instaladas ficaram três versões atrás do gerado sem ninguém notar»*.

## 2. Contexto factual

- **Medido — seis pontos de registro, não um.** Uma skill nova precisa: ser definida em `buildCodeKitFiles`, entrar no `return`, aparecer na tabela de arquivos do CEREBRO, entrar no zip do kit do Code, entrar no zip completo e entrar no **pacote de update**. Esquecer o último faz a skill nunca chegar a quem já tem o kit — é a família das revogações outra vez.
- **Medido — a skill genérica é possível.** As regras duras do mapsmith são todas independentes de domínio; só a seção «o que fazer» era específica de pacote de tiles. Aqui ela foi reescrita em torno do que **todo** projeto do kit tem: o que existe no disco, o que os `meta/` declaram, o instalado contra o gerado, os cruzamentos que a validação não faz.
- **Medido — o ato `explore` já existia.** A wo0110 criou o vocabulário fechado `apply · wrap · probe · explore`. A skill grava em `../AAMMDD-HHMM-code-<slug>-explore-<alvo>.txt` sem inventar convenção nova. O vocabulário fechado provou-se bem desenhado dois dias depois de nascer.
- **Medido — o gatilho já estava lá, sem o comando.** A linha da tabela já dizia *«se ninguem sabe ainda qual e a pergunta, manda EXPLORAR primeiro»*. Faltava o nome do comando e o segundo evento. A Edição 6 acrescenta **51 caracteres** e nada mais.
- **Uma coisa do mapsmith que o CEREBRO não tinha:** a seção **«o que eu olhei e NÃO achei nada»**. O kit exige declarar o que **não** foi olhado; isto é o oposto e também é necessário — *passada exploratória que sempre acha algo é passada que inventa*. Entra como seção obrigatória da skill.
- **Fora de escopo por decisão do dono:** a `i-N60` (generalizar o `C43` para comparar toda superfície instalada com a gerada). A Edição 8 acrescenta ao `C43` **um** assert para a skill nova — é o mínimo para ela não nascer descoberta, **não** é a generalização.

---

## Edicao 1 — `src/index.template.html` · a skill `sondar` (bloco novo)

**Ancora** (linha do selo, dentro de `buildCodeKitFiles`):

```
  const selo = "\n\n*" + kitStamp().replace(/\.$/, "") + " — esta linha e do KIT: nao funda, substitua pela do pacote mais recente.*\n";
```

**Inserir IMEDIATAMENTE ANTES dessa linha** o bloco `const sondar = [...]` **exatamente como está no arquivo entregue junto com esta WO** (`SKILL.md`, 3.984 bytes), convertido para o formato de array já usado por `applyWo` e `wrap`: uma string por linha, com `.join("\n")` no fim.

> **Atenção — a fonte da verdade desta edição é o arquivo `SKILL.md` entregue pelo chat**, que é o mesmo conteúdo instalado na casa pela Edição 7. Se o texto do array e o do arquivo divergirem, o `C43` acusa: ele confere a cláusula nos **dois** lados.

## Edicao 2 — `src/index.template.html` · o `return` de `buildCodeKitFiles`

**Ancora:**

```
  return { claudeMd, settings, applyWo: applyWo + selo, wrap: wrap + selo, woTemplate: buildWoTemplate() + selo };
```

**Substituir por:**

```
  return { claudeMd, settings, applyWo: applyWo + selo, wrap: wrap + selo, sondar: sondar + selo, woTemplate: buildWoTemplate() + selo };
```

## Edicao 3 — `src/index.template.html` · tabela de arquivos do CEREBRO

**Ancora:**

```
    L.push("| `.claude/skills/wrap/SKILL.md` | comando `/wrap`: fecha a tarefa (append em STATUS/DECISIONS + `git diff` + commit) |");
```

**Inserir IMEDIATAMENTE APOS:**

```
    L.push("| `.claude/skills/sondar/SKILL.md` | comando `/sondar`: passada exploratória sem hipótese prévia — devolve candidatos a checagem, nunca veredito |");
```

## Edicao 4 — `src/index.template.html` · zip do kit do Code

**Ancora:**

```
  zip.file(`${root}/.claude/skills/wrap/SKILL.md`, f.wrap);
```

**Inserir IMEDIATAMENTE APOS:**

```
  zip.file(`${root}/.claude/skills/sondar/SKILL.md`, f.sondar);
```

## Edicao 5 — `src/index.template.html` · zip completo e pacote de update

**5a. Ancora** (note os quatro espacos de indentacao — e outro ponto do arquivo):

```
    zip.file(`${root}/.claude/skills/wrap/SKILL.md`, k.wrap);
```

**Inserir IMEDIATAMENTE APOS:**

```
    zip.file(`${root}/.claude/skills/sondar/SKILL.md`, k.sondar);
```

**5b. Ancora** (pacote de update, duas linhas):

```
    files.push({ flat: updateFlat("wrap.SKILL.md"), real: ".claude/skills/wrap/SKILL.md",
      nature: "template", role: "Comando /wrap.", content: k.wrap });
```

**Inserir IMEDIATAMENTE APOS:**

```
    files.push({ flat: updateFlat("sondar.SKILL.md"), real: ".claude/skills/sondar/SKILL.md",
      nature: "template", role: "Comando /sondar (exploracao).", content: k.sondar });
```

> **Este e o ponto que nao pode ser esquecido:** sem ele a skill nasce so para instalacao nova, e quem ja tem o kit nunca a recebe.

## Edicao 6 — `src/index.template.html` · o gatilho ganha o comando e o segundo evento

**Ancora** (linha inteira do `TRIGGERS_BASE`):

```
  ["Precisa de um numero sobre material grande demais para a conversa", "Manda MEDIR (sonda) em vez de deduzir ou pedir upload. Se ninguem sabe ainda qual e a pergunta, manda EXPLORAR primeiro: exploracao produz hipotese, sonda produz evidencia."],
```

**Substituir por:**

```
  ["Precisa de um numero sobre material grande demais para a conversa, ou um defeito apareceu de raspao", "Manda MEDIR (sonda) em vez de deduzir ou pedir upload. Se ninguem sabe ainda qual e a pergunta, manda EXPLORAR primeiro (`/sondar`): exploracao produz hipotese, sonda produz evidencia."],
```

## Edicao 7 — `src/index.template.html` · a errata do nome (duas partes)

**7a. Ancora** (linha do esqueleto de sonda no CEREBRO):

```
  L.push("# SONDA — <assunto>                     <- o nome diz o QUE, não o quando");
```

**Substituir por:**

```
  L.push("# SONDA — <assunto>                     <- ver a nota de nome abaixo");
```

**7b. Ancora** (a linha imediatamente seguinte ao fim do bloco do esqueleto):

```
  L.push("Três detalhes que só aparecem depois de usar:
```

**Inserir IMEDIATAMENTE ANTES dessa linha** estas duas:

```
  L.push("**O nome do arquivo depende de a sonda ser única ou uma série, e o kit ensinava isso pela metade.** Sonda de assunto único, que vira registro e fica, é documento: `AAMMDD-SONDA-<assunto>.md`, e o nome diz o QUE. Sonda **reexecutável**, que existe para comparar antes/depois, é série: o carimbo vem PRIMEIRO e o tipo depois — `AAMMDD-HHMM-EXPLORACAO` ao lado de `AAMMDD-HHMM-CONFERENCIA` —, porque ali o que importa é a pasta se ordenar sozinha no tempo e o par ficar visível lado a lado; o assunto vai no título, dentro do arquivo. Escolher a forma errada custa nos dois sentidos: assunto num arquivo de série faz a ordem se perder, carimbo num documento único faz procurar por data o que se procura por tema.");
  L.push("");
```

---

## Edicao 8 — `validate.js` · o `C43` passa a conferir a skill instalada na casa

**Ancora:**

```
  const instSet = lerRepo(".claude/settings.json");
```

**Inserir IMEDIATAMENTE APOS:**

```
  // wo0112: a casa tambem instala a skill de exploracao. Nao e a generalizacao da i-N60
  // (comparar TODA superficie instalada com a gerada) — e o minimo para a sondar nao nascer descoberta.
  const instSondar = lerRepo(".claude/skills/sondar/SKILL.md");
  assert(/name: sondar/.test(instSondar) && /NAO parta da lista de checagens que ja existe/.test(instSondar),
    "a skill sondar instalada no KCM nao carrega a clausula que a separa da verificacao (a casa ficou atras do gerado)");
```

## Edicao 9 — `validate.js` · o `C101`, check novo

**Ancora:** a linha do **ultimo** `check("…` do arquivo. **Inserir o bloco abaixo IMEDIATAMENTE ANTES dela**, com uma linha em branco de separacao:

```
/* C101 (wo0112) — A exploracao tem gatilho: o kit gera a skill /sondar, e ela carrega as
   clausulas que a tornam exploracao e nao verificacao. Sem estes asserts a skill pode nascer
   e virar uma segunda conferencia com outro nome. */
check("C101 a exploracao tem gatilho (wo0112): o kit gera a skill sondar com as clausulas que a separam da verificacao", () => {
  const kit = T.buildCodeKitFiles();
  const s = kit.sondar || "";
  assert(s.length > 0, "o kit nao gera a skill sondar");
  assert(/^---\nname: sondar/m.test(s), "skill sondar sem cabecalho name: sondar");
  assert(/disable-model-invocation: true/.test(s), "skill sondar sem disable-model-invocation: quem chama e o dono, nao o modelo");
  assert(/NAO conclua/.test(s) && /nao veredito/.test(s), "skill sondar nao proibe veredito: viraria uma segunda verificacao");
  assert(/NAO parta da lista de checagens que ja existe/.test(s), "skill sondar nao proibe partir da lista existente: so acharia o que o instrumento ja acha");
  assert(/O que eu olhei e NAO achei nada/.test(s), "skill sondar sem a secao do que foi olhado e estava limpo: passada que sempre acha algo e passada que inventa");
  assert(/observacoes descartadas/i.test(s), "skill sondar sem observacoes descartadas");
  assert(/-explore-/.test(s), "skill sondar nao grava o relatorio com o ato explore do vocabulario fechado");
  assert(/NAO abra ordem de trabalho/.test(s), "skill sondar nao respeita a raia: candidato vai para IDEAS pela raia de planejamento");
  const cmd = T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/`\/sondar`/.test(cmd), "o CEREBRO nao cita o comando /sondar: a skill nasceria sem gatilho");
  assert(/carimbo vem PRIMEIRO e o tipo depois/.test(cmd), "o CEREBRO nao traz a errata do nome (unica x serie)");
  return "ok (skill sondar " + s.length + " bytes)";
});
```

> **O total de checagens sobe para 101.** É check novo, não reescrita — e a regra de ouro passa a ser **18/18 · 101/101**.

---

## Arquivo que vem do chat, nao desta WO

`SKILL.md` (3.984 bytes) → salvar em **`.claude/skills/sondar/SKILL.md`**. É a skill instalada na casa (**Edicao 7 da entrega**, não uma edição desta WO). Vem **sem** a linha de carimbo do kit, seguindo a decisão da wo0106 sobre as superfícies instaladas do KCM. Entra só no `git add`. Se ele não estiver no disco na hora do `add`, **PARE**: o `C43` vai falhar, e falhar por ausência de arquivo é diferente de falhar por conteúdo.

## Fora de escopo

- **A `i-N60`** — generalizar o `C43` para comparar toda superfície instalada com a gerada. Decisão do dono: fica para depois. A Edição 8 é o mínimo pontual, não a generalização. **Reporte que o gatilho dela disparou pela terceira vez.**
- **Rodar a exploração.** Esta WO instala o gatilho; puxá-lo é decisão do dono, e a skill tem `disable-model-invocation: true` de propósito.
- **Renomear sondas antigas** para a forma da errata. A errata vale do próximo em diante.
- **Skills do nicho** (`skillsPack`). Outro pacote, outro assunto.

## Armadilhas desta WO

- **A Edição 1 é um bloco longo de texto virando array JS.** Cada linha vira uma string entre aspas duplas, e o texto contém crase, parêntese e acento — mas **não** contém aspas duplas, de propósito, para não exigir escape. Se precisar escapar alguma coisa, o texto foi alterado no caminho: **PARE e reporte**.
- **As Edições 4 e 5a são a mesma linha com indentação diferente** (dois espaços contra quatro), em pontos distintos do arquivo. Trocar uma pela outra deixa um dos dois zips sem a skill, e nenhum check pega isso.
- **A Edição 5b é a que ninguém lembra.** É o pacote de update — sem ela a skill nunca chega a um projeto já instalado.
- **A Edição 9 insere um check novo:** confira que o total virou **101** e que nenhum outro check foi renumerado.
- **`build` antes de `validate`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` de **839.262** para **≈844.917 bytes**. *(Diferença de poucos bytes é aceitável — a wo0111 teve 2 de folga por uma linha em branco. Diferença de centenas: **PARE e reporte**.)*
- [ ] `node validate.js` → **18/18 nichos · 101/101 checagens · 0 erros**.
- [ ] `grep -c 'sondar' src/index.template.html` → **10**.
- [ ] `grep -c 'skills/sondar/SKILL.md' src/index.template.html` → **4** *(tabela do CEREBRO, zip do kit, zip completo, pacote de update — se der 3, a Edição 5b ficou de fora)*.
- [ ] `grep -c 'name: sondar' .claude/skills/sondar/SKILL.md` → **1** *(o arquivo do chat chegou ao disco)*.
- [ ] `grep -c 'Gerado pelo Kit' .claude/skills/sondar/SKILL.md` → **0** *(sem carimbo na casa, como as outras duas)*.
- [ ] Os cinco números do `C28` continuam **`padrao 6605/6900 · +Code 514/550 · +ASU 372/400 · compart 372/450 · combo 7491/7600`**. Qualquer mudança aqui significa que algo entrou nas Instruções sem querer.
- [ ] **Par negativo (opcional, medido no sandbox):** trocar na skill a frase `NAO parta da lista de checagens que ja existe` pelo oposto e rodar `build` + `validate` deve dar **VERMELHO no C101**. Desfaça depois.
- [ ] `git diff` mostra: `src/index.template.html`, `index.html`, `validate.js` — mais `.claude/skills/sondar/SKILL.md`, a WO e a análise (novos). Nada além.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · o commit e o push, escrito **depois** de resolver o push. **Reporte também:** que a `i-N60` disparou pela terceira vez, e o número exato de bytes do `index.html`.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0112.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html index.html validate.js .claude/skills/sondar/SKILL.md meta/analises/260904-ANALISE-a-exploracao-sem-gatilho.md meta/workorders/260904-wo0112-skill-sondar-e-errata-do-nome.md
```

```
git commit -m "feat(kit): a exploracao ganha gatilho com a skill sondar" -m "O CEREBRO ensinava o par sonda/exploracao por inteiro e o kit entregava so duas skills: a exploracao existia como conhecimento e nao como comando. Entra a terceira skill, generica para os 18 nichos, adotada do mapsmith e reescrita em torno do que todo projeto tem. Grava com o ato explore, do vocabulario fechado da wo0110. Entra tambem a errata do nome: assunto para sonda unica, carimbo primeiro para serie reexecutavel. C101 novo (101 checagens) e um assert no C43 para a skill instalada na casa. Teto inalterado nos cinco buckets."
```

```
git push
```
