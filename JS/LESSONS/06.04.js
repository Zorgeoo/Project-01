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

// const arr = [1, 3, 4, 6, 7, 8, 9]

// const filteredArray = arr.filter((el) => {
//     return el % 2 === 0
// })

// console.log(filteredArray)
// const a = [1, 4, 1, 2, 4, 5, 8, 2]
// const swap = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let type = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = type
//             }
//         }
//     } return arr
// }
// console.log(swap(a))

const swap = (arr, i, j) => {
    let type = arr[i]
    arr[i] = arr[j]
    arr[j] = type
}

// swap(a, 0, 1)

// console.log(a)

// const bubble = (arr) => {
//     for (let k = 0; k < arr.length; k++) {
//         for (let i = 0; i < arr.length - 1 - k; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, [i], [i + 1])
//             }
//         }
//     } return arr
// }

// console.log(bubble(a))

// const select = (arr, start) => {
//     let minIndex = start
//     for (let i = start + 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i
//         }
//     } return minIndex
// }

// // console.log(select(a, 4))

// const selector = (arr) => {
//     for (let k = 0; k < arr.length; k++) {
//         swap(arr, k, select(arr, k))
//     }
// }

// selector(a)

// console.log(a)

const arr = ["a", "asdsa", "das", 'aa']

arr.sort((a, b) => a.length - b.length);

console.log(arr)


a = 3
b = a < 5 ? true : false;

console.log(b)