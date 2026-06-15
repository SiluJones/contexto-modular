# FILTROS — Critérios de corte do Kit

> Os critérios usados para decidir o que entra e o que fica de fora. Escritos antes de cortar — para forçar honestidade.

---

## Filtros obrigatórios (passa/não-passa)

### 1. **Mantém o kit-página autossuficiente**
Uma proposta que exija servidor, banco de dados, autenticação, ou pipeline de build não entra. O kit tem que continuar abrindo direto no navegador, sem nada por trás.

→ **Cortou:** galeria compartilhada de presets (i12).

### 2. **Não compromete privacidade**
Nada do que o usuário configurar pode sair do navegador dele sem ação explícita. Tudo em `localStorage`.

→ **Mantém:** sincronização entre dispositivos vai depender de export/import manual (i11).

### 3. **Não promete o que não pode entregar com responsabilidade**
Nichos em territórios sensíveis (saúde, direito, finanças pessoais) não viram nicho pronto. Custom dá conta.

→ **Cortou:** nichos de saúde (i16), finanças (i17), direito (i18).

### 4. **Não duplica nicho existente**
Se a proposta sobrepõe demais um nicho que já existe, vira caso de uso desse nicho (ou caso de Custom).

→ **Cortou:** "Solo Dev Studio" (i14), "Educação" (i15).

---

## Filtros graduais (peso na priorização)

### Filtro A — Profundidade do uso (peso ALTO)
**O que medir:** uma evolução serve ao trabalho diário do usuário, ou é um nice-to-have que só apareceria uma vez?
**Sinal positivo:** muda como o kit é usado no fluxo normal.
**Sinal negativo:** só importa em momentos raros / casos de borda.

→ **Aprovou:** Custom como construtor (i6), persistência por nicho (i21).
→ **Rebaixou:** atalhos de teclado (i24), drag-and-drop (i20).

### Filtro B — Custo de manutenção (peso ALTO)
**O que medir:** uma evolução dobra ou multiplica o que tenho que manter sincronizado?
**Sinal positivo:** entra uma vez e fica.
**Sinal negativo:** cada nova feature do kit precisa ser refletida nela.

→ **Adiou:** tradução para inglês (i10), tema claro (i9).

### Filtro C — Coerência com a personalidade do kit (peso MÉDIO)
**O que medir:** a proposta combina com "kit-página leve" ou empurra para "plataforma"?
**Sinal positivo:** mantém o caráter de ferramenta direta.
**Sinal negativo:** começa a parecer SaaS.

→ **Cortou:** galeria compartilhada (i12), memória sincronizada (i19).

### Filtro D — Ganho real vs. aparente (peso MÉDIO)
**O que medir:** o usuário vai sentir a diferença, ou é mudança que vai notar só se eu disser?
**Sinal positivo:** alguém usando enxerga sozinho.
**Sinal negativo:** precisaria de release notes para que alguém perceba.

→ **Aprovou:** heros distintos por nicho (i4).
→ **Adiou:** modos avançados, configurações finas.

---

## Filtros que rejeitamos usar (mas convém lembrar)

### "Mais é melhor"
Adicionar nicho só porque alguém pode querer — não. Profundidade > cobertura.

### "É só uma feature pequena"
Toda feature pequena cobra manutenção contínua. O preço real não é o trabalho de implementar.

### "Os concorrentes têm"
O kit não compete em catálogo de features. Compete em adequação ao trabalho real.

### "Vai dar engagement"
Engagement não é objetivo. O kit não é produto, é ferramenta. Quem precisa, usa; quem não precisa, não usa.

---

## Aplicação aos 18 nichos finais

Para entrar como nicho pronto, o domínio precisou passar em:
1. **Especificidade real** — fluxos e arquivos genuinamente diferentes dos outros.
2. **Tamanho do público** — ter audiência razoável (sem ser tão genérico que cobre tudo).
3. **Não estar em território sensível** — saúde, finanças, direito ficaram fora.
4. **Eu conseguir escrever os templates com convicção** — se não conheço o domínio o suficiente para fazer template honesto, vai pra Custom.

Os 18 que entraram passaram nos 4 filtros.
