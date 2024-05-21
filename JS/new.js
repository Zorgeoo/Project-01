let x = 'Hello world'
let js = x.substring(6, 9)
console.log(js.toUpperCase())
//2
let string = 'aZZZbZZZc'
console.log(string.split("ZZZ"))


//3

let q = "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7 "
let w = q.substring(28, 40)
let e = q.substring(43)
console.log(w, '=', e)
//4
let r = "I love HTML \n"
let p = r.replace("HTML", "JAVASCRIPT")
console.log(p.repeat(10))




//5
let challenge = 'i love tottenham hotspur players '
console.log(challenge.charAt(0))

let rep = "i love spurs"
console.log(rep.toUpperCase())
console.log(rep.toLowerCase())

console.log(rep.substring(2, 6))

console.log(rep.substring(rep.length - 10))
console.log(rep.includes('script'))
console.log(challenge.split(""))
console.log(challenge.split(" "))
let com = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(com.split(','))
console.log(com.replace('Facebook', 'Netflix'))
console.log(com.charAt(15))
let sentence = '        I love dad.      I love mom.      I love turtle.      I love rabbit.         '
console.log(sentence)
console.log(sentence.trim())
console.log(sentence.concat('I love JavaScript'))
let comp = 'Pinecone Academy Leap \n'
console.log(comp.repeat(18))