   const ctx = document.getElementById('progressChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['E-commerce', 'App Clínica', 'Sistema Hortelãrio'],
        datasets: [{
          label: 'Progresso (%)',
          data: [80, 40, 20],
          backgroundColor: [
            'rgba(0, 255, 0, 0.7)',
            'rgba(0, 200, 0, 0.7)',
            'rgba(0, 150, 0, 0.7)'
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });




    // Configuração do gráfico de estoque
const estoqueCtx = document.getElementById('chartEstoque').getContext('2d');
new Chart(estoqueCtx, {
  type: 'doughnut',
  data: {
    labels: ['Carente', 'Moderado', 'Abastecido'],
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: ['#ff0000', '#ffcc00', '#00ff00']
    }]
  },
  options: { plugins: { legend: { labels: { color: '#00ff00' } } } }
});

// Configuração do gráfico de atendimento
const atendimentoCtx = document.getElementById('chartAtendimento').getContext('2d');
new Chart(atendimentoCtx, {
  type: 'bar',
  data: {
    labels: ['Satisfeitos', 'Insatisfeitos', 'A Melhorar'],
    datasets: [{
      data: [60, 20, 20],
      backgroundColor: ['#00ff00', '#ff0000', '#ffcc00']
    }]
  },
  options: {
    scales: { y: { beginAtZero: true, max: 100 } },
    plugins: { legend: { labels: { color: '#00ff00' } } }
  }
});

const usuariosCtx = document.getElementById('chartUsuarios').getContext('2d');
    new Chart(usuariosCtx, {
      type: 'doughnut',
      data: {
        labels: ['João', 'Maria', 'Lucas', 'Ana'],
        datasets: [{
          label: 'Usuários',
          data: [25, 30, 20, 25],
          backgroundColor: ['#00ff00', '#00cc00', '#009900', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });

    const servicosCtx = document.getElementById('chartServicos').getContext('2d');
    new Chart(servicosCtx, {
      type: 'pie',
      data: {
        labels: ['E-commerce', 'App Clínica', 'Hortelário'],
        datasets: [{
          label: 'Serviços',
          data: [50, 30, 20],
          backgroundColor: ['#00ff00', '#00cc00', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });

    const cursosCtx = document.getElementById('chartCursos').getContext('2d');
    new Chart(cursosCtx, {
      type: 'doughnut',
      data: {
        labels: ['Full Stack', 'Frontend', 'Backend', 'UX/UI'],
        datasets: [{
          label: 'Vendas de Cursos',
          data: [40, 30, 20, 10],
          backgroundColor: ['#00ff00', '#00cc00', '#009900', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });



// Configuração do gráfico de satisfação dos clientes
const satisfacaoCtx = document.getElementById('chartSatisfacao').getContext('2d');
new Chart(satisfacaoCtx, {
  type: 'pie',
  data: {
    labels: ['Satisfeitos', 'Neutros', 'Insatisfeitos'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#00ff00', '#ffcc00', '#ff0000']
    }]
  },
  options: { plugins: { legend: { labels: { color: '#00ff00' } } } }
});
