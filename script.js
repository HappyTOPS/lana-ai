// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

// Init theme
setTheme(getTheme());

// Mobile Menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');

mobileBtn.addEventListener('click', () => {
    mobileOverlay.classList.toggle('active');
});

mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileOverlay.classList.remove('active'));
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Contact form handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const message = `Спасибо, ${data.get('name')}! Я отвечу на ваш email: ${data.get('email')}`;
    alert(message);
    this.reset();
});

// Scroll spy — highlight active nav link
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === `#${id}`
                    ? 'var(--accent)'
                    : '';
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// Console easter egg
console.log('%c👋 Привет!', 'font-size: 24px; font-weight: bold;');
console.log('%cАльберт | Портфолио', 'color: #8b83ff; font-size: 14px;');
