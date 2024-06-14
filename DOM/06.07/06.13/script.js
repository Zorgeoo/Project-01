const overlay = document.querySelector(".overlay")
const openModal = document.querySelector(".openModal")
const esc = document.querySelector(".esc")


const form = document.querySelector("form")
const cards = document.querySelector(".cards")
const card = document.querySelector(".card")


const titleInput = document.querySelector(".title")
const textInput = document.querySelector(".textArea")

openModal.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.classList.add("active");
})
esc.addEventListener("click", (event) => {
    event.preventDefault()
    overlay.classList.remove("active")
})

const data = []

const myFunction = (title, description) => {
    return `<div class="card">
    <button class="small">X</button>
    <h1>${title}</h1>
    <p>${description}</p>
    </div>`
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = titleInput.value
    const description = textInput.value

    const card = myFunction(title, description)
    cards.innerHTML += card
    data.push({
        "Title": title,
        "description": description
    })

    overlay.classList.remove("active")

    const small = document.querySelectorAll('.small');

    small.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.target.parentNode.remove()
        });
    });

})
console.log(data)

// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("small")) {
//         // Find the closest card element and remove it from the DOM
//         event.target.closest(".card").remove();
//     }
// });

const render = (arr) => {
    arr.forEach((card) => {
        cards.innerHTML += card
    })
}

