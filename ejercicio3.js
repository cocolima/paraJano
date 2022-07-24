/*Dado un vector de números, escribe un programa que te devuelva por
consola el total de números impares y el total de números mayores que 100.*/
let arrayOfNumbers = [14, 0, -2, 20, 175, 48, 19999, 100, 3, 5];

let arrayOdd = [];
let arrayGreaterThanAHundred = [];
let oddCount = 0;
let GreaterThanAHundredCount = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {

    let isOdd = arrayOfNumbers[i] % 2 !== 0;
    let GreaterThanAHundred = arrayOfNumbers[i] > 100;

    if (isOdd) oddCount++, arrayOdd.push(arrayOfNumbers[i]);

    if (GreaterThanAHundred) GreaterThanAHundredCount++, arrayGreaterThanAHundred.push(arrayOfNumbers[i]);
}
console.log(`El array es ${arrayOfNumbers}.\n los impares son = ${arrayOdd} y hay ${oddCount}\n y los mayores de 100 son = ${arrayGreaterThanAHundred} y tenemos ${GreaterThanAHundredCount}`);
