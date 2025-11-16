// Atividades 
function notasTriplicadas(notas) {
  return notas.map(function(nota){
    return nota * 3
  })
}
console.log(notasTriplicadas([10, 20])) // [30, 60]
console.log(notasTriplicadas([5, 12, 20, 10])) // [15, 36, 60, 30]

// Atividade2 ----------------------------------------------------
function dobreNumeros(numeros) {
  return numeros.map(function(numero){
    return numero * 2
  })
}
console.log(dobreNumeros([10, 20])) // [20, 40]
console.log(dobreNumeros([5, 12, 20, 10])) // [10, 24, 40, 20]

// Atividade3 ----------------------------------------------------
function aumentarTemperaturasEm5(temperaturas) {
  return temperaturas.map(function(temperatura){
    return temperatura + 5
  })
}
console.log(aumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(aumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]