# FizzBuzz

### Descrizione

L'obbiettivo di questa repo è creare un programma che inizialmente stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Lo step successivo sarebbe quello di visualizzare la lista nella pagina html con stili differenti a seconda del valore .

### Layout di riferimento

![layoutdi riferimento](img/fizz-buzz.png)

## Risoluzione in linguaggio naturale

1. Attraverso un ciclo for visualizzare in console un elenco da 1 a 100
2. Se il numero è un multiplo di tre _(numero % 3 = 0)_ => sostituire il numero con il testo "Fizz"
3. Se il numero è un multiplo di cinque _(numero % 5 = 0)_ => sostituire il numero con il testo "Buzz"
4. Se il numero è un multiplo di tre ma anche di cinque (numero % 3 = 0) e (numero % 5 = 0) => sostituire il numero con il testo "FizzBuzz"
5. Creare un container nel DOM
6. Aggiungere un elemento con il numero o la stringa con la funzione **_append()_**
7. Applicare stili differenti in base al valore degli elementi
