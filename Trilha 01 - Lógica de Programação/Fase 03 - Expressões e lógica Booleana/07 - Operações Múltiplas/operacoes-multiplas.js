function dobro(x) {
    return x * 2
}

function triplo(x) {
    return x * 3
}

function executar(operacao, x) {
    if (operacao === "dobro") {
        return dobro(x)
    }
    
    if (operacao === "triplo") {
        return triplo(x)
    }
}
executar("dobro", 10) // 20
executar("triplo", 30) // 90