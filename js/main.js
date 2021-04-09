$(function(){
    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.nav__menu').toggleClass('nav__menu--active');
    });

    $('.menu__slider-item').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="img/left.svg"></img></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="img/right.svg"></img></button>',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.reviews__cards').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="img/left.svg"></img></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="img/right.svg"></img></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1038,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
              }
            },
            {
              breakpoint: 792,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 566,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('basket-btn')) {
        const change = e.target.classList.contains('plus-btn') ? 1 : -1;
        const input = e.target.parentNode.querySelector('input');
        input.value = Math.max(0, +input.value + change);
        }
    });
});




