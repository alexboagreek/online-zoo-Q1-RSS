
// //function burger-menu connect 

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__menu');
    const menuCloseItem = document.querySelector(".header__nav-close");
    // console.log(menuCloseItem)
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuCloseItem.addEventListener('click', () => {

         menu.classList.remove('header__nav-active');
         
    });
}());



const popup = document.querySelector('.popup');
// console.log(popup);

const popupClose = document.querySelector('.close');
// console.log(popupClose);

const donateBtn = document.querySelector('.pay-feed__button');
// console.log(donateBtn);

const popupDonationBtn = document.querySelector('.popup__btn');
// console.log(popupDonationBtn);

const formDonate = document.querySelector('.donation__form-box');
// console.log(formDonate);

const modalBtnOpen = document.querySelector('.donate__info-btn');
console.log(modalBtnOpen);

const modal1 = document.querySelector('.modal-step');
console.log(modal1);

modalBtnOpen.addEventListener('click', function (){
    modal1.classList.add('popup-open');

});

donateBtn.addEventListener('click', function () {
    popup.classList.add('popup-active');
});

window.onclick = function (e) {
    if(e.target == popup) {
        popup.style.display= "none";
    }
}

// window.onclick = function (e) {
//     if(e.target == modal1) {
//         modal1.style.display = "none";
//     }
// }

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup-active');
    popup.classList.add('popup-hidden');
});

// // popupDonationBtn.addEventListener('click', function () {
// //     formDonate.classList.add('popup');
// // });



// //zoos slider machine start  

// // window.addEventListener('load', () => {

// //     const slider = document.querySelector('.slider__body-items');
// //     // console.log(slider);
    
// //     const leftArrow = document.querySelector('.prev-arrow');
// //     // console.log(leftArrow);
    
// //     const images = document.querySelectorAll('.slider__body-items img');
// //     // console.log(images);
    
// //     const rightArrow = document.querySelector('.next-arrow');
// //     // console.log(rightArrow);
    
// //     // counter 
    
// //     let counter = 0;

// //     const stepSize = images[0].clientWidth;
// //     // console.log(stepSize);
// //     slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    
    
// //     rightArrow.addEventListener('click' , () => {
// //         if (counter >= images.length - 1) counter = -1;
// //         slider.classList.add('transformAnimation');
// //         counter++;
// //         slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
// //     });
    

    
// //     leftArrow.addEventListener('click' , () => {
// //         if (counter <= 0 ) counter = images.length;
// //         slider.classList.add('transformAnimation');
// //         counter--;
// //         slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    
// //     });

// // });

// // //meet some pets slider machine 

// // const sliderBodyPets = document.querySelectorAll('.slider-cards');
// // console.log(sliderBodyPets);

// // const nextSliderItem = document.querySelector('.btn-upgrade-next');
// // console.log(nextSliderItem);

// // const prevSliderItem = document.querySelector('.btn-upgrade-prev');
// // console.log(prevSliderItem);

// // const clientScreenWidth = document.documentElement.clientWidth;
// // let turn = 0;
// // clientScreenWidth > 1450 ? turn = 4 : turn = 5;

// // let count = 0;
// //  function showSlides(n) {
// //      if(n < 0) {
// //          sliderBodyPets.forEach(slide => {
// //              const index = Number(slide.dataset.card);
// //              let newIndex;
// //              if (index === sliderBodyPets.length / 2) {
// //                  newIndex = 1;
// //              } else if (index === sliderBodyPets.length) {
// //                  newIndex == 8;
// //              } else newIndex = index + 1;
// //              slide.removeAttribute('data-card');
// //              slide.setAttribute('data-card', newIndex);
// //          });
// //          count--;
// //      } else {
// //         sliderBodyPets.forEach(slide => {
// //             const index = Number(slide.dataset.card);
// //             let newIndex;
// //             if (index === 1) {
// //               newIndex = sliderBodyPets.length / 2;
// //             } else if (index === 8) {
// //               newIndex = sliderBodyPets.length;
// //             } else newIndex = index - 1;
// //             slide.removeAttribute('data-card');
// //             slide.setAttribute('data-card', newIndex); 

// //      });
// //      count++;
// //  } if (count < 1) {
// //     prevSliderItem.style.pointerEvents = "none";
// //     nextSliderItem.style.pointerEvents = "all";
// //   } else if (count > turn) {
// //     nextSliderItem.style.pointerEvents = "none";
// //     prevSliderItem.style.pointerEvents = "all"; 
// //   } else {
// //     nextSliderItem.style.pointerEvents = "all";
// //     prevSliderItem.style.pointerEvents = "all";
// //   }
// // }


// // const stepSizeSlider = sliderCards[0].clientWidth;
// // console.log(stepSizeSlider);

// // sliderBodyPets.style.transform = 'translateX(' + `${ -stepSizeSlider * counter}px)`;


// // nextSliderItem.addEventListener('click', () => {
// //     if(sliderCounter >= sliderCards.length - 1) sliderCounter = -1;
// //     sliderBodyPets.classList.add('transformAnimation');
// //     counter++;
// //     sliderBodyPets.style.transform = 'translateX(' + `${ -stepSizeSlider * sliderCounter}px)`;
// // });



//reviews slider machine  


const sliderBodyElement = document.querySelector('.reviews-slider');
console.log(sliderBodyElement);

const rightBtnMachine = document.querySelector('.next-btn');
console.log(rightBtnMachine);
const leftBtnMachine = document.querySelector('.prev-btn');
console.log(leftBtnMachine);

const reviewsCards = document.querySelectorAll('.reviews__cards');
console.log(reviewsCards);

let counter = 0;
const stepSize = reviewsCards[0].clientWidth;
console.log(stepSize);

sliderBodyElement.style.transform = 'translateX(' + `${ -stepSize * counter}px)`;

rightBtnMachine.addEventListener('click', () => {
    if(counter >= reviewsCards.length - 1) counter = -1;
    sliderBodyElement.classList.add('transformAnimation');
    counter++;
    sliderBodyElement.style.transform = 'translateX(' + `${ -stepSize * counter}px)`;
});


leftBtnMachine.addEventListener('click', () => {
    if(counter <= 0) counter = reviewsCards.length;
    sliderBodyElement.classList.add('transformAnimation');
    counter--;
    sliderBodyElement.style.transform = 'translateX(' + `${ -stepSize * counter}px)`;
});


window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
});



// zoos slider machine video-magic


const mainVideo = document.querySelector('.main-video-item');
console.log(mainVideo);
const arrVideo = document.querySelectorAll('.magic-item');
console.log(arrVideo);
const clickVideo = document.querySelectorAll('.magic');
console.log(clickVideo);
const sliderPats = document.querySelector('.slider__frame-body');
console.log(sliderPats);
const scrollSliderPats = document.querySelector('.slider__body-wrapper');
console.log(scrollSliderPats);




clickVideo.forEach((el, index) => el.addEventListener('click', () => {
    const mainSRC = mainVideo.src;
    const clickSRC = arrVideo[index].src;
    mainVideo.src = clickSRC;
    arrVideo[index].src = mainSRC;
})
)

const scrollStep = scrollSliderPats.scrollWidth / sliderPats.childElementCount;
let width = scrollSliderPats.offsetWidth;
let autoSliderInterval = setInterval(() => {
  scrollSliderPats.scrollBy({
    top: 0,
    left: scrollStep
  })

  if (scrollSliderPats.scrollLeft >= width + scrollStep) {
    scrollSliderPats.scrollBy({
      top: 0,
      left: -scrollSliderPats.scrollWidth
    })
  }
}, 5000); 

