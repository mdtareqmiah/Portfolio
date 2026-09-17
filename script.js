const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!isExpanded));
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (!targetSelector || targetSelector === '#') {
            return;
        }

        const target = document.querySelector(targetSelector);
        if (!target) {
            return;
        }

        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('active', isActive);
            });
        }
    });
}, { threshold: 0.35 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const mailtoLink = `mailto:mdtareqmia25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
        contactForm.reset();
        alert('Your email client is opening so you can send the message.');
    });
}

const certificateData = [
    { src: 'Img/Cloude_Speech_API.png', title: 'Google Cloud Speech API', subtitle: 'Google Cloud' },
    { src: 'Img/Accelerated_3day.jpeg', title: 'Accelerated 3-Day Programming Bootcamp', subtitle: 'Workshop' },
    { src: 'Img/VDOAI393-Md._Tareq_Miah_page-0001.jpg', title: 'FutureNation Training', subtitle: 'Video Editing with AI' },
    { src: 'Img/Volunteer_in_2day_Bootcamp.jpeg', title: 'Volunteer in 2-Day Bootcamp', subtitle: 'Certificate of Participation' },
    { src: 'Img/3dayworkshop.jpeg', title: '3-Day Workshop', subtitle: 'Workshop' },
    { src: 'Img/496_Md._Tareq_Miah_Certificate.png', title: 'Certificate', subtitle: 'Profile Achievement' },
    { src: 'Img/BNCC_camp.jpeg', title: 'BNCC Camp', subtitle: 'Training & Development Program' },
    { src: 'Img/SIUICTFEST_23.jpeg', title: 'SIU ICT Fest 2023', subtitle: 'Information & Communication Technology Festival' },
    { src: 'Img/1728-Md._Tareq_Miah__page-0001.jpg', title: 'Certificate', subtitle: 'Verified Achievement' }
];

const certificateGallery = document.getElementById('certificatesGallery');
const certificateModal = document.getElementById('certificateModal');
const certificateModalImage = document.getElementById('certificateModalImage');
const certificateModalTitle = document.getElementById('certificateModalTitle');

if (certificateGallery) {
    certificateGallery.innerHTML = certificateData.map((certificate) => `
        <div class="certificate-item">
            <div class="certificate-image">
                <img src="${certificate.src}" alt="${certificate.title} certificate" loading="lazy">
            </div>
            <div class="certificate-content">
                <h4>${certificate.title}</h4>
                <p>${certificate.subtitle}</p>
                <button type="button" class="certificate-view-btn" data-src="${certificate.src}" data-title="${certificate.title}">View Certificate</button>
            </div>
        </div>
    `).join('');
}

const openCertificateModal = (src, title) => {
    if (!certificateModal || !certificateModalImage || !certificateModalTitle) {
        return;
    }

    certificateModalImage.src = src;
    certificateModalImage.alt = `${title} certificate`;
    certificateModalTitle.textContent = title;
    certificateModal.classList.add('active');
    certificateModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

const closeCertificateModal = () => {
    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove('active');
    certificateModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.certificate-view-btn');
    if (trigger) {
        openCertificateModal(trigger.dataset.src, trigger.dataset.title);
        return;
    }

    if (event.target.matches('[data-close="true"]') || event.target.closest('.certificate-modal-close')) {
        closeCertificateModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && certificateModal && certificateModal.classList.contains('active')) {
        closeCertificateModal();
    }

    if (event.key === 'Escape' && navMenu) {
        navMenu.classList.remove('active');
    }
});

const revealElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .leadership-item, .certificate-item');
revealElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(18px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
