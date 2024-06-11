// setTimeout(() => {
//     console.log("Henlo")
// }, 2000)
// let count = 0
// const timer = setInterval(() => {
//     count++;
//     console.log("Henlo");
//     if (count === 5) {
//         clearInterval(timer)
//     }
// }, 2000)

const timer = document.querySelector(".timer")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resetBtn = document.querySelector("#reset")
let count = 0
let timerz
let a = true
let a=true
startBtn.addEventListener("click", () => {
    if (a === true) {
        timerz = setInterval(() => {
            count = count + 0.1
            timer.textContent = count.toFixed(2)
        }, 100)
    } a = false
    if(a===true){
        timerz = setInterval(() => {
            count = count + 0.1
            timer.textContent = count.toFixed(2)
        }, 100)
    } a=false
})
pauseBtn.addEventListener("click", () => {
    a=true
    clearInterval(timerz)
    a = true
})

resetBtn.addEventListener("click", () => {
    a=true
    clearInterval(timerz)
    count = 0
    timer.textContent = 0
    a = true
})
