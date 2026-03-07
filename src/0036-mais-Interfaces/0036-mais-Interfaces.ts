interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa{
  readonly enderecos: readonly string[];
}

interface Pessoa{
  readonly idade?: number;
}

const pessoas: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Luca',
  enderecos: ['AV. Br'],
  idade: 22
};



console.log(pessoas);