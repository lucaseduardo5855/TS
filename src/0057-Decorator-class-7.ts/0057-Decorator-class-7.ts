function decorador(classPrototype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join(); //muda onde tiver o @decorator ex: lucas inverte
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavra = valor.split(/\s+/g); //corta as string
    const primeiroNome = palavra.shift(); //remove o primeiro array
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavra.join(' '); //junta tudo
  }
}

const pessoa = new UmaPessoa('Lucas', 'Eduardo', 22);
const metodo = pessoa.metodo('Ola Mundo');
console.log(metodo);
