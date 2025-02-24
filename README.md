# js-biglietto-treno

### il programma dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

---

### il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

## Soluzione:

- dichiara le variabili
    - assegna i valori dove necessario
        - km => 0.21

- crea i prompt per chiedere i quesiti necessari all'utente
    - quanti chilometri vuole viaggiare?
    - quanti anni ha?

- crea i range di età dove assegnare gli sconti
    - if età <18 allora applicare sconto del 20%
    - if else età >65 allora applicare sconto del 40%
    - else presentare prezzo pieno

- stampare in console il prezzo finale, oppure creare un alert per presentarlo in pagina.