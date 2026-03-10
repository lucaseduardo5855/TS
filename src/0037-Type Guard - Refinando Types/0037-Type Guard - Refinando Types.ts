import { TipoPessoa } from '../A0033-ImplementarTipos/A0033-ImplementarTipos copy';

export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(5, 10));
console.log(add('a', 'b'));




type Pessoa = {
  tipo: 'pessoa';
  nome: string;
};

type Animal = {
  tipo: 'animal';
  cor: string;
};

type PessoaOuAnimal = Pessoa | Animal;


export class Aluno implements Pessoa{
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string){}
}

function mostraNome(obj: PessoaOuAnimal): void{
  switch(obj.tipo){
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}


mostraNome(new Aluno('Lucas'));
mostraNome({tipo: 'pessoa', nome: 'Rosa'});



exemplo
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// 1. Criamos a "regra" do que a nossa API espera receber no Body
interface CriarUsuarioBody {
  nome: string;
  email: string;
  idade: number;
}

// 2. Avisamos ao Express que o Request vai usar essa regra no Body
// O Request do Express aceita 4 parâmetros de tipo: Params, ResBody, ReqBody, ReqQuery
app.post('/usuarios', (req: Request<{}, {}, CriarUsuarioBody>, res: Response) => {
  
  // A partir de agora, se você digitar "req.body." o VS Code já vai
  // te sugerir "nome", "email" e "idade". É mágico!
  const nomeDoCara = req.body.nome; 
  const idadeDoCara = req.body.idade;

  // Se você tentar fazer req.body.cpf, o TypeScript vai dar ERRO,
  // porque CPF não está na nossa interface CriarUsuarioBody!
  
  res.json({ mensagem: `Usuário ${nomeDoCara} criado!` });
});