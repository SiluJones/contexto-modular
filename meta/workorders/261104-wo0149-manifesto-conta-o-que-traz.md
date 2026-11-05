# WO 0149 — o manifesto do pacote conta e nomeia o que o pacote traz, e as skills do Code saem de uma lista so

> **Forma:** conferencia (metodo C, piloto 6/10, D-170) · **Tipo:** mista — CODIGO (template + harness) e DOC (registros). **A segunda de codigo do piloto.** Corta a **v1.134.0** (`D-158`, `D-172`).
> **Config sugerida:** modelo padrao, esforco baixo. Nada a editar: conferir, gerar o `index.html`, validar, publicar.
> **Pre-requisito:** HEAD = `4175091`, `main` = `origin/main`; harness em 19/19 · 113/113 · 0 erros, v1.133.0.
> **Base:** a `i-N76`, item 1 (a secao de feedback do Cancioneiro, lida em 2026-10-31: o manifesto diz «Quatro arquivos… as duas skills» e sao cinco, medido por eles em tres pacotes e conferido no v1.133.0); o pedido do dono em 2026-11-02 e 2026-11-04 («escreva / retome a wo0149»).
> **Ancoras lidas em:** HEAD `4175091` («docs(meta): o pacote v1.133.0 e as cartas aos vizinhos, a leitura de 31/10 e o Cancioneiro no livro (wo0148, piloto 5/10 do metodo C)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-02 e de novo em 2026-11-04; `git status --short` de partida, antes das gravacoes do chat: so `?? .claude/launch.json`. Relatorio `261102-0849` (apply wo0148) lido inteiro e movido para `../notas-arquivadas/`.
> **Verificado pelo chat:** replica do HEAD (`git archive HEAD | tar -x`, fora do repo) com os sete arquivos por cima e o `node_modules` do dono: `node build.js` = 942.009 bytes, sha1 sem CR o do inventario; harness em **duas fatias** (a VM do desktop nao roda o inteiro numa chamada: 90 s + 69 s), somando **114/114** e 19 nichos; depois da ultima gravacao de IDEAS, STATUS e log, de novo os quatro checks que leem a casa (`C54`, `C102`, `C103`, `C43`): verdes. O `C103` pegou um caminho de outro repo citado como `meta/...` no IDEAS, e o chat o reescreveu antes da entrega.
> **Proximo comando:** nenhum — no piloto nao ha `/wrap`.

> Metodo C (D-170): o chat JA GRAVOU tudo na arvore e ja rodou build + harness numa replica do HEAD com os arquivos dele por cima. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O manifesto do pacote de atualizacao escreve a mao uma lista que o gerador mudou: desde que a `sondar` entrou no kit do Code (v1.127.0), tres frases dele continuam dizendo que as skills do Code sao duas. (1) A linha do carimbo: «Quatro arquivos deste pacote terminam em `Gerado pelo Kit…`: o CEREBRO, o modelo de WO e as duas skills» — sao cinco com o Code. (2) A nota do `skills-do-nicho`: «As skills do modo Code — `apply-wo` e `wrap`». (3) O marcador do `skills-do-nicho`: o sinal e existir em `.claude/skills/` algo «alem de `apply-wo` e `wrap`» — com a `sondar` la, um projeto com o Code concluia que tinha skills do nicho ligadas. O Cancioneiro mediu so o (1); o (2) e o (3) o chat achou ao ler a funcao.

## O que muda no codigo (para ler o diff com o mapa)

- `src/index.template.html`: logo depois de `UPDATE_AFFIX`, a lista `CODE_KIT_SKILLS` (`apply-wo`, `wrap`, `sondar`, com a chave em `buildCodeKitFiles` e o papel) e dois ajudantes, `listaPt` e `numPt`. No `buildUpdatePack`, as tres pushes das skills do Code viram um `forEach` sobre a lista (mesma saida, mesma ordem). No `buildUpdateManifest`, a nota e o marcador do `skills-do-nicho` listam pela mesma lista, e a linha do carimbo conta e nomeia os arquivos de `files` cujo conteudo traz `Gerado pelo Kit de Contexto Universal v<versao>` (singular quando e um). O exemplo «(uma sonda, um lint)» vira «(um lint, um formatador)», porque a sonda agora e do kit. `KIT_VERSION` 1.133.0 → 1.134.0.
- `validate.js`: `C113` novo (logo depois do `C112`). Nos 19 nichos, com o Code ligado e desligado, a linha do carimbo diz o numero e os nomes dos arquivos que o trazem; toda skill que so viaja com o Code (pacote com o Code menos pacote sem ele) esta na nota e no marcador. Nao copia a lista do gerador.

**Medido na replica:** `dev` com o Code, 5 carimbos (o CEREBRO, `apply-wo`, `wrap`, `sondar`, o modelo de WO); sem o Code, 1. **Prova negativa:** com «Quatro arquivos…» fixo de volta, o `C113` acusa no primeiro nicho («o pacote traz 5 carimbo(s) e o manifesto diz outra coisa»); com a nota de volta a «`apply-wo` e `wrap`», acusa «a skill sondar viaja com o Code e a nota… nao a lista».

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat (arquivo novo: `wc -l`); `sha1sum` do arquivo da arvore. Fim de linha na arvore (`git ls-files --eol`): `src/index.template.html`, `validate.js` e `meta/DECISIONS.md` **CRLF**; os outros LF.

| Arquivo | O que muda | + / − | sha1sum |
|---|---|---|---|
| `src/index.template.html` | `CODE_KIT_SKILLS`, `listaPt`, `numPt`; as skills do Code por `forEach`; nota, marcador e carimbo do manifesto derivados; `KIT_VERSION` 1.134.0 | 23 / 10 | `91a4c317d672b246f158715aff2cf11a2461e3de` |
| `validate.js` | `C113` novo | 44 / 0 | `caf5e2fe5fbe1ce483803024835fbb0a24d61328` |
| `meta/CHANGELOG.md` | v1.134.0 no topo e no cabecalho | 7 / 1 | `117c5d1048b70eeb4eb76a116d2997a83298ba79` |
| `meta/STATUS.md` | versao v1.134.0 e 114/114 com o `C113`; o hash da wo0148; o bullet desta WO | 4 / 2 | `7ef73fee185c2a89228f79b42bf8613c61e9910b` |
| `meta/IDEAS.md` | `i-N76` em parte resolvida (item 1); `i-N77` nova (permissao que nao chega a tempo, do satelite-web); `i-N78` nova (a ponte do chat grava em `.claude/`? — o aviso da carta 10 do Mapoteca refuta o CEREBRO); a linha da wo0148 na `i-N71`; livro de leitura de 2026-11-04 | 17 / 3 | `e8a601d7c40f01fc9ca1fea719df5c3b7e75e69d` |
| `meta/DECISIONS.md` | `D-172` no fim | 12 / 0 | `f6ea7c27b379bd5f658549a5e428f98f34a4c37d` |
| `logs/2026-11-04.md` (novo) | Conversa 1 do chat (02 a 04/11) | 14 linhas (`wc -l`) | `4c20d33f6139526a365f52af9d76d428a9dbc239` |

Gerado por quem aplica (`src/` muda): `index.html` com **942.009 bytes** (do template em CRLF, como na sua arvore) e `tr -d '\r' < index.html | sha1sum` = **`51a81c7be3f8e2108a10592e5fc4058e6473421e`**, medidos na replica. O sha1 sem CR e o que vale.
Fora do repo (nao versionar): nada desta WO. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `4175091`. Diferente: PARE.
2. `git status --short` = exatamente ` M meta/CHANGELOG.md`, ` M meta/DECISIONS.md`, ` M meta/IDEAS.md`, ` M meta/STATUS.md`, ` M src/index.template.html`, ` M validate.js`, `?? .claude/launch.json`, `?? logs/2026-11-04.md`, `?? meta/workorders/261104-wo0149-manifesto-conta-o-que-traz.md`. Faltou ou sobrou: PARE.
3. `sha1sum src/index.template.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-11-04.md` = os do inventario, e `git diff --numstat` = a coluna + / − (o log, `wc -l` = 14). Diferente: PARE — alguem mexeu depois do chat.
4. Leia o diff inteiro. `git ls-files --eol src/index.template.html validate.js meta/DECISIONS.md` = `w/crlf` nos tres.
5. `node build.js` → `OK: index.html (942009 bytes)`; `tr -d '\r' < index.html | sha1sum` = o do inventario. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **114/114**. Registre cruas as linhas do `C113` (esperado: **dev Code sim: 5 carimbo(s); dev Code nao: 1 carimbo(s); skills do Code: apply-wo, wrap, sondar**), do `C54` (**v1.134.0 nos tres lugares**), do `C111` (**9 pares em 152 combinacoes; pasta do pacote AAMMDD-kcm-update-v1.134.0**, com a data UTC de hoje) e do `C43` (**76 clausulas**). Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit; push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html index.html validate.js meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md logs/2026-11-04.md meta/workorders/261104-wo0149-manifesto-conta-o-que-traz.md
```

```
git commit -m "fix(kit): o manifesto do pacote conta e nomeia o que o pacote traz, e as skills do Code saem de uma lista so (wo0149, D-172)" -m "A linha do carimbo dizia Quatro arquivos e as duas skills desde a v1.127.0; agora conta os arquivos que trazem a linha (5 com o Code, 1 sem). CODE_KIT_SKILLS empacota e escreve a nota e o marcador do skills-do-nicho, que liam a sondar como skill do nicho. C113 novo, 113 para 114. i-N77 e i-N78 novas. Corta a v1.134.0. Piloto 6/10 do metodo C, a segunda de codigo."
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). O pre-commit hook roda build + harness de novo: diga se rodou e o que deu. Nao edite STATUS, DECISIONS nem log: no piloto eles sao do chat. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0149.txt` (`date +%y%m%d-%H%M`, rodado na hora).
