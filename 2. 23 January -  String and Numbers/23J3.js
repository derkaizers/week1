//Jenis2 operasi kedua dari Strings

var x = 'haloha';
var y = 'DUNIA';
var z = 12345;

console.log(x.toUpperCase()); //merubah string menjadi huruf capital

console.log(y.toLowerCase()); //merubah string menjadi huruf kecil

console.log(x.replace('ha', 'mi')); //mengganti kata 'ha' menjadi kata 'mi' yg pertama saja.. Jika 
console.log(x.replace(/ha/g, 'mi'));  //mengganti smua kata 'ha' secara global menjadi 'mi'

console.log(z.toString()); //mengganti variable menjadi type lain. contoh: integer(number) menjadi string
console.log(typeof(z.toString()))
console.log(typeof(z))
