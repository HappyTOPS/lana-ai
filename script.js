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
    if (mobileOverlay.classList.contains('active')) {
        mobileOverlay.classList.remove('active');
    } else {
        mobileOverlay.classList.add('active');
    }
});

mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
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
                const href = link.getAttribute('href');
                link.classList.toggle('active', href === `#${id}`);
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// ============================================
// Scroll Reveal Animations (IntersectionObserver)
// ============================================

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
});

// Observe all elements with .reveal class
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Hero elements: stagger their reveal on page load
const heroElements = document.querySelectorAll('.hero-content > *');
heroElements.forEach((el, i) => {
    el.classList.add('reveal-delay-' + (i + 1));
    // Trigger hero reveal immediately with a small stagger
    setTimeout(() => {
        el.classList.add('reveal-visible');
    }, 100 + i * 150);
});

// Console easter egg
console.log('%c👋 Привет!', 'font-size: 24px; font-weight: bold;');
console.log('%cАльберт | Портфолио', 'color: #8b83ff; font-size: 14px;');
