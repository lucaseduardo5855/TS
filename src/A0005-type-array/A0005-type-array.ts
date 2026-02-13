//Array<T> ou T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1); //reduce é usado para reduzir os elementos a um unico valor final
}

export function concatenaStrings(...args: string[]): string {
  //recebe um array de string e retorna string
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  //recebe um array de string e retornar o array de string
  return args.map((valor) => valor.toUpperCase());
}

const multi = multiplicaArgs(1, 2, 3);
const concat = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(upper);
