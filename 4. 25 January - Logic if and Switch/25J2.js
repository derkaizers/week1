/* Comparison Operators

== value sama, tapi data type beda
=== value dan data type sama
> lebih Dari;
< kurang dari;
>= lebih dari sama dengan
<= kurang dari sama dengan

Logical Operators

&& and (keduanya benar, maka TRUE)
|| or (salah satu benar, maka TRUE)
! not (membalik logika TRUE/FALSE) */

var x = 5;
var y = '5';
var z = 6;

console.log(x == y);
console.log(x === y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

console.log('')

console.log(x===y && y<z);
console.log(x===y || y<z);
console.log(!(x===y || y<z));
