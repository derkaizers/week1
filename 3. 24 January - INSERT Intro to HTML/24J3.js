// Buatlah algoritma untuk menghitung karakter tertentu dalam string!
// contoh: "Halo Dunia" memiliki huruf 'a' sebanyak 2 buah


var x = 'Halo Dunia ada apa dengan cinta';
var y = x.replace(/a/g, '')
var total = x.length - y.length


console.log(x + ' memiliki huruf "a" sebanyak ' + total + ' buah')
