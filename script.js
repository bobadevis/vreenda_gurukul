const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id], header[id]");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const loader = document.getElementById("pageLoader");

const setNavbarState = () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 420) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
};

const setActiveLink = () => {
  let currentId = "home";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
};

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  setNavbarState();
  setActiveLink();
});

window.addEventListener("load", () => {
  setNavbarState();
  setActiveLink();

  window.setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);
});

const revealItems = document.querySelectorAll(".fade-up");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => revealObserver.observe(item));

const counters = document.querySelectorAll(".counter");
const animatedCounters = new Set();

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target || 0);
  const duration = 1400;
  const startTime = performance.now();

  const update = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    counter.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }
  };

  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !animatedCounters.has(entry.target)) {
      animatedCounters.add(entry.target);
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach((counter) => counterObserver.observe(counter));

const testimonialSlider = document.getElementById("testimonialSlider");
const testimonials = testimonialSlider ? testimonialSlider.querySelectorAll(".testimonial") : [];
const testimonialPrev = document.getElementById("testimonialPrev");
const testimonialNext = document.getElementById("testimonialNext");
const sliderDots = document.getElementById("sliderDots");
let testimonialIndex = 0;
let testimonialTimer;

const buildDots = () => {
  testimonials.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    dot.addEventListener("click", () => {
      showTestimonial(index);
      resetTestimonialTimer();
    });
    sliderDots.appendChild(dot);
  });
};

const showTestimonial = (index) => {
  testimonialIndex = (index + testimonials.length) % testimonials.length;

  testimonials.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === testimonialIndex);
  });

  sliderDots.querySelectorAll(".slider-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === testimonialIndex);
  });
};

const resetTestimonialTimer = () => {
  clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    showTestimonial(testimonialIndex + 1);
  }, 4500);
};

if (testimonials.length) {
  buildDots();
  showTestimonial(0);
  resetTestimonialTimer();

  testimonialPrev.addEventListener("click", () => {
    showTestimonial(testimonialIndex - 1);
    resetTestimonialTimer();
  });

  testimonialNext.addEventListener("click", () => {
    showTestimonial(testimonialIndex + 1);
    resetTestimonialTimer();
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      otherItem.querySelector(".faq-answer").style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const galleryItems = document.querySelectorAll(".gallery-item");

const closeLightbox = () => {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.style.background = item.dataset.gradient;
    lightboxTitle.textContent = item.dataset.title;
    lightboxDescription.textContent = item.dataset.description;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.textContent = "Enquiry Ready";

    window.setTimeout(() => {
      submitButton.textContent = "Send Enquiry";
    }, 1800);
  });
}
