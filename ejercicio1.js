/*Escribe un programa que pida dos números al usuario, los compare y    
devuelva por consola el mayor de ellos.
Ni en este programa, ni en los siguientes tienes que comprobar que lo que
introduce el usuario efectivamente son números, confiaremos en que sí, pero sí
que debes recordar que cuando se introducen datos por el prompt se
consideran texto siempre. */


let firstNumber = parseInt(prompt(`Dame un número para saber cual es mayor`));
let secondNumber2 = parseInt(prompt(`Dame otro numero para compararlo con el primero`));


let biggestNumber = firstNumber > secondNumber2;

let firstBiggestNumber = `El mayor es ${firstNumber}`;
let secondBiggestNumber = `El mayor es ${secondNumber2}`;

biggestNumber ? console.log(firstBiggestNumber) : console.log(secondBiggestNumber);

