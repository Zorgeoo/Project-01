// const clubs = ["spurs", "suns", "clippers"]

// clubs.forEach(blabla => {
//     console.log(blabla, "dasda")
// });

// const first = (casd) => {
//     console.log(casd, 'asdada')
// }

// const second = (value) => {
//     value("BYEE")
// }

// second(first)

// const number = [11, 2, 9, 3, 4, 5]

// const findMax = (arr) => {
//     let max = 0
//     arr.forEach((bla, index) => {
//         if (bla > arr[max]) {
//             max = index
//         }
//     })
//     return max
// }



// console.log(findMax(number))

// const grades = [23, 24, 22, 21, 34, 35]

// const gradeRound = (arr) => {
//     const a = arr.map(el => {
//         if (el % 5 >= 3) {
//             return (el + (5 - (el % 5)))
//         }
//         if (el % 5 < 3) {
//             return (el)
//         }
//     })
//     return a
// }
// console.log(gradeRound(grades))

const arr = [1, 3, 4, 6, 7, 8, 9]

const filteredArray = arr.filter((el) => {
    return el % 2 === 0
})

console.log(filteredArray)