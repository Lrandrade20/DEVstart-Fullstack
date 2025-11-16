// Metodo join
let numeros = [3, 1, 6]
let string = numeros.join(";") // 3;1;6

// exemplo 2
let numeros = [3, 1, 6]
let csv = numeros.join(", ") // 3, 1, 6

// O metodo join converte a matriz em string
// Na string retornada pelo join, os caracteres passados como parametros
//... são inseridos ENTRE OS ITENS DA MATRIZ
// csv significa 'Comma Separated Values', ou valores separados por vírgula.
// trata-se de um formato de arquivo que pode ser importado pelo excel