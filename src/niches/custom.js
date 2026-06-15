NICHES.custom = {
  id:"custom", label:"Custom", icon:"⚙️", group:"serif", category:"special",
  cardColor:"#cbd5e1", cardTags:["Compõe de nichos","Ou monta do zero","Dedup visível","Salva preset"],
  cardDesc:"Componha a partir dos nichos prontos (importa e concatena, com dedup visível) ou monte do zero: arquivos, comportamentos e prompts G+. Salve e ative como preset.",
  intro:{
    headline:"Quando nenhum dos prontos serve.",
    lede:"Use Custom quando seu trabalho não cabe em nenhum dos 17 nichos prontos — ou quando você quer combinar elementos de dois nichos, ou quando seu fluxo é genuinamente único. Defina os arquivos, comportamentos, prompts e cor de acento. O preset fica salvo no navegador para reutilizar.",
    ctxBlurb:"Você define <strong>os arquivos de contexto</strong>, <strong>os comportamentos do Claude</strong>, <strong>os prompts G+</strong> e a cor de acento. O Custom é tão estruturado quanto qualquer outro nicho — só que feito por você.",
    hero:"custom"
  },
  topbar:[
    { id:"langSel", label:"Idioma do output", type:"select", opts:LANGS, default:"pt" }
  ],
  behaviors:[
    /* O usuário customiza tudo — começamos com base universal apenas */
  ],
  builderSection:null,
  conventions:[
    "Você definiu este nicho — as convenções aparecem aqui se você as adicionou no preset.",
    "Ainda assim, os 4 comportamentos universais (Direto, Incerteza, Trade-offs, Ideias) valem.",
    "Os prompts A-F universais funcionam normalmente; seus G+ se somam a eles."
  ],
  contextFiles:[
    /* Vazio por padrão — usuário define */
  ],
  outputs:[
    { id:"livre","label":"Saída livre — você define o que produz" }
  ],
  promptsExtra:[
    /* Vazio por padrão — usuário define */
  ],
  /* === Marca este nicho como "construtor" ===
     Quando o usuário entra no Custom, o builder mostra o formulário
     de configuração em vez do builder padrão. */
  isBuilder: true
};