/*Mode Strict adalah mode yang memaksakan penulisan program JavaScript yang baik dan aman. Hal ini 
memastikan tidak terjadinya kegagalan dalam menjalankan kode akibat penulisan script yang buruk, dan 
juga mencegah timbulnya bug. 

Contoh penggunaan mode Strict secara global (ditulis di awal script)*/

"use strict";
x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
function showAngka() {
  var x = 9;
  alert(x);
}

//Contoh penggunaan mode Strict di dalam function 

x = 9;       // ini tidak dianggap error karena tidak kena mode Strict
showAngka();   // ini tidak dianggap error karena tidak kena mode Strict
 
function showAngka() {
 // “use strict”;
   x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}