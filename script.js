// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create mailto link for email submission
        const mailtoLink = `mailto:mdtareqmia25@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
        alert('Thank you for your message! Your email client is opening...');
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and content sections
document.querySelectorAll('.skill-card, .project-card, .timeline-item, .leadership-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add scroll animations for cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight && cardBottom > 0) {
            card.style.opacity = '1';
        }
    });
});

// Smooth scroll to top on page load if there's a hash
if (window.location.hash) {
    setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

// Add active state to current page
document.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash;
    if (currentHash) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    }
});

// Enhanced interactivity for skill tags
const skillTags = document.querySelectorAll('.tag, .tech-tag');
skillTags.forEach(tag => {
    tag.style.cursor = 'default';
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });
    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Initialize Intersection Observer for all elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        sectionObserver.observe(el);
    });
});

// Print resume functionality
const addPrintButton = () => {
    const header = document.querySelector('.hero');
    const printBtn = document.createElement('button');
    printBtn.textContent = 'Print Resume';
    printBtn.className = 'btn btn-secondary';
    printBtn.style.marginTop = '1rem';
    printBtn.addEventListener('click', () => {
        window.print();
    });
    // Optionally add to a print menu (commented out to avoid cluttering UI)
    // header.appendChild(printBtn);
};

// Call print button on load
// addPrintButton();

// Smooth number counting animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 30;
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = counter.textContent;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
};

document.addEventListener('DOMContentLoaded', animateCounters);

// Add copy to clipboard functionality for email and phone
const addCopyButtons = () => {
    const contactLinks = document.querySelectorAll('.contact-item a');
    
    contactLinks.forEach(link => {
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
            link.style.cursor = 'pointer';
            link.addEventListener('click', function (e) {
                if (this.href.startsWith('mailto:')) {
                    e.preventDefault();
                    const email = this.href.replace('mailto:', '');
                    navigator.clipboard.writeText(email).then(() => {
                        const originalText = this.textContent;
                        this.textContent = 'Copied!';
                        setTimeout(() => {
                            this.textContent = originalText;
                        }, 2000);
                    });
                }
            });
        }
    });
};

document.addEventListener('DOMContentLoaded', addCopyButtons);