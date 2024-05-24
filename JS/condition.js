//1 -Өгөгдсөн тоо эерэг бол "positive" , сөрөг бол "negative" , 0 бол "zero" гэж хэвлэнэ үү .

// function number(x) {
//     if (x > 0) {
//         return "positive"
//     }
//     if (x == 0) {
//         return "zero"
//     }
//     if (x < 0) {
//         return "negative"
//     }
// }
// var x = number(0)
// console.log(x)

// 2 - Өгөгдсөн насыг шалгаад 18 - аас дээш бол "You are old enough to drive", 18 - аас доош бол 18 хүрэхэд дутуу байгаа жилтэй нь хамт "You are left with 3 years to drive" гэж хэвлэнэ үү.

// function age(x) {
//     if (x > 18) {
//         return console.log("You are old enought to drive")
//     } else {
//         return console.log(`You are left with ${18 - x} years to drive`)
//     }

// }
// var x = age(5)


//3 -Өгөгдсөн тоог шалгаад тэгш тоо бол "even" , сондгой тоо бол "odd" гэж хэвлэнэ үү .

// function number(x) {
//     if (x % 2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// var x = number(1)
// console.log(x)

// 4 - Өгөгдсөн нас нь 14 - өөс доош бол "Children", 14 - 24 бол "Youth", 24 - 64 бол "Adults", 64 - өөс дээш бол "Seniors" гэж хэвлэнэ үү.

// function age(x) {
//     if (x < 14) {
//         return "children"
//     }
//     if (x < 24) {
//         return "youth"
//     }
//     if (x < 64) {
//         return "adults"
//     }
//     else {
//         return "seniors"
//     }
// // }
// var y = age(78)
// console.log(y)

//5 -Өгөгдсөн гурвалжны гурван талыг зөв эсэхийг шалгана уу .

// function triangle(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a) {
//         return console.log("TRIANGLE")
//     } else {
//         return console.log("WRONG")
//     }
// }
// var x = triangle(10, 9, 45)

//6 -Өгөгдсөн 2 тооноос ихийг нь олж хэвлэнэ үү .

// function max(x, y) {
//     if (x > y) {
//         return console.log(x)
//     } if (x == y) {
//         return console.log('ТЭНЦҮҮ')
//     } else {
//         return console.log(y)
//     }
// }
// var p = max(12, 11)

//7
// console.log(Math.max(1923232, 79, 39, 4, 64222))




//10
// function clas(x, y) {
//     if (0 < x && x < 5 && y == "master") {
//         return console.log(`Та ${x} курс ${y} ангийн оюутан байна.`)
//     } else (0 < x && x < 5 && y == "bachelor")
//     return console.log(`Та ${x}-р курс ${y} ангийн оюутан байна.`)
// }
// var p = clas(3, "master")

function createCounter(n) {
    var count = n
    return function () {
        var counter = count
        count = count + 1
        return counter
    }
}
var x = createCounter(5)
console.log(x)