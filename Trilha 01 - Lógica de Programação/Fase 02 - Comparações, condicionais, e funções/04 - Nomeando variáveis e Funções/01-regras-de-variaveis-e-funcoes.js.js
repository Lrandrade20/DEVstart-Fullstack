// Exemplos de coisas que podem e não podem

// ex1 re-declarar variavel - Não pode
let nome =  "Guigo"
// Isso é inválido e vai retornar um erro
let nome = "Paulo"

// ex2 - Reatribuindo valor em Var existente
let nome =  "Guigo"
// Isso é valido pois Não estamos redefinindo a variável
nome = "Paulo"

// ex3 - Var com nome maiusculo e minusculo
let Nome = "Paulo"
// Esta não é a Var Nome
nome = "Rodrigo"

// ex4 - Funções com nomes iguais mas Var diferentes
function teste() {

}

// Esta função é diferente da primeira
function Teste() {

}

// Ex5 Chamar uma variavel antes de declarar
console.log(nome) // Isso vai parar e restular erro
let nome = "Lucas"

// Ex6 Chamar uma variavel depois de declarar
let nome = "Lucas"
console.log(nome) // Isso vai funcionar corretamente
