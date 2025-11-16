let nomes = ["Samuel", "Alexandre", "Carlos"]

console.log(nomes) // log da matriz
console.log(nomes[0]) // log do primeiro item


// crie um lista de compras em uma matriz
let listaDeCompras = ["Queijo", "Presunto", "Macarrão", "Bacon"]
console.log(listaDeCompras)


function obterTamanhoDaMatriz(usuarios) {
  return usuarios.length
}

// Não modifique as linhas abaixo:
console.log(obterTamanhoDaMatriz(["Samuel", "Alexandre", "Carla"])) // 3
console.log(obterTamanhoDaMatriz(["Carla"])) // 1
console.log(obterTamanhoDaMatriz([])) // 0
