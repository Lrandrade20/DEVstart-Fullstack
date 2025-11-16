// // Exemplo básico de soma
// let notas = [10, 8, 4, 5]
// let soma = 0
// soma = soma + notas[0] // soma é 10
// soma = soma + notas[1] // soma é 18
// soma = soma + notas[2] // soma é 22
// soma = soma + notas[3] // soma é 27


// //-------------------------------------
// // Exemplo 1
// let notas = [10, 8, 4, 5]
// let soma = 0
// notas.forEach(function(nota){
//     soma = soma + nota
// })
// console.log(soma) // 27

// // --------------------------

// // Exemplo 2
// let notas = []
// let soma = 0
// notas.forEach(function(nota){
//     soma = soma + nota
// })
// console.log(soma) // 0

// --------------------------

// Exemplo de caso errado
let notas = [10, 8, 4, 5]
notas.forEach(function(nota){
    let soma = 0 // Atribuição incorreta
    soma = soma + nota
})
console.log(soma) // 5 (o correto seria 27)