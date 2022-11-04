window.onresize = () => {
  if (window.innerWidth < 768) {
  } else {
    header.classList.remove("active");
    btnWrap.children[0].classList.remove("active");
  }
};
