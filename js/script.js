const menu = document.querySelector(".menu"); // Декстопне меню
const menuBtn = document.querySelector(".menu-icon"); // іконка бургера (обгортка рисочок)
const body = document.body;
const filter = document.querySelector(".filter");

// console.log(filter, "filter"); // Глянь що тут!!! Тут є дочірні елементи
// console.log(menu, "menu");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("_active"); // до десктопного меню буде додаватися або забиратися клас active
    menuBtn.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}

if (filter) {
  const items = filter.querySelectorAll(".block-filter");

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      item.querySelector(".block-filter__dropdown").classList.toggle("_active");
      item.querySelector(".block-filter__icon").classList.toggle("_active");

      //   console.log(event, "event");
      //   console.log(event.target, "event.target");

      // event.target --> це сам елемент
      // const filter = document.querySelector(".filter"); --> теж знайде event.target
      // item.querySelector(".block-filter__icon")  --> теж знайде event.target
      // НУ Я ТУТ РІЗНІ ЕЛЕМЕНТИ ШУКАВ ^

      if (event.target.classList.contains("block-filter__item")) {
        item.querySelector(".block-filter__value").textContent =
          event.target.textContent;
      }
    });
  });
}

//////////////////// -- SWIPER -- ////////////////////
const swiper = new Swiper(".popular-slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //example

    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // // when window width is >= 640px
    // 640: {
    //   slidesPerView: 4,
    //   spaceBetween: 40
    // }

    992: {
      slidesPerView: 3,
    },

    660: {
      slidesPerView: 2,
    },
  },
});
