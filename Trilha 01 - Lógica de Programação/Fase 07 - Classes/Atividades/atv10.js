// ️️Variável de instância da classe Receita

// Complete a definição da classe Receita, de forma que cada nova instância contenha as seguintes variáveis ​​de instância:

//     tempoDeCozimento, definida com o valor 30.
//     alergias, definida como uma MATRIZ que contém um único item, que será a string "nozes".

// Lembrando, matriz utiliza []

// let matrizDeVariavel = [a];
// let matrizDeNumero = [1];
// let matrizDeString = ["teste"];

// Certifique-se de visualizar as variáveis de instância no console.


// Definição da classe Receita com construtor e variáveis de instância
class Receita {
    constructor() {
      this.tempoDeCozimento = 30
      this.alergias = ["nozes"]
    }
}

// Uso da classe
let receita = new Receita();
console.log(receita);