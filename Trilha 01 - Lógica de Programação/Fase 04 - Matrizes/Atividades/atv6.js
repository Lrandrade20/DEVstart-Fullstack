function adicionarNovaNota(notas) {
  notas.push(18)
  return notas
}
console.log(adicionarNovaNota([15, 13, 17])) // [15, 13, 17, 18]
console.log(adicionarNovaNota([10, 7])) // [10, 7, 18]

// ---------------------------------------------------


function adicionarNovaTemperatura(temperaturas) {
  temperaturas.push(-6)
  return temperaturas
}
console.log(adicionarNovaTemperatura([-5, 12, 15, 18, 13])) // [-5, 12, 15, 18, 13, -6]
console.log(adicionarNovaTemperatura([13, -5, 0])) // [13, -5, 0, -6]