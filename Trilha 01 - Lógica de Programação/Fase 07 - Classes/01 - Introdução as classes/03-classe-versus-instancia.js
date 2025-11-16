// Exemplos de instancia da mesma classe 
let pessoa1 = new Pessoa("Sueli Machado")
let pessoa2 = new Pessoa("Carlos Almeida")

// Importante
pessoa1 === pessoa2 // false(não são iguais)

// instancias diferentes com o mesmo valor
let pessoa1 = new Pessoa("Sueli Machado")
let pessoa2 = new Pessoa("Sueli Machado")

// Duas instancias sempre serão consideradas diferentes
pessoa1 === pessoa2 // false(AINDA não são iguais) 

// Uma classe é uma fabrica capaz de criar instâncias
// Duas instancias sempre serão consideradas diferentes
// Instancias criadas a partir da classe são chamadas de 
//... objetos. Esse objetos contêm propriedade e métodos que
//... descrevem uma entidade.