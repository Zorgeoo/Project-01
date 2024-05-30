// 1. Массив болон тоо өгөгдөв.Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол - 1 буцаа
const numbers = [1, 2, 3, 4, 5]
// const b = 5

// const findNumber = (arr, b) => {
//     let number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == b) {
//             number = arr[i]
//         }
//     } return number
// }
// console.log(findNumber(numbers, b))

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
// Жич: 1 2 3 4 5 -> 5 1 2 3 4
const number = (arr) => {
    let b = arr.length - 2
    for (let i = arr.length - 1; i > 0; i++) {
        temp = arr[i]
        arr[i] = arr[b]
        arr[b] = temp;
        b--;
    } return arr
}

console.log(number(numbers))