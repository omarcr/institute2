// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on outside click
document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tabs Functionality
const tabLinks = document.querySelectorAll('.tab-links li');
const tabs = document.querySelectorAll('.tab-content .tab');

tabLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.tab-links .active').classList.remove('active');
        document.querySelector('.tab-content .active').classList.remove('active');

        this.classList.add('active');
        tabs[index].classList.add('active');
    });
});

// Filterable Projects Gallery
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    });
});

// Real-time Form Validation for Contact Form
const contactForm = document.getElementById('contact-form');
const contactInputs = contactForm.querySelectorAll('input, textarea');

contactInputs.forEach(input => {
    input.addEventListener('input', function() {
        const errorMessage = input.nextElementSibling;
        if (!input.validity.valid) {
            errorMessage.textContent = 'Please fill out this field correctly.';
        } else {
            errorMessage.textContent = '';
        }
    });
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    contactInputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (!input.validity.valid) {
            errorMessage.textContent = 'Please fill out this field correctly.';
            valid = false;
        } else {
            errorMessage.textContent = '';
        }
    });

    if (valid) {
        // Sanitize inputs and submit the form securely
        alert('Thank you for contacting us!');
        contactForm.reset();
    }
});

// Real-time Validation for Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');

newsletterEmail.addEventListener('input', function() {
    if (!newsletterEmail.validity.valid) {
        newsletterEmail.setCustomValidity('Please enter a valid email address.');
    } else {
        newsletterEmail.setCustomValidity('');
    }
});

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (newsletterEmail.validity.valid) {
        // Sanitize input and submit the form securely
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Language Toggle Implementation
const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'es') {
        window.location.href = 'index_es.html'; // Redirect to Spanish version
    } else {
        window.location.href = 'index.html'; // Redirect to English version
    }
});

// Accessibility: Focus Management for Navigation
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('focus', () => {
        navMenu.classList.add('active');
    });
    link.addEventListener('blur', () => {
        navMenu.classList.remove('active');
    });
});

// Hero Section Animation (Optional Enhancement)
window.addEventListener('load', () => {
    document.querySelector('.hero-title').classList.add('animate');
    document.querySelector('.hero-subtitle').classList.add('animate');
    document.querySelector('.hero-cta').classList.add('animate');
});
