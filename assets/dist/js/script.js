const menuBtn=document.querySelector(".js-menu-btn"),mainNav=document.querySelector(".js-nav"),header=document.querySelector("header"),pricingToggle=document.querySelector(".pricing-toggler"),monthBtn=document.querySelector(".monthly"),yearBtn=document.querySelector(".yearly"),prices=document.querySelectorAll(".price"),pricePeriods=document.querySelectorAll(".price-period"),priceCardBtns=document.querySelectorAll(".js-trail-btn"),pricingCards=document.querySelectorAll(".pricing__card"),dotsWrapper=document.querySelector(".dot-wrap");function openNavbar(){menuBtn.classList.toggle("open"),mainNav.style.top=header.getBoundingClientRect().height+"px",mainNav.classList.toggle("open")}menuBtn.addEventListener("click",openNavbar);const monthlyPlan=[10,29,49];function togglePlans(e){e.target.classList.contains("monthly")?(yearBtn.classList.remove("active"),e.target.classList.add("active"),prices.forEach((e,t)=>{e.textContent="$"+monthlyPlan[t],pricePeriods[t].textContent="Per Month"})):e.target.classList.contains("yearly")&&(monthBtn.classList.remove("active"),e.target.classList.add("active"),prices.forEach((e,t)=>{e.textContent="$"+(12*monthlyPlan[t]-2*monthlyPlan[t]),pricePeriods[t].textContent="Per Year"}))}pricingToggle.addEventListener("click",function(e){togglePlans(e)}),priceCardBtns.forEach((e,t)=>{e.addEventListener("click",function(){pricingCards.forEach(e=>{e.classList.remove("active")}),pricingCards[t].classList.add("active")})});var swiper=new Swiper(".testimonials",{slidesPerView:3,spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{260:{slidesPerView:1,spaceBetween:40},480:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}}});const section=document.querySelector(".js-observer-section"),heroContent=document.querySelector(".js-content");function hideContent(e){var[e]=e;e.isIntersecting?heroContent.classList.add("hide-animate"):heroContent.classList.remove("hide-animate")}const contentObserver=new IntersectionObserver(hideContent,{root:null,threshold:.4}),hidenItems=(contentObserver.observe(section),document.querySelectorAll(".hide-animate"));function showitems(e,t){e.forEach(e=>{e.isIntersecting&&(e.target.classList.remove("hide-animate"),t.unobserve(e.target))})}const showObserver=new IntersectionObserver(showitems,{root:null,threshold:.4}),hero=(hidenItems.forEach(e=>{showObserver.observe(e)}),document.querySelector(".hero"));function makeStickyNav(e){var[e]=e;e.isIntersecting?header.classList.remove("sticky-nav"):header.classList.add("sticky-nav")}const headerObserver=new IntersectionObserver(makeStickyNav,{root:null,threshold:1,rootMargin:header.getBoundingClientRect().height+"px"});headerObserver.observe(hero);