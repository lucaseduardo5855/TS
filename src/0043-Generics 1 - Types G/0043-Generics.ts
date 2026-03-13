type FilterCallback<U> = (value: U, array?: U[], index?: number) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      //se essa function retorna true eu incluo o elemento em baixo com o push
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
