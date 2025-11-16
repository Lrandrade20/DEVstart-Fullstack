// ️️Projeto 19 - Sala de aula

// Complete a classe Estatistica, de forma que ela contenha os seguintes métodos de instância:

//     obterNumeroTotalDeNotas() que retorna o número de notas.
//     obterPrimeiraNota(), que retorna a primeira nota enviada (a primeira enviada, não a mais alta).
//     obterUltimaNota(), que retorna a última nota enviada (a última enviada, não a mais baixa).
//     obterSomaDasNotas(), que retorna a soma de todas as notas.
//     obterNotaMedia(), que retorna a nota média.
//     exportarCsv(), que retorna a string CSV das notas.

// A classe Estatistica é instanciada com uma matriz de notas.

// Tente resolver o projeto e, caso fique travado, veja as instruções adicionais abaixo.

// Comece definindo o construtor. Ele recebe um parâmetro, que é uma matriz contendo as notas. Você precisa capturar as notas como uma variável de instância.

// Primeiro, defina todos os métodos de instância, para que você possa testar livremente o aplicativo sem causar erros.

// Implemente o método de instância obterNumeroTotalDeNotas(). Não esqueça que você pode acessar as notas como this.notas.

// Então, implemente obterPrimeiraNota(), que deve retornar a primeira nota, e obterUltimaNota(), que deve retornar a última nota. Você precisará usar o comprimento, ou seja, a propriedade .length da matriz de notas.

// Para implementar obterSomaDasNotas(), você pode usar .forEach ou .reduce.

// No caso do método obterNotaMedia(), você precisa calcular a soma e depois dividi-la pelo número de notas.

// Por fim, para implementar exportarCsv(), você pode usar .join para converter a matriz de notas em uma string.


// Definição da classe
class Estatistica {
    constructor(notas) {
        this.notas = notas
    }

    obterNumeroTotalDeNotas() {
        return this.notas.length
    }

    obterPrimeiraNota() {
        return this.notas[0]
    }

    obterUltimaNota() {
        return this.notas[this.notas.length - 1]
    }

    obterSomaDasNotas() {
        let soma = 0
        this.notas.forEach(function(nota){
            soma = soma + nota
        })
        return soma
    }

    obterNotaMedia() {
        let soma = 0
        this.notas.forEach(function(nota){
            soma = soma + nota
        })
        return soma / this.notas.length
    }

    exportarCsv() {
        return this.notas.join(", ")
    }
}

// Uso da classe
let notas = [8, 9, 5, 2, 9];
let suasNotas = new Estatistica(notas);

console.log(suasNotas.obterNumeroTotalDeNotas());
console.log(suasNotas.obterPrimeiraNota());
console.log(suasNotas.obterUltimaNota());
console.log(suasNotas.obterSomaDasNotas());
console.log(suasNotas.obterNotaMedia());
console.log(suasNotas.exportarCsv());

console.log("---");
