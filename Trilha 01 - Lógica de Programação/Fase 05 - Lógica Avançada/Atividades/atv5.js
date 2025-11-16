function mensagemDeVotacao(idade) {
  if(idade >= 16 && idade < 31) {
    return "Você pode votar"
  }else {
    return "Você não pode votar"
  }
}

// Não modifique as linhas abaixo
console.log(mensagemDeVotacao(15)) // "Você não pode votar"
console.log(mensagemDeVotacao(20)) // "Você pode votar"
console.log(mensagemDeVotacao(35)) // "Você não pode votar"