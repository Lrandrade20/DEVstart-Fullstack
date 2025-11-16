let nomes = ["Alice", "Bruno", "Samuel", "Augusto"]

// Itere sobre os nomes e exiba cada nome no console
nomes.forEach(function(nome){
  console.log(nome)
})

// -------------------------------------------

function verificarPresencaCaractere(caracteres, caractere) {
  if (caracteres.includes(caractere)) {
    return true
  }
  else {
    return false
  }
}
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "A")) // true
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "F")) // false
console.log(verificarPresencaCaractere(["A", "B"], "B")) // true
console.log(verificarPresencaCaractere(["A", "B"], "C")) // false

// ------------------------------------------------

function exportaCSV(usuarios) {

  return usuarios.join(", ")
}

// Não modifique as linhas abaixo
console.log(exportaCSV(["Alice", "Bruno", "Sara", "Augusto"])) // "Alice, Bruno, Sara, Augusto"
console.log(exportaCSV(["Samuel", "Alexandre", "Carla"])) // "Samuel, Alexandre, Carla"