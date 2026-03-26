function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorator e recebi', target)

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0])
      this.cor = this.inverte(args[1])
    }

    inverte(valor: string):string{
      return valor.split('').reverse().join();
    }
  };
}

@inverteNomeECor //vai ser chamado na hora de criação da classe e vou receber tudo q tiver dentro d target
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe')
  }
}


const animal = new Animal('Lucas', 'roxo');
console.log(animal);
