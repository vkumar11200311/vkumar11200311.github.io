   // Mobile navbar toggle and small parallax effect.[web:43][web:73]

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const hero = document.getElementById("hero");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-open");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("nav-open");
      });
    });
  }

  // subtle mouse-move parallax
  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.get
// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
 // Reveal service cards on scroll
  const serviceCards = document.querySelectorAll(".service-card");

  if ("IntersectionObserver" in window && serviceCards.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2
      }
    );

    serviceCards.forEach((card) => observer.observe(card));
  } else {
    // Fallback if IntersectionObserver not supported
    serviceCards.forEach((card) => card.classList.add("service-visible"));
  }
});
// BLOG FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const blogCards = document.querySelectorAll(".blog-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    blogCards.forEach((card) => {
      const tags = card.getAttribute("data-tags") || "";
      if (filter === "all" || tags.includes(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// SIMPLE READ HANDLER
document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.closest(".blog-card").querySelector(".blog-card-title").textContent;
    alert("You clicked on: " + title + "\nYou can connect this to a full blog page later.");
  });
});

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (!form || !statusEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();
    const consent = document.getElementById("dataConsent").checked;

    if (!name || !email || !service || !message || !consent) {
      statusEl.textContent =
        "Please fill all required fields and accept the consent checkbox.";
      statusEl.style.color = "#ffb3b3";
      return;
    }

    // Here you can integrate EmailJS, a backend API, or your own server endpoint.
    // For now, just show a success message and reset the form.
    statusEl.textContent =
      "Thanks for reaching out! Your message has been recorded. You will get a reply";

      
// Animated welcome message typing effect
document.addEventListener("DOMContentLoaded", () => {
  const welcomeEl = document.querySelector(".animated-welcome");
  if (!welcomeEl) return;

  const fullHtml = welcomeEl.innerHTML; // keeps the <br />
  const words = fullHtml.split(" ");
  welcomeEl.innerHTML = "";

  let index = 0;
  const typingSpeed = 120; // ms per word

  const typeInterval = setInterval(() => {
    if (index >= words.length) {
      clearInterval(typeInterval);
      return;
    }
    // add space except before first word
    welcomeEl.innerHTML += (index === 0 ? "" : " ") + words[index];
    index++;
  }, typingSpeed);
});
