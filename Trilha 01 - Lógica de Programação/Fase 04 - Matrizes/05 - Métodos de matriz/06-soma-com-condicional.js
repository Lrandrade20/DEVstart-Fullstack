// Soma com condicional 
let notas = [6, 8, 3, 9, 5]
let soma = 0
notas.forEach(function(nota){
    // Soma somente notas maiores que 6
    if (nota >= 6) {
        soma = soma + nota
    }
})
console.log(soma) // 23