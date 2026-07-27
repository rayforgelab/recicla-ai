# Recicla Aí ♻️

Jogo educativo que ensina crianças de 6 a 12 anos a separar o lixo de forma correta, seguindo o padrão de cores da reciclagem (ABNT).

## 🎯 Objetivo

Cada pergunta mostra a foto de um item reciclável. A criança deve clicar na lixeira certa para descartá-lo. A cada acerto, ganha pontos e aprende uma dica sobre reciclagem.

## 🎮 Como jogar

1. Clique em **Jogar** na tela inicial
2. Veja a foto do item que aparece na tela
3. Clique na lixeira certa (Azul, Vermelha, Amarela, Verde, Marrom ou Cinza)
4. Leia a explicação e continue até o fim
5. No final, veja sua pontuação e jogue de novo para melhorar!

## 📖 Telas

- **Início** — Botões para jogar ou aprender
- **Jogo** — Perguntas com fotos reais + 6 lixeiras para escolher
- **Feedback** — Explicação e dica após cada resposta
- **Final** — Pontuação com mensagem personalizada + confete
- **Aprender** — Guia completo com as 6 cores principais + 4 complementares (Preta, Laranja, Branca, Roxa) + curiosidades

## 🗑️ Lixeiras (norma ABNT)

| Cor | Material |
|-----|----------|
| Azul | Papel e papelão |
| Vermelha | Plástico |
| Amarela | Metal |
| Verde | Vidro |
| Marrom | Orgânico |
| Cinza | Rejeitos (não reciclável) |

## 🧩 Itens do jogo

26 itens recicláveis com fotos reais, cada um com explicação e dica educativa, distribuídos entre as 6 categorias de lixeira.

## ⭐ Sistema de Pontuação

A pontuação de cada acerto é calculada por:

```
pontos = (streak × 10) + bônus de tempo
```

### 🔥 Streak (acertos seguidos)

A cada acerto consecutivo, o streak aumenta. Ele multiplica os pontos-base:

| Acertos seguidos | Pontos-base |
|------------------|-------------|
| 1º | 10 |
| 2º | 20 |
| 3º | 30 |
| 4º | 40 |
| 5º | 50 |
| ... | ... |
| 15º | 150 |

Se errar, o streak volta para 1 em vez de zerar.

### ⚡ Bônus por rapidez

Responder rápido dá pontos extras. O bônus diminui com o tempo:

```
bônus = max(0, 25 - segundos × 2)
```

| Tempo | Bônus |
|-------|-------|
| < 2s | +25 |
| 5s | +19 |
| 7s | +15 |
| 10s | +9 |
| ≥ 14,5s | 0 |

Uma barra de tempo no topo do quiz mostra visualmente quanto tempo resta.

### 🏆 Pontuação máxima

Acertando todas as 15 perguntas em menos de 2s cada:

| # | Streak | Base | Bônus | Total |
|---|--------|------|-------|-------|
| 1 | ×1 | 10 | +25 | 35 |
| 2 | ×2 | 20 | +25 | 45 |
| 3 | ×3 | 30 | +25 | 55 |
| 4 | ×4 | 40 | +25 | 65 |
| 5 | ×5 | 50 | +25 | 75 |
| 6 | ×6 | 60 | +25 | 85 |
| 7 | ×7 | 70 | +25 | 95 |
| 8 | ×8 | 80 | +25 | 105 |
| 9 | ×9 | 90 | +25 | 115 |
| 10 | ×10 | 100 | +25 | 125 |
| 11 | ×11 | 110 | +25 | 135 |
| 12 | ×12 | 120 | +25 | 145 |
| 13 | ×13 | 130 | +25 | 155 |
| 14 | ×14 | 140 | +25 | 165 |
| 15 | ×15 | 150 | +25 | 175 |

**Máximo total = 1575 pontos**

## 🔧 Tecnologias

HTML, CSS e JavaScript puro — sem bibliotecas externas. Efeitos sonoros com Web Audio API. Confete animado com CSS. Design feito com auxílio de IA.

## 🚀 Como usar

Abra o arquivo `index.html` em qualquer navegador moderno. Não precisa instalar nada.

Jogue online: [rayforgelab.github.io/recicla-ai](https://rayforgelab.github.io/recicla-ai/)

## 📁 Estrutura

```
recicla-ai/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── game.js
│   └── questions.js
└── assets/images/items/
    └── (26 fotos reais em JPEG)
```
