let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);

/* output
Good Morning!

Pada kode di atas, nilai greeting memiliki nilai standar “Selamat Pagi!” tetapi akan ditampilkan 
berbeda jika language memiliki nilai “English”, pada kasus ini kita tidak perlu menuliskan block else.*/