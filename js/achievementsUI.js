export function showAchievements() {
  const player = window.gameState.players?.[window.gameState.currentPlayerIndex] || window.gameState.profile;
  const unlocked = player.stats?.achievements || [];
  const container = document.getElementById('achievementsList');
  container.innerHTML = '';

  window.achievementList.forEach(a => {
    const div = document.createElement('div');
    div.className = 'achievement-card';
    const isUnlocked = unlocked.includes(a.id);
    div.innerHTML = `
      <div class="achievement-icon">${isUnlocked ? '✅' : '🔒'}</div>
      <div class="achievement-info">
        <strong>${a.title}</strong>
        <p>${isUnlocked ? a.description : 'Necunoscut...'}</p>
      </div>
    `;
    container.appendChild(div);
  });

  document.getElementById('achievementsModal').classList.remove('hidden');
}

export function closeAchievements() {
  document.getElementById('achievementsModal').classList.add('hidden');
}
