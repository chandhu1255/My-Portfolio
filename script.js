// ================================
// MOBILE NAVIGATION TOGGLE
// ================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ================================
// SCROLL PROGRESS BAR
// ================================
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ================================
// FADE-IN SECTIONS ON SCROLL
// ================================
const fadeInSections = document.querySelectorAll('.fade-in-section');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
});

// ================================
// PROJECT CARD 3D TILT EFFECT
// ================================
const projectCards = document.querySelectorAll('.project-tilt');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ================================
// MOBILE FAB BUTTON VISIBILITY
// ================================
const mobileFab = document.getElementById('mobileFab');

// Show/hide FAB on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        mobileFab.style.display = 'flex';
    } else {
        mobileFab.style.display = 'none';
    }
});

// Scroll to top on FAB click
mobileFab.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// TERMINAL ANIMATION
// ================================
const terminalContent = document.getElementById('terminalContent');
const terminalLines = [
    { text: '<span class="terminal-prompt">$</span> python train_model.py --dataset faces_500', delay: 0 },
    { text: 'Initializing CNN architecture...', delay: 800 },
    { text: 'Loading training data: 500 images', delay: 1600 },
    { text: 'Training on GPU [NVIDIA CUDA 11.8]', delay: 2400 },
    { text: 'Epoch 47/50 ████████████░ 94.2% accuracy', delay: 3400 },
    { text: '<span class="terminal-success">✓ Model saved to ./models/face_rec_v2.pth</span>', delay: 4400 }
];

function typeTerminal() {
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'terminal-line';
            lineDiv.innerHTML = line.text;
            lineDiv.style.animationDelay = '0s';
            terminalContent.appendChild(lineDiv);

            // Add cursor at the end of last line
            if (index === terminalLines.length - 1) {
                setTimeout(() => {
                    const cursor = document.createElement('span');
                    cursor.className = 'terminal-cursor';
                    terminalContent.appendChild(cursor);
                }, 300);
            }
        }, line.delay);
    });
}

// Start terminal animation after page load
window.addEventListener('load', () => {
    setTimeout(typeTerminal, 1000);
});

// ================================
// MAGNETIC EFFECT ON PRIMARY CTA
// ================================
const primaryCta = document.getElementById('primaryCta');

if (primaryCta) {
    primaryCta.addEventListener('mousemove', (e) => {
        const rect = primaryCta.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        primaryCta.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    primaryCta.addEventListener('mouseleave', () => {
        primaryCta.style.transform = 'translate(0, 0)';
    });
}

// ================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});