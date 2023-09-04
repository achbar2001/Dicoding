/*Untuk menambahkan argument pada fungsi, tambahkan variabel di dalam tanda kurung fungsi namun variabel
tersebut tidak memerlukan keyword var, let, ataupun const. Kita juga bisa menambahkan lebih dari satu 
argumen dengan memberikan tanda koma antar variabel argumennya. Contohnya fungsi greeting akan kita 
ubah dengan menambahkan argument, */

function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Achbar", "Indonesia");

