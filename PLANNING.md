# PLANNING — Kit de Contexto Universal

> Este documento consolida o planejamento original (que vinha em PLANNING.md + PLANNING-PART2.md). Vive aqui o **porquê** das decisões. Para o estado vivo, ver `meta/STATUS.md`.

---

## 1. O problema

Conversas longas com o Claude perdem contexto. Quando a conversa fica pesada e você precisa abrir uma nova, começa do zero. O kit original (versão Dev) resolvia isso para devs. Esta versão expande para 18 domínios, mantendo o mesmo princípio arquitetural.

---

## 2. Princípios não-negociáveis

### 2.1 Separação contexto/histórico

**Contexto** (pequeno, sempre carregado, no Projeto):
- Visão do que se está fazendo
- Estado atual
- Decisões importantes com racional
- Templates de log (referência apenas)

**Histórico** (pode crescer, no Git):
- Logs detalhados de sessão
- Versões antigas de arquivos
- Material de apoio que não precisa ser lido a cada mensagem

### 2.2 Templates são prosa para humanos

Cada `.md` é estruturado para leitura humana, não preenchimento mecânico. Cabeçalhos com função clara, lacunas explicadas, exemplos onde valem.

### 2.3 Prompts A-F universais; G+ específicos

A estrutura dos 6 prompts universais cobre todo ciclo de vida de um projeto (setup, sessão, encerramento, migração). Cada nicho adiciona prompts próprios para tarefas que só fazem sentido naquele domínio.

### 2.4 Sem build, sem servidor

Página única, autossuficiente. Custom presets vivem em `localStorage`. Único external dep: JSZip via CDN para empacotar templates.

---

## 3. Arquitetura

### 3.1 Estrutura de dados (cada nicho)

```js
NICHES.{id} = {
  // Identidade
  id, label, icon, group, category,
  cardColor, cardTags[], cardDesc,

  // Página de Início
  intro: { headline, lede, ctxBlurb, hero },

  // Topbar dinâmica
  topbar: [{ id, label, type, opts, default }],

  // Builder de instruções
  behaviors: [{ id, label, def }],        // somam aos 4 universais
  builderSection: { title, items: [{kind:'radios'|'chips'|'text', ...}] },
  conventions: [string],
  contextFiles: [{ name, cat, role, content }],
  outputs: [{ id, label }],

  // Prompts G+
  promptsExtra: [{ id, title, when, fill, fillLabel, body:(p,n)=>string }],

  // Só no Custom
  isBuilder?: true
}
```

### 3.2 Theming

Cada nicho tem cor (`cardColor`) e grupo de fonte (`group`):
- **serif** — Fraunces (display) — domina os profissionais e criativos clássicos
- **literary** — Playfair Display — narrativa, pesquisa, música, RPG, HQs
- **digital** — Oxanium — game, pixel

A troca acontece por `data-niche` e `data-group` no `<html>`, redefinindo variáveis CSS.

### 3.3 Hero por nicho

A Home de cada nicho tem um bloco visual distinto (`.hero-{id}`). Não basta cor: a estrutura visual também muda — terminal para Dev, swatches para Design, kanban para Cliente, editorial para Narrativa, feed para Marketing, paper para Pesquisa, wireframe + persona para Produto, KPIs para Negócios, HUD para Game, grade de pixels para Pixel Art, postits para Brainstorm, waveform para Música, scroll medieval para RPG, card de receita para Cozinha, timeline para Animação, painéis para HQ, grade vazia para Custom.

---

## 4. Os 18 nichos — racional

### 4.1 Core (8)

Cobertura dos profissionais de conhecimento. Cada um tem fluxo de trabalho específico o suficiente para não caber bem em outro:

- **Dev** — código, decisões técnicas, estado de produção
- **Design** — sistema visual, tokens, peças
- **Gestão de Clientes** — múltiplos clientes simultâneos, comunicação, propostas
- **Narrativa** — obra longa, personagens, vozes
- **Marketing** — calendário, tom, canais, métricas
- **Pesquisa** — fontes catalogadas, hipóteses, citação
- **Produto/UX** — discovery, jornadas, decisões com racional
- **Negócios** — estratégia, plano, análise sem chavão

### 4.2 Criativo & Mídia (8)

Domínios criativos onde projetos têm vida longa e o "esquecimento" entre sessões é especialmente custoso:

- **Game Design** — sistemas que se entrelaçam, escopo é inimigo
- **Pixel Art** — restrição é o estilo
- **Brainstorm** — pensamento exploratório, *o próprio nicho deste kit*
- **Música** — projeto sonoro coerente, voz lírica fixa
- **RPG (Mestres)** — campanha longa, NPCs com voz, sem furo de lore
- **Cozinha** — conceito que não se perde, menu coerente
- **Animação** — bíblia, série episódica
- **HQs** — arco longo, ritmo de página
- **Custom** — extensibilidade real

### 4.3 Nichos descartados e por quê

Durante o planejamento, alguns candidatos foram cortados:

- **Solo Dev Studio** — sobrepunha Game Design quando o foco é game; quando é app/SaaS, sobrepunha Dev + Produto. Virou caso de uso do **Custom**.
- **Educação / Aprendizado pessoal** — domínio amplo demais; quem estuda formalmente cabe em Pesquisa, quem cria material cabe em Marketing/Conteúdo.
- **Saúde / Bem-estar** — território sensível; preferi não fazer um nicho próprio para evitar conselho médico travestido de produtividade.
- **Direito** — domínio profissional que merece cuidado próprio com citação de leis, jurisprudência. Cabe muito bem como Custom, mas ofertar um pronto exigiria precisão jurídica.
- **Finanças pessoais** — também sensível, cabe Custom.

A regra: o nicho pronto promete que os arquivos e prompts servem ao domínio. Se eu não posso garantir, ofereço o Custom.

---

## 5. Custom como nicho "construtor"

O Custom não é um nicho vazio com cor cinza. É um construtor real:

- Define identidade (nome, ícone, cor, fonte)
- Define arquivos de contexto (nome + papel + template inicial)
- Define comportamentos extras
- Define convenções, saídas, prompts G+
- Salva como preset em `localStorage`
- Carrega/exclui presets a qualquer momento

Múltiplos presets convivem. Útil para quem trabalha em domínios não cobertos ou em combinações de dois nichos.

---

## 6. Meta-documentação

A pasta `meta/` é o próprio kit se documentando — usando a estrutura do nicho **Brainstorm**. É auto-referencial e serve de exemplo vivo do nicho.

- `meta/TEMA.md` — o que o kit explora
- `meta/IDEIAS.md` — banco de ideias capturadas
- `meta/MAPA.md` — clusters
- `meta/FILTROS.md` — critérios de corte
- `meta/STATUS.md` — estado atual do projeto kit
- `meta/CHANGELOG.md` — versionamento
- `meta/LOG-TEMPLATE.md` — template de log para futuras evoluções

---

## 7. Decisões registradas (resumo)

| ID | Decisão | Racional |
|---|---|---|
| D-001 | Página única autossuficiente | Sem build, sem servidor, fácil de hospedar em GitHub Pages |
| D-002 | 18 nichos profundos vs. muitos rasos | Cobertura honesta > catálogo inchado |
| D-003 | Hero distinto por nicho | Não basta trocar a cor — o ambiente visual carrega o tom |
| D-004 | Custom como construtor real | Extensibilidade verdadeira, não só "vazio cinza" |
| D-005 | Meta-doc em `meta/` usando Brainstorm | O kit se documenta a si mesmo no próprio formato |
| D-006 | Templates pelo nome direto, sem "definitivo"/"aprimorado" | Padronização profissional, sem moralina de versionamento |
| D-007 | A-F universais imutáveis | O ciclo de vida de projeto é o mesmo em todo domínio |
| D-008 | Theming via CSS variables + `[data-niche]` | Sem repintar tudo no JS — o CSS faz o trabalho |
| D-009 | Persistência em `localStorage`, não servidor | Privacidade + simplicidade. Cada um com seu navegador |

---

## 8. O que NÃO está no kit (deliberadamente)

- **Sincronização entre dispositivos** — `localStorage` é local. Para compartilhar preset, você exporta/cola.
- **Integração com a API do Claude** — o kit gera prompts para você colar; não chama a API.
- **Análise dos seus arquivos** — não há upload, não há leitura de conteúdo seu.
- **Autenticação / contas** — nada de login.

Tudo isso poderia existir num produto maior. Este é deliberadamente um **kit-página**.

---

## 9. Próximas evoluções possíveis (não compromissos)

Em `meta/IDEIAS.md` ficam as ideias capturadas. Algumas em destaque:

- Exportar/importar presets Custom como `.json`
- Modo "biblioteca" — galeria de presets compartilhados (precisaria de back-end)
- Versão impressa dos templates (PDF)
- Tradução para inglês
- Tema claro (atualmente só escuro)

Nada disso está prometido. O kit core é estável.
