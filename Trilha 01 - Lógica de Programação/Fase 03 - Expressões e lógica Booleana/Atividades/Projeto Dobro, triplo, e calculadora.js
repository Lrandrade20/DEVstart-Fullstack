// Etapa 1
function dobro(x) {
    return x * 2
}

function triplo(x) {
    return x * 3
}

function executar(operacao, x) {
    console.log(operacao)
    console.log(x)
    // Escreva seu código abaixo
    if (operacao === "dobro") {
        return dobro(x)
    }
    if (operacao === "triplo") {
        return triplo(x)
    }
}

// Exemplos de uso
executar ("dobro", 5)
executar ("triplo", 8)

// - - - - - - - - - - - - - - - - - - - - - - - - - -

// Etapa 2
function soma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function subtrai(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function executa(operacao, x, y) {
    console.log(operacao)
    console.log(x, y)
    // Escreva seu código abaixo
    if (operacao === "soma") {
        return soma(x, y)
    }
    if (operacao === "multiplica") {
        return multiplica(x, y)
    }
    if (operacao === "subtrai") {
        return subtrai(x, y)
    }
    if (operacao === "divide") {
        return divide(x, y)
    }    
}
console.log(executa("soma", 10, 20))
console.log(executa("multiplica", 10, 20))
console.log(executa("subtrai", 10, 20))
console.log(executa("divide", 10, 20))