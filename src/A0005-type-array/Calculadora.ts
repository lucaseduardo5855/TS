export function somarTudo(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac + valor, 0);
}

const somarTudin = somarTudo(5, 10, 50);
console.log(somarTudin);
