// // 1.Ямар утга буцаахыг бичнэ үү .
// let i = 4 > 3; // true
// let ii = 4 < 3; // false
// let iii = 4 >= 3; //true
// let iv = 4 <= 3;// false
// let v = 4 == 4;//true
// let vi = 4 === 4;//true
// let vii = 4 != 4;//true
// let iix = 4 !== 4;//false
// let ix = 4 != "4";//false
// let x = 4 == "4"; //true
// let xi = 4 === "4";//false


// let one = 4 > 3 && 10 < 12;//true 
// let two = 4 > 3 && 10 > 12;//false
// let three = 4 > 3 || 10 < 12;//true
// let four = 4 > 3 || 10 > 12;//true
// let five = !(4 > 3);//false
// let six = !(4 < 3);//true
// let eight = !(4 > 3 && 10 < 12);//false
// let nine = !(4 > 3 && 10 > 12);//true
// let ten = !(4 === "4");//true

// // 2.Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.
// if (5 % 5 == 0) {
//     return console.log("true")
// } else return ("false")

// 3.Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .
// function letters(n) {
//     if (n == "e" || n == "u" || n == "i" || n == "o" || n == "a") {
//         return ("VOWEL")
//     } else return ("CONSONANT")
// }
// let x = letters("b")
// console.log(x)

// 4.Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .

// function numbers(n) {
//     if (n > 0 && n < 100) {
//         return "include"
//     } else return "exclude "
// }

// let x = numbers(150)
// console.log(x)

// 5.3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .

// console.log(Math.max(50, 6, 9))

// 6.Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .
// function olympic(y) {
//     if (y > 1895 && y % 4 == 0 || y == 2021) {
//         return console.log("olympic year")
//     } else console.log("not olympic year")
// }
// let x = olympic(2021)


// 7.Check the given number is not a prime number .

// function prime(n) {
//     {
//         if ()
//             return console.log('not a prime number')
//     }
// }
function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false; // If divisible, the number is not prime
        }
    }
    return true; // If not divisible by any number, the number is prime
}
console.log(isPrime(5))

