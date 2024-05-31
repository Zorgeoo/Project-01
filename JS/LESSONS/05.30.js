// 1. Массив болон тоо өгөгдөв.Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол - 1 буцаа
// const numbers = [1, 2, 3, 4, 5, 8]
// const b = 8

// const findNumber = (arr, arry) => {
//     let number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arry) {
//             number = i
//         } else number = -1
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


// 3.Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
// const blue = [1, 2, 3, 4, 5, 7, 2]
// const number = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[i - 1]) {
//             return false
//         }
//     } return true
// }

// console.log(number(blue))

// 4.   HackerLand University has the following grading policy:
// - Every student receives a in the inclusive range from  to.
// - Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
// If the difference between the  and the next multiple of  is less than, round  up to the next multiple of.
// If the value of  is less than, no rounding occurs as the result will still be a failing grade.
//     Examples:
// 84 - round to(85 - 84 is less than 3)85-83>
// 28 - do not round(result is less than 40) 40-38
// 57 - do not round(60 - 57 is 3 or higher)58-60
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
const aafas = [28, 37, 46, 86, 88, 94]
const grade = (arr) => {
    let grades = []
    for (let i = 0; i < arr.length; i++) {
        let gradee = arr[i]
        if (gradee < 38) {
            grades.push(gradee)
        } else if (gradee % 5 >= 3) {
            grades.push(gradee + (5 - (gradee % 5)))
        } else {
            grades.push(gradee)
        }
    } return grades
}
console.log(grade(aafas))
const asa = [1, 1, 1, 2, 4, 5, 6, 6, 6]

// var removeDuplicates = function (nums) {
//     let newarr = []
//     if (nums[0] == nums[1]) {
//         newarr.push(nums[0])
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < nums[i + 1]) {
//             newarr.push(nums[i + 1])
//         }
//     } return newarr
// }
// console.log(removeDuplicates(asa))
function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                j--; // Adjust index after removing element
            }
        }
    }
    return array;
}

let array = [1, 2, 3, 4, 4, 5, 6, 6];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); 
