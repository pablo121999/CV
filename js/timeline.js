var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'horizontal',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '&nbsp;&nbsp;</span>';
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    mousewheelControl: true, // <-- Esta es la clave para Swiper 3
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});
