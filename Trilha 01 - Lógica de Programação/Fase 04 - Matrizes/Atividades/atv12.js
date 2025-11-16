// Atividades
function somaNotasIguaisOuAcimaDe6(notas) {
  let soma = 0
  notas.forEach(function(nota){
    if (nota >= 6) {
      soma = soma + nota
    }
  })
  return soma
}
somaNotasIguaisOuAcimaDe6([10, 5, 18, 3, 14, 19, 9]) // deveria retornar 70
somaNotasIguaisOuAcimaDe6([18, 4, 9, 20, 8]) // deveria retornar 55

// -----------------------------------------------------------
function somaDeTemperaturasNaoCongelantes(temperaturas) {
  let soma = 0
  temperaturas.forEach(function(temperatura){
    if (temperatura > 0){
      soma += temperatura
    }
  })
  return soma
}
somaDeTemperaturasNaoCongelantes([-13, 5, -8, -3, 0, 3, 5]) // deveria retornar 13
somaDeTemperaturasNaoCongelantes([12, -4, 9, -20, 8]) // deveria retornar 29