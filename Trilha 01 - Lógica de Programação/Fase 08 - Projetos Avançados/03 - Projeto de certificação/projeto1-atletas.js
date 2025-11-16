let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


function resultadoNotasAtletas (atletas) {

  for (let i = 0; i < atletas.length; i++){

    const ATLETA = atletas[i]
    const NOTAS_ORDENADAS = ATLETA.notas.slice().sort((a, b) => a - b);
    const NOTAS_COMPUTADAS = NOTAS_ORDENADAS.slice(1, 4);

    // 3. Somar as notas computadas
    let soma = 0;
    NOTAS_COMPUTADAS.forEach(function(nota) {
      soma += nota;
    });

    const MEDIA = soma / NOTAS_COMPUTADAS.length;

    // 5. Exibir resultado
    console.log(`Atleta: ${ATLETA.nome}`);
    console.log(`Notas Obtidas: ${ATLETA.notas.join(", ")}`);
    console.log(`Média Válida: ${MEDIA}`);
    console.log("");

  };

};

resultadoNotasAtletas(atletas);


