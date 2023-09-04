/*Kemudian const digunakan untuk mendeklarasikan sebuah variabel yang sifatnya immutable atau tidak 
perlu diubah nilainya. Jika kita menginisialisasi kembali nilai variabel yang menggunakan const, maka 
akan mendapati eror “TypeError: Assignment to constant variable.”*/

const z = 100;
console.log(z);

z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */

//Dengan begitu sebaiknya kita gunakan let atau const ketika mendeklarasikan variabel daripada menggunakan var.

