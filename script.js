// ================================
// Dark mode toggle with persistence
// ================================

const toggle = document.getElementById('dark-toggle');

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (toggle) toggle.textContent = 'light mode';
} else {
  if (toggle) toggle.textContent = 'dark mode';
}

// Toggle theme on click
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    toggle.textContent = isDark ? 'light mode' : 'dark mode';

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
