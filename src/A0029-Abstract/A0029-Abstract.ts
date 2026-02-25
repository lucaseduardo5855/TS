// Cenário: Um personagem ataca outro personagem e a força que ele tiver do ataque vai ser sugado da vida de quem está sendo atacadado
export abstract class Personagem{

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ){}

  atacar(personagem: Personagem):void{
    this.Bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number):void{
    this.vida -= forcaAtaque; //vida - ou = a força de ataque do golpe
    console.log(`${this.nome} retirou ${this.vida} de vida`);
  }

  abstract Bordao(): void;
}

class Guerreira extends Personagem{
  Bordao(): void {
    console.log('Eu vou atacarrr você monstro!!')
  }
}
class Monstro extends Personagem{
  Bordao(): void {
    console.log('Toma esssaaa Guerreira!')
  }
}

const guerreira = new Guerreira('Guerreira 7mundos', 90, 1000);
const monstro = new Monstro('Monstro Lago', 50, 1000);

monstro.atacar(guerreira)
monstro.atacar(guerreira)