# spec0050 — Nomes com opções fundamentadas nos nichos de ficção (C2)

> **Raia:** Code. **Config:** Sonnet + esforço Alto. Windows: **PowerShell**.
> **Pré-requisito:** `v1.72.0` (pós-spec0049, commit `4d84985`, pushado), harness **18/18 · 55/55 · 0 erros**.
> **Resultado esperado:** **18/18 nichos · 56/56 checagens · 0 erros.**
> **⚠️ Já validado:** aplicado numa reconstrução pós-0049 em sandbox (`build` + `validate`) → verde
> **18/18 · 56/56**. Âncoras byte-exatas e únicas (CRLF).
> **Rode `/check-spec` antes de aplicar.**
>
> **Origem:** análise 260716 §C, item **C2** — decisão do usuário (260717-1313.txt): *não* virou regra
> universal (dev/produto já resolvem com nome temporário); o alvo é a **ficção**, onde há muitos
> personagens/lugares e o autor entrega nomes temporários ruins que quer trocar. Escopo: **narrativa** (foco)
> + **game/rpg/comics** (mesmo caso: elenco e mundo). Fora: music/design/animation/dev/etc.

## O quê

A regra «nomes vêm com 2–4 opções fundamentadas» existia **só na narrativa**, presa ao modo Direção Criativa.
Esta spec: (a) move-a para valer em **ambos os modos** da narrativa e a enriquece (recomendação por opção; não
precisa ser menu; honra nome temporário que valha manter); (b) adiciona o mesmo comportamento a **game, rpg e
comics**. **Teto:** narrativa **inalterada** (6702 — o enriquecimento cresce só o CEREBRO); game 6798, rpg
6032, comics 5692 — todos sob 6900 (game é o mais apertado, folga 102).

---

## Tarefa A — `src/niches/narrative.js`

### A1 — remove o naming do bloco Direção Criativa (vai virar «ambos os modos»)
**Âncora (fragmento único, remover):** `nomes nunca são pedidos sem 2–4 opções fundamentadas; `
**Substituir por:** *(nada — apagar o fragmento, inclusive o «; » final)*

### A2 — naming enriquecido em «Em AMBOS os modos»
**Âncora:** `Em AMBOS os modos: marca o que inventou`
**Substituir por:**
```
Em AMBOS os modos: nomear personagem, lugar ou elemento vem sempre com 2–4 opções fundamentadas e uma recomendação para cada — não um nome isolado nem imposto, e não precisa ser menu formal; nome temporário que valha manter é sinalizado, com alternativas mesmo assim. Marca o que inventou
```

---

## Tarefa B — `game.js`, `rpg.js`, `comics.js`: behavior `naming`

Em cada arquivo, insira a entrada `naming` **antes** do primeiro behavior. O texto é **o mesmo** nos três.
A entrada a inserir (com a indentação de 4 espaços):
```javascript
    ["naming","Nomes vêm com opções fundamentadas","Ao batizar personagem, lugar, facção, sistema, item — qualquer elemento nomeável — nunca peça um nome isolado nem imponha um: ofereça 2–4 opções fundamentadas, cada uma com uma recomendação curta. Não precisa ser menu formal; apresente do jeito mais prático. Se o autor já deu um nome temporário que vale manter, sinalize isso e ofereça alternativas mesmo assim."],
```

- **`src/niches/game.js`** — Âncora: `    ["experience_first",` → insira a entrada `naming` **imediatamente antes** dessa linha.
- **`src/niches/rpg.js`** — Âncora: `    ["lore_memory",` → insira **antes**.
- **`src/niches/comics.js`** — Âncora: `    ["continuity_memory",` → insira **antes**.

---

## Tarefa C — `src/index.template.html`: bump `KIT_VERSION`
**Âncora:** `const KIT_VERSION = "1.72.0";` → **Substituir por:** `const KIT_VERSION = "1.73.0";`

---

## Tarefa D — `validate.js`: check **C12**

**Âncora:** `check("C11 universais leva C`
**Substituir por** (insira C12 ANTES do C11, que permanece logo depois):
```javascript
check("C12 nomes com opcoes nos nichos de ficcao (spec0050): narrativa ambos os modos + game/rpg/comics", () => {
  const nn=T.buildClaudeMd(T.normNiche(T.NICHES.narrative));
  assert(/Em AMBOS os modos: nomear/.test(nn),"narrativa: naming nao esta em ambos os modos");
  assert(!/nomes nunca são pedidos sem/.test(nn),"narrativa: fragmento antigo de naming ainda no modo DC (duplicado)");
  ["game","rpg","comics"].forEach(id=>{
    const md=T.buildClaudeMd(T.normNiche(T.NICHES[id]));
    assert(/Nomes vêm com opções fundamentadas/.test(md),id+": sem behavior de naming");
  });
  return "ok";
});

check("C11 universais leva C
```

---

## Tarefa E — docs (append)

- **`meta/DECISIONS.md` → D-083:** C2 (análise 260716 §C) resolvido como comportamento de **ficção**, não
  universal (decisão do usuário: dev/produto já resolvem com nome temporário; naming universal conflitaria com
  P2). Narrativa: naming movido p/ ambos os modos + enriquecido (recomendação por opção, não menu-limitado,
  honra nome temporário). game/rpg/comics: novo behavior `naming`. Check C12. Teto: narrativa inalterada;
  game 6798/rpg 6032/comics 5692 (todos < 6900).
- **`meta/IDEAS.md`:** C2 → **INCORPORADA** (ficção); registrar que a extensão a music/design/animation foi
  **descartada** (naming lá é raro/próximo do dev). §C fechada por completo.
- **`meta/STATUS.md`:** v1.72.0 → **v1.73.0**; testes **18/18 · 56/56 · 0 erros**; `KIT_VERSION 1.73.0`;
  somar C12; anotar que **game está em 6798/6900 (folga 102)** — vigiar em futuras adições a game.
- **`meta/CHANGELOG.md`:** entrada v1.73.0 no topo.

---

## Verificação

1. `/check-spec` → APLICÁVEL.
2. `node build.js` · `node validate.js index.html` → **18/18 · 56/56 · 0 erros**. C12 verde.
3. **Teto:** `N[narrative]` = 6702 (inalterado), `N[game]` = 6798, `N[rpg]` = 6032, `N[comics]` = 5692 — todos < 6900.
4. **Visual:** nicho **Narrativa** → CEREBRO mostra o naming em «Em AMBOS os modos» (não mais só na Direção
   Criativa); **game/rpg/comics** → behavior «Nomes vêm com opções fundamentadas» presente.
5. `git diff --stat` — narrative/game/rpg/comics + template (KIT_VERSION) + validate.js + index.html + 4 meta-docs + a spec.

---

## Commit (bloco separado, sem acento)

```bash
git add src/niches/narrative.js src/niches/game.js src/niches/rpg.js src/niches/comics.js \
        src/index.template.html index.html validate.js \
        meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md \
        meta/specs/260716-spec0050-nomes-com-opcoes-ficcao.md
git commit -m "feat(ficcao): nomes com opcoes fundamentadas na narrativa (ambos os modos) + game/rpg/comics (spec0050, D-083)

- narrativa: naming movido do modo Direcao Criativa para ambos os modos, enriquecido
  (recomendacao por opcao, nao menu-limitado, honra nome temporario que valha manter)
- game/rpg/comics: novo behavior 'naming'
- C2 resolvido como comportamento de ficcao, nao universal (decisao do usuario)
- check C12; KIT_VERSION 1.73.0; teto: narrativa inalterada, game 6798 (folga 102)
- 18/18, 56/56, 0 erros"
git push
```
