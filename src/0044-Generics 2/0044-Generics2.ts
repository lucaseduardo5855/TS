
type MeuTipo = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumbers);

export async function promisseAsync(){
  return 1;
}

function minhaPromisse(): Promise<MeuTipo> {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(1);
    }, 1000)
  })
}

//promisseAsync().then((resultado) => console.log(resultado + 1));
minhaPromisse().then((resultado) => console.log(resultado + 2));