// Condicional IF com operador "ou"

// Exemplo 1
if (idade < 18 || idade > 60) {
    console.log("Você ganhou desconto.")
} else {
    console.log("Você não ganhou desconto")
}

// Exemplo 2 - Funcional 
if (idade >= 18  || idade <= 20){
    // Faça alguma coisa
}

// Exemplo 3 - Não-Funcional
if (idade >= 18  && <= 20){
    // Faça alguma coisa
}

// Exemplo 4
let idade = 20
let usuarioAtivo = false
if (idade >= 18 && usuarioAtivo === true) {
    console.log("O usuário tem mais de 18 anos e está ativo.")
} else {
    console.log("O usuário tem menos de 18 anos ou não está ativo.")
}