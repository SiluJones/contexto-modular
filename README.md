# Kit de Contexto Universal — Projetos com Claude

> **Página única, sem build, sem dependências.** Abre o `index.html`, escolhe o nicho do seu trabalho, e o kit monta tudo: arquivos de contexto, instruções customizadas, prompts para cada momento, e templates `.md` prontos para baixar.

---

## O que é isso

Um kit que resolve um problema concreto: **conversas longas com o Claude perdem contexto, e abrir uma nova faz você começar do zero.**

A ideia central é separar duas coisas que costumam viver no mesmo lugar:

- **Contexto** — pequeno, sempre carregado, vive no Projeto do Claude.ai.
- **Histórico** — pode crescer, fica no Git, é lido só quando relevante.

O kit te entrega o **andaime** para fazer essa separação no domínio que importa para você: dev, design, escrita, jogos, música, pesquisa, RPG, cozinha, animação, HQ, marketing, produto, negócios, gestão de clientes, brainstorm — ou um nicho customizado por você.

---

## 18 nichos

### Core (8) — trabalho profissional
| Nicho | Para |
|---|---|
| **Desenvolvimento** | Dev solo ou pequena equipe — múltiplas stacks, decisões registradas. |
| **Design Visual** | Designers — identidade, sistema de marca, tokens, peças. |
| **Gestão de Clientes** | Freelancers/agências — múltiplos clientes simultâneos, sem misturar. |
| **Narrativa** | Escritores — romance, conto, cenário, vozes consistentes. |
| **Marketing & Conteúdo** | Criadores — calendário, tom, audiência, pautas. |
| **Pesquisa** | Acadêmicos, jornalistas — fontes catalogadas, hipóteses, citação rigorosa. |
| **Produto/UX** | PMs/POs/UX — discovery, especificação, decisões com racional. |
| **Negócios** | Empreendedores/consultores — análise, plano, sem chavão de MBA. |

### Criativo & Mídia (8) — exploração, jogos, narrativa
| Nicho | Para |
|---|---|
| **Game Design** | Indies, solo devs — mecânicas, lore, produção em paralelo. |
| **Pixel Art** | Artistas — restrição é o estilo, paleta canônica, animação. |
| **Brainstorm** | Pensamento exploratório, estratégia, ideação. *(É o nicho deste próprio kit.)* |
| **Música** | Compositores/produtores — projeto sonoro, letras, harmonia. |
| **RPG (Mestres)** | Mestres — campanha longa sem furo de lore, NPCs com voz. |
| **Cozinha** | Chefs, restaurantes — conceito, menu, receitas afinadas. |
| **Animação** | Criadores de série/curta — bíblia, personagens, episódios. |
| **HQs** | Quadrinhos, mangás, webcomics — arco longo, ritmo de página. |

### Especial (1)
| Nicho | Para |
|---|---|
| **Custom** | Você define os arquivos, comportamentos, prompts, cor de acento. Salva preset. |

---

## Como funciona

```
[index.html aberto no navegador]
        ↓
[Você escolhe o nicho]
        ↓
[Configura no Construtor: marca os comportamentos, define stack/tom/etc.]
        ↓
[Copia as Instruções → cola em Projeto → Instruções no Claude.ai]
        ↓
[Baixa os templates .md → sobe no Projeto como referência]
        ↓
[Usa os prompts A-F (universais) e G+ (específicos do nicho) conforme a hora]
```

A **separação contexto/histórico** acontece automaticamente: os arquivos que ficam no Projeto são curtos, e o `LOG-TEMPLATE.md` (que é só referência) gera logs detalhados que vão pro Git em `logs/`. O Claude consulta o histórico só quando você apontar.

---

## Contexto, RAG e transferência entre conversas (leia antes de migrar um projeto)

O kit te dá os arquivos certos; este trecho explica **onde colocar cada um** para o Claude poder usá-los — e editá-los — sem corromper nada. (Há uma versão visual disso na aba **Tokens & Fluxos** do próprio kit.)

**A janela de contexto é como a RAM:** rápida, mas finita e zerada a cada conversa nova. Os arquivos do Projeto são o **disco**: ficam guardados, mas o Claude os lê de dois jeitos, conforme o **tamanho total** do conhecimento do Projeto:

| Modo | Quando | O que o Claude enxerga |
|---|---|---|
| **Em contexto** | Conhecimento do Projeto pequeno | Os arquivos **inteiros** — pode ler e reescrever com fidelidade |
| **Pesquisa (RAG)** | Conhecimento grande (perto do limite) | Só **fragmentos** por relevância — ótimo para ler, arriscado para reproduzir um arquivo inteiro |

Como saber em que modo está: a tela do Projeto mostra o rótulo **"Modo de pesquisa"** quando o RAG está ativo.

**Onde colocar cada arquivo:**

- **Leves e de referência** (CONTEXT, STATUS, DECISÕES, IDEIAS, scripts pequenos) → **sobem no Projeto**. Persistem em todas as conversas. Prefira **upload direto**: a sincronização do GitHub é manual (`Sync now`) e às vezes desatualiza ou falha.
- **Arquivos grandes, ou os que serão editados na sessão** e precisam de fidelidade exata → **anexe na conversa** (pelo clipe). O anexo vale só naquela conversa, custa contexto a cada turno, e basta anexar uma vez (reanexe só se mudar por fora). Em conversa nova, reanexe.
- **Híbrido é o ideal:** o pesado da vez vai anexado; o resto fica no Projeto.

**Regra de ouro:** o que vai ser **editado ou reproduzido** precisa estar **inteiro** à vista do Claude. Em modo de pesquisa, peça para anexar o arquivo — nunca deixe o Claude reconstruir um arquivo a partir de fragmentos (sai um "arquivo falso", incompleto). Use o GitHub para versão e hospedagem; alimente o Claude pelo Projeto (leves) e pelo anexo (pesados).

> Detalhe importante sobre persistência: um arquivo **criado pelo Claude dentro de uma conversa** fica fiel ali (entrou no histórico), mas só enquanto a conversa cabe na janela — conversas muito longas são compactadas e o que sai da janela se perde. Por isso, para um arquivo grande, o caminho seguro numa conversa nova é **anexar**, não confiar que "o Claude já viu".

---

## Os três fluxos canônicos

### 1. Projeto novo
1. Cria o Projeto no Claude.ai.
2. Cola as Instruções · sobe os templates como referência.
3. Usa o **Prompt C** com suas ideias iniciais.
4. Claude gera estrutura + arquivos `.md` preenchidos.
5. Substitui os templates pelos preenchidos · sobe no Git.
6. Próximas conversas → só **Prompt A**.

### 2. Projeto existente (ainda sem o sistema)
1. Cria o Projeto · cola as Instruções · sobe o material atual + templates.
2. Usa o **Prompt D** → Claude gera os `.md` com a realidade atual.
3. Substitui os templates pelos preenchidos · sobe no Git.
4. Próximas conversas → só **Prompt A**.

### 3. Conversa pesada — transferir agora
1. Na conversa atual → **Prompt E** (Claude já conhece a estrutura).
2. Cria o Projeto novo · cola as Instruções.
3. Sobe os `.md` gerados + `LOG-TEMPLATE.md` + arquivos leves do projeto; **anexa os arquivos grandes** que vai editar.
4. Conversa nova → **Prompt F**.
5. Próximas conversas → só **Prompt A**.

---

## Prompts A–F (universais em todo nicho)

| ID | Quando usar |
|---|---|
| **A** | Início de qualquer sessão — situar o Claude no estado atual. |
| **B** | Encerramento — produzir os arquivos rolantes atualizados. |
| **C** | Setup de projeto novo. |
| **D** | Migrar projeto existente para o sistema. |
| **E** | Empacotar conversa pesada antes de migrar. |
| **F** | Onboarding em conversa nova depois de migração. |

Cada nicho adiciona **G, H, I, J…** específicos. Game tem prompt de protocolo de playtest. Pesquisa tem fichamento de fonte. Cozinha tem texto poético de menu. E assim por diante.

---

## Custom: construir seu próprio nicho

Quando nenhum dos 17 prontos serve — ou quando você quer combinar elementos —, use **Custom**:

1. Define **identidade** (nome, ícone, cor de acento, fonte).
2. Define **arquivos de contexto** (nome + papel + template inicial).
3. Define **comportamentos extras** (rótulo + definição).
4. Define **convenções**, **saídas**, **prompts G+**.
5. Salva como **preset** (no navegador, `localStorage`).
6. Carrega depois quando quiser.

Pode salvar quantos presets quiser — útil se você atua em domínios bem específicos não cobertos (direito tributário, fotografia, terapia ocupacional, etc.).

---

## Subindo para o GitHub Pages

Veja `DEPLOY-GUIDE.md` (vem fora do repositório, para você guardar separado).

Resumo: um único `index.html` autossuficiente. Sobe no GitHub, ativa Pages, está no ar.

> O GitHub é ótimo para **versão e hospedagem**. Para o Claude trabalhar com o seu repositório, lembre: a sincronização do GitHub dentro de um Projeto é manual e pode ficar atrasada — para o que precisa estar fresco, prefira subir direto no Projeto, e anexe na conversa o arquivo grande que for editar.

---

## Princípios de design

- **Sem build.** É um HTML único. Abrir num navegador funciona.
- **Sem dependências.** Só JSZip carregado via CDN se você baixar templates em ZIP.
- **Sem servidor.** Tudo client-side. Preset Custom fica no seu navegador.
- **Tema por nicho.** A página muda de cor, fonte e até estrutura visual (Home) conforme o nicho.
- **Conteúdo em prosa.** Templates `.md` são leitura humana, não preenchimento mecânico.

---

## Origem

Este kit foi construído iterando longas conversas com o Claude — algumas em que o próprio Claude topou criar a estrutura, outras em que pressionei a separação contexto/histórico, outras em que ele me disse "isto aqui não faz sentido". A pasta `meta/` documenta esse processo usando a própria estrutura do nicho **Brainstorm** — é o kit se referindo a si mesmo.

Se você usar e o kit te servir, considere abrir uma issue contando o nicho em que está usando. Se um nicho está faltando ou um comportamento deveria estar aí, mande PR.

---

## Licença

MIT. Use, modifique, redistribua, transforme em outra coisa.
