//utilize any apenas em ultimo caso = tira o erro é perigoso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('ola'));
