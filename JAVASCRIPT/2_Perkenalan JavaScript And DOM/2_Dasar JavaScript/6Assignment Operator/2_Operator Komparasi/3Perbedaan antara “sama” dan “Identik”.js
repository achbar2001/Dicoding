/*Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan 
hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan 
memperhatikan tipe datanya kita gunakan ===. */

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/