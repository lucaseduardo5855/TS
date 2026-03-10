//Exemplo: Traduzir Cores
type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  rosa: 'pink',
  verde: 'green',
  amarelo: 'yellow',
  roxo: 'purple'
};

function traduzirCores(
  cor: CoresChaves,
  cores: typeof coresObj,
) {
  return cores[cor];
}

console.log(traduzirCores('rosa', coresObj));
console.log(traduzirCores('amarelo', coresObj));
console.log(traduzirCores('roxo', coresObj));
