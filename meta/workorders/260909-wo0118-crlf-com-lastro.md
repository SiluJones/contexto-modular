# WO 0118 — o fim de linha do template deixa de ser hábito da máquina e vira regra do repositório

> **Tipo:** WO de CODIGO (repo + harness) + doc instalado. Toca `.gitattributes`, `.claude/skills/apply-wo/SKILL.md` e `validate.js`. **NAO toca `src/`** — o `index.html` nao muda.
> **Config sugerida:** modelo padrao, esforco medio-baixo. Tres edicoes pequenas e um check novo.
> **Pre-requisito:** v1.122.0 com wo0117 aplicada, commit `d7202de`, arvore limpa.
> **Base:** candidato **6** da exploracao do Code (`260908-1009`), com decisao do dono: fazer os dois lados.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-09** (commit `d7202de`), e aplicadas de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, com `node validate.js` **18/18 · 103/103 · VERDE**. **`index.html` NAO muda: 846.128 bytes.** **Dois pares negativos medidos:** tirar a linha do `.gitattributes` e devolver a frase antiga a skill deixam o `C103` **VERMELHO**, cada um com a mensagem certa.
>
> **Medicao previa — teto:** nao se aplica; nada entra em `buildInstr` nem no CEREBRO gerado.
>
> **Numero de checklist e DERIVADO.**
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

`git ls-files --eol src/index.template.html` devolvia:

```
i/lf   w/crlf   attr/text=auto
```

Ou seja: o repositorio guarda LF (correto), a pasta do dono tem CRLF, e **o repositorio nao manda nada a respeito** — quem decide e o `core.autocrlf` da maquina. **O CRLF do template e um habito local, nao uma regra do projeto.**

E a skill `apply-wo` instalada afirma o contrario, como fato:

> «`src/index.template.html` e **CRLF**; `validate.js`, `build.js` e os `src/niches/*.js` sao **LF**. Ancora de mais de uma linha colada com o separador errado nao casa.»

Dezenas de WOs repetem «template ALL-CRLF» e calibram ancoras multi-linha nisso. **Um clone com `core.autocrlf=false` traz o template em LF e essas ancoras param de casar sem nenhum aviso** — e o precedente do custo ja existe: na wo0112 um `sed -i` converteu o arquivo inteiro para LF e o unico sinal foi a queda de tamanho do `index.html`.

**A decisao do dono foi fazer os dois lados**, e e o certo: o atributo torna a afirmacao verdadeira, e a skill passa a dizer o que o git responde.

## 2. Contexto factual

- **Medido — a operacao e segura e NAO exige `--renormalize`.** O git guarda LF no indice e converte na arvore; o indice **ja esta** LF (`i/lf`). Com `text eol=crlf`, o que muda e so o que o checkout escreve na pasta. Nenhum arquivo do repositorio e reescrito em massa.
- **Medido — `i/lf` continua sendo o valor correto DEPOIS da mudanca.** O `git ls-files --eol` passa a devolver `i/lf w/crlf attr/text=crlf`: so o terceiro campo muda. *Quem comparar o primeiro campo com a frase «o template e CRLF» vai achar que achou um defeito — por isso a Edicao 2 explica os dois numeros dentro da propria skill.*
- **Medido — o `.gitattributes` ja tem precedente de fixar fim de linha por arquivo:** `.githooks/pre-commit text eol=lf` (D-075) e `*.sh text eol=lf`. A linha nova segue o mesmo padrao, com o sinal invertido.
- **Medido — a justificativa do `Write` no allow estava desatualizada.** `validate.js` dizia «as skills mandam criar log e relatorio»; a skill `wrap` **instalada** nao manda criar log (e o assunto do candidato 1, que segue aberto). A Edicao 3 corrige a frase para o que e verdade hoje, sem decidir nada sobre o log.

---

## Edicao 1 — `.gitattributes` · o atributo que faltava

**Ancora** (primeira linha do arquivo):

```
* text=auto
```

**Substituir por:**

```
* text=auto
# wo0118: o CRLF do template deixa de ser habito da maquina e vira regra do repositorio.
# `git ls-files --eol` mostrava `i/lf w/crlf attr/text=auto`: o CRLF vinha do core.autocrlf
# do dono, nao daqui — um clone com outra configuracao traria LF e as ancoras multi-linha
# das WOs parariam de casar SEM AVISO. Com o atributo, o indice segue LF (correto) e a arvore
# de trabalho recebe CRLF em qualquer maquina. Nao exige --renormalize: o indice ja esta LF.
src/index.template.html text eol=crlf
```

> **Depois de aplicar, confira com `git ls-files --eol src/index.template.html`.** O esperado e `i/lf w/crlf attr/text=crlf`. **Se o `w/` vier `lf`,** rode `git checkout -- src/index.template.html` para o git reescrever a arvore com o atributo novo, e confira o `node build.js` em seguida (o tamanho do `index.html` denuncia se o arquivo mudou de fim de linha).

## Edicao 2 — `.claude/skills/apply-wo/SKILL.md` · a skill passa a dizer o que o git responde

**Ancora** (o item inteiro, tres linhas):

```
- **Fim de linha por arquivo:** `src/index.template.html` é **CRLF**; `validate.js`, `build.js` e os
  `src/niches/*.js` são **LF**. Âncora de mais de uma linha colada com o separador errado não casa —
  na dúvida, edite linha a linha.
```

**Substituir por:**

```
- **Fim de linha por arquivo:** na **árvore de trabalho** (o que o editor abre),
  `src/index.template.html` é **CRLF** — garantido pelo `.gitattributes`, não pela configuração da
  máquina; `validate.js`, `build.js`, os `src/niches/*.js` e todo `.md` são **LF**. *No índice do git
  o template é LF, e isso é o certo: `git ls-files --eol` devolve `i/lf w/crlf attr/text=crlf`. Quem
  compara os dois números sem saber disso acha que achou um defeito.* Âncora de mais de uma linha
  colada com o separador errado não casa — na dúvida, edite linha a linha.
```

## Edicao 3 — `validate.js` · a justificativa do `Write` para de citar o que a skill nao manda

**Ancora:**

```
as skills mandam criar log e relatorio, e a permissao nega o que
```

**Substituir por:**

```
a skill wrap grava o relatorio em arquivo, e a permissao nega o que
```

## Edicao 4 — `validate.js` · o `C103`

**Ancora:** a linha do **ultimo** `check("…` do arquivo. **Inserir o bloco abaixo IMEDIATAMENTE ANTES dela.**

```
/* C103 (wo0118) — O invariante de fim de linha do template tem lastro no .gitattributes, e a
   skill que o assume diz a MESMA coisa que o git. Antes, `git ls-files --eol` devolvia
   attr/text=auto: o CRLF vinha da maquina do dono, e um clone com outra configuracao quebraria
   as ancoras multi-linha das WOs sem aviso nenhum.
   NAO cobre caminhos citados que nao existem — ver a "Medicao pedida" da wo0118: a lista so pode
   ser levantada por quem tem o repo inteiro, e a raia de planejamento nao tem. */
check("C103 o fim de linha do template tem lastro no repositorio (wo0118)", () => {
  const pathmod = require("path");
  const raiz = pathmod.dirname(pathmod.resolve(path));
  const ler = (rel) => {
    const abs = pathmod.join(raiz, rel);
    assert(fs.existsSync(abs), "arquivo do proprio repo ausente: " + rel);
    return fs.readFileSync(abs, "utf8");
  };
  const attrs = ler(".gitattributes");
  assert(/^src\/index\.template\.html\s+text\s+eol=crlf\s*$/m.test(attrs),
    ".gitattributes nao fixa `src/index.template.html text eol=crlf`: o CRLF que as skills assumem volta a depender do core.autocrlf da maquina");
  const skApply = ler(".claude/skills/apply-wo/SKILL.md");
  assert(/árvore de trabalho/.test(skApply) && /garantido pelo `\.gitattributes`/.test(skApply),
    "a skill apply-wo afirma o CRLF sem dizer que e da arvore de trabalho e de onde vem a garantia: o git responde i/lf e a skill diz CRLF, e as duas frases precisam concordar");
  return "ok (eol do template com lastro em .gitattributes)";
});
```

> **O total sobe para 103.** A regra de ouro passa a ser **18/18 · 103/103**.

---

## Medicao pedida — os caminhos citados (candidato 4), e por que ela NAO virou check aqui

**Eu tentei e nao consigo validar daqui.** Escrevi o check que varre `meta/analises/*.md` e `meta/workorders/*.md` citados nos documentos e testa se existem; rodado no meu sandbox, ele acusou **21 caminhos**, e **todos os 21 sao falso positivo** — o mount chega achatado e sem a pasta `meta/analises/`, entao ate as analises que eu mesmo entreguei (`260903-…`, `260904-…`) aparecem como ausentes.

Entregar um guarda que eu nao pude testar seria exatamente o que a marca `[medido em sandbox]` existe para impedir. Entao **o pedido vai para quem tem o disco**:

```
Rode e me devolva a lista, sem consertar nada:

  git grep -hoE 'meta/(analises|workorders)/[0-9A-Za-z_.-]+\.md' | sort -u | \
    while read p; do [ -e "$p" ] || echo "MISS $p"; done

E, para cada MISS, uma linha dizendo ONDE ele e citado:

  git grep -n "<o caminho>" -- meta/ CLAUDE.md
```

Com a lista real em maos, o `C103` ganha a segunda metade e a allowlist sai **comentada caso a caso**. A candidata que ja conheco, da exploracao do Code, tem quatro entradas: a `260718-…` (D-087 ja registra que nao foi recriada), a `260728-…` (anterior a existencia da pasta `analises/`) e duas `260810-…` que sao **do mapsmith**, citadas pelo nome como se fossem locais.

## Fora de escopo — e o log continua esperando VOCE

- **O log diario (candidato 1).** Minha recomendacao esta no fecho deste turno, com a evidencia. Nao entra aqui porque a resposta muda o que se escreve: se for «sim», e clausula no `C43` mais texto na skill instalada; se for «nao», e uma linha declarando a divergencia de proposito. **Nao decidi por voce porque as duas saidas sao legitimas e o custo recai sobre o seu fluxo, nao sobre o meu.**
- **`git add --renormalize`.** Desnecessario e arriscado: o indice ja esta LF.
- **Fixar fim de linha para outros arquivos.** Todos os demais sao LF e ja se comportam; mexer sem necessidade e risco puro.

## Armadilhas desta WO

- **A Edicao 1 muda um arquivo que o git LE ao trocar de branch.** Depois de aplicar, `git status` pode mostrar o template como modificado — e normal, e o que o atributo faz. Confira com `git ls-files --eol` antes de concluir qualquer coisa, e **nao** desfaca por susto.
- **`i/lf` continua correto depois da mudanca.** Nao «conserte» isso.
- **A Edicao 4 tem regex com barras simples** (`/^src\/index\.template\.html\s+text\s+eol=crlf\s*$/m`), porque e literal e nao concatenada — diferente do `C102`, onde as barras sao duplas. **Nao unifique os dois estilos.**
- **Nada de `sed -i`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `git ls-files --eol src/index.template.html` → **`i/lf w/crlf attr/text=crlf`**. *Se `w/` vier `lf`: `git checkout -- src/index.template.html` e confira de novo.*
- [ ] `node build.js` → OK, `index.html` continua **846.128 bytes**. *Este e o teste de que o fim de linha do template nao mudou de verdade.*
- [ ] `node validate.js` → **18/18 · 103/103 · 0 erros**.
- [ ] `grep -c "eol=crlf" .gitattributes` → **1**.
- [ ] `grep -o "árvore de trabalho" .claude/skills/apply-wo/SKILL.md | wc -l` → **1**.
- [ ] `grep -o "as skills mandam criar log" validate.js | wc -l` → **0**.
- [ ] **Par negativo 1 (medido):** apagar a linha `src/index.template.html text eol=crlf` → **VERMELHO no C103**. Desfaça.
- [ ] **Par negativo 2 (medido):** trocar «árvore de trabalho» por outra coisa na skill → **VERMELHO no C103**. Desfaça.
- [ ] `git diff` mostra: `.gitattributes`, `.claude/skills/apply-wo/SKILL.md`, `validate.js` — mais a WO (nova). **`index.html` e `src/` NAO aparecem** *(a menos que o `git status` acuse o template por causa do atributo; nesse caso o conteudo tem de estar igual — confira com `git diff --stat`, que deve mostrar 0 linhas alteradas)*.

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · **a saida literal de `git ls-files --eol src/index.template.html` antes e depois** · `build`/`validate` · as duas mensagens dos pares negativos · o commit e o push, escrito **depois** de resolver o push.

**E rode a medicao pedida acima**, colando a lista de `MISS` no relatorio — sem consertar nada.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0118.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add .gitattributes .claude/skills/apply-wo/SKILL.md validate.js meta/workorders/260909-wo0118-crlf-com-lastro.md
```

```
git commit -m "fix(repo): o CRLF do template ganha lastro no gitattributes e a skill passa a concordar com o git" -m "git ls-files --eol devolvia attr/text=auto: o CRLF do template vinha do core.autocrlf da maquina do dono, nao do repositorio, e um clone com outra configuracao traria LF quebrando as ancoras multi-linha das WOs sem aviso. O atributo fixa o comportamento em qualquer maquina sem exigir renormalize, porque o indice ja esta LF. A skill apply-wo passa a dizer arvore de trabalho e a explicar por que o indice e LF. C103 novo guarda as duas pontas. Corrige tambem a justificativa do Write no allow, que citava criacao de log que a skill instalada nao manda fazer."
```

```
git push
```
