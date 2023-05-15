const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // .isInteger Mostra se é um numero inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // .toFixed(2) decide quantas casas decimais vao ser apresentadas no caso ( 2 )
console.log(media.toString(2)) // Transforma a Const media em um numero Binario
console.log(typeof media)      // Mostra o tipo da Const media