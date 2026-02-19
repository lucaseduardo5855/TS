type MapDobrarNumber = (item: number) => number;

export function mapDobrar(
  array: number[],
  callback: MapDobrarNumber,
): number[] {
  const newArray: number[] = []; //caixa vazia de numeros

  //Loop
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

const entrada = [10, 20, 5];
const dobraEntrada = mapDobrar(entrada, (item) => item * 2);

console.log(dobraEntrada);
