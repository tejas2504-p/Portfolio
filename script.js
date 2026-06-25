document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // SPOTLIGHT EFFECT
    // -------------------------------------------------------------
    const spotlight = document.getElementById('spotlight');
    
    document.addEventListener('mousemove', (e) => {
        if (spotlight) {
            // Set position based on client coordinates relative to window
            spotlight.style.setProperty('--x', `${e.clientX}px`);
            spotlight.style.setProperty('--y', `${e.clientY}px`);
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
    const maxParticles = 65; // Balanced performance & visuals
    
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
        let maxDistance = 110;
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
        
        particlesArray.forEach(particle => {
            particle.update();
            particle.draw();
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

    // -------------------------------------------------------------
    // STICKY NAVBAR SCROLL ACTION
    // -------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // -------------------------------------------------------------
    // MOBILE NAV HAMBURGER MENU TOGGLE
    // -------------------------------------------------------------
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

    // -------------------------------------------------------------
    // ACTIVE SECTION SCROLLSPY & SMOOTH SCROLLING
    // -------------------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Detect if section is in viewport
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update desktop links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Update mobile links
        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial run

    // Smooth Scroll Click Handlers
    const allLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .logo, #view-projects');
    
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile nav menu
                    if (hamburgerMenu) hamburgerMenu.classList.remove('active');
                    if (mobileNav) mobileNav.classList.remove('active');

                    // Smooth scroll
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // accounts for header height when scrolled
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
