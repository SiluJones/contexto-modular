# WO 0075 — Paridade dos templates de nicho, formato legado e estado do repo pelo manifesto

> **Tipo:** mista (módulos de nicho + template + harness).
> **Config sugerida:** Sonnet 5, esforço **Médio**. Sete edições ancoradas + um check; nenhuma decisão delegada.
> **Pré-requisito:** `v1.95.0`, commit `8af3ed7`, árvore limpa, harness **18/18 · 74/74 · 0 erros**.
> **Base:** `260802-MENSAGEM-FlatDrop-para-KCM.md`, Parte 3 (itens 3, 4, 5, 6) e Parte 2 (contrato do
> manifesto). Leva **1 de 2** — a Parte 1 da mensagem (anatomia do bloco gerado) fica para a leva 2.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte** — nunca chute um
> lugar próximo.
> **Idempotência:** antes de cada inserção, procure a frase-chave do texto NOVO. Se já existir, **PULE**
> o item e diga no relatório — não duplique.

> **Canal dos meta neste ciclo = CODE.** Esta WO É o registro: aplique os appends previstos em
> «Ao terminar».

---

## 1. Por que

Uma frente irmã devolveu quatro observações que se confirmaram na leitura do template. Três delas são
o **mesmo defeito estrutural**, que ainda não tinha nome aqui:

**Dois nichos — `dev` e `brainstorm` — redefinem os templates universais de `IDEAS.md` e `STATUS.md`, e
esses overrides não herdam refinamento nenhum.** O `UNIVERSAL_IDEAS_TPL` tem as seções «Feedback para o
Kit» e «Feedback para o ASU»; as versões do `dev` e do `brainstorm` não têm. Como o CEREBRO gerado manda
escrever nessas seções em **três** lugares diferentes, todo projeto de nicho dev nasce com uma regra que
aponta para um endereço que o próprio kit não criou. Duas frentes irmãs tiveram que abrir a seção à mão
antes de poder mandar o primeiro feedback — inclusive o feedback que originou esta WO.

É o inverso do defeito da wo0074. Lá, aplicamos uma convenção uniformemente sem perguntar se devia ser
uniforme. Aqui, refinamos o universal e **esquecemos que dois nichos não o usam**. Nenhum check cobria a
paridade, então o buraco era invisível ao harness.

Os outros dois pontos são menores e independentes:

- **O kit se contradiz sobre `.claude/commands/`.** O protocolo de update chama o formato de
  «descontinuado» e o trata como a única migração que sempre acontece; a instalação e o README do zip
  dizem que ele «também funcionaria, mas Skills é o recomendado». Duas frases do mesmo template
  discordando afrouxam a migração que o próprio kit manda fazer.
- **O log tem nome de dia e descrição de sessão.** `logs/AAAA-MM-DD.md` + «ao final de cada sessão»
  deixa indefinido o caso de duas sessões no mesmo dia — e a saída óbvia (arquivo novo por sessão)
  quebra o nome. Uma frente irmã resolveu isso sozinha, com `## Sessão N` dentro do arquivo do dia;
  o kit devia ter dito.

Por fim, o **contrato do manifesto FlatDrop mudou** (aviso recebido e já verificável no mount): quando a
raiz é um repositório git, o manifesto passa a trazer último commit, branch e limpo/sujo, rotulados como
«foto da geração». A assinatura e a tabela não mudaram — é acréscimo a uma lista de metadados que sempre
foi extensível, então **não é mudança de formato** pelo critério do próprio kit. O que muda do nosso lado
é uma linha: quando o dado vier, use-o e não peça. **Acréscimo, não substituição** — mounts gerados por
versões anteriores continuam sem as linhas, e a regra atual continua correta para eles.

---

## Edição 1 — `src/niches/dev.js` · `IDEAS.md` ganha os dois endereços de feedback

**Âncora** (fim do template literal do `IDEAS.md` do nicho — a última linha da seção «🚫 Descartadas»,
imediatamente seguida pela crase de fechamento e por `},`):

```
- **[Ideia]** — descartada porque [motivo].
`},
```

**Substituir por:**

```
- **[Ideia]** — descartada porque [motivo].

---

## 📮 Feedback para o Kit
> Observações E desvios estruturais sobre a própria estrutura do projeto/kit — ver o gatilho no CEREBRO.md. É o que volta para evoluir o kit; sem registro, o aprendizado deste projeto se perde.
- **[AAAA-MM-DD]** [o que foi observado ou mudado, e por quê].

---

## 📮 Feedback para o ASU
> Melhorias e bugs da ferramenta **ASU** percebidos ao usá-la aqui. Mesmo critério da seção acima: só o que for acionável.
- **[AAAA-MM-DD]** [o que aconteceu + o que resolveria].
`},
```

> Confira que a crase de fechamento e o `},` continuam colados como estavam: é o fim de um template
> literal dentro do array de arquivos do nicho.

## Edição 2 — `src/niches/brainstorm.js` · mesmas duas seções

**Âncora** (fim do template literal do `IDEAS.md` do nicho — última linha da seção «Sementes soltas /
fragmentos»):

```
- [fragmento.]
`},
```

**Substituir por:**

```
- [fragmento.]

---

## 📮 Feedback para o Kit
> Observações E desvios estruturais sobre a própria estrutura do projeto/kit — ver o gatilho no CEREBRO.md. É o que volta para evoluir o kit; sem registro, o aprendizado deste projeto se perde.
- **[AAAA-MM-DD]** [o que foi observado ou mudado, e por quê].

---

## 📮 Feedback para o ASU
> Melhorias e bugs da ferramenta **ASU** percebidos ao usá-la aqui. Mesmo critério da seção acima: só o que for acionável.
- **[AAAA-MM-DD]** [o que aconteceu + o que resolveria].
`},
```

## Edição 3 — `src/index.template.html` · instalação do kit do Code

**Âncora** (trecho ao fim da linha de instalação — a linha é longa; case o final dela):

```
Formato atual (2026): os comandos são **Skills** em `.claude/skills/<nome>/SKILL.md` (o `.claude/commands/*.md` legado também funcionaria, mas Skills é o recomendado e tem precedência).");
```

**Substituir por:**

```
Formato atual (2026): os comandos são **Skills** em `.claude/skills/<nome>/SKILL.md`. O `.claude/commands/*.md` é **formato descontinuado**: projeto que ainda o tenha migra na próxima atualização — não é alternativa a escolher.");
```

## Edição 4 — `src/index.template.html` · README do zip do kit

**Âncora** (linha inteira, dentro do array do README):

```
    "Os comandos vêm como **Skills** (`.claude/skills/<nome>/SKILL.md`) — o formato atual (2026). Invoque com `/apply-wo` e `/wrap`. O `disable-model-invocation: true` faz cada um rodar só quando você chama, nunca sozinho. (O formato legado `.claude/commands/*.md` também funcionaria, mas Skills é o recomendado e tem precedência.)",
```

**Substituir por:**

```
    "Os comandos vêm como **Skills** (`.claude/skills/<nome>/SKILL.md`) — o formato atual (2026). Invoque com `/apply-wo` e `/wrap`. O `disable-model-invocation: true` faz cada um rodar só quando você chama, nunca sozinho. O `.claude/commands/*.md` é **formato descontinuado** — se este projeto ainda o tiver, migre; não é alternativa a escolher.",
```

## Edição 5 — `src/index.template.html` · duas sessões no mesmo dia

**Âncora** (linha da tabela de documentos, no CEREBRO gerado):

```
  L.push(`| \`logs/AAAA-MM-DD.md\` | Histórico | Ao final de cada sessão (formato em LOG-TEMPLATE). |`);
```

**Substituir por:**

```
  L.push(`| \`logs/AAAA-MM-DD.md\` | Histórico | Ao final de cada sessão (formato em LOG-TEMPLATE). **Duas sessões no mesmo dia = o MESMO arquivo**, com \`## Sessão N\` para cada uma — o nome é da data, não da sessão; arquivo novo por sessão quebra o nome. |`);
```

> As crases escapadas (`\``) fazem parte do template literal — copie exatamente, inclusive as da frase
> nova.
> **A linha «Log:» das Instruções NÃO muda.** A regra completa mora no CEREBRO, que não paga teto.

## Edição 6 — `src/index.template.html` · Estado usa o manifesto quando ele traz o repo

**Âncora** (trecho no meio da linha do item «Estado» do bloco de fecho):

```
«Não verifiquei» é desleixo; «não dá para ler daqui» é fato, e o remédio de cada um é diferente.
```

**Substituir por:**

```
«Não verifiquei» é desleixo; «não dá para ler daqui» é fato, e o remédio de cada um é diferente. **Se o manifesto da cópia achatada já trouxer o estado do repo** (último commit, branch, limpo/sujo), use-o e não peça — registrando que é foto da hora da geração, não do turno.
```

> Acréscimo, não substituição: a regra do «peça uma vez» continua na mesma linha, antes desta frase, e
> continua valendo para mounts gerados por versões anteriores do FlatDrop.

## Edição 7 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.95.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.96.0";
```

## Edição 8 — `validate.js` · check C31

**Âncora** (primeira linha do check C30):

```
check("C30 contrapeso do gatilho de analise + relatorio em arquivo (wo0074): teste barato antes do gatilho, clausula de abandono, kit do Code grava o relatorio", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C30):

```
check("C31 paridade dos templates de nicho (wo0075): IDEAS de todo nicho tem os dois enderecos de feedback, formato legado nao e alternativa, log por DIA acumula sessoes", () => {
  let overrides=0;
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const ideas=(T.effectiveFiles(n)||[]).find(f => f.name==="IDEAS.md");
    assert(ideas, id+": nicho sem IDEAS.md nos arquivos efetivos");
    const c=ideas.content||"";
    assert(/Feedback para o Kit/.test(c), id+": IDEAS.md sem a secao «Feedback para o Kit» que o CEREBRO manda usar");
    assert(/Feedback para o ASU/.test(c), id+": IDEAS.md sem a secao «Feedback para o ASU»");
    if(!/Segundo cérebro do projeto: captura toda ideia/.test(ideas.role||"")) overrides++;
    const cmd=T.buildClaudeMd(n);
    assert(/Duas sessões no mesmo dia = o MESMO arquivo/.test(cmd), id+": tabela de docs nao resolve duas sessoes no mesmo dia");
    assert(/manifesto da cópia achatada já trouxer o estado do repo/.test(cmd), id+": Estado nao usa o estado do repo quando o manifesto o traz");
  });
  assert(overrides>=2, "esperado ao menos 2 nichos com IDEAS.md proprio (dev, brainstorm) — se caiu, o check perdeu o alvo");
  const raw=fs.readFileSync(path,"utf8");
  assert(!/também funcionaria/.test(raw), "o kit ainda apresenta .claude/commands como alternativa valida em algum lugar");
  assert((raw.match(/formato descontinuado/g)||[]).length>=3, "o .claude/commands nao esta marcado como descontinuado nos tres pontos (instalacao, README do zip, protocolo de update)");
  return "ok ("+overrides+" nichos com IDEAS proprio)";
});
```

> A linha `overrides>=2` é deliberada: sem ela, se um dia alguém apagar os overrides do `dev`/`brainstorm`,
> o check passaria a validar só o template universal e ficaria verde vigiando coisa nenhuma.
> Após a Edição 3 e 4, `formato descontinuado` deve aparecer **4 vezes** no `index.html` — o check exige
> 3 para tolerar refraseado futuro sem afrouxar.

---

## Fora de escopo

- **Não** mexer no `📁 Arquivos Críticos` do `STATUS.md` do `dev` — decisão pendente do usuário (leva 2).
- **Não** mexer no exemplo do Princípio 11 — decisão pendente do usuário (leva 2).
- **Não** implementar a Parte 1 da mensagem do FlatDrop (as cinco regras de anatomia do bloco gerado e
  as duas obrigações do gerador). É a leva 2, e mexe em texto de princípio que vai para os 18 nichos:
  merece diff próprio.
- **Não** tocar no Princípio 8 para colar a citação «previsão vestida de observação». Ela já existe no
  CEREBRO (item «Estado» do bloco de fecho, protegida pelo C25); repeti-la no P8 custaria teto por ganho
  estético.
- **Não** alterar a linha «**Log:**» das Instruções.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `src/niches/*.js` e `validate.js` são **LF**. As Edições 1 e 2
  inserem várias linhas em arquivo LF; as 3 a 7 são de uma linha em arquivo CRLF.
- **Edições 1 e 2 mexem dentro de template literal JS.** Se a crase de fechamento ou o `},` se perderem,
  o `build.js` quebra imediatamente — o sintoma é erro de sintaxe, não harness vermelho.
- **A Edição 5 tem crases escapadas** (`\``). Copiá-las como crase simples quebra o template literal.
- **A Edição 6 é substituição de trecho no MEIO de uma linha muito longa.** Não substitua a linha
  inteira: case exatamente a frase-âncora.
- **Teto:** nenhuma edição toca as Instruções. Se o C28 mudar de número, algo saiu do lugar previsto —
  os valores devem continuar idênticos aos da v1.95.0.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `src/niches/dev.js`, `src/niches/brainstorm.js`,
      `validate.js`, `index.html` (gerado) e os `meta/` do bloco «Ao terminar». Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 75/75 checagens · 0 erros**.
      O C31 deve imprimir `ok (2 nichos com IDEAS proprio)`.
- [ ] O C28 deve imprimir **exatamente** os números da v1.95.0:
      `padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7539/7600`.
- [ ] Confira o fim do `IDEAS.md` gerado do `dev` e do `brainstorm`: as duas seções `📮` aparecem depois
      da última seção existente, separadas por `---`, sem crase solta no meio do texto.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-109** — «templates de nicho que redefinem um universal precisam de paridade
  verificada; `.claude/commands/` deixa de ser alternativa; log por dia acumula sessões; o estado do repo
  vem do manifesto quando ele o traz». Registre o padrão que a WO nomeia: **refinar o universal não
  alcança quem tem override**, e por isso a paridade virou check, não regra escrita.
- `meta/CHANGELOG.md`: **v1.96.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.96.0`, harness `18/18 · 75/75`.
- `meta/IDEAS.md`, «Feedback para o Kit»: registrar que os itens 3, 4, 5 e 6 da mensagem do FlatDrop
  (2026-08-02) foram **aceitos e implementados**; que o item 7 já estava feito e o 8 não pedia ação; que
  os itens 1 e 2 foram **reclassificados** (a citação do P8 não sumiu — mora no CEREBRO; o exemplo do
  P11 é decisão pendente); e que a **Parte 1** (anatomia do bloco gerado) é a leva 2, ainda por escrever.

## Relatório de aplicação

O que foi feito · o que fugiu do texto literal desta WO · arquivos tocados · resultado do build/validate ·
o commit. E grave-o em `../AAMMDD-HHMM-code-kcm.txt`, como a wo0074 instalou — **se esta for a primeira
sessão nova do Code desde então, diga explicitamente se a gravação exigiu alguma permissão**: é o teste
válido do `additionalDirectories`, que na sessão anterior ficou inconclusivo.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html src/niches/dev.js src/niches/brainstorm.js validate.js index.html meta/
```

```
git commit -m "fix(kit): paridade dos templates de nicho, formato legado e estado do repo pelo manifesto (wo0075, D-109)" -m "IDEAS do dev e do brainstorm ganham os dois enderecos de feedback que o CEREBRO prescreve. .claude/commands deixa de ser apresentado como alternativa. Log por dia passa a acumular sessoes. Estado usa o repo quando o manifesto o traz. Check C31 guarda a paridade. Bump 1.96.0."
```

```
git push
```
