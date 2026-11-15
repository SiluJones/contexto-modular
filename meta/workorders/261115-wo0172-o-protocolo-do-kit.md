# WO 0172 — o protocolo do kit: as permissoes que as skills pedem, o git sem lock no update, a sobra de modo so sem artefato, e o indice do CEREBRO (C121, v1.143.0)

> **Forma:** conferencia (metodo C, D-170 e D-174) · **Tipo:** CODIGO — produto + harness + doc. Corta a **v1.143.0** (`D-181`).
> **Config sugerida:** modelo padrao, esforco medio: ha build, harness inteiro e hook.
> **Pre-requisito:** HEAD = `66b4faa`, `main` = `origin/main`; harness em 19/19 · 121/121 · 0 erros, v1.142.0.
> **Base:** a WO A da analise `261115-ANALISE-o-nicho-dev.md`, aceita pelo dono em 2026-11-15 («aceito as decisoes como voce recomendar»).
> **Ancoras lidas em:** HEAD `66b4faa` («docs(meta): a area Tools no livro de leitura (i-N93) e a analise do nicho dev, com as i-N89 a i-N93 (wo0171)»), lido com `GIT_OPTIONAL_LOCKS=0 git log -3 --oneline` em 2026-11-15; `git status --short` de partida: so `?? .claude/launch.json`. Relatorio `261115-1816` (apply wo0171) lido inteiro e arquivado.
> **Verificado pelo chat:** replica do HEAD (`git archive`) com os oito arquivos por cima e uma copia local do `node_modules` do dono: `node build.js` = **993.391 bytes**, `sha1sum` sem CR (`tr -d '\r' < index.html | sha1sum`) = `b7e99df53d097b8d00f65edebff9e66e1b42fc6b`; harness inteiro = **122/122**, 19/19 nichos. Quatro provas negativas do `C121`, as quatro vermelhas e a fonte restaurada (conferida por `cmp`): o `date` fora do `allow` → «as skills mandam rodar e o settings nao libera: date»; o `git status` sem a variavel → «o prompt do update roda o git sem GIT_OPTIONAL_LOCKS=0»; a ressalva fora do CEREBRO → «a sobra de modo sem a ressalva do modo ainda em uso»; o indice sem uma secao → «indice do CEREBRO: dev/no indice != secoes (21 x 22) | ...». O harness inteiro pegou a primeira redacao: o `G4` vermelho porque a ressalva citava o HUB no CEREBRO sem o modo grupo; a frase diz agora «a secao de projeto em grupo».
> **Proximo comando:** nenhum.

> Metodo C (D-170, D-174): o chat JA GRAVOU tudo na arvore. Voce CONFERE, GERA o `index.html` e PUBLICA: nao reescreva e nao escreva em doc nenhum. Falhou, PARE e relate — o chat corrige na arvore e atualiza esta mesma WO. **A pasta `notas-arquivadas\- Histórico - KCM (CDC)\` nao e tocada por nenhum comando desta WO.**

## Por que

A WO A da analise do `dev`, para todos os nichos: o `settings.json` do kit do Code com os comandos de leitura que as skills e o molde de WO mandam rodar (oito faltavam, e o `git show` entra junto); o git do prompt do update com `GIT_OPTIONAL_LOCKS=0`; a sobra de modo so sem artefato do modo no repositorio (CEREBRO, prompt, manifesto); as tres coisas que o update atrasado esquece (prompt); o indice de secoes gerado no topo do CEREBRO. `C121` novo. CHANGELOG, STATUS (o hash da wo0171 e esta WO), DECISIONS (`D-181`), a analise decidida, IDEAS (`i-N93` itens 1 a 4) e o log de 15/11.

## Inventario

Saido do `git status --short` e do `git diff --numstat` da arvore depois das gravacoes do chat; `sha1sum` do arquivo da arvore (com o fim de linha que ela tem).

| Arquivo | O que muda | + / − | EOL | sha1sum |
|---|---|---|---|---|
| `src/index.template.html` | o `allow` do `settings`; o git do prompt do update; `withSectionIndex` e os dois `return` do `buildClaudeMd`; a ressalva do modo em uso no CEREBRO, no prompt e no manifesto; as tres coisas do update atrasado; `KIT_VERSION` 1.143.0 | 23 / 8 | crlf | `ec481b0734dac71f005dbeb58d62511a510ca9a6` |
| `validate.js` | `C121` | 45 / 0 | crlf | `4a2ccbd56f615cc24a30d8265f57d926abcb6756` |
| `meta/CHANGELOG.md` | v1.143.0 | 10 / 1 | lf | `b33e65296c7f1e02d1c1f92db742586173819f74` |
| `meta/DECISIONS.md` | `D-181` | 10 / 0 | crlf | `2832606c975ff9fbebadcad8bd73421a34365472` |
| `meta/IDEAS.md` | `i-N93`: itens 1 a 4 resolvidos | 1 / 1 | lf | `727ac05b0edffbfea466cca7ab042d8e1c0bdb96` |
| `meta/STATUS.md` | carimbo v1.143.0 · 122/122 + C121; hash e custo da wo0171; bullet desta WO | 4 / 2 | lf | `9f4f9aae923a6021a124388619248d39afac1699` |
| `meta/analises/261115-ANALISE-o-nicho-dev.md` | Status «Decidida» | 1 / 1 | lf | `1f256d9bf83ee8d3ef7e6c2589395830d44f3e20` |
| `logs/2026-11-15.md` | a continuacao da conversa | 10 / 0 | lf | `b5af4be71d4f0a57db504854695c86e8ce864666` |

Gerado por quem aplica: `index.html` (`node build.js`; esperado **993.391 bytes** e o `sha1sum` sem CR acima — se o tamanho divergir pelo fim de linha da sua arvore, vale o sha1 sem CR). Nao rastreados que ficam fora: `.claude/launch.json`. **O `.claude/settings.json` da casa nao muda** (e do dono): esta WO muda o que o kit GERA.

## Passos

1. `date +%s`. `git pull --ff-only`; HEAD = `66b4faa`. Diferente: PARE.
2. `git status --short` = exatamente os oito ` M` do inventario, `?? .claude/launch.json` e `?? meta/workorders/261115-wo0172-o-protocolo-do-kit.md`. Faltou ou sobrou: PARE.
3. `sha1sum` dos oito = os do inventario, e `git diff --numstat` = a coluna + / − (104 acrescentadas, 13 removidas). Diferente: PARE.
4. Leia o diff inteiro. No `src/`: a funcao `withSectionIndex` nova antes do `buildClaudeMd`, e os dois `return` dele passando por ela; a linha nova do `allow` dentro do array do `settings` (aspas simples por fora, como as vizinhas).
5. `node build.js`; `tr -d '\r' < index.html | sha1sum` = `b7e99df53d097b8d00f65edebff9e66e1b42fc6b`. Diferente: PARE.
6. `node validate.js index.html`: `RESULTADO: VERDE — 19/19, 0 erros`, com **122/122**. Registre cruas as linhas do `C121`, do `C54`, do `G4` e do `C28`. Vermelho: PARE.
7. Verde: `git add` de cada caminho do inventario, do `index.html` e desta WO; commit (o hook roda build + harness: tem de passar); push; `git status -sb` com `main` = `origin/main` e so o `launch.json` sobrando; `date +%s`.

## Commit

```
git add src/index.template.html validate.js meta/CHANGELOG.md meta/DECISIONS.md meta/IDEAS.md meta/STATUS.md meta/analises/261115-ANALISE-o-nicho-dev.md logs/2026-11-15.md index.html meta/workorders/261115-wo0172-o-protocolo-do-kit.md
```

```
git commit -m "feat(kit): o protocolo do kit - as permissoes que as skills pedem, o git sem lock no update, a sobra de modo so sem artefato, o indice do CEREBRO; C121 (wo0172, D-181, v1.143.0)"
```

```
git push
```

## Relatorio

O corpo minimo da forma «edicoes» e os tres acrescimos da forma «conferencia» (o que voce viu no diff que esta WO nao diz; o fim de linha de cada arquivo; e o custo: quantas chamadas de shell, e os dois `date +%s`, do passo 1 e do passo 7). Diga o tamanho do `index.html` gerado e o sha1 sem CR. Se o hook nao imprimir saida visivel, diga (o da wo0171 nao imprimiu). Se o commit sair com linha acrescentada por voce (ex.: `Co-Authored-By`), diga no relatorio. Nao edite STATUS, DECISIONS nem log. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0172.txt` (`date +%y%m%d-%H%M`, rodado na hora).
