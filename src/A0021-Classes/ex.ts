export class Atleta{
    public readonly nome: string;
    public readonly modalidade: string;

    constructor(nome: string, modalidade: string){
      this.nome = nome;
      this.modalidade = modalidade;
    }
    
}

export class Equipe{
    public readonly nomeDaEquipe: string;
    private readonly atletas: Atleta[] = [];

  constructor(nomeDaEquipe: string){
    this.nomeDaEquipe = nomeDaEquipe;
  }

  matricularAtleta(atleta: Atleta): void{
    this.atletas.push(atleta);
  }

  mostraTime(): void{
    for (const atleta of this.atletas)
      console.log(atleta);
  }
}

const equipe = new Equipe('Z4 Perfomance');
const atleta1 =  new Atleta('Amanda', 'Natação');
const atleta2 =  new Atleta('Nicolas', 'Pedal');
const atleta3 = new Atleta('Eduardo', 'Corrida')

equipe.matricularAtleta(atleta1);
equipe.matricularAtleta(atleta2);
equipe.matricularAtleta(atleta3);

equipe.mostraTime();

console.log(Atleta)