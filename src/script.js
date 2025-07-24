// Skills data from resume.txt
const skills = [
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python.png', color: 'bg-yellow-100' },
    { name: 'Natural Language Processing', icon: 'https://img.icons8.com/color/48/nlp.png', color: 'bg-blue-100' },
    { name: 'Deep Learning', icon: 'https://img.icons8.com/color/48/artificial-intelligence.png', color: 'bg-purple-100' },
    { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo.png', color: 'bg-blue-100' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png', color: 'bg-orange-100' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png', color: 'bg-blue-100' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png', color: 'bg-yellow-100' },
    { name: 'Django', icon: 'https://img.icons8.com/color/48/django.png', color: 'bg-green-100' },
    { name: 'Object Oriented Programming', icon: 'https://img.icons8.com/color/48/class.png', color: 'bg-gray-100' },
    { name: 'LangChain', icon: 'https://img.icons8.com/color/48/chain.png', color: 'bg-teal-100' },
    { name: 'Pandas', icon: 'https://img.icons8.com/color/48/pandas.png', color: 'bg-pink-100' },
    { name: 'NumPy', icon: 'https://img.icons8.com/color/48/numpy.png', color: 'bg-indigo-100' },
    { name: 'TensorFlow', icon: 'https://img.icons8.com/color/48/tensorflow.png', color: 'bg-orange-100' }
];

// Certifications from resume.txt
const certifications = [
    {
        title: "Object Oriented Programming in Python",
        issuer: "Infosys Springboard",
        date: "Apr 2025"
    },
    {
        title: "Mastering Data Analysis with pandas",
        issuer: "Coursera",
        date: "Apr 2025",
        link: "https://www.coursera.org/account/accomplishments/records/W3Z71AYER30H"
    },
    {
        title: "Introduction to Deep Learning",
        issuer: "Infosys Springboard",
        date: "May 2025"
    },
    {
        title: "Introduction to Artificial Intelligence",
        issuer: "Infosys Springboard",
        date: "May 2025"
    },
    {
        title: "Computer Vision 101",
        issuer: "Infosys Springboard",
        date: "May 2025"
    }
];


// --- Projects from resume.txt (6 total, with links and descriptions) ---
const projects = [
    {
        title: "AI Grammar Tutor",
        desc: "Grammar tutor using Gemini API for LLM, prompt engineering, and FastAPI for backend. Interactive frontend with Tailwind CSS.",
        tags: ["LangChain", "Python", "FastAPI", "Google Gemini", "HTML", "Tailwind CSS", "CSS", "JavaScript"],
        link: "https://github.com/zer-art/grammer",
        bg: "from-blue-100 to-purple-100"
    },
    {
        title: "MySQL Database Chatbot",
        desc: "AI-powered chatbot to query your e-commerce MySQL database using natural language via Streamlit.",
        tags: ["Python", "Google Gemini", "LangChain", "Streamlit", "LLM", "MySQL", "Machine Learning", "NLP"],
        link: "https://github.com/zer-art/Mysql-database-chatbot",
        bg: "from-pink-100 to-red-100"
    },
    {
        title: "Pneumonia Detection",
        desc: "CNN-powered system for early pneumonia diagnosis using chest X-ray images, built with TensorFlow and FastAPI.",
        tags: ["CNN", "Deep Learning", "Python", "Kaggle", "FastAPI", "HTML", "Tailwind CSS", "JavaScript", "TensorFlow", "Machine Learning"],
        link: "https://github.com/zer-art/pneumonia-detection",
        bg: "from-indigo-100 to-blue-200"
    },
    {
        title: "Healthcare Chatbot",
        desc: "Medical chatbot using LangChain, Pinecone, Gemini API, and Streamlit for real-time, verified medical responses.",
        tags: ["LangChain", "Pinecone", "Gemini API", "Streamlit"],
        link: "https://github.com/zer-art/ML_PROJECTS/tree/main/Helthcare-app",
        bg: "from-green-100 to-teal-100"
    },
    {
        title: "Crop & Fertilizer Recommendation",
        desc: "Streamlit app using Decision Tree on soil/environmental data to suggest optimal crops and fertilizers.",
        tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
        link: "https://github.com/zer-art/ML_PROJECTS/tree/main/Crop%20and%20fertilizer%20Recomendation",
        bg: "from-yellow-100 to-orange-100"
    },
    {
        title: "Spam & Not Spam Detection",
        desc: "Spam classifier using BERT embeddings and a custom TensorFlow deep learning model, deployed with Streamlit.",
        tags: ["BERT", "TensorFlow", "Streamlit"],
        link: "https://github.com/zer-art/NLP_PROJECTS/tree/main/SPAM_DETECTION_USING_BERT",
        bg: "from-purple-100 to-pink-100"
    }
];

// Theme toggle functionality
let isDark = false;

function toggleTheme() {
    isDark = !isDark;
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');
    
    if (isDark) {
        body.classList.add('dark');
        themeButton.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        themeButton.textContent = '🌙';
    }
    
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDark = true;
        document.body.classList.add('dark');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
}

// Populate skills grid
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = `${skill.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 skill-item`;
        skillCard.innerHTML = `
            <div class="flex flex-col items-center space-y-3">
                <img src="${skill.icon}" alt="${skill.name}" class="w-12 h-12 object-contain">
                <div class="text-lg font-semibold text-gray-900">${skill.name}</div>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// --- Certifications Section: Pop animation on hover ---
function renderCertifications(showAll = false) {
    const grid = document.getElementById('certifications-grid');
    grid.innerHTML = '';
    const certsToShow = showAll ? certifications : certifications.slice(0, 3);
    certsToShow.forEach(cert => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in certification-card hover:scale-105";
        card.style.cursor = "pointer";
        card.innerHTML = `
            <div class="mb-4">
                <div class="font-bold text-gray-900 text-lg">${cert.title}</div>
                <div class="text-gray-600 text-sm">${cert.issuer}</div>
                <div class="text-gray-400 text-xs">${cert.date}</div>
            </div>
            ${cert.link ? `<a href="${cert.link}" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm underline">View Certificate</a>` : ''}
        `;
        grid.appendChild(card);
    });
    // Toggle button text
    const btn = document.getElementById('cert-view-toggle');
    btn.textContent = showAll ? "View Less" : "View More";
    btn.onclick = () => renderCertifications(!showAll);
}

// --- Projects Section: View More/View Less for 6 projects ---
function populateProjects() {
    const projectsGrid = document.querySelector('#projects .grid');
    projectsGrid.innerHTML = '';
    let showingAll = false;

    function renderProjects(showAll) {
        projectsGrid.innerHTML = '';
        const toShow = showAll ? projects : projects.slice(0, 3);
        toShow.forEach(proj => projectsGrid.appendChild(createProjectCard(proj)));

        // View More/Less button
        const viewDiv = document.createElement('div');
        viewDiv.className = "col-span-full flex justify-center mt-8";
        const btn = document.createElement('button');
        btn.className = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors";
        btn.textContent = showAll ? "View Less" : "View More";
        btn.onclick = () => {
            showingAll = !showingAll;
            renderProjects(showingAll);
        };
        viewDiv.appendChild(btn);
        projectsGrid.appendChild(viewDiv);
    }
    renderProjects(false);
}

function createProjectCard(proj) {
    const card = document.createElement('div');
    card.className = "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in project-card";
    card.innerHTML = `
        <div class="h-48 bg-gradient-to-br ${proj.bg} flex items-center justify-center">
            <span class="text-gray-500">${proj.title}</span>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${proj.title}</h3>
            <p class="text-gray-600 mb-4">${proj.desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${proj.tags.map(tag => `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${tag}</span>`).join('')}
            </div>
            ${proj.link ? `<a href="${proj.link}" class="text-blue-600 hover:text-blue-800 font-medium" target="_blank">View Project →</a>` : ''}
        </div>
    `;
    return card;
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('nav');
    if (!mobileMenuToggle || !nav) return;

    function showMenu() {
        nav.classList.remove('hidden');
        nav.classList.add('flex');
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "64px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.background = "#fff";
        nav.style.zIndex = "100";
        nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
    }
    function hideMenu() {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        nav.style.position = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.width = "";
        nav.style.background = "";
        nav.style.zIndex = "";
        nav.style.boxShadow = "";
    }

    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (nav.classList.contains('hidden')) {
            showMenu();
        } else {
            hideMenu();
        }
    });

    // Hide nav on link click (mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                hideMenu();
            }
        });
    });

    // Hide menu if clicked outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 768 && !nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            hideMenu();
        }
    });

    // On resize, reset nav
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            nav.classList.remove('hidden');
            nav.classList.add('flex');
            nav.style = "";
        } else {
            hideMenu();
        }
    });
}

// --- Hero Section: Responsive photo above text on mobile ---
function adjustHeroLayout() {
    const heroGrid = document.querySelector('#home .grid');
    if (!heroGrid) return;
    if (window.innerWidth < 768) {
        heroGrid.classList.remove('lg:grid-cols-2');
        heroGrid.classList.add('grid-cols-1');
        // Move photo above text
        const photo = heroGrid.children[1];
        if (photo && heroGrid.firstChild !== photo) {
            heroGrid.insertBefore(photo, heroGrid.firstChild);
        }
    } else {
        heroGrid.classList.remove('grid-cols-1');
        heroGrid.classList.add('lg:grid-cols-2');
        // Move text back to first
        const text = heroGrid.querySelector('.space-y-6');
        if (text && heroGrid.firstChild !== text) {
            heroGrid.insertBefore(text, heroGrid.firstChild);
        }
    }
}

// --- DOMContentLoaded: Init everything ---
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    loadTheme();
    
    // Set up theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Populate skills
    populateSkills();
    renderCertifications(false);
    populateProjects();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize contact form
    initContactForm();
    
    console.log('Portfolio loaded successfully!');
});

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('bg-white/95');
        header.classList.remove('bg-white/90');
    } else {
        header.classList.add('bg-white/90');
        header.classList.remove('bg-white/95');
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// --- Responsive hero section on resize ---
window.addEventListener('resize', adjustHeroLayout);
