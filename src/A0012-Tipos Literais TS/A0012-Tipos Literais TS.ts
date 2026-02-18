// Maioria das vezes 99% vamos utilizar CONST nos tipos literais

let x = 10; // eslint-disable-line
x = 123;

const y = 10; //Subtipo de number mas só pode ser 10, não pode alterar seu valor
const a = 100;

const person = {
  name: 'lucas' as const, //agora a pessoa só pode ter nome luiz
  lastname: 'melo',
};

function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Rosa'): string {
  return cor;
}
console.log(escolhaCor('Rosa'));

//Module mode
export default 1;
