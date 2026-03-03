//ex: Fazer Personagem onde ele luta, anderson silva vs minotauro, eles tem vida, e força de ataque. Eles tem que ter um grito um bordão em cada soco que eles dão (é obrigatorio) e cada um vai ter um emoji quando der o soco

export abstract class Lutador {
  constructor(
    protected nome: string,
    protected vida: number,
    protected ataque: number,
  ) {}


  atacar(lutador: Lutador): void{
    this.bordao();
    lutador.tomarSoco(this.ataque);
  }

  tomarSoco(forcaSoco: number):void{
    this.vida -= forcaSoco;
    console.log(`${this.nome} agora tem ${this.vida} de vida!! `)
  }

  abstract bordao():void;
}


class Lutador1 extends Lutador{
  bordao(): void {
    console.log(`${this.nome} está socandooo!`)
  }
}
class Lutador2 extends Lutador{
 bordao(): void {
   console.log(`${this.nome} está indo bater!!`)
 } 
}

const lutador1 = new Lutador1('Anderson silva', 1000, 98);
const lutador2 = new Lutador2('Minotauro', 1000, 92);

lutador1.atacar(lutador2);
lutador2.atacar(lutador1);