// Portfolio Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

// Update toggle state based on current theme
if (savedTheme === 'dark') {
    themeToggle.checked = true;
}

// Theme toggle event listener
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'emerald');
        localStorage.setItem('theme', 'emerald');
    }
    
    // Add transition class for smooth theme change
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
});

// Typing animation for hero text
function typeWriter(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
            element.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else if (isDeleting && charIndex > 0) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deleteSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % texts.length;
                charIndex = 0;
            }
            setTimeout(type, pauseTime);
        }
    }
    
    type();
}

// Initialize typing animation when hero section is visible
const typedTextElement = document.querySelector('.typed-text');
if (typedTextElement) {
    const texts = [
        'Data Analytics Student',
        'AI/ML Enthusiast', 
        'Python Developer',
        'Problem Solver',
        'Innovation Seeker'
    ];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    typeWriter(typedTextElement, texts, 80, 40, 2000);
                }, 800);
                observer.disconnect();
            }
        });
    });
    observer.observe(typedTextElement);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-95', 'backdrop-blur-md');
    } else {
        navbar.classList.remove('bg-opacity-95', 'backdrop-blur-md');
    }
});

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when hero section is visible
const heroTitle = document.querySelector('#home h1');
if (heroTitle) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    typeWriter(heroTitle, "Hi, I'm Pawan Parida", 100);
                }, 500);
                observer.disconnect();
            }
        });
    });
    observer.observe(heroTitle);
}

// Particle animation for hero section
function createParticles() {
    const hero = document.querySelector('#home');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading loading-spinner loading-sm"></span> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} fixed top-20 right-4 z-50 max-w-sm shadow-lg`;
    notification.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>${message}</span>
        <button class="btn btn-sm btn-ghost" onclick="this.parentElement.remove()">✕</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Skill progress animations
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width') || '80%';
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Initialize skill bar animations
animateSkillBars();

// Card tilt effect
function addTiltEffect() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize tilt effect
addTiltEffect();

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'btn btn-primary btn-circle fixed bottom-8 right-8 z-40 opacity-0 transition-opacity duration-300';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.display = 'none';
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
            setTimeout(() => scrollBtn.style.opacity = '1', 10);
        } else {
            scrollBtn.style.opacity = '0';
            setTimeout(() => scrollBtn.style.display = 'none', 300);
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
addScrollToTop();

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

// Add copy functionality to contact info
document.querySelectorAll('.contact-info').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.textContent.trim();
        copyToClipboard(text);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-open').forEach(modal => {
            modal.classList.remove('modal-open');
        });
    }
    
    // Arrow keys for navigation
    if (e.ctrlKey) {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'ArrowDown':
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                break;
        }
    }
});

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance monitoring
logPerformance();

// Add Easter egg
let konami = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konami.push(e.keyCode);
    if (konami.length > konamiCode.length) {
        konami.shift();
    }
    
    if (konami.join('') === konamiCode.join('')) {
        showNotification('🎉 Konami Code activated! You found the Easter egg!', 'success');
        // Add some fun effect
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for Easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        'static/img/profile.jpeg',
        'static/pdf/resume.pdf'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.pdf') ? 'document' : 'image';
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Console message for developers
console.log(`
    🚀 Welcome to Pawan Parida's Portfolio!
    
    Built with:
    - HTML5 & CSS3
    - Tailwind CSS
    - DaisyUI
    - Vanilla JavaScript
    - AOS Animation Library
    
    Feel free to explore the code!
    GitHub: https://github.com/zer-art
`);

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully! 🎉');
    
    // Add loaded class for any CSS transitions
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '👋 Come back! - Pawan Parida Portfolio';
    } else {
        document.title = 'Pawan Parida - Portfolio';
    }
});

// Export functions for external use
window.portfolioUtils = {
    showNotification,
    copyToClipboard,
    typeWriter
};