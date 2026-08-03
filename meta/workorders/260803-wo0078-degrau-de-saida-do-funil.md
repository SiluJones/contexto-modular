# WO 0078 — Degrau de saída do funil de análise, saída do CRLF e mensagem entre frentes

> **Tipo:** template + harness. Nenhum arquivo de nicho.
> **Config sugerida:** Sonnet 5, esforço **Médio**. Seis edições ancoradas + um check.
> **Pré-requisito:** `v1.98.0`, commit `21c98cf`, harness **18/18 · 77/77 · 0 erros**, árvore limpa e
> sincronizada com `origin/main`.
> **Base:** `IDEAS-mapsmith.md`, «Feedback para o Kit», itens (4) e (5-parcial) + decisão do usuário de
> 2026-08-03 sobre material trocado entre frentes. Leva **A de 4**.
> **Âncora semântica:** se um trecho-âncora não bater EXATAMENTE, **PARE e reporte**.
> **Idempotência:** procure a frase-chave do texto NOVO antes de cada edição; se já existir, **PULE**.

> **Canal dos meta neste ciclo = CODE.**

---

## 1. Por que

**A cláusula de abandono da wo0074 tem um efeito colateral, e uma frente irmã o sofreu.** Nós ensinamos
o assistente a parar de escrever a análise quando a premissa cai — e **não dissemos onde pousa o que a
leitura descobriu de bom**. O resultado observado no Mapsmith em 2026-08-02: o dono declarou uma pasta
como fato canônico, o assistente foi ler o código, encontrou uma armadilha técnica legítima, e devolveu
uma **análise com duas opções — uma delas «não fazer, só documentar»**, que era a negação do que ele
tinha acabado de decidir. O achado era bom; o formato é que estava errado.

O diagnóstico deles é mais preciso que o nosso: **achado sem endereço vira pergunta**. É assim que uma
análise abandonada ressuscita disfarçada. A saída é dar endereço — e o endereço já existe: a seção
**«Armadilhas desta WO»** do modelo de ordem de trabalho, que é exatamente o lugar de «risco a tratar».

O mesmo item traz uma formulação melhor do teste que já temos. Nosso texto pergunta **o que** está
decidido; o deles pergunta **quem** decide. É a mesma regra com o dedo no lugar certo, e vem com uma
definição de uma linha que faltava: **«análise é para quando a pergunta ainda é dele»**. Vale registrar
que a frente irmã chegou nisso **sem ter a wo0074** (eles estão na v1.94.0) — convergência independente
entre duas frentes é o sinal mais forte de que a regra está certa.

**Duas coisas menores viajam junto.** O modelo de WO **avisa** que arquivo CRLF é armadilha e **não dá a
saída**, que é sempre a mesma e vinha sendo aplicada sem estar escrita: âncora de UMA linha não tem
quebra dentro, então o fim de linha não morde. E o usuário decidiu, em 2026-08-03, que **mensagem
trocada com outra frente não vira artefato de repositório**: é nota transitória, vive fora do repo
enquanto serve e vai para o arquivo morto depois. Isso precisa estar escrito, senão o kit vai sugerir
uma pasta versionada para ela na primeira oportunidade — como já sugeriu.

---

## Edição 1 — `src/index.template.html` · o teste (1) pergunta QUEM decide

**Âncora** (trecho no MEIO da linha «Antes de escrever, dois testes baratos»):

```
(1) **O QUÊ já está decidido?** Então isto é execução, não análise — vá para o trabalho, que já tem critério de aceite e armadilhas.
```

**Substituir por:**

```
(1) **Quem ainda decide?** O dono já decidiu o QUÊ? Então isto é execução, não análise: o par de artefatos é **decisão registrada + ordem de trabalho**, e a ordem já traz critério de aceite e armadilhas. **Análise é para quando a pergunta ainda é dele.**
```

> A frase `Então isto é execução, não análise` é asserida pelo **C30** — preserve palavra por palavra,
> inclusive o «Então» com maiúscula. Foi o que quase bloqueou esta edição no sandbox.

## Edição 2 — `src/index.template.html` · o achado ganha endereço

**Âncora** (fim da linha «Abandonar no meio é desfecho legítimo»):

```
Análise que continua depois da premissa cair devolve como «ponto de decisão» o que era escolha técnica sua, e custa um turno.
```

**Substituir por:**

```
Análise que continua depois da premissa cair devolve como «ponto de decisão» o que era escolha técnica sua, e custa um turno. **E o que a leitura achou de bom não se perde: vai para as armadilhas da ordem de trabalho, como risco a tratar — não volta como pergunta.** Achado sem endereço vira pergunta: é assim que uma análise abandonada ressuscita disfarçada, propondo ao dono «não fazer» aquilo que ele acabou de decidir fazer.
```

## Edição 3 — `src/index.template.html` · o modelo de WO dá a saída do CRLF

**Âncora** (linha do bloco «Armadilhas desta WO» no modelo de ordem de trabalho — o início da linha tem
uma sequência escapada; case a partir de `nao casa)`):

```
nao casa), bloco gerado que sera reescrito, numero de check ja usado.]",
```

**Substituir por:**

```
nao casa), bloco gerado que sera reescrito, numero de check ja usado. Contra o CRLF a saida e",
    "sempre a mesma: ancora de UMA linha nao tem quebra dentro, entao o fim de linha nao morde — para",
    "inserir varias linhas, ancore em UMA so e diga se o texto novo entra antes ou depois dela.]",
```

> Repare: a âncora fecha a string e o colchete; a substituição **reabre** o texto e distribui em três
> strings do array. A indentação de quatro espaços das duas linhas novas faz parte do texto.

## Edição 4 — `src/index.template.html` · mensagem entre frentes é nota, não artefato

**Âncora** (fim da primeira regra de `HYGIENE_RULES`):

```
Não copie o conteúdo para dois lugares.
```

**Substituir por:**

```
Não copie o conteúdo para dois lugares. **Mensagem trocada com outro projeto ou frente irmã é nota, não artefato:** vive fora do repositório enquanto serve e vai para o arquivo morto depois — **não crie pasta versionada para ela**. O que precisa sobreviver é o que você extraiu dela para os documentos, não o texto da mensagem; guardar os dois é duplicar, e o texto envelhece enquanto o registro fica.
```

## Edição 5 — `src/index.template.html` · bump

**Âncora:**

```
const KIT_VERSION = "1.98.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.99.0";
```

## Edição 6 — `validate.js` · check C34

**Âncora** (primeira linha do check C33):

```
check("C33 leitura antes do trabalho (wo0077): abertura de turno antes de qualquer ferramenta, carimbo Base no Estado, falsa confirmacao do sandbox, canal rapido do relatorio", () => {
```

**Inserir IMEDIATAMENTE ANTES** o bloco (com uma linha em branco entre ele e o C33):

```
check("C34 degrau de saida do funil de analise (wo0078): teste de quem decide, achado vira armadilha da WO, saida do CRLF, mensagem entre frentes nao vira pasta", () => {
  Object.keys(T.NICHES).forEach(id => {
    const n=T.normNiche(T.NICHES[id]);
    const cmd=T.buildClaudeMd(n);
    assert(/Quem ainda decide\?/.test(cmd), id+": CEREBRO nao faz do teste (1) uma pergunta sobre QUEM decide");
    assert(/decisão registrada \+ ordem de trabalho/.test(cmd), id+": CEREBRO nao nomeia o par de artefatos que substitui a analise");
    assert(/Análise é para quando a pergunta ainda é dele/.test(cmd), id+": CEREBRO sem a definicao de uma linha do que e analise");
    assert(/vai para as armadilhas da ordem de trabalho/.test(cmd), id+": o achado da analise abandonada continua sem endereco");
    assert(/Achado sem endereço vira pergunta/.test(cmd), id+": CEREBRO nao explica POR QUE o achado precisa de destino");
    assert(/não crie pasta versionada para ela/.test(cmd), id+": CEREBRO nao impede a pasta versionada para mensagem entre frentes");
  });
  const raw=fs.readFileSync(path,"utf8");
  assert(/ancora de UMA linha nao tem quebra dentro/.test(raw), "modelo de WO avisa do CRLF e nao da a saida");
  return "ok";
});
```

---

## Fora de escopo

- **Não** criar `meta/refs/` nem qualquer pasta para material entre frentes. **Decidido em contrário**
  pelo usuário: essas mensagens são transitórias, ficam na pasta-pai enquanto servem e vão para
  `notas-arquivadas/` depois. A Edição 4 existe para o kit **não** propor a pasta.
- **Não** implementar a «medição delegada» (item 5 do Mapsmith). É a leva B, e é grande: princípio,
  seção nova no modelo de WO, formato de retorno e a documentação de `additionalDirectories` como
  pré-requisito de **leitura**.
- **Não** mexer no `/wrap` (conferência de contagem repetida no STATUS) — leva C.
- **Não** decidir sobre o `_TEMPLATE.md` de `analises/` no pacote de update nem sobre IDEAS por ID —
  leva D.
- **Não** relaxar o C30 para caber a redação nova. A Edição 1 preserva a frase asserida; a trava está
  certa.

## Armadilhas desta WO

- **`src/index.template.html` é CRLF**; `validate.js` é **LF**. Toda âncora aqui é de uma linha ou de um
  trecho dentro de uma linha — pela mesma razão que esta WO passa a escrever no modelo.
- **C30 depende da Edição 1.** Se ele ficar vermelho com «CEREBRO sem o teste do QUE ja decidido», a
  frase `Então isto é execução, não análise` foi alterada. Não conserte mexendo no C30.
- **Edições 1, 2 e 4 substituem trecho no MEIO de linhas longas.** Case a frase-âncora, nunca a linha.
- **Edição 3 é a mais delicada:** a linha original começa com uma sequência escapada (`\\n` dentro de
  string JS). Por isso a âncora começa em `nao casa)` — **não** tente casar o início da linha.
- **Teto:** nenhuma edição toca as Instruções. O C28 deve imprimir os **mesmos** números da v1.98.0.

---

## Depois de aplicar — conferência antes do commit

- [ ] `git diff` mostra: `src/index.template.html`, `validate.js`, `index.html` e os `meta/`. Nada além.
- [ ] `node build.js` e `node validate.js index.html` → **18/18 nichos · 78/78 checagens · 0 erros**.
- [ ] C28 idêntico à v1.98.0:
      `padrao 6618/6900 · +Code 529/550 · +ASU 372/400 · compart 435/450 · combo 7519/7600`.
- [ ] Baixe o modelo de WO gerado (ou leia o array no template) e confira que o parágrafo de armadilhas
      continua sendo **um bloco de colchetes bem fechado**, com o `]` no fim da última linha nova.

## Ao terminar — registros (canal CODE)

- `meta/DECISIONS.md`: **D-112** — «o funil da análise ganha degrau de saída: o teste é quem decide, e o
  achado técnico da análise abandonada vira armadilha da ordem de trabalho; material trocado entre
  frentes é nota transitória e não ganha pasta versionada». Registre a evidência de campo (Mapsmith,
  2026-08-02) e o fato de que a frente irmã chegou ao teste de «quem decide» **sem ter a wo0074** —
  convergência independente.
- `meta/CHANGELOG.md`: **v1.99.0** no topo.
- `meta/STATUS.md`: append na sessão atual, versão para `v1.99.0`, harness `18/18 · 78/78`.
- `meta/IDEAS.md`, «Feedback para o Kit» — registrar a leitura do Mapsmith de 2026-08-03:
  - **Implementado nesta WO:** item (4) — degrau de saída do funil; e a saída do CRLF no modelo de WO.
  - **Aberto, leva B:** item (5) — medição delegada («quem tem disco mede, quem tem contexto decide»),
    com seção própria no modelo de WO, formato de retorno em números crus e `additionalDirectories`
    documentado também para **leitura** de dados fora da raiz.
  - **Aberto, leva C:** `/wrap` deve conferir a contagem repetida em todo o `STATUS.md`, não só no
    cabeçalho (falhou duas vezes seguidas lá).
  - **Aberto, leva D:** o `_TEMPLATE.md` de `analises/` no pacote de update (tensão real com a pasta
    preguiçosa) e a linha da válvula de desvio autorizando IDEAS por status+ID quando outros documentos
    referenciam ideias por ID estável.
  - **Já corrigido no kit, avisar a frente:** o apêndice não fala mais em `DECISOES.md` (0 ocorrências) e
    não existe mais nenhum `HISTORICO` no template — os desvios locais deles nesses dois pontos podem
    ser desfeitos. E o kit **não assume npm**: o comando aparece como `PLACEHOLDER` explícito.
- `meta/IDEAS.md`, ideia nova **sem gatilho de data, com gatilho de evento**: «o check que consolida uma
  regra restringe como ela pode ser refinada depois — visto no C15 (impediu o exemplo original do P11) e
  no C30 (quase bloqueou a redação de «quem decide»). **Gatilho:** na próxima vez que um check obrigar a
  contornar a redação de uma correção, avaliar se a asserção deve mirar o efeito em vez da frase
  literal.»

## Relatório de aplicação

O que foi feito · desvios do texto literal · arquivos tocados · build/validate · commit. Grave em
`../AAMMDD-HHMM-code-kcm.txt`.

## Commit — blocos separados, mensagem SEM acento

```
git add src/index.template.html validate.js index.html meta/
```

```
git commit -m "feat(kit): degrau de saida do funil de analise, saida do CRLF e mensagem entre frentes (wo0078, D-112)" -m "O teste do funil passa a perguntar QUEM decide, e nomeia o par decisao-registrada + ordem-de-trabalho que substitui a analise. O achado tecnico da analise abandonada ganha endereco: vira armadilha da ordem de trabalho, em vez de voltar como pergunta ao dono. Modelo de WO passa a dar a saida do CRLF (ancora de uma linha). Mensagem trocada entre frentes fica registrada como nota transitoria, sem pasta versionada. Check C34. Bump 1.99.0."
```

```
git push
```
