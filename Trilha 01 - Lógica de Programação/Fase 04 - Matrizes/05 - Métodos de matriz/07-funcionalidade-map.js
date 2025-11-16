// // Mapa de matriz 1

// // Exemplo visual simples 1 ----------------------------
// let notas = [10, 15, 13]
// let notasDobradas = [20, 30, 26] // Multiplicando por 2

// // Exemplo visual simples 2-----------------------------
// let notas = [10, 15, 13]
// let notasSubtraidas = [9, 14, 12] // Subtraindo 1

// // Utilizando o método .map() --------------------------
// let notas = [10, 15, 13]
// let notasDobradas = notas.map(function(nota) {
//     return nota * 2 // multiplica cada item por 2
// })
// console.log(notasDobradas) // [20, 30, 26]

// // --------------------------

// // Mapa de matriz 2
// let notas = [10, 5, 3]
// let novasNotas = notas.map(function(nota){
//     return nota - 1
// })
// console.log(novasNotas) // [9, 4, 2]

// Exemplo errado ------------------------
let notas = [10, 5, 3]
let novasNotas = notas.map(function(nota){
    nota - 1 // ERRADO faltou return
})
console.log(novasNotas) // [undefined, undefined, undefined]