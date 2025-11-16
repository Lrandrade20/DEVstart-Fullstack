class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Método nome completo
    obterNomeCompleto() {
        return "Nome Completo Aqui";
    }

}

// Uso da classe
let usuario = new Usuario("Lucas", "Andrade");
usuario.obterNomeCompleto() // "Nome completo aqui"

// ------ Comparativo ---------------------
// Sem usar classe
let nome = "Fábio";
let sobrenome = "Lima";
let idade = 30;
obterNomeCompleto(nome, sobrenome)
obterIniciais(nome, sobrenome)
podeVotar(idade)

// Usando classes e métodos da instância
let fabio = new Usuario("Fábio", "Lima");
fabio.obterNomeCompleto();
fabio.obterIniciais()
fabio.podeVotar()
// ------------------------------------------

// Exemplo com métodos
class Pagamento {
    constructor(metodoDePagamento) {
        this.metodoDePagamento = metodoDePagamento;
    }

    podePagar() {
        //código para podePagar
    }

    jaPagou() {
        //código para jaPagou
    }

    redirecionaParaBanco() {
        //código para redirecionaParaBanco
    }
}


// O método de instância é aquele que pode ser chamado em uma instância de uma classe.
// Usamos métodos de instância para agrupar funcionalidades com base em sua lógica. Por exemplo, as funções de pagamento são definidas em uma classe Pagamento como métodos de instância.
// Outro benefício dos métodos de instância é que eles podem usar variáveis de instância.
// A sintaxe de um método de instância é semelhante à de um método construtor.

