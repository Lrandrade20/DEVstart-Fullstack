// Cha
function dobro() {
    console.log("O número será dobrado")
}

function triplo() {
    console.log("O número será triplicado")
}

function executar(operacao) {
    if (operacao === "dobro") {
        return dobro() // retorna a função dobro()
    }
    if (operacao === "triplo") {
        return triplo()
    }
}
executar("dobro") // retorna o console.log da function 'dobro()'
executar("triplo") // retorna o console.log da function 'triplo()'
