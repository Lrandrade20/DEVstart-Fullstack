function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterTotalDeNotas(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1]
}