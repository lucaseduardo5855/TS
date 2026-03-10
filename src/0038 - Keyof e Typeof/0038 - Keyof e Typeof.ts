//Exemplo: Traduzir Cores
type CoresObj = {
  rosa: string;
  verde: string;
  amarelo: string;
};

const coresObj: CoresObj = {
  rosa: 'pink',
  verde: 'green',
  amarelo: 'yellow',
};

function traduzirCores(cor: 'rosa' | 'verde' | 'amarelo', cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCores('rosa', coresObj));
console.log(traduzirCores('amarelo', coresObj));
