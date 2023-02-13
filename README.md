# App Starwars Planets
Esercitazione sviluppata per meta group, da Lorenzo Cecio

## Documentazione aggiuntiva

Alcune feature che potevano essere sviluppate possono essere le seguenti:
- Controllo più specifico sui dati in registrazione: possibili validazioni su nomi e cognomi, non devono contenere numeri, trim e lowercase dei campi quando inseriti nel database (tralasciando pw), encrypting della password e creazione di una sessione alla registrazione avvenuta con successo.
- Sviluppare un vero e proprio login, con sessione tramite token (l'app permette l'implementazione grazie alla cartella Auth creata).
- Gestire meglio le animazioni e stile del sito.
- Soltanto dopo aver effettuato con successo login e registrazione si può accedere ai pianeti.
- "Pulire" i dati chiamati dalla API di star wars, in particolar modo i film (restituisce link interi, pulire dal link e fissare solo il film corrispondente).
- Creare una dashboard introduttiva per permettere all'utente una navigazione ottimale, effettuare modali per un login rapido (insieme ad una pagina di login per redirect quando avviene la disconnessione).

## Note personali
- Purtroppo avendo approcciato Angular soltanto come corso universitario, le feature presentate sono poche (rispetto alla consegna ci sono pochi sviluppi secondo la mia opinione).
- In ogni caso tutte le funzionalità descritte sono state eseguite con successo in un progetto PHP presente come repo nella mia pagina github. Questo per specificare le idee e la poca pratica presentate qua sopra (le stesse idee sono implementate con PHP, ma per poterle fare in Angular ho bisogno di più tempo e di studio del Framework più approfondito).
- Alcune funzionalità sono accennate (le guard, login etc.) e soltanto una funzionalità richiesta nelle specifiche non sono riuscito a svilupparla (la ricerca nella pagina dei pianeti) anche se ho cercato online un metodo per poterla implementare (con i cosidetti "Pipe").
- Resto disponibile per qualsiasi chiarimento o colloquio tecnico!
