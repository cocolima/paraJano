/*Modifica el anterior script de manera que si los números que se proporcionan
son iguales deberá pedir de nuevo el segundo hasta que el usuario introduzca
uno diferente al primero. */

let firstNumber = parseInt(prompt(`Dame un número para saber cual es mayor`));
let secondNumber2 = parseInt(prompt(`Dame otro numero para compararlo con el primero`));

if (firstNumber == secondNumber2) {
    do {
        secondNumber2 = parseInt(prompt(`Dame un número DIFERENTE, el primero era ${firstNumber}`));
    } while (firstNumber == secondNumber2);


}
let biggestNumber = firstNumber > secondNumber2;

let firstBiggestNumber = `El mayor es ${firstNumber}`;
let secondBiggestNumber = `El mayor es ${secondNumber2}`;

biggestNumber ? console.log(firstBiggestNumber) : console.log(secondBiggestNumber);
