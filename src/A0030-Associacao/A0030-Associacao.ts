//Escritor
export class Escritor{
  private _ferramenta: Ferramenta | null = null; //Ferramenta não depende de escritor então nula ou ela.

  constructor(private _nome: string){}

  get nome():string{
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null){
     this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null{
    return this._ferramenta;
  }

  escrever():void{
    if(this.ferramenta === null) {
      console.log('Não temos ferramentas para escrever ou digitar!')
      return;
    }
    this.ferramenta.escrever();
  }
}


//Ferramenta
export abstract class Ferramenta{
  constructor(private _nome: string){}
  
  get nome():string{
    return this._nome;
  }

  abstract escrever():void; //mnétodo abstrato
}


//Extensões abstratas
class Caneta extends Ferramenta{
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`)
  }
}


class MaquinaEs extends Ferramenta{
  escrever(): void {
    console.log(`${this.nome} está digitando, tac, tac, tac...`)
  }
}


//variaveis
const escritor = new Escritor('Lucas');
const caneta = new Caneta('bic');
const maquina = new MaquinaEs('Maquina Escrever');


escritor.ferramenta = maquina;
escritor.escrever();


//Inversão de dependencia -> Escritor depende de um Contrato que nó caso é o contrato com a Ferramenta(abstract), por isso é melhor de vez em quando fazer a dependencia de uma Classe no caso(Escritor) para um Contrato(Ferramenta) doq a gente fazer uma dependencia para uma classe concreta ex: Escritor -> Caneta