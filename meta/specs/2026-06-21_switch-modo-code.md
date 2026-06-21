# Spec — Switch «Modo Code» (o kit gera o arranque do Claude Code) + método doc-por-spec embutido

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Esta spec TOCA o produto** (`index_template.html` → `index.html`): **precisa** de `node build.js` e `node validate.js`.
> Prompt de arranque: **"leia `meta/specs/<arquivo>.md` e execute"** (ou **"…execute só a Tarefa A"** para conservador).

## Contexto (por quê)
A próxima entrega do ROADMAP. Hoje os switches do kit (`groupMode` "Projeto em grupo?", `asuMode` "Saída via ASU?")
injetam seções no `CEREBRO.md` gerado, via `buildClaudeMd()`. O **Modo Code** segue **exatamente** esse molde:
um toggle `codeMode` que, quando ligado, faz o `CEREBRO.md` gerado ensinar o projeto a **trabalhar no Claude
Code** — em especial o método **doc-por-spec** (D-030). Assim, **todo projeto que receber o KCM atualizado e
ligar o Modo Code herda a capacidade** de aproveitar a edição cirúrgica do agente em vez de regenerar docs inteiros.

> **Escopo v1** (decisões de arranque, handoff 2026-06-21): `.claude/commands/` = **sim**; build no `CLAUDE.md`
> raiz = **placeholder** (o projeto-alvo preenche); switches **independentes** (codeMode não exclui group/asu).
> Aba de saída dedicada para o starter = **polish futuro**; no v1 o starter sai como **apêndice do `CEREBRO.md`**.
>
> **Conservador:** rode **só a Tarefa A** (o switch + a seção de comportamento no CEREBRO — já entrega a capacidade
> doc-por-spec). A **Tarefa B** (apêndice com os arquivos `.claude/`) é conveniência; pode vir depois.

---

## Tarefa A — o switch + a injeção de comportamento no CEREBRO gerado (NÚCLEO)

### A.1 — adicionar o toggle `codeMode` ao topbar
**Âncora:** a linha que começa com `    topbar:         [...normTopbar(n.topbar), { id:"groupMode"` (perto da 1230).
Ela termina hoje com `…{ id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }],`.
**Substitua o `],` final** dessa linha de modo a acrescentar o `codeMode` logo após o `asuMode`, ficando:

```js
    topbar:         [...normTopbar(n.topbar), { id:"groupMode", label:"Projeto em grupo? (gera HUB.md)", type:"toggle", default:"no" }, { id:"asuMode", label:"Saída via ASU (patch)?", type:"toggle", default:"no" }, { id:"codeMode", label:"Desenvolver no Claude Code?", type:"toggle", default:"no" }],
```

### A.2 — adicionar o helper `codeModeOn()`
**Âncora:** a linha `function asuModeOn(){ return !!(STATE.topbar && STATE.topbar.asuMode === "yes"); }` (perto da 1878).
**Insira DEPOIS dela:**

```js
function codeModeOn(){ return !!(STATE.topbar && STATE.topbar.codeMode === "yes"); }
```

### A.3 — injetar a seção «Desenvolvimento no Claude Code» no `buildClaudeMd()`
**Âncora:** dentro de `buildClaudeMd()`, logo após o **fim do bloco** `if(groupModeOn()){ … }` (a linha que termina
com `…não duplique.");` seguida de `  }`, perto da 2199) e **ANTES** do rodapé
`L.push(\`*Gerado pelo Kit de Contexto Universal — nicho ${niche.label}…\`);` (perto da 2201).
**Insira este bloco:**

```js
  if(codeModeOn()){
    L.push("");
    L.push("## Desenvolvimento no Claude Code (raias chat ↔ Code)");
    L.push("");
    L.push("Este projeto é desenvolvido com o **Claude Code** (CLI/desktop), além do chat de planejamento. Há duas raias:");
    L.push("");
    L.push("- **Chat (planejamento):** cura e ENTREGA arquivos de doc. Para reescrita de fundo/voz ou arquivo **novo/pequeno**, entrega o **arquivo inteiro**. Para um **delta estruturado** num doc **grande** (marcar fase, abrir fase, inserir nota, acrescentar item), entrega uma **spec curta** em `meta/specs/` com o **texto exato** e **âncora semântica** (seção/título, nunca nº de linha) — e o Code posiciona.");
    L.push("- **Claude Code (execução):** implementa código e faz edições **append-only** nos meta/ (linha no STATUS, `DEC-`/`FIX-` em DECISOES, marcar estado de fase). Aplica as specs de doc. Roda build/validação. Commita.");
    L.push("");
    L.push("**Método \"doc por spec\":** o chat AUTORA o texto; o Code só POSICIONA — não inventa prosa de curadoria. **Um canal por doc por ciclo** (se um doc foi por spec, o chat não entrega o mesmo doc inteiro no mesmo ciclo). Specs **só de doc não tocam o produto** → não precisam de build; a rede é o `git diff`.");
    L.push("");
    L.push("**Ao APLICAR uma spec (Code):** localize cada âncora EXATAMENTE; se não achar uma, **PARE e reporte** — nunca chute um lugar próximo. Não toque em nada fora das edições nomeadas. Rode `git diff` e confira a forma esperada antes de commitar.");
    L.push("");
    L.push("**Ambiente:** os comandos do Code rodam por um Git Bash interno (caminhos com `/` funcionam). Mensagens de commit **sem acento**. O arquivo-raiz `CLAUDE.md` (convenções + build) e a pasta `.claude/` (permissões + comandos `/`) ficam na raiz do repo — veja-os ao iniciar.");
  }
```

**Isso responde ao requisito central:** com o switch ligado, o método doc-por-spec passa a viver no `CEREBRO.md`
gerado de qualquer projeto.

---

## Tarefa B — apêndice com o starter do Claude Code (CONVENIÊNCIA — opcional)

**Âncora:** logo **DEPOIS** do bloco `if(codeModeOn()){ … }` que você acabou de inserir em A.3, e ainda **antes**
do rodapé. **Insira um SEGUNDO bloco** `if(codeModeOn()){ … }` com o apêndice abaixo. (Bloco separado de propósito:
permite rodar "só Tarefa A".)

> O conteúdo abaixo é o **texto que deve sair no CEREBRO gerado** (markdown). Transcreva em `L.push(...)`,
> garantindo **escaping JS válido** (use aspas simples na linha quando ela contiver aspas duplas, etc.).

```text
---

## Apêndice — arquivos de arranque do Claude Code (crie estes no repo)

Crie os arquivos abaixo nos caminhos indicados (depois de criar, pode apagar este apêndice). São um **starter** —
ajuste o comando de build e as permissões ao seu projeto.

### `CLAUDE.md` (na RAIZ do repo)
```markdown
# <NOME DO PROJETO> — guia para o Claude Code

> Arquivo-raiz lido pelo Claude Code em toda sessão. Mantenha CURTO (custa token em todo turno).
> O comportamento detalhado do assistente está em `meta/CEREBRO.md`.

## Ritual de início
Leia `meta/CEREBRO.md` → `meta/CONTEXT.md` → `meta/STATUS.md` antes de agir. Confirme em uma frase o que entendeu.

## Build / validação
- Build: `<seu comando de build, ex.: npm run build>`  (PLACEHOLDER — troque pelo do seu projeto)
- Testes/validação: `<seu comando de teste>` — rode antes de commitar mudança de código.
- Mudança só de doc (meta/) NÃO precisa de build; a rede é o `git diff`.
- Adicione seus comandos de build/teste ao `allow` de `.claude/settings.json`.

## Convenções
- Mensagens de commit **sem acento**.
- Edições nos meta/ são **append-only** pelo Code (STATUS, DECISOES); curadoria que reescreve vem do chat (arquivo inteiro OU spec).
- Ao aplicar uma spec de `meta/specs/`: ache cada âncora exatamente; se não achar, PARE e reporte. Não mexa fora das edições nomeadas. `git diff` antes do commit.
```

### `.claude/settings.json`
```json
{
  "permissions": {
    "allow": [
      "Read", "Edit", "Grep", "Glob",
      "Bash(git status:*)", "Bash(git diff:*)", "Bash(git add:*)", "Bash(git commit:*)", "Bash(git push:*)"
    ],
    "deny": ["Bash(rm -rf:*)"]
  }
}
```
(Adicione seu comando de build/teste — ex.: `"Bash(npm run build:*)"` — ao `allow`.)

### `.claude/commands/apply-spec.md`
```markdown
Leia o arquivo de spec indicado em `meta/specs/` e execute-o.
Localize cada âncora EXATAMENTE; se não achar uma, PARE e reporte — não chute um lugar próximo.
Não toque em nada fora das edições nomeadas. Ao fim, rode `git diff` e confira a forma esperada antes de commitar.
Spec: $ARGUMENTS
```

### `.claude/commands/wrap.md`
```markdown
Encerre a tarefa: atualize `meta/STATUS.md` (append, não reescreva), acrescente `DEC-`/`FIX-` em `meta/DECISOES.md` se houve decisão/bug,
e me mostre o `git diff` e o comando de commit (uma linha por comando, mensagem SEM acento).
```
```

---

## Validar (obrigatório — toca o produto)
1. `node build.js` → deve terminar **OK** (sem `FALHA`). Com `codeMode` **desligado** (default), a saída do `index.html` **não muda** — o código novo só dispara com o switch ligado.
2. `node validate.js` → deve **passar** (a rede que garante que os 17 nichos ainda geram).
3. **Teste manual:** abra o `index.html`, selecione um nicho, **ligue "Desenvolver no Claude Code?"** e confira no preview do **CEREBRO.md** a seção «Desenvolvimento no Claude Code» (e, se fez a Tarefa B, o apêndice). Desligue → as seções somem.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISOES.md`** — acrescente **D-031** (confirme que é o próximo número livre):
```
## D-031 — Switch «Modo Code»: o kit gera o arranque do Claude Code

**Decisão.** Novo toggle `codeMode` ("Desenvolver no Claude Code?") no topbar, no mesmo padrão de `groupMode`/`asuMode`. Ligado, o `CEREBRO.md` gerado ganha a seção «Desenvolvimento no Claude Code» (raias chat↔Code + método doc-por-spec + segurança de aplicação + ambiente) e, opcionalmente (Tarefa B), um apêndice com o starter (`CLAUDE.md` raiz, `.claude/settings.json`, `.claude/commands/`).

**Por quê.** Para que qualquer projeto gerado pelo KCM herde a capacidade de trabalhar bem no Claude Code — em especial o **doc-por-spec** (D-030), aproveitando a edição cirúrgica do agente em vez de regenerar docs inteiros. Dogfooding: é o fluxo que o próprio KCM usa, virando feature.

**Escopo v1.** build no `CLAUDE.md` raiz = **placeholder**; `.claude/commands/` = **sim** (apply-spec, wrap); switches **independentes**. Aba/saída dedicada = polish futuro; no v1 o starter sai como apêndice do `CEREBRO.md`.
```
- **`meta/CHANGELOG.md`** — insira como **entrada mais recente, no topo** da lista de versões (acima da atual mais recente — provavelmente v1.34.0), **seguindo o formato do arquivo**:
```
## v1.35.0 — Switch «Modo Code»
- **Novo switch «Modo Code»** (D-031): ligado, o `CEREBRO.md` gerado ganha a seção «Desenvolvimento no Claude Code» — raias chat↔Code e o método **doc-por-spec** (D-030), para projetos gerados aproveitarem o Claude Code (edição cirúrgica de docs em vez de regenerar inteiros).
- (Tarefa B) Apêndice opcional no `CEREBRO.md` com o **starter**: `CLAUDE.md` raiz (build placeholder + convenções), `.claude/settings.json`, `.claude/commands/` (`apply-spec`, `wrap`).
- Switches independentes; `.claude/commands/` no v1; build como placeholder.
```
- **`meta/STATUS.md`** — atualize a versão para **v1.35.0** e acrescente na «Última sessão»:
```
- **v1.35.0 — switch «Modo Code» implementado** (D-031): toggle `codeMode` injeta no CEREBRO.md gerado as raias chat↔Code + o método doc-por-spec; (Tarefa B) apêndice com starter `.claude/`. Projetos gerados herdam a capacidade de trabalhar no Claude Code.
```

## Commit (Code roda; Git Bash aceita `/`; mensagem **sem acento**)
```
git add index_template.html index.html meta/DECISOES.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: switch Modo Code (kit gera arranque do Claude Code) + doc-por-spec embutido no CEREBRO gerado" -m "Toggle codeMode injeta raias chat-Code e metodo doc-por-spec no CEREBRO.md gerado; Tarefa B apendice com starter .claude; D-031; v1.35.0"
git push
```

## Próximas specs (NÃO agora)
- **ASU quick wins** (b) lembrete na UI ao ligar o switch ASU; (c) ancorar diretriz/HUB no `format_version`.
- **Polish do Modo Code:** aba de saída dedicada para o starter (em vez de apêndice) + cosmético "Universal→Modular" no rodapé.
