const box = document.getElementsByClassName("box")[0]

box.addEventListener("click", () => {
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "black"
    } else { box.style.backgroundColor = "red" }
}
)


const minus = document.querySelector('#minus')
box.textContent = 0;
minus.addEventListener('click', () => {
    box.textContent--;
})
const plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
    box.textContent++;
})