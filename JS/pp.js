// let x = ["spurs", "united", "city", "palace", "liverpool"]
// let y = x.pop()
// let y = x.push("TOTTENHAM", "fulham")
// console.log(x)
// console.log(y)

// function count(n) {
//     const arr = [];
//     for (let i = n; i > 0; i = i - 1) {
//         arr.push(i)
//     }
//     return arr;
// }
// const arr = count(10)
// console.log(arr)

const a = [5, 10, 7, 8, 49];

// function printArr(arr) {
//     for (let i = 0; i < arr.length; i = i + 1) {
//         console.log(arr[i])
//     }
// }
// printArr(a)

// function even(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i = i + 1) {
//         if (arr[i] % 2 === 0) {
//             count++
//         }
//     } return count
// }
// console.log(even(a))

const b = [65, 62, 46, 875, 503266, 62432,45894]

function max(arr) {
    let count=arr[0]
    for (let i = 1; i < arr.length; i=i+1){
        if (arr[i]>count){
            count=arr[i]
        }
    }  return count
}
console.log(max(b))
