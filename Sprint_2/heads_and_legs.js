/*
Probablemente todos hayan oído hablar del problema de las cabezas y patas de los animales en sus primeros años de escuela. Dice así:

“A farm contains chickens and cows. 
There are x heads and y legs. 
How many chickens and cows are there?”
Donde x <= 1000 e y <=1000

Tarea
Suponiendo que no hay otros tipos de animales, calcule cuántos de cada animal hay.

Return a tuple in Python - (chickens, cows) 
or an array list - [chickens, cows]/{chickens, cows} in all other languages
Si la cabeza y las piernas son negativas, el resultado del cálculo es negativo o el cálculo es un valor flotante que devuelve "Sin soluciones" (no hay casos válidos) o [-1, -1] en COBOL.

En el formato:

(Heads, Legs) = (72, 200)

VALID - (72, 200) =>             (44 , 28) 
                             (Chickens, Cows)

INVALID - (72, 201) => "No solutions"
Sin embargo, if 0 heads and 0 legs are given always return [0, 0]dado que cero cabezas deben dar cero animales.

Hay muchas maneras diferentes de resolver esto, pero todas dan la misma respuesta.

Solo se le proporcionarán tipos enteros; sin embargo, se proporcionarán valores negativos (casos extremos).
*/

function headsAndLegs(heads, legs) {
    if (heads < 0 || legs < 0 || legs % 4 !== 0 || heads * 2 > legs) {
        return "No solutions";
    }
    if (heads === 0 && legs === 0) {
        return [0, 0];
    }
    const cows = (legs - heads * 2) / 2;
    const chickens = heads - cows;
    return [chickens, cows];
}

console.log(headsAndLegs(72, 200)); 
console.log(headsAndLegs(72, 201)); 