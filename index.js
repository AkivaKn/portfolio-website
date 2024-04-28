const page = document.getElementById("page");
const homePage = document.getElementById("home-page");
const aboutPage = document.getElementById("about-page");
const projectPage = document.getElementById("project-page");
const homeDownButton = document.getElementById('home-down-button')
const aboutUpButton = document.getElementById('about-up-button')
const aboutDownButton = document.getElementById('about-down-button')
const projectUpButton = document.getElementById('project-up-button')



homePage.addEventListener("wheel", (e) => {
    e.preventDefault();
  if (e.deltaY > 0) {
    flipDownToAbout()
  }
});

homeDownButton.addEventListener('click', () => {
  flipDownToAbout()
})

aboutPage.addEventListener("wheel", (e) => {
    e.preventDefault();
  if (e.deltaY < 0) {
      flipUpToHome()
  } else if (e.deltaY > 0) {
    flipDownToProject()
  }
});

aboutUpButton.addEventListener('click', () => {
  flipUpToHome()
})

aboutDownButton.addEventListener('click', () => {
  flipDownToProject()
})

projectPage.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    e.preventDefault();
    flipUpToAbout()
    }
})

projectUpButton.addEventListener('click', () => {
  flipUpToAbout()
})




function flipDownToAbout() {
  page.classList.add("flip-one");
}

function flipUpToHome() {
  page.classList.remove("flip-one");
}

function flipDownToProject() {
  page.classList.add('flip-two')
}

function flipUpToAbout() {
  page.classList.remove('flip-two')
  
}