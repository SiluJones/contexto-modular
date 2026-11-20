# ANÁLISE — A interface do KCM vista pelo dono: dois defeitos de rolagem, o que sai da barra de cima, e o que recolhe

> **Status:** Decidida (2026-11-19, KCM 29: como recomendado — U1, duas WOs; a linha «quando usar» à vista; o índice rola e copia; os nichos salvos num seletor abaixo do card do Custom)
> **Data:** 261119 · **Base:** v1.153.0, HEAD `b828a8b` (wo0189), árvore limpa (só `?? .claude/launch.json`)
> **Vira:** a WO A na wo0190 (v1.154.0; o `G17`, que exigia o Engine no modal, foi revisto); o item 2 (os nichos salvos) estava lido ao contrário nesta análise e foi corrigido na wo0191 (v1.155.0, `D-192`): cards ao lado do Custom, o seletor na barra do Custom; a WO B depois · **Decisão:** `D-191`
> **Raia:** Chat (análise; **não** é WO). **Entrada do IDEAS:** `i-N102` (a nota do dono `261119-1958` e quatro capturas de tela).
> **Método:** leitura do `src/index.template.html` da v1.153.0 (o CSS da sobreposição e do modal, `renderTopbar`, `savedNichesShortcutHTML`, `renderPrompts`, `renderBehaviors`, o formulário do Custom); sonda em Node sobre os 222 prompts dos 19 nichos (o corpo renderizado com o campo vazio); as quatro capturas do dono; pesquisa de fora.

## Problema

O dono usa a interface todo dia e ela ficou mais comprida que o uso pede: a aba de Prompts mostra 222 corpos abertos (até 13 por nicho), a de Instruções lista cada comportamento com a definição inteira, e a barra de cima carrega em todo nicho um atalho que só serve ao Custom. Há também dois defeitos que as capturas mostram. Nenhum muda o que o kit **gera** — é a casca —, mas é o que o dono vê cada vez que monta um pacote.

## O que foi medido

**1. Os dois defeitos de rolagem têm a mesma causa** `[CSS da v1.153.0, capturas de 19:58, 20:00 e 20:11]`:
- **A barra dupla na escolha de nicho:** a sobreposição (`.overlay`) é `position:fixed` com `overflow-y:auto` — tem a barra dela —, e a página de trás continua com a sua. As duas aparecem lado a lado.
- **O modal de configuração deixa a página rolar:** o `<dialog>` abre com `showModal()`, que bloqueia o clique na página, mas **não a rolagem**; e o `.cfg-body` rola por dentro sem conter o encadeamento: chegou ao fim, a roda passa para a página. Nas capturas, o fundo aparece em posições diferentes com o modal aberto.

**2. A barra de cima** `[renderTopbar, savedNichesShortcutHTML]`: «Nichos salvos» é desenhado em **todo** nicho que tenha um preset salvo, ao lado do nome do projeto. O formulário do Custom já tem o seu próprio «Carregar preset salvo». O campo «Engine» do `game` mora no modal (`panel:"modal"`), e desde a wo0188 é ele que liga o Godot no que o kit gera.

**3. Os prompts** `[sonda nos 222 prompts]`: 203 têm o campo de solicitação; **58**, com o campo vazio, deixam um marcador no corpo — `[SUA SOLICITAÇÃO]` em 38, `[O QUE QUER FAZER HOJE]` em 19, `[HIPÓTESE]` em 1 — e o botão copia o corpo como está na tela, marcador incluído. O corpo tem mediana de 728 caracteres e chega a 2.271; os títulos, mediana de 30 e no máximo 54 — curtos o bastante para um índice lateral. O campo é um `textarea` de 2 linhas que não cresce.

**4. As Instruções** `[renderBehaviors e as seções do construtor]`: cada comportamento é um checkbox com o rótulo e a definição inteira; no `narrative`, 20 comportamentos (13 da base e 7 do nicho), 8 convenções e 7 saídas obrigatórias, mais as regras adicionais. O que está marcado já aparece, como resultado, no painel da direita.

**5. De fora** `[pesquisado em 19/11]`: para o modal, a orientação do Chrome é conter o encadeamento no próprio `<dialog>` e no `::backdrop` com `overscroll-behavior: contain`, e **não** travar a rolagem com `overflow: hidden` no `html` ou no `body`, que tira a barra e mexe no layout. Para recolher conteúdo, a Nielsen Norman avisa que o que fica recolhido perde visibilidade e pode passar despercebido, e recomenda o recurso em páginas longas em que o usuário não precisa de várias seções ao mesmo tempo — que é o caso dos prompts (usa-se um por vez) e menos o das Instruções (o dono revisa vários blocos de uma vez).

**O que NÃO foi medido:** os navegadores do dono além do Chrome das capturas; o tempo real gasto rolando (é o relato dele, e as capturas o confirmam).

## Opções

**U0 — Só os defeitos.** O conserto da rolagem e o marcador fora da cópia. Barato, mas deixa o resto da nota, que é a maior parte do incômodo.

**U1 — Duas WOs de interface, nesta ordem.**
- **WO A — os defeitos e o que é quase grátis:** (a) a rolagem: no modal, `overscroll-behavior: contain` no `dialog:modal` e no `::backdrop` (com `overflow: hidden` só no `::backdrop`, como o Chrome pede); na sobreposição de nicho, que não é um `<dialog>`, a página de trás trava enquanto ela está aberta, com `scrollbar-gutter: stable` para o layout não pular — ou a sobreposição vira um `<dialog>` e herda a regra do modal; (b) a cópia do prompt sem o marcador quando o campo está vazio — a tela continua mostrando onde se escreve; (c) o «Engine» do `game` sai do modal para a barra de cima, ao lado do nome do jogo; (d) «Nichos salvos» sai da barra de cima de todos os nichos e aparece no card do Custom, na escolha de nicho (o formulário do Custom já tem o seu).
- **WO B — o que recolhe:** (a) cada prompt recolhido, com a letra, o título, a linha «quando usar», o botão de copiar e o campo de solicitação à vista; o corpo abre no clique; o campo cresce com o texto até 5 linhas e então rola por dentro; (b) o índice lateral na aba de Prompts — a letra e o título —, em que o clique leva até o prompt e já o copia, com o aviso «copiado» visível; (c) os blocos das Instruções recolhidos por padrão, cada um com a contagem no cabeçalho («18 de 20 marcados») e um botão para abrir ou fechar todos.

**U2 — Uma WO só com tudo.** Menos uma volta, mas mistura conserto com mudança de uso: se a parte que recolhe incomodar, o conserto volta junto.

## Recomendação

**U1, as duas WOs, nesta ordem.** A WO A conserta o que as capturas mostram e tira o ruído da barra de cima — nada nela muda o jeito de usar. A WO B muda o uso, e por isso vem depois e com roteiro de tela: o dono confere e, se o padrão recolhido atrapalhar num bloco, troca só aquele. Duas ressalvas, das fontes: **(1)** no prompt recolhido, a linha «quando usar» fica à vista — o título sozinho não diz quando o prompt serve, e cabeçalho que não se entende é exatamente o que faz o conteúdo recolhido passar despercebido; **(2)** nas Instruções, a contagem no cabeçalho é o que faz o padrão recolhido ser seguro: o dono vê que há algo desmarcado sem abrir. **Checks no harness**, onde o jsdom alcança: a cópia sem marcador numa função pura; o «Engine» do `game` fora do modal; «Nichos salvos» fora da barra de cima; as regras de `overscroll-behavior` no CSS; os blocos recolhíveis com a contagem. O que é visual vai no roteiro de tela do dono.

## Riscos

- **O clique no índice copia sem perguntar** e sobrescreve a área de transferência: é o pedido do dono; o aviso «copiado» mostra o que aconteceu. Se incomodar, o clique só rola, e o copiar fica no card.
- **O recolhido esconde.** Mitigação: a linha «quando usar» e a contagem nos cabeçalhos; o botão de abrir tudo.
- **`overscroll-behavior` em contêiner que não rola** só funciona no Chrome recente; nos outros, a página de trás ainda rola quando o modal não tem rolagem própria. É melhoria progressiva, e o caso das capturas (o modal com rolagem) fica coberto.
- **Mexer na barra de cima** pode quebrar o atalho de quem ativava um preset de qualquer nicho: ele continua no card do Custom e no formulário do Custom.

## Ponto de decisão

1. **U1, as duas WOs nesta ordem?** (recomendado) — ou U2, uma só, ou U0, só os defeitos.
2. **No prompt recolhido, a linha «quando usar» fica à vista?** (recomendado: fica) — ou só o título e o campo, como a nota pediu.
3. **O clique no índice rola e copia** (o pedido da nota, recomendado) — ou só rola.
4. **«Nichos salvos» no card do Custom:** um seletor logo abaixo do card (recomendado) — ou a lista dos nomes como botões.

## Fontes

- Chrome for Developers, «Prevent the page underneath a modal dialog from scrolling»: https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/prevent-page-scroll-under-modal-dialog
- Nielsen Norman Group, «Accordions on Desktop: When and How to Use»: https://www.nngroup.com/articles/accordions-on-desktop/
