export class Empresa{
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];//Valor vazio de array de inicio pq depois vamos adicionar novos atributos
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string){
    this.nome = nome; //pegue esse nome temporario e guarda de forma denifitiva dentro da propriedade nome o objeto this
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void{
    for(const colaborador of this.colaboradores){
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, 
    public readonly sobrenome: string
  )  {}
}


const empresa1 = new Empresa('Udemy', '11.111.111/0001--11');
const colaborador1 = new Colaborador('Lucas', 'Eduardo');
const colaborador2 = new Colaborador('Amanda', 'Melo');
const colaborador3 = new Colaborador('Ana', 'Clara');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.mostrarColaboradores();


