# ANÁLISE — O nicho `game` antes do pacote do Hey Mother: a engine que roda, o repositório que vira um, e o que espera

> **Status:** Decidida (2026-11-19, KCM 29: como recomendado — G2 antes do pacote; o Hey Mother achata a estrutura; o MCP do Godot depois do primeiro playtest)
> **Data:** 261119 · **Base:** v1.152.0, HEAD `adcdb52` (wo0187), árvore limpa (só `?? .claude/launch.json`)
> **Vira:** a wo0188 (v1.153.0); o achatamento é trabalho da conversa do Hey Mother, com o pacote · **Decisão:** `D-190`
> **Raia:** Chat (análise; **não** é WO). **Antecessoras:** `261112-ANALISE-narrative-e-game.md` (`D-177`). **Entradas do IDEAS:** `i-N101` (a nota do dono de 19/11), `i-N86` item 1 (o ambiente da engine), `i-N98` itens 2 e 7 (o repositório com áreas; o teste de fumaça do Godot).
> **Método:** leitura do Hey Mother com a pasta `Game Design\Hey Mother` concedida (git, árvore, CEREBRO, CLAUDE.md, STATUS, IDEAS); `grep` no `src/` da v1.152.0; e um teste na VM do chat: o Godot oficial baixado e rodado numa **cópia** do protótipo ativo, fora da pasta do projeto. Nada foi gravado no Hey Mother.

## Problema

O dono vai reativar projetos de `Game Design\`, começando pelo **Hey Mother**: todos mudam para o canal pasta com o Code, sem ASU e sem HUB, e alguns mudam de estrutura (`i-N101`). O nicho `game` serve bem ao documento de design (refinado na `D-177`), mas desde julho sabe-se que ele **não prevê a engine** — o ambiente, o `.gitignore`, a validação que não é um comando (`i-N86` item 1). Se o pacote sair como está, o chat do Hey Mother refaz à mão o que o próprio Hey Mother já tinha resolvido em julho, e cada projeto de jogo reativado depois refaz de novo.

## O que foi medido

**1. O Hey Mother hoje** `[medido na pasta, 19/11]`:

| O quê | Valor |
|---|---|
| Último commit | `d8cb4de`, 11/07 (56 commits, 129 arquivos versionados) |
| Kit | «adaptado», anterior à v1.73 (sem carimbo de versão); CEREBRO de 38.402 bytes; `meta/` com 205 KB |
| Modos | Code em uso (`CLAUDE.md`, `.claude/`, skills `apply-spec` e `wrap`); canal mount com FlatDrop (`Hey Mother.bat`, `.flatdropignore`); sem ASU |
| Estrutura | o `.git` em `Game Design\Hey Mother\Hey Mother`; a frente em `Hey Mother - Dev\` (meta, logs, três protótipos Godot); na raiz, um `HUB.md` **nunca preenchido** (o molde com `[Nome do grupo/produto]`, uma frente só), 15 notas `.txt` de 10 e 11/07 e `notas-arquivadas/` (ignoradas pelo `.gitignore`). A pasta `Game Design\Hey Mother` acima do repositório só contém ele |
| Engine | Godot 4.6.3; o protótipo ativo é `mother_trilhoB/` |

**2. Defeitos achados** `[git ls-files, ls]`: **(a)** 21 arquivos de cache `.godot/` do `mother_p0` estão versionados — o `.gitignore` dele (`/.godot/`) chegou depois do commit; **(b)** `.claude/settings.local.json` aparece como não rastreado e não está no `.gitignore` (o kit já o põe desde a wo0173); **(c)** o ritual do `CLAUDE.md` manda ler `meta/CLAUDE.md`, que não existe — é o nome antigo do CEREBRO; **(d)** o vocabulário de antes da `D-086`: `meta/specs/` e a skill `apply-spec`, onde o kit hoje tem WO e `apply-wo`.

**3. O que o Hey Mother resolveu sozinho e o kit não tem** `[CLAUDE.md deles]`: uma seção «Como RODAR o Godot (caminho fixo — não procure/adivinhe)» com o executável de console no disco do dono e a checagem de parse sem janela, `--headless --path <projeto> --quit-after 2` — **é a validação por comando que a `i-N86` item 1 dizia faltar**; a convenção «depois de implementar, RODE (ou cheque parse) e relate»; o `/.godot/` no `.gitignore` de cada projeto Godot. Do lado do kit, `src/niches/game.js` tem o campo «Engine» (Godot, Unity, Unreal e outros oito), e nenhum texto gerado o usa: o `.gitignore` sai igual para todo nicho (lixo de SO e editor), e o `CLAUDE.md` não diz como rodar a engine.

**4. O chat roda o jogo** `[medido na VM do chat, 19/11]`: o binário oficial do Godot 4.6.3 para Linux baixou do GitHub pela lista de rede (71,8 MB, HTTP 200). Numa cópia do `mother_trilhoB/`: `--headless --import` e `--quit-after 120` rodaram **sem erro** em 56 s; com `xvfb-run` e `--write-movie`, 60 quadros em 12,6 s, e o último mostra a arena (a personagem, a parede, a plataforma). **É o teste de fumaça da `i-N98` item 7 — viável hoje, sem MCP.** O que ele não faz: simular input (pede um script de teste ou um servidor MCP) e ser idêntico ao Windows do dono (a versão é a mesma; o render é por software).

**5. O que existe de fora** `[pesquisado em 19/11]`: vários servidores MCP do Godot rodam o projeto, mandam input e tiram screenshot do jogo rodando, para o Claude Code na máquina do dono; a Unity tem plugin oficial para o Claude Code, que pede o Unity 6 instalado (o Fando espera, por decisão do dono). Os assets da Unity Asset Store podem ser usados em outras engines, dentro da EULA.

**O que NÃO foi medido:** se o Godot do dono (Windows) e o da VM dão o mesmo resultado num teste com input; o tamanho do CEREBRO do `game` com o Code na v1.152.0 contra os 38 KB do vivo (a fusão parte do pacote: o merge vai crescer o arquivo); as 15 notas da raiz (só contadas, não lidas — são do projeto, e a conversa dele as lê).

## Opções

**G1 — Só o pacote, nada no kit.** O dono gera o `game` com o Code na v1.152.0, e o chat do Hey Mother migra tudo à mão. Barato agora; caro depois: a `i-N86` item 1 está aberta desde julho justamente porque cada projeto resolveu sozinho, e o próximo jogo reativado começa do zero.

**G2 — Uma WO de kit curta antes do pacote: a engine no `game`.** Pelo campo «Engine» que o nicho já tem: **(a)** o `.gitignore` ganha o bloco da engine (no Godot, `.godot/` e `/android/`, que é o que o próprio Godot gera no projeto novo; para as outras, só quando houver projeto); **(b)** o `CLAUDE.md` gerado ganha a seção «Como rodar a engine» com o caminho do executável como campo a preencher na primeira conversa e a checagem sem janela — a forma do Hey Mother; **(c)** no canal pasta, o CEREBRO do `game` ganha o teste de fumaça do chat (baixar o Godot da mesma versão na VM, rodar uma cópia do projeto fora da pasta, olhar o último quadro), como gatilho de «mudou mecânica ou cena»; **(d)** uma linha no prompt do update: arquivo de cache da engine já versionado sai com `git rm -r --cached`. Custo: uma WO de código, com check que prove o bloco por engine e a seção do `CLAUDE.md`.

**G3 — A análise inteira do jogo antes de qualquer pacote:** a engine por família (Godot, Unity), o inventário de assets com licença (`i-N101` item 2), o roteiro da passagem do HUB para um repositório (`i-N101` item 1, `i-N98` item 2), o MCP. Atrasaria o Hey Mother por trabalho que ele não pede: ele não tem asset nenhum versionado, e o HUB dele está vazio.

## Recomendação

**G2, e depois o pacote.** A WO leva ao kit o que o Hey Mother já provou (a checagem de parse por comando) e o que a VM acabou de provar (o teste de fumaça com screenshot), e só para o Godot — a engine com amostra. O inventário de assets espera o primeiro projeto que importar asset; o roteiro do HUB espera um projeto com HUB preenchido (o do Hey Mother é o molde vazio, e sai sem perda); o MCP espera a primeira sessão com playtest, quando se vê se o teste de fumaça basta.

**Para o próprio Hey Mother (trabalho da conversa dele, com o pacote):** achatar a estrutura — o conteúdo de `Hey Mother - Dev\` sobe para a raiz do repositório com `git mv` (o histórico fica), o `HUB.md` vazio e o FlatDrop (`.bat`, `.flatdropignore`) saem, e a pasta `Game Design\Hey Mother` vira a pasta-pai, com as notas e o `notas-arquivadas\`. Os quatro defeitos da medida 2 se consertam na mesma leva. Porque o canal pasta supõe `meta/` na raiz do repositório e a pasta-pai logo acima; manter a frente numa subpasta exigiria que o kit modelasse «um repositório, áreas em subpastas», que é a `i-N98` item 2 — e para uma frente só não vale.

## Riscos

- **O teste de fumaça vira verde de existência.** O quadro prova que o jogo abre e desenha, não que o feel está certo. O texto da WO tem de dizer qual pergunta ele responde, como a regra do verde já manda.
- **O download na VM** (72 MB, cerca de 1 min) pode falhar se a lista de rede mudar; o texto diz o que fazer sem ele: a checagem de parse no Code, na máquina do dono.
- **O achatamento** muda todos os caminhos: as specs antigas citam `Hey Mother - Dev/...`. Elas são registro histórico e não se reescrevem; o `CLAUDE.md` novo tem os caminhos certos.
- **A fusão vai crescer o CEREBRO** de 38 KB para o tamanho do pacote. É o efeito esperado da `D-180`; o GUIA já tira dele as seções de evento.

## Ponto de decisão

1. **G2 antes do pacote?** (recomendado) — ou G1, o pacote já.
2. **O Hey Mother achata a estrutura** (a frente sobe para a raiz, a pasta de cima vira a pasta-pai)? (recomendado) — ou fica como está.
3. **MCP do Godot agora ou depois da primeira sessão de playtest?** (recomendado: depois — o teste de fumaça da VM cobre o «abre e desenha»).
