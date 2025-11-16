function podeVisualizarArtigo(tipo, ehAutor) {
  if (tipo === "admin") {
    return true
  } else if (ehAutor === true) {
    return true
  } else {
    return false
  }
}

// Não modifique as linhas abaixo
console.log(podeVisualizarArtigo("admin", false)) // true
console.log(podeVisualizarArtigo("admin", true)) // true
console.log(podeVisualizarArtigo("user", true)) // true
console.log(podeVisualizarArtigo("user", false)) // false