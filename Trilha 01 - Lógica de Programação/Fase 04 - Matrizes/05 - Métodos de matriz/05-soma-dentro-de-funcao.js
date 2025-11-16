// Soma dentro de função
function calculaSoma(itens) {
    let soma = 0
    itens.forEach(function(item){
        soma = soma + item
    })
    return soma
}

// Exemplos de uso
calculaSoma([10, 20, 30]) // 60
calculaSoma([5, 2]) // 7
calculaSoma([0]) // 0

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Exemplo de caso incorreto
function calculaSoma(itens) {
    let soma = 0
    itens.forEach(function(item){
        soma = soma + item
        return soma // ISSO ESTA ERRADO
    })
    
}
// Exemplos de uso
calculaSoma([10, 20, 30]) // undefined (errado)
calculaSoma([5, 2]) // undefined (errado)
calculaSoma([0]) // undefined (errado)