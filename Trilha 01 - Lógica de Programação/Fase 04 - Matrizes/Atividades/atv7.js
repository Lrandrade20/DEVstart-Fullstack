function oTesteEhMuitoFacil(notas) {
  return notas.includes(20)
}
console.log(oTesteEhMuitoFacil([10, 15, 13, 19])) // deveria retornar false
console.log(oTesteEhMuitoFacil([7, 13, 20, 15])) // deveria retornar true