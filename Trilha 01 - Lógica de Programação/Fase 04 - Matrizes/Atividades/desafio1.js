// Desafio Projeto
function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
    console.log("Primeiro Retângulo", primeiroRetangulo)
    console.log("Segundo Retângulo", segundoRetangulo)
    let calc1 = primeiroRetangulo[0] * primeiroRetangulo[1]
    let calc2 = segundoRetangulo[0] * segundoRetangulo[1]
    return calc1 - calc2
}
console.log(calcularDiferenca([10, 20], [5, 10]))