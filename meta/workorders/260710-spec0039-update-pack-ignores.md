# Spec — Conserto: `.gitignore`/`.flatdropignore` faltando no pacote de atualização

> Tarefa para o **Claude Code**. Repo `contexto-modular`.
> **Toca `src/index.template.html` + `validate.js`** → **`node build.js` + `node validate.js` OBRIGATORIOS**.
> **Harness: +1 check (G13).** Passa de **39/39 → 40/40**. O Code confirma pós-build + testa o zip de atualização no navegador.
> Aplicar com: **`/apply-spec 260710-spec0039-update-pack-ignores.md`**
> Config: **Sonnet + esforco Alto** (aditivo, pequeno).
> **Diff conferido no chat contra o template vivo v1.64.0** (pós spec0038). Build/harness ficam com o Code.
> **BUG achado pelo usuário:** o download de **atualização** não inclui `.gitignore` nem `.flatdropignore`. Independente das anteriores.

## Contexto
`buildUpdatePack` (Fase A) empacota meta + CEREBRO + INSTRUCOES + skills/kit-Code, mas **não inclui os dois
ignores** que o download **estruturado** já gera (`structuredGitignore` / `structuredFlatdropignore`, da spec0034).
Resultado: um projeto que se atualiza pelo pacote nunca recebe melhorias no `.flatdropignore`/`.gitignore`
recomendados. Conserto: somá-los ao pacote, **reusando os helpers** já existentes (mesma fonte do estruturado),
como natureza `template`.

**Auditoria (o usuário pediu conferir cada coisa):** após este conserto, o pacote de atualização passa a conter
tudo que um projeto completo tem — meta/*, CEREBRO, INSTRUCOES, skills (se ligado), kit-Code (se ligado),
`.gitignore`, `.flatdropignore`. **Fora de propósito** (intencional): `HUB.md` (é de grupo, baixado à parte, nunca
entra em download por-nicho) e os `.gitkeep` de pasta vazia (o pacote é achatado — a atualização mescla conteúdo,
não recria estrutura de pastas). Os downloads granulares (`downloadZIP`/`downloadAllTemplates`) seguem só com
conteúdo (os ignores são infra de raiz, não "templates"; quem quer o projeto inteiro usa o download estruturado).

**NAO fazer:** não duplicar os helpers (reusar `structuredGitignore`/`structuredFlatdropignore`); não pôr os
ignores nos downloads granulares.

---

## Tarefa A — `buildUpdatePack`: incluir os ignores (sempre), antes do manifesto
**Ancora:**
```
  const manifest = buildUpdateManifest(niche, files, codeOn, skillsOn);
```
**inserir-ANTES** dela:
```
  // Ignores recomendados (sempre) — sem eles o pacote de atualizacao vinha incompleto (reusa os helpers do estruturado)
  files.push({ flat: updateFlat("gitignore"), real: ".gitignore", nature: "template",
    role: "Ignora lixo de SO/editor.", content: structuredGitignore() });
  files.push({ flat: updateFlat("flatdropignore"), real: ".flatdropignore", nature: "template",
    role: "Enxuga o que sobe ao Projeto do Claude (logs/, specs no modo Code).", content: structuredFlatdropignore(codeOn) });
```
> `updateFlat("gitignore")` → `gitignore__template-update`; `updateFlat("flatdropignore")` → `flatdropignore__template-update` (nomes planos visíveis e únicos; o destino real — `.gitignore`/`.flatdropignore` — vai no manifesto).

## Tarefa B — harness: check G13 (trava a regressão)
**Ancora:**
```
// ============ SUMARIO ============
```
**inserir-ANTES** dela:
```
check("G13 update-pack inclui os ignores (.gitignore e .flatdropignore)", () => {
  const dev = T.normNiche(T.NICHES.dev);
  const p = T.buildUpdatePack(dev);
  assert(p.files.some(f => f.real === ".gitignore" && f.content && f.content.length), "update pack sem .gitignore");
  assert(p.files.some(f => f.real === ".flatdropignore" && f.content && f.content.length), "update pack sem .flatdropignore");
  const flats = p.files.map(f => f.flat);
  assert(new Set(flats).size === flats.length, "nomes planos colidiram ao somar os ignores");
  return "ok";
});

```

---

## Verificação (Code)
- `node build.js` + `node validate.js index.html` → 17/17 nichos, **40/40** checagens, 0 erros.
- Botão **↻** → **Baixar .zip de atualização**: o zip agora traz `gitignore__template-update` e `flatdropignore__template-update` na raiz, e o `_UPDATE-MANIFEST.md` lista `.gitignore`/`.flatdropignore` como destino.

## Ao terminar (append-only; NAO reescrever doc inteiro)
- **`meta/DECISIONS.md`** — novo `FIX`: pacote de atualização vinha sem `.gitignore`/`.flatdropignore`; somados via reuso dos helpers do estruturado (natureza `template`); G13 trava a regressão. Pacote de atualização agora completo (auditado).
- **`meta/STATUS.md`** — linha na «Última sessão»: spec0039 (ignores no update pack + G13, 40/40); bump minor.

## Commit (bloco isolado, mensagem sem acento)
```
git add -A
git commit -m "fix: .gitignore/.flatdropignore faltavam no pacote de atualizacao (spec0039)" -m "buildUpdatePack passa a incluir os dois ignores reusando structuredGitignore/structuredFlatdropignore (natureza template, nomes planos gitignore__template-update / flatdropignore__template-update); G13 trava a regressao; pacote de atualizacao auditado e completo; 40/40"
git push
```
