const imgs =document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev i');
const next_btn=document.querySelector('.control-next i');

const prev=document.querySelector('.prev');
const next=document.querySelector('.next');


let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';        
    }
    imgs[n].style.display='block';
}

changeSlide();

prev_btn.addEventListener("click",(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide()

})

next_btn.addEventListener("click",(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide()
})

const scrollContainer=document.querySelectorAll('.products');
for (const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
      loop:true,
    },

    autoplay: {
        delay: 300,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      loop:true,
    },

    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
   
