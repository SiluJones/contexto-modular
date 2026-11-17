# WO 0179 — as chaves do KCM no navegador: prefixo kcm:, migracao das kit- pelo nome exato, e esquecer so o que e do KCM (C123, v1.147.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.147.0** (`D-184`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `1e89866`, `main` = `origin/main`; harness em 19/19 · 123/123 · 0 erros, v1.146.0.
> **Base:** a `i-N81` (a carta 02 do Cancioneiro, 05/11) e o pedido do dono em 2026-11-17 («siga com a i-N81, as chaves do KCM no navegador»).
> **Ancoras lidas em:** HEAD `1e89866` («docs(meta): o historico de versoes completo ... (wo0178)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-17; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261117-0930` (apply wo0178) lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os sete arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.017.868 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `1729ccbba53960e1edc53ce5e4017b68828360d1`; harness inteiro = **124/124**, 19/19. Cinco provas negativas do `C123`, vermelhas e restauradas (conferido por `cmp`): a migracao sobrescreve a nova → «a migracao sobrescreveu uma chave nova que ja existia»; nao apaga a antiga → «a chave antiga ficou depois da migracao: kit-niche»; o prefixo antigo → «chave do KCM sem o prefixo kcm:»; laco por indice no esquecer → «o KCM percorre o localStorage por indice»; `clear()` no esquecer → «o KCM chama localStorage.clear()». **Prova de vida do boot** (o harness nao roda o `boot()`): o `index.html` inteiro num JSDOM com `kit-niche`, `kit-state-dev` e uma chave alheia semeadas → depois da abertura, so `kcm:niche`, `kcm:state:dev` e a alheia; o nicho Desenvolvimento reabre; o botao de esquecer deixa so a alheia.
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

Aberto por `file://`, o navegador da um armazenamento so a todas as paginas locais. As cinco chaves do KCM passam de `kit-` a `kcm:`; `migrateKcmStorage()` no `boot()` migra as antigas uma vez, pela lista exata, sem sobrescrever a nova; a engrenagem ganha a secao «Neste navegador» com «Esquecer o que o KCM guardou» (`forgetKcmStorage()` + recarregar). Nunca `clear()`, nunca laco por prefixo. `C123` novo. Registro: CHANGELOG, STATUS (o hash da wo0178 e esta WO), DECISIONS (`D-184`), IDEAS (`i-N81` resolvida) e o log de 17/11. A carta 08 ao Cancioneiro fica na pasta-pai dele.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | as cinco chaves com `kcm:`; `LS_LEGADO`, `kcmStorageKeys`, `migrateKcmStorage`, `forgetKcmStorage`; a migracao no `boot()`; a secao «Neste navegador» e o botao; `KIT_VERSION` 1.147.0 | 45 / 6 | crlf | `b320ad058619aa4a5b5680aba263d6c5ce276755` |
| `validate.js` | o SHIM expoe as funcoes, as chaves e o `localStorage`; `C123` | 37 / 1 | crlf | `55c688c517da70f263a9afb032f62813ab1bf8f0` |
| `meta/CHANGELOG.md` | v1.147.0 | 9 / 1 | lf | `7abcbdee754a680fa49e00190ddbc562f2efa328` |
| `meta/DECISIONS.md` | `D-184` | 12 / 0 | crlf | `9f66c99a7e4d20beca7fccac97f4df39386006a7` |
| `meta/IDEAS.md` | `i-N81` resolvida | 1 / 1 | lf | `f49dcf798626abba14927ccb197d442f147365ba` |
| `meta/STATUS.md` | carimbo v1.147.0 e 124; hash e custo da wo0178; bullet desta WO | 3 / 2 | lf | `808539f12a9168b82bf9e2b7e0d938d71801a3a6` |
| `logs/2026-11-17.md` | a continuacao da conversa | 12 / 0 | lf | `7f496559ae339c5bf2f1202677ee152963cceee8` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.017.868 bytes** e o `sha1sum` sem CR acima). Fora do repo (nao versionar): a carta `261117-kcm-para-cancioneiro-08-as-chaves-do-kcm.md`, na pasta-pai do Cancioneiro. Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `1e89866`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261117-wo0179-as-chaves-do-kcm-no-navegador.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos sete = os do inventario, e `git diff --numstat` = a coluna + / − (119 acrescentadas, 11 removidas). Diferente: PARE.
4. Leia o diff inteiro.
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `1729ccbba53960e1edc53ce5e4017b68828360d1`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **124/124**. Registre cruas as linhas do `C123`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-17.md index.html meta/workorders/261117-wo0179-as-chaves-do-kcm-no-navegador.md
```

```
git commit -m "feat(kit): as chaves do KCM no navegador - prefixo kcm:, migracao das kit- pelo nome exato, esquecer so o que e do KCM; C123 (wo0179, D-184, v1.147.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0179.txt` (`date +%y%m%d-%H%M`, rodado na hora).
