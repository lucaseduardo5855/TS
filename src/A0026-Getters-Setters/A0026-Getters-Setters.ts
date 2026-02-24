export class Pessoa{
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string){
    console.log('Set chamado')
    this._cpf =  cpf;
  }

  get cpf(): string{
    console.log('Get chamado')
    return this._cpf.replace(/\D/g, "");
  }
}


const pessoa = new Pessoa('Lucas', 'Eduardo', 22, '123.12332-123');
pessoa.cpf = ('585585'); //Sinal de = set
console.log(pessoa.cpf);