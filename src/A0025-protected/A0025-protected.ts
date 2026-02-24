export class Empresa{
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];//Valor vazio de array de inicio pq depois vamos adicionar novos atributos
  private readonly cnpj: string;

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

//Exportando Empresa para dentro de Udemy e passando os valores q foram setados 
export class Udemy extends Empresa{
  constructor(){
    super('udemy', '123123133');
  }

  popColaborador(): Colaborador | null{
    const colaborador = this.colaboradores.pop();
    if(colaborador) return colaborador // se colaborador tiver colaborador = deu boa
    return null; //caso contrario retorna null
  }
}


const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Lucas', 'Eduardo');
const colaborador2 = new Colaborador('Amanda', 'Melo');
const colaborador3 = new Colaborador('Ana', 'Clara');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.popColaborador();
console.log(empresa1);




