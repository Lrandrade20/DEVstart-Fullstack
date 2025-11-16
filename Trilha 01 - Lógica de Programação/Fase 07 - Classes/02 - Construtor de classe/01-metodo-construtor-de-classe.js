//Exemplo de constructor

// Ex1
class Usuario {
    constructor() {
        console.log("Criando uma instância")
    }
}

// Se criarmos a instancia usando a classe será 
// ... exibido no console o construtor da classe
let usuario1 = new Usuario() // "Criando uma instância"
let usuario2 = new Usuario() // "Criando uma instância"

// detalhe: todo metodo dentro da classe 
// ... não usa a palavra chave 'function'

// O método constructor da classe, chamado constructor(), é chamado automaticamente toda vez que uma nova instância dessa classe é criada.
// O método construtor precisa estar dentro da definição da classe.
// Ao definir o método construtor, não se usa a palavra chave function.
