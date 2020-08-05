const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


const link = document.querySelector(".links-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
})