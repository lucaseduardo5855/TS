interface PessoaProtocolo<T = string, U = number>{
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = Number> {
  nome: T,
  sobrenome: T,
  idade: U
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'lucas',
  sobrenome: 'eduardo',
  idade: 22
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 12323,
  idade: 22
};

const aluno3: PessoaProtocolo2 = {
  nome: 'lucas',
  sobrenome: 'eduardo',
  idade: 22
};

console.log(aluno, aluno2, aluno3)