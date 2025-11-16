// Ex1 - Funcional
let mensagem1 = "Quero um copo d'água"

// Ex2 - Funcional - Exemplo de caracter de escape
let mensagem3 = 'Quero um copo d\'água'

// Ex3- Não funcional
// let mensagem2 = 'Quero um copo d'água'

// Ex4 - Funcional - Exemplo de caracter de escape
let mensagem4 = "O jogo \"Tetris\" é divertido"

// Ex5 - Funcional - Usando template string não precisa usar caractere d'escape
let mensagem5 = `Bebi um copo d'água e joguei "Tetris para relaxar.`

// Ex6 - caracter de escape é necessario em caso de uso de crase solta
let mensagem = `Ao inserir o \` na letra a, 
acontece crase`

// Ex7 - Interpolação com template-string
function obterMensagem(idade) {
    return `Você tem atuamente ${idade} anos.
    No ano que vem, você terá ${idade + 1} anos.`
}
obterMensagem(24) 

// Ex8 - Interpolação de resultado de função
function darBoasVindas(nome) {
    return `Bem-vindo, ${nome.toLowerCase()}`
}
darBoasVindas("FRED") // Bem-vindo, fred

// Ex9 - Inserindo uma variavel antes
function darBoasVindas(nome) {
    let resultado = nome.toLowerCase
    return `Bem-vindo, ${resultado}`
}
darBoasVindas("FRED") // Bem-vindo, fred

