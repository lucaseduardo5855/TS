//Tipo de construtor na classe
type Constructor = new (...args: any[]) => any;

//Classes
function decoradorDeClasse(constructor: Constructor): any {
  //Chamado da criação da classe
  console.log('CLASSE');
  console.log(constructor);
  console.log('###');
}

//Método de instancia (normal)
function decoradorDeMetodo(
  prototipoDaClasse: any,
  nomeMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  //Chamado na criação do método (não precisa chamar o método)
  console.log('Metodo normal');
  console.log(prototipoDaClasse);
  console.log(nomeMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

// Método estático
function metodoDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  //Chamado na criação do método (não precisa chamar o método)
  console.log('Método ESTATICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(descritorDePropriedade);
  console.log('###');
}

//Parametro de método
function decoradorDeParametroDeMetro(
  prototipoDaClasse: any,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  //Chamado na criação do método
  console.log('PARAMETRO DE MÉTRO');
  console.log(prototipoDaClasse);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

//Parametro de método estatico
function decoradorDeParametroDeMetodoEstatico(
  classConstructor: Constructor,
  nomeDoMetodo: string,
  indiceDaPropriedade: number,
): any {
  //Chamado na criação do parametro (nao precisa chamar o método)
  console.log('PARAMETRO DE METODO ESTATICO');
  console.log(classConstructor);
  console.log(nomeDoMetodo);
  console.log(indiceDaPropriedade);
  console.log('###');
}

//Propriedade
function decoradorDePropriedade(
  prototipoDaClasse: any,
  nomePropriedade: string,
): any {
  //Chamado na criação da propriedade
  console.log('DECORADOR DA PROPRIEDADE');
  console.log(prototipoDaClasse);
  console.log(nomePropriedade);
  console.log('###');
}

//Propriedade Estática
function decoradorDePropriedadeEstatica(
  classConstructor: Constructor,
  nomePropriedade: string,
): any {
  //chamado na criação da propriedade estatica
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(nomePropriedade);
}

//Getter/Setter
function decoradorDeGetterESetterNormal(
  prototipoDeClasse: any,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  //Chamado na criação de método
  //(Só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(prototipoDeClasse);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
}

//Getter/Setter
function decoradorDeGetterESetterEstatico(
  classConstructor: Constructor,
  nomePropriedade: string,
  descritorDePropriedade: PropertyDescriptor,
): any {
  //Chamado na criação de método
  //(Só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER Estático');
  console.log(classConstructor);
  console.log(nomePropriedade);
  console.log(descritorDePropriedade);
}

//A Classe e o uso dos decorator

@decoradorDeClasse
export class UmaPessoa {
  @decoradorDePropriedade
  nome: string;
  sobrenome: string;
  idade: number;

  @decoradorDePropriedadeEstatica
  static propriedadeEstatica = '';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoradorDeMetodo
  metodo(@decoradorDeParametroDeMetodo msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @decoradorDeMetodoEstatico
  static metodoEstatico(
    @decoradorDeParametroDeMetodoEstatico msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + msg;
  }

  @decoradorDeGetterESetterNormal
  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split;
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoradorDeGetterESetterEstatico
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}

//Uso da Classe

const pessoa = new UmaPessoa('Lucas', 'Eduardo', 20);
const metodo = pessoa.metodo('Olá Mundo');
console.log(metodo);
