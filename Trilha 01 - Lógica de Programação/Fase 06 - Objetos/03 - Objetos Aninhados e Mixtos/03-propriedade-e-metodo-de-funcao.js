// Propriedade e método de função

// Ex1 - Função dentro do objeto
// A função dentro do objeto é chamado de 'Método', os outros dados são as propriedades
let usuario = {
nome: "Andreia",
    sobrenome: "Mota",
    idade: 21,
    podeVotar: function(idade) {
        return idade >= 16;
    }
}

usuario.podeVotar(30) // true
console.log(usuario.podeVotar(usuario.idade)) // true

// Ex2 - Variaveis que se comunicam
let nome = "Lucas";
let usuario = {
    nome: nome, // Pega a variavel externa
    idade: 21
};
console.log(usuario); // {nome: "Jorge", idade: 21}