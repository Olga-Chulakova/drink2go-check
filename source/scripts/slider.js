const promo = document.querySelector('.promo');
const promoItems = document.querySelectorAll('.promo__item:not(.promo-button)');
const buttonBack = document.querySelector('.promo-button__slider--back');
const buttonForward = document.querySelector('.promo-button__slider--forward');
const sliderDivisionButtons = document.querySelectorAll('.slider-division__button');
let currentSlide = 0;

function showSlide(index) {
  promoItems.forEach((item) => {
    item.classList.remove('promo__item--active');
  });
  promoItems[index].classList.add('promo__item--active');

  // Удаляем все классы фона с .promo
  promo.classList.remove('promo--bg1', 'promo--bg2', 'promo--bg3');

  // Добавляем соответствующий класс фона на .promo
  if (index === 0) {
    promo.classList.add('promo--bg1');
  } else if (index === 1) {
    promo.classList.add('promo--bg2');
  } else if (index === 2) {
    promo.classList.add('promo--bg3');
  }

  // ===== ПОДСВЕТКА КНОПОК-ИНДИКАТОРОВ =====
  // Удаляем класс активности со всех кнопок
  sliderDivisionButtons.forEach((button) => {
    button.classList.remove('slider-division__button--active');
  });

  // Добавляем класс активности к текущей кнопке
  sliderDivisionButtons[index].classList.add('slider-division__button--active');
}

function initSlider() {
  // Проверяем ширину экрана
  if (window.innerWidth >= 1440) {
    // Добавляем обработчики событий для кнопок
    buttonBack.addEventListener('click', () => {
      currentSlide--;
      // ===== УБИРАЕМ ЗАЦИКЛИВАНИЕ =====
      if (currentSlide < 0) {
        currentSlide = 0; // Останавливаемся на первом слайде
      }
      showSlide(currentSlide);
    });

    buttonForward.addEventListener('click', () => {
      currentSlide++;
      // ===== УБИРАЕМ ЗАЦИКЛИВАНИЕ =====
      if (currentSlide >= promoItems.length) {
        currentSlide = promoItems.length - 1; // Останавливаемся на последнем слайде
      }
      showSlide(currentSlide);
    });

    // Показываем первый слайд
    showSlide(currentSlide);
  } else {
    // Если ширина экрана меньше 1440px, показываем только первый слайд
    showSlide(0);
  }
}

// Инициализируем слайдер при загрузке страницы и при изменении размера окна
initSlider();
window.addEventListener('resize', initSlider);

