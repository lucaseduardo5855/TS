//Exemplo: Traduzir Cores

type coresObj = typeof ObjCores;
type ChaveCores = keyof coresObj;

const ObjCores = {
  vermelho: 'red',
  roxo: 'purple',
  amarelo: 'yellow'
}

function traduzirCor(cor: ChaveCores, cores: coresObj){
  return cores[cor]
}


console.log(traduzirCor('roxo', ObjCores));