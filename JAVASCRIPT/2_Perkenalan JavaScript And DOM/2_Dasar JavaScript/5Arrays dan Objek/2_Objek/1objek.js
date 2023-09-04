/*Objek serupa dengan array yang dapat menampung banyak nilai dengan tipe data yang beragam. Untuk 
mengelola data menggunakan objek, bedanya objek diakses tidak melalui indexing,  melainkan menggunakan 
pendekatan key-value. Untuk mengakses nilainya kita gunakan key. Key juga biasa disebut dengan properti.

Untuk menetapkan objek pada variabel gunakan tanda kurung kurawal { } dalam menginisialisasinya. 
Kemudian di dalamnya kita tetapkan key: value. */

let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

/*Bahkan dalam properti objek, kita dapat menyimpan nilai objek lainnya. Contohnya properti firstName 
dan lastName dapat dikelompokan kembali dalam sebuah objek baru sebagai berikut: */