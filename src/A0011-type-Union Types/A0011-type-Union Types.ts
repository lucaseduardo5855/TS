//Union Types -> Utilizar quando queremos um tipo ou outro, ou quantos tipos eu quiser

function addConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addConcat(10, 20));
console.log(addConcat('10', 'legal'));
console.log(addConcat(true, true));
