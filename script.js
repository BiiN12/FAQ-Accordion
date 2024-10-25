const text = document.querySelectorAll(".p-1, .p-2, .p-3, .p-4");
const question = document.querySelectorAll(".q-1, .q-2, .q-3, .q-4");
const click = document.getElementsByClassName(".click");
const plusIcon = document.querySelectorAll(".plus");
const minusIcon = document.querySelectorAll(".minus");

for (let i = 0; i < text.length; i++) {
  question[i].addEventListener("click", function () {
    text[i].classList.toggle("active");
    question[i].classList.toggle("active");
    plusIcon[i].classList.toggle("hidden");
    minusIcon[i].classList.toggle("hidden");
  });
}
