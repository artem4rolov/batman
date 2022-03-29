const swiper = new Swiper('.main-slider', {
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.main-slider__arrow',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,  
        },
        768: {
            slidesPerView: 2,  
        }
    }
});

let burger = document.querySelector('.menu-burger'),
    closeMenu = document.querySelector('.header__menu-button-close'),
    menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';
});

const modalWindow = document.querySelector('.modal'),
      button = document.querySelector('.main__button-play');

button.addEventListener('click', (event) => {
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (event) => {
    const isModal = event.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.classList.remove('active');
    }
});