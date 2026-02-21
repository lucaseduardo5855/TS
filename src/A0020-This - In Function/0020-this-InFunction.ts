export function funcao(this: Date, nome: string, age: number): void{
  console.log(this); 
  console.log(nome, age);
}


//Diferença entre Call e Apply é a maneira que passamos os argumentos 
//Call é maneira normal 
//Apply é dentro de um array
funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);
