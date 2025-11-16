function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterNumeroDeTestes(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}

function obterUltimaNota(notas) { 
  return notas[notas.length - 1]
}

function aProvaEhMuitoFacil(notas) {

  if (notas.includes(20)) {
    return true
  } 
  else {
    return false
  }
}

function aNotaExiste(notas, nota) {
  if (notas.includes(nota)) {
    return true
  }
}

function exportarCSV(notas) {
  return notas.join(", ")
}