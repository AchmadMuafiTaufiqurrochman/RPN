 // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai
/*
1. Deklarasi variabel nama dan peran. Di isi juga untuk variabelnya sesuai selera
2. print ('Siapa namamu wahai anak muda ? ')
3. kondisi statment
      if (nama.length == 0){ //kondisi jika nama kosong 
        print ("Tolong isikan nama anda")
      }
      else { //kondisi jika nama telah terisi
        print ("Nama anda adalah " + variabel nama)
      }
      4. Print ("Silahkan pilih peran anda? ")
      5. Switch Case 
          Case (peran)
        case 1,2,3 bisa diliat di codingan aja ya 
        capek bang nulis habis mikir cara input di nude js ini
*/
// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "ucup", peran = "2";


      console.log('Siapa namamu wahai anak muda ? ')
      console.log(nama)
        if (nama.length == 0) {
          console.log("Tolong isikan nama anda");
        }
         else{
          console.log(`Selamat datang ${nama}`)
        }
         
      console.log('Silahkan pilih peran anda? ')
      console.log(peran)
      switch(peran){
      case "1" :
            console.log(`Halo Kesatria ${nama}`)
            break;
          case "2" :
              console.log(`Halo Tabib ${nama}`)
            break;
          case "3" :
              console.log(`Halo Penyihir ${nama}`)
            break;
        }
        

  // const question2 = () => {
  //   return new Promise((resolve, reject) => {
  //     rl.question('Silahkan pilih peran anda ', (peran) => {
  //       switch(peran){
  //         case 1 :
  //           console.log(`Halo Kesatria ${nama}`)
  //           break;
  //           case 2 :
  //           console.log(`Halo Tabib ${nama}`)
  //           break;
  //           case 3 :
  //           console.log(`Halo Penyihir ${nama}`)
  //           break;
            
  //       }
       
  //     })
  //     resolve()
  //   })
    
  // }
  
  

//   readline.question('Halo siapakah namamu? ', nama => {
//     if (nama.length == 0) {
//         console.log("Tolong isikan nama anda");
//     }
//     else{
//         console.log(`Selamat datang ${nama}`)
//     }
//     readline.resume();
//     });    
//     readline.question('Silahkan memilih peran berikut', peran => {
        
//         readline.close();
//         });

//code disini gunakan console.log untuk outputnya