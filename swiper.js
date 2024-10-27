document.addEventListener('DOMContentLoaded', function () {
    const swiper1 = new Swiper('.swiper-container-1', {
        slidesPerView: 1.5, // Показываем 1.5 слайда
        spaceBetween: 20, // Отступ между слайдами
        loop: true,
        keyboard: {
            enabled: true,       // Включить управление с клавиатуры
            onlyInViewport: true, // Управление будет работать только если слайдер в видимой области экрана
        },
    });

    const swiper2 = new Swiper('.swiper-container-2', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        keyboard: {
            enabled: true,       // Включить управление с клавиатуры
            onlyInViewport: true, // Управление будет работать только если слайдер в видимой области экрана
        },
        on: {
            slideChange: function () {
                const isMobile = window.matchMedia("(max-width: 768px)").matches;

                // Устанавливаем размеры в зависимости от устройства
                const slideWidth = isMobile ? 200 : 592; // 200px для мобильных, 592px для десктопа
                const slideHeight = isMobile ? 112 : 333; // 112px для мобильных, 333px для десктопа

                this.slides.forEach((slide, index) => {
                    if (index === this.activeIndex) {
                        // Увеличиваем размер активного слайда
                        slide.style.width = `${slideWidth * 1.5}px`;
                        slide.style.height = `${slideHeight * 1.5}px`;
                    } else {
                        // Возвращаем размеры для неактивных слайдов
                        slide.style.width = `${slideWidth}px`;
                        slide.style.height = `${slideHeight}px`;
                    }
                });
            },
            init: function () {
                const isMobile = window.matchMedia("(max-width: 768px)").matches;

                // Устанавливаем размеры в зависимости от устройства при инициализации
                const slideWidth = isMobile ? 200 : 592;
                const slideHeight = isMobile ? 112 : 333;

                this.slides.forEach((slide) => {
                    slide.style.width = `${slideWidth}px`;
                    slide.style.height = `${slideHeight}px`;
                });

                // Устанавливаем размеры для активного слайда
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.style.width = `${slideWidth * 1.5}px`;
                activeSlide.style.height = `${slideHeight * 1.5}px`;
            },
            resize: function () {
                this.update(); // Обновляем Swiper при изменении размеров экрана
            }
        },
    });



});

document.addEventListener('DOMContentLoaded', function () {
    const imgs = document.querySelectorAll('.listen-list__img')

    for (let i = 0; i < imgs.length; i++) {
        if (i > 2) {
            imgs[i].classList.add('listen-list__img--none');
        }
    }

    const btn = document.querySelector('.listen-list__btn')

    btn.addEventListener('click', function () {
        btn.classList.add('btn-none')
        const none = document.querySelectorAll('.listen-list__img--none');
        for (let i = 0; i < none.length; i++) {
            none[i].classList.remove('listen-list__img--none');
        }
    })
})

const selectedLanguage = document.querySelector('.selected-language');
const languageOptions = document.querySelector('.language-options');
const arrow = document.querySelector('.arrow');

// Toggle dropdown visibility
selectedLanguage.addEventListener('click', () => {
    languageOptions.classList.toggle('visible');
    arrow.classList.toggle('arrow-active');
});

// Handle language selection
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
        const flagSrc = option.querySelector('.flag').src;
        const langText = option.querySelector('.lang-text').textContent;

        // Update selected language
        selectedLanguage.querySelector('.flag').src = flagSrc;
        selectedLanguage.querySelector('.lang-text').textContent = langText;

        // Close dropdown
        languageOptions.classList.remove('visible');
        arrow.classList.remove('arrow-active');
    });
});

