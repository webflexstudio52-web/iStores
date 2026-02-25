 (function() {
        const hamburger = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.classList.remove('active');
            });
        });

        const fadeElements = document.querySelectorAll('.fade-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -10px 0px' });

        fadeElements.forEach(el => observer.observe(el));

        window.addEventListener('load', () => {
            fadeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        });
    })();