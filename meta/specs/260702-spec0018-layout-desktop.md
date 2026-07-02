# Spec — Layout desktop: paineis lado a lado, nav fixa e sem "pulo" ao trocar opcoes

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/index.template.html`** (CSS do casco) -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260702-spec0018-layout-desktop.md`**
> Config: **Opus + esforco Alto** (CSS de layout; testar visualmente depois).

## Contexto (escopo definido pelo usuario)
Foco **desktop** (a ferramenta e usada em PC; mobile fica como ideia futura, i-N33). Tres ajustes:
1. **Paineis lado a lado por mais tempo:** o `.builder` (opcoes 1.3fr + saida 1fr) colapsa para 1 coluna cedo demais (em 900px). Manter lado a lado ate ~700px — aproveitar o espaco horizontal quando existe.
2. **Nav vira barra superior FIXA (nao estatica):** hoje em <=900px a `.rail` vira `position:static` e rola para fora da tela. Deve continuar **sticky** (barra superior fixa), para o comportamento ser "semelhante independente do tamanho da tela".
3. **Sem "pulo" ao apertar opcoes:** o painel de saida `.out` e `height:fit-content` (muda de tamanho conforme o conteudo) e a `.view` anima com `translateY`. Isso causa layout shift que incomoda. Estabilizar: reservar altura no `.out` e suavizar a troca.

**NAO fazer:** nao colapsar para 1 coluna no desktop; nao mexer no visual (cores/tipografia); nao tocar no mobile alem do que ja existe.

## Tarefa A — `.builder` colapsa so em telas estreitas (nao em 900px)

**A.1** No `@media (max-width: 900px)`, **remover** a linha que colapsa o builder:
**Ancora:** `    .builder{grid-template-columns:1fr}` (dentro do bloco `@media (max-width: 900px)`)
**Acao:** REMOVER essa linha do bloco 900px (o builder segue 2 colunas ate o novo breakpoint).

**A.2** Criar um breakpoint proprio para o builder. **Apos** o fechamento do `@media (max-width: 560px)` (a linha `}` antes de `</style>`), **inserir**:
```
  @media (max-width: 700px){
    .builder{grid-template-columns:1fr}
    .out{position:static;max-height:none}
  }
```
Assim: >700px = 2 colunas lado a lado (com `.out` sticky); <=700px = empilha.

**Diff esperado:** -1 linha no bloco 900px, +4 linhas (novo @media 700px).

## Tarefa B — rail vira barra superior FIXA em <=900px

No `@media (max-width: 900px)`, na regra `.rail{...}`, **trocar** `position:static` por `position:sticky;top:0;z-index:30`.
**Ancora:** `.rail{width:auto;flex:none;height:auto;position:static;border-right:none;border-bottom:1px solid var(--line-soft);flex-direction:column}`
**Substituir por:**
```
    .rail{width:auto;flex:none;height:auto;position:sticky;top:0;z-index:30;border-right:none;border-bottom:1px solid var(--line-soft);flex-direction:column;background:rgba(22,19,13,.92);backdrop-filter:blur(10px)}
```
(o fundo semi-opaco + blur garante legibilidade quando o conteudo rola por baixo da barra fixa)
**Diff esperado:** 1 linha por 1 linha.

## Tarefa C — estabilizar altura (sem "pulo" ao trocar opcoes/abas)

**C.1** No `.out` (saida sticky), reservar altura minima para nao encolher/crescer com o conteudo:
**Ancora:** `.out{position:sticky;top:80px;background:var(--panel);border:1px solid var(--line-soft);border-radius:14px;padding:18px;height:fit-content;max-height:calc(100vh - 110px);display:flex;flex-direction:column;box-shadow:var(--shadow)}`
**Substituir** `height:fit-content` por `min-height:340px`:
```
.out{position:sticky;top:80px;background:var(--panel);border:1px solid var(--line-soft);border-radius:14px;padding:18px;min-height:340px;max-height:calc(100vh - 110px);display:flex;flex-direction:column;box-shadow:var(--shadow)}
```

**C.2** Suavizar a troca de view: remover o deslocamento vertical do fade (o `translateY` empurra o layout).
**Ancora:** `@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`
**Substituir por:**
```
@keyframes fade{from{opacity:0}to{opacity:1}}
```
(mantem o fade suave de opacidade, sem o "salto" vertical)

**Diff esperado:** 2 substituicoes (1 em `.out`, 1 no keyframe).

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js index.html
```
**17/17, 0 erros.** Depois, ABRA o index.html gerado no navegador e confira visualmente: (a) em ~800px de largura, os paineis do builder seguem LADO A LADO; (b) a nav fica fixa no topo ao rolar; (c) alternar abas e apertar toggles nao faz o painel de saida "pular" de tamanho. Se algo destoar, reporte antes de commitar.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-048: «Layout desktop: builder segue 2 colunas ate 700px (antes colapsava em 900); rail vira barra superior fixa (sticky) em <=900px em vez de estatica; .out ganha min-height e o fade perde o translateY para eliminar layout shift ao trocar opcoes/abas. Mobile e layout empilhado alternativo ficam como i-N33 (futuro).»
- **`meta/CHANGELOG.md`** — v1.46.0 no topo.
- **`meta/STATUS.md`** — append na «Ultima sessao».

## Commit (sem acento) — INCLUI o proprio arquivo da spec
```
git add src/index.template.html index.html meta/specs/260702-spec0018-layout-desktop.md meta/DECISIONS.md meta/CHANGELOG.md meta/STATUS.md
git commit -m "feat: layout desktop, paineis lado a lado, nav fixa e sem layout shift (D-048)" -m "builder segue 2 colunas ate 700px; rail sticky em <=900px; .out min-height e fade sem translateY para eliminar o pulo ao trocar opcoes; harness 17/17"
git push
```
