// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// const a=[-115,-15,15,515,523,6346,5,100]

// const number=(arr)=>{
//     let count=0
//     for(let i=0; i<arr.length; i++){
//         count=count+arr[i]
//     } return count
// }
// console.log(number(a))

//2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

// const number=(arr)=>{
//     let count=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             count=count+arr[i]
//         }
//     } return count
// }
// console.log(number(a))

// 3. Өгөгдсөн массивын хамгийн бага элементийг ол.

// const min=(arr)=>{
//     let count=arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]<count){
//             count=arr[i]
//         }
//     } return count
// }
// console.log(min(a))

// 4.Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
const a=[-115,-15,15,515,523,6346,5,100]
function max(arr) {
    let counter=arr
    for (let i = 1; i < arr.length; i = i + 1) {
    let count = arr[0] 
        if (arr[i] > count) {
            count=arr[i]
    } return counter
}
}
console.log(max(a))