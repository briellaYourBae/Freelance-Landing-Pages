// ======================================
// THEME TOGGLE - COMPLETE DARK/LIGHT MODE
// ======================================
function toggleTheme() {
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const darkIcon = document.getElementById('theme-icon-dark');
    const lightIcon = document.getElementById('theme-icon-light');
    const mobileMenu = document.getElementById('mobile-menu');
    const footer = document.querySelector('footer');
    
    // Toggle light-mode class
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        // ===== SWITCH TO LIGHT MODE =====
        
        // Body Background & Text
        body.classList.remove('bg-gradient-to-br', 'from-taupe-950', 'via-taupe-900', 'to-taupe-800', 'text-taupe-100');
        body.classList.add('bg-gradient-to-br', 'from-taupe-50', 'via-taupe-100', 'to-taupe-200', 'text-taupe-900');
        
        // Navbar
        navbar.classList.remove('bg-taupe-950/80');
        navbar.classList.add('bg-taupe-50/80', 'border-taupe-300/30');
        
        // Mobile Menu
        if (mobileMenu) {
            mobileMenu.classList.remove('bg-taupe-950/95');
            mobileMenu.classList.add('bg-taupe-50/95');
        }
        
        // Footer
        if (footer) {
            footer.classList.remove('bg-taupe-950/50');
            footer.classList.add('bg-taupe-50/80', 'border-taupe-300/30');
        }
        
        // Nav Links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('text-taupe-100');
            link.classList.add('text-taupe-900');
        });
        
        // All Cards
        document.querySelectorAll('.card, [class*="bg-taupe-500/10"]').forEach(card => {
            card.classList.remove('bg-taupe-500/10', 'border-taupe-500/20');
            card.classList.add('bg-white/90', 'border-taupe-300/40');
        });
        
        // All Text with taupe-300 (descriptions)
        document.querySelectorAll('.text-taupe-300').forEach(el => {
            el.classList.remove('text-taupe-300');
            el.classList.add('text-taupe-700', 'light-text');
        });
        
        // All Text with taupe-400 (muted text)
        document.querySelectorAll('.text-taupe-400').forEach(el => {
            el.classList.remove('text-taupe-400');
            el.classList.add('text-taupe-600', 'light-muted');
        });
        
        // Form Inputs
        document.querySelectorAll('input, textarea').forEach(input => {
            input.classList.remove('bg-taupe-500/10', 'border-taupe-500/20', 'text-taupe-100');
            input.classList.add('bg-white/90', 'border-taupe-300/60', 'text-taupe-900');
        });
        
        // Skill Bars Background
        document.querySelectorAll('.skill-bar, [class*="bg-taupe-500/20"]').forEach(bar => {
            if (bar.classList.contains('h-3')) {
                bar.classList.remove('bg-taupe-500/20');
                bar.classList.add('bg-taupe-200');
            }
        });
        
        // Service Icons
        document.querySelectorAll('.service-icon, [class*="from-taupe-500"]').forEach(icon => {
            icon.classList.remove('from-taupe-500', 'to-taupe-600');
            icon.classList.add('from-taupe-600', 'to-taupe-700');
        });
        
        // Theme Icons
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
        
        // Save preference
        localStorage.setItem('theme', 'light');
        
    } else {
        // ===== SWITCH TO DARK MODE =====
        
        // Body Background & Text
        body.classList.remove('bg-gradient-to-br', 'from-taupe-50', 'via-taupe-100', 'to-taupe-200', 'text-taupe-900');
        body.classList.add('bg-gradient-to-br', 'from-taupe-950', 'via-taupe-900', 'to-taupe-800', 'text-taupe-100');
        
        // Navbar
        navbar.classList.remove('bg-taupe-50/80', 'border-taupe-300/30');
        navbar.classList.add('bg-taupe-950/80');
        
        // Mobile Menu
        if (mobileMenu) {
            mobileMenu.classList.remove('bg-taupe-50/95');
            mobileMenu.classList.add('bg-taupe-950/95');
        }
        
        // Footer
        if (footer) {
            footer.classList.remove('bg-taupe-50/80', 'border-taupe-300/30');
            footer.classList.add('bg-taupe-950/50');
        }
        
        // Nav Links
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('text-taupe-900');
            link.classList.add('text-taupe-100');
        });
        
        // All Cards
        document.querySelectorAll('.card, [class*="bg-white/90"]').forEach(card => {
            card.classList.remove('bg-white/90', 'border-taupe-300/40');
            card.classList.add('bg-taupe-500/10', 'border-taupe-500/20');
        });
        
        // Restore taupe-300 text
        document.querySelectorAll('.light-text').forEach(el => {
            el.classList.remove('text-taupe-700', 'light-text');
            el.classList.add('text-taupe-300');
        });
        
        // Restore taupe-400 text
        document.querySelectorAll('.light-muted').forEach(el => {
            el.classList.remove('text-taupe-600', 'light-muted');
            el.classList.add('text-taupe-400');
        });
        
        // Form Inputs
        document.querySelectorAll('input, textarea').forEach(input => {
            input.classList.remove('bg-white/90', 'border-taupe-300/60', 'text-taupe-900');
            input.classList.add('bg-taupe-500/10', 'border-taupe-500/20', 'text-taupe-100');
        });
        
        // Skill Bars Background
        document.querySelectorAll('[class*="bg-taupe-200"]').forEach(bar => {
            if (bar.classList.contains('h-3')) {
                bar.classList.remove('bg-taupe-200');
                bar.classList.add('bg-taupe-500/20');
            }
        });
        
        // Service Icons
        document.querySelectorAll('[class*="from-taupe-600"]').forEach(icon => {
            icon.classList.remove('from-taupe-600', 'to-taupe-700');
            icon.classList.add('from-taupe-500', 'to-taupe-600');
        });
        
        // Theme Icons
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
        
        // Save preference
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        toggleTheme();
    }
    
    // Add smooth transition to all elements
    document.body.style.transition = 'all 0.3s ease';
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
// FORM SUBMISSION WITH ANIMATION
// ======================================
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Add loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    `;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        console.log('Form Data:', { name, email, subject, message });
        
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div class="flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.</span>
            </div>
        `;
        form.appendChild(successDiv);
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = 'Kirim Pesan';
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
    }, 1500);
    
    // In production, use EmailJS or similar:
    // emailjs.send('service_id', 'template_id', { name, email, subject, message })
    //   .then(() => { /* success */ })
    //   .catch(() => { /* error */ });
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
// INITIALIZE ANIMATIONS - ENHANCED
// ======================================
document.addEventListener('DOMContentLoaded', () => {
    // Animate stats when in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const textContent = entry.target.textContent.trim();
                const target = parseInt(textContent);
                
                if (!isNaN(target)) {
                    animateCounter(entry.target, target, 1500);
                    entry.target.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });
    
    // Target all stat numbers in hero section
    const statNumbers = document.querySelectorAll('#home .text-3xl.font-bold');
    statNumbers.forEach(stat => statsObserver.observe(stat));
    
    // Initialize portfolio filter on load
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
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
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('footer form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            // Show success message
            const button = form.querySelector('button');
            const originalText = button.textContent;
            button.textContent = '✓ Subscribed!';
            button.classList.add('bg-green-600');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('bg-green-600');
                form.reset();
            }, 3000);
            
            console.log('Newsletter subscription:', email);
        });
    });
});

console.log('🚀 Portfolio Website Loaded Successfully!');
console.log('✨ Dark/Light Mode: Enabled');
console.log('📱 Responsive Design: Active');
console.log('🎨 Animations: Running');
console.log('💼 Made with ❤️ by DevIllustrate');