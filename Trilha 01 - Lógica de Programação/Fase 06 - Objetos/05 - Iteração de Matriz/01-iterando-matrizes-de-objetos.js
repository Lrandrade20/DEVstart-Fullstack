// Iterando matrizes de objetos

//ex1
let usuarios = [
    {
        nome: "Lucas",
        sobrenome: "Andrade"
    },
    {
        nome: "Fernando",
        sobrenome: "Rocha"
    }
]

// saida de todos os objetos da matriz irmaos
usuarios.forEach(function(usuario) {
    console.log(usuario);
})

// saida de todos os nomes da matriz irmaos
usuarios.forEach(function(usuario) {
    console.log(usuario.nome);
})


// Ex2
let receitas = [
    {
        titulo: "Brigadeiro",
        alergias: ["chocolate"],
        minutosDePreparo: 30,
        classificacao: 4.5
    },
    {
        titulo: "Lasanha",
        alergias: ["leite", "tomate"],
        minutosDePreparo: 45,
        classificacao: 3.9
    },
    
];

// Usando exemplo com MAP - Retornando uma matriz de strings
let titulos = receitas.map(function(receita){
    console.log(receita) // Ajuda a visualizar
    return receita.titulo;
})
console.log(titulos)