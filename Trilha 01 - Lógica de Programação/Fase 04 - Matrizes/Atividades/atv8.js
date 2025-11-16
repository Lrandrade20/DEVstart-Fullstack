function converterParaFormatoCSV(notas) {
  
  return notas.join(";")
}
console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"
console.log(converterParaFormatoCSV([7, 13, 20, 15])) // "7;13;20;15"

// --------------------------------------------------

function juntarComEComercial(notas) {
  return notas.join(" & ")
}

// Não modifique as linhas abaixo
console.log(juntarComEComercial([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
console.log(juntarComEComercial([7, 13, 20, 15])) // "7 & 13 & 20 & 15"

// ---------------------------------------------------
function exportarCSV(notas) {
  return notas.join(", ")
}

// Não modifique as linhas abaixo
console.log(exportarCSV([10, 15, 13, 19])) // "10, 15, 13, 19"
console.log(exportarCSV([7, 13, 20, 15])) // "7, 13, 20, 15"