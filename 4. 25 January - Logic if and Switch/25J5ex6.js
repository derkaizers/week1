let a = new Date()
var b = a.getDay()
var c = a.getMonth()
var d = a.getSeconds()
var g = a.getDate()
var y = a.getHours()

if(c == 0){
    var e = 'January'
}
else if(c == 1){
    var e = 'February'
}
else if(c == 2){
    var e = 'March'
}
else if(c == 3){
    var e = 'April'
}
else if(c == 4){
    var e = 'May'
}
else if(c == 5){
    var e = 'June'
}
else if(c == 6){
    var e = 'July'
}
else if(c == 7){
    var e = 'August'
}
else if(c == 8){
    var e = 'September'
}
else if(c == 9){
    var e = 'October'
}
else if(c == 10){
    var e = 'November'
}
else {
    var e =  'December'
}


console.log('')
console.log('')

if(b == 0){
    console.log('Hari ini adalah hari: Minggu' + ', ' + a.getDate() + ' ' + e + ' ' + a.getFullYear());
}
else if(b == 1){
    console.log('Hari ini adalah hari: Senin'+ ', ' + a.getDate() + ' ' + e +  ' ' + a.getFullYear())
}
else if(b == 2){
    console.log('Hari ini adalah hari: Selasa'+ ', ' + a.getDate() + ' ' + e +  ' ' +  a.getFullYear())
}
else if(b == 3){
    console.log('Hari ini adalah hari: Rabu'+ ', ' + a.getDate() + ' ' + e +  ' ' +  a.getFullYear())
}
else if(b == 4){
    console.log('Hari ini adalah hari: Khamis'+ ', ' + a.getDate() + ' ' + e +  ' ' +  a.getFullYear())
}
else if(b == 5){
    console.log('Hari ini adalah hari: Jumat'+ ', ' + a.getDate() + ' ' + e +  ' ' +  a.getFullYear())
}
else if(b == 6){
    console.log('Hari ini adalah hari: Sabtu'+ ', ' + a.getDate() + ' ' + e +  ' ' +  a.getFullYear())
}

if (d < 10){
    var f ='0' + d
}
else {
    var f = d
}

if (y < 10) {
    var z = '0' + y
}
else {
    var z = y
}

console.log('')
console.log('')
console.log('Pukul: ' + z + ':' + a.getMinutes() + ":" + f)


console.log('')