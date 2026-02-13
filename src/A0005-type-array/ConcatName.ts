export function unirNomes(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

const unirNome = unirNomes('l', 'u', 'c', 'a', 's');
console.log(unirNome);
