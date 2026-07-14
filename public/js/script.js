// ===================================================
// Script.js — Êxito Contabilidade Links Page
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
});

// ===========================
// Theme Toggle (Dark / Light)
// ===========================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved preference
  const savedTheme = localStorage.getItem('exito-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('exito-theme', next);
  });
}
