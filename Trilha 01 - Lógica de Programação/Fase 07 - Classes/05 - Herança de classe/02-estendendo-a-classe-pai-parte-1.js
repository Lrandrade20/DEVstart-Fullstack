// 1 - Extendendo a classe pai

// Classe exemplo funcionario - PAI
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais() {
        return this.nome[0] + this.sobrenome[0]
    }
}

// Classe exemplo administrador - Filho
class Administrador extends Funcionario {
    pagarSalario(){
        console.log("Pagando Salario...")
    }
}

// Instanciando objeto da classe Administrador
let regina = new Administrador("Regina", "Silva")

// Chamando os métodos
regina.obterNomeCompleto(); // "Regina Silva"
regina.obterIniciais(); // "RS"

// Método exclusivo da classe Administrador
regina.pagarSalario(); // "Pagando Salario..."

// A classe filha só consegue funcionar se existir uma classe pai definida
