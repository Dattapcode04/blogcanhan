// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active");
    } else {
      navLink?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Enhanced Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80; // Height of fixed navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Smooth scroll on page load if hash exists
window.addEventListener("load", function () {
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  }
});

// Newsletter Form Submission
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(newsletterForm);

    // Here you would typically send the data to a server
    alert("Cảm ơn bạn đã đăng ký! Bạn sẽ nhận được email từ chúng tôi sớm.");
    newsletterForm.reset();
  });
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    // Here you would typically send the data to a server
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    contactForm.reset();
  });
}

// Hero Avatar Image Handling
const heroAvatarImg = document.getElementById("heroAvatarImg");
const heroAvatarPlaceholder = document.getElementById("heroAvatarPlaceholder");

// Check if hero avatar image exists and is loaded
if (heroAvatarImg) {
  heroAvatarImg.addEventListener("error", () => {
    heroAvatarImg.style.display = "none";
    if (heroAvatarPlaceholder) {
      heroAvatarPlaceholder.style.display = "flex";
    }
  });

  heroAvatarImg.addEventListener("load", () => {
    if (heroAvatarPlaceholder) {
      heroAvatarPlaceholder.style.display = "none";
    }
    heroAvatarImg.style.display = "block";
  });

  if (!heroAvatarImg.src || heroAvatarImg.src.includes("avatar.png")) {
    const img = new Image();
    img.onerror = () => {
      heroAvatarImg.style.display = "none";
      if (heroAvatarPlaceholder) {
        heroAvatarPlaceholder.style.display = "flex";
      }
    };
    img.onload = () => {
      heroAvatarImg.style.display = "block";
      if (heroAvatarPlaceholder) {
        heroAvatarPlaceholder.style.display = "none";
      }
    };
    img.src = heroAvatarImg.src;
  }
}

// About Avatar Image Handling
const avatarImg = document.getElementById("avatarImg");
const avatarPlaceholder = document.getElementById("avatarPlaceholder");

// Check if avatar image exists and is loaded
if (avatarImg) {
  avatarImg.addEventListener("error", () => {
    // If image fails to load, show placeholder
    avatarImg.style.display = "none";
    if (avatarPlaceholder) {
      avatarPlaceholder.style.display = "flex";
    }
  });

  avatarImg.addEventListener("load", () => {
    // If image loads successfully, hide placeholder
    if (avatarPlaceholder) {
      avatarPlaceholder.style.display = "none";
    }
    avatarImg.style.display = "block";
  });

  // Check if image src is empty or invalid
  if (!avatarImg.src || avatarImg.src.includes("avatar.png")) {
    // Try to load the image, if it fails, the error handler will show placeholder
    const img = new Image();
    img.onerror = () => {
      avatarImg.style.display = "none";
      if (avatarPlaceholder) {
        avatarPlaceholder.style.display = "flex";
      }
    };
    img.onload = () => {
      avatarImg.style.display = "block";
      if (avatarPlaceholder) {
        avatarPlaceholder.style.display = "none";
      }
    };
    img.src = avatarImg.src;
  }
}

// Enhanced Intersection Observer for Smooth Fade-in Animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

// Main observer for fade-in elements
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add delay based on index for staggered animation
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 100);
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in class to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (!section.classList.contains("hero")) {
      section.classList.add("fade-in");
      fadeInObserver.observe(section);
    }
  });

  // Add fade-in to cards with staggered delay
  const cards = document.querySelectorAll(
    ".blog-card, .project-card, .resource-card, .certificate-card"
  );
  cards.forEach((card, index) => {
    card.classList.add("fade-in");
    fadeInObserver.observe(card);
  });

  // Add fade-in to about content
  const aboutContent = document.querySelector(".about-content");
  if (aboutContent) {
    aboutContent.classList.add("fade-in");
    fadeInObserver.observe(aboutContent);
  }

  // Add fade-in-left to about image
  const aboutImage = document.querySelector(".about-image");
  if (aboutImage) {
    aboutImage.classList.add("fade-in-left");
    fadeInObserver.observe(aboutImage);
  }

  // Add fade-in-right to about text
  const aboutText = document.querySelector(".about-text");
  if (aboutText) {
    aboutText.classList.add("fade-in-right");
    fadeInObserver.observe(aboutText);
  }

  // Add fade-in-scale to hero content
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("fade-in-scale");
    setTimeout(() => {
      heroContent.classList.add("visible");
    }, 300);
  }
});

// Add loading state to buttons
document.querySelectorAll(".btn-primary").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.type === "submit") {
      const originalText = this.textContent;
      this.textContent = "Đang xử lý...";
      this.disabled = true;

      // Reset after 2 seconds (in real app, reset after server response)
      setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
      }, 2000);
    }
  });
});

// Certificate Modal Handling
const certificateModal = document.getElementById("certificateModal");
const certificateModalImage = document.getElementById("certificateModalImage");
const certificateModalTitle = document.getElementById("certificateModalTitle");
const certificateModalClose = document.querySelector(
  ".certificate-modal-close"
);
const viewCertificateLinks = document.querySelectorAll(".view-certificate");

// Function to open certificate modal
function openCertificateModal(certImage, certTitle) {
  if (certImage && certTitle) {
    certificateModalImage.src = certImage;
    certificateModalTitle.textContent = certTitle;
    certificateModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
}

// Open modal when clicking "Hiển thị" link on certificates
viewCertificateLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent card click event
    const certImage = this.getAttribute("data-cert-image");
    const certTitle = this.getAttribute("data-cert-title");
    openCertificateModal(certImage, certTitle);
  });
});

// Open modal when clicking anywhere on certificate card
const certificateCardsForModal = document.querySelectorAll(".certificate-card");
certificateCardsForModal.forEach((card) => {
  card.addEventListener("click", function (e) {
    // Don't trigger if clicking directly on the link (link will handle it)
    if (e.target.closest(".blog-link")) {
      return;
    }

    const link = this.querySelector(".view-certificate");
    if (link) {
      const certImage = link.getAttribute("data-cert-image");
      const certTitle = link.getAttribute("data-cert-title");
      openCertificateModal(certImage, certTitle);
    }
  });
});

// Close modal when clicking close button
if (certificateModalClose) {
  certificateModalClose.addEventListener("click", function () {
    certificateModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  });
}

// Close modal when clicking outside
if (certificateModal) {
  certificateModal.addEventListener("click", function (e) {
    if (e.target === certificateModal) {
      certificateModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  });
}

// CV Modal
const cvModal = document.getElementById("cvModal");
const cvModalClose = document.querySelector(".cv-modal-close");
const viewCvBtn = document.getElementById("viewCvBtn");
const cvIframe = document.getElementById("cvIframe");

// Open CV modal
if (viewCvBtn) {
  viewCvBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (cvModal) {
      // Ensure iframe is loaded
      if (cvIframe) {
        cvIframe.src = "cv.html";
      }
      cvModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  });
}

// Close CV modal
if (cvModalClose) {
  cvModalClose.addEventListener("click", function () {
    if (cvModal) {
      cvModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  });
}

// Close CV modal when clicking outside
if (cvModal) {
  cvModal.addEventListener("click", function (e) {
    if (e.target === cvModal) {
      cvModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  });
}

// Close CV modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (cvModal && cvModal.classList.contains("active")) {
      cvModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  }
});

// Close modal when clicking outside the image
certificateModal.addEventListener("click", function (e) {
  if (e.target === certificateModal) {
    certificateModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && certificateModal.classList.contains("active")) {
    certificateModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }
});

// Resource Cards URL Handling
const resourceCards = document.querySelectorAll(".resource-card[data-url]");

resourceCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    const url = this.getAttribute("data-url");
    if (
      url &&
      url !== "#" &&
      url !== "https://example.com/books" &&
      url !== "https://example.com/music" &&
      url !== "https://example.com/mindfulness" &&
      url !== "https://example.com/selfcare"
    ) {
      // Only navigate if URL is not a placeholder
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      // If placeholder URL, prevent default and show message
      e.preventDefault();
      console.log("Please update the URL in data-url attribute");
    }
  });

  // Update href if data-url is set and not a placeholder
  const url = card.getAttribute("data-url");
  if (url && url !== "#" && !url.includes("example.com")) {
    card.setAttribute("href", url);
  }
});

// Enhanced Interactive Effects for Blog and Certificate Cards
const blogCards = document.querySelectorAll(
  ".blog-card:not(.certificate-card)"
);

// Add ripple effect on click/touch
function createRipple(event, element) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple-effect");

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add interactive effects to blog cards (non-certificate cards)
blogCards.forEach((card) => {
  // Navigate to blog detail page when clicking anywhere on card
  card.addEventListener("click", function (e) {
    // Don't trigger if clicking directly on the link (link will handle navigation)
    if (e.target.closest(".blog-link")) {
      return;
    }

    // Create ripple effect
    createRipple(e, this);

    // Navigate to blog detail page
    const link = this.querySelector(".blog-link:not(.view-certificate)");
    if (link && link.href && link.href !== "#") {
      // Small delay to show ripple effect before navigation
      setTimeout(() => {
        window.location.href = link.href;
      }, 200);
    }
  });

  // Touch feedback for mobile
  card.addEventListener(
    "touchstart",
    function () {
      this.style.transform = "translateY(-8px) scale(0.98)";
    },
    { passive: true }
  );

  card.addEventListener(
    "touchend",
    function () {
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    },
    { passive: true }
  );

  // Add hover class for better control
  card.addEventListener("mouseenter", function () {
    this.classList.add("is-hovered");
  });

  card.addEventListener("mouseleave", function () {
    this.classList.remove("is-hovered");
  });
});

// Add interactive effects to certificate cards (already handled above for modal)
const certificateCardsForEffects =
  document.querySelectorAll(".certificate-card");
certificateCardsForEffects.forEach((card) => {
  // Click/touch ripple effect
  card.addEventListener("click", function (e) {
    createRipple(e, this);
  });

  // Touch feedback for mobile
  card.addEventListener(
    "touchstart",
    function () {
      this.style.transform = "translateY(-10px) scale(0.99)";
    },
    { passive: true }
  );

  card.addEventListener(
    "touchend",
    function () {
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    },
    { passive: true }
  );

  // Add hover class for better control
  card.addEventListener("mouseenter", function () {
    this.classList.add("is-hovered");
  });

  card.addEventListener("mouseleave", function () {
    this.classList.remove("is-hovered");
  });
});

// Add ripple effect styles dynamically
const style = document.createElement("style");
style.textContent = `
    .blog-card,
    .certificate-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .blog-card.is-hovered .blog-card-image,
    .certificate-card.is-hovered .blog-card-image {
        transform: scale(1.05);
    }
    
    .blog-card.is-hovered .blog-image,
    .certificate-card.is-hovered .blog-image {
        transform: scale(1.15);
    }
`;
document.head.appendChild(style);

console.log("Blog website loaded successfully!");
