//Record
const objeto1: Record<string, string | number> = {
  nome: 'Lucas',
  sobrenome: 'Eduardo',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required
type PessoaRequired = Required<PessoaProtocol>;

//Partial
type PessoaPartial = Partial<PessoaRequired>;

//Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

//Ex MongoDB
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

//Ex API
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  //Pega todo o AccountMongo e retira o '_id'
  id: string;
};

const accountmongo: AccountMongo = {
  _id: 'qwiuehqweu',
  nome: 'Lucas',
  idade: 30,
};

function mapAccount(accountmongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountmongo;
  return { ...accountData, id: _id };
}

const accountapi = mapAccount(accountmongo);
console.log('ABAIXO É A API');
console.log(accountapi);

//Module Mode
export default 1;
