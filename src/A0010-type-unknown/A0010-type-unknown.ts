//Unkown é mais seguro que any, any deixa realizar varias coisas liberadas o unkonw ja da erro

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

//Se x for numero ele realiza a conta
if (typeof x === 'number') console.log( x + y);