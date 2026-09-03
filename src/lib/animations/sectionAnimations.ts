import { gsap } from "./gsap";

export const animateSectionHeading = (
  container: HTMLElement,
  reduceMotion: boolean
) => {
  if (reduceMotion) return;

  const heading = container.querySelector("[data-animate='heading']");
  if (!heading) return;

  gsap.fromTo(
    heading,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        once: true,
      },
    }
  );
};

export const animateFadeUp = (
  element: HTMLElement | null,
  reduceMotion: boolean,
  delay: number = 0
) => {
  if (!element || reduceMotion) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    }
  );
};

export const animateStagger = (
  container: HTMLElement | null,
  selector: string,
  reduceMotion: boolean
) => {
  if (!container || reduceMotion) return;

  const elements = container.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        once: true,
      },
    }
  );
};

export const animateDivider = (
  element: HTMLElement | null,
  reduceMotion: boolean
) => {
  if (!element || reduceMotion) return;

  gsap.fromTo(
    element,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1.2,
      transformOrigin: "left center",
      ease: "expo.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        once: true,
      },
    }
  );
};
