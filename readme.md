**Carosello Mono Array**
**Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**Prima di partire a scrivere codice:**
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.


**Procedimento milestone 1**
dati :
1. Dichiaro un array images contente la struttura dati delle immagini;
2. Scrivo un ciclo for dove i è uguale a zero, i < della lunghezza delle immagini, e sempre i che incrmenta di 1.


Logica :
3. concateno il ciclo for con un template literal
e uso la condizione se i = 0 allora slideElem selezionerà le classi items e active altrimenti solo la classe item.



Output :
