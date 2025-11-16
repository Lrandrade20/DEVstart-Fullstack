// Retira todos os espaços da string do inicio e do final
function pegueEmail(email) {
    return email.trim()
}
console.log(pegueEmail(" alex@gmail.com "))
console.log(pegueEmail(" alex@gmail.com"))
console.log(pegueEmail("bron@gmail.com"))

// Metodo Trim e UpperCase na função
function pegueNome(nome) {
  return nome.trim().toUpperCase()
}
console.log(pegueNome(" bruno"))
console.log(pegueNome(" alex  "))

// Outro exemplo de chamada de metodo
function limpaEmail(email) {
    let limpo = email
	limpo = limpo.toLowerCase()
	limpo = limpo.trim()
	return limpo
}

//Trabalhano com números
function precoEmCentavos(reais) {
    let preco = reais * 100
    preco = preco + 200
    return preco
}

// Conversão de metros para KM
function converterMetrosParaKm(metros) {
  let km = metros / 1000
  return km
}
console.log(converterMetrosParaKm(1000)) // saída 1
console.log(converterMetrosParaKm(3000)) // saída 3

// Conversão km para Milha
function converterKmParaMilhas(valorKM) {
    let milha = valorKM * 0.62137;
    return milha
}
console.log(converterKmParaMilhas(34))
console.log(converterKmParaMilhas(57))

// Celsius para Fahrenheit
function converterCelsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
console.log(converterCelsiusParaFahrenheit(25))

// Convenção de nomenclatura
let nome = 'Rodrigo' // atribuição de var com valor
nome = 'Paulo' // novo valor, não precisa reatribuir
