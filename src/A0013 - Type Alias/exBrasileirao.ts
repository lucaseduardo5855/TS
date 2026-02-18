type colocacao = number;

type Brasileirao = {
  nomeTime: string;
  colocação: colocacao;
  salario: number;
  corCamisa?: string;
};

//Cores camisas
type CorTime1 = 'Vermelho' | 'Preto' | 'Branco';
type CorTime2 = 'Verde' | 'Branco';
type CorTimes = CorTime1 | CorTime2;

const time1: Brasileirao = {
  nomeTime: 'flamengo',
  salario: 10000,
  colocação: 1,
};

const time2: Brasileirao = {
  nomeTime: 'Palmeiras',
  salario: 2000,
  colocação: 2,
};

export function setCorTimes(time1: Brasileirao, cor: CorTimes): Brasileirao {
  return { ...time1, corCamisa: cor };
}

console.log(setCorTimes(time2, 'Verde'));
