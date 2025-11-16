// Visualizar parâmetros do construtor

// Este é um desafio de visualização, não há testes.

// Execute o código e repare que chamamos new Usuario() com alguns parâmetros. Então, podemos obter esses parâmetros no método constructor() e exibi-los no console.

// Definindo a classe
class Usuario {
    constructor(nome, sobrenome) {
        console.log("Criando uma nova instância da classe Usuario");
        console.log(nome);
        console.log(sobrenome);
    }
}

// Usando a classe
let usuario1 = new Usuario("Samuel", "Dias");
console.log("------");
let usuario2 = new Usuario("Carla", "Bastos");
console.log("=======");