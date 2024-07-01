//genero numero random per utente
let user_number = Math.floor(Math.random() * 6 + 1);

// genero numero random per il pc 
let pc_number = Math.floor(Math.random() * 6 + 1);

//confronto i due numeri
if (user_number > pc_number) {
    console.log(`numero utente ${user_number}, numero pc ${pc_number}. hai vinto`)
}
else if(user_number < pc_number) {
    console.log(`numero utente ${user_number}, numero pc ${pc_number}. hai vinto`)
}
else{
    console.log('pareggio');
}