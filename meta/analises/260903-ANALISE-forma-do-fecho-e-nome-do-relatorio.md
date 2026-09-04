# ANÁLISE — A forma do fecho deriva, e o nome do relatório não diz do que trata

> **Status:** **Decidida** em 2026-09-03 — ver «Decisão» no fim
> **Data:** 260903 · **Base:** v1.122.0, commit `ca4e31b` (mount de 2026-09-03 20:28)
> **Vira:** wo0110 (nome do relatório) e wo0111 (forma do fecho) · **Decisão:** do dono, no turno de 2026-09-03
> **Origem:** reclamação do dono em 2026-09-03, com dois prints do `mapsmith 11` como evidência: (1) a forma do fecho de turno varia entre projetos e **dentro da mesma conversa**; (2) o mapsmith nomeia os relatórios do Code melhor do que o kit ensina.

---

## Problema

São dois defeitos vizinhos, e vale mantê-los juntos porque a causa é a mesma família: **forma padronizada que não sobrevive ao uso.**

**(1) O fecho de turno deriva.** O dono descreve o sintoma com precisão: projetos variam entre si, e — pior — variam dentro da mesma conversa. Fecho instável cobra o preço no lugar mais caro: é justamente o bloco que existe para permitir retomar sem reconstruir contexto.

**(2) O nome do relatório não diz do que ele trata.** O kit ensina `AAMMDD-HHMM-code-<slug>.txt`, com `<slug>` = nome do projeto. Num repositório, todo relatório é daquele projeto — então o campo que distingue um relatório do outro é sempre o mesmo, e sobra só a hora para diferenciar `260903-2011-code-kcm.txt` de `260903-2014-code-kcm.txt`.

## Restrições / o que foi medido

**O achado que reorienta a análise inteira: o formato do mapsmith é o formato do KCM.** Lido neste turno, `meta/CEREBRO.md` §«🧾 Bloco de fecho de turno (formato fixo — dogfood do wo0058/wo0060/wo0064)» já manda, nesta ordem: **Próximo** *(«sempre presente, em duas partes: (a) Ação (b) Peça no próximo turno»)*, **Estado**, **Arquivar / Manter** *(«em lista»)*, **Config recomendada** *(«uma linha por raia»)*, **Handoff** *(«arquivo por arquivo, onde cada um vai»)*, com o divisor antes de «Próximo». O print do mapsmith é essa seção cumprida à risca, com os rótulos **Ação:** e **Peça no próximo turno:** visíveis como bullets.

**Portanto não falta desenho. Falta aderência** — e inventar um formato novo aqui seria tratar o sintoma errado, além de invalidar a aderência de quem já acerta.

**A deriva medida, e ela é minha, neste mesmo fio, contra o texto acima:**

| Turno | O que saiu | Contra o canônico |
|---|---|---|
| 1 | os cinco campos presentes | (a) e (b) do **Próximo** fundidos em prosa, sem os rótulos |
| 2 | quatro campos | **Arquivar / Manter** virou uma frase corrida em vez de lista, havendo avulsos no mount |
| 3 | quatro campos | **Handoff ausente** com **três arquivos** trocando de mão; o destino de cada um foi dito em prosa, no meio da resposta, e a linha `/apply-wo` foi para o topo |

Três turnos, três formas diferentes, com o formato fixo escrito no arquivo que é lido a cada mensagem. *É o mesmo padrão que o kit já documentou em outro lugar: regra escrita num CEREBRO não alcança quem já pegou o hábito — medido no mapsmith, onde a reclamação voltou no bloco 35 depois de a regra ter sido escrita no bloco 18.*

**Sobre o nome do relatório, medido no gerador (`index.template.html`):**

- **Cinco lugares** declaram o padrão `AAMMDD-HHMM-code-<slug>.txt`: a linha do CEREBRO que institui a gravação, duas na skill `apply-wo`, uma na `wrap` e uma na lista de obrigações do `settings.json`.
- A razão declarada para o `<slug>` está no próprio texto: *«a pasta-pai costuma ser compartilhada por vários repos»*. **O slug tem função real** — desambiguar entre repositórios que dividem a pasta-pai. Não é enfeite, e trocá-lo por outra coisa custa essa função.
- O mapsmith escreve `260819-1335-code-apply-wo0101.txt` e `260819-1339-code-wrap-wo0101.txt`: **trocou o slug do projeto pelo ato + alvo.** Ganhou «qual relatório trata do quê» e perdeu «de qual repo é». No mesmo print aparecem também `260819-1023.txt` e `260819-1413.txt`, sem prefixo nenhum — notas de outra origem, o que mostra que o campo `code-` continua fazendo o trabalho de separar o que é do executor.
- **Compatibilidade, medida:** a skill `wrap` localiza o relatório anterior por *glob* `../AAMMDD-HHMM-code-*.txt` e **ordena por commit**, não por nome. Sufixo novo depois de `code-` não quebra a busca.

**Restrição de teto:** `narrative` 6605/6900 (folga 295). Qualquer texto novo no CEREBRO gerado disputa essa folga; reescrita que troca palavras sem acrescentar volume é quase neutra.

**Restrição de instrumento:** nenhum dos 100 checks pode observar o fecho — o harness vê o que o kit **emite**, nunca o que o assistente **escreve na conversa**. Este é o mesmo ponto cego estrutural já nomeado na análise da afirmação verificável, e nenhuma opção abaixo o remove.

## Opções consideradas

**Para a deriva do fecho:**

**A — Esqueleto literal, em vez de descrição em prosa.** Hoje o bloco existe só como parágrafo descritivo; o modelo de WO, que **não** deriva, existe como arquivo para copiar (`_TEMPLATE.md`). A diferença entre os dois casos é essa. Um esqueleto compacto — os cinco rótulos na ordem, com uma linha de exemplo cada — dá o que a prosa não dá: **algo para copiar em vez de reconstituir de memória**, e a reconstituição acontece no fim do turno, quando a atenção já está gasta.

**B — Trocar «só as linhas que se aplicam» por condição observável, linha a linha.** A cláusula atual entrega a decisão ao próprio emissor, que é o desenho que a D-135 já identificou como o que falha. Com condição objetiva não há julgamento: *Handoff aparece se algum arquivo foi entregue neste turno; Arquivar / Manter aparece se há avulso no mount; Próximo, Estado e Config aparecem sempre.* No turno 3, «não se aplicava» foi o que aconteceu com três arquivos entregues.

**C — Check no harness.** *Descartada:* o harness não lê a conversa. Ele pode conferir que o CEREBRO gerado **contém** o esqueleto (isso é barato e cabe em A), não que o fecho o seguiu.

**D — Aceitar a variação.** *Descartada pelo dono, e com razão medida:* o custo aparece na retomada, e três formas em três turnos é o oposto do que o bloco existe para fazer.

**Para o nome do relatório:**

**E — Adotar o do mapsmith como está** (`code-<ato>-<alvo>`). Ganha legibilidade, **perde** a desambiguação entre repos que dividem a pasta-pai — que é a razão declarada do slug.

**F — Somar, não trocar:** `AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt` → `260903-2011-code-kcm-apply-wo0108.txt`. Mantém as duas funções; custa comprimento.

**G — Vocabulário fechado de ato**, em qualquer das duas: `apply` · `wrap` · `probe` · `explore`. Sem lista fechada, o campo vira texto livre e a praticidade se perde em três meses — e o dono já citou os dois casos fora de WO (sonda e exploração), que são justamente os que hoje caem no nome genérico.

## Recomendação

**Fecho: B + A, nesta ordem de importância.** O **B** é o que fecha o buraco, custa quase nada de teto (troca de palavras, não acréscimo) e ataca a causa certa — a cláusula de omissão é o único ponto do bloco onde o texto delega julgamento a quem tem o viés. O **A** reduz a reconstituição de memória, que é onde a variação nasce; entra na forma mínima (rótulos + ordem + uma linha por campo), não como bloco de exemplo extenso, para não gastar a folga de 295.

**Nome: F com G.** `AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt`, ato de vocabulário fechado. O ensinamento do mapsmith está certo e é para adotar; o que a adoção não deve fazer é jogar fora uma função que o texto do kit declara por escrito. Se o dono preferir os nomes mais curtos, **E** é uma escolha legítima — mas é escolha, e precisa vir com o slug saindo do texto que o justifica, senão fica regra contradizendo regra.

**Uma consequência que precisa ser dita:** as duas mudanças só alcançam os projetos instalados na próxima leva de update — que acabou de ser parqueada por decisão sua (D-138). Isso **não** é contradição: é exatamente o preço que a D-138 registra como escolhido. O KCM aplica em si imediatamente (é a casa), e os outros recebem quando você mandar a leva.

## Riscos

- **A pode virar teatro.** Esqueleto que se copia sem pensar produz campo preenchido com «nada a arquivar» — que é o defeito que a cláusula de omissão existe para evitar. Mitigação: o esqueleto vem com as condições do B coladas em cada rótulo, não separadas.
- **Nada disto é verificável por instrumento.** Vale para o fecho, não para o nome — este último **é** verificável, porque o padrão vive no texto que o gerador emite e o harness lê.
- **Teto.** Se A não couber na folga do `narrative`, entra só o B. Medir antes de escrever a WO, nunca depois.
- **Cinco lugares para o nome.** Mudança de padrão que muda três superfícies e esquece a quarta é como a família das revogações nasce. O inventário é de cinco e está medido; a WO tem de declará-lo e quem aplicar deve recontar.

## Ponto de decisão

1. **A forma canônica é a que já está no CEREBRO** (a do print), e o trabalho é aderência — confirma? Se você quiser mudar algum campo do bloco enquanto ele está aberto, é agora.
2. **Nome do relatório: `F` (com slug, mais longo) ou `E` (sem slug, como o mapsmith)?** É a única pergunta cujo custo é seu — você é quem lê esses nomes na pasta.
3. **A leva:** aplico as duas no KCM e no gerador de uma vez, ou só o nome do relatório (que é verificável por check) e o fecho fica para depois?

---

## Decisão — 2026-09-03

**Fecho: B + A**, na ordem de importância recomendada. **Nome: F com G** — `AAMMDD-HHMM-code-<slug>-<ato>-<alvo>.txt`, ato de vocabulário fechado.

### Uma correção da própria análise, antes das consequências

A seção «Riscos» dizia *«se A não couber na folga do `narrative` (295), entra só o B»*. **Está errado, e o erro foi medido depois:** o bloco de fecho é emitido por `buildClaudeMd`, ou seja, vive no **CEREBRO gerado** — que não tem teto. O teto de 6.900 e o orçamento por modo (compartilhado/Code/ASU/combo) medem `buildInstr`, as **Instruções**, onde o fecho aparece apenas como uma linha de gatilho que não muda. **A e B custam zero da folga de 295.** A observação do dono sobre o `narrative` (que na prática roda num modo por vez, e cada modo tem orçamento próprio) continua válida como princípio geral, mas não precisa ser acionada aqui.

### Uma cláusula nova, dada pelo dono e que a análise não tinha

O item 1 do bloco já traz *«a frase só pode conter resultado que o usuário saiba produzir»* — e o exemplo que o dono trouxe do mapsmith é exatamente essa regra sendo violada: **«saída do verify aqui»**, quando a saída estava no relatório que o Code havia gerado. Mas ele descreveu um segundo defeito, que a cláusula atual **não** cobre:

> **A frase tem de ser copiável como está.** Nada de lacuna, reticências ou campo para o usuário preencher com dado ou medição — «medidas são ___», «(...)», «saída do X aqui». O uso real é copiar a frase, colar, e no máximo acrescentar decisões por cima. Uma lacuna converte um gesto de dois segundos em trabalho de coleta, e é mais irritante que um pedido claramente grande.
>
> **A única lacuna aceitável é a escolha entre opções já enumeradas no próprio turno** — «fase 3: vamos de A, B ou C?». Escolher é barato e o material já está na tela; produzir dado não é. Pela mesma razão, a frase pode vir **parcialmente preenchida** com a recomendação já dentro dela, para que o dono só confirme ou troque.

Isso vale como refino do item 1 e entra na wo0111 junto com B e A.

### Consequências aceitas, registradas a pedido do dono

- **As duas mudanças só alcançam os projetos instalados na próxima leva.** O dono confirma que sabe e que não é problema — é o preço registrado na D-138.
- **Mas o KCM aplica em si na mesma WO, sempre.** Foi dito com todas as letras: *ninguém vai baixar o pacote de update do KCM para atualizar o KCM*. Já houve refinamento que entrou no que o projeto **gera** e não entrou no próprio projeto — a wo0108 mediu um caso (o modelo de WO instalado, 6.618 bytes atrás) e a `i-N60` registrou que **nenhum check olha** para boa parte dessas superfícies. Portanto: **WO que muda o gerado muda, no mesmo commit, a superfície instalada correspondente do KCM** — e a conferência disso é item de checklist, não boa intenção.

### Ordem de execução

**wo0110 — nome do relatório** (esta leva): é a metade verificável por instrumento, e o `C30` já ancorava o padrão antigo, então o harness obriga a mudança a alcançar as duas skills.

**wo0111 — forma do fecho** (leva seguinte): B, A e a cláusula da frase copiável. Separada de propósito — é texto novo em superfície que **nenhum check pode observar** (o harness não lê a conversa), e misturá-la com uma mudança que o harness cobre esconderia a diferença de garantia entre as duas.
