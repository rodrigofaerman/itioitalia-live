// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Mobile menu toggle - for index-novo.html
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Mobile menu toggle - for sobre.html
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuAlt = document.querySelector('.nav-menu');

    if (navToggle && navMenuAlt) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenuAlt.classList.toggle('active');

            // Update aria-expanded
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        const navLinksAlt = navMenuAlt.querySelectorAll('.nav-link');
        navLinksAlt.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenuAlt.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#diagnostico') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.nav-container');

        if (!isClickInsideNav) {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            if (navToggle && navMenuAlt) {
                navToggle.classList.remove('active');
                navMenuAlt.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});
