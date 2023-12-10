/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  sum(num1, num2) {
    return num1 + num2;
  }
  subtraction(num1, num2) {
    return num1 - num2;
  }
  multiplication(num1, num2) {
    return num1 * num2;
  }
  division(num1, num2) {
    return num1 / num2;
  }
}
const calc1 = new Calculator();
calc1.sum(5, 15);
calc1.subtraction(5, 15);
calc1.multiplication(5, 15);
calc1.division(15, 5);
