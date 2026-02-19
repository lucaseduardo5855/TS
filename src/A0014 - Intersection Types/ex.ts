type TemJogo = { jogo: string };
type TemControle = { controle: boolean };
type TemAno = { ano: number };
type JogoCompleto = TemJogo & TemControle & TemAno;

const Jogo1: JogoCompleto = {
  jogo: 'duolingo',
  controle: false,
  ano: 2022,
};

console.log(Jogo1);
