var a = 485

var tahun = Math.floor(a/360)

var bulan = Math.floor((a%360)/30)

var Minggu = Math.floor(((a%360)%30)/7)

var Hari = Math.floor(((a%360)%30)%7)

console.log(' ' + a + ' Hari Artinya:')
console.log(' ' + tahun + ' Tahun')
console.log(' ' + bulan + ' Bulan')
console.log(' ' + Minggu + ' Minggu')
console.log(' ' + Hari + ' Hari')
