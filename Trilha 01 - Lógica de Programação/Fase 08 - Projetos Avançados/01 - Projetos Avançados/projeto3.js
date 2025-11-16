/**️️Aplicativa para importar tarefas do CSV

Conclua a classe Tarefas com os seguintes métodos de instância:

    importarCSV(), que recebe uma string CSV, a converte em um array de tarefas e a armazena na variável de instância this.tarefas.
    obterQuantidadeDeTarefas(), que retorna o número de tarefas.
    obterPrimeiraTarefa(), que retorna a primeira tarefa.
    obterUltimaTarefa(), que retorna a última tarefa.
    obterTarefasEmCSV(), que retorna uma string de todas as tarefas em letras minúsculas e separadas por um caractere de vírgula e um caractere de espaço (ou seja, faz uma exportação em formato CSV).

Siga as instruções acima.
 */


// Implemente a classe Tarefas 
class Tarefas {
    constructor() {
        this.tarefas = [];
    }

    importarCSV(csvString) {
      return this.tarefas = csvString.split(", ")
    }

    obterQuantidadeDeTarefas() {
      return this.tarefas.length
    }

    obterPrimeiraTarefa() {
      return this.tarefas[0]
    }

    obterUltimaTarefa() {
      return this.tarefas[this.tarefas.length - 1]
    }

    obterTarefasEmCSV() {
      return this.tarefas.map(tarefa => tarefa.toLowerCase()).join(", ");
    }

}