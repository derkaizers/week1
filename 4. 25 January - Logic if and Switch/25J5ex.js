let alas = 'sandal';
let warna = 'kuning';
let harga = 'murah';

switch(true){
    case (alas == 'sandal' && warna == 'merah' && harga == 'murah'):
        console.log('Saya suka Sandal merah yang murah');
        break;
    case (alas == 'sandal' && warna == 'biru' && harga == 'murah'):
        console.log('Saya suka Sandal biru yang murah');
        break;
    case (alas == 'sandal' && warna == 'merah' && harga == 'mahal'):
        console.log('Saya suka sandal merah yang mahal');
        break;
    case (alas == 'sandal' && warna == 'biru' && harga == 'mahal'):
        console.log('Saya suka Sandal biru yang mahal');
        break;
    case (alas == 'sepatu' && warna == 'merah' && harga == 'murah'):
        console.log('Saya suka Sepatu merah yang murah');
        break;
    case (alas == 'sepatu' && warna == 'biru' && harga == 'murah'):
        console.log('Saya suka Sepatu biru yang murah');
        break;
    case (alas == 'sepatu' && warna == 'merah' && harga == 'mahal'):
        console.log('Saya suka Sepatu merah yang mahal');
        break;
    case (alas == 'sepatu' && warna == 'biru' && harga == 'mahal'):
        console.log('Saya suka Sepatu biru yang murah');
        break;
    default:
        console.log('Saya gak suka pake sepatu dan sandal!!!');
}