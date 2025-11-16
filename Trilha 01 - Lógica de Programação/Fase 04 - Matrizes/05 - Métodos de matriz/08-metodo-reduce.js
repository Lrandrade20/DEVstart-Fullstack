// // Redução por soma

// let notas = [10, 3, 5]

// // total: é a função callback - guarda o resultado parcial da operação a cada iteração.
// // atual: é o valor inicial da redução - é o valor do elemento atual do array.
// let soma = notas.reduce(function(total, atual){
//     return total + atual
// }, 0) // é o valor inicial do acumulador (total).
// console.log(soma) // 18

// // Exemplo 1: 
// let notas = [10, 5, 15, 20]
// let valorInicial = 0;
// let soma = notas.reduce(function(total, atual) {
//     console.log(`Total é ${total}`)
//     console.log(`Atual é ${atual}`)
//     console.log("---")
//     return total + atual
// }, valorInicial);

// console.log(`A soma é ${soma}`)

// Ex2
// Redução por multiplicação
let numeros = [5, 2, 10]
let resultado = numeros.reduce(function(total, atual){
    return total * atual
}, 1) // Precisa ser 1 pois é multiplicação
console.log(resultado) // 100