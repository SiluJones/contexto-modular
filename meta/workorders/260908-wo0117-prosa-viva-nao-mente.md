# WO 0117 — a prosa viva da casa para de mentir sobre contagem de nicho e caminho de documento

> **Tipo:** WO de DOC + harness. Toca `meta/CEREBRO.md`, `BUILD.md` e `validate.js`. **NAO toca `src/`** — o `index.html` nao muda.
> **Config sugerida:** modelo padrao, esforco medio. Sete correcoes de texto e um check novo.
> **Pre-requisito:** v1.122.0 com wo0116 aplicada, commit `d3e633b`, arvore limpa.
> **Base:** exploracao do Code `260908-1009-code-kcm-explore-repo-inteiro.txt`, candidatos **2**, **3** e **5**.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-08 20:57** (commit `d3e633b`), e todas aplicadas de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, com `node validate.js` **18/18 · 102/102 · VERDE**. **`index.html` NAO muda: 846.128 bytes**. **Dois pares negativos medidos:** devolver `harness 17/17` ao `BUILD.md` e devolver `meta/NICHOS-CANDIDATOS.md` ao `CEREBRO.md` deixam o `C102` **VERMELHO**, cada um com a mensagem certa.
>
> **Medicao previa — teto:** nao se aplica; nada entra em `buildInstr` nem no CEREBRO gerado. O `C28` nao se move.
>
> **Numero de checklist e DERIVADO**, com `grep -o ... | wc -l` onde a contagem e de ocorrencia.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

A exploracao que o Code rodou no repositorio inteiro — a metade do terreno que o chat nao alcanca — achou **cinco pontos de prosa VIVA** declarando contagem errada de nicho, mais dois caminhos de documento que o disco desmente:

- `meta/CEREBRO.md` diz «16 nichos de conteudo + 1 construtor» (sao **17 + 1**), «harness dos **17** nichos», «jsdom) dos **17** nichos» e «**17/17** nichos» na regra de ouro.
- `BUILD.md` **se contradiz dentro do proprio arquivo**: linha 26 diz `18/18 nichos`, linha 34 diz `harness 17/17`.
- `meta/CEREBRO.md` cita `` `meta/NICHOS-CANDIDATOS.md` ``; o arquivo mora na **raiz**.
- `meta/CEREBRO.md` lista `DEPLOY-GUIDE.md` entre os arquivos «na raiz»; o `README.md` e o `CHANGELOG` dizem que ele e entregue **fora do repositorio**, e o disco nao o tem.

**A causa esta medida e e a mesma dos ultimos quatro achados: ninguem abre esses arquivos.** A nota de revisao da wo0064 registra que `CLAUDE.md`, `BUILD.md` e `CONTEXT.md` foram corrigidos de 17 para 18 — **o corpo do CEREBRO nao foi, e o `BUILD.md` so pela metade**. Ficou assim por 52 versoes. O `grep -nE "readFileSync|lerRepo" validate.js` confirma: nenhum alvo e `meta/CEREBRO.md` nem `BUILD.md`.

Corrigir sem guarda repetiria o padrao — por isso a Edicao 8 e um check.

## 2. Contexto factual

- **Medido — `17` nem sempre esta errado, e isso decide o desenho do check.** Sao **18 modulos**: 17 nichos de conteudo + 1 construtor (`custom`). A frase «17 nichos de conteudo + 1 construtor» e a UNICA forma em que `17` aparece **corretamente**, e a Edicao 1 a produz. Um check que proibisse `17 nichos` daria falso positivo na frase certa. Por isso o `C102` deriva `N` de `build-manifest.json.modules.length` e testa **formas**, nao o numero solto.
- **Medido em sandbox, e o primeiro par negativo reprovou o meu proprio check.** A primeira versao do regex exigia a palavra «nichos» ao lado de `17/17`; no `BUILD.md` o texto e so `harness 17/17`. **O check passava exatamente no caso que o motivou.** Corrigido: `N-1/N-1` casa sozinho, sem exigir a palavra. *Se o par negativo nao tivesse sido rodado, esta WO entregaria um guarda que nao guarda.*
- **Medido — um falso positivo do sandbox, declarado.** Ao rodar o `C102` a primeira vez, ele acusou `meta/LOG-TEMPLATE.md` como caminho inexistente. **Nao e defeito:** o `_MANIFEST` do FlatDrop mostra o caminho real `meta/LOG-TEMPLATE.md`, e o arquivo faltava era no meu sandbox. Reposto, o check ficou verde com **6 caminhos `meta/` conferidos**. E a marca `[medido em sandbox]` da wo0114 servindo para o que foi criada.
- **Medido — o `DEPLOY-GUIDE.md` some da lista, nao vira arquivo.** Dois documentos concordam que ele e externo; um so, o CEREBRO, dizia que era da raiz. A correcao acompanha a maioria e explicita o «fora do repositorio».

---

## Edicao 1 — `meta/CEREBRO.md` · a contagem de nichos de conteudo

**Ancora:**

```
16 nichos de conteúdo + 1 construtor
```

**Substituir por:**

```
17 nichos de conteúdo + 1 construtor
```

## Edicao 2 — `meta/CEREBRO.md` · o harness no ritual de aprofundar

**Ancora:**

```
harness dos 17 nichos
```

**Substituir por:**

```
harness dos 18 nichos
```

## Edicao 3 — `meta/CEREBRO.md` · o comentario do bloco de validacao

**Ancora:**

```
teste DOM (jsdom) dos 17 nichos
```

**Substituir por:**

```
teste DOM (jsdom) dos 18 nichos
```

## Edicao 4 — `meta/CEREBRO.md` · a regra de ouro

**Ancora:**

```
**17/17 nichos + todas as checagens, 0 erros**
```

**Substituir por:**

```
**18/18 nichos + todas as checagens, 0 erros**
```

## Edicao 5 — `BUILD.md` · a segunda rede da migracao

**Ancora:**

```
**harness 17/17**
```

**Substituir por:**

```
**harness 18/18**
```

> Esta e a linha 34, que contradizia a linha 26 do MESMO arquivo. Depois desta edicao o `BUILD.md` concorda consigo mesmo.

## Edicao 6 — `meta/CEREBRO.md` · o `DEPLOY-GUIDE.md` nao e da raiz

**Ancora:**

```
(mais `README.md`, `PLANNING.md`, `DEPLOY-GUIDE.md` na raiz)
```

**Substituir por:**

```
(mais `README.md` e `PLANNING.md` na raiz; o `DEPLOY-GUIDE.md` é entregue FORA do repositório, para o dono guardar separado)
```

## Edicao 7 — `meta/CEREBRO.md` · o `NICHOS-CANDIDATOS.md` mora na raiz

**Ancora** (inicio da linha da tabela de documentos):

```
| `meta/NICHOS-CANDIDATOS.md` |
```

**Substituir por:**

```
| `NICHOS-CANDIDATOS.md` (raiz) |
```

## Edicao 8 — `validate.js` · o `C102`, o guarda que faltava

**Ancora:** a linha do **ultimo** `check("…` do arquivo. **Inserir o bloco abaixo IMEDIATAMENTE ANTES dela.**

```
/* C102 (wo0117) — A prosa VIVA da casa nao pode declarar contagem de nicho nem caminho de
   documento que o disco desmente. Nenhum check abria meta/CEREBRO.md nem BUILD.md: a passada
   de higiene da wo0064 corrigiu CLAUDE/BUILD/CONTEXT e deixou o CORPO do CEREBRO em 17, e o
   BUILD.md ficou contraditorio consigo mesmo (18/18 numa linha, 17/17 na outra) por 52 versoes.
   O numero e DERIVADO do build-manifest, nunca escrito aqui — se um nicho entrar, o check
   acompanha sozinho. */
check("C102 a prosa viva da casa nao mente sobre contagem de nicho nem caminho de documento (wo0117)", () => {
  const pathmod = require("path");
  const raiz = pathmod.dirname(pathmod.resolve(path));
  const ler = (rel) => {
    const abs = pathmod.join(raiz, rel);
    assert(fs.existsSync(abs), "arquivo do proprio repo ausente: " + rel);
    return fs.readFileSync(abs, "utf8");
  };
  const manifesto = JSON.parse(ler("build-manifest.json"));
  const N = (manifesto.modules || manifesto.modulos || []).length;
  assert(N >= 2, "build-manifest.json nao declara a lista de modulos: sem ela o numero volta a ser escrito a mao");
  const cerebro = ler("meta/CEREBRO.md"), build = ler("BUILD.md");

  // (1) a contagem do harness e sempre N/N. N-1 e o numero de nichos de CONTEUDO (o construtor
  //     nao conta), e essa e a UNICA forma em que N-1 aparece corretamente.
  [["meta/CEREBRO.md", cerebro], ["BUILD.md", build]].forEach(([nome, txt]) => {
    // A forma errada aparece de tres jeitos, e o "N-1/N-1" NEM SEMPRE traz a palavra "nichos"
    // ao lado — no BUILD.md era so "harness 17/17". Exigir a palavra faria o check passar no
    // exato caso que o motivou.
    const errado = new RegExp("\\b" + (N-1) + "\\s*/\\s*" + (N-1) + "\\b|harness d[oe]s? " + (N-1) + " nichos?|jsdom\\) d[oe]s? " + (N-1) + " nichos?", "i");
    assert(!errado.test(txt), nome + " declara " + (N-1) + " nichos onde o build-manifest tem " + N + ": a prosa viva ficou atras do disco");
  });
  assert(new RegExp("\\b" + N + "\\s*/\\s*" + N + "\\s*nichos?").test(cerebro), "meta/CEREBRO.md nao declara a regra de ouro " + N + "/" + N);
  assert(new RegExp((N-1) + " nichos de conte").test(cerebro), "meta/CEREBRO.md perdeu a contagem de nichos de conteudo (" + (N-1) + " + 1 construtor)");

  // (2) todo `meta/X.md` citado na tabela de documentos do CEREBRO existe nesse caminho.
  //     Pega o caso da wo0117: NICHOS-CANDIDATOS.md mora na raiz e a tabela dizia meta/.
  const citados = [...new Set((cerebro.match(/`meta\/[A-Za-z0-9_-]+\.md`/g) || []).map(s => s.replace(/`/g, "")))];
  citados.forEach(rel => {
    assert(fs.existsSync(pathmod.join(raiz, rel)), "meta/CEREBRO.md cita `" + rel + "`, que nao existe nesse caminho — documento citado no lugar errado e pior que nao citado");
  });
  return "ok (N=" + N + ", " + citados.length + " caminhos meta/ conferidos)";
});
```

> **O total sobe para 102.** A regra de ouro passa a ser **18/18 · 102/102**.

---

## Fora de escopo — e tres deles precisam de DECISAO sua

- **Candidato 1 (log do dia).** A skill `wrap` **gerada** manda escrever `logs/AAAA-MM-DD.md`; a **instalada** na casa nao manda, e o `C43` tem 24 clausulas e nenhuma para o log. Efeito medido: `logs/` para em 2026-09-02, e oito sessoes desde entao fecharam com `/wrap` sem criar log. **Nao entra aqui porque depende de decisao:** a casa quer log diario? Se sim, e uma clausula no `C43` e o texto na skill instalada; se nao, a divergencia e proposital e precisa estar **escrita**. *Ha ainda um detalhe que o Code achou e vale sozinho: `validate.js:1082` justifica o `Write` no allow dizendo «as skills mandam criar log e relatorio» — a frase esta desatualizada em relacao a skill instalada.*
- **Candidato 6 (o invariante CRLF sem lastro).** `git ls-files --eol src/index.template.html` devolve `i/lf w/crlf attr/text=auto`: o CRLF vem do `core.autocrlf` da sua maquina, **nao** do repositorio. O `.gitattributes` nao fixa nada, e a skill `apply-wo` afirma «o template e CRLF» como fato. Um clone com `core.autocrlf=false` traz o template em LF e as ancoras multi-linha param de casar **sem aviso**. **Decisao:** fixar `src/index.template.html text eol=crlf` (+ `--renormalize`), ou reescrever a skill para falar de arvore e nao de indice.
- **Candidato 4 (referencias a `meta/analises/*.md` inexistentes).** Quatro casos, dois deles do Mapsmith escritos como se fossem locais. Pede allowlist comentada — desenho proprio, e o `C102` ja abriu o caminho conferindo os `meta/*.md` do CEREBRO.
- **A IDEA-141 do mapsmith**, lida no pente fino: «ao contornar uma restricao do produto dentro de uma WO ou de um teste, escreva uma linha dizendo por que a restricao existe; se a linha nao sair, a restricao e suspeita». Vale para nos e nao entra nesta WO.

## Armadilhas desta WO

- **`17` nem sempre esta errado.** A Edicao 1 **produz** um `17` correto. Nao troque por 18.
- **A Edicao 8 tem regex montada por concatenacao de string**, entao as barras sao **duplas** no codigo (`"\\b"`, `"\\s"`, `"jsdom\\)"`). Se virarem simples, o check quebra ou passa a casar errado.
- **Esta WO nao muda o `index.html`.** Tamanho diferente de **846.128** significa que algo tocou o template.
- **Nada de `sed -i`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` continua **846.128 bytes**.
- [ ] `node validate.js` → **18/18 · 102/102 · 0 erros**. O `C102` reporta `ok (N=18, 6 caminhos meta/ conferidos)`.
- [ ] `grep -nE "1[67]\s*/\s*1[67]" meta/CEREBRO.md BUILD.md` → **vazio**.
- [ ] `grep -o "17 nichos de conte" meta/CEREBRO.md | wc -l` → **1** *(o `17` correto, que fica)*.
- [ ] `grep -o "18/18 nichos" meta/CEREBRO.md | wc -l` → **1**.
- [ ] `grep -o "meta/NICHOS-CANDIDATOS" meta/CEREBRO.md | wc -l` → **0**.
- [ ] `grep -o "DEPLOY-GUIDE.md\` na raiz" meta/CEREBRO.md | wc -l` → **0**.
- [ ] **Par negativo 1 (medido):** devolver `**harness 17/17**` ao `BUILD.md` → **VERMELHO no C102**, com «BUILD.md declara 17 nichos onde o build-manifest tem 18». Desfaça.
- [ ] **Par negativo 2 (medido):** devolver `` | `meta/NICHOS-CANDIDATOS.md` | `` ao CEREBRO → **VERMELHO no C102**, nomeando o caminho. Desfaça.
- [ ] `git diff` mostra: `meta/CEREBRO.md`, `BUILD.md`, `validate.js` — mais a WO (nova). **`index.html` e `src/` NAO aparecem.**

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · **as duas mensagens dos pares negativos, literais** · o commit e o push, escrito **depois** de resolver o push.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0117.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/CEREBRO.md BUILD.md validate.js meta/workorders/260908-wo0117-prosa-viva-nao-mente.md
```

```
git commit -m "fix(meta): a prosa viva para de declarar 17 nichos e caminho de documento errado" -m "Cinco pontos de prosa viva diziam 16 ou 17 onde o build-manifest tem 18, e o BUILD.md se contradizia dentro do proprio arquivo desde a wo0064. O CEREBRO citava meta/NICHOS-CANDIDATOS.md, que mora na raiz, e listava o DEPLOY-GUIDE.md como arquivo da raiz, sendo ele entregue fora do repositorio. Achados pela exploracao que o Code rodou no repo inteiro. Entra o C102, que deriva o numero do build-manifest e confere os caminhos meta/ citados no CEREBRO: nenhum check abria esses dois arquivos, que e por que o defeito viveu 52 versoes. index.html inalterado."
```

```
git push
```
