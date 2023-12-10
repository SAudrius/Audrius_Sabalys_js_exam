/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(titleInput, directorInput, budgetInput) {
    this.title = titleInput;
    this.director = directorInput;
    this.budget = Number(budgetInput);
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Iron man", "kevin", 100000001);
