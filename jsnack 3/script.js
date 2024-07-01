//Creare un prompt per chiedere all'utente di inserire un numero di 4 cifre

let num = prompt("Inserisci un numero di 4 cifre:");

//Verifica che l'input sia un numero di 4 cifre

if (num.length !== 4){
    //IF il numero NON è di 4 cifre : Richiedere di mettere un numero da 4 cifre
    console.log("Inserisci un numero da 4 cifre.");
}

//ELSE se il numero è di 4 cifre

else{
    //Dividi il numero in singole cifre
    let text = num.split('');
    //Calcola la somma delle cifre con un Cicle For
    let somma = 0;
    for (let i = 0; i < text.length; i++){
        somma += parseInt(text[i]); 
    }
   //Fai uscire il tutto in console log
   console.log('la somma è: ' + somma) 
}







