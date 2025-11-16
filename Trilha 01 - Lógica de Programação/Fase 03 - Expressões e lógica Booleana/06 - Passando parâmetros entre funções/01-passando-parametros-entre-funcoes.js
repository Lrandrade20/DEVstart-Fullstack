
// Função dobro
function dobro(x) {
    return x * 2
}

// Passando o parametro de uma função para outra
function executar(operacao, x) {
    if (operacao === "dobro"){
        return dobro(x) // Passa o parâmetro x para a função dobro
    }
}
executar("dobro", 4) // retorna 8
executar("dobro", 5) // retorna 10


