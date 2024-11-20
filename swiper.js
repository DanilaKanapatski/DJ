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
        pagination: {
            el: '.swiper-pagination', // Элемент пагинации
            clickable: true, // Делаем пагинацию кликабельной
        },
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

                    // Устанавливаем размеры для изображений и видео внутри слайдов
                    slide.querySelectorAll('.thumbnail, .video-player').forEach(element => {
                        element.style.width = slide.style.width;
                        element.style.height = slide.style.height;
                    });
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

                    // Устанавливаем размеры для изображений и видео внутри слайдов
                    slide.querySelectorAll('.thumbnail, .video-player').forEach(element => {
                        element.style.width = slide.style.width;
                        element.style.height = slide.style.height;
                    });
                });

                // Устанавливаем размеры для активного слайда
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.style.width = `${slideWidth * 1.5}px`;
                activeSlide.style.height = `${slideHeight * 1.5}px`;

                // Устанавливаем размеры для изображений и видео внутри активного слайда
                activeSlide.querySelectorAll('.thumbnail, .video-player').forEach(element => {
                    element.style.width = activeSlide.style.width;
                    element.style.height = activeSlide.style.height;
                });
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
const languageOptions1 = document.querySelector('.language-options-mob');
const arrow = document.querySelector('.arrow');
const arrow1 = document.querySelector('.arrow-mob');
const sel = document.querySelector('.selected-language-mob');
console.log(sel)
console.log(languageOptions1)

// Toggle dropdown visibility
selectedLanguage.addEventListener('click', () => {
    languageOptions.classList.toggle('visible');
    arrow.classList.toggle('arrow-active');
});

sel.addEventListener('click', () => {
    languageOptions1.classList.toggle('visible');
    console.log(1)
    arrow1.classList.toggle('arrow-active');
});

// sel.addEventListener('click', () => {
//     languageOptions.classList.toggle('visible');
//     console.log(1)
//     arrow.classList.toggle('arrow-active');
// });

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

document.querySelectorAll('.language-option-mob').forEach(option => {
    option.addEventListener('click', () => {
        const flagSrc = option.querySelector('.flag1').src;
        const langText = option.querySelector('.lang-text1').textContent;

        // Update selected language
        sel.querySelector('.flag1').src = flagSrc;
        sel.querySelector('.lang-text1').textContent = langText;

        // Close dropdown
        languageOptions1.classList.remove('visible');
        arrow1.classList.remove('arrow-active');
    });
});


    const overlay = document.querySelector('.overlay');
    const burgerMenu = document.querySelector('.burger-menu');
function toggleMenu() {



    // Переключаем класс 'active' для анимации
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');

}

const links = document.querySelectorAll('.menu-list a')

links.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
        burgerMenu.classList.remove('active');
    })
})

document.getElementById('playButton').addEventListener('click', function() {
    let audio = document.getElementById('audioPlayer');
    let playIcon = document.getElementById('playIcon');
    let listen = document.getElementById('playButton')

    if (audio.paused) {
        audio.play();
        // Заменяем изображение на паузу
        playIcon.src = "images/stop.svg";
        playIcon.style.top = '10px';
        listen.style.backgroundImage = 'url("images/btn-hover.png")';
    } else {
        audio.pause();
        // Заменяем изображение на воспроизведение
        playIcon.src = "images/play.svg";
        playIcon.style.top = '15px'
        listen.style.backgroundImage = 'url("images/btn-over.png")';
    }
});

document.getElementById('playButton2').addEventListener('click', function() {
    let audio = document.getElementById('audioPlayer2');
    let playIcon = document.getElementById('playIcon2');
    let listen = document.getElementById('playButton2')

    if (audio.paused) {
        audio.play();
        // Заменяем изображение на паузу
        playIcon.src = "images/stop.svg";
        playIcon.style.top = '10px';
        listen.style.backgroundImage = 'url("images/btn-hover.png")';
    } else {
        audio.pause();
        // Заменяем изображение на воспроизведение
        playIcon.src = "images/play.svg";
        playIcon.style.top = '15px'
        listen.style.backgroundImage = 'url("images/btn-over.png")';
    }
});

document.getElementById('playButton3').addEventListener('click', function() {
    let audio = document.getElementById('audioPlayer3');
    let playIcon = document.getElementById('playIcon3');
    let listen = document.getElementById('playButton3')

    if (audio.paused) {
        audio.play();
        // Заменяем изображение на паузу
        playIcon.src = "images/stop.svg";
        if (window.matchMedia("(max-width: 768px)").matches) {
            playIcon.style.top = '9px';
        } else {
            playIcon.style.top = '10px';
        }
        // playIcon.style.top = '10px';
        listen.style.backgroundImage = 'url("images/btn-hover.png")';
    } else {
        audio.pause();
        // Заменяем изображение на воспроизведение
        playIcon.src = "images/play.svg";
        if (window.matchMedia("(max-width: 768px)").matches) {
            playIcon.style.top = '13px';
        } else {
            playIcon.style.top = '15px';
        }
        // playIcon.style.top = '15px'
        listen.style.backgroundImage = 'url("images/btn-over.png")';
    }
});

document.querySelectorAll('.video-btn__img').forEach(btn => {
    btn.addEventListener('click', function() {
        let thumbnail = this.previousElementSibling;
        let videoPlayer = this.nextElementSibling;

        // Проверка на наличие элементов
        if (thumbnail && videoPlayer) {
            // Скрываем изображение кнопки
            this.style.display = 'none';

            // Скрываем изображение
            thumbnail.style.display = 'none';

            // Получаем размеры слайда
            let slide = this.closest('.swiper-slide');
            let slideWidth = slide.offsetWidth;
            let slideHeight = slide.offsetHeight;

            // Проверяем, что размеры не равны нулю
            if (slideWidth > 0 && slideHeight > 0) {
                // Устанавливаем размеры видео
                videoPlayer.style.width = slideWidth + 'px';
                videoPlayer.style.height = slideHeight + 'px';

                // Показываем видео
                videoPlayer.style.display = 'block';
                videoPlayer.play();
            } else {
                console.error('Размеры слайда равны нулю');
            }
        } else {
            console.error('Не удалось найти элементы thumbnail или videoPlayer');
        }
    });
});