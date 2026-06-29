# Spec — ASU quick wins (b: lembrete na UI · c: ancorar no `format_version`)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca o produto** (`index_template.html` → `index.html`): **precisa** de `node build.js` e `node validate.js`.
> Prompt: **"leia `meta/specs/<arquivo>.md` e execute"**.

## Contexto
Dois ajustes pequenos no switch do ASU (`asuMode`), do backlog:
- **(b)** Quando o switch ASU é ligado, o usuário precisa **subir o `INSTRUCTION_GUIDE.md`** no conhecimento do Projeto (é o contrato do formato). Hoje isso só aparece dentro do `CEREBRO.md` gerado — fácil de esquecer. Falta um **lembrete na própria UI do kit**.
- **(c)** A diretriz do ASU no `CEREBRO.md` gerado fixa `format_version: "1.0"` **literal**. Melhor **ancorar no `format_version` que o `INSTRUCTION_GUIDE.md` declara** (o formato é o contrato estável; some quando a ferramenta evolui).

> **Nota honesta sobre (c) — parte "o HUB":** procurei e **não há** referência à versão da ferramenta nem a `format_version` no HUB gerado (`buildHub`). Então não há o que reancorar lá no estado atual. Se você tinha um ponto específico do HUB em mente, me aponte — por ora (c) aplica só à diretriz do ASU.

---

## Tarefa A — (b) lembrete na UI quando o ASU está ligado

### A.1 — adicionar o elemento (escondido por padrão)
**Âncora:** a linha do hint de saída — `<p class="hint" id="out-hint" …>…Não coloque código aqui.</p>` (perto da 685).
**Insira DEPOIS dela:**

```html
          <div class="callout" id="asu-reminder" style="display:none;margin-top:10px">⚠️ <b>ASU ligado:</b> suba o <code>INSTRUCTION_GUIDE.md</code> no conhecimento do Projeto — é o <b>contrato do formato</b> (a saída usa o <code>format_version</code> que ele declara).</div>
```

### A.2 — mostrar/esconder conforme o switch
**Âncora:** a função `function updatePreview(){` (perto da 2302). **No fim dela, antes do `}` de fechamento, acrescente:**

```js
  const _asuRem = $("#asu-reminder");
  if(_asuRem) _asuRem.style.display = asuModeOn() ? "block" : "none";
```

(O `updatePreview()` já roda quando um toggle muda, então o lembrete aparece/some na hora ao ligar/desligar o ASU.)

---

## Tarefa B — (c) ancorar a diretriz no `format_version` do guia

**Âncora:** dentro de `buildClaudeMd()`, no bloco `if(asuModeOn()){…}`, a linha que contém `format_version: \"1.0\"` (perto da 2183). **Substitua a linha inteira:**

DE:
```js
  L.push("1. Ao pedir uma \"instrução ASU\" (ou ao alterar arquivos existentes), responda com **UM bloco `yaml`** (`format_version: \"1.0\"`) e uma linha final com `python -m src apply instrucao.yaml --root <RAIZ> --dry-run`. Nunca XML; nunca arquivos soltos.");
```
PARA:
```js
  L.push("1. Ao pedir uma \"instrução ASU\" (ou ao alterar arquivos existentes), responda com **UM bloco `yaml`** cujo `format_version` é o declarado no `INSTRUCTION_GUIDE.md` do Projeto (não fixe um número aqui — o guia é o contrato) e uma linha final com `python -m src apply instrucao.yaml --root <RAIZ> --dry-run`. Nunca XML; nunca arquivos soltos.");
```

---

## Validar (obrigatório — toca o produto)
1. `node build.js` → **OK** (sem `FALHA`).
2. `node validate.js` → **passa** (17/17).
3. **Manual:** abra o `index.html`, ligue **"Saída via ASU (patch)?"** → o callout do `INSTRUCTION_GUIDE.md` aparece; desligue → some. Na aba **CEREBRO.md**, com o ASU ligado, a diretriz nº 1 agora cita o `format_version` do guia (não "1.0").

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — acrescente **D-032** (confirme que é o próximo número livre):
```
## D-032 — Diretriz do ASU ancorada no `format_version` do guia (não em literal)

**Decisão.** A diretriz do ASU no `CEREBRO.md` gerado deixa de fixar `format_version: "1.0"` e passa a citar o `format_version` **declarado no `INSTRUCTION_GUIDE.md`** do Projeto. Também: lembrete na UI do kit (callout) ao ligar o switch ASU, para subir o `INSTRUCTION_GUIDE.md`.

**Por quê.** O formato é o contrato **estável**; a ferramenta evolui. Ancorar no guia evita que a saída fique presa a uma versão velha quando o ASU mudar. O lembrete na UI reduz o erro de esquecer de subir o guia (sem ele, a instrução ASU não tem referência de formato).
```
- **`meta/CHANGELOG.md`** — entrada no topo (acima da v1.35.0), no formato do arquivo:
```
## v1.36.0 — ASU quick wins
- **Lembrete na UI** (b): ligar "Saída via ASU?" mostra um callout para subir o `INSTRUCTION_GUIDE.md` no Projeto.
- **Diretriz ancorada no `format_version`** (c, D-032): a diretriz do ASU cita o `format_version` do `INSTRUCTION_GUIDE.md` em vez do literal "1.0".
```
- **`meta/STATUS.md`** — versão → **v1.36.0**; marque o item **"ASU quick wins"** dos PRÓXIMOS como **concluído** (saiu do backlog) e acrescente na «Última sessão»:
```
- **v1.36.0 — ASU quick wins** (D-032): lembrete na UI ao ligar o ASU + diretriz ancorada no `format_version` do guia. (Parte "HUB" do item c: sem referência de versão no HUB hoje — nada a fazer.)
```

## Commit (Code roda; Git Bash aceita `/`; mensagem **sem acento**)
```
git add index_template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: ASU quick wins (lembrete na UI + diretriz ancorada no format_version)" -m "b: callout para subir INSTRUCTION_GUIDE.md ao ligar o switch ASU; c/D-032: diretriz cita o format_version do guia em vez do literal 1.0; v1.36.0"
git push
```
