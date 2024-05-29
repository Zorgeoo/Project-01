const a = [1, 2, 3, 4, 5, 6]
// // 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const reverse = (arr) => {
//     let number = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         number.push(arr[i])
//     } return number
// }

// console.log(reverse(a))

// 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// const number = (arr) => {
//     let numbers = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             numbers.push(arr[i])
//         }
//         if (arr[i] > arr[i + 1] || arr[i] > arr[i - 1] && arr[i - 1] == undefined || arr[i + 1] == undefined) {
//             numbers.push(arr[i])
//         }
//     } return numbers
// }

// console.log(number(a))

// 3. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const number = (arr) => {
//     let numbers = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = i + 1; g < arr.length; g++) {
//             numbers.push([arr[i], arr[g]])
//         }
//     } return numbers
// }
// console.log(number(a))

// 4. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// const b = 5

// const number = (target, arr) => {
//     let numbers = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = i + 1; g < arr.length; g++) {
//             if (arr[i] + arr[g] == target) {
//                 numbers.push([arr[i], arr[g]])
//             }
//         }
//     } return numbers
// }
// console.log(number(b, a))

// 5. Өгөгдсөн 2 массивийн огтлолцлыг ол

// const c = [12, 14, 53, 64, 75, 87]
// const d = [12, 15, 16, 76, 86, 75]

// const number = (arr, ar) => {
//     let numbers = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = 0; g < ar.length; g++) {
//             if (arr[i] == ar[g]) {
//                 numbers.push([arr[i], ar[g]])
//             }
//         }
//     } return numbers
// }
// console.log(number(c, d))

// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
const m = [-10, 7, 3, 4, 8, -12, -145]
const reverse = (arr) => {
    let number = []
    for (let i = 0; i < arr.length; i++) {
        for (let g = i + 1; g < arr.length; g++)
            if (arr[i] < arr[g]) {
                number.push(arr[i])
            }
    } return number
}
console.log(reverse(m))


// 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол