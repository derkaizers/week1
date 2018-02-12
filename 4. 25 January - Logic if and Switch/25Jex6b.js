let a = new Date();

var noljam
var nolmenit ;
var noldetik ;

if(a.getHours()<10){
    noljam = '0'
}
else{
    noljam = ''
}


if(a.getMinutes()<10){
    nolmenit = '0'
}
else{
    nolmenit = ''
}

if(a.getSeconds()<10){
    noldetik = '0'
}
else{
    noldetik = ''
}


console.log('Hari ini ' + a.getDay() + ', ' + a.getDate()+ ' ' + a.getMonth() + ' ' + a.getFullYear())
console.log('')
console.log('Pukul ' + noljam+a.getHours() + ':' + nolmenit+a.getMinutes()+ ':'+ noldetik+a.getSeconds())