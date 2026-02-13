const objetoA: {
  readonly chaveA: string; //Não posso alterar o valor dessa chave por conta do readonly
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
objetoA.chaveB = 'outroValor';
~console.log(objetoA);
