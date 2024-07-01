//creare array di email su cui effettuare ilù controllo
let emails = ['fabrizio@mail.com','denise@mail-com', 'giulia@mail.com', 'luca@mail.com'];

//recupero pulsante dal dom
const btn = document.getElementById('check'); 

// aggiungo evento click al pulsante
btn.addEventListener('click', function(){

    //recupero valore campo input
    let user_mail= document.getElementById('email').value;
    //console.log(user_email); per vedere se funziona

    //ciclo l'array
    for(let i=0; i<emails.length; i++) {
        //confronto mail inserita dall'utente con quelle attualmente nell'array
        if(emails[i] == user_mail){   //emails[i]: elemento zero dell'array
           console.log('benvenuto');
        }
    }
})