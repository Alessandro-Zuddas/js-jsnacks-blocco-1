// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

"use strict";

const emptyArray = [];

for (let i = 0; i <= 6; i++) {
    const element = emptyArray[i];
    const userInput = Number(prompt("Inserisci un numero!"));

    if(userInput % 2 == 1){
        emptyArray.push(userInput);
        console.log(emptyArray);
    }
}