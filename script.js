document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // USER MOTION PREFERENCE CHECK
    // -------------------------------------------------------------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // -------------------------------------------------------------
    // SMOOTH SPOTLIGHT LERP EFFECT
    // -------------------------------------------------------------
    const spotlight = document.getElementById('spotlight');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let spotX = mouseX;
    let spotY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateSpotlight() {
        if (!prefersReducedMotion) {
            spotX += (mouseX - spotX) * 0.08;
            spotY += (mouseY - spotY) * 0.08;
        } else {
            spotX = mouseX;
            spotY = mouseY;
        }
        
        if (spotlight) {
            spotlight.style.setProperty('--x', `${spotX}px`);
            spotlight.style.setProperty('--y', `${spotY}px`);
        }
        requestAnimationFrame(updateSpotlight);
    }
    requestAnimationFrame(updateSpotlight);

    // Background blobs are statically loaded in index.html and wrapped in .glow-container elements

    // =============================================================
    // DYNAMIC SELF-DRAWING SECTION DIVIDERS
    // =============================================================
    document.querySelectorAll('section:not(:last-of-type)').forEach(section => {
        const divider = document.createElement('div');
        divider.classList.add('section-divider-line');
        section.parentNode.insertBefore(divider, section.nextSibling);
        
        if (!prefersReducedMotion) {
            gsap.fromTo(divider, 
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: divider,
                        start: 'top 95%',
                    }
                }
            );
        }
    });

    // =============================================================
    // HERO PARALLAX DEPTH SCROLL
    // =============================================================
    if (!prefersReducedMotion) {
        gsap.to('.hero-text-panel', {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.hero-image-panel', {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // =============================================================
        // CINEMATIC PROJECT IMAGE PARALLAX ZOOM
        // =============================================================
        gsap.utils.toArray('.project-card').forEach(card => {
            const img = card.querySelector('.project-img');
            if (img) {
                gsap.fromTo(img, 
                    { scale: 1.15, y: -20 },
                    {
                        scale: 1.0,
                        y: 10,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        }
                    }
                );
            }
        });
    }

    // =============================================================
    // DYNAMIC INTERACTION INJECTIONS (Ripples, Floating Labels)
    // =============================================================

    // 2. Click Button Ripple Effect
    document.querySelectorAll('.btn, .back-to-top').forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 3. Floating Label Conversion for Contact Form
    document.querySelectorAll('.form-group').forEach(group => {
        const input = group.querySelector('.form-input');
        const label = group.querySelector('label');
        if (input && label) {
            // Convert to visual floating label
            label.className = 'form-label';
            
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value) {
                    group.classList.add('focused');
                } else {
                    group.classList.remove('focused');
                }
            });
            
            // Check initial load
            if (input.value) {
                group.classList.add('focused');
            }
        }
    });

    // -------------------------------------------------------------
    // TYPING ANIMATION
    // -------------------------------------------------------------
    const typingTextElement = document.getElementById('typing-text');
    const roles = [
        'React Developer',
        'Node.js Developer',
        'Problem Solver',
        'Open Source Learner'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Deleting text
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deletes faster than types
        } else {
            // Typing text
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Natural typing speed
        }

        // Handle transitions between typing and deleting
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at full word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start the typing loop
    setTimeout(type, 1000);

    // -------------------------------------------------------------
    // PARTICLES NETWORK BACKGROUND
    // -------------------------------------------------------------
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    let particlesArray = [];
    const maxParticles = 110; // Populated background network
    
    // Set Canvas Size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    });

    // Particle Object
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1; // 1px to 3px
            this.speedX = (Math.random() - 0.5) * 0.4; // Subtle drift
            this.speedY = (Math.random() - 0.5) * 0.4;
            // Generate primary blue, purple, or white particle colors
            const randColor = Math.random();
            if (randColor < 0.45) {
                this.color = 'rgba(2, 132, 199, '; // Blue
            } else if (randColor < 0.9) {
                this.color = 'rgba(124, 58, 237, '; // Purple
            } else {
                this.color = 'rgba(71, 85, 105, '; // Slate-Grey
            }
            this.alpha = Math.random() * 0.5 + 0.1; // Base transparency
            this.alphaDirection = Math.random() > 0.5 ? 0.005 : -0.005; // Fade cycle
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce on boundaries
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            // Handle glowing opacity pulsation
            this.alpha += this.alphaDirection;
            if (this.alpha >= 0.75 || this.alpha <= 0.05) {
                this.alphaDirection *= -1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.alpha + ')';
            ctx.fill();
        }
    }



    // Initialize Particle Set
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < maxParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Draw lines between nearby particles (Constellation style)
    function connectParticles() {
        let maxDistance = 125; // Broader connections
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    // Fade lines depending on how close they are
                    let opacity = (1 - (distance / maxDistance)) * 0.15;
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Indigo connection color
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Particle Animation Loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw background particles
        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animateParticles);
    }



    initParticles();
    animateParticles();

    // -------------------------------------------------------------
    // INTERACTIVE PROFILE ILLUSTATION SHIFT (3D Tilt effect)
    // -------------------------------------------------------------
    const profileContainer = document.querySelector('.image-wrapper-outer');
    
    if (profileContainer) {
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2); // offset from center
            const y = e.clientY - rect.top - (rect.height / 2);
            
            // Map rotation degrees (e.g. max 15 deg)
            const rotX = -(y / (rect.height / 2)) * 12;
            const rotY = (x / (rect.width / 2)) * 12;
            
            profileContainer.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
        });

        profileContainer.addEventListener('mouseleave', () => {
            // Reset to flat layout
            profileContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            profileContainer.style.transition = 'transform 0.5s ease';
        });
        
        profileContainer.addEventListener('mouseenter', () => {
            profileContainer.style.transition = 'none'; // remove delay during active hover
        });
    }

    // =============================================================
    // LENIS SMOOTH SCROLL INITIALIZATION
    // =============================================================
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple easeOutExpo style
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.registerPlugin(ScrollTrigger);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // =============================================================
    // GLOBAL PAGE LOADING INTRO TIMELINE
    // =============================================================
    const introTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    // Set initial GSAP states to prevent FOUC (flash of unstyled content)
    gsap.set('.navbar', { y: -100, opacity: 0 });
    gsap.set('.intro-badge', { y: -20, opacity: 0 });
    gsap.set('.greeting-heading', { y: 40, opacity: 0 });
    gsap.set('.typing-container', { y: 20, opacity: 0 });
    gsap.set('.subtitle-badge', { x: -30, opacity: 0 });
    gsap.set('.cta-buttons', { y: 20, opacity: 0 });
    gsap.set('.social-links', { y: 20, opacity: 0 });
    gsap.set('.hero-image-panel', { scale: 0.9, opacity: 0 });

    // Play the entrance timeline
    introTl.to('.hero-image-panel', { scale: 1, opacity: 1, duration: 1.6 })
           .to('.navbar', { y: 0, opacity: 1, duration: 0.8 }, '-=1.2')
           .to('.intro-badge', { y: 0, opacity: 1, duration: 0.6 }, '-=0.8')
           .to('.greeting-heading', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
           .to('.typing-container', { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
           .to('.subtitle-badge', { x: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.4')
           .to('.cta-buttons', { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
           .to('.social-links', { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

    // =============================================================
    // GLOBAL SCROLL PROGRESS INDICATOR
    // =============================================================
    gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.1, // very slight smooth lag
        }
    });

    // =============================================================
    // STICKY NAVBAR ACTION
    // =============================================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        ScrollTrigger.create({
            start: 'top -30px',
            onEnter: () => navbar.classList.add('scrolled'),
            onLeaveBack: () => navbar.classList.remove('scrolled'),
        });
    }

    // =============================================================
    // MOBILE NAV HAMBURGER MENU TOGGLE
    // =============================================================
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }

    // =============================================================
    // ACTIVE SECTION SCROLLSPY (Binds to Lenis Scroll)
    // =============================================================
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink(scrollY) {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 180)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    lenis.on('scroll', (e) => {
        updateActiveLink(e.scroll);
    });
    updateActiveLink(window.scrollY); // Initial run

    // =============================================================
    // SMOOTH ANCHOR SCROLLING (Lenis integration)
    // =============================================================
    const allLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .logo, #view-projects, a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile nav menu if open
                    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
                    if (mobileNav) mobileNav.classList.remove('active');

                    // Scroll smoothly using Lenis
                    lenis.scrollTo(targetElement, {
                        offset: -70,
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                }
            }
        });
    });

    // =============================================================
    // DELUXE SCROLL REVEALS (GSAP ScrollTrigger & Staggers)
    // =============================================================

    // 1. About Section Reveal
    gsap.from('.about-left-panel', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            onEnter: () => document.querySelector('.about-section').classList.add('active'),
        }
    });

    gsap.from('.about-right-panel > *', {
        opacity: 0,
        y: 40,
        duration: 1.0,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
        }
    });

    // Animation variables that respect reduced-motion preferences
    const rX = prefersReducedMotion ? 0 : 15;
    const rY = prefersReducedMotion ? 0 : 15;
    const zDepth = prefersReducedMotion ? 0 : -60;
    const yOffset = prefersReducedMotion ? 10 : 50;
    const xOffset = prefersReducedMotion ? 10 : 40;

    // 2. Skills Section - Category Cards & Skill Cards Stagger
    gsap.from('.skills-category-card', {
        opacity: 0,
        y: yOffset,
        rotationX: rX,
        z: zDepth,
        transformOrigin: "top center",
        duration: 1.0,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.skills-categories-wrapper',
            start: 'top 85%',
            onEnter: () => document.querySelector('.skills-section').classList.add('active'),
        },
        onStart: function() {
            this.targets().forEach(el => el.classList.add('gsap-animating'));
        },
        onComplete: function() {
            this.targets().forEach(el => {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            });
        }
    });

    gsap.utils.toArray('.skills-grid-new').forEach(grid => {
        const cards = grid.querySelectorAll('.skill-card');
        gsap.from(cards, {
            opacity: 0,
            y: prefersReducedMotion ? 5 : 20,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: grid,
                start: 'top 90%',
            },
            onStart: function() {
                this.targets().forEach(el => el.classList.add('gsap-animating'));
            },
            onComplete: function() {
                this.targets().forEach(el => {
                    el.classList.remove('gsap-animating');
                    gsap.set(el, { clearProps: 'transform,opacity' });
                    el.classList.add('active');
                });
            }
        });
    });

    // 3. Featured Projects Staggered Entrance
    gsap.from('.project-card', {
        opacity: 0,
        y: yOffset,
        rotationX: rX,
        z: zDepth,
        transformOrigin: "top center",
        duration: 1.0,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            onEnter: () => document.querySelector('.projects-section').classList.add('active'),
        },
        onStart: function() {
            this.targets().forEach(el => el.classList.add('gsap-animating'));
        },
        onComplete: function() {
            this.targets().forEach(el => {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            });
        }
    });

    // 4. Experience Timeline Cards Alternating Reveal
    gsap.utils.toArray('.timeline-item').forEach(item => {
        const isLeft = item.classList.contains('left');
        gsap.from(item, {
            opacity: 0,
            x: isLeft ? -xOffset : xOffset,
            z: zDepth,
            rotationY: isLeft ? -rY : rY,
            transformOrigin: isLeft ? "right center" : "left center",
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            },
            onStart: function() {
                item.classList.add('gsap-animating');
            },
            onComplete: function() {
                item.classList.remove('gsap-animating');
                gsap.set(item, { clearProps: 'transform,opacity' });
                item.classList.add('active');
            }
        });
    });

    // 5. Timeline Progress Bar Scroll Scrubbing
    const timelineProgress = document.querySelector('.timeline-line-progress');
    if (timelineProgress) {
        gsap.fromTo(timelineProgress, 
            { height: '0%' },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.timeline-wrapper',
                    start: 'top 75%',
                    end: 'bottom 75%',
                    scrub: true,
                }
            }
        );
    }

    // 6. Certifications Staggered Reveal
    gsap.from('.cert-card', {
        opacity: 0,
        y: yOffset,
        rotationX: rX,
        z: zDepth,
        transformOrigin: "top center",
        duration: 1.0,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.cert-grid',
            start: 'top 85%',
            onEnter: () => document.querySelector('.certifications-section').classList.add('active'),
        },
        onStart: function() {
            this.targets().forEach(el => el.classList.add('gsap-animating'));
        },
        onComplete: function() {
            this.targets().forEach(el => {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            });
        }
    });

    // 7. Achievements Staggered Reveal & Number Counters Trigger
    gsap.from('.stat-card', {
        opacity: 0,
        y: yOffset,
        rotationX: rX,
        z: zDepth,
        transformOrigin: "top center",
        duration: 1.0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 85%',
            onEnter: () => {
                document.querySelector('.achievements-section').classList.add('active');
                animateCounters();
            },
        },
        onStart: function() {
            this.targets().forEach(el => el.classList.add('gsap-animating'));
        },
        onComplete: function() {
            this.targets().forEach(el => {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            });
        }
    });

    // 8. Contact Section Panel Reveals
    gsap.from('.contact-info-panel', {
        opacity: 0,
        x: -xOffset,
        z: zDepth,
        rotationY: -rY,
        transformOrigin: "right center",
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
        },
        onStart: function() {
            const el = document.querySelector('.contact-info-panel');
            if (el) el.classList.add('gsap-animating');
        },
        onComplete: function() {
            const el = document.querySelector('.contact-info-panel');
            if (el) {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            }
        }
    });

    gsap.from('.contact-form-panel', {
        opacity: 0,
        x: xOffset,
        z: zDepth,
        rotationY: rY,
        transformOrigin: "left center",
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
        },
        onStart: function() {
            const el = document.querySelector('.contact-form-panel');
            if (el) el.classList.add('gsap-animating');
        },
        onComplete: function() {
            const el = document.querySelector('.contact-form-panel');
            if (el) {
                el.classList.remove('gsap-animating');
                gsap.set(el, { clearProps: 'transform,opacity' });
                el.classList.add('active');
            }
        }
    });

    // =============================================================
    // INTERACTIVE PROJECT CARD 3D TILT EFFECT
    // =============================================================
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!prefersReducedMotion) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - (rect.width / 2); // offset from center
                const y = e.clientY - rect.top - (rect.height / 2);
                
                const rotX = -(y / (rect.height / 2)) * 6;
                const rotY = (x / (rect.width / 2)) * 6;
                
                card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(40px) scale(1.03)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
                card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none';
            });
        });
    }

    // =============================================================
    // ACHIEVEMENTS COUNTER ANIMATION FUNCTION
    // =============================================================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const duration = 2000;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;
            
            const increment = target > 50 ? Math.ceil(target / 100) : 1;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = current;
                }
            }, Math.max(stepTime, 20));
        });
    }

    // =============================================================
    // CONTACT FORM INTERACTIVITY & RIPPLE EFFECT
    // =============================================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                if (!nameInput.value) nameInput.focus();
                else if (!emailInput.value) emailInput.focus();
                else if (!messageInput.value) messageInput.focus();
                return;
            }

            submitBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                submitBtn.style.transform = '';
            }, 150);

            const successToast = document.createElement('div');
            successToast.style.position = 'fixed';
            successToast.style.bottom = '30px';
            successToast.style.right = '30px';
            successToast.style.padding = '1.2rem 2.2rem';
            successToast.style.background = 'rgba(255, 255, 255, 0.9)';
            successToast.style.border = '1px solid rgba(16, 185, 129, 0.3)';
            successToast.style.boxShadow = '0 20px 45px rgba(15, 23, 42, 0.08)';
            successToast.style.borderRadius = '16px';
            successToast.style.backdropFilter = 'blur(16px)';
            successToast.style.color = '#10b981';
            successToast.style.fontWeight = '600';
            successToast.style.fontSize = '1rem';
            successToast.style.zIndex = '9999';
            successToast.style.opacity = '0';
            successToast.style.transform = 'translateY(20px)';
            successToast.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            successToast.innerHTML = '✨ Message sent successfully!';

            document.body.appendChild(successToast);

            setTimeout(() => {
                successToast.style.opacity = '1';
                successToast.style.transform = 'translateY(0)';
            }, 50);

            setTimeout(() => {
                successToast.style.opacity = '0';
                successToast.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    successToast.remove();
                }, 400);
            }, 3000);

            contactForm.reset();
        });
    }

    // =============================================================
    // BACK TO TOP SMOOTH SCROLL ACTION
    // =============================================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        });
    }
    // =============================================================
    // SCROLL-CONTROLLED AURORA SWELLS (GSAP ScrollTrigger)
    // =============================================================
    if (!prefersReducedMotion) {
        const auroraTl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5,
            }
        });

        // Choreographed sequence of shifting/swelling background glows
        auroraTl
            // 1. Hero to About section
            .to('.glow-blue-container', { xPercent: 25, yPercent: 30, scale: 1.35, duration: 1 }, 0)
            .to('.glow-purple-container', { xPercent: -20, yPercent: -25, scale: 1.25, duration: 1 }, 0)
            .to('.glow-pink-container', { xPercent: 15, yPercent: -15, scale: 1.2, duration: 1 }, 0)
            
            // 2. About to Skills section
            .to('.glow-blue-container', { xPercent: 10, yPercent: 75, scale: 1.2, duration: 1 }, 1)
            .to('.glow-purple-container', { xPercent: -45, yPercent: -50, scale: 1.55, duration: 1 }, 1)
            .to('.glow-pink-container', { xPercent: -25, yPercent: 25, scale: 1.45, duration: 1 }, 1)
            
            // 3. Skills to Projects section
            .to('.glow-blue-container', { xPercent: 50, yPercent: 110, scale: 1.6, duration: 1 }, 2)
            .to('.glow-purple-container', { xPercent: -25, yPercent: -85, scale: 1.2, duration: 1 }, 2)
            .to('.glow-pink-container', { xPercent: 35, yPercent: 50, scale: 1.7, duration: 1 }, 2)
            
            // 4. Projects to Experience/Certifications section
            .to('.glow-blue-container', { xPercent: 15, yPercent: 150, scale: 1.25, duration: 1 }, 3)
            .to('.glow-purple-container', { xPercent: -65, yPercent: -110, scale: 1.65, duration: 1 }, 3)
            .to('.glow-pink-container', { xPercent: -10, yPercent: 85, scale: 1.35, duration: 1 }, 3)
            
            // 5. Experience to Contact/Footer section
            .to('.glow-blue-container', { xPercent: 35, yPercent: 180, scale: 1.4, duration: 1 }, 4)
            .to('.glow-purple-container', { xPercent: -35, yPercent: -130, scale: 1.4, duration: 1 }, 4)
            .to('.glow-pink-container', { xPercent: 20, yPercent: 120, scale: 1.5, duration: 1 }, 4);
    }

    // =============================================================
    // THREE.JS 3D GEOMETRIC FLOATING CANVAS
    // =============================================================
    const container3d = document.getElementById('hero-3d-canvas-container');
    if (container3d && typeof THREE !== 'undefined' && !prefersReducedMotion) {
        const scene = new THREE.Scene();
        
        const width = container3d.clientWidth || 400;
        const height = container3d.clientHeight || 400;
        
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 5.5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container3d.appendChild(renderer.domElement);

        // Create 3D Holographic Particle Torus Knot
        const geometry = new THREE.TorusKnotGeometry(1.4, 0.42, 160, 18);

        // Purple Particles
        const matPurple = new THREE.PointsMaterial({
            size: 0.022,
            color: 0x7c3aed, // Purple
            transparent: true,
            opacity: 0.45,
            blending: THREE.AdditiveBlending
        });
        const pointsPurple = new THREE.Points(geometry, matPurple);
        scene.add(pointsPurple);

        // Blue Particles (slightly offset scale/rotation for holographic depth)
        const matBlue = new THREE.PointsMaterial({
            size: 0.022,
            color: 0x0284c7, // Blue
            transparent: true,
            opacity: 0.45,
            blending: THREE.AdditiveBlending
        });
        const pointsBlue = new THREE.Points(geometry, matBlue);
        pointsBlue.scale.set(1.025, 1.025, 1.025);
        pointsBlue.rotation.y = Math.PI / 6;
        scene.add(pointsBlue);

        // Track cursor coordinates for interactive tilt
        let targetX = 0;
        let targetY = 0;

        document.addEventListener('mousemove', (e) => {
            const normX = (e.clientX / window.innerWidth) - 0.5;
            const normY = (e.clientY / window.innerHeight) - 0.5;
            targetX = normY * 0.45; // X rotation targets Y cursor
            targetY = normX * 0.45; // Y rotation targets X cursor
        });

        // GSAP ScrollTrigger to fade/shrink 3D canvas when user scrolls down
        gsap.to(container3d, {
            opacity: 0,
            scale: 0.75,
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Animation Loop
        function animate3d() {
            pointsPurple.rotation.x += 0.002;
            pointsPurple.rotation.y += 0.003;
            
            pointsBlue.rotation.x += 0.0015;
            pointsBlue.rotation.y += 0.0025;

            // Smoothly ease scene rotation to face cursor (lerp)
            scene.rotation.x += (targetX - scene.rotation.x) * 0.05;
            scene.rotation.y += (targetY - scene.rotation.y) * 0.05;

            renderer.render(scene, camera);
            requestAnimationFrame(animate3d);
        }
        requestAnimationFrame(animate3d);

        // Handle Resizing
        window.addEventListener('resize', () => {
            const w = container3d.clientWidth;
            const h = container3d.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });
    }
});
