//Creare un prompt per la richiesta del nome dell'invitato

let name_and_surname = prompt('Inserisci il tuo nome e cognome.');

console.log(name_and_surname);

//Creo una FLAG impostata su FALSE

let found_name = false;

//Creare un ARREY con la lista dei nomi

const authorized_name = ["Jay Gatsby", "Daisy Buchanan", "Nick Carraway", "Tom Buchanan", "Meyer Wolfsheim", "Jordan Baker", "Myrtle Wilson",]

//Ciclo l'ARRAY e confronto l'elemento che sto ciclando con il nome inserito nel prompt

//Mostro il messaggio corrispondente a seconda della FLAG