function obterSomaDeTodasAsNotas(notas) {
  let soma = 0
  notas.forEach(function(nota){
    soma = soma + nota
  })
  return soma
}

function obterMediaDeTodasAsNotas(notas) {
  let media = 0
  let quantidade = 0
  notas.forEach(function(nota){
    media = media + nota
    quantidade = quantidade + 1
  })
  return media / quantidade

}