const page = document.getElementById("page");
const homePage = document.getElementById("home-page");
const aboutPage = document.getElementById("about-page");
const projectPage = document.getElementById("project-page");


homePage.addEventListener("wheel", (e) => {
    e.preventDefault();
  if (e.deltaY > 0) {
    page.classList.add("flip-one");
  }
});

aboutPage.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
    page.classList.remove("flip-one");
  } else if (e.deltaY > 0) {
      page.classList.add('flip-two')
  }
});

projectPage.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
      e.preventDefault();
        page.classList.remove('flip-two')
    }
})
