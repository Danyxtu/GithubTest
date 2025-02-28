let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    header.classList.add("header-hidden");
    header.classList.remove("header-visible");
  } else {
    header.classList.add("header-visible");
    header.classList.remove("header-hidden");
  }
  lastScrollTop = scrollTop;
});

const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  
  const scrollHeight = document.documentElement.scrollHeight; 
  const scrollTop = window.scrollY || document.documentElement.scrollTop; 
  const clientHeight = window.innerHeight; 

  if (scrollTop + clientHeight >= scrollHeight - 100) {
    footer.classList.add("footer-visible");
  } else {
    footer.classList.remove("footer-visible");
  }
});

