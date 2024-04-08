gsap.registerPlugin(ScrollTrigger);

const splitType1 = document.querySelectorAll(".paragraph1");

splitType1.forEach((word) => {
  const text = new SplitType(word, { types: "words" });

  gsap.from(text.words, {
    opacity: 0,
    y: 25,
    stagger: 0.1,
    duration: 0.5,
    ease: "power1",
  });
});

const splitType2 = document.querySelectorAll(".phrase2");

splitType2.forEach((word) => {
  const text = new SplitType(word, { types: "words" });

  gsap.fromTo(
    text.words,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1.5,
      ease: "power1",
      scrollTrigger: {
        trigger: ".phrase2",
        start: "top 90%",
        end: "bottom 100%",
        triggerActions: "play none none reverse",
      },
    }
  );
});

// splitType2.forEach((word, i) => {
//   const text = new SplitType(word, { types: "words" });

//   gsap.from(text.words, {
//     scrollTrigger: {
//       trigger: ".phrase2",
//       start: "top 90%",
//       end: "bottom 100%",
//       scrub: true,
//     },
//     opacity: 1,
//     stagger: 0.5,
//     duration: 1.5,
//     ease: "power1",
//   });
// });

const splitType3 = document.querySelectorAll(".reveal-type");

splitType3.forEach((char, i) => {
  const text = new SplitType(char, { types: "char" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

// const words = document.querySelectorAll("h1");

// gsap.from(words, {
//   opacity: 0,
//   y: 25,
//   stagger: 0.5,
//   duration: 0.5,
//   ease: "power1",
// });

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.from(".arrow-icon", {
  y: 20,
  yoyo: true,
  duration: 1.5,
  yoyoEase: "power1.inOut",
  ease: "power1.inOut",
  repeat: -1,
});

gsap.to(".scrolling-text-top", {
  x: 300,
  scrollTrigger: {
    trigger: ".arrow-icon",
    start: "top 80%",
    end: "bottom 50%",
    scrub: 15,
    triggerActions: "restart none none none",
  },
});

gsap.to(".scrolling-text-bottom", {
  x: -300,
  scrollTrigger: {
    trigger: ".arrow-icon",
    start: "top 80%",
    end: "bottom 50%",
    scrub: 15,
    triggerActions: "restart none none none",
  },
});

gsap.fromTo(
  ".phrase2",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 0.5,
    ease: "power1",
    scrollTrigger: {
      trigger: ".phrase2",
      start: "top 90%",
      end: "bottom 100%",
      triggerActions: "play none none reverse",
    },
  }
);

// const splitTypes = document.querySelector(".reveal-type");

//   splitTypes.forEach((char, i) => {
//     const text = new SplitType(char, { type: 'chars' })

//     gsap.from(text.chars, {

//       ScrollTrigger: {
//         trigger: char,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true
//       },
//       opacity: 0.2,
//       stagger: 0.1
//     })

//   })
