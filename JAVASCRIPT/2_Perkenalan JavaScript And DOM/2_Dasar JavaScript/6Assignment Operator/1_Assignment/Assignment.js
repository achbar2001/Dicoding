/*Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan untuk 
menginisialisasi nilai pada variabel. Variabel yang akan diberikan nilai ditempatkan pada sebelah kiri 
dan nilainya ditempatkan pada sebelah kanan (nilai dapat berupa variabel lain atau nilai primitif, 
array, atau objek). Di antara keduanya terdapat operator assignment.

Contoh pada statement tersebut kita menginisialisasikan nilai y pada variabel x, sehingga nilai x 
sekarang memiliki nilai yang sama dengan y.

Ada beberapa assignment operator tambahan lain dalam menginisialisasikan nilai pada variabel, atau bisa 
kita sebut sebagai shortcut dalam menentukan nilai. */

let x = 10;
let y = 5

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

console.log(x);

