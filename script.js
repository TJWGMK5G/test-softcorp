//Burger-menu
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header-nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu when clicking a nav link
  const navLinks = document.querySelectorAll(".header-nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});

//Input range
if (document.querySelector(".order-form-select__label")) {
  const select = document.querySelector(".order-form-select__label");
  const optionsList = document.querySelector(".order-form-select__list");
  const options = document.querySelectorAll(".order-form-select__option");
  const selectedValue = document.querySelector(".order-form-select__options");

  // Show & hide options list
  select.addEventListener("click", () => {
    select.classList.toggle("order-form-select__label_open");
    optionsList.classList.toggle("active");
    select
      .querySelector(".order-form-select__icon")
      .classList.toggle("order-form-select__icon_open"); // Fixed class name
  });

  // Select option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("selected"));
      select.querySelector("span").innerHTML = option.innerHTML;
      selectedValue.value = option.innerHTML;
      option.classList.add("selected");
      optionsList.classList.remove("active"); // Close the list
      select
        .querySelector(".order-form-select__icon")
        .classList.remove("order-form-select__icon_open"); // Reset icon
      select.classList.remove("order-form-select__label_open");
    });
  });

  if (document.querySelector(".order-form-range__input")) {
    const rangeInput = document.querySelector(".order-form-range__input");
    const rangeValue = document.querySelector(".order-form-range__num");

    rangeInput.addEventListener("input", () => {
      rangeValue.textContent = rangeInput.value;
    });
  }
}
