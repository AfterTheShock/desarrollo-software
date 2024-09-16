//Ejercicio 1.2
let a = 5;
let b = 10;
let c = a + b;

console.log('La suma de a y b es:', c);

//Ejercicio 1.3
let userName = prompt('¿Cuál es tu nombre?');
console.log('Hola, ', userName + '!');

//Ejercicio 2.1
let d = 5;
let f = 14;
let g = 1;

if(d > f){
    if(d > g){
        console.log('El mayor de los tres números es: ', a);
    }else{
        console.log('El mayor de los tres números es: ', c);
    }
}else if(f > g){
    console.log('El mayor de los tres números es: ', b);
}else{
    console.log('El mayor de los tres números es: ', c);
}

//Ejercicio 2.2 
let userNumberPrompt = prompt('Ingrese un número: ');
let userNum = Number(userNumberPrompt);

if(!Number.isNaN(userNum)){
    if(userNum % 2 === 0){
        console.log('El número ' + userNum + ' es par.');
    }else {
        console.log('El número ' + userNum + ' es impar.');
    }
}else {
    console.log('No se proporcionó un número.')
}

//Ejercicio 3.1
let n = 10;

while(n > 0){
    console.log(n);
    n--;
}

//Ejercicio 3.2
let userNumberPrompt2;

do{
    userNumberPrompt2 = prompt('Ingrese un número mayor a 100: ');
}while(userNumberPrompt2 <= 100);

console.log('Ingresaste el número: ', userNumberPrompt2);

//Ejercicio 4.1
function isPar(value){
    return value % 2 === 0 ? true : false;
}

let userPrompt = prompt('Ingrese un número: ');
let userNumber = Number(userPrompt);

console.log('El número ' + userNumber + ' es par: ' + isPar(userNumber));

//Ejercicio 4.2
function convertCelsiusToFahrenheit(celsius){
    return celsius * 1.8 + 32;
}

let userTemp = prompt('Ingrese la temperatura en grados Celsius: ');
userTemp = Number(userTemp);

console.log(userTemp + '°C son equivalentes a ' + convertCelsiusToFahrenheit(userTemp) + '°F');

//Ejercicio 5.1
const person = {
    name: 'Ana',
    age: '30',
    city: 'Madrid'
}

function changeCity(newCity){
    person.city = newCity;
}

let newCity = prompt('Ingrese una nueva ciudad: ')
changeCity(newCity);
console.log('Persona: ' + person.name + ', Edad: ' + person.age + ', Ciudad: ' + person.city);

//Ejercicio 5.2
const book = {
    title: 'El sutil arte de que (casi todo) te importe una mierda',
    author: 'Mark Manson',
    year: 2016
}

function ancientBook(book){
    let actualYear = new Date().getFullYear();
    let bookAge = actualYear - book.year;

    return bookAge > 10 ? true : false;
}

console.log('El libro "' + book.title + '" es antiguo: ' + ancientBook(book));

//Ejercicio 6.1
let numbers = [1,2,3,4,5,6,7,8,9,10];
//let result = numbers.map((number) => number * 2); //Esto es mucho mejor, pero el ejercicio pide bucle xd
let result = [];
numbers.forEach(number => {
    number = number * 2;
    result.push(number);
});

console.log('Números originales: ' + numbers);
console.log('Números multiplicados por 2: ' + result);

//Ejercicio 6.2
let pars = [];

for(let i = 1; i < 21; i++){
    i % 2 === 0 ? pars.push(i) : null;
}

console.log('Primeros 10 números pares: ' + pars);

//Con este evento esperamos a que cargue toda el contenido del DOM
addEventListener("DOMContentLoaded", (event) => {
    //Ejercicio 7.1
    const button = document.getElementById('buttonToBlueColor');
    const paraphElements = document.getElementsByClassName('textP');

    button.addEventListener("click", () => {
        for(let i = 0; i < paraphElements.length; i++){
            paraphElements[i].classList.add('blueText');
            //paraphElements[i].style.color = 'blue'; //Este también es posible usarlo
        }
    });

    //Ejercicio 7.2
    document.getElementById('buttonShowAlert').addEventListener('click', () => {
        let input = document.getElementById('inputEx7').value;
        alert('Has ingresado: ' + input);
    });

    //Ejercicio 8.1
    let listElements = document.getElementsByClassName('li');

    for(let i = 0; i < listElements.length; i++){
        listElements[i].addEventListener('click', () => {
            console.log(listElements[i].textContent);
        });
    }

    //Ejercicio 8.2
    let input = document.getElementById('inputEx8');
    let nButton = document.getElementById('nBtn');
    let yButton = document.getElementById('yBtn')

    nButton.addEventListener('click', () => {
        input.disabled = true;
    });

    yButton.addEventListener('click', () => {
        input.disabled = false;
    });

    //Ejercicio 9
    let emailText = document.getElementById('emailText');

    document.getElementById('saveEmailBtn').addEventListener('click', () =>{
        let emailInput = document.getElementById('emailInput').value;
        emailText.textContent ="Correo Guardado: " + emailInput;
        localStorage.setItem('savedEmail', emailInput);
    });

    document.getElementById('deleteEmailBtn').addEventListener('click', () => {
        localStorage.removeItem('savedEmail');
        emailText.textContent = "Correo Eliminado"
    });

    if(localStorage.length === 0){
        emailText.textContent = "Correo Guardado: example@gmail.com"
    }else {
        emailText.textContent = 'Correo Guardado: ' + localStorage.getItem('savedEmail'); 
    }
});