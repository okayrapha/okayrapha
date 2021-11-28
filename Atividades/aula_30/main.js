//Método getElementoById
let titulo = document.getElementById('titulo');

//Alterando o conteúdo do elemento
titulo.innrHTML = 'Olá meus caros alunos!';

//Configurando o estilo css do elemento
titulo.style.textAling = 'center';
titulo.style.bacgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';


// Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);

// Configurando o estilo CSS do elemento
// items[0].textContent = 'Hello 2';
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'yellow';
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'yellow';
// }

//Utilizando o laço de repetição For para alterar todo os elementos do HTML

 // for (let i = 0; i <intens.length; i++) {
// items[i].style.bacgroundColor = 'yellou';
// }

console.clear();
// Método getElementsByTagName
let li = document.getElementsByTagName('li');
console.log('li');

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
    else li[i].style.backgroundColor = '#fff';
}

// Método getElementsByName
let nome = document.getElementsByName('fitem');
console.log(nome);

nome[0].textContent = 'Olá pessoas';
nome[0].style.bacgroundColor = 'yellow';
nome[0].textContent = 'Tudo bem?';
nome[0].style.bacgroundColor = '#BAC1FB';

