
// // Exemplo inicial
// class Usuario {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     // usamos as palavras-chaves this pra acessar as vars
//     obterNomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//     }
// }

// let usuario = new Usuario("Lucas", "Andrade")
// usuario.obterNomeCompleto(); // "Lucas Andrade"


// // ISso esta errado
// obterNomeCompleto() {
//     return `${nome} ${sobrenome}`
// }


// Exemplo 2
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    // operação bool com a var de instancia
    // this acessando a var de instancia sempre
    podeVotar() {
        return this.idade >= 16;
    }
}

// Os parâmetros recebidos pelo construtor da classe não são acessíveis nos métodos de instância
// É por isso que capturamos os parâmetros do construtor e os atribuímos às variáveis de instância. Assim, esses valores ficam acessíveis a todos os métodos de instância da classe.
// Não se esquece de usar o this sempre que precisar se referir a uma variável de instância.