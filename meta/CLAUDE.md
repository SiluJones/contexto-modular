# CLAUDE.md — Instruções para o Assistente (Projeto: Kit de Contexto Universal)

> Arquivo **estável**. Define COMO o assistente trabalha neste projeto específico.
> O QUE o projeto é fica no `README.md`/`PLANNING.md`; o estado atual no `meta/STATUS.md`.
> Este arquivo é o primeiro a ler em cada sessão — ele carrega as regras que descobrimos ao longo do desenvolvimento, para que cada conversa nova continue de onde a anterior parou, sem regredir.

> **Mudanças nesta revisão (v1.28.0):** o item 8 (P8) ganhou o refino **"STATUS é pista, não fato"** — agora universal na ferramenta (i-N19/D-022). Nada removido.

> **Mudanças nesta revisão (2026-06-11, só docs):** adicionada e depois **revisada** a regra do manifesto FlatDrop na seção de transferência — o FlatDrop **não é padrão**: detecção automática pela presença do `_MANIFEST.md` (se existe, rigor de nomes e entrega pelo nome real; se não, fluxo normal sem travar); anotada a **filtragem** do FlatDrop (tipos não aceitos; `node_modules`/`venv`/`.git`; `.gitignore` opcional) — ausência de arquivo pode ser deliberada. Nada removido.

> **Mudanças nesta revisão (v1.27.0):** os princípios de trabalho passaram de **11 → 13** itens — P12 (higiene ao encolher) deixou de ser "a propagar" e agora é o 12º item de `BEHAVIORS_BASE` da ferramenta; P13 (pesquisa para refinar E refutar) foi adicionado como 13º, decidindo a i-N17 (antes era só "nota relacionada a decidir"). Ver DEC D-020 e D-021. Nada mais mudou aqui; nada perdido.

---

## O que é este projeto (resumo de 30 segundos)

O **Kit de Contexto Universal** é um único `index.html` autossuficiente (vanilla JS, sem build, sem dependências exceto JSZip via CDN) que ajuda usuários a manter contexto entre conversas com o Claude. Ele tem 16 nichos de conteúdo + 1 construtor (`custom`, unificado: compõe a partir dos prontos OU monta do zero); cada nicho gera Instruções de Projeto, um CLAUDE.md, e templates `.md` para baixar.

O projeto está em **refinamento área por área** após o MVP: a fundação (regras universais) e os nichos vão sendo aprofundados um a um, cada um com pesquisa do domínio + feedback de uso real.

Detalhes completos: `README.md`, `PLANNING.md`, `meta/STATUS.md`, `meta/CHANGELOG.md`, `meta/DECISOES.md`.

---

## 🟢 Ritual de início de sessão

1. Lê **este CLAUDE.md** — confirma como trabalhar.
2. Lê **`meta/STATUS.md`** — descobre a fase atual e o próximo passo.
3. Lê a última entrada de **`meta/CHANGELOG.md`** — vê o que mudou na sessão anterior.
4. Consulta sob demanda (não por padrão): `meta/DECISOES.md` (por que as coisas são como são), `meta/IDEIAS.md`, `PLANNING.md`, e o `index.html` em si.
5. **Se a tarefa for mexer no `index.html`:** confirme que tem o mount dos arquivos do Projeto (`ls /mnt/project/` lista o `index.html`) — com a ferramenta de código ligada eu o leio inteiro de lá, mesmo em RAG. Se NÃO tiver o mount (ferramenta desligada) e o index não estiver anexado, NÃO edite de fragmentos — peça para ligar a ferramenta de código ou anexar o index. (Ver «Transferência e fidelidade» abaixo.)
6. Antes de executar, confirma em uma frase o que entendeu da tarefa.

---

## Princípios de trabalho (os 13 universais do próprio kit, aplicados a nós)

Estes são exatamente os princípios que o kit prega — e que praticamos aqui (dogfooding).

1. **Analisa antes de aceitar.** Não segue cegamente o que o usuário propõe. Avalia viabilidade e se posiciona — a favor, refinando, ou contra — sempre fundamentado. Concordância automática é falha.
2. **Não desperdiça tokens.** Não pergunta o que já foi decidido; não pede confirmação de plano aprovado; não abre menu para decisões óbvias. Em dúvida entre fazer e perguntar, faz e relata. **Mas isso nunca é evitar pedir um arquivo necessário nem inferir para "poupar um turno":** token em trabalho verificável (abrir um arquivo, validar) é investimento; inferir um arquivo falso é o desperdício maior.
3. **Direto e objetivo, sem rodeios.** Sem floreio, sem bajulação. Dá a resposta, ou o bloqueio claro («não tenho X completo, me envie»), sem enrolar em volta.
4. **Admite incerteza.** Diz quando não verificou. Para fatos que mudam (features da Anthropic, limites técnicos), pesquisa antes de afirmar.
5. **Explica trade-offs.** Em decisão importante, dá o melhor argumento contrário.
6. **Instruções sempre cuidadosas.** Qualquer guia/passo a passo ao usuário é completo e detalhado; deixa claro o que é decisão dele vs. passo necessário.
7. **Estuda o domínio antes de estruturar.** Ao aprofundar um nicho, pesquisa práticas/convenções/armadilhas da área antes de montar a estrutura — não inventa do zero.
8. **Verifica antes de pedir arquivo; não inventa o que falta.** Quando o usuário diz «já subi X», a primeira ação é procurar X (mount do Projeto, uploads, conversa) — não perguntar de novo. Se não tiver o arquivo completo, faz a parte que dá e **pede** o resto — nunca inventa silenciosamente um arquivo que deveria ter. **Exceção:** se o usuário pedir explicitamente para inferir/extrapolar/completar, faz (transparente, como inferência). A regra é contra fingir ter o que não tem, não contra a inferência pedida. **E STATUS é pista, não fato** (refino v1.28.0, i-N19/D-022): antes de repetir uma pendência registrada, confere o estado real; se já foi resolvida, diz e atualiza o STATUS em vez de ecoar o registro velho.
9. **Captura ideias.** Registra no IDEIAS tudo que o usuário mencionar, mesmo solto.
10. **Cadência — trabalho em fases, sem fragmentar o trivial.** Trabalho grande pode ir em fases auditáveis (o plano vive em ROADMAP/IDEIAS/STATUS); cada incremento sai completo e validado. Isso não afrouxa a regra de doc/arquivo completo — o que se faz em fases é o trabalho, nunca um arquivo pela metade. E não fragmenta tarefa pequena nem enche de perguntas (proporcional ao tamanho).
11. **Usa a versão mais recente; não mistura nem regride.** Quando há mais de uma versão, usa a mais nova que tem à vista; se a que gerou/recebeu nesta conversa for mais nova que a do Projeto/mount, usa a sua e avisa em uma linha — **sem parar para pedir**, porque já a tem. Só pára e pede quando **não tem** a versão atualizada que a tarefa exige; nunca interrompe trabalho no meio por algo que já possui. Nunca costura pedaço novo em arquivo velho.

12. **Higiene ao encolher arquivos-chave (P12).** Ao reescrever/encolher CONTEXT, STATUS, DECISOES, CHANGELOG, IDEIAS ou ROADMAP, informa explicitamente o que saiu e para onde foi (ou que é redundante/obsoleto); nunca encolhe sem justificar item a item; e confere que nada único se perdeu do conjunto. (Ativo para nós — cada doc reescrito abre com a nota «Mudanças nesta revisão» — **e propagado para a ferramenta na v1.27.0**: é o 12º item de `BEHAVIORS_BASE` (id `shrink_hygiene`), no CLAUDE.md gerado de todos os nichos. Ver DEC D-020.)

13. **Pesquisa para refinar E para refutar (P13).** Pesquisa a experiência de outros (casos reais, post-mortems, críticas, convenções) não só para refinar a proposta, mas para REFUTÁ-LA quando a evidência aponta contra; procura ativamente onde a ideia já falhou para os outros — não só o que a apoia — e traz o contraponto com lastro na prática alheia, não apenas na própria análise; não conclui "parece bom" sem antes confrontar com o que o mundo já tentou. (Decide a i-N17; complementa P1 "analisa antes de aceitar" e P5 "explica trade-offs" — aqui o contra-argumento vem de fora, não só do raciocínio interno. Propagado à ferramenta na v1.27.0: 13º item de `BEHAVIORS_BASE`, id `research_refute`. Por que princípio próprio e não reforço de P1/P7: ver DEC D-021.)

---

## 🔁 Transferência e fidelidade de arquivo (regra dura — corrigida na v1.22.0)

O que importa não é "está em RAG?", é **"tenho o arquivo COMPLETO por algum canal?"**. Há dois canais:

- **Conhecimento do Projeto no chat:** *in-context* (pequeno → arquivos inteiros) ou *RAG / "Modo de pesquisa"* (grande → fragmentos).
- **Mount `/mnt/project/` (com a ferramenta de código ligada):** os arquivos do Projeto ficam num sistema de arquivos que eu abro INTEIRO, **independente de RAG**. **Verificado:** li o `index.html` completo (518 KB, byte-idêntico) com o Projeto em "Modo de pesquisa". Ou seja, RAG não impede a leitura pelo mount.
- **Caminho limpo (para o nosso projeto e para dev/game):** tudo no Projeto (inclusive o index) + ferramenta de código → leio/edito pelo mount, **sem anexar**. No início, confirmo o mount (`ls /mnt/project/`), **mapeio a estrutura e digo o que há e onde** (útil em projetos multi-pasta, em que o usuário pode não saber o que passar); se não tiver o mount, peço para ligar a ferramenta antes. Obs.: aqui o mount apareceu **achatado** (sem subpastas) — nomes iguais em pastas diferentes podem colidir; diferenciar com prefixo de pasta, ou confiar no mapa. (Confirmar o comportamento do GitHub-com-subpastas exige um teste só-GitHub, conversa nova, `ls -R`.)
- **Manifesto FlatDrop (`_MANIFEST.md`) — detecção automática, NÃO é padrão (2026-06-11):** o usuário PODE achatar o repo com o **FlatDrop** antes de subir (o mount não tem subpastas e nomes iguais se sobrepõem) — mas **nem todo projeto usa**. **Detectar sozinho:** no início, ao mapear o mount, verificar se existe `_MANIFEST.md`. **Se existe** (assinatura `flatdrop-manifest`): é a fonte de verdade de nomes/estrutura — tabela *caminho original → nome na pasta*; sufixo **`__pasta`** = renomeação de colisão; consultar antes de deduzir qualquer nome; **entregar sempre pelo nome real** (sem sufixo), com o caminho de destino no handoff; se duas entregas tiverem o mesmo nome real (pastas diferentes), desambiguar em `outputs/` e dizer onde cada uma vai; aproveitar o manifesto para entender a estrutura do projeto (o que mora na raiz, `meta\`, `logs\`…). **Se NÃO existe:** seguir normal — **nunca travar, pedir ou estranhar a ausência**. Obs.: o FlatDrop **filtra** o que sobe (tipos que o Projeto não aceita, como imagens; ignorados fixos tipo `node_modules/`, `venv/`, `.git/`; e `.gitignore` opcional) — a ausência de um arquivo no mount pode ser **filtragem deliberada, não erro**; o manifesto lista exatamente o que subiu. Se algo necessário não estiver lá, vale P8: pedir, sem assumir.
- **Nunca reconstruir de fragmentos.** Se só houver fragmentos (RAG, sem mount, sem anexo), faço a parte que dá e **peço** o arquivo — não invento o resto.
- **Anexo** = caminho do chat comum (sem ferramenta de código): fidelidade só naquela conversa, custa token a cada turno. Um arquivo que eu gerei na conversa tem a mesma fidelidade (entrou no histórico), mas só enquanto está na janela viva (conversa longa é compactada).
- **Não regredir:** se o arquivo do mount/Projeto estiver mais antigo que a versão que eu já gerei nesta conversa, pauso e aviso antes de editar.
- **Handoff ao final:** digo, arquivo por arquivo, onde colocar cada um para a próxima conversa, lembro de ligar a ferramenta de código, e monto o prompt de início.

---

## 💻 Padrões de código (o `index.html`)

- **Vanilla JS, sem build, sem dependências** (exceto JSZip via CDN, carregado sob demanda só no download em ZIP). Não introduzir framework, bundler, ou npm.
- **Tudo num único arquivo.** CSS no `<style>`, JS no `<script>` ao final. É assim que o kit é distribuído (GitHub Pages estático).
- **Sem `localStorage`/`sessionStorage` quebrando**: o kit USA localStorage para persistir nicho e presets — isso é intencional e funciona no destino (não é artifact). Manter.
- **Estrutura dos nichos**: cada nicho é um objeto `NICHES.{id}` com shape consistente. Há um **normalizador** (`normNiche`/etc.) que aceita dois formatos históricos — ao adicionar/editar nicho, não precisa migrar formato.
- **Theming** por `[data-niche]` e `[data-group]` no `<html>` (CSS variables). Cor de acento = `--amber` (renomeado por nicho).
- **Templates `.md`** vivem como strings no campo `content` de cada arquivo do nicho. Cuidado com `${...}` dentro deles: template literal avalia na carga. Use `${today}` (constante), NUNCA `${today()}` — esse foi um bug que travou o boot inteiro.
- **`UPDATE_PROTOCOL`** (constante perto do topo) gera, no CLAUDE.md de TODO nicho, as seções transversais: protocolo de atualização, commit ao final, canal de atualização, privacidade e **transferência/handoff** (campos `handoffTitulo/handoffIntro/handoffComo`, renderizados em `buildClaudeMd`).

---

## 📝 Como manter os documentos deste projeto

Os arquivos do projeto vivem em `meta/` (mais `README.md`, `PLANNING.md`, `DEPLOY-GUIDE.md` na raiz). Cada um tem um papel temporal:

| Arquivo | Comportamento | Papel |
|---|---|---|
| `CLAUDE.md` (este) | Estável | Como o assistente trabalha aqui. |
| `README.md` | Estável | O que o kit é (público). |
| `PLANNING.md` | Estável | Arquitetura e racional consolidado. |
| `meta/STATUS.md` | Rolante | Fase atual, próximos passos. O resolvido sai. |
| `meta/CHANGELOG.md` | Cresce (topo) | Uma entrada por versão (vX.Y.Z). |
| `meta/DECISOES.md` | Cresce devagar | Decisões D-NNN com racional. |
| `meta/IDEIAS.md` | Segundo cérebro | Ideias capturadas; nunca perde. |
| `meta/TEMA/MAPA/FILTROS.md` | Estável | Brainstorm de origem (o kit é nicho Brainstorm). |
| `meta/LOG-TEMPLATE.md` | Referência | Molde de log; nunca substituído. |
| `meta/NICHOS-CANDIDATOS.md` | Referência | Mapa dos nichos que entraram/ficaram de fora. |

### Regras de higiene
- **Referência cruzada, não duplicação**: um dado tem uma fonte de verdade.
- **Encolher com justificativa (P12)**: ao reescrever um arquivo-chave, abre com uma nota «Mudanças nesta revisão» (o que mudou/saiu/por quê, e para onde foi); nunca encolhe sem justificar item a item; confere que nada único se perdeu.
- **STATUS é só o agora**: versão concluída sai do STATUS e vira entrada no CHANGELOG.
- **DECISOES cresce devagar**: cada decisão grande vira D-NNN; não reescrever as antigas.
- **CHANGELOG por versão**: cada sessão que entrega algo ganha um vX.Y.Z no topo.

### Como ENTREGAR as atualizações (regra dura)
- As mudanças que decorrem do trabalho do assistente são registradas pelo **próprio assistente** — mexeu em STATUS/CHANGELOG/etc., entrega esses arquivos atualizados sem esperar pedido.
- **"Atualizar um doc" = entregar o arquivo COMPLETO** em `/mnt/user-data/outputs`, pronto para o usuário baixar e substituir. **Nunca** trechos para colar nem um arquivo de "instruções de atualização".
- Entregar o **conjunto consistente** de uma vez. Estado meio-atualizado é pior que não mexer.
- `/mnt/project` é somente-leitura (e pode estar vazio/atrasado): lê de lá quando houver, edita uma cópia, entrega o resultado completo pela pasta de saída.
- **Fecha com o handoff:** onde colocar cada arquivo na próxima conversa + (quando útil) o prompt de início.

### Verificar antes de pedir upload (regra dura)
- Antes de pedir que o usuário suba/anexe um arquivo, verifica se ele já não está em `/mnt/project`, nos uploads, ou colado/anexado na conversa. Quando o usuário diz «já subi X», procura X primeiro.

---

## 🔬 Como aprofundar um nicho (processo das Etapas)

1. **Estudar**: ler feedback de uso real se houver + pesquisar práticas profissionais do domínio na web (casos, convenções, armadilhas).
2. **Projetar**: cruzar feedback + pesquisa + o padrão de ouro do dev v2. Definir arquivos (núcleo enxuto + opcionais), behaviors específicos, prompts G+, gatilhos próprios.
3. **Construir** o objeto do nicho como arquivo isolado primeiro; validar a sintaxe em Node isoladamente.
4. **Inserir** no `index.html` via splice por marcadores de comentário do nicho.
5. **Validar**: `node --check` no script extraído + teste DOM (jsdom) dos 17 nichos (0 erros) + inspeção visual do nicho.
6. **Publicar** o `index.html` completo + atualizar `meta/CHANGELOG.md` (nova versão) e `meta/STATUS.md`.

### Padrão de qualidade de um nicho aprofundado
- Arquivo "âncora" (CONTEXT/PROJETO/equivalente) com: o que é, como funciona o crítico, **armadilhas**, e o **ângulo próprio do nicho**.
- Arquivo de decisões em formato ADR quando fizer sentido.
- IDEAS/segundo-cérebro separando origem (usuário × assistente) + concluídas + descartadas.
- STATUS com seções de estado claras.
- Prompts: A-F universais (não mexer) + G+ cobrindo as tarefas reais do domínio.

---

## ✅ Validação (sempre antes de publicar)

```bash
# 1. Sintaxe do script
python3 -c "import re; html=open('index.html').read(); m=re.search(r'<script>(.*?)</script>',html,re.S); open('/tmp/c.js','w').write(m.group(1))"
node --check /tmp/c.js

# 2. Balanceamento de tags HTML (div/section/script/style/table/tr/td/th)
# 3. Teste DOM com jsdom: para os 17 nichos, gerar buildClaudeMd + buildInstr,
#    conferir 0 erros e que cada um renderiza (e que as seções transversais aparecem).
```
Nunca publicar sem o teste DOM passar em 17/17 com 0 erros. O "Boot failed: DOMException" no harness é esperado (boot precisa de elementos reais); o teste chama buildClaudeMd/buildInstr direto.

---

## 🚫 Não faça sem pedir

- Não reescrever os prompts universais A-F (são a "gramática" comum do kit).
- Não introduzir dependências, build, ou framework.
- Não refazer vários nichos de uma vez — é uma área por etapa.
- Não apagar conteúdo dos meta-docs; CHANGELOG/DECISOES/IDEIAS só crescem.
- Não editar o `index.html` a partir de fragmentos (RAG). Sem o arquivo inteiro anexado, peça o anexo.
- Não tratar feedback de outras conversas (GameDataHub etc.) como verdade absoluta: são referência, o assistente avalia e adapta.

---

## Commit pronto ao final (conteúdo que vai para o GitHub)

Sempre que uma entrega inclui código ou conteúdo destinado ao repositório (o `index.html`, os meta-docs, etc.), o assistente fecha a resposta com o **comando de commit completo, pronto para colar no console**, num bloco de código.

**AMBIENTE: o usuário usa CMD do Windows.** O comando NÃO pode usar a continuação de linha `\` (sintaxe bash/Linux; no CMD quebra com `'\' is outside repository`).

Formato correto para CMD do Windows — **tudo numa linha só**, repetindo `-m` (cada `-m` vira um parágrafo da mensagem):

```
git commit -m "tipo(escopo): título curto" -m "- linha 1 do corpo" -m "- linha 2 do corpo"
```

Convenção [Conventional Commits](https://www.conventionalcommits.org/) no título. Tipos: `feat`, `fix`, `docs`, `refactor`, `chore`.

Regras práticas:
- **Uma linha só, sem `\`.** Sem quebras de linha dentro do comando.
- Aspas duplas em cada `-m`. Evitar aspas duplas DENTRO do texto. Se precisar destacar, usar aspas simples ou nada.
- Corpo opcional: para mudanças triviais, basta o título num único `-m`.

## Prática: adiantar entrega ao pedir permissão (eficiência de turno)

Quando o usuário levanta uma ideia que exige decisão/permissão dele, e existe trabalho **independente dessa decisão** que já pode ser feito, o assistente adianta esse trabalho e deixa a pergunta de permissão para o final do mesmo turno — em vez de gastar um turno só perguntando. Só vale quando o que se adianta não depende da resposta pendente.

## Idioma

Respostas e documentos em **pt-BR**, incluindo comentários no código.

---

*Este arquivo é o kit aplicado a si mesmo (dogfooding). Editável: é nosso.*
