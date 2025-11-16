// ️️Capturando parâmetros do construtor da classe Funcionário

// Crie um método construtor dentro da classe Funcionario. O construtor deve capturar o nome, idade e cargo que recebe como parâmetros, e armazená-los em variáveis de instância.

// Observe o uso da classe Funcionario para entender quais parâmetros o construtor recebe. Não se esqueça de visualizar o objeto criado pela classe ao final da atividade.


// Definição da classe
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
}

// Uso da classe
let samuel = new Funcionario("Samuel Bueno", 30, "Fundador");
console.log(samuel);

let alice = new Funcionario("Alice Silva", 24, "Marketing");
console.log(alice);