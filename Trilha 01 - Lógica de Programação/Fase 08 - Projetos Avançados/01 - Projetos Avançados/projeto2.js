// Implemente a classe Conta

class Conta {
    constructor() {
        this.valores = [];
    }

    adicionarTotais(valorestr) {
        return this.valores.push(parseInt(valorestr, 10))
    }

    obterQuantidadeDeValores() {
        return this.valores.length
    }

    obterTotal() {
        let soma = 0
        for (let i = 0; i < this.valores.length; i++) {
            soma = soma + this.valores[i]
        }
        return soma
    }

    obterMedia() {
        return this.obterTotal() / this.valores.length
    }

}