// Toggle Theme Function
function toggleTheme() {
    const html = document.documentElement;
    const themeIconSun = document.getElementById('theme-icon-sun');
    const themeIconMoon = document.getElementById('theme-icon-moon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeIconSun.classList.remove('hidden');
        themeIconMoon.classList.add('hidden');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeIconSun.classList.add('hidden');
        themeIconMoon.classList.remove('hidden');
    }
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const themeIconSun = document.getElementById('theme-icon-sun');
    const themeIconMoon = document.getElementById('theme-icon-moon');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        if (themeIconSun) themeIconSun.classList.add('hidden');
        if (themeIconMoon) themeIconMoon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        if (themeIconSun) themeIconSun.classList.remove('hidden');
        if (themeIconMoon) themeIconMoon.classList.add('hidden');
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Filter Portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'Semua')) {
            btn.classList.remove('bg-white', 'border-taupe-300', 'text-taupe-900', 'dark:bg-taupe-500/10', 'dark:border-taupe-500/20', 'dark:text-taupe-100');
            btn.classList.add('bg-gradient-to-r', 'from-taupe-500', 'to-taupe-600', 'text-white');
        } else {
            btn.classList.remove('bg-gradient-to-r', 'from-taupe-500', 'to-taupe-600', 'text-white');
            btn.classList.add('bg-white', 'border-taupe-300', 'text-taupe-900', 'dark:bg-taupe-500/10', 'dark:border-taupe-500/20', 'dark:text-taupe-100');
        }
    });
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 50);
        } else {
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Testimonials Scroll Function
function scrollTestimonials(direction) {
    const container = document.getElementById('testimonials-container');
    if (container) {
        const scrollAmount = 400;
        if (direction === 1) {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.remove('opacity-100', 'visible');
                backToTop.classList.add('opacity-0', 'invisible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Form submission for Formspree
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        // Ganti YOUR_FORM_ID dengan Formspree ID Anda
        const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
        contactForm.action = formspreeUrl;
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const button = contactForm.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Mengirim...';
            button.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(formspreeUrl, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    button.textContent = 'Terkirim!';
                    button.classList.add('bg-gradient-to-r', 'from-green-500', 'to-green-600');
                    
                    // Show success message
                    if (formMessage) {
                        formMessage.textContent = 'Pesan Anda telah terkirim. Terima kasih!';
                        formMessage.className = 'success-message';
                        formMessage.classList.remove('hidden');
                    }
                    
                    // Reset form after 2 seconds
                    setTimeout(() => {
                        contactForm.reset();
                        button.textContent = originalText;
                        button.disabled = false;
                        button.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-green-600');
                        if (formMessage) formMessage.classList.add('hidden');
                    }, 3000);
                } else {
                    // Error
                    button.textContent = 'Gagal Mengirim';
                    button.classList.add('bg-gradient-to-r', 'from-red-500', 'to-red-600');
                    
                    if (formMessage) {
                        formMessage.textContent = 'Maaf, terjadi kesalahan. Silakan coba lagi.';
                        formMessage.className = 'bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg mt-4';
                        formMessage.classList.remove('hidden');
                    }
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.classList.remove('bg-gradient-to-r', 'from-red-500', 'to-red-600');
                        if (formMessage) formMessage.classList.add('hidden');
                    }, 3000);
                }
            } catch (error) {
                // Network error
                button.textContent = 'Koneksi Error';
                button.classList.add('bg-gradient-to-r', 'from-red-500', 'to-red-600');
                
                if (formMessage) {
                    formMessage.textContent = 'Koneksi internet bermasalah. Silakan coba lagi.';
                    formMessage.className = 'bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-lg mt-4';
                    formMessage.classList.remove('hidden');
                }
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.classList.remove('bg-gradient-to-r', 'from-red-500', 'to-red-600');
                    if (formMessage) formMessage.classList.add('hidden');
                }, 3000);
            }
        });
    }
}

// Add fade-in animation to elements on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements to animate
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Skills Animation Function
function animateSkillBar(barId, percentId, targetPercent) {
    const bar = document.getElementById(barId);
    const percentText = document.getElementById(percentId);
    
    if (!bar || !percentText) return;
    
    let currentPercent = 0;
    const increment = 1;
    const intervalTime = 30;
    
    const timer = setInterval(() => {
        currentPercent += increment;
        if (currentPercent >= targetPercent) {
            currentPercent = targetPercent;
            clearInterval(timer);
        }
        
        bar.style.width = `${currentPercent}%`;
        percentText.textContent = `${currentPercent}%`;
    }, intervalTime);
}

function animateAllSkills() {
    const skills = [
        { barId: 'html-css-bar', percentId: 'html-css-percent', percent: 95 },
        { barId: 'js-ts-bar', percentId: 'js-ts-percent', percent: 90 },
        { barId: 'react-vue-bar', percentId: 'react-vue-percent', percent: 88 },
        { barId: 'tailwind-bar', percentId: 'tailwind-percent', percent: 92 },
        { barId: 'node-bar', percentId: 'node-percent', percent: 80 },
        { barId: 'illustrator-bar', percentId: 'illustrator-percent', percent: 93 },
        { barId: 'figma-bar', percentId: 'figma-percent', percent: 90 },
        { barId: 'photoshop-bar', percentId: 'photoshop-percent', percent: 85 },
        { barId: 'uiux-bar', percentId: 'uiux-percent', percent: 88 },
        { barId: 'illustration-bar', percentId: 'illustration-percent', percent: 91 }
    ];

    skills.forEach(skill => {
        animateSkillBar(skill.barId, skill.percentId, skill.percent);
    });
}

function setupSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateAllSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        skillsObserver.observe(skillsSection);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Setup all functionalities
    setupSmoothScroll();
    setupBackToTop();
    setupContactForm();
    setupScrollAnimations();
    setupSkillsAnimation();
    
    // Make functions globally available for HTML onclick attributes
    window.toggleTheme = toggleTheme;
    window.toggleMobileMenu = toggleMobileMenu;
    window.filterPortfolio = filterPortfolio;
    window.scrollTestimonials = scrollTestimonials;
});