const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') //Adiciona um valor no array
console.log(valores)

console.log(valores.pop())  //excluir o ultimo elemento do array valores
delete valores[0]           //delete o indice 0 dentro do array valores
console.log(valores)

console.log(typeof valores) // array é um objeto