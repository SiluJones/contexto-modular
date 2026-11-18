# WO 0184 — o custom composto cabe no teto, e tres nichos com dado de campo: o modelo financeiro por tipo de negocio, o que se perde no companion, o curriculo na primeira conversa da carreira (C126, v1.150.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.150.0** (`D-187`). A WO C da leva de novembro (analise `261117`, `D-185`), com a `i-N98` (o Cinzeiro) incluida pelo dono.
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `dbeb79f`, `main` = `origin/main`; harness em 19/19 · 126/126 · 0 erros, v1.149.0.
> **Base:** a `D-185` (esta e a K4) e o pedido do dono em 2026-11-18 («escreva a WO C, com o teto do custom incluido»).
> **Ancoras lidas em:** HEAD `dbeb79f` («feat(kit): o update atrasado e o DECISIONS ... (wo0183, D-186, v1.149.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-18; `git status --short` de partida: ` M logs/2026-11-18.md`, ` M meta/IDEAS.md` (do chat, o Cinzeiro, versionados aqui) e `?? .claude/launch.json`. Relatorio `261118-0141` (apply wo0183) lido inteiro; o aviso de lido `261118-cinzeiro-leu-kcm-01` lido inteiro e movido para `notas-arquivadas/`. Lido fora do repo: o Cinzeiro (`Game Design\Cinzeiro`), a sonda `261118-0101` e o pacote custom v1.149.0 deles.
> **Verificado pelo chat:** replica do HEAD com os onze arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.033.113 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `93a04f42ae6b8d3f2a207374846a17339f41f37a`; harness inteiro = **127/127**, 19/19 (`C54` verde; `C28` sem mudanca). O composto do Cinzeiro (narrative + game + pixel + music) reproduzido: 16.358 caracteres antes, **6.117** depois (6.666 com o Code). Duas provas negativas do `C126`, vermelhas e restauradas (conferido por `cmp`): sem o curto na composicao → «a composicao perdeu o papel curto ou a marca so-no-CEREBRO»; sem a compactacao → «custom composto acima do teto -> narrative+game 8399 | …». A base do CEREBRO nao muda (a leva fecha em 1.166 dos 1.500 bytes).
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

(1) O custom de quatro nichos do Cinzeiro gerou Instrucoes de 16.386 caracteres (teto 6.900): a composicao perdia o papel curto dos arquivos e dos comportamentos e a marca «so no CEREBRO» das convencoes, e juntava as saidas pelo rotulo inteiro. Agora os tres atravessam a composicao, a saida se junta pelo nome, e o custom — so ele — encolhe por niveis quando passa do teto (convencoes → ponteiro; comportamentos e saidas → so o nome; arquivos → so o nome). (2) Negocios: o `MODELO-FINANCEIRO.md` por tipo de negocio (startup, varejo, B2G), o prompt H, varejo fisico e B2G nos tipos, ciclo financeiro e ABC × PQR nas lentes, «Varios» no Escopo, a vigencia do valor legal (`i-N88` itens 3 a 6 e 9). (3) Companion: «o que se perde se nao for feito agora» (`i-N84` item 3). (4) Carreira: o curriculo na primeira conversa (`i-N82` item 4). `C126` novo. Registro: CHANGELOG, STATUS (o hash da wo0183 e esta WO), DECISIONS (`D-187`), IDEAS (a `i-N98` nova e quatro titulos), a analise e o log de 18/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | a composicao preserva o curto e a marca, a saida se junta pelo nome; buildInstr com os niveis do custom; KIT_VERSION 1.150.0 | 36 / 11 | crlf | `75a5a2e30a8c860388da6d6949bc3e5c87db1beb` |
| `src/niches/business.js` | os tipos e as lentes novos, o Escopo «Varios», a vigencia, o MODELO-FINANCEIRO por tipo, o prompt H | 32 / 7 | lf | `cfab6f4ca3d990fc4c1784f2215bf4af9bafa7b5` |
| `src/niches/companion.js` | «o que se perde» no ARMADILHAS e na rota | 9 / 0 | lf | `c8aaf333afd8ec78d8cf6889dc1aada7004a3a8f` |
| `src/niches/career.js` | o curriculo na primeira conversa (gatilho e CONTEXT) | 2 / 0 | lf | `a955a125e7353cf50a6f0f5a466b7b8029752bb8` |
| `validate.js` | o SHIM expoe a composicao; `C126` | 38 / 1 | crlf | `488e43330d82bcdb0057b46741a71bbe85a1928f` |
| `meta/CHANGELOG.md` | v1.150.0 | 9 / 1 | lf | `b21e09d74aaf73df57c9efcac29b6357b78277ca` |
| `meta/DECISIONS.md` | `D-187` | 12 / 0 | crlf | `607aa53115b80df077154ee8cd387dcbd5407180` |
| `meta/IDEAS.md` | a `i-N98` nova (o Cinzeiro, com o aviso de lido dele); quatro titulos (`i-N98`, `i-N88`, `i-N84`, `i-N82`) | 7 / 3 | lf | `14f496947c4fbf01ead146e97b407907fbe699c6` |
| `meta/STATUS.md` | carimbo v1.150.0 e 127; hash e custo da wo0183; bullet desta WO | 3 / 2 | lf | `dd1986469ea647add5cce6fa1730422a0d5e1b89` |
| `meta/analises/261117-ANALISE-a-leva-de-novembro.md` | a linha Vira | 1 / 1 | lf | `aad6cb3ae7ea313abffad8b6e9ed9efa62db96f5` |
| `logs/2026-11-18.md` | o Cinzeiro, o aviso de lido dele e a WO C | 21 / 0 | lf | `01d41cba12c38a6f8d0ad18e48d417d3c170001d` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.033.113 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `dbeb79f`. Diferente: PARE.
2. `git status --short` = exatamente os onze ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261118-wo0184-o-custom-no-teto-e-tres-nichos.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos onze = os do inventario, e `git diff --numstat` = a coluna + / − (170 acrescentadas, 26 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `93a04f42ae6b8d3f2a207374846a17339f41f37a`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **127/127**. Registre cruas as linhas do `C126`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261117-ANALISE-a-leva-de-novembro.md logs/2026-11-18.md index.html meta/workorders/261118-wo0184-o-custom-no-teto-e-tres-nichos.md
```

```
git commit -m "feat(kit): o custom composto cabe no teto - o curto atravessa a composicao e o custom encolhe por niveis; modelo financeiro por tipo de negocio, o que se perde no companion, o curriculo na primeira conversa; C126 (wo0184, D-187, v1.150.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0184.txt` (`date +%y%m%d-%H%M`, rodado na hora).
