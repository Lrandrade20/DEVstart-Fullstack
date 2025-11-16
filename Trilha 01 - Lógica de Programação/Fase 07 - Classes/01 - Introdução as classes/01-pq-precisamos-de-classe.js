// Como descrever um usuário
// - Variaveis: Name, sobrenome, e idade 
// - Funções: obter o nome completo, obter iniciais, 
// verificar se pode votar

// Exemplos soltos da descrição do usuário
let nome = "Caio";
let sobrenome = "Sanches";
let idade = 30;
obterNomeCompleto(nome, sobrenome);
obterIniciais(nome, sobrenome);
podeVotar(idade);

// Exemplo acima só que com classe
let caio = new Usuario("Cario", "Sanches", 30);
caio.obterNomeCompleto();
caio.obterIniciais();
caio.podeVotar();

// Objetos e classes são diferentes
// - Objetos: agrupam variáveis
// - Classes: agrupam variáveis e funções

// As classes permitem agrupar as variáveis e funções 
// que descrevem uma entidade (produto, usuário, receita, etc.)

// Dentro de uma classe, as variáveis são chamadas de 
// propriedades e as funções são chamadas de métodos.