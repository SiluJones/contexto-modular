# spec0042 — Correções do nicho Carreira + SO no modal + engine/fase no modal + harness do teto real

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.67.0` (pós-spec0041, commit `2ed718e`), harness 18/18 · 43/43 · 0 erros.
> **Resultado esperado:** **18/18 nichos · 46/46 checagens · 0 erros.**
> **⚠️ Já validado:** todas as âncoras e o resultado do harness foram **executados de verdade** numa cópia
> do repo (build + validate) antes desta spec ser escrita.
>
> **Fecha:** correções do usuário (nota `260713-0937`) · **i-N36 fase C** (SO no modal) · migração
> engine/fase para a aba Nicho. **Descobre e conserta:** o teto de 6900 **nunca foi medido no uso real**
> (ver Tarefa D — três nichos estouram hoje se o usuário marcar tudo).

---

## Tarefa A — `src/niches/career.js` (3 edições)

### A1 — cor do card (colidia com o dev aos olhos do usuário)
**Âncora:** `  cardColor:"#84cc16",`
**Substituir por:** `  cardColor:"#4ade80",`
> Verde inequívoco. O `#84cc16` (lima) lia como o âmbar do dev (`#e7a23f`) na grade.

### A2 — Área-alvo vira **chips** (múltipla escolha) e ganha alcance
**Âncora:**
```javascript
      { kind:"radios", label:"Área-alvo", name:"target", opts:[
        ["dev","Desenvolvimento"], ["data","Dados/BI"], ["product","Produto"], ["design","Design"], ["ops","Infra/Suporte"], ["admin","Administrativo/Ops"], ["other","Outra"] ] },
```
**Substituir por:**
```javascript
      { kind:"chips", label:"Área-alvo (pode marcar mais de uma)", name:"target", opts:[
        ["dev","Desenvolvimento"], ["data","Dados/BI"], ["ai","IA/ML"], ["infra","Infra/DevOps"], ["sec","Segurança"],
        ["qa","QA/Testes"], ["product","Produto"], ["design","Design/UX"], ["support","Suporte técnico"],
        ["admin","Administrativo/Ops"], ["pm","Gestão de projetos"], ["marketing","Marketing"], ["sales","Comercial"],
        ["teach","Ensino/Treinamento"], ["freela","Autônomo/PJ"], ["other","Outra"] ] },
```
> Era `radios` (escolha única) — errado: transição de área é justamente marcar duas.

### A3 — Fronteiras com o alcance real do problema
**Âncora:**
```javascript
      { kind:"chips", label:"Fronteiras (o que você NÃO quer)", name:"limits", opts:[
        ["clients","Atendimento a cliente"], ["oncall","Plantão/escala"], ["travel","Viagem"], ["people","Gestão de pessoas"], ["sales","Vendas"], ["onsitefix","Presencial fixo"] ] },
```
**Substituir por:**
```javascript
      { kind:"chips", label:"Fronteiras (o que você NÃO quer)", name:"limits", opts:[
        ["clients","Atendimento a cliente"], ["coldcall","Prospecção/cold call"], ["salesgoal","Meta de vendas"],
        ["oncall","Plantão/escala"], ["overtime","Hora extra recorrente"], ["weekend","Fim de semana"],
        ["travel","Viagem frequente"], ["relocate","Mudar de cidade"], ["onsitefix","Presencial fixo"],
        ["people","Gestão de pessoas"], ["scopecreep","Acúmulo de função sem revisão"], ["pjforced","PJ forçado / sem registro"],
        ["pressure","Ambiente de pressão constante"] ] },
```
> `scopecreep` é a fronteira que o caso de origem pedia e faltava.

---

## Tarefa B — `src/index.template.html` · hero do career genérico

**Âncora (o bloco inteiro do `case "career"`):**
```javascript
    case "career": return `
      <div class="ev">
        <h4>EVIDENCIAS.md · append-only</h4>
        <div class="row"><span class="tag">EV-014</span><span class="txt"><b>Catálogo digital publicado</b> — substituiu a busca manual por SKU. Prova: repo + painel.</span></div>
        <div class="row"><span class="tag">EV-013</span><span class="txt"><b>Conferência pedido × fornecedor</b> — função assumida em 2026-05-12. Prova: e-mail da diretoria.</span></div>
        <div class="row"><span class="tag">EV-012</span><span class="txt"><b>Gerador de cartazes em massa</b> — de 3h para 20min por campanha.</span></div>
      </div>
      <div class="side">
        <span class="lbl">Contratado × real</span>
        <span class="big">+4 funções</span>
        <span class="delta">assumidas desde a contratação, sem revisão de cargo ou salário — todas datadas e com prova.</span>
        <span class="stamp">faixa: pesquisada, com fonte</span>
      </div>`;
```
**Substituir por:**
```javascript
    case "career": return `
      <div class="ev">
        <h4>EVIDENCIAS.md · append-only</h4>
        <div class="row"><span class="tag">EV-014</span><span class="txt"><b>Entrega que resolveu um problema real</b> — o que mudou, com número. <em>Prova:</em> link/commit/print.</span></div>
        <div class="row"><span class="tag">EV-013</span><span class="txt"><b>Nova função assumida</b> — data + quem pediu. <em>Prova:</em> e-mail/tarefa.</span></div>
        <div class="row"><span class="tag">EV-012</span><span class="txt"><b>Projeto próprio concluído</b> — competência demonstrada, não afirmada.</span></div>
      </div>
      <div class="side">
        <span class="lbl">Contratado × real</span>
        <span class="big">+N funções</span>
        <span class="delta">assumidas desde a contratação, sem revisão de cargo ou salário — cada uma datada e com prova.</span>
        <span class="stamp">faixa: pesquisada, com fonte</span>
      </div>`;
```
> O hero é vitrine do produto: exemplo tem que ser genérico, não a vida do autor.

---

## Tarefa C — i-N36 fase C: **SO sai do painel e entra no modal**

### C1 — remover o bloco do painel esquerdo
**Âncora:**
```html
          <div class="group">
            <div class="glabel">Seu sistema operacional <span class="gn">· opcional</span></div>
            <select class="txt" id="g-os">
              <option value="none">Não especificar</option>
              <option value="win-cmd">Windows — CMD (Prompt de Comando)</option>
              <option value="win-ps">Windows — PowerShell</option>
              <option value="macos">macOS (zsh/bash)</option>
              <option value="linux">Linux (bash)</option>
            </select>
            <p class="hint" style="margin-top:7px">Se o assistente for gerar comandos de terminal (git, instalação), ele usa a sintaxe certa do seu sistema. Entra nas Instruções e no CEREBRO.md.</p>
          </div>
        </div>
```
**Substituir por:**
```html
        </div>
```

### C2 — inserir a seção «Ambiente» no `<dialog id="cfg-dialog">`, antes da seção Nicho
**Âncora:**
```html
      <section class="cfg-sec" id="cfg-sec-nicho" hidden>
```
**Substituir por:**
```html
      <section class="cfg-sec" id="cfg-sec-ambiente">
        <h3>Ambiente</h3>
        <div class="subhead">Seu sistema operacional</div>
        <select class="affix-input" id="g-os" style="width:100%">
          <option value="none">Não especificar</option>
          <option value="win-cmd">Windows — CMD (Prompt de Comando)</option>
          <option value="win-ps">Windows — PowerShell</option>
          <option value="macos">macOS (zsh/bash)</option>
          <option value="linux">Linux (bash)</option>
        </select>
        <p class="affix-preview">Se o assistente gerar comandos de terminal (git, instalação), ele usa a sintaxe certa do seu sistema. Entra nas Instruções e no CEREBRO.md.</p>
      </section>
      <section class="cfg-sec" id="cfg-sec-nicho" hidden>
```

> **Nada de JS muda.** O `id="g-os"` é o mesmo, o wiring (`osSel.onchange` → `OSENV.value`/`STATE.os`) e o
> restore (`snap.os`) continuam válidos. O `<dialog>` já está **antes** do `<script>` final — **D-059 ok**
> (o novo check G17 trava isso).

---

## Tarefa D — `src/niches/game.js`: engine e fase para a aba Nicho do modal

**Âncora:** `    { id:"engineSel", label:"Engine", type:"select",`
**Substituir por:** `    { id:"engineSel", label:"Engine", type:"select", panel:"modal",`

**Âncora:** `    { id:"phase", label:"Fase", type:"select",`
**Substituir por:** `    { id:"phase", label:"Fase", type:"select", panel:"modal",`

> `phase` continua alimentando a linha **Estágio:** do `buildInstr` — muda só **onde** o campo é
> renderizado, não o que sai. (Conferido: N[game] segue verde.)

---

## Tarefa E — `validate.js`: consertar um check vazio e medir o teto REAL

### E1 — o check de chips estava **vácuo** (bug achado ao escrever esta spec)
O `normBuilderSection` normaliza para **`items`**; o harness lia `norm.groups` — que é sempre `undefined`
no formato novo. Ou seja: **o check dos chips nunca validou nada** nos nichos modernos.

**Âncora:**
```javascript
    const sec = n.builderSection;
    if(sec){
      const norm = T.normBuilderSection(sec);
      const groups = norm.groups || [];
      groups.forEach(g => (g.opts||[]).forEach(o => {
        assert(Array.isArray(o) && o.length === 2, "chip nao normalizado para [v,l] em "+id+": "+JSON.stringify(o));
      }));
    }
```
**Substituir por:**
```javascript
    const sec = n.builderSection;
    if(sec){
      const norm = T.normBuilderSection(sec);
      const grupos = norm.items || norm.groups || [];   // formato normalizado e .items (FIX spec0042)
      assert(grupos.length > 0, "builderSection sem itens apos normalizar em " + id);
      grupos.forEach(g => (g.opts||[]).forEach(o => {
        assert(Array.isArray(o) && o.length === 2, "chip nao normalizado para [v,l] em "+id+": "+JSON.stringify(o));
      }));
    }
```

### E2 — três checks novos (inserir **antes** do sumário)
**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G16 teto no PIOR CASO (todos os chips/multi marcados) <= 7600 em todos os nichos", () => {
  const over = [];
  Object.keys(T.NICHES).forEach(id => {
    const n = T.normNiche(T.NICHES[id]);
    T.STATE.builder = {}; T.STATE.topbar = {};
    const sec = n.builderSection ? T.normBuilderSection(n.builderSection) : null;
    if(sec) (sec.items || sec.groups || []).forEach(g => { T.STATE.builder[g.name] = (g.opts||[]).map(o => o[0]); });
    (n.topbar||[]).forEach(f => { if(f.type === "multi") T.STATE.topbar[f.id] = (f.options || f.opts || []).slice(); });
    const len = T.buildInstr(n).length;
    if(len > 7600) over.push(id + ":" + len);
  });
  T.STATE.builder = {}; T.STATE.topbar = {};
  assert(over.length === 0, "estouraram o teto de pior caso -> " + over.join(", "));
  return "ok";
});

check("G17 SO vive no modal e o DOM vem antes do script (D-059)", () => {
  const html = fs.readFileSync(path, "utf8");
  const dlg = html.indexOf('id="cfg-dialog"');
  const os  = html.indexOf('id="g-os"');
  const scr = html.lastIndexOf("<script>");
  assert(dlg > 0 && os > 0, "cfg-dialog ou g-os ausentes");
  assert(os > dlg, "o select do SO nao esta dentro do modal de configuracoes");
  assert(os < scr, "DOM do SO depois do <script> final (D-059: listener anexaria em null)");
  const gameTb = T.NICHES.game.topbar || [];
  ["engineSel","phase"].forEach(fid => {
    const f = gameTb.find(x => x.id === fid);
    assert(f && f.panel === "modal", "campo " + fid + " do game deveria ter panel:modal");
  });
  return "ok";
});

check("G18 career: area-alvo e fronteiras sao chips multiplos e amplos", () => {
  const n = T.normNiche(T.NICHES.career);
  const sec = T.normBuilderSection(n.builderSection);
  const it = (k) => (sec.items || []).find(g => g.name === k);
  ["target","limits"].forEach(k => {
    const g = it(k);
    assert(g, "grupo ausente no career: " + k);
    assert(g.kind === "chips", "grupo " + k + " deveria ser chips (multipla escolha)");
    assert((g.opts||[]).length >= 10, "grupo " + k + " com poucas opcoes: " + (g.opts||[]).length);
  });
  return "ok";
});

// ============ SUMARIO ============
```

---

## O achado do teto (leia antes de aplicar)

O check `N[...]` mede a instrução **com nenhuma opção marcada**. No uso real, o usuário marca chips — e a
instrução cresce. Medindo o **pior caso** (tudo marcado), o retrato de hoje é:

| nicho | pior caso | | nicho | pior caso |
|---|---|---|---|---|
| narrative | **7174** | | dev | 6550 |
| career | **7009** | | design | 6508 |
| game | **6978** | | client | 6214 |
| (demais) | ≤ 6009 | | custom | 3041 |

Ou seja: **o teto de 6900 já era furável no produto publicado** (narrative e game), e ninguém via, porque o
harness nunca mediu isso. Esta spec adota **dois orçamentos** (registre como **D-070**):

- **base ≤ 6900** — a instrução do nicho sem escolhas do usuário (check `N[...]`, inalterado);
- **pior caso ≤ 7600** — com todas as escolhas marcadas (novo **G16**), com folga de ~6% sobre o pior
  valor atual. Não é licença para inchar: é o freio que faltava.

Se você preferir **7174 → cabe em 6900** (enxugar narrative/career/game em vez de admitir o segundo teto),
**pare e me avise** — isso é decisão de produto, não de execução, e vira outra spec.

---

## Tarefa F — docs (append)

- **`meta/DECISIONS.md` → D-070:** dois orçamentos de instrução (base 6900 / pior caso 7600) e o motivo
  (o check de chips estava vácuo; o teto nunca foi medido sob escolha do usuário). **D-071:** SO migrado
  para o modal, fechando a **i-N36 fase C**; engine/fase do game na aba Nicho.
- **`meta/IDEAS.md`:** marcar **i-N36 como FECHADA**. Registrar **i-N46 — contador de caracteres da
  instrução na UI** (o usuário deveria ver a instrução crescer ao marcar chips, em vez de descobrir no
  harness). Registrar **i-N47 — reconstruir o CHANGELOG** (v1.54–v1.66 nunca entraram; hoje o topo pula
  de 1.53 para 1.67).
- **`meta/STATUS.md`:** v1.67.0 → **v1.67.1** (patch: correções + migrações, sem nicho novo);
  testes **18/18 · 46/46 · 0 erros**.
- **`meta/CHANGELOG.md`:** entrada da v1.67.1.

---

## Verificação

1. `node build.js` → 18 módulos.
2. `node validate.js index.html` → **18/18 · 46/46 · 0 erros**.
3. Visual: card «Carreira» agora **verde**, distinto do dev; hero sem exemplos pessoais; **Área-alvo** e
   **Fronteiras** aceitam várias marcações; no modal ⚙ aparecem **Ambiente → SO** e, no nicho Game,
   **Engine** e **Fase**; o painel esquerdo não tem mais o SO.
4. `git diff --stat` — aditivo, sem deleção-fantasma.

---

## Commit (bloco separado, sem acento)

```bash
git add src/niches/career.js src/niches/game.js src/index.template.html index.html validate.js \
        meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md \
        meta/specs/260713-spec0042-correcoes-carreira-so-modal.md
git commit -m "fix(niche+ui): correcoes do career, SO no modal, engine/fase na aba nicho, teto real no harness (spec0042, D-070/D-071)

- career: cor verde (colidia com dev), area-alvo vira chips amplos, fronteiras ampliadas, hero generico
- i-N36 fase C: SO sai do painel e vai para o modal (secao Ambiente); game: engine/fase com panel modal
- harness: check de chips estava vacuo (lia .groups, formato e .items) - corrigido
- G16 teto de pior caso (7600), G17 SO no modal + D-059, G18 chips do career -> 18/18, 46/46, 0 erros"
git push
```
