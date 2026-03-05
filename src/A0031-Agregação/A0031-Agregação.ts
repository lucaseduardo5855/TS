//Classe CarrinhoDeCompras
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  totalProdutos(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

//Class Produto
export class Produto {
  constructor(
    private nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Teclado', 48);
const produto2 = new Produto('Caneta Bic', 10);

const carrinhoCompras = new CarrinhoDeCompras();

carrinhoCompras.inserirProdutos(produto1, produto2);
console.log(carrinhoCompras);
