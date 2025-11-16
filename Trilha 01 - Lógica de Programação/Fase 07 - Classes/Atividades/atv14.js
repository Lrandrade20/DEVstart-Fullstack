// ️️Visualização de método de instância

// Esta é uma atividade de visualização, não há testes.

// Execute o código e veja que podemos chamar o método de instância obterNomeCompleto() na instância da classe Usuario.

// Por enquanto, o método obterNomeCompleto() está retornando apenas uma string definida via hardcoding. Mais adiante, você aprenderá como como implementar a funcionalidade completa do método.

// Não se esqueça de ler a definição e o uso da classe.

// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        // Mais adiante, você aprenderá como implementar este método
        return "Silvia Moreira";
    }
}

// Uso da classe
let usuario = new Usuario("Silvia", "Moreira");
console.log(usuario.obterNomeCompleto());