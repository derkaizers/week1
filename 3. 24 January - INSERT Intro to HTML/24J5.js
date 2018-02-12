// //Jarak Mobil A&B = 120 km.
// A berjalan 60km/jam dari Timur;
// B berjalan 40km/jam dari barat;
// A dan B start pukul 9 WIB;
// Jam berapa A dan B bertabrakan?



let jarak = 120
let rasio = 1.5
let waktu = 9
let B = jarak / (rasio + 1)
let A = jarak - B;



var Jam = Math.floor(A/60)

var Menit = Math.floor(A%60)



console.log('')
console.log('Tabrakan akan terjadi: ' + A + ' menit lagi')
console.log('')
console.log('Mereka akan bertabrakan tepat pada pukul: ' + (waktu+Jam) + ':' + Menit)
console.log('')
