const menuBtn = document.querySelector(".js-menu-btn");
const mainNav = document.querySelector(".js-nav");
const header = document.querySelector("header");

const pricingToggle = document.querySelector(".pricing-toggler");
const monthBtn = document.querySelector(".pricing-toggler__monthly");
const yearBtn = document.querySelector(".pricing-toggler__yearly ");
const prices = document.querySelectorAll(".pricing__card__price");
const pricePeriods = document.querySelectorAll(".price-period");
const priceCardBtns = document.querySelectorAll(".js-trail-btn");
const pricingCards = document.querySelectorAll(".pricing__card");

const dotsWrapper = document.querySelector(".dot-wrap");

//------responsive navbar-----------//

function openNavbar() {
  menuBtn.classList.toggle("open");
  mainNav.style.top = `${header.getBoundingClientRect().height}px`;
  mainNav.classList.toggle("open");
}
menuBtn.addEventListener("click", openNavbar);

//-------Pricing-Toggle-Button-----------//

const monthlyPlan = [10, 29, 49];
const yealryPlan = [100, 290, 490];

function changePrice(targetEl, ElemToRemove, plansArray, pricePeriod) {
  ElemToRemove.classList.remove("active");
  targetEl.classList.add("active");
  prices.forEach((prices, i) => {
    prices.textContent = `$${plansArray[i]}`;
    pricePeriods[i].textContent = `${pricePeriod}`;
  });
}
function togglePlans(e) {
  e.target.classList.contains("pricing-toggler__monthly")
    ? changePrice(e.target, yearBtn, monthlyPlan, "Per Month")
    : changePrice(e.target, monthBtn, yealryPlan, "Per Year");
}
pricingToggle.addEventListener("click", function (e) {
  togglePlans(e);
});

//-------Pricing-Card-----------//

priceCardBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    pricingCards.forEach((card) => {
      card.classList.remove("active");
    });
    pricingCards[i].classList.add("active");
  });
});

//-------- Testimonial-cards-slider---------//

var swiper = new Swiper(".testimonials", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    260: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//------------Hero-Content-animation-----------//

const section = document.querySelector(".js-observer-section");
const heroContent = document.querySelector(".js-content");

function hideContent(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    heroContent.classList.remove("hide-animate");
  } else {
    heroContent.classList.add("hide-animate");
  }
}

//------------Eliments-Reveal-animation-----------//

const contentObserver = new IntersectionObserver(hideContent, {
  root: null,
  threshold: 0.4,
});
contentObserver.observe(section);

const hidenItems = document.querySelectorAll(".hide-animate");

function showitems(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hide-animate");
    observer.unobserve(entry.target);
  });
}

const showObserver = new IntersectionObserver(showitems, {
  root: null,
  threshold: 0.4,
});

hidenItems.forEach((item) => {
  showObserver.observe(item);
});

//---------sticky-navbar------------//

const hero = document.querySelector(".hero");

function makeStickyNav(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky-nav");
  } else header.classList.remove("sticky-nav");
}
const headerObserver = new IntersectionObserver(makeStickyNav, {
  root: null,
  threshold: 1,
  rootMargin: `${header.getBoundingClientRect().height}px`,
});

headerObserver.observe(hero);
