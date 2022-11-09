let header = document.querySelector("header");
let btnWrap = document.querySelector(".btn_menu");
let menus = document.querySelectorAll(".menu");
let btnMenu = btnWrap.children[0];
let btnSlides = document.querySelectorAll(".btn_slide");
let slide = document.querySelector(".slide_wrap ul");
let slideContents = document.querySelectorAll(".slide");
let btnPages = document.querySelectorAll(".btn_page");
let currentSlide = 0;
let currentIndex = 0;
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
    btnMenu.classList.add("active");
    header.classList.add("active");
    btnMenu.children[0].style.top = "50%";
    btnMenu.children[0].style.transform = "rotate(-45deg)";
    btnMenu.children[1].style.opacity = "0";
    btnMenu.children[2].style.top = "50%";
    btnMenu.children[2].style.transform = "rotate(45deg)";
  } else {
    btnMenu.classList.remove("active");
    header.classList.remove("active");
    btnMenu.children[0].style.top = "0";
    btnMenu.children[0].style.transform = "unset";
    btnMenu.children[1].style.opacity = "1";
    btnMenu.children[2].style.top = "auto";
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
      clearActive(menus);
      menu.classList.add("active");
      menu.nextElementSibling.classList.add("active");
    }
  });
}

for (let btnSlide of btnSlides) {
  btnSlide.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_prev"))
      currentIndex = currentIndex <= 0 ? 4 : currentIndex - 1;
    else currentIndex = currentIndex >= 4 ? 0 : currentIndex + 1;
    slideList();
    clearActive2(btnPages);
    btnPages[currentIndex].classList.add("active");
  });
}

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
      currentIndex = currentIndex >= 4 ? 0 : currentIndex + 1;
    } else if (prevPointer - nextPointer < -10) {
      currentIndex = currentIndex <= 0 ? 4 : currentIndex - 1;
    }
    slideList();
    clearActive2(btnPages);
    btnPages[currentIndex].classList.add("active");
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
      currentIndex = 0;
    } else if (target.classList.contains("page2")) {
      currentIndex = 1;
    } else if (target.classList.contains("page3")) {
      currentIndex = 2;
    } else if (target.classList.contains("page4")) {
      currentIndex = 3;
    } else {
      currentIndex = 4;
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

/**
 *
 * @param {*} elements Active class를 clear시킬 elements
 */
function clearActive(elements) {
  for (let element of elements) {
    element.classList.remove("active");
    element.nextElementSibling.classList.remove("active");
  }
}

function clearActive2(elements) {
  for (let element of elements) {
    element.classList.remove("active");
  }
}

function slideList() {
  slideWidth = slide.getBoundingClientRect().width / slide.children.length;
  slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
