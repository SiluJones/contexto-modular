# Spec — Fase 3: CEREBRO por nicho (não cita arquivo que o nicho não tem) + commit + ritual .txt

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> ⚠️ **CONFIG OBRIGATÓRIA: Opus + esforço Alto + pensamento LIGADO.** Esta spec **refatora a lógica de geração** (não é texto mecânico). Em Sonnet/esforço baixo ela quebra. Se não estiver nessa config, **pare e troque antes**.
> **Toca o produto** → `node build.js` + `node validate.js` (17/17).
> Prompt: **"leia `meta/specs/2026-06-29-spec0006_cerebro-por-nicho-fase3.md` e execute"**.

## Contexto
O CEREBRO gerado fixa gatilhos/higiene **universais** que citam `CHANGELOG`/`ROADMAP` — arquivos que **só o `dev`** tem. Para um `game` ou `narrative`, isso vira referência fantasma; e a nota da linha 2134 ainda manda **criar** o arquivo ausente, fazendo o nicho ganhar um `CHANGELOG` que não devia. A Decisão 3: o CEREBRO referencia só os arquivos **que o nicho tem** (via `niche.contextFiles`, já disponível como `cf`). Esta fase também limpa o resíduo `DECISOES` no template, leva o **commit** para a instrução curta e adiciona o **ritual do `.txt`**.

---

## Tarefa A — gatilhos niche-aware (`buildClaudeMd`)
**Âncora:** a linha `  const triggers = [...TRIGGERS_BASE, ...((niche.triggersExtra)||[])];` (≈2131). **Substitua-a por:**
```js
  const hasChangelog = (niche.contextFiles||[]).some(f=>/CHANGELOG/i.test(f.name));
  const baseTriggers = TRIGGERS_BASE.map(([ev,ac])=>{
    if(!hasChangelog){
      ac = ac.replace(" → última entrada do CHANGELOG.", ".").replace(" + CHANGELOG.md (se fechou algo)", "");
    }
    return [ev, ac];
  });
  const triggers = [...baseTriggers, ...((niche.triggersExtra)||[])];
```
(Os gatilhos de Decisão/Bug/Ideia já apontam para `DECISIONS`/`IDEAS`, agora universais — ficam.)

## Tarefa B — higiene niche-aware (`buildClaudeMd`)
**Âncora:** a linha `  HYGIENE_RULES.forEach(r => L.push(\`- ${r}\`));` (≈2076). **Substitua-a por:**
```js
  const hasRoadmap = (niche.contextFiles||[]).some(f=>/ROADMAP/i.test(f.name));
  HYGIENE_RULES.forEach(r => {
    if(!hasChangelog) r = r.replace(" e vai para o CHANGELOG (e para o log da sessão)", " e vai para o log da sessão");
    if(!hasRoadmap)   r = r.replace(" Médio/longo prazo vive no ROADMAP, não no STATUS.", " Planos de médio/longo prazo não incham o STATUS.");
    L.push(`- ${r}`);
  });
```
(`hasChangelog` já foi definido na Tarefa A, que roda antes no mesmo `buildClaudeMd`. Se a ordem no arquivo puser a higiene ANTES dos gatilhos, mova a linha `const hasChangelog = …` para antes da higiene.)

## Tarefa C — não criar arquivo que o nicho não tem (`buildClaudeMd`, linha ≈2134)
**Substitua** a nota `> Se um arquivo referenciado pelas regras acima (IDEAS, DECISIONS, etc.) ainda não existir no projeto, o assistente o CRIA na primeira necessidade — a partir do papel descrito e do modelo do kit — em vez de tratar a ausência como erro ou adiar a captura.` por:
```js
  L.push("> Se um arquivo da **camada universal** (STATUS, IDEAS, DECISIONS) referenciado acima ainda não existir, o assistente o CRIA na primeira necessidade, a partir do papel descrito. **Arquivos de outros nichos (CHANGELOG, ROADMAP, etc.) que NÃO fazem parte deste nicho não são criados** — a ausência é intencional, não um erro.");
```

## Tarefa D — limpar o resíduo `DECISOES` no template
Duas linhas em `index_template.html` (na seção do Modo Code) ainda dizem `DECISOES`:
- ≈2222: `…\`DEC-\`/\`FIX-\` em DECISOES, …` → `… em DECISIONS, …`
- ≈2284: `…\`DEC-\`/\`FIX-\` em \`meta/DECISOES.md\` …` → `… em \`meta/DECISIONS.md\` …`

## Tarefa E — commit na instrução curta (`buildInstr`)
**Âncora:** a linha `**Log:** nomeie \`logs/AAAA-MM-DD.md\`…` (adicionada na spec0002). **Insira DEPOIS dela:**
```js
  if(asuModeOn() || codeModeOn() || coreFiles.some(n=>/CHANGELOG/i.test(n)))
    lines.push("**Commit:** ao concluir mudança versionada, ENTREGUE o `git commit` pronto, em bloco SEPARADO para copiar isolado, mensagem sem acento. Não pule o commit.");
```
(Cobre dev — via CHANGELOG — além de ASU e Modo Code; é onde o commit vinha sumindo.)

## Tarefa F — ritual do `.txt` na instrução curta (`buildInstr`)
**Âncora:** a linha do `readOrder` (`Antes de qualquer ação, leia nesta ordem: …`, ≈1912). **Insira DEPOIS dela:**
```js
  lines.push("No início da sessão, cheque também notas avulsas `.txt` recentes no diretório do projeto e leia-as — entrada transitória do usuário (a fundir nos meta/), não fonte canônica. Se não houver, siga normalmente.");
```

---

## Validar (obrigatório)
1. `node build.js` → **OK**; `node validate.js` → **17/17**.
2. **Manual (o teste da Decisão 3):** gere o CEREBRO de um nicho **sem** CHANGELOG (ex.: `narrative` ou `game`) → a tabela de gatilhos e a higiene **não citam CHANGELOG/ROADMAP**, e a nota diz que não se cria arquivo de outro nicho. Gere o CEREBRO do `dev` → CHANGELOG/ROADMAP **continuam** aparecendo.
3. `grep -n "DECISOES" index_template.html` → **vazio**.
4. Instrução curta de um nicho dev/ASU traz a linha de **Commit**; qualquer nicho traz a linha do **.txt**.
5. `git diff` revisado.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — **D-036** (confirme número):
```
## D-036 — CEREBRO gerado é niche-aware

**Decisão.** Gatilhos, higiene e a nota de "criar se faltar" passam a respeitar os `contextFiles` reais do nicho: CHANGELOG/ROADMAP só aparecem para nichos que os têm; a criação automática vale só para a camada universal (STATUS/IDEAS/DECISIONS). Commit foi para a instrução curta (dev/ASU/Modo Code); ritual de checar `.txt` avulso adicionado.

**Por quê.** O CEREBRO genérico mandava nichos atualizarem/criarem CHANGELOG/ROADMAP que não fazem parte deles — gerando referência fantasma e arquivos espúrios. Commit sumia em chats ASU/normais por estar só no CEREBRO (lido 1x), não na instrução curta.
```
- **`meta/CHANGELOG.md`** — topo: `## v1.40.0 — CEREBRO por nicho (Fase 3)` + bullets (niche-aware; commit na instrução curta; ritual .txt; D-036).
- **`meta/STATUS.md`** — versão → **v1.40.0**; marque a **migração para inglês + Decisão 3 como CONCLUÍDA** (Fases 0-3 feitas).

## Commit (sem acento)
```
git add index_template.html index.html meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: CEREBRO gerado niche-aware (Fase 3, D-036)" -m "gatilhos/higiene/criar-se-faltar respeitam os contextFiles do nicho; CHANGELOG/ROADMAP so onde existem; commit na instrucao curta; ritual .txt; limpeza DECISOES->DECISIONS no template; v1.40.0"
git push
```
