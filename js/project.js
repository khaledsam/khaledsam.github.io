let searchBtn = document.getElementById('search_btn');
let searchForm = document.querySelector('.search');






searchBtn.addEventListener("click",()=>{
  searchForm.classList.toggle('active');
});

















  let cardToggle = document.querySelector('#btn_toggle');
  let header = document.querySelector('.header');
  let body = document.querySelector('body');

  
cardToggle.onclick = ()=>{
  header.classList.toggle('is_dark');
  body.classList.toggle('is_dark');
  
};
































let navbare = document.querySelector('header').querySelector('nav').querySelectorAll('.nav_head');

navbare.forEach(element =>{
    element.addEventListener("click",function(){
        navbare.forEach(re=>re.classList.remove("active"))
        this.classList.add("active");
    })});

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".category", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".room", {
  spaceBetween: 30,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  
});















