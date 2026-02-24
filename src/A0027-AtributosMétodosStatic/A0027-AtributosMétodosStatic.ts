export class Pessoa {

  static idadePadrao = 0
  static cpfPadrao = '123.12332-123'

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void{
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa{
    return new Pessoa('Lucas', 'Eduardo', 0, '12323');
  }
}

const pessoa1 = new Pessoa('Lucas', 'Eduardo', Pessoa.idadePadrao, Pessoa.cpfPadrao);
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao);
