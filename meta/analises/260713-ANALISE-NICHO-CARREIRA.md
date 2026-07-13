# ANÁLISE — Nicho «Carreira» (18º nicho do KCM)

> **Procedência:** nota `260712-2353.txt` (mapeamento de campo do usuário) + leitura dos 17 nichos
> existentes (`src/niches/*.js`), do `NICHOS-CANDIDATOS.md` e do `meta/CEREBRO.md`.
> **Raia:** Chat (planejamento). Este documento **não é a spec** — é a base que a `spec0041` vai executar.
> **Status:** proposta para validação. Onde há decisão em aberto, está marcada como **[EM ABERTO]**.

---

## 1. O problema (o que o usuário trouxe)

Resumo factual do caso de campo, sem o desabafo (o desabafo é dado, não é fato — ver §5.6):

- **Situação:** assistente administrativo numa loja de materiais de construção desde nov/2025.
  Formado em Ciência da Computação (mai/2025), sem emprego na área.
- **Escopo contratado ≠ escopo real.** Contratado como apoio a televendas + apoio de marketing
  (catálogo, Canva/Figma/Corel). O escopo **cresceu por acúmulo**: campanhas, catálogos, cartazes,
  impressão, conteúdo de marketing interno e, agora, **conferência de pedidos de compras** (com
  promessa de, no futuro, *fazer* os pedidos). Sem revisão de cargo nem de salário.
- **Ativos não contabilizados.** Construiu, por iniciativa própria, um **catálogo digital/site** que
  a diretoria queria havia anos e ninguém entregou; tem em fila WMS, dashboards e o *match*
  pedido×fornecedor; mantém ~10 ferramentas internas de escritório. Fora do trabalho: KCM, ASU,
  FlatDrop, jogos, novels.
- **Decisões pendentes e arriscadas:** pedir (ou não) aumento/revisão de cargo; quando; como; o que
  fazer com a **propriedade** do que construiu na empresa; se aceita ou barra novos acréscimos de
  escopo (ex.: atendimento a cliente, que ele não quer); e a busca de emprego na área.
- **Pedido central:** um nicho que **ingira os `meta/` dos outros projetos KCM**, entenda quem ele é,
  e o ajude a **se apresentar** (currículo, portfólio, LinkedIn) e a **decidir** (o quê, quando, onde,
  como), em fases, com capacidade de pesquisa e comparação — e sem bajulação.

### O padrão por trás do caso
Não é "coaching". É um problema clássico de **contexto perdido aplicado à própria carreira**: a pessoa
produz evidência todos os dias (entregas, sistemas, problemas resolvidos) e **não registra nada**; quando
chega a hora de negociar ou de se candidatar, a memória entrega três linhas genéricas e um currículo
que não prova nada. É exatamente a dor que o KCM existe para resolver — só que o "projeto" é a pessoa.

---

## 2. Por que nenhum dos 17 nichos serve

| Nicho | Por que não cobre |
|---|---|
| `business` | O **sujeito é a empresa** (unit economics, estratégia, mercado). Usá-lo aqui transformaria o assistente em consultor da loja — que é justamente o trabalho não remunerado que já se faz demais. A empresa aqui é **ambiente**, não objeto. |
| `client` | Freelance/entrega a cliente: escopo, contrato, cobrança. Cobre um *pedaço* (o eventual CNPJ), não o eixo. |
| `product` / `research` | O objeto é um artefato/uma investigação, não uma trajetória. |
| `brainstorm` | Pensa bem, mas **não acumula dossiê** nem tem evidência versionada. |
| `custom` | Geraria algo, mas sem behaviors nem salvaguardas — e o caso tem áreas sensíveis (salário, jurídico, emocional) onde um genérico erra feio. |

O `NICHOS-CANDIDATOS.md` chega perto em **«Desenvolvimento Pessoal & Coaching»** — mas aquilo era
autoconhecimento/hábitos/metas. O que falta é **carreira com lastro de evidência**: outro objeto, outro
risco, outros arquivos. O candidato antigo pode ser marcado como **absorvido em parte** (como já
aconteceu com "Solo Dev Studio" e "User Research").

---

## 3. A tese do nicho

> **Transformar o que você já fez em prova, e prova em decisão.**

Dois motores, que **não podem se misturar**:

1. **Dossiê — quem eu sou.**
   `EVIDENCIAS` (fato datado + prova) → `DOSSIE` (competência com nível *e* lastro) → artefatos
   (currículo, LinkedIn, portfólio, pitch). Direção única: **nada aparece no artefato que não exista
   na evidência.**

2. **Movimento — o que fazer agora.**
   `SITUACAO` (contratado × real) + `MERCADO` (faixas e vagas *pesquisadas*) → `DECISIONS` (com
   contraponto) → `PLANO` (fases com gatilho) → `ESTUDO` (a lacuna entre o dossiê e o mercado).

**A assinatura do nicho** (o que nenhum outro faz): **mineração dos outros projetos KCM.** Você entrega
os `meta/` do satelite-web, do ASU, do FlatDrop, dos jogos, das novels — e ele extrai evidência
("harness de 41 checagens sobre um gerador vanilla de 17 módulos, disciplina de spec + `git diff`") e
devolve **linha de currículo com prova anexável**. É isto que ataca o "zero experiência".

---

## 4. Riscos do domínio (e por que eles moldam os behaviors)

Este nicho é o mais perigoso do kit até hoje. Os quatro modos de falhar:

1. **Bajulação.** Um conselheiro de carreira que concorda com você é pior que nenhum: você entra na
   sala do diretor com um argumento que nunca foi testado. **Antídoto:** contraponto obrigatório antes
   de qualquer ato irreversível.
2. **Invenção.** Currículo/portfólio inflado é o **pior fracasso possível** — custa a vaga *e* a
   credibilidade, e é irreversível. **Antídoto:** evidência antes de adjetivo, com data e prova.
3. **Número chutado.** "Você deveria ganhar uns R$ X" sem fonte destrói a negociação no primeiro
   contra-argumento. **Antídoto:** faixa sempre pesquisada, com fonte, data, região e senioridade —
   ou rotulada como estimativa com faixa.
4. **Fora de escopo.** Propriedade do sistema que ele construiu no trabalho, CNPJ, contrato, rescisão:
   é **jurídico**. Frustração e exaustão: é **saúde**. **Antídoto:** o nicho nomeia a fronteira,
   organiza os fatos para a conversa com o profissional certo, e **não opina como se fosse um**.

---

## 5. Behaviors propostos (6)

> Formato KCM: `id`, título curto, corpo que entra nas instruções.

### 5.1 `evidence_first` — Evidência antes de adjetivo
Nada entra em currículo, portfólio, LinkedIn ou pitch sem **fato datado + prova** registrada em
`EVIDENCIAS.md`. Adjetivo ("proativo", "sênior", "domínio de X") é **derivado** de fato, nunca
afirmado por conta própria. Se o usuário pede para "melhorar" o currículo e não há lastro, o
assistente **diz que falta evidência** e sugere como produzi-la — não preenche o vazio com estilo.
Verbo de entrega vem com número quando o número existe, e sem número quando não existe (inventar
métrica é o mesmo erro).

### 5.2 `scope_ledger` — Livro-razão do escopo
Mantém em `SITUACAO.md` a distinção **cargo contratado × escopo real**, em linha do tempo, com data,
origem do pedido e prova. Todo acréscimo de função é registrado **no dia em que acontece** (é o dado
que a memória perde e que a negociação exige). Sinaliza quando um novo acréscimo cruza uma **fronteira
declarada** pelo usuário (ex.: "não quero atendimento a cliente") — antes de ele aceitar por inércia.

### 5.3 `benchmark_sourced` — Número com fonte, ou não é número
Faixa salarial, piso de categoria, valor de mercado e comparação de cargo são **pesquisados** (região,
senioridade, modalidade, **data**) e citados com fonte. Nunca chutados. Quando só há estimativa, é
rotulada como estimativa e vem com faixa. Também vale para a conta do "quanto meu trabalho vale":
mostra a conta, não a conclusão.

### 5.4 `counterargue_before_irreversible` — Contraponto antes do irreversível
Antes de qualquer ato que não dá para desfazer — pedir aumento, pedir revisão de cargo, revelar
autoria/valor de um sistema, recusar tarefa, pedir demissão, publicar portfólio com material da
empresa — entrega: (a) o **melhor** argumento contrário (não uma versão fraca); (b) o cenário adverso
e a probabilidade; (c) o **timing** (o estado da empresa importa: pedir aumento numa semana de aperto
de caixa é outra conversa); (d) o custo de oportunidade. Depois disso, **recomenda** — não fica em
cima do muro.

### 5.5 `mine_projects` — Minerar os projetos
Ao receber `meta/` de outro projeto (do KCM ou não), varre em busca de **evidência**: o que foi
construído, o problema que resolvia, a decisão difícil, o número (versão, cobertura, tamanho, tempo),
o papel exercido. Converte em: **fato → competência demonstrada → como provar numa entrevista**.
Escreve o resultado em `EVIDENCIAS.md` (append) e atualiza `DOSSIE.md`. Nunca infla: se o projeto é
pequeno, a evidência é pequena.

### 5.6 `vent_is_not_fact` — Desabafo é dado, não é fato
O desabafo é bem-vindo (e útil: revela fronteiras, valores e o que drena). Vai para o log/`SITUACAO`
como **sinal**, marcado como tal — **nunca** vira fato no dossiê nem premissa de decisão sem checagem.
O assistente não bajula, não dramatiza e não terapeutiza: quando a conversa passa de carreira para
sofrimento, ele diz isso com franqueza e sugere apoio humano. Quando passa para **jurídico**
(propriedade do que foi construído, contrato, CNPJ, rescisão), ele organiza os fatos e recomenda
**advogado** — sem dar parecer.

---

## 6. Campos (topbar + builder)

**Topbar**
- `person` — texto: nome/apelido do projeto (ex.: `carreira-alex`).
- `momentSel` — select **Momento**: *Empregado querendo mudar · Buscando a primeira vaga na área ·
  Negociando na atual · Transição de área · Autônomo/CNPJ · Estabilizado, só acumulando evidência*.
- `frentes` — **multi** (chips, tipo `multi` já existe desde a spec0032): *Aumento/revisão de cargo ·
  Nova vaga · Portfólio/vitrine · Estudo · Renda própria · Reorganizar o trabalho atual*.
- `langSel` — idioma do output (padrão `pt`).

**Builder — «Enquadramento profissional»**
- `radios` **Área-alvo**: Dev · Dados/BI · Produto · Design · Infra/Suporte · Administrativo/Ops · Outra.
- `radios` **Modalidade aceita**: Presencial (região) · Híbrido · Remoto · Indiferente.
- `chips` **Instrumentos a manter**: Currículo · LinkedIn · GitHub · Portfólio/site · Apresentação/pitch · Carta.
- `chips` **Fronteiras** (o que você **não** quer): *Atendimento a cliente · Plantão/escala ·
  Viagem · Gestão de pessoas · Vendas · Presencial fixo*. → alimenta o `scope_ledger` (5.2).

> O campo **Fronteiras** é a inovação de campo desta proposta: é a única forma de o assistente
> reconhecer, no dia em que o escopo cresce, que ele cruzou uma linha que **você já tinha declarado**.
> (Lembrete da spec0033: campo de topbar/builder só serve se chegar ao `buildInstr` — conferir.)

---

## 7. Arquivos de contexto

| Arquivo | Cat. | Papel | Regime |
|---|---|---|---|
| `CONTEXT.md` | essencial | Quem sou: formação, histórico, restrições reais (região, jornada, salário atual), o que busco. Pano de fundo. | Estável |
| **`EVIDENCIAS.md`** | essencial | **O coração.** Append-only. Cada entrada: **data · fato · prova · competência que demonstra · onde isso pode ser usado**. Fonte: trabalho + projetos + estudo. | Append |
| **`DOSSIE.md`** | essencial | O retrato consolidado, **derivado** das evidências: competências com nível e lastro, forma de trabalhar, preferências, **fronteiras**, o que ainda não tem prova. | Reescrito na íntegra (rolante) |
| **`SITUACAO.md`** | essencial | Emprego atual: cargo contratado × escopo real (linha do tempo), remuneração e benefícios, sinais da empresa, negociações e o que foi dito (com data). | Append + seção rolante |
| `MERCADO.md` | recomendado | Vagas-alvo, requisitos recorrentes, **faixas com fonte e data**, e o pipeline de candidaturas (vaga · data · estágio · resultado · aprendizado). | Append |
| `PLANO.md` | recomendado | Fases (agora / próximo / depois) com **gatilho explícito**: "quando X, faço Y". Critério de decisão antes da emoção. | Rolante |
| `ESTUDO.md` | recomendado | Trilha derivada da lacuna `MERCADO × DOSSIE` — o que estudar **porque o mercado pede e você não tem prova**, não porque parecia interessante. | Rolante |
| `DECISIONS.md` | essencial | Decisão · data · premissas · alternativas · **contra-argumento** · risco aceito. | Append |
| `STATUS.md` | essencial | O agora + próximo passo. | Rolante |
| `LOG-TEMPLATE.md` | opcional | Diário: o que aconteceu, sinais, desabafo (marcado como sinal). | Append |

**Artefatos gerados (não são arquivos de contexto):** currículo, resumo do LinkedIn, portfólio, pitch,
carta. Saem do `DOSSIE` + `EVIDENCIAS` sob demanda, com o registro do que foi enviado, para onde e
quando (em `MERCADO`).

---

## 8. Gatilhos extras (tabela do CEREBRO)

| Quando | O que o assistente entrega |
|---|---|
| Entrega concluída no trabalho ou em projeto pessoal | Entrada nova em `EVIDENCIAS.md` (fato+prova+competência), no mesmo dia. |
| Escopo cresceu / nova função pedida | Linha na linha do tempo de `SITUACAO.md` + aviso se cruzou uma **fronteira** declarada. |
| Conversa/sinal do superior sobre cargo, salário ou promessa | Registro datado em `SITUACAO.md` (o que foi dito, por quem, com que condicionante). |
| Pesquisa de faixa/vaga | `MERCADO.md` com **fonte + data**; nunca número solto. |
| Decisão de carreira tomada | `DECISIONS.md` completo (com o contra-argumento que foi vencido). |
| `meta/` de outro projeto entregue ao assistente | Rodada de mineração (5.5) → `EVIDENCIAS` + `DOSSIE`. |
| Candidatura enviada / resposta recebida | Pipeline em `MERCADO.md` + aprendizado. |
| Artefato gerado (currículo/pitch) | Versão registrada; **checagem de lastro** antes de entregar. |

---

## 9. Salvaguardas e privacidade

- **Projeto privado por padrão.** O CEREBRO gerado deve dizer, em texto: *este projeto contém dados
  pessoais e financeiros; não publique em repositório público.*
- **Versionar, sim — mas local ou privado.** Recomendação: `git init` local (sem remote) ou remote
  **privado**. O git aqui não é para compartilhar, é para ter **histórico e diff** de um dossiê que
  vai crescer por meses. Perder o `EVIDENCIAS.md` por um HD ruim é perder o ativo inteiro.
  *(Backup: cópia periódica em outro disco/nuvem privada.)*
- **Terceiros.** Nomes de colegas/superiores aparecem só quando necessários ao fato; o registro é do
  **evento**, não da pessoa.
- **Fronteira jurídica e de saúde** explicitada nas convenções (ver 5.6).

---

## 10. Orçamento de instruções

Teto atual do harness: **6900 caracteres** por nicho (`N[narrative]` está em 6688 — o mais apertado).
Este nicho tem 6 behaviors + 6 convenções + 8 gatilhos + 10 arquivos. **Risco real de estourar.**
Mitigações, na ordem: (a) redigir os behaviors curtos (o corpo longo vive no CEREBRO, não na instrução
curta); (b) `LOG` e `ESTUDO` como opcionais; (c) se ainda assim estourar, **não elevar o teto** —
enxugar. A `spec0041` deve medir e reportar o número, como as anteriores.

---

## 11. Fatiamento proposto

- **spec0041 — o nicho base.** `src/niches/career.js` completo (intro, topbar, behaviors, builder,
  convenções, gatilhos, os 10 templates), registro no `build.js`/manifesto, harness de **18 nichos**
  + check **G15** (o nicho existe e seus campos chegam ao `buildInstr` — armadilha da spec0033).
- **spec0042 — mineração assistida.** Refino do `mine_projects`: protocolo de leitura de `meta/` de
  outro projeto + template de saída padronizado.
- **Depois (opcional):** automação leve (scripts de acompanhamento de vagas/lembretes) — **fora do
  produto** (o KCM não introduz dependência no lado do usuário); vira sugestão do assistente, não
  arquivo do kit.

---

## 12. [EM ABERTO]

1. **Nome/rótulo.** `career` / «Carreira» (proposto). Alternativas: «Trajetória», «Carreira & Trabalho».
2. **Grupo/cor.** Vai no grupo sério (`serif`). Cor do card a definir (não colidir com `#38bdf8`
   do business nem com `--code:#e8823a`).
3. **`NICHOS-CANDIDATOS.md`:** marcar «Desenvolvimento Pessoal & Coaching» como *parcialmente
   absorvido* por `career` (padrão já usado para "Solo Dev Studio" e "User Research").
4. **`LOG` no nicho:** entra como opcional ou fica de fora para poupar teto?
