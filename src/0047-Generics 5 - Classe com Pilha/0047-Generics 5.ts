export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}
//const pessoa = new Pessoa('Lucas', 10);

export class Pilha<T> {
  private contador = 0; //indice - avisa qual posição da pilha começamos (estamos no momento)
  private elementos: { [k: number]: T } = {}; //Armario - lugar onde os itens ficam no caso em forma de objeto
  //K é a gaveta e o T é os elementos q vao dentro = os nomes das propriedades vão ser números, e os valores vão ser do tipo T".

  push(elemento: T): void {
    this.elementos[this.contador] = elemento; // va no armario elementos pegue a posição e guarde o elemento la dentro
    this.contador++; //incrementa e aumenta +1
  }

  pop(): T | void {
    
    if (this.isEmpty()) return undefined; //Se tiver vazia retornamos Undefinied

    this.contador--; //decremento
    const elemento = this.elementos[this.contador]; //pego o ultimo elemento
    delete this.elementos[this.contador]; //deleto o elemento
    return elemento; //retorno o elemento
  }

  //Métodos Utilitarios

  isEmpty(): boolean {
    //Está vazia se meu contador retorna 0
    return this.contador === 0;
  }

  size(): number {
    //Tamanho da nossa pilha
    return this.contador;
  }

  showBattery(): void {
    //Ver os elementos da nossa pilha
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.showBattery();


//Enquanto a pilha não estiver vazia, vá tirando pratos e mostrando na tela
while (!pilha.isEmpty()) {
  //enquanto a pilha nao estiver vazia vc vai eliminar elements
  console.log(pilha.pop());
}
