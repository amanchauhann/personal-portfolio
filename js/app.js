const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", (e) => {
  menuList.classList.toggle("open");
});

const emailLi = document.querySelector(".email-li");

const timeline = gsap.timeline({ defaults: { duration: 1 } });

// TOP NAV
gsap.from(".top-nav", { y: "-100%", delay: 0.5 });
gsap.from(".menu-list li", {
  duration: 1,
  y: "-100%",
  delay: 1,
  stagger: 0.5,
  ease: "power",
});

// SIDE NAV
gsap.from(".side-nav", { x: "-100%", delay: 1 });
gsap.from(".side-nav ul li", {
  duration: 1,
  x: "-100%",
  delay: 1,
  stagger: 0.5,
  ease: "power",
});

// WRAPPER
gsap.from(".heading-text1", { opacity: 0, delay: 1.5 });
gsap.from(".heading-text2", { opacity: 0, delay: 1.7 });
gsap.from(".heading-line", { y: "10px", opacity: 0, delay: 1.7, duration: 1 });

// PORTFOLIO
gsap.from(".entry__title-container", { opacity: 0, delay: 1.5, duration: 1 });
gsap.from(".entry__img-container", {
  scale: 0.9,
  opacity: 0,
  delay: 1.5,
  duration: 1,
});
gsap.from(".entry__link-container", {
  opacity: 0,
  delay: 1.8,
  duration: 1,
});
gsap.from(".entry__about-text", { opacity: 0, delay: 2, duration: 1 });
gsap.from(".tool-icon", {
  opacity: 0,
  y: "-30px",
  stagger: 0.2,
  delay: 1.8,
  duration: 1,
});
gsap.from(".tool-icon2", {
  opacity: 0,
  y: "-30px",
  stagger: 0.2,
  delay: 1.8,
  duration: 0.5,
});
