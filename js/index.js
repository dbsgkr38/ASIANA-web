// menu toggle


const menuToggleBtn = document.querySelector('.toggleBtn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener("click", function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuHide.classList.add("show");
        menuToggleBtn.classList.add("active")
    }else{
        menuHide.classList.remove("show");
        menuToggleBtn.classList.remove("active")
    }
});

//1차메뉴
const toggles = document.querySelectorAll('.toggle');

function toggleAcco(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggles.length; i++){
            toggles[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggles.length; i++){
    toggles[i].addEventListener("click", toggleAcco);
};


//2차메뉴
const toggleSub = document.querySelectorAll('.toggleActive');

function toggleAccodion(e){
    e.preventDefault();//a태그의 올라가려는 성질을 막아줌
    
    if(this.parentNode.classList.contains("active")){
        this.parentNode.classList.remove("active");
    } else{
        for(i = 0; i < toggleSub.length; i++){
            toggleSub[i].parentNode.classList.remove("active");
        }
        this.parentNode.classList.add("active");
    }
};

for(i = 0; i < toggleSub.length; i++){
    toggleSub[i].addEventListener("click", toggleAccodion);
};


// ----------- tab menu -------------

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}



// ---------------- LOW PRICE ---------------------

new Swiper('.low-price .low-price__inner .swiper', {
    direction: 'horizontal', //방향
    loop: true, //무한반복
    autoplay : true, //자동시작
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    spaceBetween: 10, //슬라이드와 슬라이드 간격
    navigation : {
        prevEl : ".low-price .swiper-prev",
        nextEl : ".low-price .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 1열
    },
    768: {
      slidesPerView: 2, //레이아웃 3열
    },
    1200: {
      slidesPerView: 4, //레이아웃 4열
    },
  }
});

    //  -------------- event --------------

    new Swiper('.event-mo .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay : true,
        speed: 4000,
        navigation : {
            prevEl : ".event-mo .swiper-prev",
            nextEl : ".event-mo .swiper-next"
        },
        breakpoints: { //반응형 조건 속성
          320: { //320 이상일 경우
            slidesPerView: 1, //레이아웃 1열
          },
          768: {
            slidesPerView: 1, //레이아웃 3열
          },
          1440: {
            slidesPerView: 3, //레이아웃 4열
          },
        }
    });

    var swiper = new Swiper(".event-pc .mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        autoplay : true,
        speed: 4000,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });



// gsap - scroll 관련 함수

new Swiper(newFunction(), {
    // Optional parameters
    direction: 'vertical',
    loop: true,  
    speed: 1000,
    autoplay : true
  });
  
  function newFunction() {
    return '.notice-mo .swiper';
  }