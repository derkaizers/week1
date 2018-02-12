//BASIC DATE OBJECT

let a = new Date()
var b = ':'
var c = "/"
console.log(a.getFullYear())
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());

console.log(a.getHours() + b + a.getMinutes() + b + a.getSeconds())
console.log(a.getDate() + c + (a.getMonth()+1) + c + a.getFullYear())