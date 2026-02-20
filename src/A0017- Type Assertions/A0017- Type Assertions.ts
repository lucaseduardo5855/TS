// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // => HTMLBodyElement
body3.style.background = 'red';

// Cenario: selecionando input de um form que não sei se ele vai aparecer todo momento Usamos -> Condicional ou Type assertion

//HtmlElement -> antes era null e com 'AS' ele vai ser htmlINput
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Flamengo';
input.focus();
