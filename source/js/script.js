//nav link color
let element = new Array();
element = document.querySelectorAll(".menu__link");
element = Array.from(element);
let url = window.location.href;
console.log(url);
for (let i = 0; i < element.length; i++) {
  if (element[i].href == url) {
    element[i].classList.add("active");
  }
  console.log(element[i].href);
}

//menu
const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
  const menuBody = document.querySelector(".menu__body");
  menuIcon.addEventListener("click", (e) => {
    document.body.classList.toggle("_lock");
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
