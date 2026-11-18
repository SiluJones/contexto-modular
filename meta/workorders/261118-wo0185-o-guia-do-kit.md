# WO 0185 — o GUIA-DO-KIT: o que tem gatilho observavel sai do CEREBRO da abertura para um arquivo do kit que o update troca inteiro (C127, v1.151.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.151.0** (`D-188`). A WO A do enxugamento do CEREBRO (analise `261118`, nova nesta WO), decidida pelo dono em 2026-11-18 como recomendada.
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `34f3494`, `main` = `origin/main`; harness em 19/19 · 127/127 · 0 erros, v1.150.0.
> **Base:** a decisao do dono em 2026-11-18 («Decido a analise 261118 como recomendada: E1 + E2 + teto em duas WOs, o GUIA-DO-KIT.md com natureza do-kit, a Medicao delegada fica, e a WO B espera dois eventos de vizinho»).
> **Ancoras lidas em:** HEAD `34f3494` («feat(kit): o custom composto cabe no teto ... (wo0184, D-187, v1.150.0)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-18; `git status --short` de partida: `?? .claude/launch.json` (so ele). Relatorio `261118-0220` (apply wo0184) lido inteiro; o handoff `261118` lido inteiro.
> **Verificado pelo chat:** replica do HEAD com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **1.039.463 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `948078b039188b39c58ba6190c883f57445fd188`; harness inteiro = **128/128**, 19/19 (`C54` verde em v1.151.0; `C28` identico ao da wo0184: padrao 5985/6900 · +Code 549/550 · combo+SO 7341/7600). O CEREBRO do `design` no canal pasta 102.137 → 82.544 bytes, o GUIA dele 22.839. Tres provas negativas do `C127`, vermelhas e restauradas (conferido por `cmp` do `index.html`): a sonda de volta ao CEREBRO → «dev: «Sonda e exploração» ainda no CEREBRO | dev: linha do GUIA repetida…»; o gatilho da carta sem o ponteiro → «dev: o gatilho da carta nao aponta o GUIA»; o manifesto sem a proibicao → «o manifesto nao proibe o transplante de volta».
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

O CEREBRO gerado e lido inteiro na abertura de toda conversa e tinha triplicado desde julho (o do `design`, 33.468 → 102.137 bytes), sem teto; quatro vizinhos reclamaram. A analise `261118` mediu cada secao (bytes, os checks que a prendem, quando serve) e a experiencia de fora, inclusive a contraria (a Vercel: skill nao chamada em 56% dos casos). (1) Nasce `meta/GUIA-DO-KIT.md` com as quatro secoes de gatilho observavel, com o texto igual: o update, a transferencia de reserva (so no canal pasta), a sonda e a correspondencia. (2) O CEREBRO aponta cada uma: duas linhas da tabela de gatilhos, duas secoes-ponteiro e uma linha no indice; as Instrucoes nao mudam. (3) Natureza nova no pacote, `do-kit` («substituir inteiro»); o manifesto e o prompt dizem que as secoes movidas nao voltam pelo transplante. (4) O GUIA nos downloads, em `meta/`. `C127` novo; treze checks passam a ler o CEREBRO e o GUIA juntos (o `CG` do harness: muda a fonte, nao a assercao) e o `C114` aceita o GUIA como arquivo universal. Registro: CHANGELOG, STATUS (o hash da wo0184 e esta WO), DECISIONS (`D-188`), IDEAS (a `i-N99` nova e cinco titulos), a analise (nova, decidida) e o log de 18/11.

## Inventario

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | `buildGuiaKit` e as quatro funcoes de secao (texto movido sem mudar); ponteiros no CEREBRO; indice com o GUIA; `do-kit` no pacote, no manifesto e no prompt; o GUIA nos downloads; KIT_VERSION 1.151.0 | 143 / 84 | crlf | `89b056b307c3afc0156359fbadbd4e27d8873df4` |
| `validate.js` | o SHIM expoe `buildGuiaKit`; `CG`; treze checks leem CEREBRO + GUIA; `C114` aceita o GUIA; `C127` | 88 / 20 | crlf | `a71c3e0a44fabea2b76753e3820eed2a375e3972` |
| `meta/CHANGELOG.md` | v1.151.0 | 9 / 1 | lf | `00720e1e23b542278036a488d9d4d4c776413742` |
| `meta/DECISIONS.md` | `D-188` | 14 / 0 | crlf | `f499e7f372dd33da88c572610a4a46cc238f8cea` |
| `meta/IDEAS.md` | a `i-N99` nova (a WO B espera o GUIA aberto no campo; o painel sem o GUIA); titulos de `i-N98`, `i-N95`, `i-N93`, `i-N92` e `i-N58` | 8 / 5 | lf | `788e7242f7c4705bd85edb960888a1ece90778c6` |
| `meta/STATUS.md` | carimbo v1.151.0 e 128; hash e custo da wo0184; bullet desta WO | 4 / 2 | lf | `4b0e25b41eecbfdd896421131f907227f268a06c` |
| `logs/2026-11-18.md` | a conversa KCM 29: a analise e a WO A | 16 / 0 | lf | `c2b0ae4e05a57893a7430dd897bbf9b2ad73e7ff` |
| `meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md` | NOVO (analise do chat; decidida) | 157 linhas | lf | `37bb66a6cef2b7ef9c1ff8f13bf4d2687f0d78a1` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **1.039.463 bytes** e o `sha1sum` sem CR acima). Nao rastreados que ficam fora: `.claude/launch.json`.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `34f3494`. Diferente: PARE.
2. `git status --short` = exatamente os sete ` M` do inventario, `?? .claude/launch.json`, `?? meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md` e `?? meta/workorders/261118-wo0185-o-guia-do-kit.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario; `git diff --numstat` dos sete = a coluna + / − (282 acrescentadas, 112 removidas); `wc -l` da analise = 157. Diferente: PARE.
4. Leia o diff inteiro e a analise nova. No template, o bloco movido aparece como removido de `buildClaudeMd` e acrescentado nas funcoes `guiaSecao*`: confira que o texto e o mesmo (a unica troca dentro dele e «A medição delegada acima responde» → «A medição delegada (no CEREBRO) responde»).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `948078b039188b39c58ba6190c883f57445fd188`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **128/128**. Registre cruas as linhas do `C127`, do `C54` e do `C28`. Vermelho: PARE.
7. Verde: `git add` dos caminhos do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md logs/2026-11-18.md meta/analises/261118-ANALISE-o-enxugamento-do-cerebro.md index.html meta/workorders/261118-wo0185-o-guia-do-kit.md
```

```
git commit -m "feat(kit): o GUIA-DO-KIT - update, reserva, sonda e correspondencia saem do CEREBRO da abertura para um arquivo do kit que o update troca inteiro; o CEREBRO aponta cada secao; C127 (wo0185, D-188, v1.151.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: chamadas de shell e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado, o sha1 sem CR, e se o hook imprimiu saida. Se o commit sair com linha acrescentada por voce, diga. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0185.txt` (`date +%y%m%d-%H%M`, rodado na hora).
