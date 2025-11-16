// ️️Projeto 18 - Variantes do nome

// Complete a classe VariantesDoNome de forma que ela contenha 3 métodos de instância:

//     obterNumeroDeCaracteres(), que retorna o número de caracteres contidos na variável de instância nome.
//     obterMinusculo(), que retorna o conteúdo da variável de instância nome em letras minúsculas.
//     obterMaiusculo(), que retorna o conteúdo da variável de instância nome em letras maiúsculas.

// A classe VariantesDoNome é instanciada com o nome.

// Tente resolver o projeto e, caso fique travado, veja as instruções abaixo.

// Comece definindo o método construtor. Ele eceberá um parâmetro, que é o nome. Você precisa capturar esse parâmetro e armazená-lo como uma variável de instância.

// Então, você pode começar a implementar o primeiro método de instância, obterNumeroDeCaracteres(). Esse método de instância não aceita parâmetros. Você já tem o nome como uma variável de instância, portanto, pode acessá-lo usando this.nome. Retorne o comprimento dessa variável de instância.

// Por fim, você pode implementar obterMinusculo(), que também não recebe nenhum parâmetro. O mesmo vale para obterMaiusculo().


// Definição da classe
class VariantesDoNome {
     constructor(nome) {
        this.nome = nome;
    }
    
    obterNumeroDeCaracteres() {
        return this.nome.length
    }
    
    obterMinusculo() {
        return this.nome.toLowerCase()
    }
    
    obterMaiusculo() {
        return this.nome.toUpperCase()
    }
}

// Uso da classe
let samuel = new VariantesDoNome("Samuel");
console.log(samuel.obterNumeroDeCaracteres());
console.log(samuel.obterMinusculo());
console.log(samuel.obterMaiusculo());

console.log("---");