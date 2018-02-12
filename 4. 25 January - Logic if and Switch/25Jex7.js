/*

IMT = Massa (kg) / Tinggi (meter)^2

a. IMT < 18.5 artinya berat badan kurang,

b. 18.5 - 24.9 artinya berat badan ideal,

c. 25.0 -  29.9  artinya BB berlebih

d. 30.0 - 39.9 artinya BB sangat berlebih

e. IMT > 39.9 artinya obesitas */


var m = 67;
var t = 1.78;
var i = m/(Math.pow(t, 2))
var a;

if (i < 18.5){
    a = 'BERAT BADAN ANDA KURANG!'
}
else if (i >= 18.5 && i <= 24.9){
    a = 'BERAT BADAN ANDA IDEAL!!'
}
else if (i >= 25 && i <= 29.9){
    a = 'BERAT BADAN ANDA BERLEBIH!!'
}
else if (i >= 30 && i <= 39.9){
    a = 'BERAT BADAN ANDA SANNNGGGAATT BERLEBIH!!!'
}
else { a = 'SELAMAT... ANDA LAYAK MENJADI OBESITAS!!!'
}

console.log('')

console.log('Massa anda: ' + m + ' kg & Tinggi anda: ' + t + ' m')
console.log('')
console.log('IMT anda = ' + i + ', '+ a)