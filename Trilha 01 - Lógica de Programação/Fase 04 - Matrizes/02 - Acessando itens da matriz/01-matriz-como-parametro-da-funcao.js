// Matriz como parâmetro de função
function obtemPrimeiroItem(itens) {
	return itens[0]
}
obtemPrimeiroItem([6, 2, 5]) // 6
obtemPrimeiroItem([4, -3, 8]) // 4


// Indice Undefined
let notas = [10, 5, 7]
notas[3] // undefined

// Exemplo de concatenação com itens de matriz
function obtemNomeCompleto(nomes) {
	return nomes[0] + " " + nomes[1]
}
obtemNomeCompleto(["Ana", "Costa"])
obtemNomeCompleto(["Enzo", "Moura"])


// Exemplo de interpolação com itens de matriz
function obtemNomeCompleto(nomes) {
	return `${nomes[0]} ${nomes[1]}`
}
obtemNomeCompleto(['Lucas', 'Andrade'])
obtemNomeCompleto(["Enzo", "Moura"])