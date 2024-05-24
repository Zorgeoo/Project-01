// //1
// console.log("10" === 10)
// console.log("10" == 10)
// //2
// var text = "jargon python"
// console.log(text.includes('on'))
// //3
// var ls = "I hope this course is not full of jargon"
// console.log(ls.includes("jargon"))
//4
// console.log(Math.random() * 100)
// //5
// console.log(Math.floor(Math.random() * 50) + 50)
//6
// console.log(Math.floor(Math.random() * 255))
// //7
// let text = "javascript"
// console.log(text.charAt(Math.random() * 10))
// // //8
// let text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(text.match(/love/gi).length)
//9
// Дараах бичвэрээс тухайн хүний жилийн нийт орлогыг тооцоол.
// // "Тэр сард 5000 еврогийн цалин, жилийн 10000 еврогийн урамшуулал , сард 15000 еврог онлайн сургалтаас авдаг.”

// let income = (5000 * 12) + 10000 + (15000 * 12)
// console.log(income)

// var createHelloWorld = function () {

//     return function (f) {
//         var f = "dasdadada"
//         return "Hello World";
//     }
// };
// var x = createHelloWorld(10)
// console.log(x)
// const now = new Date()
// const year = now.getFullYear()
// const month = now.getMonth() + 1
// const day = now.getDate()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// const seconds = now.getSeconds()
// console.log('Өнөөдөр',
//     year, "оны", month, '-р сарын', day, 'өдөр.', 'Одоо', hours, 'цаг', minutes, 'мин', 'болж байна.', seconds, 'секундын дараа та уншиж дуусна')
// console.log(new Date())

//Condition

function max(x) {
    if (x == 5) {
        return 'nice'
    } else {
        return 'bad'
    }
}

var x = max(4)
console.log(x)