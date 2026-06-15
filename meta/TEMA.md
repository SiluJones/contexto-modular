# TEMA — O Kit de Contexto Universal

> Auto-referencial: este arquivo usa a estrutura do nicho **Brainstorm** para documentar o próprio kit que ele é parte. O Kit aplicado a si mesmo.

## Pergunta sob exploração

Como construir um andaime único que ajude usuários de domínios diferentes a manter contexto entre conversas com o Claude — sem que o andaime vire genérico demais para servir a nenhum, e sem que ele inche em tantos nichos rasos que perca o ponto?

## Por que isto, agora

A primeira versão do kit (publicada como `silujones.github.io/kit-contexto-claude`) resolveu o problema para devs. Funcionou. Mas conversas longas com o Claude pesam para todo mundo que trabalha em projetos longos — escritores, mestres de RPG, chefs, designers, pesquisadores. A pergunta natural foi: o que muda quando o domínio muda? Os 6 prompts universais valem para todos. O que muda são os arquivos de contexto, os comportamentos esperados, os prompts específicos para tarefas do domínio.

## O que torna o problema interessante

Tem três tensões reais:

1. **Profundidade vs. cobertura.** Posso fazer 4 nichos super profundos ou 30 nichos rasos. Decidi 17 profundos + 1 custom — cobertura honesta, sem rasos.

2. **Estrutura comum vs. personalidade do domínio.** Todo nicho precisa do mesmo esqueleto (arquivos de contexto + builder de instruções + prompts), mas cada um tem que **parecer** seu domínio — não só pela cor. O hero da Home, o tom dos templates, os prompts G+ específicos têm que sentir aquele trabalho.

3. **Pronto vs. extensível.** Por mais nichos que eu coloque, sempre vai faltar um. O Custom precisa ser construtor de verdade, não vazio cinza com placeholder.

## O que NÃO está sob exploração

- Sincronização entre dispositivos (não tem servidor)
- Integração com a API do Claude (o kit gera prompts; não chama API)
- Interface premium ou plano pago
- Análise dos arquivos do usuário

Tudo isso pode existir num produto maior. Este é um kit-página deliberadamente.

## Direções iniciais que vislumbro

- **Templates profissionais, sem versão piorada.** Nome do template = função do arquivo. Sem "DEFINITIVO" ou "APRIMORADO".
- **Heros visuais distintos por nicho.** Não só cor — terminal vs. swatches vs. wireframe vs. scroll medieval.
- **Brainstorm como o nicho deste próprio kit.** Auto-referencial.
- **Custom realmente extensível.** Forma, salva preset, carrega depois.

## Restrições reais

- **Sem build.** É HTML único.
- **Sem dependências.** Só JSZip carregado via CDN quando o usuário baixar templates em ZIP.
- **Sem privacidade comprometida.** localStorage, nada vai pra fora do navegador.
- **Mobile aceitável.** Não preciso UI mobile-first, mas a página tem que ser usável no celular.
- **Português primeiro.** Inglês fica para uma evolução.
