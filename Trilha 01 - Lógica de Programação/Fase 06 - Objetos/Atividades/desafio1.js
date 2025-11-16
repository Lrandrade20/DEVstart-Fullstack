function criarTarefa(dados) {
    console.log("Dados recebidos:\n", dados); // ajuda você a visualizar o objeto recebido

    let objetoRetorno = {
        // Insira seu código aqui &#x1f447;&#x1f3fb;
        titulo: "Minha tarefa",
        estaCompleta: true,
        categoria: "Trabalho",
        autor: { 
            nome: "Carlos",
            sobrenome: "Varela"
        }  
    };

    return objetoRetorno;
}

console.log(criarTarefa());