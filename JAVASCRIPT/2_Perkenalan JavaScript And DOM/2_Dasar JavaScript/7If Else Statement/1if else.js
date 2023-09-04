/*Logical statement pada if ditulis di dalam tanda kurung (parentheses). Jika logical statement tersebut
menghasilkan true, maka JavaScript akan mengeksekusi kode yang berada di dalam block if. Jika logical 
statement menghasilkan nilai false, maka kode yang pada block else lah yang akan dieksekusi.

Block else bersifat opsional untuk dituliskan, hal tersebut berarti kita tidak perlu menuliskannya jika 
tidak kita manfaatkan */

let x = 90;

if(x >= 70){
    console.log("Nilai anda: " + x);
    console.log("Selamat anda lulus");
}else{
    console.log("Maaf anda tidak lulus");
}

