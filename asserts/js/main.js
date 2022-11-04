let header = document.querySelector("header");
let btnWrap = document.querySelector(".btn_menu");
let menus = document.querySelectorAll(".menu");

header.addEventListener("mouseenter", () => {
  if (window.innerWidth > 768) {
    header.classList.add("active");
  }
});
header.addEventListener("mouseleave", () => {
  if (window.innerWidth > 768) {
    header.classList.remove("active");
  }
});

btnWrap.addEventListener("click", (e) => {
  let btnMenu = btnWrap.children[0];
  if (!btnMenu.classList.contains("active")) {
    btnMenu.classList.add("active");
    header.classList.add("active");
    btnMenu.children[1].style.opacity = "0";
    btnMenu.children[0].style.top = "50%";
    btnMenu.children[2].style.top = "50%";
    btnMenu.children[0].style.transform = "rotate(-45deg)";
    btnMenu.children[2].style.transform = "rotate(45deg)";
  } else {
    btnMenu.classList.remove("active");
    header.classList.remove("active");
    btnMenu.children[1].style.opacity = "1";
    btnMenu.children[0].style.top = "0";
    btnMenu.children[2].style.top = "auto";
    btnMenu.children[0].style.transform = "unset";
    btnMenu.children[2].style.transform = "unset";
  }
});

for (let menu of menus) {
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menu.nextElementSibling.classList.remove("active");
    } else {
      menu.classList.add("active");
      menu.nextElementSibling.classList.add("active");
    }
  });
}
