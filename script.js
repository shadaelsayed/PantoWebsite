const swiper = new Swiper('.swiper', {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView : 3 ,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });


const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
