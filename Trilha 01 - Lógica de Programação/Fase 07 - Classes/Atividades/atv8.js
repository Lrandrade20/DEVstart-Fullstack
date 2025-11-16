// Definir parâmetros do construtor

// Nesta atividade, você deve criar um método construtor para a classe Receita. Esse construtor deverá receber dois parâmetros: nome e calorias.

// Dentro do método construtor que você vai criar, experimente imprimir no console os dois parâmetros recebidos, para testar se o código está funcionando corretamente.


// Definição da classe. Insira o contrutor dentro dela
class Receita {
    constructor(nome, calorias) {
      console.log(nome)
      console.log(calorias)
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log("---");
let salada = new Receita("Salada", 400);