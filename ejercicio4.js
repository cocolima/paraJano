import { average } from "./funcion.js";
/*4. Escribe un script que simule el lanzamiento de dos dados. Haz uso de la
función Math.Random para obtener números aleatorios entre 1 y 6 para cada
uno de los lanzamientos de los dados. Suma el resultado de lanzar dos dados
y añade en un array dicha suma, repitiendo 6.000 veces todo este proceso. A
continuación, calcula la media de todos los valores que se han añadido al
vector y muéstrala por consola.
Puedes importar la función de calcular media de un vector numérico que
hemos hecho en clase y reutilizarla en este proyecto. De hecho se valorará
mejor si lo haces así.*/
const MAX_NUMBER_OF_DICE = 6;
const MIN_NUMBER_OF_DICE = 1;

let dicesArray = [];

let totalRuns = 6000;
let twiceDicesSum = 0;

for (let i = 0; i < totalRuns; i++) {
    const firstDice = (Math.floor(Math.random() * MAX_NUMBER_OF_DICE - MIN_NUMBER_OF_DICE + 1) + MIN_NUMBER_OF_DICE);;
    const secondDice = (Math.floor(Math.random() * MAX_NUMBER_OF_DICE - MIN_NUMBER_OF_DICE + 1) + MIN_NUMBER_OF_DICE);;
    twiceDicesSum = firstDice + secondDice;
    dicesArray.push(twiceDicesSum);
}
console.log(dicesArray);
console.log(`La media de todo es = ${average(dicesArray)}`);