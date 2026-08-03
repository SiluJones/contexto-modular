# WO 0076 — Anatomia do bloco gerado, metade estrutural do P11, Arquivos Críticos no lugar certo

> **Tipo:** mista (template + módulo de nicho + arquivo do repo + harness).
> **Config sugerida:** Sonnet 5, esforço **Médio**. Oito edições ancoradas + um check; nenhuma decisão delegada.
> **Pré-requisito:** `v1.96.0`, commit `b719864`, harness **18/18 · 75/75 · 0 erros**.
> **ATENÇÃO — push pendente:** o relatório da wo0075 registra que o `git push` de `b719864` **não foi
> executado** (aguardava confirmação do usuário). Confirme com `git status` se `main` ainda está à frente
> de `origin/main` e, se estiver, **empurre antes de começar** — ou avise no relatório que seguiu com dois
> commits locais.
> **Base:** `260802-MENSAGEM-FlatDrop-para-KCM.md`, **Parte 1** (anatomia do artefato gerado) + decisões
> do usuário de 2026-08-02 sobre os pontos (a) e (b) da leva 3. Leva **2 de 2**.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada inserção; se já existir, **PULE** e
> diga no relatório.

> **Canal dos meta neste ciclo = CODE.**

---

## 1. Por que

**O kit tinha o princípio e não tinha a anatomia.** Desde a v1.89.0 o CEREBRO gerado diz que artefato
gerado que convive com edição humana precisa enxergar o que existe fora dele, ter precedência por posição
e nunca desfazer o que não é seu. Está certo — e **princípio não é verificável**. Uma frente irmã provou
isso da pior forma: escreveu um cabeçalho novo para o `.flatdropignore` **citando os marcadores do bloco
dentro de um comentário**, para documentar a convenção; o gerador procura os marcadores por substring,
cortou na citação, injetou o bloco no meio da frase e deixou dois blocos no arquivo.

**E o mesmo defeito está vivo aqui.** O `.flatdropignore` que este kit gera — e o `.flatdropignore` deste
próprio repositório — reproduzem os dois marcadores dentro de comentários explicativos. A mina não
detonou ainda porque a geração do mount apenas *lê* as regras; quem reescreve o bloco é o editor visual.
Um uso do editor sobre este repo basta.

O que faltava não era mais princípio: era a **anatomia declarada**, cinco regras que juntas compram a
liberdade de usar editor visual e edição manual no mesmo arquivo, mais duas obrigações do lado da
ferramenta (recusar em vez de adivinhar; normalizar só o próprio bloco).

**Dois ajustes menores viajam junto, ambos decididos pelo usuário:**

- **P11 só documentava metade do perigo do rename.** Ele ensina a concordância de gênero/número na prosa
  e cala sobre o efeito estrutural — o termo também vive em caminho de pasta, nome de comando e
  identificador. O kit conhece essa metade por experiência própria e nunca a escreveu.
- **`📁 Arquivos Críticos` está no documento errado, e o ponteiro já estava quebrado.** A seção nasce no
  `STATUS.md` do nicho `dev` — documento volátil, reescrito a cada sessão — enquanto o conteúdo é
  conhecimento **estável**. Pior: **três prompts do próprio nicho** (`Debug`, `Plano`, `Auditoria`)
  mandam consultar «Arquivos Críticos em **CONTEXT**», onde a seção não existe. Não é remoção, é
  **mudança de endereço** para onde o kit já aponta.

> **Nota sobre o P11 (leia antes da Edição 3).** A frente irmã sugeriu usar como exemplo o rename
> «spec → WO», que arrasta o comando `/apply-spec` e a pasta `meta/specs/`. **Esse exemplo é impossível
> neste repositório:** o C15 bane as duas strings do `index.html` inteiro, justamente porque nasceu
> daquele rename. O check que guarda a mudança impede o kit de ensiná-la com o caso que a originou — que
> é, literalmente, a tese da frente irmã acontecendo por construção. A Edição 3 usa outro caso real:
> `meta/CLAUDE.md` → `meta/CEREBRO.md`, que arrasta prompts, ritual e manifesto **e precisa parar antes**
> do `CLAUDE.md` da raiz. Não tente "melhorar" trocando pelo exemplo do spec — o harness fecha.

---

## Edição 1 — `src/index.template.html` · a anatomia entra no princípio de higiene

**Âncora** (fim da regra «Artefato gerado…» em `HYGIENE_RULES`):

```
Se o gerado não enxerga o manual, ele desfaz gestos sem avisar — e o sintoma aparece longe da causa.",
```

**Substituir por** (uma única linha; o texto novo é acréscimo ao fim da mesma string):

```
Se o gerado não enxerga o manual, ele desfaz gestos sem avisar — e o sintoma aparece longe da causa. **Anatomia do bloco gerado — cinco regras, e são as cinco juntas que compram a liberdade de editar o mesmo arquivo à mão:** (1) comentário fica FORA do bloco — dentro, o gerador reescreve tudo e ele some; (2) regra fica DENTRO — é o território da ferramenta; (3) existe UM bloco, e só um — dois são ambiguidade; (4) o bloco é o ÚLTIMO conteúdo do arquivo, nada depois dele; (5) **os marcadores não se citam em comentário** — o gerador costuma procurá-los por substring, e um exemplo é indistinguível de um segundo bloco. A quinta decorre da terceira, mas precisa ser dita em voz alta: é o erro que se comete justamente ao DOCUMENTAR a convenção, então descreva os marcadores em vez de reproduzi-los. **Duas obrigações do lado da ferramenta:** diante de ambiguidade, **recusar, não adivinhar** — reescrever é a única operação irreversível, e chutar ali destrói conteúdo; e **normalizar só o que é seu** — mover o próprio bloco para o fim é legítimo, mover o texto da pessoa não, e se a normalização mudar o efeito de alguma regra dela, avise antes.",
```

> Custo de teto: **zero**. `HYGIENE_RULES` alimenta só o CEREBRO gerado (o comentário acima da constante
> diz «entram nas instruções e no CLAUDE.md», mas isso está desatualizado — há um único uso, dentro de
> `buildClaudeMd`). Confirme pelo C28: os números não podem mudar.

## Edição 2 — `src/index.template.html` · o `.flatdropignore` gerado para de citar os marcadores

**Âncora** (duas linhas consecutivas dentro de `structuredFlatdropignore`):

```
    "# - REGRA (o que some do mount) vai DENTRO do bloco \"# >>> flatdrop-editor\".",
    "# - NADA depois do \"# <<<\": vale a ULTIMA regra que casa, entao o que vier depois vence o bloco.",
```

**Substituir por:**

```
    "# - REGRA (o que some do mount) vai DENTRO do bloco do editor, delimitado no fim do arquivo.",
    "# - NADA depois da linha que FECHA o bloco: vale a ULTIMA regra que casa, entao o que vier",
    "#   depois vence o bloco.",
    "# - NAO reproduza as linhas marcadoras aqui em cima: o editor as procura por substring, e um",
    "#   exemplo em comentario e indistinguivel de um segundo bloco. Descreva, nao cite.",
```

> Repare que o texto novo **descreve** os marcadores sem escrevê-los. É a regra 5 aplicada a si mesma —
> e é o que o C32 conta.

## Edição 3 — `src/index.template.html` · P11 ganha a metade estrutural

**Âncora** (fim da entrada `consistency` em `BEHAVIORS_BASE`):

```
trocar «o Assentamento» por «a Consolidação» sem ajustar artigos e adjetivos quebra o texto."],
```

**Substituir por:**

```
trocar «o Assentamento» por «a Consolidação» sem ajustar artigos e adjetivos quebra o texto. E o termo raramente vive só na prosa: renomear arrasta também **caminho de pasta, nome de comando e identificador** — quando este kit trocou `meta/CLAUDE.md` por `meta/CEREBRO.md`, a troca teve de alcançar prompts, ritual e manifesto, e teve de PARAR antes do `CLAUDE.md` da raiz, que é outro arquivo de mesmo nome. Antes de trocar, pergunte onde mais aquele nome aparece — e onde ele precisa ficar como está."],
```

> O campo `short` do princípio **não muda** — só o texto longo, que vai ao CEREBRO. Teto continua zero.

## Edição 4 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.96.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.97.0";
```

## Edição 5 — `src/niches/dev.js` · tirar `Arquivos Críticos` do `STATUS.md`

**Âncora** (dentro do template literal do `STATUS.md` do nicho):

```
## 📁 Arquivos Críticos (não mexer sem contexto)
- \`[caminho/arquivo]\` — [por que é sensível; o que ler antes de tocar.]

## 💬 Última Sessão
```

**Substituir por:**

```
## 💬 Última Sessão
```

> As crases escapadas (`\``) fazem parte do template literal — a linha removida tem duas.

## Edição 6 — `src/niches/dev.js` · pôr `Arquivos Críticos` no `CONTEXT.md`

**Âncora** (dentro do template literal do `CONTEXT.md` do nicho, logo depois da seção «Armadilhas
Conhecidas»):

```
## Contexto de Produto
```

**Substituir por:**

```
## 📁 Arquivos Críticos (não mexer sem contexto)
> Conhecimento **estável**, não estado do agora — por isso vive aqui, e não no STATUS, que é reescrito a cada sessão. Os prompts de debug, plano e auditoria procuram esta seção NESTE arquivo.
- \`[caminho/arquivo]\` — [por que é sensível; o que ler antes de tocar.]

## Contexto de Produto
```

> `## Contexto de Produto` aparece **uma única vez** no arquivo. Se o editor achar mais de uma, PARE.

## Edição 7 — `.flatdropignore` (raiz do repo, dogfood) · parar de citar os marcadores

**Âncora** (duas linhas do cabeçalho, fora do bloco):

```
# - REGRA (o que some do mount) vai DENTRO do bloco "# >>> flatdrop-editor".
# - NADA depois do "# <<<": vale a ULTIMA regra que casa, entao o que vier depois vence o bloco.
```

**Substituir por:**

```
# - REGRA (o que some do mount) vai DENTRO do bloco do editor, delimitado no fim deste arquivo.
# - NADA depois da linha que FECHA o bloco: vale a ULTIMA regra que casa, entao o que vier depois
#   vence o bloco.
# - NAO reproduza as linhas marcadoras aqui em cima: o editor do FlatDrop as procura por substring, e
#   um exemplo em comentario e indistinguivel de um segundo bloco. Descreva, nao cite.
```

> **Este é o defeito vivo.** Antes de editar, confirme que o arquivo tem hoje **duas** ocorrências de
> `>>> flatdrop-editor` (uma no comentário, uma no bloco) e **duas** do marcador de fechamento; depois de
> editar, **uma de cada**. Se já houver só uma de cada, alguém corrigiu antes — PULE e relate.
> **Não toque no bloco em si**, nem na linha sobre o limite de caminho inexistente.

## Edição 8 — `validate.js` · check C32

**Âncora** (primeira linha do check C31):

```
check("C31 paridade dos templates de nicho (wo0075): IDEAS de todo nicho tem os dois enderecos de feedback, formato legado nao e alternativa, log por DIA acumula sessoes", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C31):

```
check("C32 anatomia do bloco gerado (wo0076): cinco regras + duas obrigacoes no CEREBRO, marcadores nao citados em comentario, Arquivos Criticos no CONTEXT, P11 com a metade estrutural", () => {
  [true,false].forEach(codeOn => {
    const ig=T.structuredFlatdropignore(codeOn);
    const abre=(ig.match(/>>> flatdrop-editor/g)||[]).length;
    const fecha=(ig.match(/# <<</g)||[]).length;
    assert(abre===1, "flatdropignore gerado (codeOn="+codeOn+") tem "+abre+" ocorrencias do marcador de abertura — deve ter exatamente 1 (citar em comentario cria bloco fantasma)");
    assert(fecha===1, "flatdropignore gerado (codeOn="+codeOn+") tem "+fecha+" ocorrencias do marcador de fechamento — deve ter exatamente 1");
  });
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    assert(/Anatomia do bloco gerado/.test(cmd), id+": CEREBRO sem a anatomia do bloco gerado");
    assert(/os marcadores não se citam em comentário/.test(cmd), id+": CEREBRO sem a quinta regra (a que se viola ao documentar a convencao)");
    assert(/recusar, não adivinhar/.test(cmd), id+": CEREBRO sem a obrigacao de recusar diante de ambiguidade");
    assert(/normalizar só o que é seu/.test(cmd), id+": CEREBRO sem a obrigacao de normalizar so o proprio bloco");
    assert(/precisa ficar como está/.test(cmd), id+": P11 sem a metade estrutural do rename (caminho, comando, identificador)");
  });
  const dev=T.normNiche(T.NICHES.dev);
  const arq=T.effectiveFiles(dev)||[];
  const ctx=arq.find(f => f.name==="CONTEXT.md"), st=arq.find(f => f.name==="STATUS.md");
  assert(ctx && /Arquivos Críticos/.test(ctx.content||""), "dev: Arquivos Criticos nao esta no CONTEXT.md, onde os prompts o procuram");
  assert(st && !/Arquivos Críticos/.test(st.content||""), "dev: Arquivos Criticos ainda no STATUS.md (dado estavel em documento volatil)");
  return "ok";
});
```

> A contagem de marcadores é a forma **testável** das regras 3 e 5: enquanto ela exigir exatamente um de
> cada, ninguém consegue reintroduzir a citação em comentário sem o harness fechar.

---

## Fora de escopo

- **Não** aplicar a anatomia a outros arquivos com bloco gerado (`.gitignore` estruturado, READMEs). O
  princípio agora cobre todos; auditar cada emissor é trabalho de outra leva, e não há caso reportado.
- **Não** mexer no C15 para liberar o exemplo «spec → WO» no P11. O check está certo; o exemplo é que
  precisa ser outro.
- **Não** mexer no Princípio 8 nem na citação «previsão vestida de observação».
- **Não** mover `Arquivos Críticos` em nenhum outro nicho — só o `dev` tem a seção.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `src/niches/dev.js`, `validate.js` e `.flatdropignore` são **LF**.
- **Edição 2 substitui duas linhas por cinco** dentro de um array de strings JS. Vírgulas e aspas
  escapadas (`\"`) precisam sair exatamente como no texto novo — que, de propósito, **não tem** aspas
  escapadas, porque não cita mais os marcadores.
- **Edições 5 e 6 mexem dentro de template literal JS.** Perder uma crase escapada quebra o `build.js`
  com erro de sintaxe, não com harness vermelho.
- **Edição 7 é no arquivo real do repo, não em template.** É a única que muda comportamento imediato de
  ferramenta externa; confira a contagem antes e depois, como descrito.
- **Teto:** nenhuma edição toca as Instruções. O C28 deve imprimir os **mesmos** números da v1.96.0.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `src/niches/dev.js`, `validate.js`,
      `.flatdropignore`, `index.html` (gerado) e os `meta/` do bloco «Ao terminar». Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 76/76 checagens · 0 erros**.
- [ ] C28 idêntico à v1.96.0:
      `padrao 6638/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7539/7600`.
- [ ] `grep -c "flatdrop-editor" .flatdropignore` → **1**. Idem para o marcador de fechamento.
- [ ] Abra o `.flatdropignore` e confirme que o **bloco continua íntegro e no fim do arquivo**, com o
      conteúdo de regras inalterado.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-110** — «a anatomia do bloco gerado vira parte do princípio de higiene, com
  contagem de marcadores como forma testável; o P11 passa a cobrir o efeito estrutural do rename;
  `Arquivos Críticos` muda de STATUS para CONTEXT no nicho dev». Registre os dois achados que a WO
  produziu: (i) **o defeito estava vivo no `.flatdropignore` deste repo**, no comentário que ensina a
  convenção; (ii) **o C15 torna impossível usar no P11 o exemplo que originou a regra** — caso concreto
  da tese da frente irmã, agora com prova.
- `meta/CHANGELOG.md`: **v1.97.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.97.0`, harness `18/18 · 76/76`.
- `meta/IDEAS.md`, **ideia nova com gatilho de retorno**: «auditar quais outros refinamentos universais
  não alcançaram os nichos com template próprio (`dev`, `brainstorm`) — a wo0075 achou dois no `IDEAS.md`
  e esta WO achou um no `STATUS.md`/`CONTEXT.md`; ninguém varreu o resto (`DECISIONS`, `CONTEXT`,
  `LOG-TEMPLATE`, prompts). **Gatilho:** no terceiro caso encontrado, ou antes de qualquer leva que
  refine documento universal.»
- `meta/IDEAS.md`, «Feedback para o Kit»: registrar a **Parte 1 da mensagem do FlatDrop como aceita e
  implementada**, e anotar as duas devoluções pendentes para eles — (i) o manifesto diz «limpo» sem
  informar `ahead/behind`, e commit não empurrado lê como sincronizado; (ii) o exemplo que sugeriram para
  o P11 é inviável aqui por causa do C15.

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · build/validate · commit. E grave-o em
`../AAMMDD-HHMM-code-kcm.txt`. **Diga também o estado do push da wo0075** (`b719864`): se já subiu, ou se
o repo está agora com dois commits locais à frente de `origin/main`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html src/niches/dev.js validate.js .flatdropignore index.html meta/
```

```
git commit -m "feat(kit): anatomia do bloco gerado, metade estrutural do P11 e Arquivos Criticos no CONTEXT (wo0076, D-110)" -m "Cinco regras de anatomia mais duas obrigacoes do gerador entram no principio de higiene. O .flatdropignore gerado e o do proprio repo param de citar os marcadores em comentario, defeito que estava vivo. P11 passa a cobrir caminho, comando e identificador. Arquivos Criticos sai do STATUS e vai para o CONTEXT do nicho dev, onde tres prompts ja o procuravam. Check C32. Bump 1.97.0."
```

```
git push
```
