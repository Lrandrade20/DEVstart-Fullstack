// Retorno do .push()
let numeros = []

console.log(numeros.push(10)) // retorna 1 (novo comprimento da matriz)
console.log(numeros) // [10]

console.log(numeros.push(15)) // retorna 2 (novo comprimento da matriz)
console.log(numeros) // [10, 15]

console.log(numeros.push(13)) // retorna 3 (novo comprimento da matriz)
console.log(numeros) // [10, 15, 13]

// Inserindo push com valor em variavel
numeros = [10, 20]
let valor = numeros.push(15)
console.log(valor) 

// Exemplo do metodo push em função
function adicionaTemperatura(temperaturas) {
    temperaturas.push(10)
    return temperaturas
}
console.log(adicionaTemperatura([-5, 12, 15]))

//METODO INCORRETO
function adicionaTemperatura(temperaturas) {
    return temperaturas.push(10)
}
console.log(adicionaTemperatura([-5, 12, 15])) // retorna 4
// Não retorna a matriz, pois o metodo push não retorna array

