function obterIniciais(nomes) {
  return nomes.map(function (nome){
    return nome[0]
  })
}
console.log(obterIniciais(["Alice", "Bruno", "Samuel", "Augusto"])) // ["A", "B", "S", "A"]
console.log(obterIniciais(["samara", "alexandre", "carla"])) // ["s", "a", "c"]

// ===================================

function obterUltimoItem(itens) {
  return itens[itens.length - 1]
}
console.log(obterUltimoItem(["Leite"])) // "Leite"
console.log(obterUltimoItem(["Tomate", "Queijo"])) // "Queijo"
console.log(obterUltimoItem([])) // undefined