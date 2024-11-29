const menu = document.querySelector(".menu"); // Декстопне меню
const menuBtn = document.querySelector(".menu-icon"); // іконка бургера (обгортка рисочок)
const body = document.body;

console.log(menu, "menu");
console.log(menuBtn, "menuBtn");
console.log(body, "body");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("_active"); // до десктопного меню буде додаватися або забиратися клас active
    menuBtn.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
}
