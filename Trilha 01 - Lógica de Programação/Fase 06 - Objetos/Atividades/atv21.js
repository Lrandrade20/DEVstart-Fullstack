function obterSomaDeTodasAsNotas(notas) {
  let soma = 0
  notas.forEach(function(nota){
    soma = soma + nota.nota
  })
  return soma
}

// Não modifique as linhas abaixo
let notas = [
  {
    nome: "Sandra Assis",
    nota: 8
  },
  {
    nome: "Érica Blanck",
    nota: 3
  }
];

console.log(obterSomaDeTodasAsNotas(notas));