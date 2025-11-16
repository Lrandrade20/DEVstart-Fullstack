// ️️Obter nome completo

// Implemente o método de instância obterNomeCompleto(), de forma que ele retorne uma string contendo o nome e o sobrenome do usuário separados por um caractere de espaço.

// Repare que, enquanto você não definir o método solicitado, o código apresentará erro. Isso acontece porque o código fornecido a você já inclui duas chamadas ao método obterNomeCompleto().

// Quando terminar a atividade, observe como o método obterNomeCompleto() retorna valores diferentes, dependendo da instância de onde ele é chamado.


// Definição da classe
class User {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Implemente o método obterNomeCompleto()
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// Uso da classe
let samuel = new User("Samuel", "Bueno");
console.log(samuel.obterNomeCompleto());

let carla = new User("Carla", "Marins");
console.log(carla.obterNomeCompleto());

console.log("---");