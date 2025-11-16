// Instanciando usuarios

let caio = new Usuario("Caio", "Sanches", 30);
caio.obterNomeCompleto();
caio.obterIniciais();
caio.podeVotar();

let leila = new Usuario("Leila", "Pereira", 15);
leila.obterNomeCompleto();
leila.obterIniciais();
leila.podeVotar();

// Dica: realizar console.log()
console.log(caio)
console.log(leila)

// - Podemos criar uma nova instancia de uma classe 
// usando a palavra-chave new.
// - Ao criar uma nova instância de uma classe, 
// você receberá de volta um objeto.
// - A classe pode ser definida como um modelo 
// para, criar objetos.