//Atividade
function somaNumeros(numeros) {
  return numeros.reduce(function(total, atual) {
      return total + atual
  }, 0)
}
console.log(somaNumeros([10, 20, 30])) // 60
console.log(somaNumeros([2, 4, 2, 10])) // 18