//Creare un ARREY vuoto

let disp_number = []

//Creare un ciclo for che richieda per 6 volte:ù

for (i = 0; i < 6; i++){

    //Crea un prompt dove chiedi all'utente di inserire un numero
    let num = parseInt(prompt("Inserisci un numero"));

    //IF il numero è pari NON verrà inserito nell'ARREY se il numero è dispari verrà inserito nell'ARREY
    if (num % 2 !== 0){
        disp_number.push(num);
    }
}

console.log("Numeri dispari inseriti:", disp_number);

    

