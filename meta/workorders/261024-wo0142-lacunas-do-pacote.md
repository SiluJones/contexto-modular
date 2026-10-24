# WO 0142 — o que o merge do v1.129.0 achou nos vizinhos: dois pares, os bullets no lugar, `.claude/`, `wc -m`, a pasta do historico e o molde

> **Tipo:** mista — CODIGO (produto + harness) + DOC (a casa e o registro).
> **Config sugerida:** modelo padrao, esforco medio. 33 edicoes TROCAR e 1 que acrescenta no fim do `meta/DECISIONS.md`. Todas as ancoras sao de UMA linha inteira, **menos tres de varias linhas** (Edicoes 2, 14 e 21, as primeiras metades de dois MOVER — ver as Armadilhas) e a do STATUS (trecho do cabecalho).
> **Pre-requisito:** HEAD = `4814df2`, `main` = `origin/main`. Harness em **19/19 · 113/113 · 0 erros**, v1.131.0.
> **Base:** `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`, cinco pontos aceitos pelo dono em 2026-10-24 (com a correcao do item 1b, escrita na analise); `i-N73`.
> **Depende de:** wo0141 (aplicada, `322a027`; fecho `4814df2`).
> **Arquivos que o chat gravou no disco e esta WO versiona:** a Edicao 0 roda `sha1sum` em cada um ANTES de tudo: hash diferente = outro escritor mexeu no arquivo depois do chat — **PARE e reporte**, nao commite por cima.
> - `eaea3fa617b19ffce4ec4eeff1e2ea145f4a0b7a  meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md` (nova; «Decidida», LF)
> - `2977d41e787480a968b20cf8334768b2d315679e  logs/2026-10-23.md` (secao «Conversa 3 (chat, KCM 22)», LF)
> - `df0bdb54c9d30283409b645f053c58c1915c769b  logs/2026-10-24.md` (novo, secao do chat, LF)
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte** — nunca chute um lugar proximo.
> **Idempotencia:** ja aplicada = o texto NOVO INTEIRO esta no arquivo **e a ancora nao** — salvo quando a ancora esta dentro do texto novo (forma «trocar»). Esta WO tem tres REMOCOES (Edicoes 2, 14 e 21), em que o texto novo e um pedaco da ancora: so o texto inteiro as pularia sem aplicar — e o defeito que a propria WO conserta no molde.
> **Ancoras lidas em** (lidas pelo chat no disco, HEAD `4814df2`; recortadas do arquivo vivo por script, ocorrencia unica exigida; aplicadas por script numa replica `git archive HEAD | tar -x` **a partir do texto desta WO**):
> - `src/index.template.html` — em `buildInstr`, a linha «**Config:** no fim»; em `buildClaudeMd`, o bloco «Vale para todo turno» + os cinco bullets do Refino, a linha «Princípio sem gatilho não dispara», a linha «O tamanho sai de `wc -m`», a linha «Notas e relatórios moram na pasta-pai», e no esqueleto do fecho o par `---`/**Próximo** e a linha do «Peça»; em `HYGIENE_RULES`, a linha «Arquivo sob `.claude/`»; em `buildCodeKitFiles()`, a linha do `wc -m` da `wrap`; em `buildWoTemplate()`, as linhas «saldo de linhas previsto», «devolver um item.» e «relatorio por formulario»; `const KIT_VERSION`
> - `meta/workorders/_TEMPLATE.md` — as mesmas tres do molde; `meta/CEREBRO.md` — o par `---`/**Próximo** e o «Peça» do esqueleto, e a linha «Tamanho por `wc -m`»; `.claude/skills/wrap/SKILL.md` — a linha do `wc -m`
> - `validate.js` — no `C111`, o par do commit e a linha de retorno; no `C43`, a clausula «idempotencia pelo texto inteiro»; no `C55`, a assercao «Arquivo sob `.claude/`»
> - `meta/CHANGELOG.md` — a «Versão atual» e o titulo `## v1.131.0`; `meta/STATUS.md` — a «Versão atual»; `meta/IDEAS.md` — os titulos da `i-N73` e da `i-N71`; `meta/DECISIONS.md` — o fim do arquivo
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro: `D-169`, CHANGELOG, a `i-N73` resolvida, a `i-N71` com o piloto decidido. A edicao do STATUS e so o numero da versao (excecao da `D-158`). **A analise e os logs de 23 e 24/10 sao do chat:** esta WO so os versiona pelo sha1; analise que mudou de estado, diga no relatorio, nao edite.

---

## 1. Por que

Os tres vizinhos, no merge do v1.129.0, acharam cinco lacunas que a v1.131.0 ainda nao conserta (`i-N73`): dois pares de regras que nao podem valer juntas (a Config «sempre» × «se a proxima etapa pedir»; o divisor do fecho × o esqueleto) e cinco bullets fora do lugar; a regra do `.claude/`, que no canal pasta nao tem caminho; o `wc -m`, que sem locale conta bytes; a pasta do historico das conversas; e tres regras para o molde de WO. Na mesma leva, a idempotencia da `D-163`, que a replica desta WO mostrou falhando na REMOCAO. Esta WO conserta as cinco e corta a **v1.132.0** (`D-158`).

**Uma correcao da analise, achada nesta replica:** a analise dava o esqueleto do fecho como o lado certo do par do divisor. O `C19` acusou: ele cobra a ordem que o dono aprovou na wo0060 (`D-094`) — **Proximo antes do divisor, o resto depois**. Quem saiu trocado foi o esqueleto da wo0111. Esta WO muda o esqueleto, no kit e na casa, e deixa o texto.

## 2. Contexto factual — medido na replica

| Medida | Antes | Depois | Comando |
|---|---|---|---|
| Harness | 19/19 · 113/113 | **19/19 · 113/113** (nenhum check novo) | `node validate.js index.html` |
| `C111` | `ok (5 pares em 152 combinacoes; …)` | `ok (7 pares em 152 combinacoes; pasta do pacote AAMMDD-kcm-update-v1.132.0)` | linha do `C111` |
| `C43` | `ok (instalado confere com o gerado em 72 clausulas)` | `ok (instalado confere com o gerado em 76 clausulas)` | linha do `C43` |
| `C28` | `ok (padrao 5852/6900 · +Code 540/550 · …)` | `ok (padrao 5816/6900 · +Code 540/550 · +ASU 372/400 · compart 372/450 · grupo 234/250 · SO 213 · combo+SO 7163/7600 · 304 configuracoes)` | linha do `C28` |
| `C54` | v1.131.0 | **v1.132.0 nos tres lugares** | linha do `C54` |
| `index.html` gerado | 936.658 bytes | **938.573 bytes** | a linha `OK:` do `node build.js` |

- **Prova de que o `C111` acusa:** a prova negativa da Edicao 36.

## Inventario

- **Template:** Instrucoes (1 linha); CEREBRO — os cinco bullets do Refino movidos (2 edicoes), o esqueleto do fecho (2), `wc -m` (1), a pasta do historico (1); `HYGIENE_RULES` (1); skill `wrap` gerada (1); molde de WO (3); `KIT_VERSION`.
- **Casa:** `_TEMPLATE.md` (3), `meta/CEREBRO.md` (3), skill `wrap` (1).
- **Molde e `apply-wo`:** a idempotencia corrigida (gerado e casa, 4 edicoes).
- **Harness:** `C111` (2 pares + a assercao de posicao), `C43` (4 clausulas), `C55` (a assercao do `.claude/`).
- **Fora:** o piloto do metodo C (WO propria, depois desta); o pacote aos vizinhos (depois desta).

---

## Edicao 0 — antes de tudo

1. `git pull --ff-only`; HEAD = `4814df2`. Se diferente, **PARE e reporte**.
2. `sha1sum meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md logs/2026-10-23.md logs/2026-10-24.md` = os do cabecalho; hash diferente = **PARE**.
3. `git status --short` = exatamente: ` M logs/2026-10-23.md`, `?? .claude/launch.json`, `?? logs/2026-10-24.md`, `?? meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`, `?? meta/workorders/261024-wo0142-lacunas-do-pacote.md`. Diferente = **PARE**.
4. Idempotencia: `grep -c 'config se a proxima etapa x config sempre' validate.js` = **0**. Outro numero = a WO ja foi aplicada: **PARE e reporte**.

## Edicao 1 — `src/index.template.html` · Instrucoes · a Config sai sempre, como no CEREBRO

**Ancora** (em `buildInstr`; a linha inteira):

```
  lines.push("**Config:** no fim, se a PRÓXIMA etapa pedir config diferente, recomende-a explícita — no chat: modelo + esforço (Baixo→Máximo) + pensamento (lig/desl); no Claude Code: modelo + `/effort` (ou `ultrathink`/`ultracode`), SEM toggle de pensamento. Nunca afirme saber a atual; recomende pela tarefa. Pesada com config fraca → peça aumento; folga → diga que pode baixar.");
```

**Substituir por:**

```
  lines.push("**Config:** no fim, sempre, recomende-a por raia — no chat: modelo + esforço (Baixo→Máximo) + pensamento (lig/desl); no Claude Code: modelo + `/effort` (ou `ultrathink`/`ultracode`), SEM toggle de pensamento. Nunca afirme saber a atual; recomende pela tarefa. Pesada com config fraca → peça aumento; folga → diga que pode baixar.");
```

## Edicao 2 — `src/index.template.html` · CEREBRO · os cinco bullets do Refino saem do fecho

**Ancora** (em `buildClaudeMd`; ancora de SETE linhas — a linha «Vale para todo turno», o `L.push("")` e os cinco bullets —, ocorrencia unica; ver as Armadilhas):

```
  L.push("Vale para todo turno de trabalho, não só ao encerrar a conversa: é o que me deixa retomar sem reconstruir contexto.");
  L.push("");
  L.push("- **Sincronia com o CEREBRO.** Quando uma customização estrutural entra no CEREBRO (novo modo, novo arquivo, mudança de processo), a versão curta das Instruções pode ficar para trás e até contradizê-lo. Ao mexer no CEREBRO, cheque se as Instruções ainda batem; se divergirem, proponha alinhar/regenerar a versão curta.");
  L.push("- **Uma regra por linha, verbo no imperativo, sem preâmbulo.** Prosa explicativa vive no CEREBRO.");
  L.push(`- **Teto:** na configuração **padrão**, as Instruções não devem passar de ~**6.900** caracteres. Ao propor uma mudança, diga o tamanho antes e depois.`);
  L.push(`- **Teto por configuração.** Ligar um modo de trabalho tem orçamento próprio, porque o custo é real e recorrente: **+${MODO_ORCAMENTO.code}** para o Modo Code sobre o padrão, **+${MODO_ORCAMENTO.asu}** para o ASU sobre o que o Code já custa, e **${MODO_ORCAMENTO.compartilhado}** para as linhas que *qualquer* modo de trabalho liga (elas têm limite próprio, senão crescem sem dono), e **+${MODO_ORCAMENTO.grupo}** para o projeto em grupo. O **total** com modos ligados — contando a linha do sistema operacional, quando escolhido — não passa de **${INSTR_TETO_MODOS}**. O que se trava é o **incremento**, não o total: o total depende de quanta coisa este projeto tem, e isso é seu; o incremento é o que a regra nova custa, e é o que precisa caber. Não caber é sinal de que outra linha precisa ser curada primeiro — mandar detalhe para este CEREBRO é de graça, e a versão curta fica na Instrução.`);
  L.push("- **Registre:** toda mudança de instrução vira uma linha no DECISIONS (o que mudou e por quê) e um item em «Feedback para o Kit» no IDEAS — é assim que o kit aprende com este projeto.");
```

**Substituir por:**

```
  L.push("Vale para todo turno de trabalho, não só ao encerrar a conversa: é o que me deixa retomar sem reconstruir contexto.");
```

(Esta edicao e a primeira metade de um MOVER: a Edicao 4 poe os cinco bullets na secao «Refino». As duas vao juntas.)

## Edicao 3 — `src/index.template.html` · CEREBRO · os cinco bullets entram na secao «Refino»

**Ancora** (em `buildClaudeMd`, o ultimo item da secao «Refino das Instruções»; a linha inteira):

```
  L.push("- **Princípio sem gatilho não dispara — e o remédio é oportunista, não uma auditoria.** Virtude é escrita no infinitivo («analisa antes de aceitar», «explica trade-offs») e não tem hora; gatilho é escrito com o **evento na frente** («quando o dono impõe uma restrição para evitar perda, proponha a forma mais barata de obter a mesma proteção») e dispara sozinho. Percorrer todos os princípios inventando gatilhos gera tabela longa que ninguém lê. **A política é outra: toda vez que um princípio falhar em campo, aquele princípio ganha o gatilho — com o evento real que o teria disparado, colhido do caso.** O caso é o que torna o gatilho específico; sem ele, você escreve outra virtude e acha que escreveu um gatilho.");
```

**Substituir por:**

```
  L.push("- **Princípio sem gatilho não dispara — e o remédio é oportunista, não uma auditoria.** Virtude é escrita no infinitivo («analisa antes de aceitar», «explica trade-offs») e não tem hora; gatilho é escrito com o **evento na frente** («quando o dono impõe uma restrição para evitar perda, proponha a forma mais barata de obter a mesma proteção») e dispara sozinho. Percorrer todos os princípios inventando gatilhos gera tabela longa que ninguém lê. **A política é outra: toda vez que um princípio falhar em campo, aquele princípio ganha o gatilho — com o evento real que o teria disparado, colhido do caso.** O caso é o que torna o gatilho específico; sem ele, você escreve outra virtude e acha que escreveu um gatilho.");
  L.push("- **Sincronia com o CEREBRO.** Quando uma customização estrutural entra no CEREBRO (novo modo, novo arquivo, mudança de processo), a versão curta das Instruções pode ficar para trás e até contradizê-lo. Ao mexer no CEREBRO, cheque se as Instruções ainda batem; se divergirem, proponha alinhar/regenerar a versão curta.");
  L.push("- **Uma regra por linha, verbo no imperativo, sem preâmbulo.** Prosa explicativa vive no CEREBRO.");
  L.push(`- **Teto:** na configuração **padrão**, as Instruções não devem passar de ~**6.900** caracteres. Ao propor uma mudança, diga o tamanho antes e depois.`);
  L.push(`- **Teto por configuração.** Ligar um modo de trabalho tem orçamento próprio, porque o custo é real e recorrente: **+${MODO_ORCAMENTO.code}** para o Modo Code sobre o padrão, **+${MODO_ORCAMENTO.asu}** para o ASU sobre o que o Code já custa, e **${MODO_ORCAMENTO.compartilhado}** para as linhas que *qualquer* modo de trabalho liga (elas têm limite próprio, senão crescem sem dono), e **+${MODO_ORCAMENTO.grupo}** para o projeto em grupo. O **total** com modos ligados — contando a linha do sistema operacional, quando escolhido — não passa de **${INSTR_TETO_MODOS}**. O que se trava é o **incremento**, não o total: o total depende de quanta coisa este projeto tem, e isso é seu; o incremento é o que a regra nova custa, e é o que precisa caber. Não caber é sinal de que outra linha precisa ser curada primeiro — mandar detalhe para este CEREBRO é de graça, e a versão curta fica na Instrução.`);
  L.push("- **Registre:** toda mudança de instrução vira uma linha no DECISIONS (o que mudou e por quê) e um item em «Feedback para o Kit» no IDEAS — é assim que o kit aprende com este projeto.");
```

(Segunda metade do MOVER da Edicao 3: o texto novo repete a ancora e acrescenta os cinco bullets, recortados, sem redigitar.)

## Edicao 4 — `src/index.template.html` · higiene · `.claude/`: skill por WO; `settings.json` pelo dono no canal pasta

**Ancora** (em `HYGIENE_RULES`; a linha inteira):

```
  "**Arquivo sob `.claude/` o chat entrega INTEIRO, para download — a WO so o menciona no `git add`.** Configuracao do executor nao e aplicavel pelo executor: o classificador bloqueia, e com razao — a barreira existe para ele nao se autoconceder permissao, e «eu autorizo» dito na conversa nao muda isso. Medido em campo: uma WO que montava delta em `.claude/` foi barrada e custou o ciclo inteiro. A mesma logica vale para qualquer arquivo que governe o que o executor pode fazer.",
```

**Substituir por:**

```
  "**Arquivo sob `.claude/`: a skill (`.claude/skills/*`) muda por WO, como qualquer arquivo; o `.claude/settings.json` o chat entrega INTEIRO — no mount, para download; no canal pasta, gravado na pasta-pai (`AAMMDD-claude-settings.json`), com o comando exato de copia no fecho, porque a ponte do chat tambem nao grava em `.claude/` — e a WO so o menciona no `git add`.** Configuracao de permissao do executor nao e aplicavel pelo executor: o classificador bloqueia, e com razao — a barreira existe para ele nao se autoconceder permissao, e «eu autorizo» dito na conversa nao muda isso. Medido em campo: uma WO que montava delta em `.claude/` foi barrada e custou o ciclo inteiro. A mesma logica vale para qualquer arquivo que governe o que o executor pode fazer.",
```

## Edicao 5 — `src/index.template.html` · CEREBRO · o tamanho das Instrucoes em caracteres, com o locale dito

**Ancora** (em `buildClaudeMd`, secao «Canal do chat»; a linha inteira):

```
    L.push("- **As Instruções do Projeto têm duas cópias, e a fonte é o arquivo do repositório.** Mudança nas Instruções muda primeiro o arquivo; o fecho pede ao dono que cole no painel do Projeto. O tamanho sai de `wc -m` no turno, nunca de número gravado em documento.");
```

**Substituir por:**

```
    L.push("- **As Instruções do Projeto têm duas cópias, e a fonte é o arquivo do repositório.** Mudança nas Instruções muda primeiro o arquivo; o fecho pede ao dono que cole no painel do Projeto. O tamanho sai no turno, em caracteres — `len()` do texto em UTF-8, ou `LC_ALL=C.UTF-8 wc -m`: sem o locale, `wc -m` conta bytes —, nunca de número gravado em documento.");
```

## Edicao 6 — `src/index.template.html` · skill `wrap` gerada · `wc -m` com o locale

**Ancora** (em `buildCodeKitFiles()`; a linha inteira):

```
    "Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça `wc -m` e escreva o número no relatório, ao lado do teto do projeto: teto que ninguém mede envelhece calado.",
```

**Substituir por:**

```
    "Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça os caracteres com `LC_ALL=C.UTF-8 wc -m` (sem o locale, `wc -m` conta bytes) e escreva o número no relatório, ao lado do teto do projeto: teto que ninguém mede envelhece calado.",
```

## Edicao 7 — `src/index.template.html` · CEREBRO · a pasta do historico das conversas, se houver

**Ancora** (em `buildClaudeMd`, secao «Canal do chat»; a linha inteira):

```
    L.push("- **Notas e relatórios moram na pasta-pai,** fora do Git. Leia inteira a que chegou, funda nos meta/ e arquive **movendo** para `notas-arquivadas/` dentro dela — mover, nunca apagar. Liste a pasta antes e depois: arquivo que some sem comando que o cite é perda, não arquivamento.");
```

**Substituir por:**

```
    L.push("- **Notas e relatórios moram na pasta-pai,** fora do Git. Leia inteira a que chegou, funda nos meta/ e arquive **movendo** para `notas-arquivadas/` dentro dela — mover, nunca apagar. Liste a pasta antes e depois: arquivo que some sem comando que o cite é perda, não arquivamento.");
    L.push("- **Se o dono mantém uma pasta de histórico das conversas** (por exemplo, exportada pelo CDC para dentro da pasta de arquivo), **ela é dele e só leitura:** leia quando a origem de uma decisão ajudar; não ponha nada dentro, não mova, não renomeie, não apague e não versione — nem no «Arquivar», que move para a RAIZ da pasta de arquivo, nunca para uma subpasta dela. Se ela numera as conversas, o handoff e o log citam esse número.");
```

(O texto novo repete a ancora e acrescenta o item logo abaixo.)

## Edicao 8 — `src/index.template.html` · molde de WO gerado · ancora sem borda em branco

**Ancora** (em `buildWoTemplate()`; a linha inteira):

```
    "> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.",
```

**Substituir por:**

```
    "> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.",
    "> **Ancora e texto novo sem linha em branco nas BORDAS.** A borda em branco casa uma linha a menos (ou a mais), o saldo",
    "> «quase bate» e quem aplica racionaliza a diferenca. Recorte sem borda; saldo de linhas diferente do previsto e VERMELHO.",
```

(O texto novo repete a ancora e acrescenta duas linhas.)

## Edicao 9 — `src/index.template.html` · molde de WO gerado · o teste novo falha antes

**Ancora** (em `buildWoTemplate()`, o item «Prova de vida»; a linha inteira):

```
    "        devolver um item.",
```

**Substituir por:**

```
    "        devolver um item. Teste novo: rode-o contra o codigo de ANTES — ele tem de falhar, no numero previsto;",
    "        teste que passa antes da mudanca nao testa a mudanca.",
```

## Edicao 10 — `src/index.template.html` · molde de WO gerado · relatorio pela ferramenta de escrita

**Ancora** (em `buildWoTemplate()`; a linha inteira):

```
    "relatorio por formulario perde justamente o que so quem aplicou viu.",
```

**Substituir por:**

```
    "relatorio por formulario perde justamente o que so quem aplicou viu.",
    "Relatorio e log se gravam pela ferramenta de escrita de arquivo, nunca por `echo -e`/`printf`: o escape come a barra",
    "invertida dos caminhos do Windows e grava byte invalido.",
```

(O texto novo repete a ancora e acrescenta duas linhas.)

## Edicao 11 — `src/index.template.html` · molde de WO gerado · ja aplicada = texto novo inteiro E ancora ausente

**Ancora** (em `buildWoTemplate()`, a regra de idempotencia; a linha inteira):

```
    "> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Se o inteiro ja estiver, **PULE**",
```

**Substituir por:**

```
    "> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Ja aplicada = o texto novo INTEIRO esta",
    "> no arquivo **e a ancora nao** — salvo quando a ancora esta DENTRO do texto novo (forma «trocar»). Na REMOCAO o texto novo e",
    "> um pedaco da ancora: sem a segunda condicao, ela seria pulada sem nunca ter sido aplicada. Ja aplicada, **PULE**",
```

## Edicao 12 — `src/index.template.html` · skill `apply-wo` gerada · a ancora ausente

**Ancora** (em `buildCodeKitFiles()`; a linha inteira):

```
    "Antes de cada edição, confira a idempotência pelo texto NOVO INTEIRO: se ele já está no arquivo, PULE e diga no relatório. Frase-chave não basta — na forma «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar.",
```

**Substituir por:**

```
    "Antes de cada edição, confira a idempotência pelo texto NOVO INTEIRO: se ele já está no arquivo **e a âncora não** — salvo quando a âncora está dentro do texto novo, na forma «trocar» —, PULE e diga no relatório. Frase-chave não basta: na forma «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar; e na REMOÇÃO o texto novo é um pedaço da âncora, presente antes de aplicar.",
```

## Edicao 13 — `src/index.template.html` · corte de versao (D-158)

**Ancora** :

```
const KIT_VERSION = "1.131.0";
```

**Substituir por:**

```
const KIT_VERSION = "1.132.0";
```

## Edicao 14 — `src/index.template.html` · CEREBRO · o esqueleto sem o divisor acima do Proximo (D-094)

**Ancora** (em `buildClaudeMd`, o esqueleto do fecho; ancora de DUAS linhas — o `L.push("---")` e a linha do **Próximo** —, ocorrencia unica):

```
  L.push("---");
  L.push("**Próximo**                                   (sempre)");
```

**Substituir por:**

```
  L.push("**Próximo**                                   (sempre)");
```

(Primeira metade: o divisor sai de cima do Proximo. A Edicao seguinte o poe logo abaixo do «Peça».)

## Edicao 15 — `src/index.template.html` · CEREBRO · o esqueleto com o divisor depois do Proximo (D-094)

**Ancora** (em `buildClaudeMd`, o esqueleto do fecho; a linha inteira):

```
  L.push("- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»");
```

**Substituir por:**

```
  L.push("- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»");
  L.push("---");
```

(Segunda metade: o texto novo repete a ancora e acrescenta o divisor.)

## Edicao 16 — `meta/workorders/_TEMPLATE.md` · o molde da casa · ancora sem borda em branco

**Ancora** (a linha inteira):

```
> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.
```

**Substituir por:**

```
> saldo de linhas previsto pela WO acusou, e quem aplicou corrigiu antes do commit.
> **Ancora e texto novo sem linha em branco nas BORDAS.** A borda em branco casa uma linha a menos (ou a mais), o saldo
> «quase bate» e quem aplica racionaliza a diferenca. Recorte sem borda; saldo de linhas diferente do previsto e VERMELHO.
```

(O texto novo repete a ancora e acrescenta duas linhas.)

## Edicao 17 — `meta/workorders/_TEMPLATE.md` · o molde da casa · o teste novo falha antes

**Ancora** (a linha inteira):

```
        devolver um item.
```

**Substituir por:**

```
        devolver um item. Teste novo: rode-o contra o codigo de ANTES — ele tem de falhar, no numero previsto;
        teste que passa antes da mudanca nao testa a mudanca.
```

## Edicao 18 — `meta/workorders/_TEMPLATE.md` · o molde da casa · relatorio pela ferramenta de escrita

**Ancora** (a linha inteira):

```
relatorio por formulario perde justamente o que so quem aplicou viu.
```

**Substituir por:**

```
relatorio por formulario perde justamente o que so quem aplicou viu.
Relatorio e log se gravam pela ferramenta de escrita de arquivo, nunca por `echo -e`/`printf`: o escape come a barra
invertida dos caminhos do Windows e grava byte invalido.
```

(O texto novo repete a ancora e acrescenta duas linhas.)

## Edicao 19 — `meta/workorders/_TEMPLATE.md` · o molde da casa · ja aplicada = texto novo inteiro E ancora ausente

**Ancora** (a linha inteira):

```
> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Se o inteiro ja estiver, **PULE**
```

**Substituir por:**

```
> «trocar» o texto novo repete a ancora, e um trecho dele ja existe antes de aplicar. Ja aplicada = o texto novo INTEIRO esta
> no arquivo **e a ancora nao** — salvo quando a ancora esta DENTRO do texto novo (forma «trocar»). Na REMOCAO o texto novo e
> um pedaco da ancora: sem a segunda condicao, ela seria pulada sem nunca ter sido aplicada. Ja aplicada, **PULE**
```

## Edicao 20 — `.claude/skills/apply-wo/SKILL.md` · a skill `apply-wo` da casa · a ancora ausente

**Ancora** (a linha inteira):

```
  «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar. Se o inteiro já estiver no arquivo,
```

**Substituir por:**

```
  «trocar» o texto novo repete a âncora, e um trecho dele já existe antes de aplicar; na REMOÇÃO o texto novo é um pedaço da
  âncora. Já aplicada = o inteiro está no arquivo **e a âncora não** (salvo quando a âncora está dentro do texto novo):
```

## Edicao 21 — `meta/CEREBRO.md` · a casa · o esqueleto sem o divisor acima do Proximo (D-094)

**Ancora** (o esqueleto do fecho; ancora de DUAS linhas — `---` e a linha do **Próximo** —, ocorrencia unica):

```
---
**Próximo**                                   (sempre)
```

**Substituir por:**

```
**Próximo**                                   (sempre)
```

(Primeira metade; a Edicao seguinte poe o divisor logo abaixo do «Peça».)

## Edicao 22 — `meta/CEREBRO.md` · a casa · o esqueleto com o divisor depois do Proximo (D-094)

**Ancora** (a linha inteira):

```
- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»
```

**Substituir por:**

```
- **Peça no próximo turno:** «<frase copiável como está, sem lacuna>»
---
```

(Segunda metade: o texto novo repete a ancora e acrescenta o divisor.)

## Edicao 23 — `meta/CEREBRO.md` · a casa · o tamanho das Instrucoes com o locale

**Ancora** (a linha inteira):

```
- **As Instruções:** a fonte é o `INSTRUCOES-DO-PROJETO.md` do repo; o que o assistente lê é a cópia colada no painel, e só o dono a atualiza. WO que muda as Instruções termina pedindo para recolar. Tamanho por `wc -m`, no turno.
```

**Substituir por:**

```
- **As Instruções:** a fonte é o `INSTRUCOES-DO-PROJETO.md` do repo; o que o assistente lê é a cópia colada no painel, e só o dono a atualiza. WO que muda as Instruções termina pedindo para recolar. Tamanho em caracteres, no turno: `len()` do texto em UTF-8 ou `LC_ALL=C.UTF-8 wc -m` — sem o locale, `wc -m` conta bytes (no Git Bash do Code, 7.463 para 7.199 caracteres).
```

## Edicao 24 — `.claude/skills/wrap/SKILL.md` · a skill `wrap` da casa · `wc -m` com o locale

**Ancora** (a linha inteira):

```
- Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça `wc -m` e escreva o número no relatório, ao lado do
```

**Substituir por:**

```
- Se o commit toca `INSTRUCOES-DO-PROJETO.md`, meça os caracteres com `LC_ALL=C.UTF-8 wc -m` (sem o locale, `wc -m` conta bytes) e escreva o número no relatório, ao lado do
```

## Edicao 25 — `validate.js` · `C111` · dois pares novos (a Config e o divisor)

**Ancora** (na lista `PARES`; a linha inteira):

```
    ["commit sem excecao x commit e da WO",               /\*\*Commit:\*\* ao concluir mudança versionada, ENTREGUE/, /Havendo WO no turno, o bloco de commit/, true]
```

**Substituir por:**

```
    ["commit sem excecao x commit e da WO",               /\*\*Commit:\*\* ao concluir mudança versionada, ENTREGUE/, /Havendo WO no turno, o bloco de commit/, true],
    // wo0142 (i-N73, FK-BC do Mapoteca): o lado velho de cada par sai na mesma WO.
    ["config se a proxima etapa x config sempre",         /se a PRÓXIMA etapa pedir config diferente/,               /\*\*Config recomendada\*\* saem SEMPRE/,       false],
    ["divisor depois do proximo x esqueleto que abre com ele", /vem antes de um divisor; o resto vem depois dele/,      /```\n---\n\*\*Próximo\*\*/,                   false]
```

(O texto novo repete a ancora — acrescida de uma virgula no fim — e acrescenta dois pares.)

## Edicao 26 — `validate.js` · `C111` · os bullets do Refino moram no Refino

**Ancora** (a linha de retorno do `C111`; a linha inteira):

```
  return "ok (" + PARES.length + " pares em " + textos + " combinacoes; pasta do pacote " + pasta + ")";
```

**Substituir por:**

```
  // wo0142 (FK-BC 4): os cinco bullets do refino das Instrucoes moram na secao «Refino», nao no fim do fecho.
  { const C=T.buildClaudeMd(dev), iR=C.indexOf("## Refino das Instruções"), iN=C.indexOf("\n## ", iR+5);
    ["- **Sincronia com o CEREBRO.**", "- **Registre:** toda mudança de instrução"].forEach(b => { const i=C.indexOf(b);
      assert(iR>-1 && i>iR && i<iN, "o bullet «"+b.slice(4,30)+"» saiu da secao «Refino das Instruções» — e a regra que so se le no lugar certo"); }); }
  return "ok (" + PARES.length + " pares em " + textos + " combinacoes; pasta do pacote " + pasta + ")";
```

(O texto novo termina repetindo a ancora.)

## Edicao 27 — `validate.js` · `C43` · quatro clausulas novas (tres do molde e a idempotencia), nos dois lados

**Ancora** (na lista `CLAUSULAS`; a linha inteira):

```
    ["idempotencia pelo texto inteiro",  /texto NOVO INTEIRO/,                     ["woTemplate","applyWo"]],
```

**Substituir por:**

```
    ["idempotencia pelo texto inteiro",  /texto NOVO INTEIRO/,                     ["woTemplate","applyWo"]],
    // wo0142 (i-N73 5, o que o GameDataHub devolveu na fusao do v1.129.0).
    ["modelo de WO: sem borda em branco",   /sem linha em branco nas BORDAS/,        ["woTemplate"]],
    ["modelo de WO: teste falha antes",     /rode-o contra o codigo de ANTES/,       ["woTemplate"]],
    ["modelo de WO: escrita pela ferramenta", /nunca por `echo -e`/,                 ["woTemplate"]],
    ["idempotencia: a ancora ausente",     /salvo quando a [aâ]ncora est[aá] (DENTRO|dentro) do texto novo/, ["woTemplate","applyWo"]],
```

(O texto novo repete a ancora e acrescenta cinco linhas.)

## Edicao 28 — `validate.js` · `C55` · a regra do `.claude/` separa a skill do `settings.json`

**Ancora** (a linha inteira):

```
    assert(/Arquivo sob `\.claude\/` o chat entrega INTEIRO/.test(cmd), id+": nada diz que configuracao do executor nao e aplicavel pelo executor — o classificador barra e o ciclo se perde");
```

**Substituir por:**

```
    assert(/Arquivo sob `\.claude\/`: a skill/.test(cmd) && /`\.claude\/settings\.json` o chat entrega INTEIRO/.test(cmd), id+": nada diz que configuracao do executor nao e aplicavel pelo executor — o classificador barra e o ciclo se perde");
```

## Edicao 29 — `meta/CHANGELOG.md` · versao atual

**Ancora** :

```
> Histórico de versões. Versão atual: **v1.131.0**.
```

**Substituir por:**

```
> Histórico de versões. Versão atual: **v1.132.0**.
```

## Edicao 30 — `meta/CHANGELOG.md` · entrada nova no topo

**Ancora** (o titulo da entrada mais recente):

```
## v1.131.0 — No canal pasta, o CEREBRO deixa a língua do mount nas regras que disparam todo turno (wo0140, D-167)
```

**Substituir por:**

```
## v1.132.0 — O que o merge do v1.129.0 achou nos vizinhos: dois pares contraditórios, bullets fora do lugar, `.claude/`, `wc -m`, a pasta do histórico e o molde de WO (wo0142, D-169)
- **Dois pares contraditórios a menos, e no `C111`:** as Instruções diziam «se a PRÓXIMA etapa pedir config diferente» e o CEREBRO «a Config sai SEMPRE» — vale o CEREBRO, e as Instruções encolhem 36 caracteres; o texto diz «**Próximo** vem antes de um divisor» (`D-094`, a ordem que o dono aprovou) e o esqueleto abria com `---` acima do Próximo — o esqueleto passa a ter o divisor logo abaixo do «Peça», no kit e na casa. Os cinco bullets do refino das Instruções saem do fim do bloco de fecho e voltam à seção «Refino», com asserção de posição.
- **`.claude/` no canal pasta:** a skill muda por WO, como qualquer arquivo; o `settings.json` o chat entrega inteiro — no mount, para download; no canal pasta, gravado na pasta-pai com o comando de cópia no fecho, porque nem a ponte do chat nem o executor gravam a configuração de permissão do executor.
- **O tamanho das Instruções em caracteres, com o locale dito:** `len()` em UTF-8 ou `LC_ALL=C.UTF-8 wc -m` — sem o locale, `wc -m` conta bytes (no Git Bash do Code, 7.463 para 7.199 caracteres). No CEREBRO gerado, na skill `wrap` gerada e na casa.
- **A pasta do histórico das conversas**, se o dono mantiver uma, entra na seção «Canal do chat» do CEREBRO gerado: só leitura, fora do git e do «Arquivar», e o número da conversa vem dela.
- **Molde de WO (gerado e casa):** âncora e texto novo sem linha em branco nas bordas, com o saldo de linhas como VERMELHO; o teste novo roda contra o código de antes e tem de falhar; relatório e log pela ferramenta de escrita, nunca `echo -e`. O `C43` ganha as três cláusulas.
- **A idempotência da WO, corrigida (emenda a `D-163`):** «já aplicada» é o texto novo inteiro presente **e a âncora ausente** — salvo quando a âncora está dentro do texto novo (forma «trocar»). Só com o texto inteiro, a REMOÇÃO era pulada sem ser aplicada, porque o texto novo dela é um pedaço da âncora; achado na réplica desta WO, que tem duas remoções. No molde e na skill `apply-wo`, gerados e da casa; o `C43` ganha a cláusula (75 → 76).
- **Origem:** os três vizinhos, no merge do v1.129.0 (`FK-BC` do Mapoteca; a fusão do GameDataHub; o item de 23/10 do satelite-web), e a análise `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`. Harness **19/19 · 113/113**.

## v1.131.0 — No canal pasta, o CEREBRO deixa a língua do mount nas regras que disparam todo turno (wo0140, D-167)
```

## Edicao 31 — `meta/STATUS.md` · so o numero da versao (C54)

**Ancora** (no cabecalho; TRECHO de uma linha longa, 1 ocorrencia — o resto da linha fica):

```
Versão atual: **v1.131.0**.
```

**Substituir por:**

```
Versão atual: **v1.132.0**.
```

## Edicao 32 — `meta/IDEAS.md` · a `i-N73` resolvida

**Ancora** (o titulo inteiro):

```
## i-N73 — O que o merge do v1.129.0 achou nos três vizinhos e o kit ainda não conserta — ABERTA, gatilho: a próxima análise de kit
```

**Substituir por:**

```
## i-N73 — O que o merge do v1.129.0 achou nos três vizinhos e o kit ainda não conserta — RESOLVIDA em 2026-10-24 (wo0142, `D-169`): os cinco itens; o divisor seguiu a ordem da `D-094`, não o esqueleto
```

## Edicao 33 — `meta/IDEAS.md` · a `i-N71`: o piloto do metodo C na casa, decidido

**Ancora** (o titulo inteiro):

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — ABERTA, o dado de campo chegou (2026-10-20: 10 WOs, 10 verdes, nenhuma parada no Code, nenhum erro conhecido no commit, nenhum documento com dois escritores); pede análise do método C como modo do kit, com a pergunta que a amostra não responde — o erro do chat que só o Code veria
```

**Substituir por:**

```
## i-N71 — O «método C» do satelite-web: o chat aplica direto e o Code confere — EM PILOTO NA CASA (decidido em 2026-10-24, ponto 4 da análise `261023`): dez WOs no método C, começando pelas de documentação, com o dono por documento escrito antes da primeira; depois, o kit documenta a variante do modo Code com a condição de entrada. Dado de campo do satelite-web (2026-10-20): 10 WOs, 10 verdes
```

## Edicao 34 — `meta/DECISIONS.md` · `D-169` no fim do arquivo

**Acrescentar** depois da ultima linha do arquivo (a que comeca com «**Fora:** a moldura do kit (a pasta do histórico no CEREBRO gerado)»), com **uma linha em branco** entre ela e o titulo novo. O arquivo e CRLF na arvore: grave o texto novo em CRLF.

```
## D-169 — O que o merge do v1.129.0 achou nos vizinhos: dois pares a menos, os bullets no lugar, `.claude/`, `wc -m`, a pasta do histórico e o molde

**Data:** 2026-10-24 · **WO:** 0142 · **Origem:** `i-N73` e a análise `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md`, cinco pontos aceitos pelo dono em 2026-10-24 · **Estende:** `D-166`, `D-167`, `D-168`.

**Decisão.** (1) **A Config sai sempre** — o lado velho eram as Instruções («se a PRÓXIMA etapa pedir config diferente»), e elas encolhem 36 caracteres. (2) **O divisor segue a `D-094`:** «**Próximo** vem antes de um divisor; o resto vem depois» é a ordem que o dono aprovou na wo0060; o esqueleto da wo0111 tinha saído com o `---` acima do Próximo, e é ele que muda, no kit e na casa. **Corrige a própria análise**, que dava o esqueleto como o lado certo porque «é o que se copia»: o `C19` cobrava a ordem da `D-094` e acusou na réplica. O Mapoteca, que resolveu pelo esqueleto, fica sabendo pela carta do pacote. (3) Os cinco bullets do refino das Instruções voltam à seção «Refino», com asserção de posição no `C111`. (4) **`.claude/`:** a skill muda por WO (medido: o Code editou a skill `wrap` da casa na wo0140); o `settings.json` o chat entrega inteiro — no mount, para download; no canal pasta, gravado na pasta-pai, com o comando de cópia no fecho. (5) **O tamanho das Instruções em caracteres, com o locale dito.** (6) A pasta do histórico das conversas, se houver, como item condicional da seção «Canal do chat» do CEREBRO gerado. (7) O molde de WO ganha três cláusulas do GameDataHub, e o `C43` as confere nos dois lados. Corta a **v1.132.0** (`D-158`).

**A idempotência, corrigida — emenda a `D-163`.** A `D-163` definiu «já aplicada» como o texto novo inteiro presente, e descartou a metade que o GameDataHub propunha («e a âncora ausente») olhando só para a forma «trocar». A réplica desta WO mostrou o outro lado: na REMOÇÃO o texto novo é um pedaço da âncora, presente antes de aplicar, e a edição era pulada sem nunca ter sido feita. A regra passa a ser: **texto novo inteiro presente e âncora ausente, salvo quando a âncora está dentro do texto novo**. No molde de WO e na skill `apply-wo`, gerados e da casa, com cláusula no `C43`.

**Também decidido no mesmo ponto da análise (registrado na `i-N71`):** o método C entra em piloto na casa — dez WOs, começando pelas de documentação, com o dono por documento escrito antes da primeira —, e só depois o kit documenta a variante.

**Números** `[medido em sandbox — réplica do HEAD; o relatório da wo0142 traz a medida no repo]`: `index.html` 936.658 → 938.573 bytes; Instruções no padrão 5.852 → 5.816 (incremento do Code 540/550, igual); `C111` 5 → 7 pares; `C43` 72 → 76 cláusulas; harness 113/113.
```

## Edicao 35 — build e harness

```
node build.js
node validate.js index.html
```

Esperado: `OK: index.html (938573 bytes)` e `RESULTADO: VERDE — 19/19, 0 erros` com **113/113**. Registre crua no relatorio a linha do `C111`, a do `C43` e a do `C28`. Harness vermelho = **PARE**.

## Edicao 36 — conferencia, antes e depois

Rode cada comando antes da Edicao 1 e depois da Edicao 35. Todos contam LINHAS; o padrao de cada um e exclusivo do texto que esta WO insere ou remove (medido no HEAD). Esperado `antes -> depois` no comentario:

```
grep -cF 'se a PRÓXIMA etapa pedir config diferente' src/index.template.html                # 1 -> 0
grep -cF '**Config:** no fim, sempre, recomende-a por raia' src/index.template.html         # 0 -> 1
grep -cF 'Se o dono mantém uma pasta de histórico das conversas' src/index.template.html     # 0 -> 1
grep -cF 'o `.claude/settings.json` o chat entrega INTEIRO' src/index.template.html         # 0 -> 1
grep -cF 'LC_ALL=C.UTF-8 wc -m' src/index.template.html meta/CEREBRO.md .claude/skills/wrap/SKILL.md   # 0/0/0 -> 2/1/1
grep -cF 'sem linha em branco nas BORDAS' src/index.template.html meta/workorders/_TEMPLATE.md     # 0/0 -> 1/1
grep -cF 'rode-o contra o codigo de ANTES' src/index.template.html meta/workorders/_TEMPLATE.md     # 0/0 -> 1/1
grep -cF 'nunca por `echo -e`/`printf`' src/index.template.html meta/workorders/_TEMPLATE.md       # 0/0 -> 1/1
grep -cF 'const KIT_VERSION = "1.132.0";' src/index.template.html                            # 0 -> 1
grep -cF 'config se a proxima etapa x config sempre' validate.js                             # 0 -> 1
grep -cF 'salvo quando a ancora esta DENTRO do texto novo' src/index.template.html meta/workorders/_TEMPLATE.md   # 0/0 -> 1/1
grep -cF 'salvo quando a âncora está dentro do texto novo' src/index.template.html .claude/skills/apply-wo/SKILL.md   # 0/0 -> 1/1
grep -c '^## D-169 ' meta/DECISIONS.md                                                       # 0 -> 1
grep -c '^## i-N73 .*RESOLVIDA' meta/IDEAS.md                                                # 0 -> 1
grep -m1 '^## v' meta/CHANGELOG.md                                                           # v1.131.0 -> v1.132.0
```

**O esqueleto, conferido por posicao** (rode depois da Edicao 35): no `meta/CEREBRO.md`, a linha logo depois de `**Esqueleto — copie e preencha` + a linha em branco + a cerca de abertura tem de ser `**Próximo**                                   (sempre)`, e a linha logo depois do «Peça no próximo turno» tem de ser `---`. O mesmo no CEREBRO gerado (o `C19` e o novo par do `C111` ja conferem).

**Prova negativa (rode e restaure):** no `src/index.template.html`, na linha da Edicao 1, troque `**Config:** no fim, sempre, recomende-a por raia —` de volta para `**Config:** no fim, se a PRÓXIMA etapa pedir config diferente, recomende-a explícita —`, rode `node build.js` e `node validate.js index.html`: o `C111` tem de ficar vermelho com `config se a proxima etapa x config sempre`. Restaure, rode o build de novo e confira que o `index.html` voltou a 938.573 bytes e o harness ao verde.

**Forma do diff:** `git diff --numstat` (some `--ignore-cr-at-eol` se o seu git acusar fim de linha), contra a tabela medida na replica. Linha a mais ou a menos em qualquer arquivo = **PARE e reporte**.

| Arquivo | + | − |
|---|---|---|
| `src/index.template.html` | 22 | 15 |
| `index.html` (gerado) | 22 | 15 |
| `validate.js` | 14 | 2 |
| `meta/workorders/_TEMPLATE.md` | 9 | 2 |
| `meta/CEREBRO.md` | 2 | 2 |
| `.claude/skills/wrap/SKILL.md` | 1 | 1 |
| `.claude/skills/apply-wo/SKILL.md` | 2 | 1 |
| `meta/CHANGELOG.md` | 10 | 1 |
| `meta/STATUS.md` | 1 | 1 |
| `meta/IDEAS.md` | 2 | 2 |
| `meta/DECISIONS.md` | 12 | 0 |
| `meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md` (nova, do chat) | 79 | 0 |
| `logs/2026-10-23.md` (a secao do chat, ja no disco) | 6 | 0 |
| `logs/2026-10-24.md` (novo, do chat) | 12 | 0 |
| `meta/workorders/261024-wo0142-lacunas-do-pacote.md` (esta WO) | 709 | 0 |

Medido com `git diff --no-index --numstat --ignore-cr-at-eol` entre a replica do HEAD e a replica aplicada; os do chat, com `wc -l` e `git diff --numstat` no repositorio.

## Edicao 37 — commit e push (verde = sem perguntar)

```
git add src/index.template.html index.html validate.js meta/workorders/_TEMPLATE.md meta/CEREBRO.md .claude/skills/wrap/SKILL.md .claude/skills/apply-wo/SKILL.md meta/CHANGELOG.md meta/STATUS.md meta/IDEAS.md meta/DECISIONS.md meta/analises/261023-ANALISE-lacunas-do-pacote-e-metodo-c.md logs/2026-10-23.md logs/2026-10-24.md meta/workorders/261024-wo0142-lacunas-do-pacote.md
```

```
git commit -m "feat(kit): o que o merge do v1.129.0 achou nos vizinhos - dois pares, bullets, .claude, wc -m, historico, molde e idempotencia (wo0142, D-169)" -m "Config sai sempre; esqueleto do fecho com o divisor depois do Proximo (D-094), no kit e na casa; bullets do Refino de volta; .claude: skill por WO, settings.json pelo dono no canal pasta; wc -m com locale; pasta do historico no CEREBRO gerado; tres clausulas do molde; idempotencia: texto novo inteiro e ancora ausente, salvo forma trocar. C111 7 pares, C43 76. v1.132.0."
```

```
git push
```

---

## Fora de escopo

- O piloto do metodo C na casa (`i-N71`): WO propria, depois desta, com o dono por documento escrito antes.
- O pacote aos vizinhos: um so, depois desta WO, gerado pelo dono na v1.132.0.

## Armadilhas desta WO

- **Fim de linha.** `src/index.template.html`, `validate.js`, `meta/DECISIONS.md`, `meta/CEREBRO.md`, `meta/workorders/_TEMPLATE.md` e `.claude/skills/wrap/SKILL.md` sao **CRLF** na arvore; `meta/CHANGELOG.md`, `meta/STATUS.md` e `meta/IDEAS.md` sao LF. Os textos novos de varias linhas vao no fim de linha do arquivo.
- **Tres ancoras de varias linhas (Edicoes 2, 14 e 21):** sao as primeiras metades de dois MOVER — os bullets do Refino (Edicoes 2 e 3) e o divisor do esqueleto (14 e 15; 21 e 22 na casa). Case o bloco inteiro, com o fim de linha do arquivo entre as linhas; ocorrencia unica. Mover tem duas metades: confira que as duas entraram — e note a idempotencia: na remocao, o texto novo ja existe antes de aplicar (ver o cabecalho) (o `C111` confere a posicao dos bullets; o `C19` e o par do divisor, o esqueleto).
- **Edicoes que repetem a ancora dentro do texto novo:** a idempotencia e pelo texto novo INTEIRO e pela ancora ausente.

---

## Relatorio

O que foi feito, edicao por edicao · a saida crua das conferencias (numero e comando) · o que fugiu do texto literal · o que muda para quem usa · o que voce olhou alem da WO · arquivos tocados · build/validacao · commit e push. Grave em `../AAMMDD-HHMM-code-kcm-apply-wo0142.txt` (`date +%y%m%d-%H%M`, rodado na hora). Analise que mudou de estado: diga no relatorio, nao edite.
