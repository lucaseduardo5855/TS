import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  hideMessageError(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
});


//Função para validação do Email
function checkEmail(input: HTMLInputElement):void {
  if(!isEmail(input.value)) showErrorMessage(input, 'E-mail invalido')
}


//Função para validação das duas senhas
function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement):void{
  if(password.value !== password2.value){
    showErrorMessage(password, 'Senha não batem');
    showErrorMessage(password2, 'Senha não batem');
  }
}


//Função para validação de campos vazios
function checkForEmptyFields(...inputs: HTMLInputElement[]){
  inputs.forEach(input => {
    if(!input.value)  showErrorMessage(input, 'Campo não pode ficar vazio');
  })
}

//Função onde vamos ocultar msg de erros
function hideMessageError(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

//Exibe a msg de erro especifica abaixo do input
function showErrorMessage(input: HTMLElement, msg: string): void{
  const formField = input.parentElement as HTMLDivElement;

  const errorMessage = formField.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;

  formField.classList.add(SHOW_ERROR_MESSAGES);
}
