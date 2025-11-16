function estaPronto(temperatura) {
  if (temperatura > 99 && temperatura < 151) {
    return true
  } else {
    return false
  }
}

// Não modifique as linhas abaixo
console.log(estaPronto(90)) // false
console.log(estaPronto(100)) // true
console.log(estaPronto(160)) // false