function adicionarBanana(itens) {
  itens.push("Banana");
  return itens;
}

console.log(adicionarBanana(["Leite"])) // ["Leite", "Banana"] 
console.log(adicionarBanana(["Tomate", "Queijo"])) // ["Tomate", "Queijo", "Banana"] 
console.log(adicionarBanana([])) // ["Banana"]

// ---------------------------------------------------
function obterOPrimeiroItem(itens) {
  return itens[0]
}

// Não modifique as linhas abaixo:
console.log(obterOPrimeiroItem(["Leite"])) // "Leite"
console.log(obterOPrimeiroItem(["Tomate", "Queijo"])) // "Tomate"
console.log(obterOPrimeiroItem([])) // 

// ---------------------------------------------------
function obterUltimoItem(itens) {
  return itens[itens.length - 1]
}

// Não modifique as linhas abaixo:
console.log(obterUltimoItem(["Leite"])) // "Leite"
console.log(obterUltimoItem(["Tomate", "Queijo"])) // "Queijo"
console.log(obterUltimoItem([])) // undefined