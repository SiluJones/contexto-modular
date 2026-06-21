# HUB — Toolchain de Contexto (KCM · ASU · FlatDrop)

> **O que é:** registro de contratos entre três ferramentas que se sincronizam.
> **Não é** o HUB que o kit gera para um grupo de projetos de conteúdo (frentes
> de um jogo etc.) — é um HUB de *infraestrutura*, escrito à mão, **só-gatilho**
> (sem ferramenta que o gere ou aplique; lemos/atualizamos manualmente). Cópia
> idêntica nos repos **KCM**, **ASU** e **FlatDrop**; ao mudar, sincronizar nos três.

---

## 0. Cânone Central — as interfaces e suas versões travadas

A única coisa que este HUB protege são os **contratos** entre as frentes. Cada
um tem **um dono**; mudar um deles afeta os consumidores listados.

| # | Contrato | Forma travada | Dono | Consumidores |
|---|---|---|---|---|
| C1 | **Manifesto FlatDrop** | cabeçalho `<!-- flatdrop-manifest v1 -->`, modo *fullpath*, separador `__`, tabela `caminho original ↔ nome na pasta` | FlatDrop | Humano (lê o mapa); Claude (traduz nome-plano ↔ caminho real p/ preencher `relative_path` do ASU) |
| C2 | **Instrução ASU** | `format_version: "1.0"`; `path_mode: relative` + `--root`; estratégias do guia (`replace_function`/`method`/`class`/`section`, `set`/`append`/`delete_json_path`, `insert_*`/`replace_*_pattern`, `replace_context_block`, `replace_file`, `create_file`) | ASU | Claude (emite o YAML); o aplicador `python -m src apply` |
| C3 | **Referência do formato ASU** | `INSTRUCTION_GUIDE.md` — guia v2, ferramenta **v0.4.0** | ASU | Claude (consulta sob demanda) |
| C4 | **Diretriz ASU embutida pelo kit** | bloco condensado injetado no `CLAUDE.md` quando o switch **asuMode** está ligado; depende de **C2** (`format_version "1.0"`) e aponta para **C3** | KCM | Projetos gerados com o switch ligado |

**Dependências entre frentes:**
- **ASU → FlatDrop:** para emitir `relative_path` correto, Claude lê o arquivo
  achatado no Projeto mas precisa do **manifesto (C1)** para mapear o nome-plano
  de volta ao caminho real da raiz (`--root`).
- **KCM → ASU:** a diretriz embutida (C4) é a essência condensada do `PROMPT_IA`
  do ASU; o `PROMPT_IA`/`INSTRUCTION_GUIDE` ficam **apontados**, não congelados
  no kit (versionam com a ferramenta).

---

## 1. Diretrizes do grupo

- **D1 — Ninguém mexe na casa do outro.** Mudar um contrato (ex.: manifesto
  `v1→v2`; `format_version 1.0→1.1`; texto do `PROMPT_IA`) **não** se aplica
  calado: vira um item na **Caixa de entrada** das frentes consumidoras (seção 2),
  assinado `[frente AAAA-MM-DD]`.
- **D2 — Um dono por contrato** (ver Cânone). Na dúvida de quem é dono de um
  dado/formato, **pergunte** — não duplique a verdade.
- **D3 — Versões travadas no Cânone.** Quem subir uma versão atualiza a tabela do
  Cânone **e** abre item nas caixas dos consumidores no mesmo passo.
- **D4 — Status relâmpago ≤ 3 linhas** por frente (seção 3); serve para outra
  frente saber, num relance, se pode confiar no contrato atual.
- **D5 — HUB é cópia idêntica** nos três repos; ao alterar, sincronize nos três
  (KCM, ASU, FlatDrop).

---

## 2. Frentes (responsabilidade atual + caixa de entrada)

### KCM — Kit de Contexto Modular
- **Dona de:** C4 (diretriz ASU embutida). Gera os arquivos de contexto; estrutura
  modular (casco + 17 módulos + `build.js`).
- **Responsabilidade atual:** switch **asuMode** recém-adicionado (opt-in, off por
  padrão); saída idêntica à v1.33.0 com o switch desligado.
- **Caixa de entrada:** *(vazia)*

### ASU — Atualizador Automático de Scripts
- **Dona de:** C2 (formato da instrução) e C3 (`INSTRUCTION_GUIDE.md`).
- **Responsabilidade atual:** ferramenta v0.4.0 / guia v2. Aplica patches com
  schema + diff + backup + rollback; loop de autocorreção por erro.
- **Caixa de entrada:** *(vazia)*

### FlatDrop — Achatador de repositórios
- **Dona de:** C1 (formato do manifesto).
- **Responsabilidade atual:** manifesto v1 (fullpath, separador `__`). Achata o
  repo para upload no Projeto do Claude e gera o `_MANIFEST.md`.
- **Caixa de entrada:** *(vazia)*

---

## 3. Status relâmpago

- **KCM:** v1.34.0 em preparo — estrutura modular + switch ASU; harness 17/17 + 32/32; build byte-idêntico à v1.33.0 com switch off. Contrato C4 estável.
- **ASU:** v0.4.0 estável; `format_version "1.0"` inalterado. C2/C3 estáveis.
- **FlatDrop:** manifesto v1 estável. C1 estável.

---

*HUB só-gatilho: mantido à mão enquanto o toolchain é pequeno (cadência i-N24 —
gatilho agora, ferramenta depois, se a dor aparecer). Se a coordenação começar a
doer, aí sim avaliar gerar/automatizar este HUB.*
