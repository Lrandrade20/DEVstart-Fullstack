// Beneficios das variáveis de instancia 
// - São retornadas como pares chave/valor no objeto retornado pelo construtor da classe
// - Podem ser usadas em todos os métodos de instância da classe

// Definição da classe
class Usuario{
    constructor() {
        // Criação da variável de instância
        // o this força que a variavel pertence a instância do objeto
        this.idade = 30;
    }
}

// Uso da classe
let usuario = new Usuario()
console.log(usuario)


// Ex2
class Usuario {
    constructor() {
        // instância
        this.nome = "Lucas";
        this.idade = 32;
    }
}

// Uso da classe
// Esse método aplica hardcoding, pois todo usuario imprimirá lucas/32
let usuario = new Usuario();
console.log(usuario); // Usuario {nome: "Lucas", idade: 32}

// - Uma variável de instáncia é um variável que percece a uma instância específica de uma classe.
// - As variáveis de instância que vc cria no método constructor() são retornadas como pares de chaves e valor no objeto que esse método retorna.
// - Essas variáveis podem ser usadas em todos os métodos de instância da classe.
// - A palavra-chave this se refere à instãncia atual da classe.
// - O código para criar uma variável de instância X é: this.X.
