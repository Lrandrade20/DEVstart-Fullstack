// Matriz como valor de objeto

// Ex1
let estudante = {
    primeiroNome: "Renata", // string
    sobrenome: "Almeida", // string
    temGraduação: false, // booleano
    idade: 21, // numero
    notas: [5, 8, 4, 7],
    interesses: ["computador", "livros"] // natriz de strings
};

// Acessanddo valores do objeto
console.log(estudante.primeiroNome) // "Renata"
console.log(estudante.temGraduação) // false
console.log(estudante.idade) // 21
console.log(estudante.notas) // [5, 8, 4, 7]

// Acessando os valores da matriz
estudante.notas.length; // 4
estudante.notas.forEach(function(nota){
    console.log(nota);
})
