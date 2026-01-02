// ======================================
// THEME TOGGLE
// ======================================
function toggleTheme() {
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        // Switch to Light Mode
        body.classList.remove('bg-gradient-to-br', 'from-taupe-950', 'via-taupe-900', 'to-taupe-800', 'text-taupe-100');
        body.classList.add('bg-gradient-to-br', 'from-taupe-50', 'via-taupe-100', 'to-taupe-200', 'text-taupe-900');
        navbar.classList.remove('bg-taupe-950/80');
        navbar.classList.add('bg-taupe-50/80');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to Dark Mode
        body.classList.remove('bg-gradient-to-br', 'from-taupe-50', 'via-taupe-100', 'to-taupe-200', 'text-taupe-900');
        body.classList.add('bg-gradient-to-br', 'from-taupe-950', 'via-taupe-900', 'to-taupe-800', 'text-taupe-100');
        navbar.classList.remove('bg-taupe-50/80');
        navbar.classList.add('bg-taupe-950/80');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme();
    }
});

// ======================================
// MOBILE MENU TOGGLE
// ======================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });
});

// ======================================
// PORTFOLIO FILTER
// ======================================
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('bg-gradient-to-r', 'from-taupe-500', 'to-taupe-600', 'text-white', 'border-transparent');
        btn.classList.add('bg-taupe-500/10', 'border', 'border-taupe-500/20', 'text-taupe-100');
    });
    
    event.target.classList.remove('bg-taupe-500/10', 'border', 'border-taupe-500/20', 'text-taupe-100');
    event.target.classList.add('bg-gradient-to-r', 'from-taupe-500', 'to-taupe-600', 'text-white', 'border-transparent');
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
        }
    });
}

// ======================================
// SMOOTH SCROLL WITH OFFSET
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ======================================
// NAVBAR SCROLL EFFECT
// ======================================
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('shadow-lg');
    } else {
        navbar.classList.add('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// ======================================
// ACTIVE NAV LINK ON SCROLL
// ======================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-taupe-500');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-taupe-500');
        }
    });
});

// ======================================
// SKILL PROGRESS BAR ANIMATION
// ======================================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

document.addEventListener('DOMContentLoaded', animateSkills);

// ======================================
// FORM SUBMISSION
// ======================================
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    console.log('Form Data:', { name, email, message });
    
    // Show success message
    alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
    
    // Reset form
    form.reset();
    
    // In production, you would send this to your backend or email service
    // Example with EmailJS or similar service:
    // emailjs.send('service_id', 'template_id', { name, email, message });
}

// ======================================
// FADE IN ANIMATION ON SCROLL
// ======================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .portfolio-item, section > div');
    elements.forEach(el => observer.observe(el));
});

// ======================================
// TYPING EFFECT FOR HERO (Optional)
// ======================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ======================================
// COUNTER ANIMATION FOR STATS
// ======================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// ======================================
// INITIALIZE ANIMATIONS
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    // Animate stats when in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target, 1500);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    const statNumbers = document.querySelectorAll('.text-3xl.font-bold');
    statNumbers.forEach(stat => statsObserver.observe(stat));
});

// ======================================
// PARALLAX EFFECT (Optional)
// ======================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.float');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ======================================
// CURSOR FOLLOW EFFECT (Optional)
// ======================================
let cursorDot, cursorOutline;

document.addEventListener('DOMContentLoaded', () => {
    // Create custom cursor elements (optional feature)
    // Uncomment if you want custom cursor
    /*
    cursorDot = document.createElement('div');
    cursorOutline = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    window.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.pageX + 'px';
        cursorDot.style.top = e.pageY + 'px';
        
        cursorOutline.style.left = e.pageX + 'px';
        cursorOutline.style.top = e.pageY + 'px';
    });
    */
});

// ======================================
// BACK TO TOP BUTTON
// ======================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    }
});

// ======================================
// LAZY LOADING IMAGES
// ======================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ======================================
// PREVENT DEFAULT FORM SUBMIT
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
});

console.log('🚀 Portfolio Website Loaded Successfully!');