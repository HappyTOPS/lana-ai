// ============================================
// Translations
// ============================================
const translations = {
    hy: {
        site_title: 'Ալբերտ | Պորտֆոլիո',
        nav_logo: 'Ալբերտ',
        nav_experience: 'Փորձ',
        nav_skills: 'Հմտություններ',
        nav_projects: 'Նախագծեր',
        nav_contact: 'Կապ',
        hero_greeting: 'Բարև բոլորին, ես',
        hero_title: 'Արտադրանքի ինժեներ',
        hero_desc: 'Թվային արտադրանք եմ ստեղծում գաղափարից մինչև թողարկում: Գրում եմ կոդ, նախագծում եմ ճարտարապետություն, ավտոմատացնում եմ գործընթացները:',
        hero_cta: 'Կապ հաստատել',
        hero_projects: 'Նախագծեր',
        exp_title: 'Աշխատանքային փորձ',
        exp_1_company: 'Ընկերության անուն',
        exp_1_role: 'Պաշտոն',
        exp_1_date: '2023 — այսօր',
        exp_1_duty_1: 'Վեբ հավելվածների մշակում React / Next.js-ով',
        exp_1_duty_2: 'AI ֆունկցիաների ինտեգրացիա՝ RAG, LLM ագենտներ, սեմանտիկ որոնում',
        exp_1_duty_3: 'CI/CD, Docker, ենթակառուցվածքի կարգավորում',
        exp_2_company: 'Նախկին ընկերություն',
        exp_2_role: 'Պաշտոն',
        exp_2_date: '2021 — 2023',
        exp_2_duty_1: 'SPA-ների ստեղծում React + TypeScript-ով',
        exp_2_duty_2: 'REST API-ների մշակում Node.js / Python-ով',
        exp_2_duty_3: 'Աշխատանք PostgreSQL, Redis, WebSockets-ի հետ',
        skills_title: 'Հմտություններ',
        projects_title: 'Նախագծեր',
        project_1_desc: 'Խելացի օգնական RAG-ով և Telegram-ի ինտեգրացիայով',
        project_2_desc: 'Վեբ հավելված Next.js + TypeScript-ով',
        project_3_desc: 'Գործիքներ ավտոմատացման և DevOps-ի համար',
        chat_title: 'Առցանց զրույց',
        chat_welcome: 'Բարև! Ես Ալբերտի առցանց օգնականն եմ: Գրեք ինձ, և ես կփոխանցեմ ձեր հաղորդագրությունը:',
        chat_placeholder: 'Գրեք հաղորդագրություն...',
        chat_auto_reply: 'Շնորհակալություն հաղորդագրության համար: Ես շուտով կպատասխանեմ:',
        chat_send: 'Ուղարկել',
        footer_name: 'Ալբерт',
        footer_made: 'Ստեղծված է ❤️-ով'
    },
    ru: {
        site_title: 'Альберт | Портфолио',
        nav_logo: 'Альберт',
        nav_experience: 'Опыт',
        nav_skills: 'Навыки',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',
        hero_greeting: 'Всем привет, я',
        hero_title: 'Продуктовый инженер',
        hero_desc: 'Строю цифровые продукты от идеи до релиза. Пишу код, проектирую архитектуру, автоматизирую процессы.',
        hero_cta: 'Связаться',
        hero_projects: 'Проекты',
        exp_title: 'Опыт работы',
        exp_1_company: 'Название компании',
        exp_1_role: 'Должность',
        exp_1_date: '2023 — Настоящее время',
        exp_1_duty_1: 'Разработка и поддержка веб-приложений на React / Next.js',
        exp_1_duty_2: 'Интеграция AI-функций: RAG, LLM-агенты, семантический поиск',
        exp_1_duty_3: 'CI/CD, Docker, настройка инфраструктуры',
        exp_2_company: 'Прошлая компания',
        exp_2_role: 'Должность',
        exp_2_date: '2021 — 2023',
        exp_2_duty_1: 'Создание SPA на React + TypeScript',
        exp_2_duty_2: 'Разработка REST API на Node.js / Python',
        exp_2_duty_3: 'Работа с PostgreSQL, Redis, WebSockets',
        skills_title: 'Навыки',
        projects_title: 'Проекты',
        project_1_desc: 'Умный ассистент с RAG и интеграцией Telegram',
        project_2_desc: 'Веб-приложение на Next.js + TypeScript',
        project_3_desc: 'Инструменты для автоматизации и DevOps',
        chat_title: 'Онлайн чат',
        chat_welcome: 'Привет! Я онлайн-помощник Альберта. Напишите мне, и я передам ваше сообщение.',
        chat_placeholder: 'Напишите сообщение...',
        chat_auto_reply: 'Спасибо за сообщение! Я скоро отвечу.',
        chat_send: 'Отправить',
        footer_name: 'Альберт',
        footer_made: 'Сделано с ❤️'
    },
    en: {
        site_title: 'Albert | Portfolio',
        nav_logo: 'Albert',
        nav_experience: 'Experience',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        hero_greeting: 'Hi everyone, I\'m',
        hero_title: 'Product Engineer',
        hero_desc: 'Building digital products from idea to release. Writing code, designing architecture, automating processes.',
        hero_cta: 'Get in Touch',
        hero_projects: 'Projects',
        exp_title: 'Experience',
        exp_1_company: 'Company Name',
        exp_1_role: 'Position',
        exp_1_date: '2023 — Present',
        exp_1_duty_1: 'Developing and maintaining web apps with React / Next.js',
        exp_1_duty_2: 'Integrating AI features: RAG, LLM agents, semantic search',
        exp_1_duty_3: 'CI/CD, Docker, infrastructure setup',
        exp_2_company: 'Previous Company',
        exp_2_role: 'Position',
        exp_2_date: '2021 — 2023',
        exp_2_duty_1: 'Building SPAs with React + TypeScript',
        exp_2_duty_2: 'Developing REST APIs with Node.js / Python',
        exp_2_duty_3: 'Working with PostgreSQL, Redis, WebSockets',
        skills_title: 'Skills',
        projects_title: 'Projects',
        project_1_desc: 'Smart assistant with RAG and Telegram integration',
        project_2_desc: 'Web application with Next.js + TypeScript',
        project_3_desc: 'Automation and DevOps tools',
        chat_title: 'Online Chat',
        chat_welcome: 'Hi! I\'m Albert\'s online assistant. Send me a message and I\'ll pass it along.',
        chat_placeholder: 'Type a message...',
        chat_auto_reply: 'Thanks for your message! I\'ll get back to you soon.',
        chat_send: 'Send',
        footer_name: 'Albert',
        footer_made: 'Made with ❤️'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update lang attribute
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('lang', lang);
}

// ============================================
// Theme Toggle
// ============================================
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

// ============================================
// Language Switcher
// ============================================
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

// Init language
const savedLang = localStorage.getItem('lang') || 'ru';
setLanguage(savedLang);

// ============================================
// Mobile Menu
// ============================================
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');

mobileBtn.addEventListener('click', () => {
    mobileOverlay.classList.toggle('active');
});

mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
    });
});

// Also close mobile menu when clicking lang switcher inside it
mobileOverlay.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Don't close, just keep it open for lang switching
    });
});

// ============================================
// Smooth scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Chat
// ============================================
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

function addMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg chat-msg-' + type;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'chat-msg-content';
    contentDiv.textContent = text;
    msgDiv.appendChild(contentDiv);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'chat-timestamp';
    const now = new Date();
    timeDiv.textContent = now.getHours().toString().padStart(2, '0') + ':' +
                          now.getMinutes().toString().padStart(2, '0');
    msgDiv.appendChild(timeDiv);

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    // Auto-reply placeholder
    setTimeout(() => {
        const t = translations[currentLang];
        addMessage(t.chat_auto_reply, 'bot');
    }, 800);
}

chatSendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// ============================================
// Scroll spy
// ============================================
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

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Hero elements stagger
const heroElements = document.querySelectorAll('.hero-content > *');
heroElements.forEach((el, i) => {
    el.classList.add('reveal-delay-' + (i + 1));
    setTimeout(() => {
        el.classList.add('reveal-visible');
    }, 100 + i * 150);
});

// Console easter egg
console.log('%c👋 Привет!', 'font-size: 24px; font-weight: bold;');
console.log('%cАльберт | Portfolio', 'color: #8b83ff; font-size: 14px;');
