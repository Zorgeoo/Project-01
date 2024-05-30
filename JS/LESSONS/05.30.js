// 1. Массив болон тоо өгөгдөв.Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол - 1 буцаа
const numbers = [1, 2, 3, 4, 5]
// const b = 5

// const findNumber = (arr, arry) => {
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
// const number = (arr) => {
//     let n=arr.length
//     let last=arr[n-1]
//     for(let i=n-1;i>0;i--){
//         arr[i]=arr[i-1]
//     } arr[0]=last
//     return arr
// }

// console.log(number(numbers))
// // [0-2,1-3,2-4,3-5,4-]

// 3.Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
 
// const number=(arr)=>{
//     if(arr[0]>arr[1]||arr[arr.length-1]<arr[arr.length-2]){
//         return false
//     }
//     for(let i=1; i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             return false
//         } else return true
//     }
// }

// console.log(number(numbers))
// 4.   HackerLand University has the following grading policy:
// - Every student receives a  in the inclusive range from  to .
// - Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples:
// 84 - round to  (85 - 84 is less than 3)
// 28 - do not round (result is less than 40)
// 57 - do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.