// Objetos aninhados

// Ex1 - Adicionando dados em objetos
let estudante = {
    primeiroNome: "Davi",
    sobrenome: "Gonzaga",
    idade: 21,
    // Objeto aninhado cursoMatriculado dentro do objeto estudante
    cursoMatriculado: {
        nome: "DevStart", 
        instituicao: "SENAI", 
        concluido: false
    }
};

console.log(estudante.primeiroNome)
console.log(estudante.cursoMatriculado) 
// { nome: "DevStart", instituicao: "SENAI", concluido: false }

// Acessando os valores do objeto aninhado
console.log(estudante.cursoMatriculado.nome)

// ======================================

// Ex2 - Multiplos objetos aninhados
let curso = {
    nome: "DevStart",
    escola: {
        nome: "SENAI",
        localizacao: {
            cidade: "Florianópolis",
            estado: "SC"
        },
    },
    conteudo: {
        variaveis: true,
        funcoes: true,
        servidor: false
    }
};

// Acessando valores
console.log(curso.escola.localizacao.cidade) // "Forianópolis"
