//{
    titulo: "Minha tarefa", // título da tarefa
    estaCompleta: true, // booleano indicando se a tarefa está completa ou não
    categoria: "trabalho", // categoria da tarefa
    autor: { // objeto aninhado contendo os dados do autor
        nome: "Alice",
        sobrenome: "Fernandes"
    }
}//


function criarTarefa(dados) {
    console.log(dados)
}

function adicionarTarefa(tarefas, tarefa) {
    return tarefas.push(tarefa)
}

function conteTarefa(tarefas) {
    return tarefas.length
}

function primeiraTarefaTitulo(tarefas) {
    return tarefas.titulo[0]
}

function ultimaTarefaTitulo(tarefas) {
    return tarefas.titulo[titulo.length - 1]
}

function exportacaoDeTitulos(tarefas) {
    return tarefas.map(function(tarefa){
        return tarefa.titulo
    })
}