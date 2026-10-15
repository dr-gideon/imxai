// IM x AI — portfolio interactions (projects render server-side via Hugo)

// pointer-follow glow on cards
document.querySelectorAll(".project-card").forEach(function (card) {
  card.addEventListener("pointermove", function (e) {
    var r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
});

// scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

// nav background on scroll
var nav = document.getElementById("nav");
if (nav) {
  var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 24); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// project screenshot gallery
var galleryModal = document.getElementById("project-gallery-modal");
if (galleryModal) {
  var galleryTitle = galleryModal.querySelector("#gallery-modal-title");
  var gallerySlides = galleryModal.querySelector(".gallery-slides");
  var galleryCounter = galleryModal.querySelector(".gallery-counter");
  var galleryPrev = galleryModal.querySelector(".gallery-prev");
  var galleryNext = galleryModal.querySelector(".gallery-next");
  var galleryClose = galleryModal.querySelector(".gallery-close");
  var galleryIndex = 0;
  var galleryItems = [];
  var galleryReturnFocus = null;

  var showGalleryItem = function (index) {
    galleryIndex = (index + galleryItems.length) % galleryItems.length;
    gallerySlides.scrollTop = 0;
    galleryItems.forEach(function (item, itemIndex) {
      item.classList.toggle("is-active", itemIndex === galleryIndex);
    });
    galleryCounter.textContent = (galleryIndex + 1) + " / " + galleryItems.length;
    galleryPrev.disabled = galleryItems.length < 2;
    galleryNext.disabled = galleryItems.length < 2;
  };

  var openGallery = function (trigger) {
    var template = document.getElementById(trigger.dataset.gallery);
    if (!template) { return; }

    galleryReturnFocus = trigger;
    galleryTitle.textContent = template.dataset.projectName;
    gallerySlides.replaceChildren(template.content.cloneNode(true));
    galleryItems = Array.from(gallerySlides.querySelectorAll(".gallery-slide"));
    if (!galleryItems.length) { return; }

    galleryModal.hidden = false;
    document.body.classList.add("gallery-open");
    showGalleryItem(0);
    galleryClose.focus();
  };

  var closeGallery = function () {
    galleryModal.hidden = true;
    document.body.classList.remove("gallery-open");
    gallerySlides.replaceChildren();
    galleryItems = [];
    if (galleryReturnFocus) { galleryReturnFocus.focus(); }
  };

  document.querySelectorAll(".pc-gallery-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () { openGallery(trigger); });
  });
  galleryModal.querySelectorAll("[data-gallery-close]").forEach(function (button) {
    button.addEventListener("click", closeGallery);
  });
  galleryPrev.addEventListener("click", function () { showGalleryItem(galleryIndex - 1); });
  galleryNext.addEventListener("click", function () { showGalleryItem(galleryIndex + 1); });

  document.addEventListener("keydown", function (event) {
    if (galleryModal.hidden) { return; }
    if (event.key === "Escape") { closeGallery(); }
    if (event.key === "ArrowLeft") { showGalleryItem(galleryIndex - 1); }
    if (event.key === "ArrowRight") { showGalleryItem(galleryIndex + 1); }
  });
}
