// ===================================
// ITIOITALIA - Jornada Web
// Interactive JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ===================================
    // Smooth Scrolling for Navigation Links
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link, .hero-cta');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default for anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // Mobile nav toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when clicking a nav link (mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ===================================
    // Accordion Functionality
    // ===================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isActive = this.classList.contains('active');

            // Close all other accordions
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('open');
                c.style.maxHeight = null;
            });

            // Toggle current accordion
            if (!isActive) {
                this.classList.add('active');
                accordionContent.classList.add('open');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    // Open first accordion by default
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].click();
    }

    // ===================================
    // Timeline Markers Interaction
    // ===================================
    const timelineMarkers = document.querySelectorAll('.timeline-marker');

    timelineMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            const session = this.getAttribute('data-session');
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        // Click to scroll to corresponding session card
        marker.addEventListener('click', function() {
            const sessionCode = this.getAttribute('data-session');
            if (!sessionCode) return;

            // Map data-session to session header class
            // Examples: "01", "05", "06", "02-04"
            const selector = sessionCode === '02-04'
                ? '.session-header.session-02'
                : `.session-header.session-${sessionCode}`;

            const header = document.querySelector(selector);
            if (header) {
                const card = header.closest('.session-card');
                const offsetTop = (card?.offsetTop || header.offsetTop) - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // ===================================
    // Counter Animation for Numbers
    // ===================================
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Trigger counter animations when elements come into view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const scoreValue = element.querySelector('.score-value');

                if (scoreValue && !element.classList.contains('animated')) {
                    element.classList.add('animated');
                    // Animate score from 0 to 4.5
                    let counter = 0;
                    const interval = setInterval(() => {
                        counter += 0.1;
                        if (counter >= 4.5) {
                            counter = 4.5;
                            clearInterval(interval);
                        }
                        scoreValue.innerHTML = counter.toFixed(1) + '<span>/10</span>';
                    }, 50);
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe score circles
    const scoreCircles = document.querySelectorAll('.score-visual');
    scoreCircles.forEach(circle => {
        counterObserver.observe(circle);
    });

    // ===================================
    // Progress Bar Animation
    // ===================================
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFills = entry.target.querySelectorAll('.progress-fill');
                progressFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 200);
                });
                progressObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe progress bars
    const progressBars = document.querySelectorAll('.dashboard-phase, .phase-header');
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // ===================================
    // Parallax Effect for Hero Background
    // ===================================
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero').offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `scale(1.1) translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // ===================================
    // Session Card Hover Effects
    // ===================================
    const sessionCards = document.querySelectorAll('.session-card');

    sessionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===================================
    // Phase Cards Hover Animation
    // ===================================
    const phaseCards = document.querySelectorAll('.phase-card');

    phaseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.03)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // Interactive Timeline Progress
    // ===================================
    const timelineProgress = document.querySelector('.timeline-progress');

    if (timelineProgress) {
        const timelineObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        timelineProgress.style.width = '75%';
                    }, 500);
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        timelineObserver.observe(timelineProgress.parentElement);
    }

    // ===================================
    // Checklist Interactivity
    // ===================================
    const checklistItems = document.querySelectorAll('.checklist li, .day-tasks li');

    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('i');
            if (checkbox) {
                if (checkbox.classList.contains('fa-square')) {
                    checkbox.classList.remove('fa-square');
                    checkbox.classList.add('fa-check-square');
                    this.style.opacity = '0.6';
                    this.style.textDecoration = 'line-through';
                } else {
                    checkbox.classList.remove('fa-check-square');
                    checkbox.classList.add('fa-square');
                    this.style.opacity = '1';
                    this.style.textDecoration = 'none';
                }
            }
        });

        // Add hover effect
        item.style.cursor = 'pointer';
        item.addEventListener('mouseenter', function() {
            if (!this.style.textDecoration || this.style.textDecoration === 'none') {
                this.style.backgroundColor = 'rgba(0, 146, 70, 0.05)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // ===================================
    // Quote Animation
    // ===================================
    const quotes = document.querySelectorAll('.quote-block');

    quotes.forEach((quote, index) => {
        quote.style.animationDelay = `${index * 0.2}s`;
    });

    // ===================================
    // ROI Card Reveal Animation
    // ===================================
    const roiCard = document.querySelector('.roi-card');

    if (roiCard) {
        const roiObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const returnItems = roiCard.querySelectorAll('.return-item');
                    returnItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '0';
                            item.style.transform = 'translateX(-20px)';
                            setTimeout(() => {
                                item.style.transition = 'all 0.5s ease';
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            }, 100);
                        }, index * 200);
                    });
                    roiObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        roiObserver.observe(roiCard);
    }

    // ===================================
    // Calendar Day Interaction
    // ===================================
    const calendarDays = document.querySelectorAll('.calendar-day');

    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remove active class from all days
            calendarDays.forEach(d => d.classList.remove('active-day'));

            // Add active class to clicked day
            this.classList.add('active-day');

            // Add subtle animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // ===================================
    // First Proof Badge Animation
    // ===================================
    const proofBadge = document.querySelector('.proof-badge');

    if (proofBadge) {
        const proofObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    proofBadge.style.animation = 'bounce 1s ease infinite';
                    setTimeout(() => {
                        proofBadge.style.animation = 'none';
                    }, 3000);
                    proofObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        proofObserver.observe(proofBadge.parentElement);
    }

    // Add bounce animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% { transform: translateY(0) translateX(-50%); }
            50% { transform: translateY(-10px) translateX(-50%); }
        }

        .active-day {
            box-shadow: 0 8px 32px rgba(0, 146, 70, 0.3) !important;
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // Score Ring Animation
    // ===================================
    const scoreRings = document.querySelectorAll('.score-ring-fill');

    scoreRings.forEach(ring => {
        const scoreObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate from full circle to 45% (4.5/10)
                    const circumference = 2 * Math.PI * 54; // radius = 54
                    const offset = circumference * (1 - 0.45);

                    ring.style.strokeDashoffset = circumference;
                    setTimeout(() => {
                        ring.style.transition = 'stroke-dashoffset 2s ease';
                        ring.style.strokeDashoffset = offset;
                    }, 500);

                    scoreObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        scoreObserver.observe(ring);
    });

    // ===================================
    // Commitment Section Highlight
    // ===================================
    const commitmentItems = document.querySelectorAll('.commitment-col ul li');

    commitmentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
            this.style.backgroundColor = 'rgba(0, 146, 70, 0.05)';
            this.style.borderRadius = '8px';
            this.style.padding = '8px';
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.backgroundColor = 'transparent';
            this.style.padding = '8px 0';
        });
    });

    // ===================================
    // Meeting Info Pulse Animation
    // ===================================
    const meetingSection = document.querySelector('.next-meeting');

    if (meetingSection) {
        const meetingObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const meetingInfos = meetingSection.querySelectorAll('.meeting-info');
                    meetingInfos.forEach((info, index) => {
                        setTimeout(() => {
                            info.style.animation = 'pulse-fade 0.6s ease';
                        }, index * 150);
                    });
                    meetingObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        meetingObserver.observe(meetingSection);

        // Add pulse-fade animation
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse-fade {
                0% { opacity: 0; transform: scale(0.9); }
                50% { opacity: 1; transform: scale(1.05); }
                100% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(pulseStyle);
    }

    // ===================================
    // Evolution Bar Animation
    // ===================================
    const evoBars = document.querySelectorAll('.evo-bar');

    if (evoBars.length > 0) {
        const evoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.evo-fill');
                    fills.forEach(fill => {
                        const targetWidth = fill.style.width;
                        fill.style.width = '0%';
                        setTimeout(() => {
                            fill.style.transition = 'width 1s ease';
                            fill.style.width = targetWidth;
                        }, 300);
                    });
                    evoObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        evoBars.forEach(bar => {
            evoObserver.observe(bar);
        });
    }

    // ===================================
    // Meaning Items Stagger Animation
    // ===================================
    const meaningGrid = document.querySelector('.meaning-grid');

    if (meaningGrid) {
        const meaningObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.meaning-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                item.style.transition = 'all 0.5s ease';
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                            }, 50);
                        }, index * 150);
                    });
                    meaningObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        meaningObserver.observe(meaningGrid);
    }

    // ===================================
    // Learning Cards Entrance
    // ===================================
    const learningCards = document.querySelectorAll('.learning-card');

    learningCards.forEach((card, index) => {
        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = index === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                        setTimeout(() => {
                            entry.target.style.transition = 'all 0.8s ease';
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }, 100);
                    }, 200);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cardObserver.observe(card);
    });

    // ===================================
    // Objective Transform Arrow Rotate
    // ===================================
    const transformArrow = document.querySelector('.transform-arrow i');

    if (transformArrow) {
        const arrowObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'transform 1s ease';
                    entry.target.style.transform = 'rotate(360deg) scale(1.2)';
                    setTimeout(() => {
                        entry.target.style.transform = 'rotate(360deg) scale(1)';
                    }, 1000);
                    arrowObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        arrowObserver.observe(transformArrow);
    }

    // ===================================
    // Final Message Typewriter Effect (Simplified)
    // ===================================
    const finalMessage = document.querySelector('.message-quote');

    if (finalMessage) {
        const messageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const paragraphs = entry.target.querySelectorAll('p');
                    paragraphs.forEach((p, index) => {
                        p.style.opacity = '0';
                        setTimeout(() => {
                            p.style.transition = 'opacity 0.8s ease';
                            p.style.opacity = '1';
                        }, index * 400);
                    });
                    messageObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        messageObserver.observe(finalMessage);
    }

    // ===================================
    // Console Art (Easter Egg)
    // ===================================
    console.log('%c ITIOITALIA ', 'background: #009246; color: #fff; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Jornada Completa e Planejamento Estruturado ', 'background: #CE2B37; color: #fff; font-size: 14px; padding: 5px;');
    console.log('%c Desenvolvido por ALEPHANT | 2025 ', 'background: #2C3E50; color: #fff; font-size: 12px; padding: 5px;');
    console.log('%c rodrigo@alephant.ai ', 'color: #009246; font-size: 12px;');

    // ===================================
    // Print-Friendly Version
    // ===================================
    window.addEventListener('beforeprint', function() {
        // Expand all accordions for printing
        document.querySelectorAll('.accordion-header').forEach(header => {
            if (!header.classList.contains('active')) {
                header.click();
            }
        });
    });

    // ===================================
    // Keyboard Navigation
    // ===================================
    document.addEventListener('keydown', function(e) {
        // Press 'H' to go to top
        if (e.key === 'h' || e.key === 'H') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Press '1-5' to navigate to sections
        const sectionMap = {
            '1': 'jornada',
            '2': 'aprendizado',
            '3': 'feedback',
            '4': 'planejamento',
            '5': 'proximos-passos'
        };

        if (sectionMap[e.key]) {
            const section = document.getElementById(sectionMap[e.key]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    // ===================================
    // Loading Complete
    // ===================================
    console.log('✅ Página carregada e interativa!');
    console.log('💡 Dica: Use as teclas 1-5 para navegar entre seções, ou H para voltar ao topo.');

    // Remove loading state if exists
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

}); // End DOMContentLoaded
