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
// const m = [-10, 7, 3, 4, 8, -12, -145]

// const reverse = (arr) => {
//     let j = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             let t = arr[j]
//             arr[j] = arr[i]
//             arr[i] = t
//             j++
//         }
//     } return arr
// }

// console.log(reverse(m))

// 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв.Тэр тоог ол

// 1-с эхэлсэн тохиолдолд:

const c = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 7, 8, 9, 16, 17]

// const number = (arr) => {
//     let n = arr.length + 1
//     let totalSum = (n * (n + 1) / 2)
//     let numberSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         numberSum = numberSum + arr[i]
//     }
//     let missingNumber = totalSum - numberSum;
//     return missingNumber
// }
// console.log(number(c))

// function findMissingNumber(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     // Iterate through the range between the minimum and maximum numbers
//     for (let i = min; i <= max; i++) {
//         let found = false;

//         // Iterate through the array to check if the current number exists
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === i) {
//                 found = true;
//                 break;
//             }
//         }

//         // If the current number doesn't exist in the array, it's the missing number
//         if (!found) {
//             return i;
//         }
//     }

//     // If no missing number is found
//     return null;
// }

// // Example array
// let array = [3, 5, 7, 9]; // Assuming one number is missing in the sequence

// // Find the missing number
// console.log("Missing number:", findMissingNumber(c)); // Output: 4


// const ex = [12, 15, 16, 17, 18, 13]

// const number = (arr) => {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     let sum = 0
//     let totalSum = ((min + max) * (arr.length + 1)) / 2
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     } return totalSum - sum
// }
// console.log(number(ex))
// console.log(ex.length)

