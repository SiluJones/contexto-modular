# WO 0128 — registra a mudanca de fluxo (chat direto na maquina) e corrige a contagem das Instrucoes

> **Tipo:** DOC-only. Nao toca `src/`, `index.html` nem `validate.js`.
> **Config sugerida:** modelo padrao, esforco baixo. Tres arquivos, quatro edicoes, todos LF.
> **Pre-requisito:** commit `c3b6459`, arvore limpa (so `.claude/launch.json` fora de escopo), harness
> em **19/19 nichos · 105/105 · 0 erros**.
> **Base:** relato do dono na conversa de 2026-10-12 `[relatado pelo dono]`; a nota `260926-0947.txt` e
> tres prints da pasta `Contexto`, lidos pelo chat com a pasta vinculada; e o repositorio lido por clone
> do remoto e por `git status` na maquina, os dois em `c3b6459` `[medido por instrumento]`.
> **Depende de:** wo0127 (aplicada, `6badc7d`; fecho `c3b6459`).
> **Ancora semantica:** se um trecho-ancora nao bater EXATAMENTE, **PARE e reporte**.
> **Idempotencia:** antes de cada insercao, procure a frase-chave do texto NOVO. Se ja existir, **PULE**.
> **Proximo comando:** `/wrap`

> **Canal dos meta neste ciclo = CODE.** Esta WO **e** o registro de `IDEAS` e `DECISIONS`. O
> `logs/2026-10-12.md` e **arquivo novo escrito pelo chat direto no repo** (ja esta em `logs/`, nao
> rastreado; vai no `git add` desta WO, sem edicao). O `/wrap` que fechar esta WO **acrescenta** a ele —
> nao o recria. Esta propria WO tambem ja esta em `meta/workorders/`, posta pelo chat com a pasta vinculada.

> **Ancoras lidas em** `c3b6459` (clone do remoto, so leitura), aplicadas num clone de trabalho:
> `git diff --numstat` deu `2 2 INSTRUCOES-DO-PROJETO.md` · `16 0 meta/DECISIONS.md` ·
> `24 0 meta/IDEAS.md`; `node build.js` → `index.html` 889.971 bytes (inalterado); harness 19/19 · 105/105 · VERDE.

---

## 1. Por que

**(1) O meio mudou.** O dono relata que o fluxo FlatDrop → mount ficou impraticavel apos uma
atualizacao de layout do Claude, e que o app desktop agora deixa o chat trabalhar direto em pastas da
maquina — tres projetos dele ja rodam assim. O kit inteiro ainda descreve o mount. Esta WO **nao**
reescreve o ritual: registra o fato (`D-156`) e abre a analise do modo novo (`i-N62`), que a proxima
conversa faz estudando os tres projetos antes de desenhar.

**(2) Duas pendencias da conversa anterior ficavam so no chat.** A regra «o Proximo nomeia o
entregavel e quem o produz» (seria a wo0128) e o achado do proprio Code no fim da `FIX-038` (o `/wrap`
conferir a forma do STATUS). Fato que esta so no chat nao existe para a proxima conversa: viram `i-N63`
e `i-N64`.

**(3) Defeito antigo achado na leitura.** `INSTRUCOES-DO-PROJETO.md` ainda dizia «18 nichos» e
«18/18» dezesseis commits depois do 19º nicho. O `C102` nao varre este arquivo; estende-lo fica para
a proxima WO de harness (esta e doc-only).

## Inventario

`grep -rn "18 nichos\|18/18"` nos arquivos de prosa que o `C102` **nao** varre: **1 arquivo**
(`INSTRUCOES-DO-PROJETO.md`), **2 ocorrencias**. Os seis que o `C102` varre ja estao em 19.
**Declaro:** 4 edicoes · 3 arquivos modificados · 1 arquivo novo do chat (o log) · nenhum check.

---

## Edicao 1 — `meta/IDEAS.md` · `i-N64`, `i-N63`, `i-N62`

**Ancora** (linha unica; o arquivo e ordem decrescente, a ideia nova vai ACIMA da mais recente):

```
## i-N61 — Cinco nichos nunca foram rodados, e o catálogo não distingue desenho de uso real — ABERTA, sem gatilho de data
```

**Inserir IMEDIATAMENTE ANTES dessa linha** o bloco abaixo, **seguido de uma linha em branco**:

```
## i-N64 — O `/wrap` confere a FORMA do STATUS antes de editar, não só o que o relatório afirma — ABERTA, sem gatilho de data

**Origem:** achado registrado pelo próprio Code no fim da `FIX-038` (2026-09-15) e deixado «para o chat considerar»; capturado aqui em 2026-10-12 para não ficar só dentro de uma decisão. O fecho da wo0126 **sobrescreveu** a «Última sessão» da wo0125 em vez de rebaixá-la para «Sessão anterior»; o resultado imediato parecia certo e a perda só apareceu comparando com o commit anterior. O item 1b do `/wrap` confere o que o relatório **afirma**, não a estrutura do arquivo que o fecho edita.

**A ideia:** antes de gravar o `STATUS.md`, o `/wrap` confere que o bloco da sessão anterior **ainda existe em algum lugar do arquivo** depois da edição — é a `DEC-052` (edição que move tem duas metades) aplicada ao próprio fecho. Pode virar passo da skill, check do harness ou as duas coisas; a escolha pede análise curta.

## i-N63 — A frase do «Peça no próximo turno» nomeia o ENTREGÁVEL e QUEM o produz, não só o assunto — ABERTA, sem gatilho de data

**Relatado pelo dono em 2026-09-15**, ao não entender a frase «escreva a carta 04 com o estado final, e o roteiro pendente no formato novo»: ela cabia em duas leituras (o chat entrega o roteiro pendente já no formato novo, ou o chat entrega o formato novo para o roteiro pendente). As duas leituras colapsavam no mesmo entregável, mas a frase não deixava isso claro — e frase do Próximo que precisa de interpretação já falhou, porque a regra dela é ser **citável sem edição**.

**É um terceiro modo de falha, e as duas regras atuais não o pegam:** a «lacuna» (`___` a preencher, wo0064) pede trabalho que falta; o «apêndice» («a frase vai sozinha», wo0126) entrega trabalho que sobra; a **ambiguidade** entrega a frase certa com dois sentidos. A regra candidata: *o Próximo nomeia o entregável e quem o produz — «o chat entrega X», nunca só «X».* Era para ter virado a wo0128; foi adiada pela mudança de fluxo (`D-156`) e fica aqui até a próxima WO de kit.

## i-N62 — Um modo do KCM que trabalha DIRETO NA MÁQUINA (chat no app desktop com pasta conectada, só ele ou junto do modo Code) — ABERTA, gatilho: a próxima conversa, com os três projetos que já rodam assim

**Relatado pelo dono em 2026-10-12** (fatos do relato, não medidos daqui): uma atualização de layout do Claude tornou impraticável o fluxo **FlatDrop → upload para o mount** que o kit inteiro pressupõe (detalhe e contorno no parágrafo seguinte); em compensação, o app desktop passou a permitir que o chat trabalhe **direto em pastas da máquina**. **Três projetos do dono já rodam nesse fluxo novo.** O dono escolhe, como pasta de contexto do projeto no app desktop, **a mesma raiz do repositório** onde o Code trabalha, e costuma dar ao chat permissão de leitura na **pasta-pai** do projeto (onde ficam as notas `.txt` e os relatórios). Pediu à Anthropic uma correção pequena na interface «Nova» e não foi atendido.

**O mecanismo exato, medido nos prints do dono (arquivados em `Contexto/notas-arquivadas/`: `Captura de tela 2026-09-26 093232.png`, `…093240.png` e `2026-09-30 161640.png`) e na nota `260926-0947.txt`:** o layout novo da página do Projeto mostra os arquivos como uma lista («123 arquivos») **sem seleção em massa** — excluir é arquivo por arquivo, o que inviabiliza o ciclo FlatDrop (apagar a leva velha inteira, subir a nova). O layout antigo tinha **«N selecionado» + lixeira**. Houve um contorno e **ele já acabou**: em 30/09, um Projeto com pasta local vinculada pelo app desktop voltava ao layout antigo (painel «Contexto» + «Pasta … Em Arge»); **desde a semana anterior a 12/10 isso não acontece mais** `[relatado pelo dono]`. O ciclo de apagar a leva inteira não tem mais caminho na página do Projeto. O dono teme ainda que a mudança chegue às contas gratuitas, onde mantém projetos de teste do próprio KCM.

**Como o chat alcança a máquina, observado pelo dono** `[relatado pelo dono]`**:** no app desktop, vincular uma pasta ao Projeto e mandar uma mensagem numa conversa dele faz aparecer, ao lado do nome da conversa, um **ícone de computador com círculo verde**. A partir daí a mesma conversa funciona também no **site**, e conversas novas criadas no site já nascem com o acesso. Foi assim nos três projetos e nesta conversa, que serve de medição: o primeiro turno de 12/10 rodou no site antes do vínculo e **não** alcançou o disco; o segundo rodou no app e alcançou; o terceiro voltou ao site e **alcançou** `[medido por instrumento]`. Se é configuração ou efeito da versão em que chat e Cowork viraram um só, ainda não se sabe.

**O que isso quebra no kit, medido no texto atual:** o ritual de início (itens 3–5 das Instruções: «reveja o mount», «`_MANIFEST.md`», «a sua cópia não é a fonte da verdade»), a regra de entrega «nome de download desachatado do FlatDrop», as cláusulas de manifesto e árvore no CEREBRO (`D-152`) e, mais fundo, a **raia**: se o chat lê e escreve no disco, a regra «um escritor por doc por ciclo» e a fronteira chat-planeja / Code-executa deixam de ser impostas pelo meio e passam a depender só de disciplina.

**A pergunta da próxima conversa, a responder estudando os três projetos antes de desenhar:** o modo novo é (a) uma terceira raia ao lado de chat-mount e Code, (b) uma variante do modo Code em que o chat também tem disco, ou (c) a substituição do modo mount. Dela depende o que acontece com o FlatDrop: aposentar, rebaixar a ferramenta de exceção, ou manter para quem continua no navegador. **Nada disso está decidido.**
```

## Edicao 2 — `meta/DECISIONS.md` · `D-156` (append no fim do arquivo)

**Ancora:** o fim do arquivo (hoje termina no bloco da `FIX-038`). **Inserir no FIM**, precedido de
linha em branco e `---`:

```

---

## D-156 — O fluxo de trabalho mudou de meio: o chat passa a ler o disco, e o kit ainda descreve o mount

**Data:** 2026-10-12 · **Base:** relato do dono na abertura da conversa de 2026-10-12 `[relatado pelo dono]`; leitura do repositório em `c3b6459` `[medido por instrumento: clone do remoto]`.

**O fato, como foi relatado.** Uma atualização de layout do Claude tornou impraticável o fluxo que o kit pressupõe desde a v1.x — achatar o repositório com o FlatDrop e subir para o mount do Projeto. No mesmo período, o app desktop passou a permitir que o chat trabalhe **direto em pastas da máquina**. O dono já tem **três projetos** rodando assim: pasta de contexto do projeto = raiz do repositório (a mesma do Code), mais leitura autorizada na pasta-pai para notas e relatórios.

**O que fica decidido agora, e é pouco de propósito.** (1) O fluxo mount **não é revogado** por esta decisão: o texto do kit continua descrevendo-o até uma análise decidir o substituto, porque reescrever o ritual antes de estudar os três projetos que já rodam no fluxo novo seria desenhar sem caso — a mesma lógica da `i-N61`. (2) A próxima frente é essa análise, registrada como `i-N62`. (3) Até lá, **o chat que estiver no app desktop com a pasta conectada lê o repositório vivo em vez do mount**, e a regra «um escritor por doc por ciclo» continua valendo por disciplina, já que o meio não a impõe mais.

**Achado da mesma leitura, e é defeito antigo:** o `INSTRUCOES-DO-PROJETO.md` — o backup das Instruções do painel — ainda dizia **«18 nichos»** e **«18/18 nichos, 0 erros»**, dezesseis commits depois de o 19º nicho entrar (`f06cd9a`, wo0121). O `C102` varre seis arquivos de prosa viva e este não está entre eles; o painel do Projeto, que é a cópia que vale, carregava o mesmo erro. Corrigido no arquivo por esta WO; **o painel precisa ser recolado à mão pelo dono**, como as próprias Instruções mandam. Estender o `C102` a este arquivo fica para a próxima WO de harness — esta é doc-only.

**A primeira sessão no fluxo novo, medida.** A conversa de 2026-10-12 começou **no site**, sem as ferramentas do computador e com o mount vazio — e o `260926-0947.txt` foi declarado *não legível por este canal*. O turno seguinte rodou **no app desktop**: o chat pediu acesso à pasta `Contexto`, o dono concedeu, e o `.txt`, os três prints e o repositório local foram lidos (HEAD `c3b6459`), com o harness rodado no próprio repo (**19/19 · 105/105**). O terceiro voltou **ao site** e o acesso continuou. **O meio muda dentro da mesma conversa**, e a ressalva escrita num turno pode estar vencida no seguinte — é a `FK-AE` no eixo do tempo.

**O chat na máquina, medido nesta conversa, não é o ambiente do Code:** roda numa máquina Linux dentro do PC (`node`, `git`, `python3`, `npm` presentes; **sem PowerShell**), cada comando começa do zero com teto de 3 minutos, apagar arquivo vem desligado (o `git` deixa `.lock` em `.git` até ser liberado) e a rede segue lista de permissão. E o argumento a favor de manter o Code é de **verificação**, não de ferramenta: nesta série o relatório do Code pegou erro do chat quatro vezes. Isso entra como dado da análise da `i-N62`, não como decisão.
```

## Edicao 3 — `INSTRUCOES-DO-PROJETO.md` · a contagem do produto

Substituir, **uma vez**, `kits de contexto para **18 nichos**` por `kits de contexto para **19 nichos**`.

## Edicao 4 — `INSTRUCOES-DO-PROJETO.md` · a regra de ouro

Substituir, **uma vez**, `regra de ouro **18/18 nichos, 0 erros**` por `regra de ouro **19/19 nichos, 0 erros**`.

> Este arquivo e **backup**: a copia que vale e o painel do Projeto. Depois do commit, o dono recola
> o arquivo no painel — enquanto nao recolar, o repo esta certo e o assistente continua errado.

---

## Fora de escopo

- **Reescrever o ritual, as regras de entrega ou as clausulas do FlatDrop** — espera a analise da `i-N62`.
- **Estender o `C102` ao `INSTRUCOES-DO-PROJETO.md`** — proxima WO de harness.
- **`meta/STATUS.md`, `meta/CHANGELOG.md`** — canal do `/wrap`. **Versao** — segue v1.122.0.

## Armadilhas desta WO

- **`meta/IDEAS.md` nao termina em quebra de linha** (ultimo byte e `.`). A Edicao 1 nao encosta no
  fim do arquivo, entao isso nao morde — e propriedade do arquivo, registrada para quem medir bytes.

---

## Depois de aplicar — conferencia antes do commit

- [ ] `git diff --numstat` mostra **exatamente**: `2 2 INSTRUCOES-DO-PROJETO.md` · `16 0 meta/DECISIONS.md` ·
      `24 0 meta/IDEAS.md`, mais os dois arquivos novos (`logs/2026-10-12.md` e esta WO). **Nada alem.**
- [ ] `node build.js` → `index.html` **inalterado** (`git diff --stat index.html` vazio).
- [ ] `node validate.js index.html` → **19/19 · 105/105 · 0 erros**.
- [ ] Greps **ancorados em `^`**: `grep -c "^## i-N64 " meta/IDEAS.md` = **1** ·
      `grep -c "^## i-N63 " meta/IDEAS.md` = **1** · `grep -c "^## i-N62 " meta/IDEAS.md` = **1** ·
      `grep -c "^## D-156 " meta/DECISIONS.md` = **1**.
- [ ] Contagens das Instrucoes: `grep -c "contexto para \*\*19 nichos\*\*" INSTRUCOES-DO-PROJETO.md` = **1** ·
      `grep -c "19/19 nichos, 0 erros" INSTRUCOES-DO-PROJETO.md` = **1** ·
      **negativo:** `grep -c "18 nichos" INSTRUCOES-DO-PROJETO.md` = **0** (era **2** linhas: `18/18 nichos` tambem casa o padrao).
- [ ] **Item DE LEITURA:** abra `meta/IDEAS.md` e confira a ordem `i-N64` → `i-N63` → `i-N62` → `i-N61`.

## Relatorio de aplicacao

O que foi feito · o que fugiu do texto literal · arquivos tocados · build/validacao · commit e push.

## Commit — blocos separados, mensagem SEM acento

```
git add meta/IDEAS.md meta/DECISIONS.md INSTRUCOES-DO-PROJETO.md logs/2026-10-12.md meta/workorders/261012-wo0128-registra-o-fluxo-direto-na-maquina.md
```

```
git commit -m "docs(meta): registra a mudanca para o fluxo direto na maquina e corrige a contagem das Instrucoes" -m "O fluxo FlatDrop para o mount ficou impraticavel e o chat passa a trabalhar direto em pastas da maquina pelo app desktop; tres projetos ja rodam assim. D-156 registra o fato sem revogar o modo mount, e i-N62 abre a analise do modo novo. i-N63 e i-N64 tiram do chat duas pendencias da conversa anterior. INSTRUCOES-DO-PROJETO.md ainda dizia 18 nichos."
```

```
git push
```
