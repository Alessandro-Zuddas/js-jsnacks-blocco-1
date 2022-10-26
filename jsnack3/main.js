// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let userNumbers = [];
let sum = 0;

for(let i = 0; i < 10; i++){
    let userNumber = Number(prompt("inserisci il numero!"));
    userNumbers.push(userNumber);

    sum += userNumbers[i];
    console.log(sum);
}