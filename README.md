# Recicla Aí ♻️

Jogo educativo que ensina crianças a separar o lixo de forma correta, seguindo o padrão de cores da reciclagem.

Jogue online: [rayforgelab.github.io/recicla-ai](https://rayforgelab.github.io/recicla-ai/)

## 🎯 Objetivo

Cada pergunta mostra a foto de um item reciclável. A criança deve clicar na lixeira certa para descartá-lo. A cada acerto, ganha pontos e aprende uma dica sobre reciclagem.

## 🎮 Telas

- **Início** — Botões para Jogar, Aprender e ver o Ranking. Botão 🔇/🔊 para música ambiente
- **Jogo** — Perguntas com fotos reais + 6 lixeiras para escolher. Botão Voltar para sair e 🔇/🔊 no topo
- **Feedback** — Explicação e dica após cada resposta
- **Final** — Pontuação com mensagem personalizada + confete. Botão do Ranking
- **Aprender** — Guia com as 6 cores principais + 4 complementares + curiosidades
- **Ranking Global** — Top 20 pontuações salvas no Firebase
- **Ranking Local** — Top 20 pontuações salvas no navegador

## 🗑️ Lixeiras

| Cor | Material |
|-----|----------|
| Azul | Papéis e papelões |
| Vermelha | Plásticos |
| Amarela | Metais |
| Verde | Vidros |
| Marrom | Orgânicos |
| Cinza | Rejeitos não recicláveis |

## 🧩 Itens do jogo

25 itens reais com explicação e dica educativa, distribuídos entre as 6 categorias. As perguntas são sorteadas a cada partida (15 por jogo).

## ⭐ Sistema de Pontuação

```
pontos = (streak × 10) + bônus de tempo
```

O sistema é pensado para não frustrar crianças:

- **Streak**: acertos seguidos aumentam os pontos (1º = 10, 2º = 20, ...). Se errar, o streak volta para 1 em vez de zerar.
- **Bônus por rapidez**: até +25 pontos extras. O bônus máximo é garantido nos primeiros 2 segundos e diminui devagar.
- O timer visual de 10 segundos existe, mas o bônus só cai totalmente depois de 14s — sem pressão.

### Bônus por rapidez

```
bônus = max(0, 25 - max(0, tempo - 2) × 2)
```

| Tempo | Bônus |
|-------|-------|
| < 2s | +25 |
| 5s | +19 |
| 10s | +9 |
| ≥ 14,5s | 0 |

### Máximo por pergunta

Acertando todas as 15 em menos de 2s: **1575 pontos**.

## 🏆 Ranking

As pontuações são salvas automaticamente no **Firebase Realtime Database** (não precisa de backend). Ao finalizar o jogo, se for a primeira vez, um modal pede um apelido (salvo no navegador). Depois disso, só a melhor pontuação de cada jogador é mantida.

- **Ranking Global** (Firebase) — top 100 jogadores do mundo todo
- **Ranking Local** (`localStorage`) — top 100 jogadores desse dispositivo
- Acessível pela tela inicial e pela tela final
- Totalmente público — sem autenticação

## 🔧 Tecnologias

HTML, CSS e JavaScript puro. Firebase Realtime Database (SDK v8 compat via CDN). Efeitos sonoros e **música ambiente** com Web Audio API (acordes em loop com ondas triangulares + LFO). Confete animado com CSS. Design feito com auxílio de IA.

## 🚀 Como usar

Abra o `index.html` em qualquer navegador moderno (não precisa instalar nada), ou acesse a versão online.

## 📁 Estrutura

```
recicla-ai/
├── index.html
├── firebase-rules.txt
├── css/
│   └── style.css
├── js/
│   ├── firebase-config.js
│   ├── questions.js
│   ├── game.js
│   ├── ranking.js
│   └── audio.js
└── assets/images/items/
    └── (25 fotos em JPEG)
```
