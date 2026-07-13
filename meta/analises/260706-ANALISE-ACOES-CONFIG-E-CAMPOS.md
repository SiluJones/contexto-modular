# Análise — Cluster de ações, modal de configuração e tipos de campo (i-N36 fase "topbar inteiro" + i-N40)

> Doc de curadoria (raia Chat). Trava as decisões que precisam vir **antes** das specs 0031–0034.
> Base: feedback do usuário (260706-1059.txt, 1026.txt) + `flatdrop-kcm.md` + pesquisa de usabilidade
> (controles de seleção, WCAG 1.4.13, proliferação de modais). Estado do repo ao escrever: **v1.56.0**,
> spec0030 aplicada (modos viram botões no topbar), 35/35.

## 0. O que motivou
Depois dos botões de modo no topbar (spec0030), abriram-se três frentes novas: (a) como organizar os
**downloads** — o usuário rejeitou unificar tudo num zip só; (b) um **modal de configuração**, e a ideia
de um **segundo modal por-nicho**; (c) o problema real de **campos que não cabem em dropdown** (ex.: gênero
de jogo, que pode ser mais de um). Este doc decide os três e a sequência de specs.

## 1. Downloads: manter granular (endosso) + organizar por intenção
**Decisão: manter os downloads separados, como o usuário pediu — a proposta dele está profissionalmente
correta.** Baixar só as skills, só o kit-Code, ou um template específico é um **recurso**, não um defeito.
Forçar "baixar tudo e depois apagar o que não quero" é pior UX (mais passos, mais atrito). O download
estruturado novo (projeto novo) é **aditivo**, não substituto: resolve outro problema (montar a árvore de
pastas certa de uma vez), e não conflita com os granulares — são gestos independentes sobre os mesmos dados.

**A única crítica profissional — e é de organização, não de unificar:** o risco de manter muitos botões é
virar um **paredão de botões** (paralisia de decisão, poluição visual). A correção não é fundir, é **agrupar
por intenção, não por mecanismo**. Há três intenções distintas:

1. **Peças avulsas** (granular): baixar todos os .md / só skills / só kit-Code / um template — para quando
   quero uma parte específica. (o que já existe, fica.)
2. **Projeto novo** (zip estruturado): o projeto inteiro na árvore de pastas correta, ciente da config, raiz
   nomeada — para dar arranque a um projeto do zero. (novo; spec0033.)
3. **Atualizar projeto existente** (i-N40): achatado + afixo `__template-update` + manifesto + prompt — para
   fundir num projeto KCM que já roda. (novo; spec0034.)

Rotular por essas três intenções (e não por "zip / skills / kit") deixa o usuário escolher pelo objetivo.
**Recomendação: manter todos, reorganizados sob esses três rótulos de intenção.**

## 2. Modal de configuração: UM `<dialog>` com seções, não dois modais
O usuário propôs um **segundo** modal (config por-nicho) separado da engrenagem, com medo de "misturar,
confundir e poluir". Concordo com a **dor** (a topbar está sendo usada como despejo de config de nicho, e
isso não escala), mas **refino a solução**: o problema se resolve com **um** modal bem seccionado, não com
dois pontos de entrada concorrentes.

**Por quê (fundamentado):** config global (afixo, SO) e config de nicho (gênero, tom, plataforma) são ambas
**"defina e esqueça"** — mexidas uma vez por projeto, raramente revisitadas; mesma frequência, mesma classe.
A literatura de UX desaconselha **proliferação de modais**: dois botões de "configuração" geram a dúvida
"em qual está o gênero?". A separação que o usuário quer (não poluir) se obtém por **seções/abas dentro de
um diálogo**, que é o padrão consagrado de tela de Settings — separação **visual**, não **física**.

**Desenho fixado:**
- **Um** `<dialog>` nativo (`showModal()`): centraliza, prende foco, fecha no Esc, tem backdrop. Abrir/fechar
  é uma camada por cima — **não toca `STATE.niche` nem re-renderiza as views**; não troca de página nem de
  nicho. (Confirmado viável.)
- Duas seções/abas: **"Projeto"** (global: afixo — muito melhor aqui do que perdido em Templates; SO; e o
  que crescer) e **"Nicho: {label}"** (os parâmetros daquele nicho).
- **Dois pontos de entrada para o MESMO diálogo** (atende o "abrir de forma característica" sem criar 2
  modais): a **engrenagem** no cluster de ação abre na aba Projeto; um **gatilho discreto perto dos campos
  do nicho** (ex.: "⚙ ajustar nicho") abre direto na aba Nicho. Um só surface, dois atalhos.
- **O nome do projeto NÃO entra no modal** — fica no topbar, onde já é prático e intuitivo (decisão do
  usuário, mantida).

Se, na prática, a config de nicho provar ser muito acessada ou gigante, aí sim se separa — mas começa
unificado. Regra: não multiplicar surfaces antes da dor aparecer.

## 3. Tipos de campo: o conserto concreto (gênero de jogo etc.)
O bug real: campos multivalor (gênero de jogo) estão em **dropdown de seleção única**. A pesquisa de
controles de seleção é convergente e resolve isso com uma regra clara:

- **Aditivo (multi-seleção), poucas opções (≤ ~7):** **botões-de-nome / chips** (toggle-buttons) ou
  checkboxes — **todas as opções visíveis**, um clique, sem abrir/rolar. É o estilo de botão-de-nome que já
  usamos na aba Instruções. (Dropdown é "o controle de último recurso" — esconde opções e é multi-passo.)
- **Aditivo, muitas opções (> ~7):** multi-select dropdown com os escolhidos mostrados como **pills** fora
  do campo. (Só quando não couber em chips.)
- **Único e mutuamente exclusivo, 2–6 opções curtas:** **segmented control** (ou radio). Importante: o
  segmented foi **refutado para os MODOS** porque eles coexistem (seleção independente) — mas para um campo
  genuinamente de **escolha única** com poucas opções, ele é **o controle certo**. Não é refutação universal.
- **Único, muitas/longas opções:** manter **dropdown (`select`)**.

**Implementação (a detalhar na spec0032):** somar ao sistema de campos os tipos **`multi`** (chips aditivos)
e **`segmented`** (único, 2–6), mantendo `select`/`text`/`toggle`. Isso exige que o valor de um campo `multi`
seja uma **lista** (hoje os valores de topbar são string) — logo mexe em `normNiche` (default de lista),
no render (chips com estado), na **persistência** (guardar array) e no **build** (como a lista entra na
saída: ex.: "Gêneros: ação, RPG, roguelike"). Contido, mas não trivial — daí ser spec própria.

## 4. O que NÃO mover (refutação fundamentada)
O usuário perguntou se os **checkboxes de comportamento** (a seção COMPORTAMENTO da aba Instruções — "Analisa
antes de aceitar" etc.) poderiam ir para o modal. **Recomendação: não** — e a razão é de classe de interação,
não de arrumação:

- Os comportamentos são **curadoria ativa com preview ao vivo**: o usuário lê, marca/desmarca e **vê a saída
  (CEREBRO/Instruções) mudar em tempo real** ao lado. Esse laço controle↔preview é o **core** da aba Instruções.
- Modal de config é para **defina-e-esqueça**. Enterrar os comportamentos num modal (a) esvazia a aba
  Instruções do seu conteúdo principal, (b) esconde a alavanca primária atrás de um clique, (c) quebra o laço
  de preview.
- **Trade-off admitido:** fica uma leve inconsistência ("nem todo toggle no mesmo lugar"). Mas o eixo que
  importa é **curadoria-com-preview × config-defina-e-esqueça**, não "todo toggle junto". A divisão é
  **principiada**, não bagunça. Comportamentos ficam na aba Instruções.

**Mapa de onde cada coisa vive:**
- **Topbar (sessão, mexido toda hora):** nome do projeto, capítulo/cena — campos rápidos.
- **Modal › Projeto (global, defina-e-esqueça):** afixo, SO, futuros.
- **Modal › Nicho (por-nicho, defina-e-esqueça):** gênero (multi), tom, plataforma — os numerosos/multivalor.
- **Aba Instruções (curadoria com preview):** os checkboxes de comportamento — ficam.

## 5. Sequência de specs (cada uma estudada antes de escrever) + config
1. **spec0031 — cluster de ação + modal (fundação).** Substitui o `.sync-note` redundante do canto por 3
   botões quadrados (download / atualizar / engrenagem); cria o `<dialog>` de config (abre pela engrenagem,
   não toca nicho/página); migra a config **global** para a aba Projeto (afixo saindo de Templates; SO).
   *Estudo prévio:* maquinário do afixo, onde o SO mora, render do `.sync-note`.
2. **spec0032 — tipos de campo `multi` + `segmented` + aba Nicho.** Renderiza os campos numerosos/multivalor
   na aba Nicho do modal; conserta o gênero de jogo; ajusta `normNiche`/persistência/build para valor-lista.
   *Estudo prévio:* defs de campo dos nichos, render de campo no `renderTopbar`, inserção do valor na saída.
3. **spec0033 — download estruturado (projeto novo).** Zip com árvore correta, raiz nomeada pelo projeto
   (default "projeto"), `logs/` e `specs/` vazias com `.gitkeep`, `.gitignore` + `.flatdropignore` gerados
   (o flatdropignore ignora `logs/` e — recomendável — `specs/` do upload, o git versiona), `.claude/` +
   `apply` + `wrap` + `CLAUDE.md` na raiz se Code, `.txt` de instrução na raiz, skills se ligado. Mantém os
   downloads granulares (reorganizados por intenção, §1). *Estudo prévio:* `downloadZIP`, `buildCodeKitFiles`,
   `effectiveFiles`, uso do JSZip.
4. **spec0034 — botão atualizar (i-N40).** Abre um `<dialog>` de **duas saídas**: "Baixar .zip de atualização"
   (achatado+afixo+`_UPDATE-MANIFEST.md`) e "Copiar prompt"; o prompt também viaja no pacote como
   `_UPDATE-PROMPT.md`. Mais pesada; por último.

**Config recomendada (todas):** aplicar = **Sonnet + esforço Alto** (mexem em UI + estado + build/persistência).
Escrever cada spec (raia Chat) = **Opus + Alto, pensamento ligado** (âncora + harness mental). PowerShell.

## 6. Decisões fixadas (resumo)
- Downloads granulares **mantidos**; estruturado e atualizar são **aditivos**; reorganizar por **intenção**
  (peças avulsas / projeto novo / atualizar), não por mecanismo.
- **Um** `<dialog>` de config com seções **Projeto** e **Nicho**; **dois atalhos** para ele (engrenagem +
  gatilho no topbar); **sem** segundo modal. Nome do projeto **fica no topbar**.
- Tipos de campo novos: **`multi`** (chips aditivos ≤~7) e **`segmented`** (único 2–6); `select` só para
  único-muitos/longos. Conserta o gênero de jogo.
- Comportamentos da aba Instruções **não** migram para o modal (curadoria com preview ≠ config).
- Modal `<dialog>` nativo: não troca nicho, não re-renderiza views, não atrapalha.
- Ordem: **0031 → 0032 → 0033 → 0034**, cada uma após estudo do código que toca.
