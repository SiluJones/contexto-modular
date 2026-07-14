# BUILD.md — Estrutura modular do Kit (refator i-N13)

> Saída **byte-idêntica** à v1.33.0 (md5 `bacd3b24ef8b5a34ffe51418bf72a975`). O que muda é a **fonte**, não o produto.

## Ideia
O `index.html` continua sendo **1 arquivo, sem build no lado do usuário, roda via `file://` e GitHub Pages**. A diferença é só no desenvolvimento: os dados dos 17 nichos saíram de dentro do HTML e viraram **módulos** em `src/niches/`. Um script de concatenação (`build.js`) costura tudo de volta no `index.html` final. Isso destrava i18n auditável depois (dicionários entram como módulos, nada de `fetch` — `file://` intacto).

## Layout
```
index.html            <- ARTEFATO de build (o que vai pro GitHub Pages). NÃO editar à mão.
build.js              <- concatenador (Node puro, zero dependência)
build-manifest.json   <- ordem EXPLÍCITA marker -> arquivo (sem glob/descoberta automática)
validate.js           <- harness (jsdom). Opcional no repo; reconstrói a cada sessão se preferir.
src/
  index.template.html <- o "casco": HTML + CSS + JS de núcleo, com 17 marcadores //__KCU_NICHE:<id>__//
  niches/
    dev.js ... custom.js   <- 17 módulos de dados (cada um = objeto NICHES.<id> = { ... };)
```

## Fonte da verdade
Para mudar um nicho, edita-se `src/niches/<id>.js` (e/ou o `src/index.template.html` para o núcleo). **Nunca** o `index.html` da raiz — ele é gerado.

## Reconstruir
```
node build.js                 # gera index.html a partir do template + módulos
node validate.js index.html   # 17/17, 0 erros (regra de ouro antes de publicar)
```
`build.js` falha **ruidosamente** se faltar um módulo, se um marcador aparecer != 1 vez, ou se sobrar marcador não resolvido.

## Fluxo prático (quem entrega = ambiente de build)
O assistente edita os módulos, roda `build.js` + `validate.js`, e entrega o `index.html` já construído + os arquivos-fonte alterados. O usuário comita os dois; não precisa ter Node para publicar (só dropa o `index.html` na raiz, como sempre).

## Garantia de segurança
Migração nicho a nicho com duas redes: **md5** do bundle == original, e **harness 17/17**. Anti-teste validado: módulo corrompido faz o md5 divergir e o harness reprovar.

## Hook de pré-commit (i-N38)
`.githooks/pre-commit` bloqueia qualquer commit que **toque o produto** (`src/`, `index.html`, `build.js`, `validate.js`, `build-manifest.json`) se o **build** ou o **harness** não estiverem verdes — e ainda garante que o `index.html` commitado é o do build atual (se estava desatualizado, ele reconstrói e pede pra você `git add index.html` e refazer o commit). Commits que só mexem em `meta/` ou docs passam direto.

**Ligar num clone novo** (o `core.hooksPath` fica no `.git/config`, que **não** viaja no `git clone`):
```
git config core.hooksPath .githooks
git update-index --chmod=+x .githooks/pre-commit
```
No Windows funciona: o Git roda o hook pelo shell que ele embarca (Git Bash), mesmo você operando no PowerShell.

**Bypass:** `git commit --no-verify` — só para **emergência**, nunca rotina. Se você burlou o hook, o próximo commit ainda paga a dívida (build/harness continuam sendo a régua).

## Ciclo de uma spec (com o portão read-only)
`/check-spec <caminho>` → aplicar → `node build.js` → `node validate.js index.html` → commit.
O `/check-spec` (i-N39) é **read-only**: confere âncoras, pré-requisitos e o estado verde do repo **antes** de você mexer — não edita, não builda, não commita. Serve pra pegar âncora morta e colisão antes que custem.
