export class Pessoa{
  constructor(
     public nome: string,
     public sobrenome: string, 
     private idade: number, 
     protected cpf: string,
    ) {}

  getIdade(): number{
    return this.idade;
  }

  getCpf(): string{
    return this.cpf;
  }

  getNomeCompleto(): string{
    return this.nome + '' + this.sobrenome;
  }
}

//Tudo que tem dentro da classe Pessoa dentro de Aluno agora
export class Aluno extends Pessoa{
  constructor(
     nome: string, //valores
     sobrenome: string,
     idade: number,
     cpf: string,
     public sala: string, //atributo novo criado
   ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes')
    const result = super.getNomeCompleto();
    return result + 'Heyyyy';
  }
}

export class Cliente extends Pessoa{
  getNomeCompleto(): string {
    return ' isso vem do cliente ' + this.nome + '' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lucas', 'Eduardo', 22, '1362719599232');
const aluno = new Aluno('Lucas', 'Eduardo', 22, '1362719599232', '0001');
const cliente = new Cliente('Lucas', 'Eduardo', 22, '1362719599232');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);