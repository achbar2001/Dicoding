/*Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Pasalnya,  kita bisa 
mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut: */

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(number)

/* output
400

Mungkin kita berharap nilai total akan tetap 9. Mengingat variabel total pada fungsi multiply, 
seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena 
pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal, kita tidak 
menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total pada fungsi multiply() 
sehingga variabel total menjadi global.*/