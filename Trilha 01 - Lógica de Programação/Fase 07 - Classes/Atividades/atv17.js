// ️️Calorias

// Implemente os seguintes métodos de instância para a classe Receita:

//     ehBaixaCaloria(), que retorna true quando as calorias da receita são 400 ou menos, e false caso contrário.
//     ehAltaCaloria(), que retorna true quando as calorias da receita são 600 ou mais, e false caso contrário.

// Assim que você definir cada método, tente usá-lo para conferir qual valor ele está retornando.


 // Definição da classe
class Receita {
    constructor(nome, calorias) {
        this.nome = nome;
        this.calorias = calorias;
    }
    
    // Implemente os métodos de instância ehBaixaCaloria() e ehAltaCaloria()
    if 

    ehBaixaCaloria() {
        if (this.calorias <= 400) {
            return true
        } else{
            return false
        }
    }

    ehAltaCaloria(){
        if (this.calorias >= 600){
            return true
        }else{
            return false
        }
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 700);
console.log(macarrao.ehBaixaCaloria());
console.log(macarrao.ehAltaCaloria());

let salada = new Receita("Salada", 350);
console.log(salada.ehBaixaCaloria());
console.log(salada.ehAltaCaloria());