# Transferência de contexto — 2026-07-05 (KCM)

> Ler no ritual de início. Estado: v1.53.0, pós-spec0027. Sessão de **planejamento (raia Chat)**,
> sem tocar código. Encerrada porque a redação das specs travou por falta de arquivo no mount (ver §4).

## 1. Estado do repo (confirmado no disco, não só STATUS)
- v1.53.0, harness 17/17, 34/34, 0 erros. Ciclo de refino de modos (specs 0021→0027) **fechado**.
- spec0027 (fecho, doc-only) commitada como `ad2e757`. **Push já feito pelo usuário** nesta sessão.
- Conferência de volta OK: FIX-006 e D-055 presentes no DECISIONS; log `2026-07-04.md` criado;
  rename do log `07-01` (sem `logs__`) já resolvido no repo. Nada se perdeu.
- Débito pendente para o Code na PRÓXIMA sessão de código: **commitar + push** (incluindo o rename
  do log que tirou o `logs__`), conforme o usuário pediu.

## 2. O que foi produzido nesta sessão (duas análises, prontas, no repo)
Ambas já entregues inteiras em outputs e destinadas a `meta/`:

### `meta/ANALISE-MODO-ATUALIZACAO.md` (i-N27 — novo item a registrar no IDEAS)
"Modo Atualização": um gesto que empacota, achatado e desambiguado, tudo do nicho ativo (meta +
CEREBRO + instrução + skills se ligado + kit-Code se ligado) num **zip achatado** + `_UPDATE-MANIFEST.md`
+ **prompt de atualização gerado por nicho**, para o usuário subir num gesto ao mount de um projeto
que já usa o KCM. **Decisões fixadas:** afixo `__template-update`; CEREBRO+instrução entram (build
ativa do momento, classificados `fusao` — merge proposto, nunca substituição cega); zip apenas; a
**UI do atualizador fica ADIADA** até a reforma dos 3 modos (i-N36). Descoberta-chave: o mecanismo
`*__template-update` já existe e já foi usado (feedback do ASU no HUB). A dor real é a assimetria —
`downloadZIP` já achata+afixa os meta, mas `downloadSkillsZIP`/`downloadCodeKitZIP` saem em subpasta
sem `applyAffix`.

### `meta/ANALISE-REFORMA-MODOS-TOPBAR.md` (i-N36 — pesquisa dedicada, feita)
Reforma dos 3 modos universais (grupo/ASU/Code) + feedback ambiental. **Pesquisa web feita.**
Conclusões: (a) toggles soltos são erro confirmado pela literatura E pela D-053 interna; (b) **segmented
control REFUTADO** — os 3 modos coexistem (seleção múltipla independente) → usar **checkbox agrupado**;
(c) painel recolhível **"Modo de trabalho"** (progressive disclosure) MAS **global/sempre-acessível**
(correção do usuário: hoje os modos abrem de qualquer aba; prender a um lugar seria regressão);
(d) feedback ambiental = **selos multicanal empilháveis** (cor+ícone+rótulo, WCAG 1.4.1/1.4.11,
contraste ≥3:1, escala-de-cinza-safe), nunca faixas sobrepostas. **Decisões fixadas:** heading
"Modo de trabalho"; ASU ganha **glifo A = chevron duplo `»` + cor teal**; Code = laranja + símbolo;
grupo = ícone de grupo. Atualizador (i-N27) entra como **ação**, não 4º modo.

## 3. Próximo trabalho: escrever specs 0028 e 0029 (raia Chat autora)
- **spec0028 — painel "Modo de trabalho" (global, recolhível).** Migra grupo/Code/ASU do topbar para
  container recolhível sob heading, acessível de qualquer aba; checkbox + rótulo externo + descrição
  curta; espaçamento anti-clique-errado. Estado `STATE.topbar.groupMode/asuMode` → `STATE.workmode.*`
  (ajustar G4/G5 no `validate.js`). **Saída gerada NÃO muda — só UI e caminho do estado.**
- **spec0029 — selos de estado multicanal empilháveis.** Componente de selo (cor+ícone+rótulo),
  ordem estável (grupo, Code, ASU), perto da saída; glifo A (chevron duplo)+teal p/ ASU. Harness novo
  (G8): selo presente quando liga, ausente quando desliga.
- Depois (fase "topbar inteiro", adiada): encaixe do atualizador i-N27 + specs do empacotamento.

## 4. POR QUE esta sessão parou (o bloqueio a resolver)
As specs deste projeto citam **âncoras exatas de `src/index.template.html`** (é o padrão das specs
0022–0027). **Esse arquivo NÃO veio no snapshot do Projeto desta sessão** — só os `.js` de nicho e o
`validate.js` chegaram ao mount; o `src/` ficou de fora. Sem o template, escrever âncoras seria
inventar — e âncora errada faz o Code parar. Confirmado no disco: `index.template.html` ausente em
todos os mounts (o usuário viu no Projeto que ele existe, 3.579 linhas, mas não chegou aqui).

## 5. AÇÃO para a próxima conversa
1. No ritual de início, **confirme que `index.template.html` (ou o `src/` inteiro) está no mount.**
   Se o snapshot do Projeto de novo não trouxer o `src/`, peça ao usuário para **subir
   `src/index.template.html` como upload avulso** (vai para `/mnt/user-data/uploads/`).
2. Com o template em mãos, escreva **spec0028** e **spec0029** com âncoras exatas, validando o diff
   mentalmente contra o template real (como as specs anteriores).
3. Registre **i-N27 (Modo Atualização)** no `meta/IDEAS.md` como item novo — hoje só existe a análise.
4. As duas análises (§2) devem ser salvas em `meta/` pelo Code (ou já estão, se o usuário as subiu).

## 6. Config recomendada p/ a próxima
- **Escrever as specs (raia Chat):** Opus + esforço Alto, pensamento ligado (redação precisa de
  âncora + harness mental). Não precisa de modo Code para *escrever* as specs.
- **Aplicar as specs (raia Code), depois:** Sonnet + esforço Alto (spec0028 mexe em UI+estado+CSS+2
  checks de harness; spec0029 adiciona componente+G8). Abrir pelo PowerShell (Windows).
