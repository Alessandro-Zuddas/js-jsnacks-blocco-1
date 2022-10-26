// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const partyList = ["Marco", "Paolo", "Giulio", "Riccardo", "Alessandro"];

const userName = prompt("Inserisci il tuo nome per verificare se è in lista!");
console.log(userName);

for (let i = 0; i < partyList.length; i++) {
    const element = partyList[i];

    if(userName === element){
        alert("Hai il permesso per entrare!");

        break;
    }else if(i === partyList.length){
        alert("Spiacente non puoi entrare!");

        break;
    }
}

window.location.reload();

