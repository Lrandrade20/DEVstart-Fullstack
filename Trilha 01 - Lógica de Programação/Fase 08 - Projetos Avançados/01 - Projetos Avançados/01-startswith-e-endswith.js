let texto = "banana";

// Verifica se começa com "ba"
console.log(texto.startsWith("ba")); // true

// Verifica se termina com "na"
console.log(texto.endsWith("na")); // true

// Outro exemplo
console.log(texto.startsWith("ana")); // false
console.log(texto.endsWith("ban"));   // false


console.log("Hello".startsWith("he")); // false (minúscula != maiúscula)


let palavra = "Abacate";
console.log(palavra.toLowerCase().startsWith("aba")); // true
console.log(palavra.toLowerCase().endsWith("te"));    // true
