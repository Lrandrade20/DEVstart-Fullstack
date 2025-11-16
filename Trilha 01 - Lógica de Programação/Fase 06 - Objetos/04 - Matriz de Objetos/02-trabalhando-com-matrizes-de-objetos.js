// Trabalhando com matrizes de objetos

// Ex1
let usuarios = [
    {
        nome: "Sara", 
        sobrenome: "Buarque",
    },
    {
        nome: "Carlos", 
        sobrenome: "Ferreira",
    }
];
console.log(usuarios[0]); // {nome: "Sara", sobrenome: "Buarque"}

// Ex2

// ...... Código omitido
// Saídas

// Errado
console.log(usuarios.nome); // Undefined

// Correto
console.log(usuarios[0].nome); // "Sara"
console.log(usuarios[0].nome); // "Carlos"