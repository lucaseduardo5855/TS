//Tipagem
type MapStringsCallBack = (item: string) => string;

export function MapsString(
  array: string[],
  callback: MapStringsCallBack,
): string[] {
  const newArray: string[] = []; // caixa vazia

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i])); //pega a lista original e o item na posição atual (i)
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const NewAbc = MapsString(abc, (item) => item.toUpperCase());
console.log(NewAbc);
