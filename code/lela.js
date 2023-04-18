//slider componnenet
let brands = document.querySelector(".brands");
let slides = document.querySelectorAll(".brands__img");
let left_arrow = document.querySelector(".left");
let right_arrow = document.querySelector(".right");
let current_slide = 0;
let max__slide = slides.length;
slides.forEach((el, i) => {
  el.style.transform = `translateX(${i * 300}%)`;
});

left_arrow.addEventListener("click", function (e) {
  if (current_slide === max__slide - 1) {
    current_slide = 0;
  } else {
    current_slide++;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${300 * (i - current_slide)}%)`;
  });
});
right_arrow.addEventListener("click", function (e) {
  if (current_slide === 0) {
    current_slide = max__slide - 1;
  } else {
    current_slide--;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${300 * (i - current_slide)}%)`;
  });
});
//navigation bar
let icon = document.querySelector(".nav__icon");
let mobile = document.querySelector(".mobile");
icon.addEventListener("click", function (e) {
  mobile.classList.toggle("hidden");
});
//smoth scroll
let link = document.querySelector(".nav__list--2");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Casc");
  let brand = document.getElementById("brands");
  brand.scrollIntoView({ behavior: "smooth" });
});

//modal
let btn = document.querySelector(".nati");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (true) {
    console.log("i");
  } else {
    console.log("asjxk");
  }
});
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hiddens");
  overlay.classList.remove("hiddens");
};

const closeModal = function () {
  modal.classList.add("hiddens");
  overlay.classList.add("hiddens");
};

btn.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hiddens")) {
    closeModal();
  }
});
//log-in
