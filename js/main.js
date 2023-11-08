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
// creazioni classi per style ul
ul.classList.add("d-flex");
ul.classList.add("flex-wrap");
ul.classList.add("justify-content-center");
ul.classList.add("gap-2");

// visualizzazione in console e nel dom dell'elenco (numeri/testo)
for (let i = 1; i <= 100; i++) {
  // creazione elementi li
  const li = document.createElement("li");
  // creazione classi per style li
  li.classList.add("text-center");
  li.classList.add("border");
  li.classList.add("border-3");
  li.classList.add("border-black");
  li.classList.add("fw-semibold");

  // aggiugiamo gli elementi nel dom
  ul.append(li);

  if (i % 3 === 0 && i % 5 === 0) {
    // creazione classi per style li
    li.classList.add("bg-success");
    // dom
    li.append(fizzBuzz);

    // console
    console.log(fizzBuzz);
  } else if (i % 3 === 0) {
    // creazione classi per style li
    li.classList.add("bg-warning");
    // dom
    li.append(fizz);

    // console
    console.log(fizz);
  } else if (i % 5 === 0) {
    // creazione classi per style li
    li.classList.add("bg-danger");
    // dom
    li.append(buzz);
    // console
    console.log(buzz);
  } else {
    // creazione classi per style li
    li.classList.add("bg-info");
    // dom
    li.append(i);

    // console
    console.log(i);
  }
}
