# WO 0119 — o log do dia volta a ser escrito na casa, e o `C103` passa a conferir caminho citado

> **Tipo:** WO de CODIGO (harness) + doc instalado + registro. Toca `validate.js`, `.claude/skills/wrap/SKILL.md` e cria um arquivo em `logs/`. **NAO toca `src/`.**
> **Config sugerida:** modelo padrao, esforco medio. Uma clausula, um bloco de texto, um bloco de check e um log a escrever com dado do `git log`.
> **Pre-requisito:** v1.122.0 com wo0118 aplicada, commit `344aa30`, arvore limpa.
> **Base:** decisao do dono (**manter o log**) e a lista de `MISS` que a raia de execucao levantou no relatorio `260909-1231-code-kcm-apply-wo0118.txt`.
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** se o alvo ja estiver na forma nova, **PULE** e diga no relatorio.
>
> **Ancoras lidas em:** lidas NESTE turno, no mount gerado em **2026-09-09** (commit `344aa30`), e aplicadas de verdade em sandbox.
>
> **Afirmacao sobre artefato legivel:** executada em sandbox, `node validate.js` **18/18 · 103/103 · VERDE**, `index.html` inalterado em **846.128 bytes**. **Dois pares negativos medidos:** trocar `logs/AAAA-MM-DD.md` na skill instalada deixa o **`C43` VERMELHO**; apagar uma analise citada deixa o **`C103` VERMELHO** nomeando o caminho.
>
> **Como a Edicao 3 foi testada, e a ressalva importa:** o mount do chat chega achatado e **sem `meta/analises/`**, entao a segunda metade do `C103` nao pode ser validada aqui contra o estado real — na primeira tentativa ela acusou **21 caminhos, todos falso positivo**. O que foi testado e a **logica**: reconstrui no sandbox os 15 caminhos que a varredura do Code mostrou existirem, deixei ausentes os 7 `MISS`, e o check ficou verde com **5 perdoados**; removendo um dos 15, ficou vermelho. **A allowlist nao foi inventada: e a lista que a execucao mediu.** Se no repo real aparecer caminho fora dessa lista, o `C103` fica vermelho e a WO manda **PARAR e reportar**, nao ampliar a allowlist por conta.
>
> **Medicao previa — teto:** nao se aplica.
>
> **Proximo comando:** `/wrap`

---

## 1. Por que

**O log.** A skill `wrap` **gerada** manda escrever `logs/AAAA-MM-DD.md` desde sempre — e o `C47` confere isso no gerado. A skill **instalada na casa nao mandava**, e o `C43`, com 24 clausulas, nao tinha nenhuma sobre o log: um vao exato. Efeito medido pela exploracao do Code: `logs/` para em **2026-09-02** enquanto **oito sessoes** (wo0108 a wo0117) fecharam com `/wrap`.

O dono decidiu **manter o log**, com a razao escrita: *e um documento tecnico para o humano ler depois*. Isso resolve a duvida que eu tinha levantado — eu havia recomendado o contrario com base em «ninguem sentiu falta», e o argumento nao se sustenta quando o proposito e ser lido **no futuro**, nao agora. **O log e a unica peca do ciclo que nao sobe ao mount**: o que nao for escrito la so existe nos `.txt` da pasta-pai, que ninguem varre.

**O `C103`.** A wo0118 entregou so a metade que a raia de planejamento conseguia testar, e pediu a medicao. Ela voltou: **7 `MISS`**, sendo 4 analises realmente ausentes e 3 falsos-caminhos (2 placeholders de modelo e 1 arquivo renomeado). Com a lista real, a allowlist sai **comentada caso a caso** e o check ganha a segunda metade.

*Uma correcao de fato, vinda do relatorio:* a wo0118 supunha que as duas analises `260810-*` fossem **do mapsmith**. O `git grep` mostrou que sao citadas por analises irmas **do proprio KCM** (`260811-*`). A allowlist registra isso corrigido — atribuicao errada num comentario de allowlist envelhece pior que a ausencia que ela perdoa.

## 2. Contexto factual

- **Medido — o vao no `C43`.** 24 clausulas, nenhuma sobre o log. A clausula nova e a 25ª e fecha a classe: a skill instalada nao pode ficar atras da gerada **naquilo que a gerada manda fazer**.
- **Medido — os 7 `MISS`, com onde cada um e citado.** As 4 analises ausentes: `260718-*` (a D-087 **ja documenta em prosa** que ela nao esta no repo e nao foi recriada), `260728-*` (anterior a existencia da pasta `analises/`, criada na wo0062) e as duas `260810-*`. Os 3 falsos-caminhos: `AAMMDD-woNNNN-desc.md` e `_GUIA-doc-por-spec.md` sao **placeholders** dentro do texto que ensina a nomear, e `_GUIA.md` e nome antigo do `_GUIA-doc-por-wo.md`, citado so em WO historica.
- **Decidido, e e a parte que exige criterio: os logs do hiato NAO sao reconstruidos dia a dia.** Escrever hoje seis arquivos datados de 03 a 08 de setembro produziria registro que **parece contemporaneo e nao e** — exatamente o que a regra dura proibe quando manda nao reconstruir analise por memoria. O que entra e **uma** entrada, no log do dia da aplicacao, declarando o hiato e apontando onde o registro daqueles dias realmente esta (STATUS e os `.txt` da pasta-pai). *Ausencia declarada e dado; ausencia preenchida por memoria e ficcao com carimbo de data.*

---

## Edicao 1 — `.claude/skills/wrap/SKILL.md` · a casa volta a escrever o log

**Ancora** (inicio do item «Relate»):

```
- **Relate:** o que foi feito, os achados e desvios do texto literal da WO (âncora já aplicada,
```

**Inserir IMEDIATAMENTE ANTES desse item:**

```
- **Escreva o log do dia em `logs/AAAA-MM-DD.md`** (formato em `meta/LOG-TEMPLATE.md`). Se o arquivo
  do dia **não existe, CRIE** — não regenerar é uma coisa, não criar é outra. Se já existe,
  **acrescente** com `## Conversa N`: o nome é da data, não da conversa, e arquivo novo por conversa
  quebra o nome. **Duas conversas no mesmo dia = o MESMO arquivo.** O log é para o humano ler depois,
  e é a única peça deste ciclo que não sobe ao mount — o que não for escrito aqui só existe nos
  relatórios da pasta-pai, que ninguém varre. Cinco linhas escritas hoje valem mais que uma página
  reconstituída na semana que vem.
```

## Edicao 2 — `validate.js` · a 25ª clausula do `C43`

**Ancora** (ultima linha da tabela `CLAUSULAS` antes das clausulas da wo0116):

```
    ["relatorio fora do repo",   /DENTRO do repo/,                        ["wrap"]],
```

**Inserir IMEDIATAMENTE APOS:**

```
    // wo0119: o log do dia. A skill GERADA manda cria-lo desde sempre (C47); a INSTALADA nao
    // mandava, e por isso logs/ parou em 2026-09-02 enquanto oito sessoes fechavam com /wrap.
    // Era um vao na lista de clausulas: 24 delas, nenhuma sobre o log.
    ["wrap: log do dia",         /logs\/AAAA-MM-DD\.md/,                  ["wrap"]],
```

## Edicao 3 — `validate.js` · o `C103` ganha a segunda metade

**Ancora** (ultima linha do `check("C103 …")`):

```
  return "ok (eol do template com lastro em .gitattributes)";
```

**Substituir por:**

```
  // (2) wo0119: caminho de analise ou de WO citado em documento existe no disco. A lista de
  //     perdoados NAO foi inventada: veio da varredura que a raia de EXECUCAO rodou no repo
  //     inteiro (relatorio 260909-1231), porque o mount do chat chega achatado e sem
  //     meta/analises/ — la, 21 caminhos apareciam como ausentes e os 21 eram falso positivo.
  const PERDOADOS = new Set([
    // Ausente e JA DOCUMENTADO: a D-087 registra em prosa que esta analise nao esta no repo
    // e nao foi recriada (a regra dura proibe reconstruir analise por memoria).
    "meta/analises/260718-ANALISE-i-N7-SDD-NICHOS-CODIGO.md",
    // Citada no cabecalho da wo0067, escrita ANTES de a pasta meta/analises/ existir (wo0062).
    "meta/analises/260728-ANALISE-bloco-gerenciado-vs-manual.md",
    // Duas analises do KCM citadas por analises irmas (260811-*) e que nunca foram commitadas.
    // Ficam perdoadas porque as citacoes vivem em registro imutavel; se um dia forem recriadas,
    // basta remover daqui e o check volta a exigi-las.
    "meta/analises/260810-ANALISE-fatiamento-no-formato-do-pacote.md",
    "meta/analises/260810-ANALISE-o-instrumento-mede-o-que-e-facil.md",
    // Arquivo renomeado; a citacao sobrevive so em WO historica, que nao se reescreve.
    "meta/workorders/_GUIA.md"
  ]);
  // Placeholders de modelo (`AAMMDD-woNNNN-desc.md`, `_GUIA-doc-por-spec.md`) nao sao caminho:
  // sao exemplo de nome dentro do proprio texto que ensina a nomear.
  const ehPlaceholder = (s) => /AAMMDD|NNNN|<|assunto|doc-por-spec/.test(s);
  const alvos = ["meta/CEREBRO.md","meta/DECISIONS.md","meta/IDEAS.md","meta/ROADMAP.md","meta/STATUS.md","CLAUDE.md"];
  const faltando = [];
  alvos.forEach(rel => {
    const abs = pathmod.join(raiz, rel);
    if(!fs.existsSync(abs)) return;
    const txt = fs.readFileSync(abs, "utf8");
    const cits = txt.match(/meta\/(?:analises|workorders)\/[0-9A-Za-z_.-]+\.md/g) || [];
    [...new Set(cits)].forEach(c => {
      if(ehPlaceholder(c) || PERDOADOS.has(c)) return;
      if(!fs.existsSync(pathmod.join(raiz, c))) faltando.push(rel + " -> " + c);
    });
  });
  assert(faltando.length === 0,
    "caminho citado que nao existe no disco (caso historico fechado entra na allowlist COMENTADA do C103; se nao for, o arquivo deveria ter sido commitado): " + faltando.join(" | "));

  return "ok (eol com lastro, " + PERDOADOS.size + " caminhos perdoados)";
```

> **Se este check vier VERMELHO com caminho fora da allowlist: PARE e reporte a lista.** Nao amplie a allowlist por conta — cada entrada dela e um caso historico **fechado**, e transformar isso num despejo de excecoes mata o check em tres meses.

## Edicao 4 — `logs/2026-09-09.md` · o log volta, e o hiato fica declarado

**Crie o arquivo do dia** (ou acrescente, se ja existir, com `## Conversa N`). Escreva a entrada normal do dia — a aplicacao desta WO — e, **antes dela**, esta secao. Os dados entre `<>` saem de comando, nao de memoria:

```
## Hiato de registro — 2026-09-03 a 2026-09-08

O log deste projeto parou em **2026-09-02** e voltou hoje. No intervalo, oito sessões fecharam com
`/wrap` sem criar o arquivo do dia: a skill `wrap` **instalada** aqui não mandava criá-lo, embora a
**gerada** mandasse desde sempre, e nenhuma cláusula do `C43` cobria essa diferença (wo0119).

**Estes dias NÃO foram reconstruídos, de propósito.** Escrever hoje seis arquivos datados de
03 a 08 de setembro produziria registro que parece contemporâneo e não é — ausência declarada é
dado, ausência preenchida por memória é ficção com carimbo de data. O que aconteceu no período está
registrado em dois lugares, os dois íntegros:

- `meta/STATUS.md` — uma entrada por sessão, com o que foi feito e o commit.
- Os relatórios `../AAMMDD-HHMM-code-kcm-*.txt` na pasta-pai, um por `apply` e um por `wrap`.

Commits do período, para quem for procurar:

<cole aqui a saída de `git log --format='%ad %h %s' --date=short --since=2026-09-03 --until=2026-09-08`>
```

---

## Fora de escopo

- **Reconstruir os logs de 03 a 08 dia a dia.** Ver a Edicao 4 e a razao no contexto factual.
- **A skill `wrap` GERADA.** Ja manda criar o log e ja e conferida pelo `C47`. Esta WO so alcanca a casa.
- **Os 3 falsos-caminhos** (`AAMMDD-woNNNN-desc.md`, `_GUIA-doc-por-spec.md`) — sao placeholders e o `ehPlaceholder` os ignora por forma, nao por lista. Nao entram na allowlist: allowlist e para caso concreto, filtro e para classe.
- **O nicho de teste `Fallout 76`** que o dono subiu ao mount neste turno. E frente propria e comeca por leitura, nao por WO.

## Armadilhas desta WO

- **A Edicao 3 tem regex com barra simples** (`/meta\/(?:analises|workorders)\/[0-9A-Za-z_.-]+\.md/g`) porque e literal — diferente do `C102`, onde a regex e montada por concatenacao e as barras sao duplas. **Nao unifique.**
- **A Edicao 4 nao e texto pronto:** o bloco entre `<>` exige rodar o `git log`. Colar o bloco com o `<...>` intacto e entregar um log que declara o hiato e nao diz quais commits foram.
- **O `C103` pode vir vermelho no repo real** com caminho fora da allowlist — o mount nao me deixa garantir o contrario. **PARE e reporte.**
- **Nada de `sed -i`.**

---

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` → OK, `index.html` continua **846.128 bytes**.
- [ ] `node validate.js` → **18/18 · 103/103 · 0 erros**. O `C103` reporta `ok (eol com lastro, 5 caminhos perdoados)`.
- [ ] `grep -o "logs/AAAA-MM-DD.md" .claude/skills/wrap/SKILL.md | wc -l` → **1** *(era 0)*.
- [ ] `grep -o "wrap: log do dia" validate.js | wc -l` → **1**.
- [ ] `ls logs/ | tail -1` → **`2026-09-09.md`**, e o arquivo contém a seção do hiato **com a saída real do `git log`**, sem `<>`.
- [ ] **Par negativo 1 (medido):** trocar `logs/AAAA-MM-DD.md` por outra coisa na skill instalada → **VERMELHO no C43**. Desfaça.
- [ ] **Par negativo 2 (medido):** renomear temporariamente uma análise citada em `meta/analises/` → **VERMELHO no C103**, nomeando o caminho. Desfaça.
- [ ] `git diff` mostra: `validate.js`, `.claude/skills/wrap/SKILL.md` e o `logs/2026-09-09.md` novo — mais a WO. **`index.html` e `src/` NAO aparecem.**

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · o que fugiu do texto literal da WO · arquivos tocados · `build`/`validate` · **se o `C103` acusou algum caminho fora da allowlist, a lista literal** · o commit e o push, escrito **depois** de resolver o push.

Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0119.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add validate.js .claude/skills/wrap/SKILL.md logs/2026-09-09.md meta/workorders/260909-wo0119-log-do-dia-e-caminho-citado.md
```

```
git commit -m "fix(casa): o log do dia volta a ser escrito, e o C103 confere caminho citado" -m "A skill wrap gerada manda criar logs/AAAA-MM-DD.md desde sempre e a instalada nao mandava: logs/ parou em 2026-09-02 enquanto oito sessoes fechavam com wrap. Entra a 25a clausula do C43, que era o vao exato. O hiato de 03 a 08 fica DECLARADO no log do dia em vez de reconstruido dia a dia, porque registro retroativo parece contemporaneo e nao e. O C103 ganha a segunda metade: caminho de analise ou WO citado nos meta tem de existir, com allowlist de cinco casos historicos comentados um a um, levantada pela varredura que a execucao rodou no repo inteiro."
```

```
git push
```
