// 1.Función signo zodiaco.
function signoZodiacal() {
    var mesZ = 5;
    var diaZ = 29;
    if ((diaZ >= 22 && mesZ == 12) || (diaZ <= 19 && mesZ == 1)) {
        console.log('Tu signo es Capricornio');
    }
    else if ((diaZ >= 20 && mesZ == 1) || (diaZ <= 18 && mesZ == 2)) {
        console.log('Tu signo es Acuario');
    }
    else if ((diaZ >= 19 && mesZ == 2) || (diaZ <= 20 && mesZ == 3)) {
        console.log('Tu signo es Piscis');
    }
    else if ((diaZ >= 21 && mesZ == 3) || (diaZ <= 19 && mesZ == 4)) {
        console.log('Tu signo es Aries');
    }
    else if ((diaZ >= 20 && mesZ == 4) || (diaZ <= 21 && mesZ == 5)) {
        console.log('Tu signo es Tauro');
    }
    else if ((diaZ >= 22 && mesZ == 5) || (diaZ <= 20 && mesZ == 6)) {
        console.log('Tu signo es Geminis');
    }
    else if ((diaZ >= 21 && mesZ == 6) || (diaZ <= 22 && mesZ == 7)) {
        console.log('Tu signo es Cáncer');
    }
    else if ((diaZ >= 23 && mesZ == 7) || (diaZ <= 22 && mesZ == 8)) {
        console.log('Tu signo es Leo');
    }
    else if ((diaZ >= 23 && mesZ == 8) || (diaZ <= 22 && mesZ == 9)) {
        console.log('Tu signo es Virgo');
    }
    else if ((diaZ >= 23 && mesZ == 9) || (diaZ <= 22 && mesZ == 10)) {
        console.log('Tu signo es Libra');
    }
    else if ((diaZ >= 23 && mesZ == 10) || (diaZ <= 21 && mesZ == 11)) {
        console.log('Tu signo es Escorpio');
    }
    else if ((diaZ >= 22 && mesZ == 11) || (diaZ <= 21 && mesZ == 12)) {
        console.log('Tu signo es Sagitario');
    }
}
signoZodiacal();
