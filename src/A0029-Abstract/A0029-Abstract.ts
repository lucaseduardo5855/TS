// Cenário: Um personagem ataca outro personagem e a força que ele tiver do ataque vai ser sugado da vida de quem está sendo atacadado
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}


  atacar(personagem: Personagem):void{
    this.bordao();
    personagem.perderVida(this.ataque);
  }


  perderVida(forcaAtaque: number):void{
     this.vida -= forcaAtaque;
    console.log(` ${this.emoji} ${this.nome} agora tem ${this.vida} de vida!`)
  }

  abstract bordao():void;
}


class Guerreira extends Personagem{
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'Guerreira ao ataqueeee!')
  }
}
class Monstro extends Personagem{
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'Monstro atacando URGHHHH!!')
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 80, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);