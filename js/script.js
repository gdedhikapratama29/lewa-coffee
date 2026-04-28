// swiper js
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

//nav open close 
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn');
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
          body.style.overflowY = "scroll";
    })
}

//change header bg color
window.addEventListener("scroll", ()  => {
  const scrollY = window.pageYOffset;

  if(scrollY  > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }
  
  //scroll up button

const scrollUpBtn = document.querySelector('.scrollUp-btn')

if(scrollY > 250) {
  scrollUpBtn.classList.add('scrollUpBtn-active');
} else {
  scrollUpBtn.classList.remove('scrollUpBtn-active');
}


//nav link indicator

const sections = document.querySelectorAll('section[id]');

sections.forEach(section => {
  const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 40;

        let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          navId.classList.add('active-navlink')
        } else {
           navId.classList.remove('active-navlink')
        }

        navId.addEventListener("click", () => {
          navMenu.classList.remove("open");
          body.style.overflowY = "scroll";
        })
})
})

// scroll reveal animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
})

sr.reveal(`.section-title, .section-subtitle, .section-description, .newsletter, .newsletter-inputBox, .newsletter-button, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval: 100,})

sr.reveal(`.about-imageContent, .time-table`, { origin: 'left',
  rotate: { y: 90 } })
sr.reveal(`.about-details`, { interval: 100 })