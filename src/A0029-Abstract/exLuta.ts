export abstract class Jogador{

  constructor(
    protected nome: string,
    protected atacar: number,
    protected vida: number,
  ){}

  ataque(jogador: Jogador):void{
  this.Grito();
  console.log(`${this.nome} está batendo!!`)
  jogador.Apanhando(this.atacar);
  }


  Apanhando(tomaSoco: number):void{
  tomaSoco -= this.vida;
  console.log(`${this.nome} está perdendo ${this.vida} depois do caso de racismo`);
  }

  abstract Grito():void;
}

export class ViniJr extends Jogador{
  Grito(): void {
    console.log('XUPAAAAAA RACISTA!')
  }
}
export class Prestianni extends Jogador{
  Grito(): void {
    console.log('Chupa Vini')
  }
}

const jogador1 = new ViniJr('Vini Jr', 100, 1000);
const jogador2 = new Prestianni('prestianni', 50, 1000);

jogador1.ataque(jogador2);