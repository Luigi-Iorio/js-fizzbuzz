"use strict";
// dichiarazione / assegnazione varibilli
const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";
const container = document.querySelector(".container");

// creazione ul
const ul = document.createElement("ul");
// aggiungo elemento ul nel dom
container.append(ul);

// visualizzazione in console e nel dom dell'elenco (numeri/testo)
for (let i = 1; i <= 100; i++) {
  // creazione elementi li
  const li = document.createElement("li");
  // aggiugiamo gli elementi nel dom
  ul.append(li);

  if (i % 3 === 0 && i % 5 === 0) {
    // dom
    li.append(fizzBuzz);
    // console
    console.log(fizzBuzz);
  } else if (i % 3 === 0) {
    // dom
    li.append(fizz);
    // console
    console.log(fizz);
  } else if (i % 5 === 0) {
    // dom
    li.append(buzz);
    // console
    console.log(buzz);
  } else {
    // dom
    li.append(i);
    // console
    console.log(i);
  }
}
