export function isNumber(value: unknown): value is number{ //valor vai ser number sempre q for true
  return typeof value === 'number';
}

export function soma<T>(...args:T[]): number{
  const retorno = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0)

  return retorno;
}

console.log(soma(10, 20, 30));
console.log(soma('a', 'b', 'c'));