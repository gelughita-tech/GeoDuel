export function showStats() {
  const player = window.gameState.players?.[window.gameState.currentPlayerIndex] || window.gameState.profile;
  const correct = player.stats?.correctAnswers || 0;
  const wrong = player.stats?.wrongAnswers || 0;
  const conquered = player.conquered?.length || 0;

  const ctx = document.getElementById('statsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Corecte', 'Greșite', 'Țări cucerite'],
      datasets: [{
        label: 'Performanță',
        data: [correct, wrong, conquered],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  document.getElementById('statsModal').classList.remove('hidden');
}

export function closeStats() {
  document.getElementById('statsModal').classList.add('hidden');
}
