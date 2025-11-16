// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// OBS: as vars com this sãos as variaveis da instancia e as variaveis SEM o this são os parametros.

// Uso da classe
let luis = new Usuario("Luis", "Moura");
console.log(luis); // {nome: "Luis", sobrenome: "Moura"}
let lucas = new Usuario("Lucas", "Rocha");
console.log(lucas); // {nome: "Lucas", sobrenome: "Rocha"}

// Com o método de captura de parametros pelo constructor, todo objeto instanciado agora imprime seus próprios dados dos parametros, não ficando preso aos dados das variaveis do constructor com valores como nos exemplos das aulas passadas.


// Mais exemplos
class Usuario {
    constructor(nome, sobrenome, idade, jaVotou) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.jaVotou = jaVotou;
    }
}

// Chamada do objeto Usuario
let usuario = new Usuario("Gisele", "Antonelle", "30", false) // {nome: "Gisele", sobrenome: "Antonelle", idade: 30, jaVotou: false}

// É comum capturar os parâmetros do construtor em variáveis de instância. Por exemplo, 'this.nome = nome' atribui o valor do parâmetro nome à variável de instância nome
// Em cada instância de uma mesma classe, a estrutura será a mesma, mas o valor das variáveis de instância poderá ser diferente.