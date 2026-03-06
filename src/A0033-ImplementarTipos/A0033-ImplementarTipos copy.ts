export abstract class TipoPessoa{
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}


export class Pessoa extends TipoPessoa{
  constructor(public nome: string, public sobrenome: string){
    super()
  }

  nomeCompleto():string{
    return this.nome + ' ' + this.sobrenome;
  }
}


const pessoa = new Pessoa('Lucas', 'Eduardo');
console.log(pessoa.nomeCompleto());