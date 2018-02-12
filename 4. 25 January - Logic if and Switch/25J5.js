// SWITCH 2 VARIABLE


let alaskaki = 'sepatu';
let warna = 'merah';

switch(false){
    case (alaskaki == 'sepatu' && warna == 'merah'):
        console.log('Saya suka Sepatu Merah');
        break;
    case (alaskaki == 'sepatu' && warna == 'biru'):
        console.log('Saya suka sepatu biru');
        break;
    case (alaskaki == 'sandal' && warna == 'merah'):
        console.log('Saya suka sandal merah');
        break;
    case (alaskaki == 'sandal' && warna == 'biru'):
        console.log('Saya suka Sandal biru');
        break;
    default:
        console.log('Tak suka alas kaki merah/biru');
}