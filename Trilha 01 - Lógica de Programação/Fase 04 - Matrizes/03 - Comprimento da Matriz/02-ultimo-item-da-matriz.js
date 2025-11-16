// A logica é pegar a qtd da matriz (que é 3 no caso abaixo), e diminuir por 1, (resultado 2), que 
// ... que resultará no ultimo indice sempre

// Ex1
let matriz = [10, 20, 30]
matriz[matriz.length - 1] // 30

// Ex2 - Segue a mesma lógica que acima
let numeros = [10, 20, 30, 40, 50]
let ultimoItem = numeros[numeros.length - 1] // 50

// Ex3
let numeros = [10, 20, 50, 40, 30]
let ultimoItem = numeros[numeros.length - 1] // 30

    // isso esta errado
let ultimoItem = numeros[numeros.length] // undefined