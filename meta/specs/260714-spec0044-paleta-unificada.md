# spec0044 — Paleta unificada dos 18 nichos (i-N49) + blindagem do hook

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.68.0` (pós-spec0043, commit `129337b`, pushado), harness 18/18 · 47/47 · 0 erros.
> **Resultado esperado:** **18/18 nichos · 49/49 checagens · 0 erros.**
> **⚠️ Já validado:** paleta e checks executados de verdade numa cópia do repo (build + harness) antes
> desta spec ser escrita.
> **Rode `/check-spec` antes de aplicar** (agora existe — use-o).

---

## O problema

O KCM tinha **duas fontes de cor por nicho**, sem nada obrigando-as a concordar:

- **card** (tela de escolha) → `cardColor`, em `src/niches/<id>.js`;
- **página do nicho** → `html[data-niche="<id>"]{ --amber: … }`, em `src/index.template.html`.

Onze nichos divergiam, e o `career` **não tinha bloco `[data-niche]` nenhum** — por isso a página dele
herdava o âmbar padrão (o do dev), que foi o bug relatado. Esta spec funde as duas fontes numa **cor
principal por nicho**, redistribui os matizes para dar separação real, e cria dois checks que impedem a
divergência de voltar.

### A paleta (18 matizes, principal = card = página)

| Nicho | Principal | Nicho | Principal |
|---|---|---|---|
| Desenvolvimento | `#e7a23f` âmbar | Game Design | `#34d399` esmeralda |
| Design Visual | `#c084fc` violeta | Pixel Art | `#a3e635` lima |
| Gestão Cliente | `#2dd4bf` teal | Brainstorm | `#fbbf24` amarelo |
| Narrativa | `#7aa2f7` azul | Música | `#22d3ee` ciano |
| Marketing | `#f87171` coral | RPG | `#ef4444` vermelho |
| Pesquisa | `#94a3b8` grafite | Cozinha | `#f97316` laranja |
| Produto/UX | `#f472b6` rosa | Animação | `#818cf8` índigo |
| Negócios | `#d4b896` bege | HQs | `#e879f9` fúcsia |
| **Carreira** | `#4ade80` verde | Personalizado | `#cbd5e1` cinza |

Critério: matizes separados dentro de cada grade (nenhum par vizinho no grid cai na mesma família),
nenhuma cor principal repetida, e cada nicho mantém a leitura semântica que já tinha (dev âmbar, RPG
vermelho, cozinha fogo, HQ fúcsia). Os três verdes ficam em grades diferentes e a 20–40° um do outro
(Carreira em «Projetos», Game e Pixel em «Histórias & Jogos»).

---

## Tarefa A — `src/index.template.html`: bloco de temas por nicho

Substitua **as 17 linhas** `html[data-niche="…"]` (de `dev` até `custom`) por estas **18** — repare que a
linha do **`career`** é **nova**, inserida depois de `business`:

**Âncora:** a primeira linha do bloco atual
```css
  html[data-niche="dev"]{ --amber:#e7a23f; --amber-soft:#caa15e; --green:#9fbf6f; --grad-a:rgba(231,162,63,.07); --grad-b:rgba(159,191,111,.05); }
```
…até a última
```css
  html[data-niche="custom"]{ --amber:#cbd5e1; --amber-soft:#e2e8f0; --green:#a3e635; --grad-a:rgba(203,213,225,.06); --grad-b:rgba(163,230,53,.04); }
```

**Bloco novo (substitui o intervalo inteiro):**
```css
  html[data-niche="dev"]{ --amber:#e7a23f; --amber-soft:#caa15e; --green:#9fbf6f; --grad-a:rgba(231,162,63,.07); --grad-b:rgba(159,191,111,.05); }
  html[data-niche="design"]{ --amber:#c084fc; --amber-soft:#a78bfa; --green:#818cf8; --grad-a:rgba(192,132,252,.10); --grad-b:rgba(129,140,248,.06); }
  html[data-niche="client"]{ --amber:#2dd4bf; --amber-soft:#5eead4; --green:#34d399; --grad-a:rgba(45,212,191,.08); --grad-b:rgba(52,211,153,.05); }
  html[data-niche="narrative"]{ --amber:#7aa2f7; --amber-soft:#9ab3f5; --green:#c4a7f4; --grad-a:rgba(122,162,247,.08); --grad-b:rgba(196,167,244,.05); }
  html[data-niche="marketing"]{ --amber:#f87171; --amber-soft:#fca5a5; --green:#fb923c; --grad-a:rgba(248,113,113,.09); --grad-b:rgba(251,146,60,.06); }
  html[data-niche="research"]{ --amber:#94a3b8; --amber-soft:#cbd5e1; --green:#60a5fa; --grad-a:rgba(148,163,184,.06); --grad-b:rgba(96,165,250,.05); }
  html[data-niche="product"]{ --amber:#f472b6; --amber-soft:#f9a8d4; --green:#c084fc; --grad-a:rgba(244,114,182,.09); --grad-b:rgba(192,132,252,.05); }
  html[data-niche="business"]{ --amber:#d4b896; --amber-soft:#e6d4b8; --green:#94a3b8; --grad-a:rgba(212,184,150,.07); --grad-b:rgba(148,163,184,.04); }
  html[data-niche="career"]{ --amber:#4ade80; --amber-soft:#86efac; --green:#a3e635; --grad-a:rgba(74,222,128,.08); --grad-b:rgba(163,230,53,.05); }
  html[data-niche="game"]{ --amber:#34d399; --amber-soft:#6ee7b7; --green:#fbbf24; --grad-a:rgba(52,211,153,.08); --grad-b:rgba(251,191,36,.06); }
  html[data-niche="pixel"]{ --amber:#a3e635; --amber-soft:#bef264; --green:#22d3ee; --grad-a:rgba(163,230,53,.08); --grad-b:rgba(34,211,238,.06); }
  html[data-niche="brainstorm"]{ --amber:#fbbf24; --amber-soft:#fcd34d; --green:#34d399; --grad-a:rgba(251,191,36,.09); --grad-b:rgba(52,211,153,.05); }
  html[data-niche="music"]{ --amber:#22d3ee; --amber-soft:#67e8f9; --green:#a78bfa; --grad-a:rgba(34,211,238,.09); --grad-b:rgba(167,139,250,.05); }
  html[data-niche="rpg"]{ --amber:#ef4444; --amber-soft:#f87171; --green:#d97706; --grad-a:rgba(239,68,68,.08); --grad-b:rgba(217,119,6,.06); }
  html[data-niche="cuisine"]{ --amber:#f97316; --amber-soft:#fdba74; --green:#84cc16; --grad-a:rgba(249,115,22,.09); --grad-b:rgba(132,204,22,.06); }
  html[data-niche="animation"]{ --amber:#818cf8; --amber-soft:#a5b4fc; --green:#f472b6; --grad-a:rgba(129,140,248,.09); --grad-b:rgba(244,114,182,.05); }
  html[data-niche="comics"]{ --amber:#e879f9; --amber-soft:#f0abfc; --green:#a78bfa; --grad-a:rgba(232,121,249,.08); --grad-b:rgba(167,139,250,.05); }
  html[data-niche="custom"]{ --amber:#cbd5e1; --amber-soft:#e2e8f0; --green:#a3e635; --grad-a:rgba(203,213,225,.06); --grad-b:rgba(163,230,53,.04); }
```

---

## Tarefa B — `cardColor` nos módulos (11 arquivos)

| Nicho | De | Para | Por quê |
|---|---|---|---|
| `narrative` | `#f59e0b` | **`#7aa2f7`** | azul — a cor da página; o âmbar antigo brigava com o dev |
| `marketing` | `#fb923c` | **`#f87171`** | coral — a cor da página; o laranja vai para a Cozinha |
| `business` | `#38bdf8` | **`#d4b896`** | bege-papel — única cor dessaturada quente do kit; o azul-céu some |
| `game` | `#a78bfa` | **`#34d399`** | esmeralda de HUD — a cor da página |
| `pixel` | `#34d399` | **`#a3e635`** | lima Game Boy — libera o esmeralda para o Game |
| `brainstorm` | `#facc15` | **`#fbbf24`** | amarelo — alinha card e página (eram dois amarelos quase iguais) |
| `music` | `#fbbf24` | **`#22d3ee`** | ciano neon — o violeta antigo era vizinho do Design |
| `rpg` | `#c084fc` | **`#ef4444`** | vermelho — a cor da página |
| `cuisine` | `#fb7185` | **`#f97316`** | laranja-fogo — o rosa-coral brigava com o Marketing |
| `animation` | `#60a5fa` | **`#818cf8`** | índigo — luz em movimento; libera a faixa laranja |
| `comics` | `#f472b6` | **`#e879f9`** | fúcsia — o rosa era idêntico ao do Produto |

Sem mudança: `dev`, `design`, `client`, `research`, `product`, `career`, `custom` (já batiam).

**`src/niches/narrative.js`**
- **Âncora:** `cardColor:"#f59e0b"`
- **Substituir por:** `cardColor:"#7aa2f7"`

**`src/niches/marketing.js`**
- **Âncora:** `cardColor:"#fb923c"`
- **Substituir por:** `cardColor:"#f87171"`

**`src/niches/business.js`**
- **Âncora:** `cardColor:"#38bdf8"`
- **Substituir por:** `cardColor:"#d4b896"`

**`src/niches/game.js`**
- **Âncora:** `cardColor:"#a78bfa"`
- **Substituir por:** `cardColor:"#34d399"`

**`src/niches/pixel.js`**
- **Âncora:** `cardColor:"#34d399"`
- **Substituir por:** `cardColor:"#a3e635"`

**`src/niches/brainstorm.js`**
- **Âncora:** `cardColor:"#facc15"`
- **Substituir por:** `cardColor:"#fbbf24"`

**`src/niches/music.js`**
- **Âncora:** `cardColor:"#fbbf24"`
- **Substituir por:** `cardColor:"#22d3ee"`

**`src/niches/rpg.js`**
- **Âncora:** `cardColor:"#c084fc"`
- **Substituir por:** `cardColor:"#ef4444"`

**`src/niches/cuisine.js`**
- **Âncora:** `cardColor:"#fb7185"`
- **Substituir por:** `cardColor:"#f97316"`

**`src/niches/animation.js`**
- **Âncora:** `cardColor:"#60a5fa"`
- **Substituir por:** `cardColor:"#818cf8"`

**`src/niches/comics.js`**
- **Âncora:** `cardColor:"#f472b6"`
- **Substituir por:** `cardColor:"#e879f9"`

---

## Tarefa C — `validate.js`: dois checks que impedem a divergência de voltar

**Âncora:**
```javascript
// ============ SUMARIO ============
```
**Substituir por:**
```javascript
check("G20 paleta unificada: cardColor == cor da pagina (--amber) em TODOS os nichos", () => {
  const html = fs.readFileSync(path, "utf8");
  const faltando = [], divergente = [];
  Object.keys(T.NICHES).forEach(id => {
    const re = new RegExp('html\\[data-niche="' + id + '"\\]\\{[^}]*--amber:\\s*(#[0-9a-fA-F]{6})');
    const m = html.match(re);
    if(!m){ faltando.push(id); return; }
    const pagina = m[1].toLowerCase();
    const card = String(T.NICHES[id].cardColor || "").toLowerCase();
    if(pagina !== card) divergente.push(id + " card:" + card + " pagina:" + pagina);
  });
  assert(faltando.length === 0, "nicho sem bloco [data-niche] no CSS -> " + faltando.join(", "));
  assert(divergente.length === 0, "card e pagina com cores diferentes -> " + divergente.join(" | "));
  return "ok";
});

check("G21 paleta sem colisao: nenhuma cor principal repetida entre nichos", () => {
  const vistos = {};
  const dup = [];
  Object.keys(T.NICHES).forEach(id => {
    const c = String(T.NICHES[id].cardColor || "").toLowerCase();
    if(vistos[c]) dup.push(c + " -> " + vistos[c] + " e " + id);
    vistos[c] = id;
  });
  assert(dup.length === 0, "cor principal repetida -> " + dup.join(" | "));
  return "ok";
});

// ============ SUMARIO ============
```

> **G20 é o check que faltava desde sempre:** ele lê o CSS do `index.html` e compara com o `cardColor` do
> módulo. Nicho novo sem bloco `[data-niche]` (o caso do career) agora **quebra o harness** em vez de
> herdar silenciosamente a cor do dev.

---

## Tarefa D — blindar o hook contra CRLF (a nota que você levantou na spec0043)

Crie/edite **`.gitattributes`** na raiz:
```
* text=auto
.githooks/pre-commit text eol=lf
*.sh text eol=lf
```
Depois:
```bash
git add --renormalize .githooks/pre-commit
```
> Sem isso, num clone novo com `core.autocrlf=true` o shebang vira `#!/bin/sh\r` → *bad interpreter* → o
> hook morre calado, que é o pior modo de um portão de segurança falhar.

---

## Tarefa E — docs (append)

- **`meta/DECISIONS.md` → D-074:** paleta unificada — **uma cor principal por nicho**, card e página
  passam a ler a mesma fonte; G20/G21 travam a invariante. Registre a causa raiz (nicho novo sem bloco
  `[data-niche]` herdava o tema padrão) e a redistribuição de matizes. **D-075:** `.gitattributes` fixa
  LF no hook.
- **`meta/IDEAS.md`:** **i-N49 → FECHADA**.
- **`meta/STATUS.md`:** v1.68.0 → **v1.68.1**; testes **18/18 · 49/49 · 0 erros**.
- **`meta/CHANGELOG.md`:** entrada da v1.68.1.

---

## Verificação

1. `/check-spec meta/specs/260714-spec0044-paleta-unificada.md` → APLICÁVEL.
2. `node build.js` → 18 módulos · `node validate.js index.html` → **18/18 · 49/49 · 0 erros**
   (o hook de pré-commit vai rodar isso sozinho de qualquer forma).
3. **Visual, obrigatório** (é uma spec de cor): abra o `index.html`, percorra a grade de escolha e depois
   entre em pelo menos **Carreira, Música, Pixel Art, Cozinha, Animação, RPG e Negócios** — o card e a
   página têm que ser a MESMA cor, e nenhum par vizinho na grade pode parecer o mesmo tom.
4. `git diff --stat` — 13 arquivos, aditivo.

---

## Commit (bloco separado, sem acento)

```bash
git add src/index.template.html index.html validate.js .gitattributes \
        src/niches/narrative.js src/niches/marketing.js src/niches/business.js src/niches/game.js \
        src/niches/pixel.js src/niches/brainstorm.js src/niches/music.js src/niches/rpg.js \
        src/niches/cuisine.js src/niches/animation.js src/niches/comics.js \
        meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/CHANGELOG.md \
        meta/specs/260714-spec0044-paleta-unificada.md
git commit -m "style(paleta): uma cor principal por nicho - card e pagina unificados (spec0044, D-074/D-075)

- template: 18 blocos [data-niche] (career era ausente e herdava o tema do dev)
- 11 cardColor realinhados; matizes redistribuidos (pixel lima, musica ciano, cozinha laranja,
  animacao indigo, hq fucsia, game esmeralda, rpg vermelho, negocios bege)
- G20 card == pagina, G21 sem cor repetida -> 18/18, 49/49, 0 erros
- .gitattributes fixa LF no .githooks/pre-commit (evita bad interpreter em clone novo)"
git push
```
