const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom

Kita gunakan i < myArray.length sebagai batasan pada proses looping, sehingga proses looping tidak 
lebih dari panjang array. Kemudian untuk mengakses index array kita manfaatkan nilai variabel i, 
dimana variabel i ini terus bertambah nilainya pada tiap proses loop, sehingga kita bisa mengakses tiap 
index pada array secara otomatis.*/