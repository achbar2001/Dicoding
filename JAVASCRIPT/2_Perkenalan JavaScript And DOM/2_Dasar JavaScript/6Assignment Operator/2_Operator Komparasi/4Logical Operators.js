/*Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, 
yakni dengan logical operators. Dengan logical operator kita dapat menggunakan kombinasi dari dua nilai 
boolean atau bahkan lebih dalam menetapkan logika.*/

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true