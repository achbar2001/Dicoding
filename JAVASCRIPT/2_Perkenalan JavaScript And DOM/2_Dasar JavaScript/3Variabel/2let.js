/*Hoisting menjadi kontroversial karena tidak sedikit developer yang dibuat bingung akan hal ini. 
Masalah ini sudah terselesaikan jika kita menggunakan let dalam mendeklarasikan variabel.*/

y = 100;
let y;
console.log(y);

/* ReferenceError: Cannot access 'y' before initialization */