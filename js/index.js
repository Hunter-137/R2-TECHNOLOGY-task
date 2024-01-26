// загрузка DOM
document.addEventListener("DOMContentLoaded", function (event) {
  // ************************************** Бургер меню  *****************************************

  const burgerBtn = document.querySelector(".header-burger-menu"); // иконка бургер меню
  const burgerMenu = document.querySelector(".header-wrapper"); // плашка по навигации
  const burgerNavItem = document.querySelectorAll(".header-nav-list__item a"); // якорные ссылки

  // смена режима по клику
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");
  });

  // перебор якорных ссылок — смена режима по клику на каждую
  burgerNavItem.forEach((item) => {
    item.addEventListener("click", function () {
      burgerBtn.classList.remove("_active");
      burgerMenu.classList.remove("_active");
    });
  });

  // если клик был Не по плашке бургера и не по кнопке меню бургера
  // то закрыть меню бургер
  document.addEventListener("click", function (event) {
    if (
      !burgerBtn.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      burgerBtn.classList.remove("_active");
      burgerMenu.classList.remove("_active");
    }
  });

  //  ****************************** Модальные окна ************************************
  const signUpBtn = document.querySelector(".header-auth__registration"); // кнопка регистрации
  const signInBtn = document.querySelector(".header-auth__login"); // кнопка авторизации
  const modalSignUp = document.querySelector(".modal.sign-up"); // модальное окно регистрации
  const modalSignIn = document.querySelector(".modal.sign-in"); // модальное окно авторизации
  const modalCloseBtn = document.querySelectorAll(".__close-btn"); // крестик в модальном окне

  signUpBtn.addEventListener("click", function () {
    modalSignUp.classList.add("_active");
  });

  signInBtn.addEventListener("click", function () {
    modalSignIn.classList.add("_active");
  });

  modalCloseBtn.forEach((item) => {
    item.addEventListener("click", function () {
      modalSignUp.classList.remove("_active");
      modalSignIn.classList.remove("_active");
    });
  });
});
