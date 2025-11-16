// O movimento de entrar no if para acessar uma condição se chama Ramificação
function podeVotar(idade) {
    if (idade >= 16) {
        return true
    }
}
console.log(podeVotar(30)) // true
console.log(podeVotar(10)) // 'undefined', pois não possui ramificação para idades menores que 16