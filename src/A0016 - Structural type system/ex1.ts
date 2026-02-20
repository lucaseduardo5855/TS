type Produto = { id: number; nome: string; codigoBarras: string };
type ValidarLeitura = (esperado: Produto, bipado: Produto) => boolean;

const verificarProduto: ValidarLeitura = (esperado, bipado) => {
  return esperado.codigoBarras === bipado.codigoBarras;
};

const produto1 = { id: 1, nome: 'Skol', codigoBarras: 'abc123' };
const produto2 = { id: 2, nome: 'Brahma', codigoBarras: 'abc123' };
const produtosbipado = verificarProduto(produto1, produto2);
console.log(`O produto bipado está duplicado?  ${produtosbipado}`);
