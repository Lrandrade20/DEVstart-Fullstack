// ️️Capturando parâmetros do construtor da classe Receita

// Crie um método construtor dentro da classe Receita. O construtor deve capturar o nome e calorias que recebe como parâmetros, e armazená-los em variáveis de instância.

// Observe o uso da classe Receita para entender quais parâmetros o construtor recebe. Não se esqueça de visualizar o objeto criado pela classe ao final da atividade.


// Definição da classe
class Receita {
    constructor(nome, calorias) {
      this.nome = nome
      this.calorias = calorias
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log(macarrao);

let salada = new Receita("Salada", 400);
console.log(salada);