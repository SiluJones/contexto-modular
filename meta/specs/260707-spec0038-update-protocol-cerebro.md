# Spec — Modo Atualização, Fase C: gatilho `UPDATE_PROTOCOL` no CEREBRO (fecha i-N40)

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G12).** Passa de **38/38 → 39/39** (assumindo a spec0037 aplicada antes; se aplicar esta primeiro, é 37→38 e depois a 0037 soma a G11 — as duas são independentes). O Code confirma pós-build.
> Aplicar com: **`/apply-spec 260707-spec0038-update-protocol-cerebro.md`**
> Config: **Sonnet + esforco Alto**.
> **Diff conferido no chat contra o template vivo v1.62.0.** Build/harness ficam com o Code.
> Base: `meta/ANALISE-MODO-ATUALIZACAO.md` — i-N40, **Fase C**. Aplicar depois da Fase B (spec0036). **Fecha o i-N40.**

## Contexto
As Fases A/B geram o pacote de atualização + o prompt. A Fase C torna **todo projeto gerado ciente** de como
lidar com um template-update **mesmo sem o prompt** — uma versão condensada e permanente, dentro do CEREBRO. Sem
teto de caracteres no CEREBRO (o teto N é só das Instruções), então é um acréscimo de baixo risco; os checks
G4/G5/G7 (que testam presença de HUB/ASU/Code no `buildClaudeMd`) seguem por substring, intactos.

O bloco é **incondicional** (curto, ~1 parágrafo): vale para qualquer projeto, ligado ou não a modos. Ensina a
reconhecer o sufixo `__template-update` + o `_UPDATE-MANIFEST.md` e a rotina `comparar → reportar → nunca
sobrescrever`, ciente de `template` vs `fusao`.

**NAO fazer:** não pôr diffs; não duplicar o prompt inteiro (é a versão condensada); não tocar downloads.

---

## Tarefa A — `buildClaudeMd`: seção `UPDATE_PROTOCOL` antes da higiene
**Ancora** (a abertura da seção de higiene no `buildClaudeMd`):
```
  L.push("## Regras de higiene (impedem inchaço e duplicação)");
```
**inserir-ANTES** dela:
```
  L.push("## Ao receber um template-update do KCM");
  L.push("Se aparecerem no mount arquivos com sufixo `__template-update` junto de um `_UPDATE-MANIFEST.md`: são atualizações genéricas do próprio template (propositalmente vazias do específico desta obra), não conteúdo novo do projeto. Para cada arquivo: compara com o vivo equivalente (o destino real está no manifesto) e **reporta** ao usuário — (a) novidade útil que falta aqui, (b) choque com o que já existe (lado a lado, o usuário decide), (c) algo que este projeto tem e o template não cobre. **Nunca sobrescreve conteúdo vivo por template vazio.** Itens marcados `fusao` no manifesto (CEREBRO, INSTRUCOES) carregam comportamento que este projeto pode ter evoluído: propõe o merge, o usuário decide — nunca substituição cega.");
  L.push("");
```

## Tarefa B — harness: check G12 (presença do protocolo)
> `buildClaudeMd` já está no SHIM — sem mudança no SHIM.
**Ancora:**
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G12 CEREBRO ensina a lidar com template-update (Fase C, i-N40)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const c = T.buildClaudeMd(dev);
  assert(/template-update/.test(c), "CEREBRO sem o protocolo de template-update");
  assert(/nunca sobrescreve|substituição cega|substituicao cega/i.test(c), "protocolo sem a regra de nao-sobrescrever");
  assert(/fusao|fusão/i.test(c), "protocolo sem a distincao template/fusao");
  return "ok";
});

```

---

## Verificação (Code)
- `node build.js` + `node validate.js index.html` → nichos 17/17, checagens **+1 (G12)**, 0 erros.
- Na aba **CEREBRO.md** da saída, aparece a seção **"Ao receber um template-update do KCM"** antes de "Regras de higiene", em qualquer nicho.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `DEC`: Fase C — bloco incondicional `UPDATE_PROTOCOL` ("Ao receber um template-update do KCM") no CEREBRO via `buildClaudeMd`, ensinando comparar→reportar→nunca-sobrescrever, ciente de `template`/`fusao`; G12 de presença. **Fecha o i-N40 (Modo Atualização): Fases A+B+C completas.**
- **`meta/IDEAS.md`** — marcar **i-N40 CONCLUÍDA** (todas as fases).
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0038 aplicada (gatilho CEREBRO, G12); i-N40 fechada; bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "feat: Modo Atualizacao Fase C - gatilho UPDATE_PROTOCOL no CEREBRO, fecha i-N40 (spec0038)" -m "bloco incondicional 'Ao receber um template-update do KCM' no buildClaudeMd: reconhece sufixo __template-update + _UPDATE-MANIFEST, rotina comparar->reportar->nunca-sobrescrever, ciente de template/fusao; G12 de presenca; i-N40 completo (A+B+C)"
git push
```
