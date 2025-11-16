function obterPlanoDoUsuario(pagou, desafiosCompletos) {
  if (pagou === true && desafiosCompletos >= 10 ) {
    return "profissional"
  } else {
    return "gratuito"
  }
}

// Não modifique as linhas abaixo
console.log(obterPlanoDoUsuario(true, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(true, 20)) // "profissional"
console.log(obterPlanoDoUsuario(false, 5)) // "gratuito"
console.log(obterPlanoDoUsuario(false, 20)) // "gratuito"