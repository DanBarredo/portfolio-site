const about = document.querySelector(".about-section");
const btns = document.querySelectorAll(".tab-btn");
const aboutContents = document.querySelectorAll(".about-content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    aboutContents.forEach((content) => {
      content.classList.remove("active");
    });
    const elem = document.getElementById(id);
    elem.classList.add("active");
  }
});
