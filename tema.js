(() => {
  // Apply the saved theme before paint; the reference uses midnight panels by default.
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('fernanda-tema');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch { /* The design remains usable when storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
})();
