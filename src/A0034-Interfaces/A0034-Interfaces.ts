interface TipoNome {
  nome: string;
};

interface TipoSobrenome  {
  sobrenome: string;
};

interface TipoNomeCompleto {
  nomeCompleto(): string;
};

//Englobando todos os types
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto{}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj:TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Luiz',
  sobrenome: 'Eduardo'
}

//const pessoa1 = new Pessoa('Lucas', 'Edu');
//console.log(pessoa1.nomeCompleto());

console.log(pessoaObj.nomeCompleto());