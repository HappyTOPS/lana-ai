// Interactive animations and effects

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Typing effect for hero text
    const heroText = document.querySelector('.hero p');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';
        let i = 0, lastTime = 0;
        const interval = 40;
        
        function typeWriter(time) {
            if (!lastTime) lastTime = time;
            if (time - lastTime >= interval) {
                if (i < originalText.length) {
                    heroText.textContent += originalText.charAt(i);
                    i++;
                    lastTime = time;
                } else {
                    return;
                }
            }
            requestAnimationFrame(typeWriter);
        }
        
        requestAnimationFrame(typeWriter);
    }

    // Add click effect for contact buttons
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary')) {
                alert('Открываем Telegram...');
            } else {
                alert('Открываем Signal...');
            }
        });
    });

    // Console message for developers
    console.log('%cLana - Ваш AI Ассистент', 'color: #764ba2; font-size: 18px; font-weight: bold;');
    console.log('Создано специально для Альбы ❤️');
});
