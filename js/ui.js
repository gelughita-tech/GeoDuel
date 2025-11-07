// 🔊 Funcție universală pentru redare sunet
export function playSound(name) {
  const audio = new Audio(`../assets/audio/${name}.mp3`);
  audio.volume = 0.6;
  audio.play();
}

// 🧠 Actualizează HUD-ul cu numele profilului și scorul
export function updateHUD() {
  const loc = document.getElementById('locationDisplay');
  const score = document.getElementById('scoreDisplay');
  const profile = window.gameState.profile;

  loc.textContent = `🌍 ${profile.name}`;
  score.textContent = `⭐ ${profile.score} P`;
}

// 🎉 Afișează imaginea și explicația după răspuns
export function showReview(image, explanation) {
  const review = document.getElementById('reviewArea');
  const img = document.getElementById('reviewImage');
  const caption = document.getElementById('reviewCaption');

  img.src = image;
  caption.textContent = explanation;
  review.classList.remove('review-area-hidden');
}

// 🏅 Verifică și afișează realizările
export function updateAchievements() {
  const profile = window.gameState.profile;
  const display = document.getElementById('achievement-display');
  const a = profile.achievements;
  const list = [];

  if (!a.firstAnswer && profile.stats.totalQuestions >= 1) {
    a.firstAnswer = true;
    playSound('achievement');
    alert("🏅 Realizare: Prima întrebare!");
  }
  if (!a.fiveCountries && profile.conquered.length >= 5) {
    a.fiveCountries = true;
    playSound('achievement');
    alert("🌍 Realizare: 5 țări cucerite!");
  }
  if (!a.perfectScore && profile.score >= 100) {
    a.perfectScore = true;
    playSound('achievement');
    alert("💯 Realizare: Scor perfect!");
  }

  if (a.firstAnswer) list.push("🏅 Prima întrebare");
  if (a.fiveCountries) list.push("🌍 5 țări cucerite");
  if (a.perfectScore) list.push("💯 Scor perfect");

  display.innerHTML = `<h3>Realizări:</h3><ul>${list.map(r => `<li>${r}</li>`).join('')}</ul>`;
}

// 🎨 Inițializare UI (dacă vrei să adaugi mai multe componente)
export function setupUI() {
  // Poți adăuga aici inițializări suplimentare pentru interfață
}