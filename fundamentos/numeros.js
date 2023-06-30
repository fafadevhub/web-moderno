let peso1 = 1.0
let peso2 = Number("2.0")

console.log(typeof peso1)
console.log(typeof peso2)
console.log(Number.isInteger(peso1))


let avaliacao1 = 9.71158
let avaliacao2 = 10.5533

let total = avaliacao1 * peso1 + avaliacao2 * peso2
let media = total / (peso1 + peso2)

console.log(media.toFixed(2))//converte número para duas casas decimais
console.log(media.toString(2))//converte número decimal para binário

console.log(typeof media)
console.log(typeof Number)