function noReturn(...args: number[]): void {
  //args é a sacola de itens em strings
  //Void é quando não retorna nada
  console.log(args.join(' ')); //join = pega todos os itens da lista 'args' e os cola um no outro
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn(2, 123, 10);
pessoa.exibirNome();

export { pessoa };
