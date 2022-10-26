// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const partyList = ["Alessandro", "Roberto", "Marco", "Luigi"];

// Chiedo la mail all'utente
const userName = prompt("Inserisci il tuo nome!");

// Verifico che la mail sia nella lista e faccio sapere l'esito all'utente
for (let i = 0; i < partyList.length; i++) {
    const element = partyList[i];

    if(userName === element){
        alert("Sei sulla lista puoi entrare!!");

        break;
    }
    else{
        alert("Non sei sulla lista spiacente!");

        break;
    }
}

window.location.reload();



