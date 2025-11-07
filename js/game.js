export function initProfile() {
  const createBtn = document.getElementById('create-profile-btn');
  const importBtn = document.getElementById('import-profile-btn');
  const importFile = document.getElementById('import-profile-file');

  createBtn.addEventListener('click', () => {
    const name = document.getElementById('new-profile-name').value.trim();
    if (!name) return alert("Introdu un nume valid.");
    window.gameState = createProfile(name);
    saveProfile();
    showModeSelector();
  });

  importBtn.addEventListener('click', () => {
    const file = importFile.files[0];
    if (!file) return alert("Selectează un fișier JSON.");
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        const name = prompt("Nume pentru profilul importat:");
        localStorage.setItem(`geoDuelProfile_${name}`, JSON.stringify(data));
        showProfileSelection();
      } catch {
        alert("Fișier invalid.");
      }
    };
    reader.readAsText(file);
  });

  showProfileSelection();
}

function createProfile(name) {
  return {
    profile: {
      name,
      score: 0,
      conquered: [],
      achievements: {},
      stats: { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, timePlayed: 0 },
      theme: 'classic'
    }
  };
}

function saveProfile() {
  const name = window.gameState.profile.name;
  localStorage.setItem(`geoDuelProfile_${name}`, JSON.stringify(window.gameState.profile));
}

function showProfileSelection() {
  const list = document.getElementById('saved-profiles-list');
  list.innerHTML = '';
  for (let key in localStorage) {
    if (key.startsWith('geoDuelProfile_')) {
      const name = key.replace('geoDuelProfile_', '');
      const li = document.createElement('li');
      const selectBtn = document.createElement('button');
      selectBtn.textContent = name;
      selectBtn.className = 'btn btn--secondary';
      selectBtn.onclick = () => {
        window.gameState = { profile: JSON.parse(localStorage.getItem(key)) };
        showModeSelector();
      };
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '🗑️';
      deleteBtn.className = 'btn btn--danger';
      deleteBtn.onclick = () => {
        if (confirm(`Ștergi profilul "${name}"?`)) {
          localStorage.removeItem(key);
          showProfileSelection();
        }
      };
      li.append(selectBtn, deleteBtn);
      list.appendChild(li);
    }
  }
}

function showModeSelector() {
  document.getElementById('profile-selection-screen').classList.add('hidden');
  document.getElementById('mode-selector').classList.remove('hidden');
  document.body.className = `theme-${window.gameState.profile.theme}`;
}