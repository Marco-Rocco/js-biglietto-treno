// creiamo un prompt per chiedere all'utente quanti chilometri percorrerà
const domandaKm = prompt ("Ciao, quanti chilometri (km) percorrerà il tuo treno? ")
console.log('km=' + domandaKm)

// ora, assegnamo un valore ad ogni chilometro percorso, così da avere un valore del viaggio iniziale
const valoreViaggio = (domandaKm * 0.21 )
console.log('Il valore iniziale del viaggio è' + ' ' + '€' + valoreViaggio)