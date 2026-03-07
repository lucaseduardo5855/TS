//Declaration Merging
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

interface Pessoa{
  posição: string;
}

const pessoas: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Luca',
  enderecos: ['AV. Br'],
  idade: 22,
  posição: 'pivo'
};



console.log(pessoas);