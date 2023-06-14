const menuBtn = document.querySelector(".js-menu-btn");
const mainNav = document.querySelector(".js-nav");
const header = document.querySelector("header");

const pricingToggle = document.querySelector(".pricing-toggler");
const monthBtn = document.querySelector(".monthly");
const yearBtn = document.querySelector(".yearly");
const prices = document.querySelectorAll(".price");
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

//-------Pricing Card-----------//

const monthlyPlan = [10, 29, 49];
function togglePlans(e) {
  if (e.target.classList.contains("monthly")) {
    yearBtn.classList.remove("active");
    e.target.classList.add("active");
    prices.forEach((prices, i) => {
      prices.textContent = `$${monthlyPlan[i]}`;
      pricePeriods[i].textContent = "Per Month";
    });
  } else if (e.target.classList.contains("yearly")) {
    monthBtn.classList.remove("active");
    e.target.classList.add("active");
    prices.forEach((prices, i) => {
      prices.textContent = `$${monthlyPlan[i] * 12 - 2 * monthlyPlan[i]}`;
      pricePeriods[i].textContent = "Per Year";
    });
  } else {
    return;
  }
}
pricingToggle.addEventListener("click", function (e) {
  togglePlans(e);
});

priceCardBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    pricingCards.forEach((card) => {
      card.classList.remove("active");
    });
    pricingCards[i].classList.add("active");
  });
});

//-------- testimonial cards slider---------//
$(document).ready(function () {
  $(".testimonials-wrap").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Hero-section hide

const section = document.querySelector(".js-observer-section");
const heroContent = document.querySelector(".js-content");

console.log(heroContent);

function hideContent(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    heroContent.classList.remove("hide-animate");
  } else {
    heroContent.classList.add("hide-animate");
  }
}

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
