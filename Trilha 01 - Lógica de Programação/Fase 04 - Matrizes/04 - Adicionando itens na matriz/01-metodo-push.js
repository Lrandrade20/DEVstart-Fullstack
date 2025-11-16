let numeros = []
console.log(numeros) // []
console.log(numeros.length) // 0

numeros.push(10)
console.log(numeros) // [10]
console.log(numeros.length) // [1]

numeros.push(15)
console.log(numeros) // [10, 15]
console.log(numeros.length) // [2]

numeros.push(13)
console.log(numeros) // [10, 15, 13]
console.log(numeros.length) // [3]

// Outro exemplo
let dados = [10, 20]
let numero = 15
dados.push(numero)
console.log(dados) // [10, 20, 15]