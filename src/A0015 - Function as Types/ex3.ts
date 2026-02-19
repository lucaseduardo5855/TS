type mapLetraInicial = (item: string) => string;

export function mapIniciais(
  array: string[],
  callback: mapLetraInicial,
): string[] {
  const newArray: string[] = []; //caixa vazia de array

  //Loop
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i])); //pegamos o array e o 1 item dele que é o 'i'
  }

  return newArray;
}

const nomes = ['Lucas', 'Maria', 'João'];
const inicialNome = mapIniciais(nomes, (item) => item[0]);

console.log(inicialNome);
