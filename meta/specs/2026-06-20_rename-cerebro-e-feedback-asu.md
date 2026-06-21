# Spec — Renomear o cérebro gerado (`CLAUDE.md` → `CEREBRO.md`) e adicionar "Feedback para o ASU"

> Tarefa para o **Claude Code** (CLI ou desktop). Rode no repo `contexto-modular`.
> Princípio: o produto continua **1 arquivo único** (`index.html`), **gerado** de `src/`.
> **Não editar o `index.html` à mão** — editar `src/` e rodar `node build.js`.
> Prompt de arranque no Code: **"leia `meta/specs/2026-06-20_rename-cerebro-e-feedback-asu.md` e execute"**.

## Contexto (por quê)
O **cérebro** (o doc "como o assistente trabalha", hoje gerado com o nome `CLAUDE.md`) passa a se
chamar **`CEREBRO.md`** — para liberar o nome `CLAUDE.md` para o arquivo-**raiz** que o Claude Code lê.
A versão deste projeto já está renomeada (`meta/CEREBRO.md`); falta o **gerador**.

## Tarefa A — renomear a saída do cérebro
1. Em `src/index.template.html`, ache onde o **nome do arquivo gerado** do cérebro é definido
   (o que hoje sai como `CLAUDE.md` no download / na lista de arquivos do nicho — procure a string
   `"CLAUDE.md"` no objeto de arquivos / `effectiveFiles`). Troque o **nome do arquivo** para
   `CEREBRO.md`. **Mantenha** a função interna `buildClaudeMd` como está — muda só o nome de saída.
2. Ajuste **textos visíveis** que chamam o arquivo do cérebro de "CLAUDE.md" (rótulos na UI,
   instruções dentro dos templates gerados, o protocolo de handoff) para "CEREBRO.md" —
   **sem tocar** nas referências ao `CLAUDE.md` da **raiz** do Code (esse continua `CLAUDE.md`).
3. Em `validate.js`, atualize as checagens que dependem do nome `CLAUDE.md` do cérebro
   (procure `CLAUDE` no arquivo) para `CEREBRO.md`.

## Tarefa B — "Feedback para o ASU" no IDEIAS gerado
No template de `IDEIAS.md` que o kit gera, ache a seção **"Feedback para o Kit"** e adicione
**logo abaixo dela** uma seção **"Feedback para o ASU"**, mesma estrutura. Texto sugerido:

```
## Feedback para o ASU
Anote aqui melhorias e bugs da ferramenta **ASU** percebidos ao usá-la neste projeto
(para a equipe do ASU). Mesmo critério da seção acima: só o que for acionável.
```
Aplicar com o mesmo gatilho/condição da seção "Feedback para o Kit" (onde uma existe, a outra entra abaixo).

## Validar (obrigatório antes de commitar)
- `node build.js`  → remonta o `index.html` na raiz
- `node validate.js index.html`  → tem que passar **17/17 nichos + todas as checagens, 0 erros**
  (ajuste as checagens que quebrarem pelo rename, conforme A.3)
- Abrir o `index.html` e conferir em 1 nicho: o arquivo gerado do cérebro sai como **`CEREBRO.md`**;
  o IDEIAS gerado tem **"Feedback para o Kit"** e, abaixo, **"Feedback para o ASU"**.

## Ao terminar (raia do Code — append-only nos meta/)
- **`meta/STATUS.md`**: atualize o estado → v1.34.0; cérebro renomeado; próximos = ASU quick wins + modo Code.
- **`meta/DECISOES.md`**: acrescente (na sequência de numeração existente) **duas** decisões:
  - **D-028 — Refator modular.** O `index.html` agora é **gerado** de `src/index.template.html` (casco) +
    17 módulos `src/niches/*.js` via `build.js`. Saída **byte-idêntica** à v1.33.0 com tudo desligado;
    o build é ferramenta **do dev** — o produto continua 1 arquivo único, sem build no lado do usuário (preserva D-001).
  - **D-029 — Cérebro renomeado.** `CLAUDE.md` (cérebro) → `CEREBRO.md`, em **todos** os projetos gerados,
    sempre (não condicional), para liberar `CLAUDE.md` ao arquivo-raiz do Claude Code.
- **Commit** (uma linha, **sem acento**):
  `git commit -m "feat: cerebro renomeado para CEREBRO.md + secao Feedback para o ASU no IDEIAS gerado" -m "Libera CLAUDE.md para o arquivo-raiz do Claude Code; harness atualizado; saida 17/17"`

## Próximas specs (NÃO fazer agora — eu escrevo depois)
- **ASU quick wins:** (b) lembrete na UI quando o switch ASU é ligado (subir o `INSTRUCTION_GUIDE.md`);
  (c) ancorar a diretriz e o HUB no `format_version` em vez da versão da ferramenta.
- **"Modo Code":** switch que gera o kit de arranque — `CLAUDE.md` raiz starter, `.claude/settings.json` +
  comandos `/`, protocolo de raias, macetes Windows/PowerShell — funcionando em **desktop e CLI**.
