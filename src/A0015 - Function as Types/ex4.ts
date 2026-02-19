type CalculadoraPreco = (preco: number, desconto: number) => number;

const CalculaDesconto: CalculadoraPreco = (preco, desconto) => {
  const ValorFinal = preco * (desconto / 100);
  return ValorFinal;
};

const valorFinalzinho = CalculaDesconto(200, 15);
console.log(`O valor final é de ${valorFinalzinho}`);
