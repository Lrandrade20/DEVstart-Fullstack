// Insira a função aqui
function obtenhaMensagem(item) {
  if (item < 0) {
    return "Número inválido";
  }
  if (item === 0) {
    return "Você não tem nenhum item em sua lista de compras";
  }
  if (item === 1) {
    return "Você tem 1 item em sua lista de compras";
  }
  if (item > 1) {
    return "Você tem mais de 1 item em sua lista de compras";
  }
}