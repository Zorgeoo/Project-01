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


//State
let data = []

//Set state

const setData = (arr) => {
    data = arr;

    render();
}

//Render

const render = () => {
    cards.innerHTML = ""

    data.forEach((item) => {
        cards.innerHTML += myFunction(item.title, item.description);
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const description = textInput.value;

    const newData = [
        ...data,
        {
            title,
            description,
        }
    ]
    setData(newData);
    overlay.classList.remove("active")
});

render();
console.log(data)
