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

class Administrador extends Funcionario {
    // Aqui estamos sobrescrevendo a estrutura de retorno de nome completo, adicionando entre parentesis '(admin)'
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome} (admin)`
    }
}

// Instanciando objeto na classe FUncionario
let lucas = new Funcionario("Lucas", "Andrade")
console.log(lucas.obterNomeCompleto()) // "Lucas Andrade"

// Instanciando objeto na classe Administrador
let fulano = new Administrador("Lucas", "Andrade")
console.log(fulano.obterNomeCompleto()) // "Lucas Andrade (admin)"
