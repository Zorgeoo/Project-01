// function test(a, b, c) {
//     const sum = a + b + c;
//     const sum1 = a - b + c;
//     const sum2 = a + b - c;
//     const result = sum * sum1 * sum2
//     return result
// }
// const x = test(9, 10, 12)
// console.log(x)

// function max(a, b, c) {
//     const sum = a + b + c;
//     const sum1 = a - b + c;
//     const sum2 = a + b - c;
//     return result
// }
// function max(a, b) {
//     if (a > b) {
//         return a
//     }
//     else {
//         return b
//     }
// } 
// const x = max(12, 11)
// console.log(x)
// function max(a, b, c) {
//     if (a > b) {
//         if (a > c) {
//             return a
//         } else {
//             return c
//         }
//     }
//     else {
//         if (b > c) {
//             return b
//         }
//         else {
//             return c
//         }
//     }
// }



// const x = max(10, 10, 10)
// console.log(x)

// function area(a, b, c) {
//     if (c >= a + b) { return 0 }
//     if (a >= b + c) { return 0 }
//     if (b > a + c) { return 0 }

//     const s = (a + b + c) / 2
//     const side = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     return side

// }

// const w = area(3, 6, 8)
// console.log(w)

function number(a) {
    if (a % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}
const y = number(2)
console.log(y)
