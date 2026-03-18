//Exercicio Ligação entre Classes
//O que temos que fazer? -> Temos 2 perguntas, onde as pessoas podem votar, baseado na pergunta temos opções e as pessoas votam nas opções e escolhem quais elas querem e votariam e aumenta mediante aos votos.

export class Votacao {
  private options: VotationOption[] = [];

  constructor(public details: string) {}

  addOption(option: VotationOption): void {
    this.options.push(option);
  }

  vote(optionIndex: number): void {
    this.options[optionIndex].numberOfVotes++;
  }

  getOptions(): VotationOption[] {
    return this.options;
  }
}

type VotationOption = {
  option: string;
  numberOfVotes: number;
};

export class VotationApp {
  private votation: Votacao[] = [];

  addVotation(votationAdd: Votacao): void {
    this.votation.push(votationAdd);
  }

  showVotation(): void {
    // 1. Esse loop pega cada URNA (votation) da lista de urnas
    for (const votation of this.votation) {
      console.log(votation.details);

      // 2. AGORA, dentro desta urna específica, pegamos as opções dela
      for (const option of votation.getOptions()) {
        console.log(`${option.option} : ${option.numberOfVotes}`);
      }

      console.log('----');
    }
  }
}


const votacao1 = new Votacao('Linguagem Favorita?');
votacao1.addOption({option: 'Python', numberOfVotes: 0});
votacao1.addOption({option: 'JavaScript', numberOfVotes: 0});
votacao1.addOption({option: 'TypeScript', numberOfVotes: 0});
const app = new VotationApp();
app.addVotation(votacao1);

votacao1.vote(0);
votacao1.vote(0);
votacao1.vote(0);
votacao1.vote(1);


const votacaoCores = new Votacao('Qual sua cor favorita?');
votacaoCores.addOption({option: 'Vermelho', numberOfVotes:0})
votacaoCores.addOption({option: 'Azul', numberOfVotes:0})
votacaoCores.addOption({option: 'Verde', numberOfVotes:0})
app.addVotation(votacaoCores);

votacaoCores.vote(1);
votacaoCores.vote(1);
votacaoCores.vote(1);
votacaoCores.vote(2);

app.showVotation();