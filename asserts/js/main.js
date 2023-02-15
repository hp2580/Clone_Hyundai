const header = document.querySelector("header");
const btnWrap = document.querySelector(".btn_menu");
const menus = document.querySelectorAll(".depth1 li");
const btnMenu = btnWrap.children[0];
const btnSlides = document.querySelectorAll(".btn_slide");
const slide = document.querySelector(".slide_wrap ul");
const paginations = document.querySelectorAll(".btn_page");
let currentSlide = 0;
let index = 2;
let indexPage = 0;
let slideWidth;
let prevX;
let transitionEnd = true;
let isDrag = true;

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
  if (!btnMenu.classList.contains("active")) {
    document.body.classList.add("hidden");
    btnMenu.classList.add("active");
    header.classList.add("active");
    clearActive(menus);
  } else {
    document.body.classList.remove("hidden");
    btnMenu.classList.remove("active");
    header.classList.remove("active");
  }
});

menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      clearActive(menus);
      menu.classList.add("active");
    }
  });
});

btnSlides.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (transitionEnd) {
      transitionEnd = false;
      if (btn.classList.contains("btn_prev")) {
        moveSlide("prev");
      } else {
        moveSlide("next");
      }
      clearActive(paginations);
      paginations[indexPage].classList.add("active");
    }
  });
});

slide.addEventListener("mousedown", ({ clientX }) => {
  if (transitionEnd) prevX = clientX;
});

slide.addEventListener("mouseup", ({ clientX }) => {
  if (transitionEnd) {
    let direction = clientX - prevX;
    if (direction > 100 || direction < -100) {
      moveSlide(direction);
      transitionEnd = false;
    }
  }
});

slide.addEventListener("transitionend", () => {
  if (index > slide.childElementCount - 3) {
    index = 2;
    slide.style.transition = ``;
    moveBySize();
  } else if (index < 2) {
    index = slide.childElementCount - 3;
    slide.style.transition = ``;
    moveBySize();
  }
  setTimeout(() => {
    slide.style.transition = `transform .4s ease`;
    transitionEnd = true;
  });
});

paginations.forEach((btn) => {
  btn.addEventListener("click", () => {
    let str = Array.from(btn.classList)
      .filter((name) => name.startsWith("page"))
      .toString();
    let num = +str.charAt(str.length - 1);
    if (num == 1 && index == 6) {
      index += 1;
    } else if (num == 5 && index == 2) {
      index -= 1;
    } else {
      index = num + 1;
    }
    indexPage = num - 1;
    moveSlide();
  });
});

setInterval(() => {
  let clone = document
    .querySelector(".sec4 ul")
    .firstElementChild.cloneNode(true);
  document.querySelector(".sec4 ul").firstElementChild.remove();
  document.querySelector(".sec4 ul").appendChild(clone);
}, 3000);

function clearActive(element) {
  element.forEach((ele) => {
    ele.classList.remove("active");
  });
}

function moveBySize() {
  if (window.innerWidth > 768) {
    slide.style.transform = `translateX(-${width * index - startPoint}%)`;
  } else {
    slide.style.transform = `translateX(-${width * index}%)`;
  }
}

function moveSlide(dir) {
  let max = 4;
  if (dir > 100 || dir == "prev") {
    index--;
    indexPage--;
    if (indexPage < 0) indexPage = max;
  } else if (dir < -100 || dir == "next") {
    index++;
    indexPage++;
    if (indexPage > max) indexPage = 0;
  }

  clearActive(paginations);
  paginations[indexPage].classList.add("active");
  moveBySize();
}
