function adicionarNota(notas, nota) {
  notas.push(nota);
  return notas;
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

function obterSomaDasNotas(notas) {
  return notas.reduce(function(total, atual){
    return total + atual
  }, 0)
}

function obterMediaDasNotas(notas) {
  let qtd = notas.length
  let media = 0
  notas.forEach(function(nota){
    media = media + nota
  })
  return (media / qtd)
}

function obterNotasAumentadasEm2(notas) {
  return notas.map(function(nota){
    return nota + 2
  })
}