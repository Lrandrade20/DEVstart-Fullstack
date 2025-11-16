// ️️Retorno de método de instância

// Preencha a classe Usuario de forma que ela contenha os seguintes métodos de instância:

//     obterNomeCompleto(), que deve retornar a seguinte string: "Nome completo aqui".
//     podeVotar(), que deve retornar true.
//     jaVotou(), que deve retornar false.

// Siga as orientações acima.


// Definição da classe
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    obterNomeCompleto() {
        return "Nome completo aqui"
    }

    podeVotar(){
        return true
    }

    jaVotou(){
        return false
    }
}

// Uso da classe
let usuario = new Usuario("Daniela", "Queiroz");
console.log(usuario.obterNomeCompleto());