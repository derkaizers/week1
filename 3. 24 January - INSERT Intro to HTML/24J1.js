import { BADFAMILY } from "dns";


// Saat ini, jumlah usia Andi dan Budi = 49 tahun
// dengan rasio usia andi dan budi = 0.4
// berapa usia Andi dan Budi 2 tahun lagi?
// A + B = 49
// A : B = 0.4

let total = 49
let rasio = 0.4

let Budi = total / (rasio + 1) 
let Andi = total - Budi;
let Budi2 = Budi + 2
let Andi2 = Andi + 2

// Total = 49
// A + B = 49
// A / B = 0.4
// A = 49 - B;
// A / B = 0.4 kemudian disubsitusi -> 49 - B / B = 0.4
// 49 - B = 0.4*B;
// 49 = 0.4B * B ----> 49 = (0.4 + 1) * B;

console.log('Usia Budi saat ini = ' + Budi)
console.log('Usia Andi saat ini = ' + Andi)
console.log('Usia Budi 2 Tahun lagi = ' + Budi2)
console.log('Usia Andi 2 Tahun lagi = ' + Andi2)

