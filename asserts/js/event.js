let sec2_title = document.querySelector(".sec2 .title");
let sec2_contents = document.querySelectorAll(".sec2 .content");
let sec3_title = document.querySelector(".sec3 .title");
let sec3_content = document.querySelector(".sec3 .slide_wrap");
let sec4_title = document.querySelector(".sec4 .title");
let sec4_content = document.querySelector(".sec4 .content_wrap");

window.onload = () => {
  slide.style.transform = `translateX(0px)`;
  btnPages[0].classList.add("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
    if (window.scrollY > sec2_title.getBoundingClientRect().top * 0.7) {
      sec2_title.classList.add("scroll");
    }
    for (let sec2_content of sec2_contents) {
      if (window.scrollY > sec2_content.getBoundingClientRect().top * 2) {
        sec2_content.classList.add("scroll");
      }
    }
    if (sec3_title.getBoundingClientRect().top < 600) {
      sec3_title.classList.add("scroll");
    }
    if (sec3_content.getBoundingClientRect().top < 600) {
      sec3_content.classList.add("scroll");
    }
    if (sec4_title.getBoundingClientRect().top < 400) {
      sec4_title.classList.add("scroll");
      sec4_content.classList.add("scroll");
    }
  } else header.classList.remove("scroll");
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
  slideList();
};
