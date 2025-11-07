import { initProfile, saveProfile, loadProfiles } from './profile.js';
import { initGame, startGameMode } from './game.js';
import { generateMap } from './map.js';
import { setupUI, updateHUD, updateAchievements, playSound } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 🔧 Inițializare componente
  initProfile();
  setupUI();
  initGame();

  // 🗺️ Generare hartă
  generateMap(window.gameState, window.handleCountryClick);

  // 🎨 Aplicare temă
  const themeSelect = document.getElementById('profile-theme');
  themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    if (window.gameState?.profile) {
      window.gameState.profile.theme = theme;
      document.body.className = `theme-${theme}`;
      saveProfile();
    }
  });

  // 🎮 Selectare moduri de joc
  document.getElementById('start-game-btn').addEventListener('click', () => {
    window.gameState.mode = 'standard';
    launchGame();
  });
  document.getElementById('explore-mode-btn').addEventListener('click', () => {
    window.gameState.mode = 'explore';
    launchGame();
  });
  document.getElementById('tour-mode-btn').addEventListener('click', () => {
    window.gameState.mode = 'tour';
    launchGame();
  });
  document.getElementById('encyclopedia-mode-btn').addEventListener('click', () => {
    window.gameState.mode = 'encyclopedia';
    launchGame();
  });
  document.getElementById('quiz-mode-btn').addEventListener('click', () => {
    window.gameState.mode = 'quiz';
    launchGame();
  });
  document.getElementById('multiplayer-mode-btn').addEventListener('click', () => {
    window.gameState.mode = 'multiplayer';
    launchGame();
  });

  // 🔍 Mod demo fără profil
  document.getElementById('start-demo-btn').addEventListener('click', () => {
    window.gameState = {
      profile: {
        name: 'Demo',
        score: 0,
        conquered: [],
        achievements: {},
        stats: {
          totalQuestions: 0,
          correctAnswers: 0,
          wrongAnswers: 0,
          timePlayed: 0
        },
        theme: 'classic'
      },
      mode: 'standard'
    };
    document.body.className = 'theme-classic';
    document.getElementById('profile-selection-screen').classList.add('hidden');
    document.getElementById('mode-selector').classList.remove('hidden');
  });

  // 📱 Înregistrare Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('✅ Service Worker înregistrat'))
      .catch(err => console.error('❌ Eroare Service Worker:', err));
  }
});

// 🚀 Lansare joc
function launchGame() {
  document.getElementById('mode-selector').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');
  updateHUD();
  updateAchievements();
  playSound('click');
  startGameMode(window.gameState.mode);
}