const next = document.querySelector('#next')
const images = document.querySelectorAll('img')

next.addEventListener("click", () => {
    images.style.border = '2px solid red'
})