// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 60;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Lazy loading sections with animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const animatedElements = entry.target.querySelectorAll('.animate-left, .animate-right');
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animationDelay = `${index * 0.2}s`;
                    el.style.animationPlayState = 'running';
                }, 100);
            });
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Animate team members on hover
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.transform = 'scale(1.05)';
        member.style.transition = 'transform 0.3s ease';
    });
    member.addEventListener('mouseleave', () => {
        member.style.transform = 'scale(1)';
    });
});

// Update copyright year
function updateCopyrightYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateCopyrightYear);

// New animations and effects

// Floating animation for certain elements
const floatElements = document.querySelectorAll('.float-animation');
floatElements.forEach(el => {
    el.style.animation = `float 4s ease-in-out infinite`;
});

// Scroll indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.classList.add('scroll-indicator');
document.querySelector('.hero').appendChild(scrollIndicator);

// Fade out scroll indicator when scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// Animate sections on scroll
const animateSections = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', animateSections);

// Smooth scroll to top
const scrollToTop = document.createElement('button');
scrollToTop.innerHTML = '&uarr;';
scrollToTop.setAttribute('aria-label', 'Scroll to top');
scrollToTop.classList.add('scroll-to-top');
document.body.appendChild(scrollToTop);

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

// Add hover effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});