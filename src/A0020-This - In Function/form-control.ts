import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEvent = (event: Event) => { //event.target significa = O elemento html sofreu uma ação
  event.preventDefault();
  const target = event.target as HTMLFormElement; //aqui ta falando = pega a tag html que o user acabou de integir (form) e guarda nessa variavel chamada target
  hideErrorMessage(target); //This -> seria o form no escopo global function(){}
  checkEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (shouldSendForm(target)) return console.log('Enviado');
};

form.addEventListener('submit', submitEvent);

//Function que mostra o erro por msg
function showErrorMessage(input: HTMLInputElement, msg: string): void{
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGE);

}

//Function que retira msg de erros
function hideErrorMessage(form: HTMLFormElement): void{
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE);
}

//Validações 

//Validação de check nos inputs
function checkEmptyFields(...inputs: HTMLInputElement[]):void{
  inputs.forEach((input) => {
    if(!input.value) showErrorMessage(input, 'Preencha o Campo.')
  })
}

//Função de check Email
function checkEmail(input: HTMLInputElement): void{
  if(!isEmail(input.value)) showErrorMessage(input, 'Erro ao validar E-mail, tente novamente!')
}

//Função de Validação das 2 senhas se está de acordo
function checkPassword(password: HTMLInputElement, password2: HTMLInputElement){
  if(password.value !== password2.value) {
    showErrorMessage(password, 'Valide as senhas por gentileza');
  }
}

//Vamos validar os inputs por completo 
function shouldSendForm(form: HTMLFormElement):boolean{
  let send = true; 
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}