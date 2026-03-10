export class Calculadora{
  constructor(public numero: number){}

  add(n: number):this{
    this.numero += n;
    return this;
  }

  sub(n: number):this{
    this.numero -= n;
    return this;
  }

  div(n: number):this{
    this.numero /= n;
    return this;
  }

  mult(n: number):this{
    this.numero *= n;
    return this;
  }
}

const calc = new Calculadora(10);
calc.add(10).mult(20);
console.log(calc)