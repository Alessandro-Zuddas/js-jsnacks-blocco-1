"use strict";

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola!");
const secondWord = prompt("Inserisci la seconda parola!");

if(firstWord.length > secondWord.length){
    console.log(firstWord, secondWord);
}else{
    console.log(secondWord, firstWord)
}