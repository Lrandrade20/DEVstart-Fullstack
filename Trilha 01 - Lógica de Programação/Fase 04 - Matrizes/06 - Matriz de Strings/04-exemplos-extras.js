// // Exemplos extra 1
// let caracteres = ['a', 'b', 'c']
// let maiusculas = caracteres.map(function(caractere){
//     return caractere.toUpperCase()
// })
// let resultado = maiusculas.includes('B')
// console.log(resultado) // true

// Exemplo extra 2
// Ecadeado recebe as operações 'MAP' e 'INCLUDES'
let caracteres = ['a', 'b', 'c']
let resultado = caracteres.map(function(caractere){
    return caractere.toUpperCase()
}).includes("B")
console.log(resultado) // true
