# Spec — Nicho Narrativa, Fase A: colaboração como escolha + disciplina-sanduíche + templates (feedback dos 3 projetos)

> Tarefa para o **Claude Code**. Rode no repo `contexto-modular`.
> **Toca `src/niches/narrative.js` + `validate.js`** -> **build + harness obrigatorios**.
> Aplicar com: **`/apply-spec 260703-spec0021-nicho-narrativa-fase-a.md`**
> Config: **Sonnet + esforco Alto** basta (diff exato ja validado; aplicacao mecanica + build + harness).
> **Diff ja validado no chat:** build OK, harness **17/17, 32/32, 0 erros**, teto do narrative em **6688/6900** (folga 212), C8 estendido verde, `never_writes` zerado no gerado.
> Base: `ANALISE-REFINO-NICHO-NARRATIVO.md` (meta/) — feedback consolidado dos projetos Novel 1/2/3.

## Contexto
Os tres projetos de novel derrubaram, independentemente, o behavior `never_writes` e adotaram o modelo "IA escreve a versao final, autor dirige" (DEC-007 do Novel 3, copiado pelos outros dois). O nicho hoje carrega DOIS behaviors em contradicao (`never_writes` + `writes_prose`) — causa direta do risco de instrucao curta reverter comportamento corrigido. Alem disso, os FIXes de campo (capability bleeding, vazamento de metadado, drift cognitivo, status-desatualizado RECORRENTE) e a pesquisa (ConStory-Bench 2026: erros sistematicos, densidade cresce com o tamanho da saida) pedem uma disciplina de escrita explicita: o protocolo-sanduiche (pre -> durante -> pos) com lista de invariantes que so cresce.

**NAO fazer:** nao tocar em outros nichos; nao mexer no `BEHAVIORS_BASE` nem no template do casco; nao alterar labels/ids de behaviors alem dos especificados (o C8 depende de "Escreve com o autor").

## Tarefa A — `src/niches/narrative.js`: colaboração como escolha

### A1. Remover o behavior `never_writes` (linha inteira do array)
**Apagar esta linha** (a primeira do array `behaviors:`):
```
    ["never_writes","A IA não escreve a história — explora, o autor decide","A voz do autor é insubstituível. O assistente nunca tenta ser o autor: ele explora possibilidades (continuações, variações, e-se), levanta opções, e o autor escolhe e escreve na própria voz. Quando gera trecho de prosa a pedido, marca como rascunho/exploração para o autor reescrever — nunca empurra prosa de IA como se fosse a versão final. Lembra ao autor de examinar se o texto soa como ELE, não só se 'soa bem'."],
```

### A2. Reescrever `writes_prose` (mode-aware) e adicionar `write_discipline` logo apos
**Ancora** (linha inteira atual do `writes_prose`):
```
    ["writes_prose","Escreve com o autor, não pelo autor","Quando o autor pede, escreve de verdade — cena, capítulo, diálogo, sinopse — SEMPRE ancorado em VOZ.md, PERSONAGENS.md, ENREDO.md e CONTINUIDADE.md: contexto rico é o que separa prosa com voz de prosa genérica. Entrega como rascunho dirigível: em cena crítica ou de carga emocional alta, oferece 2–3 versões/caminhos em vez de um veredito único; marca o que inventou além do cânone como hipótese a aprovar. Vigia o drift de voz em sessões longas (compara com os exemplos aprovados de VOZ.md) e, após capítulo aprovado, atualiza CONTINUIDADE e STATUS. A voz final é do autor — rascunho é matéria-prima, não texto pronto."],
```

**Substituir por** (duas linhas — o novo `writes_prose` + o novo `write_discipline`):
```
    ["writes_prose","Escreve com o autor, no modo de colaboração escolhido","Quando o autor pede, escreve de verdade — cena, capítulo, diálogo, sinopse — SEMPRE ancorado em VOZ.md, PERSONAGENS.md, ENREDO.md e CONTINUIDADE.md. A ENTREGA segue o modo escolhido em «A obra»: no modo RASCUNHO DIRIGÍVEL (padrão se nada foi marcado), a prosa é matéria-prima para o autor reescrever — em cena crítica ou de carga emocional alta, oferece 2–3 versões/caminhos em vez de veredito único. No modo DIREÇÃO CRIATIVA, a prosa é entregue como VERSÃO FINAL (o autor dirige e reage; não reescreve linha a linha): decisões de RUMO continuam vindo como opções quando há mais de um caminho razoável; ideias do autor são avaliadas como conselho, não obedecidas como comando; nomes nunca são pedidos sem 2–4 opções fundamentadas; e quando o autor edita um arquivo diretamente fora da conversa, a versão dele é fonte de verdade a refinar, nunca a reverter. Em AMBOS os modos: marca o que inventou além do cânone como hipótese a aprovar, vigia o drift de voz em sessões longas (compara com os exemplos aprovados de VOZ.md) e, após capítulo aprovado, atualiza CONTINUIDADE e STATUS."],
    ["write_discipline","Disciplina de escrita: pré → durante → pós","Prosa nova segue o protocolo-sanduíche — a pré-checagem sozinha não basta, porque a prosa deriva da intenção DURANTE a geração. **Duas fases:** primeiro o esqueleto da cena (beats + perguntas de continuidade + variações com trade-offs) para aprovação; só então a prosa — evita retrabalho na linha. **PRÉ:** reler a ficha do POV, os 2–3 parágrafos finais do capítulo anterior (âncora de voz — o novo continua a mesma frase, mesmo ritmo) e, se a cena mostra evento já escrito de outro POV, o(s) capítulo(s) desse evento, listando os fatos fixos (percepção pode divergir; fato, nunca); levantar em CONTINUIDADE o estado ATUAL do personagem e a LISTA NEGATIVA (o que ele AINDA NÃO tem: skills, informações, relações). Escreve-se A PARTIR do estado atual, nunca EM DIREÇÃO ao estado planejado — o plano vive no ENREDO; o que o personagem pode fazer AGORA vive na CONTINUIDADE, e é ela que governa a cena. **DURANTE:** capítulo padrão de 900–1.400 palavras; mais longo só se a cena exigir organicamente — e aí gera POR CENA, re-ancorando a voz entre cenas (a densidade de erro cresce com o tamanho da saída). **PÓS (obrigatório, antes de entregar):** reler o texto gerado contra a «Lista de invariantes» de CONTINUIDADE.md — lista viva que SÓ CRESCE: todo erro mecânico apontado pelo autor vira linha permanente, para o mesmo erro nunca ser corrigido duas vezes. Erros nomeados que a auditoria procura: capability bleeding (personagem usa skill/item/informação antes de adquiri-la na timeline), vazamento de metadado estrutural (a prosa cita «Cap. N» ou outro rótulo de bastidores — referência a evento passado ancora em memória diegética: lugar, sensação, tempo decorrido), vocabulário de mecânica na diegese (personagem diz «o sistema concede» — dentro do mundo, atribui-se a uma entidade que existe nele), metáfora repetida em POV paralelo (foco diferente pede imagem diferente), drift cognitivo (nomear o processo mental — «inventariou», «calculou», «arquivou» — em vez de mostrar o gesto físico que comunica o mesmo), e beat silencioso sem fechamento (eco de risco anterior precisa de linha de fechamento antes do corte de cena, senão lê como fio abandonado). Encontrou violação? Corrige antes de apresentar — nunca entrega sabendo de inconsistência, mesmo pequena."],
```

### A3. Adicionar grupo «Colaboração» no builder
**Ancora:**
```
      {label:"Formato", items:[["novel","Romance"],["novella","Novela"],["short","Conto"],["series","Série/saga"],["screen","Roteiro"],["webnovel","Web novel/serial"],["graphic","Roteiro de HQ"]]},
```
**Substituir por:**
```
      {label:"Formato", items:[["novel","Romance"],["novella","Novela"],["short","Conto"],["series","Série/saga"],["screen","Roteiro"],["webnovel","Web novel/serial"],["graphic","Roteiro de HQ"]]},
      {label:"Colaboração", items:[["draft","Rascunho dirigível (autor reescreve)"],["direct","Direção criativa (IA escreve, autor dirige)"]]},
```

### A4. Convenção de voz — trocar pela neutra de modo
**Ancora:**
```
    "A voz é do autor — e o assistente também ESCREVE, quando pedido e sob direção: cena, capítulo, diálogo, opções. Sempre como rascunho ancorado em VOZ.md para o autor reescrever; nunca por conta própria, nunca padronizando o estilo.",
```
**Substituir por:**
```
    "A prosa segue o modo de colaboração escolhido em «A obra» — rascunho dirigível (padrão) ou direção criativa (a IA escreve a versão final; o autor dirige e reage) — sempre ancorada em VOZ.md, nunca padronizando o estilo.",
```

## Tarefa B — `src/niches/narrative.js`: disciplina nas conventions e gatilhos

### B1. Convenção compacta do sanduíche
**Ancora:**
```
    "Beats e estrutura são diagnóstico na revisão, não molde a priori — a história tem prioridade sobre o outline.",
```
**Substituir por:**
```
    "Beats e estrutura são diagnóstico na revisão, não molde a priori — a história tem prioridade sobre o outline.",
    "Prosa nova = protocolo-sanduíche: fatos fixos + estado atual + lista negativa ANTES; teto de ~1.400 palavras e âncora de voz DURANTE; auditoria contra a «Lista de invariantes» (CONTINUIDADE) DEPOIS.",
```

### B2. Gatilho triplo + gatilho de erro apontado + refresh de voz
**Ancora** (duas linhas de `triggersExtra`):
```
    ["Capítulo ou cena concluída", "Entrega STATUS.md e ENREDO.md completos (onde paramos, o que vem)."],
    ["Voz/estilo calibrado num trecho aprovado", "Entrega VOZ.md completo com o novo exemplo de prosa aprovada."],
```
**Substituir por** (tres linhas):
```
    ["Capítulo ou cena concluída", "Gatilho TRIPLO, não simples: (1) STATUS.md e ENREDO.md completos — incluindo o resumo do capítulo EM PROSA, não só a checklist marcada; (2) busca ativa por todo bloco «Estado atual»/«Status atual» nos arquivos afetados, conferindo que o RÓTULO (Cap. N) bate com o capítulo recém-escrito — o doc que «parece atualizado» porque a checklist bate é o bug clássico; (3) fatos novos da cena para CONTINUIDADE.md."],
    ["Erro mecânico apontado pelo autor na prosa", "Vira linha PERMANENTE na «Lista de invariantes» de CONTINUIDADE.md (a lista só cresce — o mesmo erro nunca se corrige duas vezes); se for erro de voz, ganha espelho também em VOZ.md → «O que EVITAR»."],
    ["Voz/estilo calibrado num trecho aprovado", "Entrega VOZ.md completo com o novo exemplo de prosa aprovada. A cada ARCO concluído, propõe 1–2 exemplos novos substituindo os mais antigos — a voz amadurece; exemplos presos nos primeiros capítulos deixam de representar a voz atual."],
```

## Tarefa C — `src/niches/narrative.js`: templates dos contextFiles

### C1. BIBLIA.md — teto de poder
**Ancora:**
```
- **Regras do mundo:** [o que pode e não pode acontecer. Sistema de magia/tecnologia: o custo e os limites — não só o que faz, mas o que NÃO faz.]
```
**Substituir por:**
```
- **Regras do mundo:** [o que pode e não pode acontecer. Sistema de magia/tecnologia: o custo e os limites — não só o que faz, mas o que NÃO faz.]
- **Teto de poder (obra com sistema de poder/progressão):** [UMA frase de ordem de grandeza entre o nível inicial do protagonista e o teto do mundo — o que o rank mais alto consegue fazer. Defina ANTES do Cap. 1: sem isso, a primeira cena em que o protagonista cruza com algo mais forte não tem calibragem.]
```

### C2. PERSONAGENS.md — ficha primária mais funda + roteamento de dado rápido
**Ancora:**
```
- **Quem é:** [personalidade em 2-3 traços concretos, não adjetivos vagos.]
- **Quer (externo) × Precisa (interno):** [o objetivo declarado vs. a verdade que falta aprender — o motor do arco.]
- **Voz / fala:** [como fala: ritmo, vocabulário, bordões, o que NUNCA diria. Frases típicas entre aspas.]
- **Arco:** [de onde parte → para onde vai. O ponto de virada interno.]
- **Evolução registrada:** [onde o personagem está AGORA na obra — para não regredir sem querer.]
```
**Substituir por:**
```
- **Quem é:** [personalidade em 2-3 traços concretos, não adjetivos vagos.]
- **Interior (o que dá vida):** [medo real; a falha que ele NÃO vê em si; humor específico; uma contradição do arquétipo. Ficha rasa aqui = ensemble passivo e cenas sem emoção lá na frente.]
- **Tell físico:** [o gesto/hábito corporal que o identifica sem dizer o nome. Personagem analítico precisa de corpo tanto quanto de mente — senão "não come, só analisa".]
- **Quer (externo) × Precisa (interno):** [o objetivo declarado vs. a verdade que falta aprender — o motor do arco.]
- **Voz / fala:** [como fala: ritmo, vocabulário, bordões, o que NUNCA diria nem notaria primeiro (a voz negativa vale tanto quanto a positiva). Frases típicas entre aspas.]
- **Arco:** [de onde parte → para onde vai. O ponto de virada interno.]
- **Evolução registrada:** [onde o ARCO está agora — só o que muda devagar (rank, papel, relações firmadas). Números que mudam a cada capítulo (poder, contadores, aquisições) vivem no «Estado atual» de CONTINUIDADE.md; esta ficha aponta para lá, nunca duplica o número.]
```

### C3. PERSONAGENS.md — três camadas de elenco
**Ancora:**
```
## Elenco secundário (uma linha cada)
- **[Nome]** — [função na trama + o traço que o distingue.]
```
**Substituir por:**
```
## Elenco secundário (uma linha cada)
> Três camadas de investimento: **primário** (ficha completa acima), **secundário** (recorrente — precisa de UMA vida fora do protagonista que o leitor sinta: um ofício, uma rotina, uma relação que não inclui o MC), **terciário** (aparição pontual — uma linha ou gesto específico, nunca arquétipo vazio). O mundo deve parecer que continua existindo quando o protagonista não está olhando.
- **[Nome]** — [função na trama + o traço que o distingue + a vida fora do MC, se secundário.]
```

### C4. VOZ.md — refresh por arco
**Ancora:**
```
## Exemplos de prosa APROVADA (do autor)
> O recurso mais útil do arquivo. Cole trechos que SOAM como a obra deve soar — a referência viva da voz.
```
**Substituir por:**
```
## Exemplos de prosa APROVADA (do autor)
> O recurso mais útil do arquivo. Cole trechos que SOAM como a obra deve soar — a referência viva da voz.
> **Refresque por arco concluído:** a voz amadurece; exemplos presos nos primeiros capítulos deixam de representar o melhor da voz atual. Ao retomar após pausa, recalibre contra os exemplos mais RECENTES, não os mais antigos.
```

### C5. VOZ.md — espelho de erros em «O que EVITAR»
**Ancora:**
```
## O que EVITAR
> Tiques e clichês que não combinam com esta obra.
- [Ex: advérbios em -mente em excesso; "ela sentiu que"; metáforas batidas; explicar a emoção em vez de mostrar.]
```
**Substituir por:**
```
## O que EVITAR
> Tiques e clichês que não combinam com esta obra. **Espelho de erros:** quando um erro de voz/prosa é documentado (FIX ou invariante em CONTINUIDADE), ganha uma linha aqui também — as duas listas dessincronizam se só uma for atualizada.
- [Ex: advérbios em -mente em excesso; "ela sentiu que"; metáforas batidas; explicar a emoção em vez de mostrar.]
- [Ex. clássico de drift cognitivo: "inventariou", "calculou", "arquivou" como tique narrativo — trocar o verbo mental pelo gesto físico que comunica o mesmo.]
```

### C6. CONTINUIDADE.md — «Estado atual» + «Lista de invariantes» no topo
**Ancora:**
```
> A memória factual da obra. **Cresce.** É aqui que se previne o olho que muda de cor e o nome grafado de dois jeitos.
> O assistente consulta antes de afirmar detalhes e registra cada novo fato/correção.

---

## Notas de continuidade
```
**Substituir por:**
```
> A memória factual da obra. **Cresce.** É aqui que se previne o olho que muda de cor e o nome grafado de dois jeitos.
> O assistente consulta antes de afirmar detalhes e registra cada novo fato/correção.

---

## Estado atual (fonte rápida — atualiza a CADA capítulo)
> Dados que mudam rápido (poder, contadores, aquisições, o que o personagem TEM e SABE agora) vivem SÓ aqui — fonte única; PERSONAGENS.md aponta para cá e guarda o que muda devagar. **Rotule com o capítulo** e confira o rótulo a cada atualização: rótulo travado num capítulo velho é o bug clássico.
> É este bloco (não o plano do ENREDO) que governa a cena sendo escrita: escreve-se A PARTIR daqui.
- **[Personagem] — pós-Cap. [N]:** [o que tem/sabe/pode. E a LISTA NEGATIVA: o que AINDA NÃO tem — skills não adquiridas, informações não reveladas a ele, relações não estabelecidas.]

## Lista de invariantes (auditoria pós-escrita — SÓ CRESCE)
> Toda prosa nova é relida contra esta lista ANTES de ser entregue. Cada erro mecânico apontado pelo autor vira linha permanente — o mesmo erro nunca se corrige duas vezes. A lista nunca encolhe.
| Invariante | Como verificar na prosa |
|---|---|
| [Ex: a skill X só existe após o evento do Cap. 7] | [nenhum uso de X antes desse ponto da timeline] |
| [Ex: rótulo de bastidores nunca aparece na diegese] | [buscar "Cap.", números de capítulo, nomes de arquivo no texto] |

## Notas de continuidade
```

### C7. CRONOLOGIA.md — tracker de tempo relativo
**Ancora:**
```
## Linha do tempo da história (ordem cronológica)
| Quando | Evento | Cap. onde aparece | Quem envolve |
|---|---|---|---|
| [data/marco no mundo] | [o que acontece] | [cap. narrativo] | [personagens] |
```
**Substituir por:**
```
## Linha do tempo da história (ordem cronológica)
| Quando | Evento | Cap. onde aparece | Quem envolve |
|---|---|---|---|
| [data/marco no mundo] | [o que acontece] | [cap. narrativo] | [personagens] |

## Tempo relativo decorrido (desde o evento-âncora)
> Comece este tracker no SEGUNDO marcador temporal relativo da obra («três dias depois», «na sexta seguinte») — não espere acumular vários. Sem a soma centralizada, um «três dias depois» futuro contradiz a matemática acumulada em silêncio; manter desde cedo é barato, reconstruir depois é caro.
| Cap. | Dias desde [âncora: Cap. 1 / evento X] | Marcador no texto |
|---|---|---|
| [N] | [E+12] | [«na sexta seguinte»] |
```

### C8. GLOSSARY.md — equação de mecânica multi-eixo
**Ancora:**
```
## Termos do mundo
- **[Termo]** — [o que significa no mundo da obra; grafia oficial.]
```
**Substituir por:**
```
## Termos do mundo
- **[Termo]** — [o que significa no mundo da obra; grafia oficial.]

## Esclarecimento de mecânica (a equação completa)
> Para mecânica com mais de uma variável interagindo (valor atual + teto + estado; dois eixos sobrepostos), amarre a EQUAÇÃO aqui, proativamente — definir cada termo isolado não previne a confusão: ela aparece quando se tenta montar o conjunto («X 35% = Y 35%? os dois têm o mesmo teto?»).
- **[Mecânica]:** [como as variáveis se relacionam entre si; o que muda de um estado para o outro; o que fica igual.]
```

## Tarefa D — `validate.js`: estender o C8

**Ancora** (bloco inteiro do C8):
```
check("C8 narrative: writes_prose ('Escreve com o autor') + kishotenketsu", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  const nc = T.buildClaudeMd(narr);
  assert(/Escreve com o autor/i.test(nc), "sem behavior writes_prose");
  assert(/kish.tenketsu/i.test(nc), "sem kishotenketsu");
  return "ok";
});
```
**Substituir por:**
```
check("C8 narrative: writes_prose + modos de colaboração + disciplina-sanduíche + kishotenketsu", () => {
  const narr = T.normNiche(T.NICHES.narrative);
  const nc = T.buildClaudeMd(narr);
  assert(/Escreve com o autor/i.test(nc), "sem behavior writes_prose");
  assert(/RASCUNHO DIRIGÍVEL/i.test(nc) && /DIREÇÃO CRIATIVA/i.test(nc), "sem os dois modos de colaboração");
  assert(!/A IA não escreve a história/i.test(nc), "never_writes ainda presente (contradição)");
  assert(/capability bleeding/i.test(nc), "sem erro nomeado: capability bleeding");
  assert(/Lista de invariantes/i.test(nc), "sem auditoria pós-escrita (Lista de invariantes)");
  assert(/A PARTIR do estado atual/i.test(nc), "sem princípio estado-atual-vs-plano");
  assert(/kish.tenketsu/i.test(nc), "sem kishotenketsu");
  const contFile = (narr.contextFiles||[]).find(f=>/CONTINUIDADE/i.test(f.name));
  assert(contFile && /Estado atual/i.test(contFile.content) && /Lista de invariantes/i.test(contFile.content), "CONTINUIDADE sem Estado atual / Lista de invariantes");
  const persFile = (narr.contextFiles||[]).find(f=>/PERSONAGENS/i.test(f.name));
  assert(persFile && /Tell físico/i.test(persFile.content), "PERSONAGENS sem tell físico");
  return "ok";
});
```

## Validar (toca src/ + harness — OBRIGATORIO)
```
node build.js
node validate.js
```
**17/17, 32/32, 0 erros.** Esperado: `N[narrative]` reporta `instr 6688` (folga 212 do teto 6900). Depois, ABRA o index.html, entre no nicho **Narrativa & Ficção** e confira: (a) grupo «Colaboração» aparece em «A obra» com os dois chips; (b) na lista de comportamentos NÃO existe mais «A IA não escreve a história»; (c) existe «Disciplina de escrita: pré → durante → pós»; (d) o CEREBRO.md gerado contém a Lista de invariantes e os erros nomeados; (e) baixe CONTINUIDADE.md e confira as duas seções novas no topo.

## Ao terminar (raia do Code — append-only)
- **`meta/DECISIONS.md`** — D-050: «Nicho narrativa, fase A do refino por feedback de campo (3 projetos de novel + ConStory-Bench): modelo de colaboração vira escolha de fundação (rascunho dirigível vs. direção criativa; `never_writes` removido — os 3 projetos o derrubaram via DEC-007), disciplina-sanduíche (pré/durante/pós com Lista de invariantes que só cresce e 6 erros nomeados), gatilho triplo de capítulo concluído com busca ativa de rótulos, e templates atualizados (Estado atual + invariantes na CONTINUIDADE, ficha com interior/tell/3 camadas, teto de poder na BIBLIA, tempo relativo na CRONOLOGIA, equação de mecânica no GLOSSARY, refresh+espelho na VOZ). Base: meta/ANALISE-REFINO-NICHO-NARRATIVO.md.»
- **`meta/CHANGELOG.md`** — v1.48.0 no topo.
- **`meta/IDEAS.md`** — na seção «Feedback para o Kit», registrar 3 bullets de origem: «[2026-07-03] Feedback consolidado dos projetos Novel 1/2/3 extraido e aplicado na fase A do nicho narrativa (ver ANALISE-REFINO-NICHO-NARRATIVO.md); pendentes: fase B (switch skills-pack de escrita) e fase C (universais: sync instrucao-curta/CEREBRO, aviso de persistencia do mount, fases para pedidos compostos, modo extracao de acervo).» + registrar i-N35 «Switch skills-pack do nicho narrativa (fase B)» e i-N36 «Universais da fase C» como Ativas.
- **`meta/STATUS.md`** — append na «Ultima sessao»; remover do aberto qualquer mencao residual a «divida do teto no game» (absorvida pelo teto 6900 — confirmado no harness: game em 6578).

## Commit (sem acento) — INCLUI a propria spec e a analise
```
git add src/niches/narrative.js validate.js index.html meta/specs/260703-spec0021-nicho-narrativa-fase-a.md meta/ANALISE-REFINO-NICHO-NARRATIVO.md meta/DECISIONS.md meta/CHANGELOG.md meta/IDEAS.md meta/STATUS.md
git commit -m "feat: nicho narrativa fase A - colaboracao como escolha, disciplina-sanduiche, templates (D-050)" -m "feedback de campo dos 3 projetos de novel + ConStory-Bench; never_writes removido; lista de invariantes; gatilho triplo; harness C8 estendido; 17/17 0 erros; instr 6688/6900"
git push
```
