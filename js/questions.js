const questions = [
  {
    id: 1,
    item: "Garrafa PET",
    image: "assets/images/items/garrafa-pet.jpg",
    emoji: "",
    category: "plastico",
    explanation: "A garrafa PET é de plástico. Ela vira tecido para roupas e novos objetos!",
    tip: "PET é o nome do plástico da garrafa."
  },
  {
    id: 2,
    item: "Jornal",
    image: "assets/images/items/jornal.jpg",
    emoji: "",
    category: "papel",
    explanation: "Jornal é papel. Vira folha nova!",
    tip: "Reciclar papel salva árvores!"
  },
  {
    id: 3,
    item: "Lata de refrigerante",
    image: "assets/images/items/lata-de-refrigerante.jpg",
    emoji: "",
    category: "metal",
    explanation: "A lata é de metal. Ela vira lata nova sempre!",
    tip: "Uma latinha vira outra em 60 dias!"
  },
  {
    id: 4,
    item: "Garrafa de vidro",
    image: "assets/images/items/garrafa-de-vidro.jpg",
    emoji: "",
    category: "vidro",
    explanation: "Vidro vira vidro de novo. Sempre!",
    tip: "O vidro demora muito tempo para sumir. Por isso recicle!"
  },
  {
    id: 5,
    item: "Casca de fruta",
    image: "assets/images/items/casca-de-banana.jpg",
    emoji: "",
    category: "organico",
    explanation: "Casca de fruta vira adubo para plantas.",
    tip: "Metade do lixo de casa é de comida. Dá para virar adubo!"
  },
  {
    id: 6,
    item: "Saco plástico",
    image: "assets/images/items/saco-plastico.jpg",
    emoji: "",
    category: "plastico",
    explanation: "Saco plástico é de plástico. Melhor usar sacola de pano!",
    tip: "Saco plástico demora 400 anos para sumir."
  },
  {
    id: 7,
    item: "Caderno usado",
    image: "assets/images/items/caderno.jpg",
    emoji: "",
    category: "papel",
    explanation: "Caderno é papel. Vai na lixeira azul.",
    tip: "Tire o espiral antes de reciclar."
  },
  {
    id: 8,
    item: "Pote de vidro",
    image: "assets/images/items/pote-de-vidro.jpg",
    emoji: "",
    category: "vidro",
    explanation: "Pote de vidro é reciclável. Lave antes de jogar fora.",
    tip: "O vidro pode ser reciclado infinitamente sem perder qualidade!"
  },
  {
    id: 9,
    item: "Casca de ovo",
    image: "assets/images/items/casca-de-ovo.jpg",
    emoji: "",
    category: "organico",
    explanation: "Casca de ovo é orgânica. Vira adubo.",
    tip: "Casca de ovo vira adubo natural para plantas."
  },
  {
    id: 10,
    item: "Caixa de papelão",
    image: "assets/images/items/caixa-de-papelao.jpg",
    emoji: "",
    category: "papel",
    explanation: "Papelão é papel. Vira caixa nova!",
    tip: "Amasse a caixa antes de reciclar."
  },
  {
    id: 11,
    item: "Lata de sardinha",
    image: "assets/images/items/lata-de-sardinha.jpg",
    emoji: "",
    category: "metal",
    explanation: "A lata de sardinha é de metal. Vai na lixeira amarela. Lave antes.",
    tip: "Metal vira metal de novo. Sempre!"
  },
  {
    id: 12,
    item: "Frasco de perfume",
    image: "assets/images/items/frasco-de-perfume.jpg",
    emoji: "",
    category: "vidro",
    explanation: "Frasco de perfume é de vidro. Vai na lixeira verde.",
    tip: "Separe as partes de plástico antes de reciclar."
  },
  {
    id: 13,
    item: "Resto de comida",
    image: "assets/images/items/resto-de-comida.jpg",
    emoji: "",
    category: "organico",
    explanation: "Resto de comida vira adubo com a compostagem.",
    tip: "Evite jogar comida fora!"
  },
  {
    id: 14,
    item: "Revista",
    image: "assets/images/items/revista.jpg",
    emoji: "",
    category: "papel",
    explanation: "Revista é papel. Vai na lixeira azul.",
    tip: "Papel reciclado vira papel novo e salva árvores!"
  },
  {
    id: 15,
    item: "Copinho descartável",
    image: "assets/images/items/copo-descartavel.jpg",
    emoji: "",
    category: "plastico",
    explanation: "Copinho descartável é de plástico. Melhor usar copo de verdade!",
    tip: "Use caneca em vez de copo descartável!"
  },
  {
    id: 16,
    item: "Folha de papel sulfite",
    image: "assets/images/items/folha-de-papel.jpg",
    emoji: "",
    category: "papel",
    explanation: "Papel vai na lixeira azul. Use os dois lados!",
    tip: "Use o verso do papel como rascunho."
  },
  {
    id: 17,
    item: "Clips",
    image: "assets/images/items/clips-de-papel.jpg",
    emoji: "",
    category: "metal",
    explanation: "O clips é de metal. Vai na lixeira amarela.",
    tip: "Clips dá para usar de novo."
  },
  {
    id: 18,
    item: "Panela velha",
    image: "assets/images/items/panela-velha.jpg",
    emoji: "",
    category: "metal",
    explanation: "Panela velha é de metal. Vai na lixeira amarela.",
    tip: "Panela quebrada vira metal novo!"
  },
  {
    id: 19,
    item: "Copo de vidro quebrado",
    image: "assets/images/items/copo-de-vidro.jpg",
    emoji: "",
    category: "vidro",
    explanation: "Vidro quebrado vai na lixeira verde. Cuidado para não se cortar!",
    tip: "Embrulhe os cacos em jornal."
  },
  {
    id: 20,
    item: "Folhas secas",
    image: "assets/images/items/folhas-secas.jpg",
    emoji: "",
    category: "organico",
    explanation: "Folhas secas viram adubo.",
    tip: "Folhas secas viram adubo rico para as plantas!"
  },
  {
    id: 21,
    item: "Garrafa de água",
    image: "assets/images/items/garrafa-de-agua.jpg",
    emoji: "",
    category: "plastico",
    explanation: "Garrafinha de água é de plástico. Vai na lixeira vermelha.",
    tip: "Use garrafinha de verdade em vez de plástico!"
  },
  {
    id: 22,
    item: "Embalagem de presente",
    image: "assets/images/items/papel-de-presente.jpg",
    emoji: "",
    category: "papel",
    explanation: "Papel de presente é papel. Vai na lixeira azul. Tire a fita.",
    tip: "Reutilize o papel de presente!"
  },
  {
    id: 23,
    item: "Fralda descartável",
    image: "assets/images/items/fralda.jpg",
    emoji: "",
    category: "rejeito",
    explanation: "Fralda não pode ser reciclada. Vai na lixeira cinza.",
    tip: "Fralda demora muito para sumir. Existe fralda ecológica!"
  },
  {
    id: 25,
    item: "Esponja de cozinha",
    image: "assets/images/items/esponja.jpg",
    emoji: "",
    category: "rejeito",
    explanation: "Esponja não pode ser reciclada. Vai na lixeira cinza.",
    tip: "Use esponjas vegetais que são compostáveis!"
  },
  {
    id: 26,
    item: "Canudo",
    image: "assets/images/items/canudo.jpg",
    emoji: "",
    category: "plastico",
    explanation: "Canudo é de plástico. Vai na lixeira vermelha. Melhor não usar.",
    tip: "Canudo polui o mar. Melhor não usar!"
  },
];
