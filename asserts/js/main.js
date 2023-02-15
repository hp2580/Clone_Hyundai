const header = document.querySelector("header");
const btnWrap = document.querySelector(".btn_menu");
const menus = document.querySelectorAll(".depth1 li");
const btnMenu = btnWrap.children[0];
const btnSlides = document.querySelectorAll(".btn_slide");
const slide = document.querySelector(".slide_wrap ul");
const slideContents = document.querySelectorAll(".slide");
const paginations = document.querySelectorAll(".btn_page");
let currentSlide = 0;
let index = 1;
let indexPage = 0;
let slideWidth;
let prevPointer;
let nextPointer;
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
    const max = 4;
    if (btn.classList.contains("btn_prev")) {
      index--;
      indexPage--;
      if (indexPage < 0) indexPage = max;
    } else {
      index++;
      indexPage++;
      if (indexPage > max) indexPage = 0;
    }
    clearActive(paginations);
    paginations[indexPage].classList.add("active");
  });
});

for (let slideContent of slideContents) {
  slideContent.addEventListener("mousedown", (e) => {
    if (isDrag) {
      isDrag = false;
      prevPointer = e.screenX;
    }
  });

  slideContent.addEventListener("mouseup", (e) => {
    nextPointer = e.screenX;
    if (prevPointer - nextPointer > 10) {
      index = index >= 4 ? 0 : index + 1;
    } else if (prevPointer - nextPointer < -10) {
      index = index <= 0 ? 4 : index - 1;
    }
    slideList();
    clearActive2(btnPages);
    btnPages[index].classList.add("active");
    setTimeout(() => {
      isDrag = true;
    }, 500);
  });
}

for (let btnPage of btnPages) {
  btnPage.addEventListener("click", ({ target }) => {
    clearActive2(btnPages);
    target.classList.add("active");
    if (target.classList.contains("page1")) {
      index = 0;
    } else if (target.classList.contains("page2")) {
      index = 1;
    } else if (target.classList.contains("page3")) {
      index = 2;
    } else if (target.classList.contains("page4")) {
      index = 3;
    } else {
      index = 4;
    }
    slideList();
  });
}

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

function slideList() {
  slideWidth = slide.getBoundingClientRect().width / slide.children.length;
  slide.style.transform = `translateX(-${index * slideWidth}px)`;
}
