export async function loadMissions() {
  const res = await fetch('missions/missions.json');
  const allMissions = await res.json();
  const todayIndex = new Date().getDay() % allMissions.length;
  window.gameState.mission = allMissions[todayIndex];
  updateMissionHUD();
}

export function checkMissionProgress() {
  const mission = window.gameState.mission;
  const player = window.gameState.players?.[window.gameState.currentPlayerIndex] || window.gameState.profile;
  const stats = player.stats || {};
  const conquered = player.conquered || [];

  if (!stats.missionsCompleted) stats.missionsCompleted = [];
  if (stats.missionsCompleted.includes(mission.id)) return;

  let completed = false;

  if (mission.targets) {
    const matched = conquered.filter(c => mission.targets.includes(c));
    completed = matched.length >= mission.targets.length;
  }

  if (mission.condition) {
    try {
      completed = completed || eval(mission.condition);
    } catch (e) {
      console.warn(`Eroare la evaluarea condiției pentru misiune: ${mission.id}`, e);
    }
  }

  if (completed) {
    stats.missionsCompleted.push(mission.id);
    playSound('achievement');
    alert(`🎯 Misiune completată: ${mission.title}`);
  }
}

function updateMissionHUD() {
  const mission = window.gameState.mission;
  const el = document.getElementById('missionDisplay');
  if (mission && el) {
    el.textContent = `🎯 Misiune: ${mission.title}`;
  }
}
