export function initThemeSelector() {
  const selector = document.getElementById('themeSelector');
  const savedTheme = localStorage.getItem('geoTheme') || 'classic';
  applyTheme(savedTheme);
  selector.value = savedTheme;

  selector.addEventListener('change', () => {
    const selected = selector.value;
    applyTheme(selected);
    localStorage.setItem('geoTheme', selected);
    playSound('click');
  });
}

export function applyTheme(theme) {
  document.body.className = `theme-${theme}`;
}
