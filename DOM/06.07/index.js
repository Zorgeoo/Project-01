const tictac = document.querySelectorAll('.boxes');

console.log(tictac)
let turn = 0
tictac.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "" && turn === 0) {
            box.textContent = 'X';
            turn = 1
        } else if (box.textContent === "" && turn === 1) {
            box.textContent = 'O';
            turn = 0
        }
    })
}
)
const restart = document.querySelector('.button')
restart.addEventListener("click", () => {
    tictac.forEach((box) => {
        box.textContent = ""
    })
    turn = 0
})


