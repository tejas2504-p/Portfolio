import { gsap } from "./gsap";

export const animateHeroEntrance = (
  container: HTMLElement | null,
  reduceMotion: boolean
) => {
  if (!container) return;

  // Use gsap.context for easy cleanup in React
  const ctx = gsap.context(() => {
    // Select elements by data attributes
    const label = container.querySelector("[data-hero-label]");
    const title = container.querySelector("[data-hero-title]");
    const role = container.querySelector("[data-hero-role]");
    const description = container.querySelector("[data-hero-description]");
    const actions = container.querySelector("[data-hero-actions]");
    const metaDesktop = container.querySelector("[data-hero-meta-desktop]");
    const metaMobile = container.querySelector("[data-hero-meta-mobile]");
    const visual = container.querySelector("[data-hero-visual]");

    if (reduceMotion) {
      // For reduced motion, just ensure everything is immediately visible
      // They are visible by default in CSS, but GSAP ensures no initial hiding occurs.
      return;
    }

    // Set initial states for animation
    gsap.set([label, title, role, description, actions, metaDesktop, metaMobile], { opacity: 0 });
    gsap.set(label, { y: 15 });
    gsap.set(title, { y: 40 });
    gsap.set(role, { y: 25 });
    gsap.set(description, { y: 20 });
    gsap.set(actions, { y: 15 });
    gsap.set(visual, { opacity: 0, scale: 0.94, y: 20 });

    // Entrance timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    if (label) tl.to(label, { opacity: 1, y: 0, duration: 0.8 }, 0);
    if (title) tl.to(title, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }, 0.15);
    if (role) tl.to(role, { opacity: 1, y: 0, duration: 1.0 }, 0.3);
    if (description) tl.to(description, { opacity: 1, y: 0, duration: 1.0 }, 0.45);
    if (actions) tl.to(actions, { opacity: 1, y: 0, duration: 1.0 }, 0.6);
    if (metaDesktop) tl.to(metaDesktop, { opacity: 1, duration: 1.0 }, 0.7);
    if (metaMobile) tl.to(metaMobile, { opacity: 1, duration: 1.0 }, 0.7);
    
    if (visual) {
      tl.to(
        visual,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
        },
        0.3
      );
    }
  }, container);

  return ctx;
};
