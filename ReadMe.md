# Traccia

DESCRIZIONE DEL GIOCO

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba

## MILESTONE 1

Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

## MILESTONE 2

Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

## MILESTONE 3

Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

## MILESTONE 4

Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto l punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.

## MILESTONE 5

Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

<br>
<br>
<br>
<br>

## Steps

1.  Recupero l'elemento per lo score dal DOM
1.  Creo una variabile con lo score da inserire nel DOM
1.  Creo una condizione in modo da incrementare la variabile al punto 2 quando il giocatore clicca su una casella che non era ancora stata cliccata
1.  Creo un Array vuoto
1.  Creo un ciclo finche l'Array al punto 4 non avrà 16 numeri al suo interno che vanno da 1 ad un massimo del numerro di celle in base alla difficoltà
    - inserisco nell'Array solamente i numeri presenti già al suo interno
1.  Creo una condizione per andare a verificare se il numero della cella scelta dal giocatore si trova nell'array delle bombe
    - SE il numero è presente aggiungo alla cella una classe per farla colorare di rosso
      - Fermo il gioco è mostro il messaggio Hai perso in pagina
    - Altrimenti aumento il punteggio di 1, la coloro di azzurro e controllo che il punteggio non abbia raggiungo il valore delle celle - le bombe. In tal caso il giocatore ha vinto e lo scrivo in pagina
