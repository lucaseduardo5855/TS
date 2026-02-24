//Simulação Conexão Banco de Dados
//Singleton - GoF e Factory Method 
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado com ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database{
    if(Database.database) {
      console.log('Retornando instancia ja criada')
       return Database.database
    }
    console.log('Criando nova instancia ')
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'lucas', '123');
db1.connect();

const db2 = Database.getDatabase('local1', 'lucas1', '1234');
db2.connect();

const d3 = Database.getDatabase('local2', 'lucas2', '12323');
d3.connect();