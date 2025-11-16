// ️️Métodos da classe Usuário

// Implemente os seguintes métodos de instância para a classe Usuario:

//     obterNomeCompleto(), que retornará uma string contendo o nome e o sobrenome do usuário separados por um caractere de espaço.
//     obterIniciais(), que retornará uma string contendo o primeiro caractere do nome, imediatamente seguido pelo primeiro caractere do sobrenome.
//     podeVotar(), que retornará true quando o usuário tiver 16 anos ou mais, e false caso contrário.

// Dicas:

//     Assim que você definir um método, tente usá-lo para verificar qual valor ele está retornando.
//     Não se esqueça de implementar o método construtor da classe.

// Definição da classe
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais() {
        return `${this.nome[0]} ${this.sobrenome[0]}`
    }

    podeVotar() {
        if (this.idade >= 16) {
            return true
        } else {
            return false
        }
    }
}

// Uso da classe
let sara = new Usuario("Sara", "Gomes", 17);
let cesar = new Usuario("César", "Assis", 13);
console.log("---");