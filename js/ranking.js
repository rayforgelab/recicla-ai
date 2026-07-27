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
      await this.db.push({
        nome,
        score,
        acertos,
        total,
        data: Date.now()
      });
    } catch (e) {
      console.warn('Erro ao salvar ranking:', e);
    }
  },

  async carregar(limite = 20) {
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

  exibirNaTela() {
    const container = document.getElementById('ranking-lista');
    const loading = document.getElementById('ranking-loading');
    const erro = document.getElementById('ranking-erro');

    container.innerHTML = '';
    loading.style.display = 'block';
    erro.style.display = 'none';

    this.carregar().then(lista => {
      loading.style.display = 'none';

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
        div.innerHTML = `
          <span class="ranking-pos">${i + 1}º</span>
          <span class="ranking-nome">${escapeHtml(item.nome)}</span>
          <span class="ranking-score">${item.score} pts</span>
        `;
        container.appendChild(div);
      });
    });
  }
};

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}
