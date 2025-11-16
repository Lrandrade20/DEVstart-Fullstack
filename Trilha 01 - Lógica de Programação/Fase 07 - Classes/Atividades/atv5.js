


// Esta é uma atividade de visualização, não há testes.

// Execute o código e veja como cada nova chamada de Usuario() chamará automaticamente o método constructor(), que então exibirá no console a mensagem: "Criando uma nova instância da classe Usuario".


// definição de classe
class Usuario {
    constructor() {
        console.log("Criando uma nova instância da classe Usuario");
    }
}

// instanciação da classe 
console.log("Vamos criar a primeira instância");
let usuario1 = new Usuario();
console.log("Vamos criar a segunda instância");
let usuario2 = new Usuario();
console.log("Fim");