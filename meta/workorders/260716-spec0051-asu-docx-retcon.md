# spec0051 — E-ASU (ASU não cobre binários) + B6 (Retcon no CONTINUIDADE)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.73.0` (pós-spec0050, commit `e41fad1`, pushado), harness **18/18 · 56/56 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 57/57 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução pós-0050 em sandbox (`build` + `validate`) → verde
> **18/18 · 57/57**. Âncoras byte-exatas e únicas (CRLF). Teto: narrativa **inalterada** (6702) — ambas as
> mudanças são conteúdo de CEREBRO/template, fora das Instruções.
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** análise 260716 §E (ASU/.docx) + §B6 (retcon). Duas mudanças pequenas e independentes num só
> ciclo (arquivos distintos, sem conflito).

## O quê

- **E-ASU** — o CEREBRO ensina que o **ASU não cobre `.docx`/`.xlsx`/binários** (só texto, patch por âncora).
  Decisão do usuário (260717-1313.txt): como é o *KCM* que ensina a usar o ASU, esse aviso deve vir de dentro
  do produto. Toca a seção «Saída de código via ASU» do CEREBRO — vale para qualquer nicho que use ASU.
- **B6** — seção **«Retcon» opcional** no template do `CONTINUIDADE.md` da narrativa: quando uma reescrita muda
  um fato canônico, a memória factual guarda só a **verdade atual**; o histórico da mudança vai para
  ENREDO/DECISIONS. Enxuto de propósito — sem a tabela de «fontes brutas» (era específica do cenário de
  migração, que o usuário confirmou não precisar de tratamento especial).

---

## Tarefa A — `src/index.template.html`: E-ASU

### A1 — o CEREBRO avisa que o ASU não cobre binários
Fim do parágrafo de introdução da seção «Saída de código via ASU (patch)» (fragmento **único**).
**Âncora:** ``Pré-requisito: `INSTRUCTION_GUIDE.md` e `PROMPT_IA.md` estão no conhecimento do Projeto e o ASU está instalado.");``
**Substituir por:**
```
Pré-requisito: `INSTRUCTION_GUIDE.md` e `PROMPT_IA.md` estão no conhecimento do Projeto e o ASU está instalado. O ASU opera só em arquivos de **texto** (patch por âncora): **não cobre `.docx`, `.xlsx` nem outros binários** — um documento Word ou planilha sai inteiro para baixar, nunca como instrução ASU.");
```

### A2 — bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.73.0";` → **Substituir por:** `const KIT_VERSION = "1.74.0";`

---

## Tarefa B — `src/niches/narrative.js`: B6 (Retcon no template CONTINUIDADE)

Insere a seção «Retcon» **antes** de «Inconsistências encontradas e resolvidas», dentro do `content` do
template `CONTINUIDADE.md`.
**Âncora:**
```
## Inconsistências encontradas e resolvidas
> Histórico de furos pegos e como foram corrigidos — para não reabrir.
```
**Substituir por:**
```
## Retcon — quando o cânone muda (opcional)
> Se uma reescrita MUDA um fato já canônico, este arquivo passa a guardar só a **verdade atual** — não empilhe versões contraditórias aqui. O histórico da mudança (o que era antes, por que mudou) vai para ENREDO.md (decisão de trama) ou DECISIONS.md (decisão de craft). A memória factual segue sendo fonte única; o «porquê» fica rastreável sem poluir o «o quê».

## Inconsistências encontradas e resolvidas
> Histórico de furos pegos e como foram corrigidos — para não reabrir.
```

---

## Tarefa C — `validate.js`: check **C13**

**Âncora:** `check("C12 nomes com opcoes`
**Substituir por** (insira C13 ANTES do C12, que permanece logo depois):
```javascript
check("C13 E-ASU (.docx) + B6 retcon no template CONTINUIDADE (spec0051)", () => {
  T.STATE.workmode={asuMode:"yes"};
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/não cobre `.docx`/.test(md),"CEREBRO ASU nao avisa que nao cobre .docx");
  T.STATE.workmode={};
  const cont=(T.NICHES.narrative.contextFiles||[]).find(f=>f.name==="CONTINUIDADE.md");
  assert(cont && /## Retcon — quando o cânone muda/.test(cont.content),"CONTINUIDADE sem secao Retcon");
  return "ok";
});

check("C12 nomes com opcoes
```
> Restaura `STATE.workmode={}` após ligar o asuMode. `T.buildClaudeMd`, `T.normNiche`, `T.NICHES` já no SHIM.

---

## Tarefa D — docs (append)

- **`meta/DECISIONS.md` → D-084:** (E-ASU) o CEREBRO passa a ensinar que o ASU só cobre texto (patch por
  âncora), não `.docx`/`.xlsx`/binários — origem: o KCM é quem ensina a usar o ASU (análise 260716 §E,
  decisão do usuário). (B6) template do `CONTINUIDADE.md` da narrativa ganha a seção opcional «Retcon»
  (verdade atual só aqui; histórico da mudança → ENREDO/DECISIONS). Check C13.
- **`meta/IDEAS.md`:** §E (ASU/.docx) e §B6 → **INCORPORADAS**. Registrar que o **modo de migração/extração
  (§D) foi DESCARTADO** — não precisa de modo: era organização + script Python mal-implementado + leitura
  incompleta de caminhos, não uma lacuna de comportamento do kit (decisão do usuário, 260717).
- **`meta/STATUS.md`:** v1.73.0 → **v1.74.0**; testes **18/18 · 57/57 · 0 erros**; `KIT_VERSION 1.74.0`;
  somar C13.
- **`meta/CHANGELOG.md`:** entrada v1.74.0 no topo.

---

## Verificação

1. `/check-spec` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 57/57 · 0 erros**. C13 verde.
3. **Teto:** `N[narrative]` = 6702 (inalterado — ambas as mudanças são CEREBRO/template, fora das Instruções).
4. **Visual:** qualquer nicho no **modo ASU** → CEREBRO, seção «Saída de código via ASU», mostra o aviso de
   `.docx`/binários; nicho **Narrativa** → o template do `CONTINUIDADE.md` (baixado) traz a seção «Retcon».
5. `git diff --stat` — `src/index.template.html` + `src/niches/narrative.js` + `validate.js` + `index.html` + 4 meta-docs + a spec.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html src/niches/narrative.js index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0051-asu-docx-retcon.md
git commit -m "feat: CEREBRO avisa que ASU nao cobre binarios (.docx/.xlsx) + secao Retcon no CONTINUIDADE (spec0051, D-084)

- E-ASU: secao 'Saida via ASU' do CEREBRO ensina que ASU e so texto (patch por ancora), nao binarios
- B6: template CONTINUIDADE da narrativa ganha secao opcional 'Retcon' (verdade atual aqui; historico -> ENREDO/DECISIONS)
- modo de migracao (D) descartado: nao precisa de modo (era script/organizacao, nao lacuna do kit)
- check C13; KIT_VERSION 1.74.0; teto da narrativa inalterado
- 18/18, 57/57, 0 erros"
git push
```
