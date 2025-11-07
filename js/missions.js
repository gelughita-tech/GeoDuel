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

  if (mission.targets) {
    const conquered = player.conquered || [];
    const matched = conquered.filter(c => mission.targets.includes(c));
    if (matched.length >= mission.targets.length) {
      unlockMission(mission);
    }
  }

  if (mission.condition) {
    const correct = player.stats?.correctAnswers || 0;
    if (eval(mission.condition)) {
      unlockMission(mission);
    }
  }
}

function unlockMission(mission) {
  if (!player.stats.missionsCompleted) player.stats.missionsCompleted = [];
  if (!player.stats.missionsCompleted.includes(mission.id)) {
    player.stats.missionsCompleted.push(mission.id);
    playSound('achievement');
    alert(`🎉 Misiune completată: ${mission.title}`);
  }
}

function updateMissionHUD() {
  const mission = window.gameState.mission;
  const el = document.getElementById('missionDisplay');
  if (mission) el.textContent = `🎯 Misiune: ${mission.title}`;
}
