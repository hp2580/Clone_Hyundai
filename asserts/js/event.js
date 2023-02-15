let sec2_title = document.querySelector(".sec2 .title");
let sec2_contents = document.querySelectorAll(".sec2 .content");
let sec3_title = document.querySelector(".sec3 .title");
let sec3_content = document.querySelector(".sec3 .slide_wrap");
let sec4_title = document.querySelector(".sec4 .title");
let sec4_content = document.querySelector(".sec4 .content_wrap");

window.onload = () => {
  const first = slide.firstElementChild.cloneNode(true);
  const last = slide.lastElementChild.cloneNode(true);
  slide.append(first);
  slide.prepend(last);

  slide.style.width = `${(slide.childElementCount * 100) / 2}%`;
  slide.style.transform = `translateX(-${
    (100 / slide.childElementCount / 2) * index
  }%)`;
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
    clearactive(menus);
    btnWrap.firstElementChild.classList.remove("active");
  }
  slideList();
};
