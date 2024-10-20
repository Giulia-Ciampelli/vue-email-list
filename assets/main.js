console.log('im alive');

// Descrizione
// Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click fetchi altre 10 mail (sostituendo le altre)

// dichiarazione variabili
const ulElement = document.querySelector('ul');
const buttonElement = document.querySelector('.button');

// funzione per la chiamata api
function apiCallLoop() {
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data);

                // opzioni: crea markup qui o su html?
                const liElement = document.createElement('li');
                liElement.innerHTML = response.data.response;
                ulElement.appendChild(liElement);
            })
    }
}

// richiamo funzione
apiCallLoop();

// RICORDA: l'API logga un singolo indirizzo. Fai un loop * 10?

// per sezione bonus: appendi il for ad un bottone con add event listener?
buttonElement.addEventListener('click', function () {

    // risvuotalo ad ogni click
    // muovere la costante fuori rende una sola mail
    ulElement.innerHTML = '';

    apiCallLoop();
})