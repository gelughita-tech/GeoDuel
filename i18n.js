export async function loadLocale(lang = 'ro') {
  const res = await fetch(`locales/${lang}.json`);
  const dict = await res.json();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}
