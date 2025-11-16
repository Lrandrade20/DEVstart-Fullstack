function senhaEValida(senha) {
    console.log(senha)
    if (senha.length >= 10) {
        return true
    }
    else {
        return false
    }
}

// Parte 2 =====
// trim() para nao contar espaços
function senhaEValida(senha) {
    console.log(senha)
    if (senha.trim().length >= 10) {
        return true
    }else {
        return false
    }

}