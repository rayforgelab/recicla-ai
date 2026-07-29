const LOCALE_DATA = {
  'pt-BR': {
    ui: {
      siteTitle: 'Recicla Aí - Jogo da Reciclagem',
      loading: 'Carregando ({loaded}/{total})...',
      langSelector: 'Idioma',
      start: {
        subtitle: '\u{1F9B1} Aprenda a separar o lixo e ajude o planeta!',
        play: '\u{1F3AE} Jogar',
        learn: '\u{1F4D6} Aprender',
        rankingGlobal: '\u{1F3C6} Ranking Global',
        rankingLocal: '\u{1F4CA} Ranking Local',
        howToScore: '\u{2B50} Como ganhar pontos',
      },
      game: {
        back: 'Voltar',
        backTitle: 'Voltar ao in\u00edcio',
        points: 'Pontos',
        counter: '{current} de {total}',
        question: 'Em qual lixeira esse item deve ser colocado?',
        next: 'Pr\u00f3ximo \u{279C}',
      },
      feedback: {
        correct: 'Parab\u00e9ns!',
        wrong: 'Quase!',
        wrongPrefix: 'A lixeira certa \u00e9 a',
        bonus: '\u26A1 +{points} de b\u00f4nus por rapidez!',
      },
      finish: {
        title: 'Fim de jogo!',
        of: 'de',
        hits: 'acertos',
        points: 'pontos',
        restart: '\u{1F504} Jogar de novo',
        back: '\u{1F3E0} Voltar',
        ranking: '\u{1F3C6} Ranking',
        messages: {
          excellent: 'Voc\u00ea \u00e9 um mestre! O planeta agradece!',
          good: 'Muito bem! Continue assim!',
          average: 'Bom come\u00e7o! Com pr\u00e1tica voc\u00ea vai melhorar!',
          bad: 'Voc\u00ea est\u00e1 aprendendo. Tente de novo!',
        },
      },
      modal: {
        title: 'Qual seu nome?',
        desc: 'Para salvar sua pontua\u00e7\u00e3o no ranking!',
        placeholder: 'Seu apelido',
        save: 'Salvar \u{1F44D}',
        validationError: 'Digite pelo menos 2 letras',
      },
      info: {
        title: '\u{2B50} Como ganhar pontos',
        streak: '<strong>\u{1F525} Acertos seguidos:</strong> cada acerto seguido vale mais. 1\u00ba = 10pts, 2\u00ba = 20pts, 3\u00ba = 30pts... Se errar, sua sequ\u00eancia n\u00e3o zera, mas volta para o 1\u00ba acerto.',
        speed: '<strong>\u26A1 Rapidez:</strong> responda r\u00e1pido! D\u00e1 at\u00e9 +25 pts de b\u00f4nus. Voc\u00ea tem 2 segundos para conseguir o b\u00f4nus m\u00e1ximo.',
        penalty: '<strong>\u{1F6AB} Errar</strong> n\u00e3o zera sua pontua\u00e7\u00e3o, s\u00f3 reinicia a sequ\u00eancia de acertos. O b\u00f4nus de tempo diminui com calma.',
        close: 'Entendi! \u{1F44D}',
      },
      learn: {
        learnMore: '\u{1F4D6} Aprender mais',
        backHome: '\u{1F3E0} Voltar ao in\u00edcio',
      },
      music: {
        on: 'Desativar m\u00fasica ambiente',
        off: 'Ativar m\u00fasica ambiente',
      },
      rankingTitle: '\u{1F3C6} Ranking',
      rankingSubtitle: 'Melhores pontua\u00e7\u00f5es dos jogadores!',
      localRankingTitle: '\u{1F4CA} Ranking Local',
      localRankingSubtitle: 'Melhores pontua\u00e7\u00f5es desse dispositivo!',
      footer: 'rayforgelab/recicla-ai',
    },

    categories: {
      plastico: 'Pl\u00e1stico',
      papel: 'Papel',
      metal: 'Metal',
      vidro: 'Vidro',
      organico: 'Org\u00e2nico',
      rejeito: 'Rejeitos',
    },

    categoryColors: {
      plastico: 'vermelha',
      papel: 'azul',
      metal: 'amarela',
      vidro: 'verde',
      organico: 'marrom',
      rejeito: 'cinza',
    },

    binLabels: {
      azul: 'Azul',
      vermelha: 'Vermelha',
      amarela: 'Amarela',
      verde: 'Verde',
      marrom: 'Marrom',
      cinza: 'Cinza',
    },

    ranking: {
      error: 'Ranking indispon\u00edvel no momento.',
      emptyGlobal: 'Nenhuma pontua\u00e7\u00e3o registrada ainda. Seja o primeiro!',
      emptyLocal: 'Nenhuma pontua\u00e7\u00e3o registrada ainda. V\u00e1 jogar!',
      points: '{score} pts',
    },

    questions: {
      '1': { item: 'Garrafa PET', explanation: 'A garrafa PET \u00e9 de pl\u00e1stico. Ela vira tecido para roupas e novos objetos!', tip: 'PET \u00e9 o nome do pl\u00e1stico da garrafa.' },
      '2': { item: 'Jornal', explanation: 'Jornal \u00e9 papel. Vira folha nova!', tip: 'Reciclar papel salva \u00e1rvores!' },
      '3': { item: 'Lata de refrigerante', explanation: 'A lata \u00e9 de metal. Ela vira lata nova sempre!', tip: 'Uma latinha vira outra em 60 dias!' },
      '4': { item: 'Garrafa de vidro', explanation: 'Vidro vira vidro de novo. Sempre!', tip: 'O vidro demora muito tempo para sumir. Por isso recicle!' },
      '5': { item: 'Casca de fruta', explanation: 'Casca de fruta vira adubo para plantas.', tip: 'Metade do lixo de casa \u00e9 de comida. D\u00e1 para virar adubo!' },
      '6': { item: 'Saco pl\u00e1stico', explanation: 'Saco pl\u00e1stico \u00e9 de pl\u00e1stico. Melhor usar sacola de pano!', tip: 'Saco pl\u00e1stico demora 400 anos para sumir.' },
      '7': { item: 'Caderno usado', explanation: 'Caderno \u00e9 papel. Vai na lixeira azul.', tip: 'Tire o espiral antes de reciclar.' },
      '8': { item: 'Pote de vidro', explanation: 'Pote de vidro \u00e9 recicl\u00e1vel. Lave antes de jogar fora.', tip: 'O vidro pode ser reciclado infinitamente sem perder qualidade!' },
      '9': { item: 'Casca de ovo', explanation: 'Casca de ovo \u00e9 org\u00e2nica. Vira adubo.', tip: 'Casca de ovo vira adubo natural para plantas.' },
      '10': { item: 'Caixa de papel\u00e3o', explanation: 'Papel\u00e3o \u00e9 papel. Vira caixa nova!', tip: 'Amasse a caixa antes de reciclar.' },
      '11': { item: 'Lata de sardinha', explanation: 'A lata de sardinha \u00e9 de metal. Vai na lixeira amarela. Lave antes.', tip: 'Metal vira metal de novo. Sempre!' },
      '12': { item: 'Frasco de perfume', explanation: 'Frasco de perfume \u00e9 de vidro. Vai na lixeira verde.', tip: 'Separe as partes de pl\u00e1stico antes de reciclar.' },
      '13': { item: 'Resto de comida', explanation: 'Resto de comida vira adubo com a compostagem.', tip: 'Evite jogar comida fora!' },
      '14': { item: 'Revista', explanation: 'Revista \u00e9 papel. Vai na lixeira azul.', tip: 'Papel reciclado vira papel novo e salva \u00e1rvores!' },
      '15': { item: 'Copinho descart\u00e1vel', explanation: 'Copinho descart\u00e1vel \u00e9 de pl\u00e1stico. Melhor usar copo de verdade!', tip: 'Use caneca em vez de copo descart\u00e1vel!' },
      '16': { item: 'Folha de papel sulfite', explanation: 'Papel vai na lixeira azul. Use os dois lados!', tip: 'Use o verso do papel como rascunho.' },
      '17': { item: 'Clips', explanation: 'O clips \u00e9 de metal. Vai na lixeira amarela.', tip: 'Clips d\u00e1 para usar de novo.' },
      '18': { item: 'Panela velha', explanation: 'Panela velha \u00e9 de metal. Vai na lixeira amarela.', tip: 'Panela quebrada vira metal novo!' },
      '19': { item: 'Copo de vidro quebrado', explanation: 'Vidro quebrado vai na lixeira verde. Cuidado para n\u00e3o se cortar!', tip: 'Embrulhe os cacos em jornal.' },
      '20': { item: 'Folhas secas', explanation: 'Folhas secas viram adubo.', tip: 'Folhas secas viram adubo rico para as plantas!' },
      '21': { item: 'Garrafa de \u00e1gua', explanation: 'Garrafinha de \u00e1gua \u00e9 de pl\u00e1stico. Vai na lixeira vermelha.', tip: 'Use garrafinha de verdade em vez de pl\u00e1stico!' },
      '22': { item: 'Embalagem de presente', explanation: 'Papel de presente \u00e9 papel. Vai na lixeira azul. Tire a fita.', tip: 'Reutilize o papel de presente!' },
      '23': { item: 'Fralda descart\u00e1vel', explanation: 'Fralda n\u00e3o pode ser reciclada. Vai na lixeira cinza.', tip: 'Fralda demora muito para sumir. Existe fralda ecol\u00f3gica!' },
      '25': { item: 'Esponja de cozinha', explanation: 'Esponja n\u00e3o pode ser reciclada. Vai na lixeira cinza.', tip: 'Use esponjas vegetais que s\u00e3o compost\u00e1veis!' },
      '26': { item: 'Canudo', explanation: 'Canudo \u00e9 de pl\u00e1stico. Vai na lixeira vermelha. Melhor n\u00e3o usar.', tip: 'Canundo polui o mar. Melhor n\u00e3o usar!' },
    },

    learn: {
      title: 'Aprenda sobre Reciclagem \u267B\uFE0F',
      subtitle: 'Cada lixeira tem uma cor. Veja o que vai em cada uma!',
      secondaryHeader: '\u{1F539} Outras lixeiras',
      secondaryDesc: 'Estas tamb\u00e9m fazem parte do padr\u00e3o de cores da reciclagem.',
      curiositiesHeader: '\u{1F4A1} Curiosidades sobre Reciclagem',
      bins: {
        azul: {
          title: 'Lixeira Azul',
          desc: '<strong>Pap\u00e9is e papel\u00f5es</strong>: jornais, revistas, cadernos, caixas e folhas.',
          examples: ['\u{1F4F0} Jornal', '\u{1F4E6} Papel\u00e3o', '\u{1F4D3} Caderno', '\u{1F4C4} Sulfite'],
        },
        vermelha: {
          title: 'Lixeira Vermelha',
          desc: '<strong>Pl\u00e1sticos</strong>: garrafas PET, sacolas, potes, canudos e copos.',
          examples: ['\u{1F9F4} Garrafa PET', '\u{1F6CD}\uFE0F Sacola', '\u{1F964} Canudo', '\u{1F9F8} Brinquedo'],
        },
        amarela: {
          title: 'Lixeira Amarela',
          desc: '<strong>Metais</strong>: latinhas, tampas, clips, panelas e arames.',
          examples: ['\u{1F95B} Latinha', '\u{1F37E} Tampa', '\u{1F4CE} Clips', '\u{1F373} Panela'],
        },
        verde: {
          title: 'Lixeira Verde',
          desc: '<strong>Vidros</strong>: garrafas, potes, copos e frascos.',
          examples: ['\u{1FAD7} Garrafa', '\u{1FAD9} Pote', '\u{1F942} Copo', '\u{1F9EA} Frasco'],
        },
        marrom: {
          title: 'Lixeira Marrom',
          desc: '<strong>Org\u00e2nicos</strong>: restos de comida, cascas, folhas e borra de caf\u00e9.',
          examples: ['\u{1F34C} Casca de fruta', '\u{1F957} Restos', '\u{1F342} Folhas', '\u{1F95A} Casca de ovo'],
        },
        cinza: {
          title: 'Lixeira Cinza',
          desc: '<strong>Rejeitos n\u00e3o recicl\u00e1veis</strong>: fraldas, esponjas e papel higi\u00eanico.',
          examples: ['\u{1F476} Fralda', '\u{1F9FD} Esponja', '\u{1F9FB} Papel higi\u00eanico'],
        },
      },
      secondary: {
        preta: { title: 'Preta \u2014 Madeira', desc: 'Madeira: m\u00f3veis, t\u00e1buas, galhos e serragem.' },
        laranja: { title: 'Laranja \u2014 Perigosos', desc: 'Pilhas, baterias, tintas, \u00f3leo e l\u00e2mpadas.' },
        branca: { title: 'Branca \u2014 Sa\u00fade', desc: 'Seringas, luvas e gazes.' },
        roxa: { title: 'Roxa \u2014 Radioativos', desc: 'De hospitais e laborat\u00f3rios.' },
      },
      curiosities: [
        'Reciclar papel salva 20 \u00e1rvores!',
        'O alum\u00ednio pode ser reciclado infinitamente!',
        'Saco pl\u00e1stico demora 400 anos para sumir!',
        'Muito pl\u00e1stico vai parar no mar!',
        'Reciclar alum\u00ednio gasta pouca energia!',
        'Restos de comida viram adubo para plantas!',
      ],
    },
  },

  en: {
    ui: {
      siteTitle: 'Recicla A\u00ed - Recycling Game',
      loading: 'Loading ({loaded}/{total})...',
      langSelector: 'Language',
      start: {
        subtitle: '\u{1F9B1} Learn to sort waste and help the planet!',
        play: '\u{1F3AE} Play',
        learn: '\u{1F4D6} Learn',
        rankingGlobal: '\u{1F3C6} Global Ranking',
        rankingLocal: '\u{1F4CA} Local Ranking',
        howToScore: '\u{2B50} How to score',
      },
      game: {
        back: 'Back',
        backTitle: 'Back to home',
        points: 'Points',
        counter: '{current} of {total}',
        question: 'Which bin does this item go to?',
        next: 'Next \u{279C}',
      },
      feedback: {
        correct: 'Well done!',
        wrong: 'Almost!',
        wrongPrefix: 'The correct bin is',
        bonus: '\u26A1 +{points} speed bonus!',
      },
      finish: {
        title: 'Game over!',
        of: 'of',
        hits: 'correct',
        points: 'points',
        restart: '\u{1F504} Play again',
        back: '\u{1F3E0} Home',
        ranking: '\u{1F3C6} Ranking',
        messages: {
          excellent: 'You\'re a master! The planet thanks you!',
          good: 'Great job! Keep it up!',
          average: 'Good start! Practice makes perfect!',
          bad: 'You\'re learning. Try again!',
        },
      },
      modal: {
        title: 'What\'s your name?',
        desc: 'To save your score on the ranking!',
        placeholder: 'Your nickname',
        save: 'Save \u{1F44D}',
        validationError: 'Type at least 2 letters',
      },
      info: {
        title: '\u{2B50} How to score points',
        streak: '<strong>\u{1F525} Streak:</strong> each correct answer in a row gives more points. 1st = 10pts, 2nd = 20pts, 3rd = 30pts... If you miss, your streak goes back to 1 instead of 0.',
        speed: '<strong>\u26A1 Speed:</strong> answer fast! Earn up to +25 bonus points. You have 2 seconds for the max bonus.',
        penalty: '<strong>\u{1F6AB} Wrong</strong> doesn\u2019t reset your score, just restarts the streak. The time bonus decreases slowly.',
        close: 'Got it! \u{1F44D}',
      },
      learn: {
        learnMore: '\u{1F4D6} Learn more',
        backHome: '\u{1F3E0} Back to home',
      },
      music: {
        on: 'Turn off background music',
        off: 'Turn on background music',
      },
      rankingTitle: '\u{1F3C6} Ranking',
      rankingSubtitle: 'Best player scores!',
      localRankingTitle: '\u{1F4CA} Local Ranking',
      localRankingSubtitle: 'Best scores on this device!',
      footer: 'rayforgelab/recicla-ai',
    },

    categories: {
      plastico: 'Plastic',
      papel: 'Paper',
      metal: 'Metal',
      vidro: 'Glass',
      organico: 'Organic',
      rejeito: 'Trash',
    },

    categoryColors: {
      plastico: 'red',
      papel: 'blue',
      metal: 'yellow',
      vidro: 'green',
      organico: 'brown',
      rejeito: 'gray',
    },

    binLabels: {
      azul: 'Blue',
      vermelha: 'Red',
      amarela: 'Yellow',
      verde: 'Green',
      marrom: 'Brown',
      cinza: 'Gray',
    },

    ranking: {
      error: 'Ranking unavailable at the moment.',
      emptyGlobal: 'No scores yet. Be the first!',
      emptyLocal: 'No scores on this device yet. Go play!',
      points: '{score} pts',
    },

    questions: {
      '1': { item: 'PET bottle', explanation: 'PET bottles are plastic. They become fabric for clothes and new objects!', tip: 'PET is the name of the bottle plastic.' },
      '2': { item: 'Newspaper', explanation: 'Newspaper is paper. It becomes new paper!', tip: 'Recycling paper saves trees!' },
      '3': { item: 'Soda can', explanation: 'The can is metal. It becomes a new can again!', tip: 'A can becomes another in 60 days!' },
      '4': { item: 'Glass bottle', explanation: 'Glass becomes new glass again. Forever!', tip: 'Glass takes a very long time to disappear. That\'s why you should recycle!' },
      '5': { item: 'Fruit peel', explanation: 'Fruit peels become fertilizer for plants.', tip: 'Half of household waste is food. It can become fertilizer!' },
      '6': { item: 'Plastic bag', explanation: 'Plastic bags are plastic. Better to use a cloth bag!', tip: 'Plastic bags take 400 years to disappear.' },
      '7': { item: 'Used notebook', explanation: 'Notebooks are paper. Go in the blue bin.', tip: 'Remove the spiral before recycling.' },
      '8': { item: 'Glass jar', explanation: 'Glass jars are recyclable. Wash before throwing away.', tip: 'Glass can be recycled infinitely without losing quality!' },
      '9': { item: 'Eggshell', explanation: 'Eggshells are organic. Become fertilizer.', tip: 'Eggshells become natural fertilizer for plants.' },
      '10': { item: 'Cardboard box', explanation: 'Cardboard is paper. Becomes a new box!', tip: 'Flatten the box before recycling.' },
      '11': { item: 'Sardine can', explanation: 'Sardine cans are metal. Go in the yellow bin. Wash first.', tip: 'Metal becomes new metal. Forever!' },
      '12': { item: 'Perfume bottle', explanation: 'Perfume bottles are glass. Go in the green bin.', tip: 'Separate plastic parts before recycling.' },
      '13': { item: 'Food scraps', explanation: 'Food scraps become fertilizer through composting.', tip: 'Avoid throwing food away!' },
      '14': { item: 'Magazine', explanation: 'Magazines are paper. Go in the blue bin.', tip: 'Recycled paper becomes new paper and saves trees!' },
      '15': { item: 'Disposable cup', explanation: 'Disposable cups are plastic. Better to use a real cup!', tip: 'Use a mug instead of disposable cups!' },
      '16': { item: 'Sheet of paper', explanation: 'Paper goes in the blue bin. Use both sides!', tip: 'Use the back of the paper as scrap.' },
      '17': { item: 'Paper clip', explanation: 'Paper clips are metal. Go in the yellow bin.', tip: 'Paper clips can be reused.' },
      '18': { item: 'Old pan', explanation: 'Old pans are metal. Go in the yellow bin.', tip: 'Broken pans become new metal!' },
      '19': { item: 'Broken glass cup', explanation: 'Broken glass goes in the green bin. Be careful not to cut yourself!', tip: 'Wrap the shards in newspaper.' },
      '20': { item: 'Dry leaves', explanation: 'Dry leaves become fertilizer.', tip: 'Dry leaves become rich fertilizer for plants!' },
      '21': { item: 'Water bottle', explanation: 'Water bottles are plastic. Go in the red bin.', tip: 'Use a reusable bottle instead of plastic!' },
      '22': { item: 'Gift wrapping', explanation: 'Gift wrap is paper. Go in the blue bin. Remove the tape.', tip: 'Reuse wrapping paper!' },
      '23': { item: 'Disposable diaper', explanation: 'Diapers cannot be recycled. Go in the gray bin.', tip: 'Diapers take a very long time to decompose. There are eco-friendly diapers!' },
      '25': { item: 'Kitchen sponge', explanation: 'Sponges cannot be recycled. Go in the gray bin.', tip: 'Use vegetable sponges that are compostable!' },
      '26': { item: 'Straw', explanation: 'Straws are plastic. Go in the red bin. Better not to use them.', tip: 'Straws pollute the ocean. Better not to use them!' },
    },

    learn: {
      title: 'Learn about Recycling \u267B\uFE0F',
      subtitle: 'Each bin has a color. See what goes in each one!',
      secondaryHeader: '\u{1F539} Other bins',
      secondaryDesc: 'These are also part of the recycling color code.',
      curiositiesHeader: '\u{1F4A1} Recycling Facts',
      bins: {
        azul: {
          title: 'Blue Bin',
          desc: '<strong>Paper and cardboard</strong>: newspapers, magazines, notebooks, boxes and sheets.',
          examples: ['\u{1F4F0} Newspaper', '\u{1F4E6} Cardboard', '\u{1F4D3} Notebook', '\u{1F4C4} Paper'],
        },
        vermelha: {
          title: 'Red Bin',
          desc: '<strong>Plastics</strong>: PET bottles, bags, containers, straws and cups.',
          examples: ['\u{1F9F4} PET bottle', '\u{1F6CD}\uFE0F Bag', '\u{1F964} Straw', '\u{1F9F8} Toy'],
        },
        amarela: {
          title: 'Yellow Bin',
          desc: '<strong>Metals</strong>: cans, lids, clips, pans and wires.',
          examples: ['\u{1F95B} Can', '\u{1F37E} Lid', '\u{1F4CE} Clip', '\u{1F373} Pan'],
        },
        verde: {
          title: 'Green Bin',
          desc: '<strong>Glass</strong>: bottles, jars, cups and flasks.',
          examples: ['\u{1FAD7} Bottle', '\u{1FAD9} Jar', '\u{1F942} Cup', '\u{1F9EA} Flask'],
        },
        marrom: {
          title: 'Brown Bin',
          desc: '<strong>Organic waste</strong>: food scraps, peels, leaves and coffee grounds.',
          examples: ['\u{1F34C} Fruit peel', '\u{1F957} Leftovers', '\u{1F342} Leaves', '\u{1F95A} Eggshell'],
        },
        cinza: {
          title: 'Gray Bin',
          desc: '<strong>Non-recyclable waste</strong>: diapers, sponges and toilet paper.',
          examples: ['\u{1F476} Diaper', '\u{1F9FD} Sponge', '\u{1F9FB} Toilet paper'],
        },
      },
      secondary: {
        preta: { title: 'Black \u2014 Wood', desc: 'Wood: furniture, planks, branches and sawdust.' },
        laranja: { title: 'Orange \u2014 Hazardous', desc: 'Batteries, paints, oil and light bulbs.' },
        branca: { title: 'White \u2014 Health', desc: 'Syringes, gloves and gauze.' },
        roxa: { title: 'Purple \u2014 Radioactive', desc: 'From hospitals and labs.' },
      },
      curiosities: [
        'Recycling paper saves 20 trees!',
        'Aluminum can be recycled infinitely!',
        'Plastic bags take 400 years to decompose!',
        'A lot of plastic ends up in the ocean!',
        'Recycling aluminum uses little energy!',
        'Food scraps become fertilizer for plants!',
      ],
    },
  },

  es: {
    ui: {
      siteTitle: 'Recicla A\u00ed - Juego de Reciclaje',
      loading: 'Cargando ({loaded}/{total})...',
      langSelector: 'Idioma',
      start: {
        subtitle: '\u{1F9B1} \u00a1Aprende a separar la basura y ayuda al planeta!',
        play: '\u{1F3AE} Jugar',
        learn: '\u{1F4D6} Aprender',
        rankingGlobal: '\u{1F3C6} Ranking Global',
        rankingLocal: '\u{1F4CA} Ranking Local',
        howToScore: '\u{2B50} C\u00f3mo ganar puntos',
      },
      game: {
        back: 'Volver',
        backTitle: 'Volver al inicio',
        points: 'Puntos',
        counter: '{current} de {total}',
        question: '\u00bfEn qu\u00e9 contenedor va este objeto?',
        next: 'Siguiente \u{279C}',
      },
      feedback: {
        correct: '\u00a1Bien hecho!',
        wrong: '\u00a1Casi!',
        wrongPrefix: 'El contenedor correcto es',
        bonus: '\u26A1 \u00a1+{points} de bono por rapidez!',
      },
      finish: {
        title: '\u00a1Fin del juego!',
        of: 'de',
        hits: 'aciertos',
        points: 'puntos',
        restart: '\u{1F504} Jugar de nuevo',
        back: '\u{1F3E0} Volver',
        ranking: '\u{1F3C6} Ranking',
        messages: {
          excellent: '\u00a1Eres un maestro! \u00a1El planeta te agradece!',
          good: '\u00a1Muy bien! \u00a1Sigue as\u00ed!',
          average: '\u00a1Buen comienzo! \u00a1Con pr\u00e1ctica mejorar\u00e1s!',
          bad: 'Est\u00e1s aprendiendo. \u00a1Intenta de nuevo!',
        },
      },
      modal: {
        title: '\u00bfCu\u00e1l es tu nombre?',
        desc: '\u00a1Para guardar tu puntuaci\u00f3n en el ranking!',
        placeholder: 'Tu apodo',
        save: 'Guardar \u{1F44D}',
        validationError: 'Escribe al menos 2 letras',
      },
      info: {
        title: '\u{2B50} C\u00f3mo ganar puntos',
        streak: '<strong>\u{1F525} Racha de aciertos:</strong> cada acierto consecutivo vale m\u00e1s. 1\u00ba = 10pts, 2\u00ba = 20pts, 3\u00ba = 30pts... Si fallas, la racha vuelve a 1 en lugar de 0.',
        speed: '<strong>\u26A1 Rapidez:</strong> \u00a1responde r\u00e1pido! Gana hasta +25 pts de bono. Tienes 2 segundos para el bono m\u00e1ximo.',
        penalty: '<strong>\u{1F6AB} Fallar</strong> no reinicia tu puntuaci\u00f3n, solo la racha de aciertos. El bono de tiempo disminuye con calma.',
        close: '\u00a1Entendido! \u{1F44D}',
      },
      learn: {
        learnMore: '\u{1F4D6} Aprender m\u00e1s',
        backHome: '\u{1F3E0} Volver al inicio',
      },
      music: {
        on: 'Desactivar m\u00fasica ambiente',
        off: 'Activar m\u00fasica ambiente',
      },
      rankingTitle: '\u{1F3C6} Ranking',
      rankingSubtitle: '\u00a1Mejores puntuaciones de los jugadores!',
      localRankingTitle: '\u{1F4CA} Ranking Local',
      localRankingSubtitle: '\u00a1Mejores puntuaciones de este dispositivo!',
      footer: 'rayforgelab/recicla-ai',
    },

    categories: {
      plastico: 'Pl\u00e1stico',
      papel: 'Papel',
      metal: 'Metal',
      vidro: 'Vidrio',
      organico: 'Org\u00e1nico',
      rejeito: 'Desechos',
    },

    categoryColors: {
      plastico: 'rojo',
      papel: 'azul',
      metal: 'amarillo',
      vidro: 'verde',
      organico: 'marr\u00f3n',
      rejeito: 'gris',
    },

    binLabels: {
      azul: 'Azul',
      vermelha: 'Rojo',
      amarela: 'Amarillo',
      verde: 'Verde',
      marrom: 'Marr\u00f3n',
      cinza: 'Gris',
    },

    ranking: {
      error: 'Ranking no disponible en este momento.',
      emptyGlobal: '\u00a1No hay puntuaciones a\u00fan. S\u00e9 el primero!',
      emptyLocal: 'No hay puntuaciones en este dispositivo. \u00a1Ve a jugar!',
      points: '{score} pts',
    },

    questions: {
      '1': { item: 'Botella PET', explanation: 'La botella PET es de pl\u00e1stico. \u00a1Se convierte en tela para ropa y nuevos objetos!', tip: 'PET es el nombre del pl\u00e1stico de la botella.' },
      '2': { item: 'Peri\u00f3dico', explanation: 'El peri\u00f3dico es papel. \u00a1Se convierte en papel nuevo!', tip: '\u00a1Reciclar papel salva \u00e1rboles!' },
      '3': { item: 'Lata de refresco', explanation: 'La lata es de metal. \u00a1Siempre se convierte en una lata nueva!', tip: '\u00a1Una lata se convierte en otra en 60 d\u00edas!' },
      '4': { item: 'Botella de vidrio', explanation: 'El vidrio se convierte en vidrio nuevo. \u00a1Siempre!', tip: 'El vidrio tarda mucho en desaparecer. \u00a1Por eso recicla!' },
      '5': { item: 'C\u00e1scara de fruta', explanation: 'Las c\u00e1scaras de fruta se convierten en abono para plantas.', tip: '\u00a1La mitad de la basura de casa es comida. Se puede convertir en abono!' },
      '6': { item: 'Bolsa pl\u00e1stica', explanation: 'Las bolsas pl\u00e1sticas son de pl\u00e1stico. \u00a1Mejor usa una bolsa de tela!', tip: 'Las bolsas pl\u00e1sticas tardan 400 a\u00f1os en desaparecer.' },
      '7': { item: 'Cuaderno usado', explanation: 'El cuaderno es papel. Va en el contenedor azul.', tip: 'Quita el espiral antes de reciclar.' },
      '8': { item: 'Frasco de vidrio', explanation: 'Los frascos de vidrio son reciclables. Lava antes de tirar.', tip: '\u00a1El vidrio se puede reciclar infinitamente sin perder calidad!' },
      '9': { item: 'C\u00e1scara de huevo', explanation: 'Las c\u00e1scaras de huevo son org\u00e1nicas. Se convierten en abono.', tip: 'Las c\u00e1scaras de huevo son abono natural para las plantas.' },
      '10': { item: 'Caja de cart\u00f3n', explanation: 'El cart\u00f3n es papel. \u00a1Se convierte en una caja nueva!', tip: 'Aplasta la caja antes de reciclar.' },
      '11': { item: 'Lata de sardinas', explanation: 'Las latas de sardinas son de metal. Van en el contenedor amarillo. Lava antes.', tip: '\u00a1El metal se convierte en metal nuevo. Siempre!' },
      '12': { item: 'Frasco de perfume', explanation: 'Los frascos de perfume son de vidrio. Van en el contenedor verde.', tip: 'Separa las partes de pl\u00e1stico antes de reciclar.' },
      '13': { item: 'Sobras de comida', explanation: 'Las sobras de comida se convierten en abono con el compostaje.', tip: '\u00a1Evita tirar la comida!' },
      '14': { item: 'Revista', explanation: 'Las revistas son papel. Van en el contenedor azul.', tip: '\u00a1El papel reciclado se convierte en papel nuevo y salva \u00e1rboles!' },
      '15': { item: 'Vaso descartable', explanation: 'Los vasos descartables son de pl\u00e1stico. \u00a1Mejor usa un vaso de verdad!', tip: '\u00a1Usa una taza en lugar de vasos descartables!' },
      '16': { item: 'Hoja de papel', explanation: 'El papel va en el contenedor azul. \u00a1Usa ambos lados!', tip: 'Usa el reverso del papel como borrador.' },
      '17': { item: 'Clip', explanation: 'Los clips son de metal. Van en el contenedor amarillo.', tip: 'Los clips se pueden reutilizar.' },
      '18': { item: 'Olla vieja', explanation: 'Las ollas viejas son de metal. Van en el contenedor amarillo.', tip: '\u00a1Las ollas rotas se convierten en metal nuevo!' },
      '19': { item: 'Vaso de vidrio roto', explanation: 'El vidrio roto va en el contenedor verde. \u00a1Cuidado al cortarte!', tip: 'Envuelve los fragmentos en peri\u00f3dico.' },
      '20': { item: 'Hojas secas', explanation: 'Las hojas secas se convierten en abono.', tip: '\u00a1Las hojas secas son abono rico para las plantas!' },
      '21': { item: 'Botella de agua', explanation: 'Las botellas de agua son de pl\u00e1stico. Van en el contenedor rojo.', tip: '\u00a1Usa una botella reutilizable en lugar de pl\u00e1stico!' },
      '22': { item: 'Envoltura de regalo', explanation: 'El papel de regalo es papel. Va en el contenedor azul. Quita la cinta.', tip: '\u00a1Reutiliza el papel de regalo!' },
      '23': { item: 'Pa\u00f1al desechable', explanation: 'Los pa\u00f1ales no se pueden reciclar. Van en el contenedor gris.', tip: 'Los pa\u00f1ales tardan mucho en desaparecer. \u00a1Existen pa\u00f1ales ecol\u00f3gicos!' },
      '25': { item: 'Esponja de cocina', explanation: 'Las esponjas no se pueden reciclar. Van en el contenedor gris.', tip: '\u00a1Usa esponjas vegetales que son compostables!' },
      '26': { item: 'Pajilla', explanation: 'Las pajillas son de pl\u00e1stico. Van en el contenedor rojo. Mejor no usarlas.', tip: '\u00a1Las pajillas contaminan el mar. Mejor no usarlas!' },
    },

    learn: {
      title: 'Aprende sobre Reciclaje \u267B\uFE0F',
      subtitle: '\u00a1Cada contenedor tiene un color. Mira qu\u00e9 va en cada uno!',
      secondaryHeader: '\u{1F539} Otros contenedores',
      secondaryDesc: 'Estos tambi\u00e9n forman parte del c\u00f3digo de colores del reciclaje.',
      curiositiesHeader: '\u{1F4A1} Curiosidades sobre Reciclaje',
      bins: {
        azul: {
          title: 'Contenedor Azul',
          desc: '<strong>Papeles y cartones</strong>: peri\u00f3dicos, revistas, cuadernos, cajas y hojas.',
          examples: ['\u{1F4F0} Peri\u00f3dico', '\u{1F4E6} Cart\u00f3n', '\u{1F4D3} Cuaderno', '\u{1F4C4} Papel'],
        },
        vermelha: {
          title: 'Contenedor Rojo',
          desc: '<strong>Pl\u00e1sticos</strong>: botellas PET, bolsas, envases, pajillas y vasos.',
          examples: ['\u{1F9F4} Botella PET', '\u{1F6CD}\uFE0F Bolsa', '\u{1F964} Pajilla', '\u{1F9F8} Juguete'],
        },
        amarela: {
          title: 'Contenedor Amarillo',
          desc: '<strong>Metales</strong>: latas, tapas, clips, ollas y alambres.',
          examples: ['\u{1F95B} Lata', '\u{1F37E} Tapa', '\u{1F4CE} Clip', '\u{1F373} Olla'],
        },
        verde: {
          title: 'Contenedor Verde',
          desc: '<strong>Vidrios</strong>: botellas, frascos, vasos y envases.',
          examples: ['\u{1FAD7} Botella', '\u{1FAD9} Frasco', '\u{1F942} Vaso', '\u{1F9EA} Envase'],
        },
        marrom: {
          title: 'Contenedor Marr\u00f3n',
          desc: '<strong>Org\u00e1nicos</strong>: restos de comida, c\u00e1scaras, hojas y posos de caf\u00e9.',
          examples: ['\u{1F34C} C\u00e1scara', '\u{1F957} Sobras', '\u{1F342} Hojas', '\u{1F95A} C\u00e1scara de huevo'],
        },
        cinza: {
          title: 'Contenedor Gris',
          desc: '<strong>Desechos no reciclables</strong>: pa\u00f1ales, esponjas y papel higi\u00e9nico.',
          examples: ['\u{1F476} Pa\u00f1al', '\u{1F9FD} Esponja', '\u{1F9FB} Papel higi\u00e9nico'],
        },
      },
      secondary: {
        preta: { title: 'Negro \u2014 Madera', desc: 'Madera: muebles, tablas, ramas y aserr\u00edn.' },
        laranja: { title: 'Naranja \u2014 Peligrosos', desc: 'Pilas, bater\u00edas, pinturas, aceite y bombillas.' },
        branca: { title: 'Blanco \u2014 Salud', desc: 'Jeringas, guantes y gasas.' },
        roxa: { title: 'P\u00farpura \u2014 Radiactivos', desc: 'De hospitales y laboratorios.' },
      },
      curiosities: [
        '\u00a1Reciclar papel salva 20 \u00e1rboles!',
        '\u00a1El aluminio se puede reciclar infinitamente!',
        '\u00a1Las bolsas de pl\u00e1stico tardan 400 a\u00f1os en desaparecer!',
        '\u00a1Mucho pl\u00e1stico termina en el mar!',
        '\u00a1Reciclar aluminio gasta poca energ\u00eda!',
        '\u00a1Los restos de comida se convierten en abono para plantas!',
      ],
    },
  },
};

const I18n = {
  locale: 'pt-BR',

  init() {
    const saved = localStorage.getItem('reciclaAiLang');
    if (saved && LOCALE_DATA[saved]) {
      this.locale = saved;
    }
    document.documentElement.lang = this.locale === 'en' ? 'en' : this.locale;
  },

  t(key, params) {
    const str = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), LOCALE_DATA[this.locale]);
    if (str === undefined) {
      const fallback = key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), LOCALE_DATA['pt-BR']);
      if (fallback === undefined) return key;
      if (!params) return fallback;
      return fallback.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? params[k] : `{${k}}`);
    }
    if (!params) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? params[k] : `{${k}}`);
  },

  setLocale(lang) {
    if (!LOCALE_DATA[lang]) return;
    this.locale = lang;
    localStorage.setItem('reciclaAiLang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : lang;
    this.apply();
  },

  apply() {
    const data = LOCALE_DATA[this.locale] || LOCALE_DATA['pt-BR'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), data);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), data);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), data);
      if (val !== undefined) el.placeholder = val;
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), data);
      if (val !== undefined) el.title = val;
    });

    const langSel = document.querySelectorAll('.lang-btn');
    langSel.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.locale);
    });
  },
};
