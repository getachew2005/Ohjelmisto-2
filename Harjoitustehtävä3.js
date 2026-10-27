let age, weight, dose; // let, koska muuttujille annetaan arvot myöhemmin
age = prompt("Anna potilaan ikä.");
if (age >= 12) {
  dose = 500;
} else if (age >= 2) {
  weight = prompt("Anna potilaan paino.");
  dose = weight * 12.5;
  if (dose > 500) {
    dose = 500;
  }
} else {
  dose = 0;
}
console.log("Annos on " + dose + " mikrogrammaa.");