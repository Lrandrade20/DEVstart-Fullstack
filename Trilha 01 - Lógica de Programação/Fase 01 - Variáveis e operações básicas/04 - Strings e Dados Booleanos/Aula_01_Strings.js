// declaração de string básica
let cidade = 'Manaus'

// Verifica o comprimento da string
let cidade = "Curitiba";
console.log(cidade.length); // retorna 8 (tamanho da string)

// Escrevendo no console
console.log('Lucas')

// Console.log retornando valor da função no console
function dobro(numero) {
    console.log(numero * 2)
    return numero * 2
}
let resultado = dobro

// Chamada de uma função no console log
function soma(a, b) {
  return a + b;
}
console.log(soma(7, 3))

// Metodos string - Uppercase
let nome = "henrique"
let nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo) // "HENRIQUE"

// Metodos string - LowerCase
let nome = "mADalenA"
let nomeMinusculo = nome.toLowerCase()
console.log(nomeMinusculo) // "madalena"

// Exemplo gerais de funções com métodos
function obtenhaNumeroDeCaracteres(nome) {
    // retorna o número de caracteres em: nome
    return nome.length
}

function obtenhaNomeMinusculo(nome) {
    // retorna o nome todo em letras minúsculas (exemplo: "ABC" se torna "abc")
    return nome.toLowerCase()

}

function obtenhaNomeMaiusculo(nome) {
    // retorna o nome todo em letras maiúsculas (exemplo: "abc" se torna "ABC")
    return nome.toUpperCase()
}


// DADOS BOOLEANOS

// Exemplo de dado booleano false
let podeVotar = false

// Exemplo de dado booleano true
let jaVotou = true

