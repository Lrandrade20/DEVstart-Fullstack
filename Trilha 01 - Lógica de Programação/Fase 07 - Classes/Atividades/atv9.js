// ️️Variável de instância da classe Usuário

// Complete a definição da classe Usuario, de forma que cada nova instância contenha as seguintes variáveis ​​de instância:

//     idade, definida com o valor 30.
//     votou, definido com o valor false.

// Certifique-se de visualizar a variável de instância no console. Já adicionamos um console.log(usuario) para ajudá-lo.

// Lembre-se de que as variáveis de instância devem ser definidas com this..

// Definição da classe
class Usuario {
    constructor() {
        this.idade = 30;
        this.votou = false
    }
}

// Uso da classe
let usuario = new Usuario();
console.log(usuario);