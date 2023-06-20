var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper('.tp-container-swiper1', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // slidesPerView: 0,
    // spaceBetween: 0,
    // init: false,

    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        clickable: true,
        draggable: true,
        // dragSize: dragSize,
    },

    // breakpoints: {
    //     300: {
    //         slidesPerView: 2,
    //         spaceBetween: 10,
    //     },

    //     500: {
    //         slidesPerView: 2,
    //         spaceBetween: 5,
    //     },

    //     640: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },

    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 5,
    //     },

    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 20,
    //     },
    // }
});