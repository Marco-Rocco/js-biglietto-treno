// creiamo un prompt per chiedere all'utente quanti chilometri percorrerà
const domandaKm = prompt ("Ciao, quanti chilometri (km) percorrerà il tuo treno? ")
console.log('km=' + domandaKm)

// ora, assegnamo un valore ad ogni chilometro percorso, così da avere un valore del viaggio iniziale
const valoreViaggio = (domandaKm * 0.21 )
console.log('Il valore iniziale del viaggio è' + ' ' + '€' + valoreViaggio)

// creiamo un altro  prompt per chiedere l'età del viaggiatore
const domandaEta = prompt("specifica la tua età in valore numerale, per favore")
console.log("l'età del passeggero è" + ' ' + domandaEta + ' ' + "anni")

// creiamo una condizione di esistente tra due fasce di età
if (domandaEta < 18) {
    console.log('prezzo finale del biglietto è' + ' ' + (valoreViaggio * 80 ) /100 )
}
   