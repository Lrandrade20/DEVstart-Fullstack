// O else funciona como a lógica de condição oposta do if
function podeVotar(idade) {
    if (idade >= 16){
        return "Você tem permissão para votar"
    }
    else {
        return "Você não tem permissão para votar"
    }
}
podeVotar(29) // retorna "Você tem permissão para votar"
podeVotar(10) // retorna "Você não tem permissão para votar"

// O caso acima simplificado
function podeVotar(idade) {
    if (idade >= 16) {
        return true
    } else {
        return false
    }
}

// Outro caso de if/else
function ePositivo(numero) {
    if (numero > 0) {
        return true
    } else {
        return false
    }
}
console.log(ePositivo(7))
console.log(ePositivo(-4))
