// //Jarak Mobil A&B = 120 km.
// A berjalan 60km/jam dari Timur;
// B berjalan 40km/jam dari barat;
// A dan B start pukul 9 WIB;
// Jam berapa A dan B bertabrakan?


let kecepatanA = 40
let kecepatanB = 60
let jarak = 120
let jamStart = 7

let waktuTabrakanMenit = (jarak/(kecepatanA + kecepatanB)) * 60;
let tabrakanJam = Math.round(waktuTabrakanMenit/60);
let tabrakanMenit = waktuTabrakanMenit%60;
let jamTabrakan = tabrakanJam + jamStart

console.log('')
console.log('Mobil A ' + kecepatanA + ' km/h dari Timur!');
console.log('Mobil B ' + kecepatanB + ' km/h dari Barat!');
console.log('')
console.log('Tabrakan akan terjadi ' + waktuTabrakanMenit + ' menit lagi');
console.log('')
console.log('Sekarang jam ' + jamStart + ', tabrakan akan terjadi jam ' + jamTabrakan + ':' + tabrakanMenit)
console.log('')