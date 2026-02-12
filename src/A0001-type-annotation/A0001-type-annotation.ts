/* Eslit-disable*/

/* Tipos basicos*/
let nome: string = 'luiz';
let idade: number = 0b1010; //3, 1.65, 0b1010. etcc
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: biginit = 10n; //biginit

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayString: Array<String> = ['a', 'b', 'c'];
let arrayString2: string[] = ['a', 'b', 'c'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'lucas',
  adulto: true,
};

//Functions
function soma(x: number, y: number) {
  return x + y;
}
const result = soma(2, 2);
console.log(result);
