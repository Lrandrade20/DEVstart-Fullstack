// Atividade
function corrigirPrimeiroNumero(numeros) {
  numeros[0] =  2
  return numeros
}
console.log(corrigirPrimeiroNumero([1, 4, 6, 8]))
console.log(corrigirPrimeiroNumero([1, 10, 13, 19]))


// Atividade 2
function corrigirSegundoNumero(numeros) {
  numeros[1] = 5
  return numeros
}
console.log(corrigirSegundoNumero([1, 4, 6, 8]))
console.log(corrigirSegundoNumero([1, 10, 13, 19]))


// Atividade 3
function incrementarPrimeiraTemperatura(temperaturas) {
  temperaturas[0] += 1
  return temperaturas
}
console.log(incrementarPrimeiraTemperatura([3, 5, 4, 7]))
console.log(incrementarPrimeiraTemperatura([-5, 12, 15, 18, 13]))