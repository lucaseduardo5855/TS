import { Writable } from 'node:stream';

function decorador(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
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
