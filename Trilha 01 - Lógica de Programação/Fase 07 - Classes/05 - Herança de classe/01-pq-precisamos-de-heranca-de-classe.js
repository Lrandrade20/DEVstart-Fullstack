// Definição de classe

// Aqui é uma classe funcionario com construct e dois metodos
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

// Aqui é a classe adm que possui a mesma estrutura do funcionario, porém adiciona o método 'pagarSalario()'
// Esse modo fica repetitivo, pois esta repetindo toda uma estrutura existente.
class Administrador {
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

    pagarSalario() {
        console.log("Pagando Salários...")
    }
}

// É aqui que a herança de classe faz sentido, pois evitaria a duplicação do código