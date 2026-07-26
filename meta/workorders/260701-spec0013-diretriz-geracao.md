# Spec — Diretriz de geração: .gitignore, README e commit (dev/Modo Code)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/`** → **build + harness obrigatórios**: `node build.js` depois `node validate.js` (17/17, 0 erros) antes do commit.
> Prompt no Code: **"leia `meta/specs/260701-spec0013-diretriz-geracao.md` e execute"**.
> Config: **Opus + esforço Alto** (mexe na lógica de geração `buildInstr`/`buildClaudeMd`; não é doc-only).

## Contexto (notas de 2026-06-28)
Projetos gerados — sobretudo **dev/Modo Code** — quase nunca recebem **`.gitignore` personalizado** nem **README**, e às vezes o **commit** não sai (ou sai colado no resto do copia-e-cola). O commit já foi para a instrução curta (linha ~7367 do gerado). Faltam gitignore e README. O usuário **aceita esperar** pela geração (não quer o assistente perguntando "quer que eu gere agora?"); quer **previsão e cuidado**: o assistente gera na hora certa, sem pedir permissão a cada vez. Esta spec adiciona duas linhas universais à instrução curta e uma nota ao CEREBRO gerado — condicionais ao nicho ter perfil de código/repo.

**Onde editar:** o casco `src/index.template.html` (funções `buildInstr` e `buildClaudeMd`). NÃO editar `index.html` direto (o build sobrescreve). Localize as âncoras pelo texto; se não achar exatamente, **PARE e reporte** (não invente posição).

## Tarefa A — `.gitignore` e README na instrução curta (buildInstr)

**Âncora:** a linha que hoje injeta o Commit — contém `**Commit:** ao concluir mudança versionada, ENTREGUE o \`git commit\` pronto`. **Logo após o bloco `if(... ) lines.push("**Commit:** ...")`**, inserir (dentro da mesma condição de perfil dev/Code — reutilize a mesma checagem `asuModeOn() || codeModeOn() || coreFiles.some(n=>/CHANGELOG/i.test(n))`, ou a que estiver lá):
```
   lines.push("**`.gitignore`:** em projeto com repo, entregue um `.gitignore` adequado ao stack na PRIMEIRA leva que crie estrutura (ex.: node_modules, dist, .env, outputs, backups). Não espere o usuario pedir; entregue junto com os primeiros arquivos.");
   lines.push("**README:** entregue/atualize o `README.md` quando a estrutura estabilizar (nao no rascunho inicial, para nao nascer desatualizado). Se ainda for cedo, DIGA que esta adiando e por que — nunca simplesmente omita.");
```
**Diff esperado:** +2 linhas dentro do bloco condicional existente.

## Tarefa B — reforçar "commit separado" (se o texto atual não deixar explícito)

Confira a linha do Commit. Se ela **já** diz "bloco SEPARADO para copiar isolado", **nada a fazer** (pule B). Se não disser, ajuste para incluir "em bloco SEPARADO para copiar isolado". (No gerado atual a frase existe; confirme no template `src/`.)

## Tarefa C — nota no CEREBRO gerado (buildClaudeMd)

**Âncora:** a seção do CEREBRO gerado que trata de commit/manutenção (procure o cabeçalho de commit ou de "manter os documentos"). Inserir um bullet:
```
- **Artefatos de repo (.gitignore, README):** em projeto com repositório, o `.gitignore` sai na primeira leva que cria estrutura (adequado ao stack) e o `README.md` é entregue/atualizado quando a estrutura estabiliza (não no rascunho, para não nascer velho). O assistente gera por previsão, sem pedir permissão a cada vez; se adiar o README, diz por quê.
```
**Diff esperado:** +1 linha na seção apropriada.

## Validar (toca src/ — build + harness OBRIGATÓRIOS)
```
node build.js
node validate.js index.html
```
Espere **17/17, 0 erros**. Confira que os 17 nichos ainda cabem no teto de 6500 da instrução curta (as 2 linhas novas só entram no perfil dev/Code — confirme que nenhum nicho desse perfil estourou; se estourar, reporte antes de commitar, como aconteceu com o `game` na spec0008).

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-044: «Diretriz de geração: .gitignore na 1a leva com estrutura, README quando estabiliza (com aviso se adiar), commit separado sem acento; por previsao, sem pedir permissao. Perfil dev/Code.»
- **`meta/CHANGELOG.md`** — nova versão no topo (v1.43.0).
- **`meta/STATUS.md`** — append na «Última sessão».

## Commit (sem acento)
```
git add src/index.template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: diretriz de geracao de gitignore e README no perfil dev/code (D-044)" -m "instrucao curta ganha gitignore na 1a leva e README quando estabiliza; nota no CEREBRO gerado; commit separado reforcado; harness 17/17"
git push
```
