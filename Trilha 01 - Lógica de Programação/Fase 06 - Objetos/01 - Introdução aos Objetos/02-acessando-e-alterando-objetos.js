// Acessando e alterando objetos

// Ex1:
let pessoa = {
    primeiroNome: "Carla",
    sobrenome: "Santos"
};
console.log(pessoa.primeiroNome) // "Carla"

// Ex2:
function obterIdade(usuario) {
    return `O usuário tem ${usuario.idade} anos`
}
let pessoa = {
    nome: "Manoel",
    idade: 20
};
obterIdade(pessoa) // "O usuário tem 20 anos"

// Ex3
let pessoa = {
    nome: "Daniel",
    idade: 17
};
pessoa.idade = 25;// Alterando a idade
console.log(pessoa) // {nome: "Daniel", idade: 25}