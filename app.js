(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    if (themeButton) {
      const action = dark ? 'Activar modo claro' : 'Activar modo oscuro';
      themeButton.setAttribute('aria-label', action);
      themeButton.setAttribute('aria-pressed', String(dark));
      themeButton.title = action;
      const label = themeButton.querySelector('[data-theme-label]');
      if (label) label.textContent = dark ? 'Modo claro' : 'Modo oscuro';
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0d0d0d' : '#fafafa');
  }
  applyTheme(root.dataset.theme || 'dark');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
      try { localStorage.setItem('fernanda-tema', theme); } catch { /* Keep the current theme in memory. */ }
    });
  }
  window.addEventListener('storage', event => {
    if (event.key === 'fernanda-tema' || event.key === null) {
      applyTheme(event.newValue === 'light' ? 'light' : 'dark');
    }
  });

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-navigation]');
  if (header && menuButton && navigation) {
    const setMenu = (open, restoreFocus = false) => {
      header.dataset.menuOpen = String(open);
      menuButton.setAttribute('aria-expanded', String(open));
      const label = menuButton.querySelector('span');
      if (label) label.textContent = open ? 'Cerrar' : 'Menú';
      if (restoreFocus) menuButton.focus();
    };
    header.dataset.enhanced = 'true';
    menuButton.hidden = false;
    setMenu(false);
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
      if (open) navigation.querySelector('a')?.focus();
    });
    header.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
    navigation.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      setMenu(false);
      const target = new URL(link.href);
      if (target.pathname === location.pathname && target.hash) {
        const section = document.getElementById(decodeURIComponent(target.hash.slice(1)));
        if (section) {
          section.setAttribute('tabindex', '-1');
          section.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('click', event => {
      if (!header.contains(event.target) && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false, navigation.contains(document.activeElement));
      }
    });
    document.addEventListener('focusin', event => {
      if (!header.contains(event.target) && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
    window.matchMedia('(min-width: 881px)').addEventListener('change', event => {
      if (event.matches) setMenu(false);
    });
  }

  const filters = document.querySelector('[data-project-filters]');
  const projects = [...document.querySelectorAll('[data-project]')];
  if (filters && projects.length) {
    const status = document.querySelector('[data-project-status]');
    const empty = document.querySelector('.filter-empty');
    const filterButtons = [...filters.querySelectorAll('[data-filter]')];
    function filterProjects(filter) {
      let visible = 0;
      projects.forEach(project => {
        const matches = filter === 'all' || (project.dataset.technologies || '').split(' ').includes(filter);
        project.hidden = !matches;
        if (matches) visible++;
      });
      filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
      if (status) status.textContent = filter === 'all' ? `${visible} proyectos · Catálogo completo` : `${visible} ${visible === 1 ? 'proyecto' : 'proyectos'} en esta selección`;
      if (empty) empty.hidden = visible !== 0;
    }
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (button) filterProjects(button.dataset.filter);
    });
    document.querySelector('[data-reset-filters]')?.addEventListener('click', () => {
      filterProjects('all');
      filterButtons[0]?.focus();
    });
    const revealLinkedProject = () => {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const project = projects.find(item => item.id === id);
      if (!project) return;
      filterProjects('all');
      const details = project.querySelector('details');
      if (details) details.open = true;
      requestAnimationFrame(() => project.scrollIntoView({ block: 'start' }));
    };
    filterProjects('all');
    revealLinkedProject();
    window.addEventListener('hashchange', revealLinkedProject);
  }
})();
