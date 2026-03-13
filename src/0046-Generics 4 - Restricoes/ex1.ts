function lerValor<O, K extends keyof O>(objeto: O, chave: K){ //K = Chave (que obrigatoriamente "estende" as chaves de O)
  return objeto[chave];
}


const dev = {nome: 'lucas', linguagem: 'ts'};

lerValor(dev, 'nome');
lerValor(dev, 'linguagem');
lerValor(dev, 'idade');

//O extends keyof funciona como um "segurança de balada" com uma lista VIP. Se a chave que você tentou passar na função não estiver na lista de chaves do objeto original, o TypeScript barra na porta e dá erro!