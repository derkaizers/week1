let z='';
let y='';


for(let i=5; i>1; i--){
    for(let j=0; j<i; j++){
    y += ' * ';
    }
    if(i==2){y += ''}
    else{y += '\n'}
}
for(let k=1; k<6; k++){ 
    for(let l=0; l<k; l++){
        z += ' * '
    }
    z += '\n'
}




console.log(z)

console.log(y)