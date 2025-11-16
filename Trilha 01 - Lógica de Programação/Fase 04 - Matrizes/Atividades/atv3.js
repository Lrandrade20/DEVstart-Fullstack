// Atividade
function localizacaoDaLoja(coordenadas) {
  let string = "A loja esta localizada em "
  return string + coordenadas[0] + ", " + coordenadas[1]
}
console.log(localizacaoDaLoja([5.123, 2.374]))
console.log(localizacaoDaLoja([-2.207, 9.319]))

// Atividade
function localizacaoDaLoja(coordenadas) {
  return `A loja está localizada em ${coordenadas[0]}, ${coordenadas[1]}`
}
console.log(localizacaoDaLoja([5.123, 2.374]))
console.log(localizacaoDaLoja([-2.207, 9.319]))

// Atividade
function localizacaoDaLoja(loja, coordenadas) {
  return `${loja} localiza-se na ${coordenadas[0]}, ${coordenadas[1]}`
}
console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]))
console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]))