# spec0049 — Universais da base: leva C (pedido composto · gênero em rename · sincronia Instr↔CEREBRO)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.71.0` (pós-spec0048, commit `2a97612`, pushado), harness **18/18 · 54/54 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 55/55 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução do repo **pós-0048** em sandbox (`node build.js` +
> `node validate.js index.html`) → **verde 18/18 · 55/55**. Âncoras byte-exatas contra
> `src/index.template.html` (CRLF), únicas (conferido na aplicação).
> **Teto:** provado inalterado nos **18 nichos** — a linha comprimida dos universais nas Instruções usa só o
> **label** de cada princípio (`b.label`), não a descrição; estender uma descrição da base cresce **só o
> CEREBRO**, que não tem teto. Medido antes/depois: 0 nicho mudou de tamanho.
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** `meta/analises/260716-ANALISE-REFINO-NARRATIVE.md` §C. Terceira e última leva do refino.

## O quê (e o que ficou de fora, com motivo)

A análise §C listou 5 universais. **Dois se resolveram sozinhos no estudo:**
- **C3 (ideias do autor como conselho, não comando) — JÁ é universal.** O princípio **P1 «Analisa antes de
  aceitar»** já diz exatamente isso («não segue cegamente o que eu proponho… discordar com fundamento é
  serviço prestado»). A versão da narrativa é um restatement de domínio, não um buraco. **Sem código.**
- **C2 (nunca pedir nome sem 2–4 opções) — NÃO promover a universal.** Não se aplica a dev/finanças/pesquisa
  (lá se escolhe um bom nome direto) e até **conflita** com P2 «não abre menu de opções para decisão óbvia».
  É comportamento de **trabalho criativo** — já vive no modo Direção Criativa da narrativa. **Recomendação:**
  se estender, que seja aos nichos criativos (game/comics/rpg/music/design/animation) numa passada dedicada,
  não à base. **Fica para decisão do usuário — não entra nesta spec.**

**Entram (C1, C4, C5)** — todos crescem só o CEREBRO, sem novo princípio (G2 segue 13):

---

## Tarefa A — `src/index.template.html`

### A1 (C1) — princípio `cadence` ganha «pedido composto»
Fim da descrição do princípio `cadence` (fragmento **único**).
**Âncora:** `o tamanho da resposta é proporcional ao da tarefa."]`
**Substituir por:**
```
o tamanho da resposta é proporcional ao da tarefa. Pedido composto (vários pedidos numa mensagem): enumera as partes, executa o que não bloqueia e para só na decisão que de fato trava — não deixa um pedido soterrar os outros nem transforma tudo em pergunta."]
```

### A2 (C4) — princípio `consistency` ganha a armadilha de gênero em rename
Fim da descrição do princípio `consistency` (fragmento **único**).
**Âncora:** `compara com o que tem à vista."]`
**Substituir por:**
```
compara com o que tem à vista. Ao renomear um termo por busca-e-troca, confere a concordância (gênero/número) no entorno — trocar «o Assentamento» por «a Consolidação» sem ajustar artigos e adjetivos quebra o texto."]
```

### A3 (C5) — bloco «Refino das Instruções» (G19) ganha a regra de sincronia
**Âncora:**
```javascript
  L.push("- **Não inche.** Antes de acrescentar uma regra, pergunte se ela cabe no CEREBRO. Só vai para as Instruções o que precisa ser lembrado em TODO turno.");
```
**Substituir por:**
```javascript
  L.push("- **Não inche.** Antes de acrescentar uma regra, pergunte se ela cabe no CEREBRO. Só vai para as Instruções o que precisa ser lembrado em TODO turno.");
  L.push("- **Sincronia com o CEREBRO.** Quando uma customização estrutural entra no CEREBRO (novo modo, novo arquivo, mudança de processo), a versão curta das Instruções pode ficar para trás e até contradizê-lo. Ao mexer no CEREBRO, cheque se as Instruções ainda batem; se divergirem, proponha alinhar/regenerar a versão curta.");
```

### A4 — bump `KIT_VERSION` (invariante i-N50)
**Âncora:** `const KIT_VERSION = "1.71.0";`
**Substituir por:** `const KIT_VERSION = "1.72.0";`

---

## Tarefa B — `validate.js`: check **C11**

**Âncora:** `check("C10 narrative refino spec0048`
**Substituir por** (insira o bloco C11 ANTES da linha do C10, que permanece logo depois):
```javascript
check("C11 universais leva C (spec0049): pedido composto + genero em rename + sincronia Instr<->CEREBRO", () => {
  const md=T.buildClaudeMd(T.normNiche(T.NICHES.dev));
  assert(/Pedido composto/.test(md),"cadence sem 'pedido composto'");
  assert(/concordância \(gênero\/número\)/.test(md),"consistency sem regra de genero no rename");
  assert(/Sincronia com o CEREBRO/.test(md),"refino sem regra de sincronia Instr<->CEREBRO");
  assert(T.NICHES && Object.keys(T.NICHES).length===18,"nichos != 18");
  return "ok";
});

check("C10 narrative refino spec0048
```

---

## Tarefa C — docs (append)

- **`meta/DECISIONS.md` → D-082:** três universais da análise 260716 §C entram na base, todos só no CEREBRO
  (teto dos 18 inalterado). **C1:** `cadence` ganha «pedido composto» (enumerar, executar o não-bloqueante,
  parar só na decisão que trava). **C4:** `consistency` ganha a armadilha de concordância de gênero/número em
  rename por busca-e-troca (FIX-003 do projeto Rascunho). **C5:** o bloco «Refino das Instruções» ganha a
  regra de sincronia Instruções-curtas ↔ CEREBRO. Check C11. **Registrado no DECISIONS que C3 já era coberto
  por P1 (analyze) e que C2 (2–4 opções para nome) foi deliberadamente NÃO promovido a universal** (não se
  aplica a nichos não-criativos; conflita com P2) — fica para eventual passada nos nichos criativos.
- **`meta/IDEAS.md`:** §C (C1/C4/C5) → **INCORPORADA**; **C2 → parqueada** (decisão: nichos criativos, não
  base); **C3 → coberta por P1** (fechar). **B6/B7/D/E** da análise seguem abertos.
- **`meta/STATUS.md`:** v1.71.0 → **v1.72.0** (minor: universais da base + check); testes
  **18/18 · 55/55 · 0 erros**; `KIT_VERSION 1.72.0`; somar C11 na linha de método.
- **`meta/CHANGELOG.md`:** entrada v1.72.0 no topo.

---

## Verificação

1. `/check-spec meta/specs/260716-spec0049-universais-leva-c.md` → APLICÁVEL.
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 55/55 · 0 erros**.
3. **G2 segue `13`** (nenhum princípio novo — C1/C4 estenderam descrições existentes) e **G19 segue verde**
   (a seção de refino ganhou um bullet, mas mantém «## Refino das Instruções do Projeto», o teto e o registro
   em DECISIONS/IDEAS). C11 verde.
4. **Teto:** compare `buildInstr(n).length` de cada nicho antes/depois → **inalterado** nos 18 (a base cresce
   só o CEREBRO). `grep -n "6900" validate.js` segue vazio.
5. `git diff --stat` — `src/index.template.html` + `validate.js` + `index.html` + 4 meta-docs + a spec.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0049-universais-leva-c.md
git commit -m "feat(base): universais da leva C - pedido composto, genero em rename, sincronia Instr-CEREBRO (spec0049, D-082)

- cadence ganha 'pedido composto' (enumera, executa o nao-bloqueante, para so na decisao que trava)
- consistency ganha armadilha de concordancia de genero/numero em rename por busca-e-troca (FIX-003)
- bloco 'Refino das Instrucoes' ganha regra de sincronia Instrucoes-curtas <-> CEREBRO
- C3 ja era coberto por P1 (analyze); C2 (2-4 opcoes p/ nome) NAO promovido a universal (fica p/ nichos criativos)
- so CEREBRO, teto dos 18 inalterado; G2 segue 13; check C11; KIT_VERSION 1.72.0
- 18/18, 55/55, 0 erros"
git push
```
