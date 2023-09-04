/*Untuk membuat nilai kembalian dari fungsi gunakan keyword return diikuti dengan nilai yang akan 
dikembalikan. Nilai kembalian tidak hanya number, bisa saja berupa string, boolean, objek ataupun array.
Seperti inilah fungsi greeting() jika kita ubah dengan menetapkan dengan nilai kembalian string: */

function greeting(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

let greetingMessage = greeting("Achbar", "English");
console.log(greetingMessage)