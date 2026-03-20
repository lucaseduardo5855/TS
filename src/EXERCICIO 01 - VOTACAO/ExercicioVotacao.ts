//Exercicio Ligação entre Classes
//O que temos que fazer? -> Temos 2 perguntas, onde as pessoas podem votar, baseado na pergunta temos opções e as pessoas votam nas opções e escolhem quais elas querem e votariam e aumenta mediante aos votos.

type VotationOptions = {
  option: string;
  numberOfVotes: number;
};

export class Votation {
  private _votationOptions: VotationOptions[] = [];
  constructor(public details: string) {}

  //Métodos
  addVotationOptions(votationOption: VotationOptions): void {
    this._votationOptions.push(votationOption);
  }

  voto(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOptions[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const vontationOption of votation.votationOptions) {
        console.log(vontationOption.option, vontationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual é sua linguagem favorita?');
votation1.addVotationOptions({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'TS', numberOfVotes: 0 });
votation1.addVotationOptions({ option: 'JS', numberOfVotes: 0 });

votation1.voto(0);
votation1.voto(0);

const votationapp = new VotationApp();
votationapp.addVotation(votation1);
votationapp.showVotation()

