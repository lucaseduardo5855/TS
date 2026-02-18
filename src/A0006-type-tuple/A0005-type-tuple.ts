//Tupla -> array de tamanho fixo
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [10, 'Bacana', 'Legal'];
const dadosCliente3: [number, string, string?] = [12, 'tresh'];
const dadosCliente4: [number, string, ...string[]] = [12, 'tresh', 'miranda'];//tupla com final aberto, obrigatorio tem number e string e depois pode vir quantas strings quiser

//dadosCliente1[0] = 100;
//dadosCliente1[1] = 'legal';
 
console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

//Readonly Array 
const array1: readonly string[] = ['fernando', 'Lucas'];
const array2: ReadonlyArray<string> = ['Gabriel', 'Leo'];

console.log(array1);
console.log(array2);