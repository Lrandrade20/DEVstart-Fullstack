function obterNomeCompletoDoUltimoUsuario(usuarios) {
    return `${usuarios[1].nome} ${usuarios[1].sobrenome}`
}

// Não modifique as linhas abaixo
let usuarios = [
  {
    nome: "Samuel",
    sobrenome: "Bastos",
    idade: 21,
  },
  {
    nome: "Carla",
    sobrenome: "Nogueira",
    idade: 38,
  }
];

console.log(obterNomeCompletoDoUltimoUsuario(usuarios));