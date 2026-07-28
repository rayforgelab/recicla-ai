const ranking = {
  db: firebase.database().ref('ranking'),

  getNome() {
    return localStorage.getItem('reciclaAiNome') || '';
  },

  salvarNome(nome) {
    localStorage.setItem('reciclaAiNome', nome.trim());
  },

  precisaDeNome() {
    return !this.getNome();
  },

  async salvar(score, acertos, total) {
    const nome = this.getNome();
    if (!nome) return;

    try {
      const ref = this.db.child(nome);
      const snap = await ref.once('value');
      const existente = snap.val();
      if (!existente || score > existente.score) {
        await ref.set({ nome, score, acertos, total, data: Date.now() });
      }
    } catch (e) {
      console.warn('Erro ao salvar ranking:', e);
    }
  },

  async carregar(limite = 100) {
    try {
      const snapshot = await this.db.orderByChild('score').limitToLast(limite).once('value');
      const dados = snapshot.val();
      if (!dados) return [];
      const lista = Object.values(dados);
      lista.sort((a, b) => b.score - a.score);
      return lista;
    } catch (e) {
      console.warn('Erro ao carregar ranking:', e);
      return null;
    }
  },

  mostrarLoading(el) {
    el.innerHTML = '<div class="spinner"></div>';
  },

  exibirNaTela() {
    const container = document.getElementById('ranking-lista');
    const erro = document.getElementById('ranking-erro');

    container.innerHTML = '';
    erro.style.display = 'none';
    this.mostrarLoading(container);

    this.carregar().then(lista => {
      container.innerHTML = '';
      if (lista === null) {
        erro.style.display = 'block';
        erro.textContent = 'Ranking indisponível no momento.';
        return;
      }
      if (lista.length === 0) {
        erro.style.display = 'block';
        erro.textContent = 'Nenhuma pontuação registrada ainda. Seja o primeiro!';
        return;
      }
      lista.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'ranking-item';
        if (i === 0) div.classList.add('ranking-top1');
        else if (i === 1) div.classList.add('ranking-top2');
        else if (i === 2) div.classList.add('ranking-top3');
        div.innerHTML = `
          <span class="ranking-pos">${i + 1}º</span>
          <span class="ranking-nome">${escapeHtml(item.nome)}</span>
          <span class="ranking-score">${item.score} pts</span>
        `;
        container.appendChild(div);
      });
    });
  },

  // ============== LOCAL RANKING ==============

  LOCAL_KEY: 'reciclaAiRankingLocal',

  salvarLocal(score, acertos, total) {
    const nome = this.getNome();
    if (!nome) return;

    const dados = this.carregarLocal();
    const existente = dados[nome];
    if (!existente || score > existente.score) {
      dados[nome] = { nome, score, acertos, total, data: Date.now() };
      localStorage.setItem(this.LOCAL_KEY, JSON.stringify(dados));
    }
  },

  carregarLocal() {
    try {
      return JSON.parse(localStorage.getItem(this.LOCAL_KEY)) || {};
    } catch {
      return {};
    }
  },

  exibirLocalNaTela() {
    const container = document.getElementById('local-lista');
    const erro = document.getElementById('local-erro');

    container.innerHTML = '';
    erro.style.display = 'none';
    this.mostrarLoading(container);

    setTimeout(() => {
      container.innerHTML = '';
      const dados = this.carregarLocal();
      const lista = Object.values(dados);

      if (lista.length === 0) {
        erro.style.display = 'block';
        erro.textContent = 'Nenhuma pontuação registrada ainda. Vá jogar!';
        return;
      }

      lista.sort((a, b) => b.score - a.score);
      lista.slice(0, 100).forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'ranking-item';
        if (i === 0) div.classList.add('ranking-top1');
        else if (i === 1) div.classList.add('ranking-top2');
        else if (i === 2) div.classList.add('ranking-top3');
        div.innerHTML = `
          <span class="ranking-pos">${i + 1}º</span>
          <span class="ranking-nome">${escapeHtml(item.nome)}</span>
          <span class="ranking-score">${item.score} pts</span>
        `;
        container.appendChild(div);
      });
    }, 300);
  }
};

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}
