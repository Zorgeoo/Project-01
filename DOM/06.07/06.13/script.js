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
    overlay.classList.remove("active")
})


// Event listener for closing a card when the "X" button is clicked
// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("small")) {
//         const cardToRemove = event.target.closest(".card");
//         cardToRemove.remove();
//     }
// });
// Add an event listener for the "X" button on each card

// Add an event listener for the "X" button on each card
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("small")) {
        // Find the closest card element and remove it from the DOM
        event.target.closest(".card").remove();
    }
});

