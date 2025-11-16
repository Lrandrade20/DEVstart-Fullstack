
// Ex1 - Instanciando a classe com nome/sobrenome
let lucas = new Usuario("Lucas", "Andrade")

// O exemplo acima só funcionará se o constructor possuir parametros de nome/sobrenome

// Exemplo completo
class Usuario {
    constructor(nome, sobrenome) {
        console.log("Criando instância de usuário")
        console.log(nome)
        console.log(sobrenome)
    }
}

// Demonstrando saidas do construtor com objeto instanciado lucas
let lucas = new Usuario("Lucas", "Rocha")

// Podemos criar multiplos objetos
let fernando = new Usuario("Fernando", "Andrade")
let lia = new Usuario("Eliana", "Bezerra")
let armando = new Usuario("Armando", "Andrade")

// - Assim como qualquer função, o método construtor pode aceitar parametros
// - Os parametros para o método construtor são recebidos quando a instanciação da classe acontece, ou seja, quando você cria uma variável usando a palavra-chave new