let minggu = new Date()  

if(minggu.getDay() == 0){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Minggu');
}
else if(minggu.getDay() == 1){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Senin')
}
else if(minggu.getDay() == 2){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Selasa')
}
else if(minggu.getDay() == 3){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Rabu')
}
else if(minggu.getDay() == 4){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Khamis')
}
else if(minggu.getDay() == 5){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Jumat')
}
else if(minggu.getDay() == 6){
    console.log('Saat ini minggu ' + minggu.getDay() + ' : ' + 'Sabtu')
}