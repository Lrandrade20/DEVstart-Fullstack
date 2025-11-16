// Função sem retorno gera o 'undefined'
function quantidadeDeLetras(nome) {
    nome.length
}
quantidadeDeLetras("Lucas") // undefined

// Neste caso retornamos o 'undefined', logo tbm retorna o undefined
function quantidadeDeLetras(nome) {
    nome.length
    return undefined
}
quantidadeDeLetras("Lucas") // undefined