// Operadores lógicos e/ou

// Operador &(e)
// Ex1
true && true // é igual true
false && false // é igual true
true && false // é igual false
false && true // é igual false

// Ex2 - caso prático
if (idade >= 18 && idade <= 20) {
    console.log("A idade esta entre 18 e 20 anos")
}
// ======================================================

// Operador ||(Ou)
// Ex3
true || true // é igual true
true || false // é igual true
false || true // é igual true
false || false // é igual false

// Ex4
if (idade < 18 || idade > 70) {
    console.log("A idade esta abaixo de 18 OU acima de 70 anos")
}
