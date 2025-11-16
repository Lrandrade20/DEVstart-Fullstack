// Atividade desafio - Código promocional 
function eCodigoPromocionalValido(codigo) {
    console.log(codigo)
    if (codigo.length >= 5 && codigo.length < 11) {
        return true
    } else {
        return false
    }
}