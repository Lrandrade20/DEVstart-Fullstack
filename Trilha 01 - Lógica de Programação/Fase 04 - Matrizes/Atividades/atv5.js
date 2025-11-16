// Atividade 
function quantosItens(itens) {
  return itens.length
}
console.log(quantosItens([-5, 12, 15]))
console.log(quantosItens([13, 10]))
console.log(quantosItens([]))


//atividade 2
function obterMensagem(itens) {
  return `Você tem ${itens.length} itens`
}
console.log(obterMensagem([-5, 12, 15])) // "Você tem 3 itens"
console.log(obterMensagem([13, 10])) // "Você tem 2 itens"
console.log(obterMensagem([])) // "Você tem 0 itens"