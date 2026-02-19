type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  nome: 'lucas',
  sobrenome: 'melo',
  idade: 22,
};

console.log(pessoa);

//Module Mode
export { pessoa };
