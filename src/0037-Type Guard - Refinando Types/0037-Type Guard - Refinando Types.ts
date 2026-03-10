import { TipoPessoa } from '../A0033-ImplementarTipos/A0033-ImplementarTipos copy';

export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 10));
console.log(add('a', 'b'));




type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};

type Animal = {
  tipo: 'animal';
  cor: string;
};

type PessoaOuAnimal = Pessoa | Animal;


export class Aluno implements Pessoa{
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string){}
}

function mostraNome(obj: PessoaOuAnimal): void{
  switch(obj.tipo){
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}


mostraNome(new Aluno('Lucas'));
mostraNome({tipo: 'pessoa', nome: 'Rosa'});