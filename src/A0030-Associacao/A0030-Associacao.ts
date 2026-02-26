
export class Escritor{
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string){}

  get nome():string{
    return this._nome;
  }

  set Ferramenta(ferramenta: Ferramenta | null){
    this._ferramenta = ferramenta;
  }

  get Ferramenta(): Ferramenta | null{
    return this._ferramenta
  }

  escrever():void{
    if(this._ferramenta === null){
      console.log('Não podemos digitar')
      return
    }
    this._ferramenta.escrever();
  }
}




export abstract class Ferramenta{
  constructor(private _nome: string){}
  abstract escrever():void; //método q vai ter em todos os const 

  get nome():string{
    return this._nome;
  }

}

export class Caneta extends Ferramenta{
  escrever(): void {
    console.log(`${this.nome} Está escrevendo`)
  }
}
export class MaquinaEscrever extends Ferramenta{
  escrever(): void {
    console.log(`${this.nome} está digitando`)
  }
}

const caneta = new Caneta('Canetinha'); 
const escritor = new Escritor('LUCAS');
const maquina = new MaquinaEscrever('MaquinaEscrever')


console.log(caneta.nome);
escritor.escrever();