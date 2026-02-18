type Idade = number;

//Todo objeto que for do tipo PESSOA vai ter essas chaves
type Pessoa = {
  nome: string;
  idade: Idade;
  tamanho: number;
  corPreferida?: string;
};
type CorRgba = 'Vermelho' | 'Azul' | 'Verde';
type CorMR = 'Magenda' | 'Rosa';
type corPreferida = CorRgba | CorMR;

const pessoa: Pessoa = {
  nome: 'Amanda',
  idade: 19,
  tamanho: 1.65,
};

const pessoa2: Pessoa = {
  nome: 'Lucas',
  idade: 22,
  tamanho: 1.7,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Verde'));
console.log(setCorPreferida(pessoa2, 'Magenda'));
