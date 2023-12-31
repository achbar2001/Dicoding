/*Bahkan dalam properti objek, kita dapat menyimpan nilai objek lainnya. Contohnya properti firstName 
dan lastName dapat dikelompokan kembali dalam sebuah objek baru sebagai berikut: */

let user = {
    name: {
      first: "Harry",
      last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/