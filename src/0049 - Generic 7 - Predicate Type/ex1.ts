type Cliente = {
  nome: string,
  email: string
};

type Admin = {
  nome: string,
  email: string,
  permissoes: string[], //só admin tem essa
}

// Lendo a primeira linha: "Se essa função retornar true, eu GARANTO que essa pessoa é um Admin"
function isAdmin(pessoa: Cliente | Admin): pessoa is Admin{
  return 'permissoes' in pessoa;
}

function acessarPainel(pessoa: Cliente | Admin) {
  if(isAdmin(pessoa)){
    console.log("Acesso liberado! Suas permissões são de", pessoa.permissoes);
  }else{
    console.log("Acesso negado para o cliente", pessoa.nome);
  }
}

const usuarioComum: Cliente = {
  nome: "lucas", 
  email: "lucas@gmail.com"
}

const superUser: Admin = {
  nome: "admin",
  email: "admin@gmail.com",
  permissoes: ["deletar_banco", "criar_user", "update_users"]
};

console.log("---testando o cliente---");
acessarPainel(usuarioComum);
acessarPainel(superUser);