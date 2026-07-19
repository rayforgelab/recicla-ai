const game = {
  score: 0,
  acertos: 0,
  streak: 0,
  indiceAtual: 0,
  totalPerguntas: 15,
  questions: [],
  startTime: 0,
  timerInterval: null,
  somAtivado: true,
  ctxAudio: null,
  nomesCategorias: {
    plastico: 'Plástico',
    papel: 'Papel',
    metal: 'Metal',
    vidro: 'Vidro',
    organico: 'Orgânico',
    rejeito: 'Rejeitos'
  },
  coresCategorias: {
    plastico: 'vermelha',
    papel: 'azul',
    metal: 'amarela',
    vidro: 'verde',
    organico: 'marrom',
    rejeito: 'cinza'
  },
  lixeiras: [
    { id: 'papel', label: 'Papel', icon: '📄', color: 'lixeira-azul', className: 'azul', nomeCor: 'Azul' },
    { id: 'plastico', label: 'Plástico', icon: '🥤', color: 'lixeira-vermelha', className: 'vermelho', nomeCor: 'Vermelha' },
    { id: 'metal', label: 'Metal', icon: '🔩', color: 'lixeira-amarela', className: 'amarelo', nomeCor: 'Amarela' },
    { id: 'vidro', label: 'Vidro', icon: '🫙', color: 'lixeira-verde', className: 'verde', nomeCor: 'Verde' },
    { id: 'organico', label: 'Orgânico', icon: '🌿', color: 'lixeira-marrom', className: 'marrom', nomeCor: 'Marrom' },
    { id: 'rejeito', label: 'Rejeitos', icon: '🗑️', color: 'lixeira-cinza', className: 'cinza', nomeCor: 'Cinza' }
  ],
  respondendo: false,

  iniciarJogo() {
    this.pararTimer();
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    this.questions = shuffled.slice(0, this.totalPerguntas);
    this.score = 0;
    this.acertos = 0;
    this.streak = 0;
    this.indiceAtual = 0;
    this.mostrarTela('tela-jogo');
    this.carregarPergunta();
  },

  mostrarTela(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
  },

  atualizarStreak() {
    const el = document.getElementById('indicador-streak');
    if (this.streak >= 2) {
      el.style.display = 'inline';
      el.textContent = `🔥 ${this.streak}x`;
    } else {
      el.style.display = 'none';
    }
  },

  carregarPergunta() {
    if (this.indiceAtual >= this.questions.length) {
      this.finalizarJogo();
      return;
    }

    this.respondendo = false;
    const q = this.questions[this.indiceAtual];

    const emojiEl = document.getElementById('p-emoji');
    emojiEl.innerHTML = '';

    if (q.image && q.image.startsWith('data:image/svg+xml')) {
      const svgHtml = decodeURIComponent(q.image.replace('data:image/svg+xml,', ''));
      const svgEl = new DOMParser().parseFromString(svgHtml, 'image/svg+xml').documentElement;
      svgEl.setAttribute('class', 'question-svg');
      emojiEl.appendChild(svgEl);
    } else if (q.image) {
      const img = document.createElement('img');
      img.className = 'question-img';
      img.alt = q.item;
      img.onerror = function () {
        this.remove();
        const fb = document.createElement('span');
        fb.className = 'question-emoji';
        fb.textContent = '♻️';
        emojiEl.appendChild(fb);
      };
      img.src = q.image;
      emojiEl.appendChild(img);
    } else if (q.emoji) {
      emojiEl.textContent = q.emoji;
    }
    document.getElementById('p-item').textContent = q.item;
    document.getElementById('p-contador').textContent =
      `${this.indiceAtual + 1} de ${this.questions.length}`;
    document.getElementById('pontuacao-num').textContent = this.score;

    const container = document.getElementById('container-lixeiras');
    container.innerHTML = '';

    this.lixeiras.forEach(bin => {
      const btn = document.createElement('button');
      btn.className = `btn-lixeira ${bin.color}`;
      btn.innerHTML = `<span class="icone-lixeira">♻️</span><span class="rotulo-lixeira">${bin.nomeCor}</span>`;
      btn.dataset.binId = bin.id;
      btn.addEventListener('click', () => this.verificarResposta(bin.id));
      container.appendChild(btn);
    });

    const qEmoji = document.getElementById('p-emoji');
    qEmoji.style.animation = 'none';
    requestAnimationFrame(() => {
      qEmoji.style.animation = 'pop 0.4s ease';
    });

    document.getElementById('tela-jogo').scrollIntoView({ behavior: 'smooth' });

    this.startTime = Date.now();
    this.iniciarTimer();
  },

  iniciarTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const bar = document.getElementById('timer-barra');
    const wrapper = document.getElementById('timer-wrapper');
    wrapper.style.display = 'block';
    const duracao = 10000;
    const inicio = Date.now();
    this.timerInterval = setInterval(() => {
      const decorrido = Date.now() - inicio;
      const pct = Math.max(0, 100 - (decorrido / duracao) * 100);
      bar.style.width = pct + '%';
      if (pct <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }, 50);
  },

  pararTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const wrapper = document.getElementById('timer-wrapper');
    wrapper.style.display = 'none';
  },

  calcularBonusTempo() {
    const elapsed = (Date.now() - this.startTime) / 1000;
    return Math.max(0, Math.ceil(50 - Math.max(0, elapsed - 0.3) * 5));
  },

  verificarResposta(binId) {
    if (this.respondendo) return;
    this.respondendo = true;

    const q = this.questions[this.indiceAtual];
    const correct = binId === q.category;

    const buttons = document.querySelectorAll('.btn-lixeira');
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.binId === q.category) {
        btn.classList.add('correto');
      }
      if (btn.dataset.binId === binId && !correct) {
        btn.classList.add('errado');
      }
    });

    this.tocarSom('click');
    if (correct) {
      this.acertos++;
      this.streak++;
      const bonusTempo = this.calcularBonusTempo();
      const pontos = this.streak * 10 + bonusTempo;
      this.score += pontos;
      document.getElementById('pontuacao-num').textContent = this.score;
      this.atualizarStreak();
      document.getElementById('feedback-bonus').textContent =
        bonusTempo > 0 ? `⚡ +${bonusTempo} de bônus por rapidez!` : '';
      this.tocarSom('correct');
    } else {
      this.streak = 0;
      this.atualizarStreak();
      document.getElementById('feedback-bonus').textContent = '';
      this.tocarSom('wrong');
    }
    this.pararTimer();

    setTimeout(() => this.mostrarFeedback(correct, q), correct ? 700 : 1000);
  },

  mostrarFeedback(correct, q) {
    const overlay = document.getElementById('sobreposicao-feedback');
    const icon = document.getElementById('feedback-icon');
    const title = document.getElementById('feedback-title');
    const explanation = document.getElementById('feedback-explanation');
    const tip = document.getElementById('feedback-tip');
    const nomeCor = this.coresCategorias[q.category];
    const categoryName = this.nomesCategorias[q.category];

    if (correct) {
      icon.textContent = '🎉';
      title.textContent = 'Parabéns!';
      title.className = 'feedback-title correct';
      explanation.textContent = q.explanation;
    } else {
      icon.textContent = '🤔';
      title.textContent = 'Quase!';
      title.className = 'feedback-title wrong';
      explanation.textContent = `A lixeira certa é a ${nomeCor}. ${q.explanation}`;
    }

    tip.textContent = `💡 ${q.tip}`;
    overlay.classList.add('show');

    if (correct) {
      this.criarConfete();
    }
  },

  proximaPergunta() {
    document.getElementById('sobreposicao-feedback').classList.remove('show');
    this.indiceAtual++;
    this.carregarPergunta();
  },

  finalizarJogo() {
    this.mostrarTela('tela-final');
    document.getElementById('final-score').textContent = this.score;
    document.getElementById('final-acertos').textContent = this.acertos;
    document.getElementById('total-questions').textContent = this.questions.length;

    const pct = this.acertos / this.questions.length;
    let stars, message;

    if (pct >= 0.9) {
      stars = '⭐⭐⭐';
      message = 'Você é um mestre! O planeta agradece!';
    } else if (pct >= 0.7) {
      stars = '⭐⭐';
      message = 'Muito bem! Continue assim!';
    } else if (pct >= 0.5) {
      stars = '⭐';
      message = 'Bom começo! Com prática você vai melhorar!';
    } else {
      stars = '💪';
      message = 'Você está aprendendo. Tente de novo!';
    }

    document.getElementById('finish-stars').textContent = stars;
    document.getElementById('finish-message').textContent = message;
    this.tocarSom('finish');
    this.criarConfete();
  },

  mostrarAprender() {
    this.mostrarTela('tela-aprender');
  },

  voltarInicio() {
    this.pararTimer();
    this.mostrarTela('tela-inicial');
  },

  obterCtxAudio() {
    if (!this.ctxAudio) {
      this.ctxAudio = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctxAudio.state === 'suspended') {
      this.ctxAudio.resume();
    }
    return this.ctxAudio;
  },

  tocarNota(ctx, freq, start, duration, type, vol) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(vol || 0.12, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration);
  },

  tocarSom(type) {
    if (!this.somAtivado) return;
    try {
      const ctx = this.obterCtxAudio();
      const t = ctx.currentTime;

      if (type === 'correct') {
        this.tocarNota(ctx, 523.25, t, 0.15, 'sine', 0.13);
        this.tocarNota(ctx, 659.25, t + 0.1, 0.15, 'sine', 0.13);
        this.tocarNota(ctx, 783.99, t + 0.2, 0.25, 'sine', 0.14);
        this.tocarNota(ctx, 1046.50, t + 0.3, 0.35, 'sine', 0.12);
      } else if (type === 'wrong') {
        this.tocarNota(ctx, 392, t, 0.2, 'triangle', 0.1);
        this.tocarNota(ctx, 349.23, t + 0.15, 0.2, 'triangle', 0.1);
        this.tocarNota(ctx, 329.63, t + 0.3, 0.35, 'triangle', 0.09);
      } else if (type === 'click') {
        this.tocarNota(ctx, 880, t, 0.04, 'sine', 0.06);
      } else if (type === 'start') {
        this.tocarNota(ctx, 523.25, t, 0.12, 'sine', 0.1);
        this.tocarNota(ctx, 659.25, t + 0.1, 0.12, 'sine', 0.1);
        this.tocarNota(ctx, 783.99, t + 0.2, 0.12, 'sine', 0.1);
        this.tocarNota(ctx, 1046.50, t + 0.3, 0.25, 'sine', 0.12);
      } else if (type === 'finish') {
        [523, 587, 659, 698, 784, 880, 988, 1047].forEach((f, i) => {
          this.tocarNota(ctx, f, t + i * 0.08, 0.2, 'sine', 0.1);
        });
      }
    } catch (e) {
      // Audio not available
    }
  },

  alternarSom() {
    this.somAtivado = !this.somAtivado;
    const btns = document.querySelectorAll('#btn-som, #btn-som-inicio');
    btns.forEach(btn => {
      btn.textContent = this.somAtivado ? '🔊 Som' : '🔇 Som';
      btn.classList.toggle('muted', !this.somAtivado);
    });
    if (this.somAtivado) {
      this.tocarSom('click');
    }
  },

  criarConfete() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FF6B35', '#FFD93D', '#4CAF50', '#3498DB', '#E74C3C', '#9B59B6', '#2ECC71'];

    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6 + Math.random() * 8;
      const left = Math.random() * 100;
      const duration = 1.5 + Math.random() * 2;
      const delay = Math.random() * 0.8;
      const rotation = Math.random() * 360;

      piece.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size * (0.5 + Math.random())}px;
        background: ${color};
        --duration: ${duration}s;
        --delay: ${delay}s;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        transform: rotate(${rotation}deg);
      `;
      container.appendChild(piece);

      setTimeout(() => piece.remove(), (duration + delay) * 1000 + 100);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-play').addEventListener('click', () => {
    game.tocarSom('start');
    game.iniciarJogo();
  });
  document.getElementById('btn-learn').addEventListener('click', () => {
    game.tocarSom('click');
    game.mostrarAprender();
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    game.tocarSom('click');
    game.proximaPergunta();
  });
  document.getElementById('btn-restart').addEventListener('click', () => {
    game.tocarSom('start');
    game.iniciarJogo();
  });
  document.getElementById('btn-home').addEventListener('click', () => {
    game.tocarSom('click');
    game.voltarInicio();
  });
  document.getElementById('btn-home2').addEventListener('click', () => {
    game.tocarSom('click');
    game.voltarInicio();
  });
  document.getElementById('btn-learn-more').addEventListener('click', () => {
    game.tocarSom('click');
    game.mostrarAprender();
  });

  document.getElementById('sobreposicao-feedback').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      game.tocarSom('click');
      game.proximaPergunta();
    }
  });

  document.getElementById('btn-som').addEventListener('click', () => game.alternarSom());
  document.getElementById('btn-som-inicio').addEventListener('click', () => game.alternarSom());
  document.getElementById('btn-sair').addEventListener('click', () => {
    game.tocarSom('click');
    game.voltarInicio();
  });

  document.getElementById('btn-info-pontos').addEventListener('click', () => {
    game.tocarSom('click');
    document.getElementById('sobreposicao-info').classList.add('show');
  });
  document.getElementById('btn-fechar-info').addEventListener('click', () => {
    game.tocarSom('click');
    document.getElementById('sobreposicao-info').classList.remove('show');
  });
  document.getElementById('sobreposicao-info').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      game.tocarSom('click');
      document.getElementById('sobreposicao-info').classList.remove('show');
    }
  });
});
