/*Objetos são importantes pois representam e descrevem um 
determinado objeto , elemento, entidade, pessoa etc. 

Os valores do objeto podem ser de diversos tipos

Se os valores forem strings, podem ser aplicados diversos métodos
*/

// Exemplos de operações com objeto
let usuario = {
    "login": "nasa",
    "id": 848102,
    "nome": "NASA",
};
console.log(usuario.nome);
console.log(usuario.nome.toLocaleLowerCase());
console.log(usuario.nome[0]);
console.log(usuario.nome[usuario.nome.length - 1]);