/*
6. Realizar una función que te devuelva si existe un numero par en el array de
números que introduces como parámetro de entrada.

*/
var arrNumb = [];
function buscaPar(arrNumb) {
    for (var i = 0; i < arrNumb.length; i++) {
        if (arrNumb[i] % 2 == 0) {
            console.log("Este n\u00FAmero es par ".concat(arrNumb[i]));
        }
    }
    return arrNumb;
}
buscaPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
