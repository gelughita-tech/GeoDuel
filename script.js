document.addEventListener('DOMContentLoaded', () => {
  // 🔧 Elemente din DOM
  const startGameBtn = document.getElementById('start-game-btn');
  const backToMenuBtn = document.getElementById('back-to-menu-btn');
  const mainMenu = document.getElementById('main-menu');
  const gameScreen = document.getElementById('game-screen');
  const locationDisplay = document.getElementById('current-location');
  const scoreDisplay = document.getElementById('score');
  const tokenMobilitate = document.getElementById('token-mobilitate');
  const tokenRegional = document.getElementById('token-regional');
  const tokenTuristic = document.getElementById('token-turistic');
  const mapButtons = document.getElementById('map-buttons');
  const questionModal = document.getElementById('question-modal');
  const questionOptions = document.getElementById('question-options');
  const timerDisplay = document.getElementById('timer-display');
  const reviewArea = document.getElementById('review-area');
  const reviewImage = document.getElementById('review-image');
  const reviewCaption = document.getElementById('review-caption');

  // 🧩 Stare joc
  const gameState = {
    location: 'RO',
    score: 0,
    tokens: {
      mobilitate: 2,
      regional: 2,
      turistic: 3
    },
    conquered: []
  };

  // 🚀 Start joc
  startGameBtn.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    updateHUD();
    generateMap();
  });

  // 🔙 Revenire la meniu
  backToMenuBtn.addEventListener('click', () => {
    gameScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
  });

  // 🔄 Actualizare interfață
  function updateHUD() {
    locationDisplay.textContent = gameState.location;
    scoreDisplay.textContent = gameState.score;
    tokenMobilitate.textContent = gameState.tokens.mobilitate;
    tokenRegional.textContent = gameState.tokens.regional;
    tokenTuristic.textContent = gameState.tokens.turistic;
  };

  // 🗺️ Generare harta
  const countries = ['RO', 'FR', 'DE', 'IT', 'ES', 'PL', 'GR'];
  function generateMap() {
    mapButtons.innerHTML = '';
    countries.forEach(code => {
