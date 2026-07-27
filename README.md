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

Se errar, o streak volta a zero.

### ⚡ Bônus por rapidez

Responder rápido dá pontos extras. O bônus diminui com o tempo:

```
bônus = max(0, 50 - segundos × 5)
```

| Tempo | Bônus |
|-------|-------|
| < 0,5s | +50 |
| 3s | +35 |
| 5s | +25 |
| 7s | +15 |
| 9s | +5 |
| ≥ 10s | 0 |

Uma barra de tempo no topo do quiz mostra visualmente quanto tempo resta.

### 🏆 Pontuação máxima

Acertando todas as 15 perguntas em menos de 2s cada:

| # | Streak | Base | Bônus | Total |
|---|--------|------|-------|-------|
| 1 | ×1 | 10 | +50 | 60 |
| 2 | ×2 | 20 | +50 | 70 |
| 3 | ×3 | 30 | +50 | 80 |
| 4 | ×4 | 40 | +50 | 90 |
| 5 | ×5 | 50 | +50 | 100 |
| 6 | ×6 | 60 | +50 | 110 |
| 7 | ×7 | 70 | +50 | 120 |
| 8 | ×8 | 80 | +50 | 130 |
| 9 | ×9 | 90 | +50 | 140 |
| 10 | ×10 | 100 | +50 | 150 |
| 11 | ×11 | 110 | +50 | 160 |
| 12 | ×12 | 120 | +50 | 170 |
| 13 | ×13 | 130 | +50 | 180 |
| 14 | ×14 | 140 | +50 | 190 |
| 15 | ×15 | 150 | +50 | 200 |

**Máximo total = 1950 pontos**

## 🔧 Tecnologias

HTML, CSS e JavaScript puro — sem bibliotecas externas. Efeitos sonoros com Web Audio API. Confete animado com CSS.

## 🚀 Como usar

Abra o arquivo `index.html` em qualquer navegador moderno. Não precisa instalar nada.

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
