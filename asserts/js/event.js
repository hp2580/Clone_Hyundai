const sec2_title = document.querySelector(".sec2 .title"),
  sec2_contents = document.querySelectorAll(".sec2 .content"),
  sec3_title = document.querySelector(".sec3 .title"),
  sec3_content = document.querySelector(".sec3 .slide_wrap"),
  sec4_title = document.querySelector(".sec4 .title"),
  sec4_content = document.querySelector(".sec4 .content_wrap");

const arrFade = [
  sec2_title,
  sec2_contents[0],
  sec2_contents[1],
  sec2_contents[2],
  sec3_title,
  sec3_content,
  sec4_title,
  sec4_content,
];

let width;
let startPoint;

window.onload = () => {
  const first = slide.firstElementChild.cloneNode(true);
  const first2 = slide.firstElementChild.nextElementSibling.cloneNode(true);
  const last = slide.lastElementChild.cloneNode(true);
  const last2 = slide.lastElementChild.previousElementSibling.cloneNode(true);
  slide.append(first);
  slide.append(first2);
  slide.prepend(last);
  slide.prepend(last2);

  width = 100 / slide.childElementCount;
  startPoint = width / 2;

  if (window.innerWidth > 768) {
    slide.style.width = `${(slide.childElementCount * 100) / 2}%`;
    slide.style.transform = `translateX(-${width * index - startPoint}%)`;
  } else {
    slide.style.width = `${slide.childElementCount * 100}%`;
    slide.style.transform = `translateX(-${width * index}%)`;
  }

  setTimeout(() => {
    slide.style.transition = `transform .4s linear`;
  });
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll");
    console.log(
      document.querySelector(".content1").getBoundingClientRect().top
    );
    arrFade.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      if (top * 0.7 < window.innerHeight / 2) {
        if (!element.classList.contains("scroll")) {
          element.classList.add("scroll");
        }
      } else if (top >= window.innerHeight * 0.9) {
        if (element.classList.contains("scroll")) {
          element.classList.remove("scroll");
        }
      }
    });
  } else header.classList.remove("scroll");
};

window.onresize = () => {
  width = 100 / slide.childElementCount;
  moveSlide();
  moveBySize();
  if (window.innerWidth < 768) {
    slide.style.width = `${slide.childElementCount * 100}%`;
    slide.style.transform = `translateX(-${width * index}%)`;
  } else {
    header.classList.remove("active");
    clearActive(menus);
    btnWrap.firstElementChild.classList.remove("active");
    slide.style.width = `${(slide.childElementCount * 100) / 2}%`;
    slide.style.transform = `translateX(-${width * index - startPoint}%)`;
  }
};
