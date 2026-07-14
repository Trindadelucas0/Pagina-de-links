// ===================================================
// Script.js — Êxito Contabilidade Links Page
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  applyStoredTheme();
});

// ===========================
// Theme (Dark / Light)
// ===========================
function applyStoredTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('exito-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
}
