const page = document.getElementById('page')

const buttonOne = document.getElementById('button-one')
const buttonTwo = document.getElementById('button-two')


buttonOne.addEventListener('click', () => {
    page.classList.add('flip-one')
})

buttonTwo.addEventListener('click', () => {
   page.classList.add('flip-two')
})


