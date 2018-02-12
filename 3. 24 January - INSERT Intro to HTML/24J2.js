// menampilkan:
// Hari ini tanggal 24 - 1 - 2018
// Besok tanggal: ......;
// Kemarin tanggal:.....


let a = new Date()
var b = "-"

console.log('')
console.log('Hari ini Tanggal: ' + a.getDate() + b + (a.getMonth()+1) + b + a.getFullYear())
console.log('')
console.log('Besok Tanggal: ' + (a.getDate()+1) + b + (a.getMonth()+1) + b + a.getFullYear())
console.log('')
console.log('Kemarin Tanggal: ' + (a.getDate()-1) + b + (a.getMonth()+1) + b + a.getFullYear())
console.log('')


document.write('Hari ini Tanggal: ' + a.getDate() + b + (a.getMonth()+1) + b + a.getFullYear())