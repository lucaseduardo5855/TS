// Cenário: Um personagem ataca outro personagem e a força que ele tiver do ataque vai ser sugado da vida de quem está sendo atacadado
export class Personagem{
  constructor(
    protected nome: string,
    protected vida: number,
    protected ataque: number,
  ){}

  atacar(personagem: Personagem):void{
    console.log(`${this.nome} está atacando!!!`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number):void{
    this.vida -= forcaAtaque; //vida - ou = força de ataque 
    console.log(`${this.nome} retirou ${this.vida} de vida`);
  }
}

class Guerreira extends Personagem{}
class Monstro extends Personagem{}

const guerreira = new Guerreira('Guerreira Obscura', 1000, 90);
const monstro = new Monstro('Monstro do lago nés', 1000, 60);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);