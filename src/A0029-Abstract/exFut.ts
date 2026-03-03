export abstract class Jogador {
  constructor(
    protected nome: string,
    protected chute: boolean,
    protected defesa: boolean,
  ) {}

  chutar(jogador: Jogador):void{
    this.ceracava();
    jogador.chutandoGol(this.chute);
  }

  chutandoGol(acertarGol: boolean):void{
    console.log(`${this.nome} defendeu o gol!!`)
    this.defesa !== acertarGol;
  }

  abstract ceracava():void;
}

class jogador extends Jogador{
  ceracava(): void {
    console.log(`${this.nome} está cavando...`)
  }
}
class goleiro extends Jogador{
  ceracava(): void {
    console.log(`${this.nome} está fazendo cera!!!`)
  }
}

const jogador1 = new jogador('Neymar', true, false);
const goleiro2 = new goleiro('Felipe', false, true);

jogador1.chutar(goleiro2);
