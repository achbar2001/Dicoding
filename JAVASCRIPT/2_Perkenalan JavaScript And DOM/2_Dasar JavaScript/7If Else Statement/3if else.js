/*Kita juga dapat memberikan lebih dari satu pertanyaan pada if statement dengan kata lain, kita dapat 
memberikan lebih dari satu kondisi dengan menggabungkan keyword else dan if seperti berikut: */

let language = "Japanese";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/