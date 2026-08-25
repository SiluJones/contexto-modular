# WO 0103 — O carimbo de versão não mente: `KIT_VERSION` amarrada ao CHANGELOG e ao STATUS

> **Tipo:** WO de CÓDIGO (gerador + harness).
> **Config sugerida:** modelo leve, `/effort` **baixo** — uma constante e um check. O que exige atenção é rodar a prova negativa antes de commitar.
> **Pré-requisito:** commit `d179d9b`, harness **18/18 · 97/97 · 0 erros**, árvore limpa fora de `.claude/launch.json`.
> **Base:** defeito encontrado ao gerar o pacote de update v1.120.0 para o satelite-web em 2026-08-25 — a wo0102 subiu a versão nos documentos e **deixou a constante para trás**.
> **Depende de:** wo0102 (aplicada, `611541d`/`d179d9b`).
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure `C54` em `validate.js` antes de inserir. Se já existir, **PULE**.
>
> **Âncoras lidas em:**
> - `src/index.template.html` L1286 → `const KIT_VERSION = "1.119.0";` — lido neste turno no sandbox reconstruído do mount de 2026-08-24 23:46.
> - `validate.js` L504 → `check("C53 a conferencia sai de quem tem o vies (wo0102): ancoras lidas na WO,` — lido no mesmo sandbox.
> - `meta/CHANGELOG.md` L9 → `## v1.120.0 — A conferência sai de quem tem o viés (wo0102, D-135)` e `meta/STATUS.md` L4 → `Versão atual: **v1.120.0**` — lidos no mount, e é a divergência entre eles e a constante que origina esta WO.
>
> **Canal dos meta neste ciclo = CODE.**
>
> **Próximo comando:** `/wrap`

---

## 1. Por que

A wo0102 mandou pôr **v1.120.0** no `STATUS.md` e abrir a entrada no `CHANGELOG.md`. Não mandou tocar
`KIT_VERSION`, e ninguém reparou — **eu não reparei ao escrever a WO, e o harness não tinha como
reparar.** Resultado medido hoje: os documentos dizem v1.120.0 e o gerador estampa `1.119.0` em
**todo** artefato que produz — pacote de update, kit do Code, templates de nicho, rodapé.

O custo não é cosmético. O carimbo é a única coisa que diz a um projeto instalado de qual versão ele
veio, e o satelite-web acabou de relatar exatamente essa falta como feedback ao kit: *«não há carimbo
de versão de kit em nenhum arquivo vivo, então não sei de qual versão este projeto veio»*. Um carimbo
**errado** é pior que ausente — ele responde, e responde mentira.

E é a mesma família que a wo0102 acabou de tratar: uma conferência que ninguém faz porque ninguém é
o dono dela. A diferença é que aqui existe um lugar mecânico óbvio.

## 2. Contexto factual

**[medido no sandbox, 2026-08-25]**

```
constante no gerador : KIT_VERSION = "1.119.0"
CHANGELOG (topo)     : v1.120.0
STATUS (cabecalho)   : Versão atual: **v1.120.0**
```

- Depois da correção: harness **18/18 · 98/98 · 0 erros**; `C54` imprime `ok (v1.120.0 nos três lugares)`.
- **Prova negativa rodada:** revertida a constante para `1.119.0`, o C54 falhou com a mensagem certa
  (*«KIT_VERSION e 1.119.0 mas o topo do CHANGELOG e v1.120.0»*); revertida a reversão, verde de novo.
- O `G24` existente **não pega isto** — ele confere que `KIT_VERSION` existe, tem forma semver, aparece
  no rodapé e carimba os downloads. Nada nele olha para fora do bundle.
- **[deduzido, marcado como tal]** que o pacote de update anterior enviado ao satelite-web (25/08
  01:28) saiu carimbado `v1.119.0` **corretamente**, porque a leva ainda não existia. O carimbo só
  passou a mentir depois da wo0102.

## Edição 1 — `src/index.template.html` · a constante

**Âncora** *(ocorrência única)*:

```
const KIT_VERSION = "1.119.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.120.0";
```

## Edição 2 — `validate.js` · check **C54**

**Âncora** *(ocorrência única, LF)*:

```
check("C53 a conferencia sai de quem tem o vies
```

**Inserir IMEDIATAMENTE ANTES** dessa linha, seguido de uma linha em branco:

```js
check("C54 o carimbo de versao nao mente (wo0103): KIT_VERSION casa com o topo do CHANGELOG e com o cabecalho do STATUS do proprio repo", () => {
  // Segundo check (depois do C43) que abre arquivo do REPOSITORIO, e pelo mesmo motivo: o numero
  // que o kit estampa em TODO artefato gerado vive no gerador, e o numero que o projeto declara
  // vive nos meta/. Ate a wo0102 nada os amarrava — a leva subiu a versao nos docs e deixou a
  // constante em 1.119.0, entao todo pacote de update sairia carimbado com a versao anterior.
  const pathmod = require("path"), raiz = pathmod.dirname(pathmod.resolve(path));
  const ler = (rel) => {
    const abs = pathmod.join(raiz, rel);
    assert(fs.existsSync(abs), "arquivo do proprio repo ausente: " + rel);
    return fs.readFileSync(abs, "utf8");
  };
  const v = T.KIT_VERSION;
  const chg = ler("meta/CHANGELOG.md");
  const mChg = chg.match(/^## v(\d+\.\d+\.\d+)/m);
  assert(mChg, "CHANGELOG.md sem entrada de versao no formato `## vX.Y.Z` — sem ela nao ha com o que comparar o carimbo");
  assert(mChg[1] === v, "KIT_VERSION e "+v+" mas o topo do CHANGELOG e v"+mChg[1]+": todo artefato gerado (pacote de update, kit do Code, templates) sairia carimbado com a versao errada, e quem recebe nao tem como saber");
  const st = ler("meta/STATUS.md");
  const mSt = st.match(/Vers[aã]o atual:\s*\*\*v(\d+\.\d+\.\d+)\*\*/);
  assert(mSt, "STATUS.md sem a linha `Versao atual: **vX.Y.Z**`");
  assert(mSt[1] === v, "KIT_VERSION e "+v+" mas o STATUS declara v"+mSt[1]+" — doc e gerador em desacordo sobre o mesmo fato");
  return "ok (v"+v+" nos tres lugares)";
});
```

---

## Fora de escopo

- **Não mexer no `G24`.** Ele cobre outra coisa (forma e presença) e está verde.
- **Não subir a versão para v1.121.0.** Esta WO **conserta** o carimbo da v1.120.0; não é leva nova. O
  `CHANGELOG` ganha uma linha na entrada que já existe, não uma entrada nova.
- **Não regenerar pacotes antigos.** O pacote v1.119.0 que o satelite-web recebeu estava carimbado
  certo para a época; o substituto v1.120.0 já foi gerado pela raia do chat.

## Armadilhas desta WO

- **A ordem importa:** aplique a Edição 1 **antes** de rodar o harness. Com o C54 dentro e a constante
  velha, ele fica vermelho de propósito — e é fácil confundir isso com erro de aplicação.
- **`meta/CHANGELOG.md` precisa ter `## vX.Y.Z` como primeira ocorrência de linha começando em `## v`.**
  Se alguém acrescentar uma seção `## versão…` acima, o check passa a comparar a coisa errada.
- **O check lê o repositório, não o bundle.** Rodar `node validate.js` de outra pasta quebra o
  `raiz` — é o mesmo cuidado que o C43 já exige.

## Depois de aplicar — conferência antes do commit

- [ ] `node build.js` — sem erro, 18 módulos.
- [ ] `node validate.js index.html` → **18/18 · 98/98 · 0 erros**. *O 98 é o esperado: 97 + o C54.*
- [ ] O C54 imprime `ok (v1.120.0 nos tres lugares)`.
- [ ] **Prova negativa, obrigatória:** reverta a constante para `1.119.0`, rode `build` + `validate`,
      confirme que o **C54 falha** com a mensagem do CHANGELOG, e **desfaça**. Sem isso o check pode
      estar verde por não estar olhando nada.
- [ ] `grep -c 'KIT_VERSION = "1.120.0"' src/index.template.html` → **1**.
- [ ] `git diff --stat` mostra **3 arquivos**: `src/index.template.html`, `validate.js`, `index.html`.

## Ao terminar — registros (canal CODE)

**`meta/CHANGELOG.md`** — na entrada **v1.120.0 que já existe** (não abra entrada nova), acrescente:

```
- **Correção do carimbo (wo0103):** a constante `KIT_VERSION` tinha ficado em `1.119.0` enquanto os documentos já declaravam v1.120.0 — todo artefato gerado sairia com a versão errada. Constante corrigida e amarrada por check: o **C54** confere `KIT_VERSION` contra o topo do `CHANGELOG.md` e o cabeçalho do `STATUS.md`, nos três lugares.
```

**`meta/STATUS.md`** — harness **18/18 · 98/98**. **Procure `97` no arquivo INTEIRO** e atualize todas
as ocorrências. A versão continua **v1.120.0**.

**`meta/DECISIONS.md`** — acrescente:

```
### FIX-036 — O carimbo de versão mentia (wo0103)
A wo0102 subiu a versão no `STATUS.md` e no `CHANGELOG.md` e não tocou `const KIT_VERSION`, que ficou em `1.119.0`. Descoberto ao gerar o pacote de update v1.120.0 para o satelite-web: o pacote saiu carimbado com a versão anterior. O `G24` não pegava — ele confere forma, presença e uso da constante, nunca a compara com nada fora do bundle. **Corrigido e amarrado:** o **C54** confere os três lugares (constante · topo do CHANGELOG · cabeçalho do STATUS), com prova negativa rodada. Vale registrar a ironia útil: a leva que institucionalizou «a conferência sai de quem tem o viés» embarcou um número que ninguém conferia — e o defeito só apareceu porque um consumidor (satelite-web) tinha acabado de relatar a **ausência** de carimbo de versão como falta do kit. Carimbo errado é pior que ausente: ele responde, e responde mentira.
```

## Relatório de aplicação *(quem aplica preenche ao terminar)*

O que foi feito · desvios · arquivos tocados · resultado de build/validate com os números · **o
resultado da prova negativa** · o commit.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/CHANGELOG.md meta/STATUS.md meta/DECISIONS.md meta/workorders/260825-wo0103-carimbo-de-versao-nao-mente.md
```

```
git commit -m "fix(kit): amarra KIT_VERSION ao CHANGELOG e ao STATUS (C54, FIX-036)" -m "A wo0102 subiu a versao nos documentos e deixou a constante em 1.119.0, entao todo artefato gerado saia carimbado com a versao anterior. Descoberto ao gerar o pacote de update v1.120.0 para o satelite-web, que tinha acabado de relatar a ausencia de carimbo de versao como falta do kit. Constante corrigida e check C54 novo conferindo os tres lugares, com prova negativa. O G24 nao pegava: ele confere forma e presenca, nunca compara com nada fora do bundle."
```

```
git push
```
