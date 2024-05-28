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

// const a = [5, 10, 7, 8, 49];

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

// const b = [65, 62, 46, 875, 503266, 62432, 4564564894]

// function max(arr) {
//     let count = arr[0]
//     for (let i = 1; i < arr.length; i = i + 1) {
//         if (arr[i] > count) {
//             count = arr[i]
//         }
//     } return count
// }
// console.log(max(b))

// const band = [20, 25, 45, 63]

// const max = (arr) => {
//     let count = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > count) {
//             count = arr[i]
//         }
//     }
//     return count
// }


// const result = max(band)
// console.log(result)

// let person = {
//     firstName: "Enkhzorig",
//     lastName: "Enkhbaatar",
//     age: 25,
//     gender: "male",
//     eyeColor: "brown",
//     hairColor: "brown",
//     nationality: "Mongolia",
//     married: false,
//     body: {
//         weight: '70kg',
//         height: "182cm"
//     },
//     hobby: ["football", "basketball", "esport", "cooking"],
//     marriage: ["gerlesen", "gerleegui"]
// }


// console.log(`Hello. My name is ${person.firstName, person.lastName}. I am ${person.age} years old. My hair color is ${person.eyeColor}. I am from ${person.nationality}. ${person.married}. I weigh ${person.body.weight}. My height is ${person.body.height}. My hobbies are ${person.hobby[0]}. i am ${person.marriage(single)}`)

const a = [1, 1, 1, 3, 3, 3, 4, 4, 4, 7, 7, 7, 1]

const number = (arr) => {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (count[num] !== undefined) {
            count[num]++;
        } else {
            count[num] = 1
        }
    } return count
}
console.log(number(a))