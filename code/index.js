("use strict");
//navigation bar
let icon = document.querySelector(".nav__icon");
let mobile = document.querySelector(".mobile");
icon.addEventListener("click", function (e) {
  mobile.classList.toggle("hidden");
});
//modal
let btn = document.querySelector(".nati");

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
//admin

//login

let addBtn = document.querySelector(".add-btn");

let description = document.querySelector(".description");
let image = document.querySelector(".image");
let price = document.querySelector(".price");
let user = document.querySelector(".user");
let password = document.querySelector(".password");
let modal1 = document.querySelector(".modal--1");

let admin = 0;
let account = {
  password: 123456,
  userName: "admin",
};
let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    user.value === account.userName &&
    Number(password.value) === account.password
  ) {
    let array = [];
    let woe = {
      user: user.value,
      pass: password.value,
    };
    array.push(woe);
    modal1.classList.remove("hidden");
    modal.classList.add("hiddens");
    overlay.classList.add("hiddens");
    localStorage.setItem("user", JSON.stringify(array));
  }
});

let container = document.querySelector(".laptop-products");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (description.value && image.value && price.value) {
    console.log("yes");
    let html = `<div class="recent__product product--1">
          <div class="product__badge badge">Sale</div>
          <img
            class="product__img product__img--1"
            src="./../images/photo_2023-04-15_08-36-16.jpg"
            alt=""
          />
          <div class="product__discription">
            <div class="product__text product__text--1">
             ${description.value}
            </div>
            <p class="product__price product__price--1">${price.value} ETB</p>
          </div>
        </div>`;

    container.insertAdjacentHTML("afterbegin", html);
  }
});
