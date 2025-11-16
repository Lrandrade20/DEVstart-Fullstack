// Função com condicional

//Exemplo 1
function mostreMesagemVoto(idade) {
  if(idade >= 18) {
    console.log("Você tem permissão para votar")
  }
}
console.log(mostreMesagemVoto(10))
console.log(mostreMesagemVoto(20))

// Exemplo 2
function ePositivo(numero) {
  if (numero >= 0){
    return true
  }
}
console.log(ePositivo(5))
console.log(ePositivo(-10))


// Estrutura de lista de compras com função e if
function obtenhaMensagem(valor) {
    console.log(valor)

    if (valor < 0 ){
      return "Número inválido"
    }
    
    if (valor === 0){
      return "Você não tem nenhum item em sua lista de compras"
    }

    if (valor === 1){
      return "Você tem 1 item em sua lista de compras"
    }

    if (valor > 1){
      return "Você tem mais de 1 item em sua lista de compras"
    }
}