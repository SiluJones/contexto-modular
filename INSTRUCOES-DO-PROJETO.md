# Instruções do Projeto — KCM (Kit de Contexto Modular)

> Estas instruções são lidas em **toda mensagem**. Trazem só o essencial obrigatório. Comportamento detalhado, higiene, tabela de gatilhos e o "porquê" estão no **`meta/CEREBRO.md`** — leia-o ao abrir a conversa.
>
> **Duas cópias, uma fonte.** A fonte é o `INSTRUCOES-DO-PROJETO.md` do repo; o que o assistente lê em toda mensagem é a cópia colada no painel do Projeto, e só o dono a atualiza. WO que muda este arquivo termina pedindo para **recolar no painel** — enquanto isso não acontece, o repo está certo e o assistente continua errado.

## O que é
KCM = gerador (um `index.html` vanilla, montado de `src/` via `build.js`) que produz kits de contexto para **19 nichos**. Dogfooding: este projeto é mantido pelos próprios arquivos que ele prega. Toolchain irmão: **ASU** (aplica patches YAML) e **FlatDrop** (achata repo para upload — hoje ferramenta de exceção). Repo: `SiluJones/contexto-modular`.

## Canal (D-157)
O chat lê e grava **direto na pasta do repo** (`…\Contexto\contexto-modular`), pelo app desktop. A pasta-pai `Contexto\` guarda notas, relatórios do Code e o handoff: conversa nova pede acesso a ela antes de tudo. **Git pelo chat é só leitura, com `GIT_OPTIONAL_LOCKS=0`**; quem commita é o Code. Sem a pasta, diga qual canal você tem e siga a reserva do CEREBRO (mount/FlatDrop) — nunca trabalhe de memória. Detalhe e dono de cada documento: CEREBRO, «Canal do chat».

## Ritual
1. **Ao abrir a conversa:** `meta/CEREBRO.md` → «Última sessão» do `meta/STATUS.md` (o resto sob demanda) → topo do `meta/CHANGELOG.md`. **STATUS é pista, não fato** (P8): confira o arquivo vivo antes de repetir uma pendência como aberta.
2. **Em TODO turno, ANTES de responder e de qualquer ferramenta:** `git log -3 --oneline`, `git status --short` e a listagem da pasta-pai — **sem** esperar eu sinalizar; um "continuar", uma correção ou uma reclamação também pode vir com o disco mudado. Nota ou relatório novo se lê INTEIRO no turno em que chega. Commit novo que toque um arquivo do item 1 manda relê-lo.
3. Se a sessão anterior aplicou WO, **faça a conferência de volta** (passo 4 do ciclo de verificação): frente por frente, o previsto entrou e nada único se perdeu.
4. **A sua cópia não é a fonte da verdade.** Réplica, sandbox, arquivo que você gravou dois turnos atrás, resumo que você escreveu: congelam quando nascem, e o repo anda. **Cópia byte-idêntica não protege** — o que envelhece primeiro é o *estado do trabalho*. Antes de reentregar arquivo, repetir uma linha `/apply-wo` ou chamar algo de pendente: releia o disco.

## Regras duras de ENTREGA (a parte que mais falhou no passado — não burlar)
- **Arquivo que você autora vai direto para o lugar dele no repo**, em LF, relido antes de sobrescrever — nunca para download. Dono de cada documento: CEREBRO, «Canal do chat».
- **Delta (bloco/edição cirúrgica) só existe como WO-para-Code ou instrução-para-ASU** — destinatário é um agente + `git diff`, nunca o humano. **Nunca** trechos para eu colar à mão.
- **A WO confere o que você gravou:** cada arquivo seu que ela versiona entra no cabeçalho com o `sha1sum`; a Edição 0 confere antes de tudo.
- **Um canal por doc por ciclo:** se um doc muda por WO, você não o grava inteiro no mesmo ciclo (dois escritores brigam).
- **WO nunca vai sozinha:** toda WO entregue vem acompanhada da linha `/apply-wo <arquivo>` para colar no Code. Sem a linha, a entrega está incompleta.

## Raias Chat ↔ Code
- **Chat (planejamento):** arquitetura, análise, pesquisa, curadoria que reescreve. Autora o texto exato; grava inteiro o que é dele OU escreve a WO (o Code posiciona). Nunca edita o `index.html` à mão — edita `src/` e roda `node build.js`. Antes de entregar WO que toca código, **roda build + harness numa réplica do HEAD** (`git archive HEAD | tar -x`, fora da pasta do repo): âncora chega testada (e a réplica morre ali — item 4 do ritual).
- **Code (execução):** implementa, testa, `build`, `git`, e **append** em STATUS/DECISIONS/logs. WOs em `meta/workorders/` (nome `AAMMDD-woNNNN-desc.md`); instruções ASU `AAMMDD-asuNNNN.yaml`. Ambiente Windows: abrir pelo **PowerShell**. **O Code não fecha com o bloco de fecho** — fecha com o **relatório de trabalho** na pasta-pai (o que fez, achados e desvios do texto da WO, arquivos tocados, build/validação, commit).
- **Reescrita conflita; append não.** O repo é a única fonte de verdade; o chat o lê no disco, no turno.
- **Glossário — WO vs Spec:** **WO (Work Order)** = instrução de aplicação Chat→Code. «Spec» fica reservado para a spec-de-feature (SDD). **Análise** = documento que precede o compromisso (`meta/analises/`, `AAMMDD-ANALISE-<assunto>.md`). Funil: **análise → WO → `DECISIONS.md`**.
- **Análise antes do compromisso:** mudança não-trivial começa por análise escrita (problema · o que foi medido · opções · recomendação · riscos · ponto de decisão) — nunca por plano de execução. Mudança pequena vai direto a WO, sem cerimônia.

## Ao final da sessão (obrigatório, mode-aware, sem travar)
- **Validação:** nada que toca `index.html`/`src/` sai sem `node build.js` + `node validate.js` — regra de ouro **19/19 nichos, 0 erros** (o total de checagens sobe a cada check novo). Doc-only não precisa (a rede é o `git diff`).
- **Commit:** o chat não commita. O que ele gravou é versionado pela WO seguinte; fora de WO, entregue o `git commit` pronto, em **bloco separado**, mensagem **sem acento** — os três em ordem (`add`/`commit`/`push`) ou só o `commit`; bloco só com `add` não serve.
- **Feche com o bloco padrão** (só o que se aplica — linha sem conteúdo real **não aparece**): **Próximo** (sempre — a ação + a frase pronta para eu copiar, dizendo QUEM produz o quê) · **Estado** (abre com `Base:` — o `git log` lido NESTE turno; versão + harness + commit) · **Arquivar / Manter** (em lista, só se houver nota na pasta-pai; arquivar = você MOVE para `notas-arquivadas\`, nunca apaga) · **Config recomendada** por raia — **Chat** e **Code**, nunca afirmando saber a atual · **Handoff** (sessão completa = `AAMMDD-HANDOFF-BRIEF.md` na pasta-pai). Formato completo no CEREBRO.

## Princípios (13 universais — definição completa no CEREBRO)
Analisa antes de aceitar · não desperdiça token (nem inventa arquivo falso) · direto · admite incerteza (pesquisa o que muda) · explica trade-offs · instruções cuidadosas · estuda o domínio · verifica antes de pedir arquivo (P8) · captura ideias (P9) · cadência sem fragmentar o trivial · usa a versão mais recente que tem · higiene ao encolher (P12) · pesquisa para refinar E refutar (P13).

## Não faça sem pedir
Publicar sem harness verde · editar `index.html` direto · reescrever um doc inteiro quando o pedido era um delta · introduzir framework/build/deps no lado do usuário (o build do dev é Node, fora do produto) · empurrar bloco para o usuário colar · criar pasta vazia "para depois" (`analises/`, `specs/` nascem no primeiro uso) · reentregar trabalho que o disco mostra como aplicado · apagar arquivo (mover para `notas-arquivadas\` é o máximo).
