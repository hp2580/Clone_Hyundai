window.onscroll = () => {
  if (window.scrollY > 0) header.classList.add("scroll");
  else header.classList.remove("scroll");
};

window.onresize = () => {
  if (window.innerWidth < 768) {
  } else {
    header.classList.remove("active");
    clearActive(menus);
    btnWrap.children[0].classList.remove("active");
    btnMenu.children[0].style.top = "0";
    btnMenu.children[0].style.transform = "unset";
    btnMenu.children[1].style.opacity = "1";
    btnMenu.children[2].style.top = "auto";
    btnMenu.children[2].style.transform = "unset";
  }
};
