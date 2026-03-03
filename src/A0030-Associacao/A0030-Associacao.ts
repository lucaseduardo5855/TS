export class Escritor{
  private _ferramenta = Ferramenta | null = null;

  constructor(private _nome: string){}

  getNome():string{
    return this._nome;
  }

  setFerramenta(ferramenta: Ferramenta){
    this._ferramenta = ferramenta;
  }
}


export abstract class Ferramenta{
  constructor(nome: string){}

  getNome():string{
    
  }

  abstract escrever():void;
}

