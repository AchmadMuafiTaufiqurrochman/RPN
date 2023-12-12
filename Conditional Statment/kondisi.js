let nilai = 30

//kondisional javascript dasar
if(nilai > 50){
    console.log("Anda lulus")
} 
else {
    console.log("Anda tidak lulus")
}

//kondisional menggunakan logika and untuk membuat rentang kondisi value 
if (nilai >= 80 && nilai <= 100 ){
    console.log ("Selamat Anda dinyatakan A");
    }
else if (nilai < 80 && nilai >=70) {
    console.log ("Selamat Anda dinyatakan B");
    } 
else if (nilai <70 && nilai >= 60 ) {
    console.log ("Selamat Anda dinyatakan C");
    }
else {
    console.log ("Maaf, Anda dinyatakan D");
}

