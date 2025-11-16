
/**

Preencha a classe Passaporte, de forma que ela inclua os seguintes métodos de instância:

    obterNome(), que retorna o primeiro nome em letras minúsculas.
    obterSobrenome(), que retorna o sobrenome em letras maiúsculas.
    obterNomeCompleto(), que retorna o nome e o sobrenome separados por um caractere de espaço.
    obterIniciais(), que retorna o primeiro caractere do primeiro nome seguido por um caractere de ponto (.), seguido pelo primeiro caractere do sobrenome e seguido por um caractere de ponto (.).
    obterEhNomeValido(), que retorna a string "Sim" quando o primeiro nome tem pelo menos 1 caractere e o sobrenome tem pelo menos 1 caractere e o sobrenome NÃO termina com um caractere de ponto (.). Em todos os outros casos, deve retornar a string "Não".

Nota: a classe é inicializada com 2 argumentos: o primeiro nome e o sobrenome.
 */

// Implemente a Classe Passaporte
class Passaporte {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    obterNome() {
        return `${this.nome.toLowerCase()}`
    }

    obterSobrenome() {
        return `${this.sobrenome.toUpperCase()}`
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais() {
        return `${this.nome[0]}.${this.sobrenome[0]}.`
    }

    obterEhNomeValido() {
        if (this.nome.length >= 1 && this.sobrenome.length >= 1){
            return `Sim`
        } else if (this.sobrenome.endswitch(".")){
            return `Não`
        } else {
            return `Não`
        }
    }
}

// Uso da classe
let mario = new Passaporte("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.obterIniciais());
console.log(mario.obterEhNomeValido());

console.log("---");