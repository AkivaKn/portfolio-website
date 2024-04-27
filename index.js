const aboutPage = document.getElementById("about-page");
const page = document.getElementById("page");
const homePage = document.getElementById("home-page");
const projectPage = document.getElementById("project-page");
const back = document.getElementById('back')

homePage.addEventListener("wheel", (e) => {
    e.preventDefault();
  if (e.deltaY > 0) {
    page.classList.toggle("flip-page");
  }
});

aboutPage.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
    page.classList.toggle("flip-page");
  } else if (e.deltaY > 0) {
      back.classList.toggle('flip-back')
  }
});

projectPage.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        back.classList.toggle('flip-back')
    }
})
