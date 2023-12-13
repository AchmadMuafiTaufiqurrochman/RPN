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

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

 let nama = "", peran = "";

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Siapa namamu wahai anak muda ? ', nama => {
        if (nama.length == 0) {
          console.log("Tolong isikan nama anda");
        }
         else{
          console.log(`Selamat datang ${nama}`)
        }
        resolve()
      })
      return(nama)
    })
  }

  const question2 = (nama) => {
    return new Promise((resolve, reject) => {
      rl.question('Silahkan pilih peran anda? ', (peran) => {
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
        resolve()
      })
    })
  }
  const main = async () => {
    await question1(nama)
    await console.log(`Disini ada peran`)
    await console.log(`1. Kesatria`)
    await console.log(`2. Tabib`)
    await console.log(`3. Penyihir`)
    await question2(nama)
    rl.close()
  }
  
  main()
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