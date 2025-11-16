function adicionarItem(itens, item) {
  itens.push(item)
  return itens
}
 
function exportarMinusculasCSV(itens) {
  return itens.join(', ').toLowerCase()
}