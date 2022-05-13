"use strict";
/*
8. Realizar una función que te devuelva la suma del numero de caracteres de las
palabras almacenadas en un array.
*/
exports.__esModule = true;
exports.devuelveSuma = void 0;
function devuelveSuma(arrDel) {
    var count = 0;
    for (var i = 0; i < arrDel.length; i++) {
        count += arrDel[i].length;
    }
    return count;
}
exports.devuelveSuma = devuelveSuma;
//console.log(devuelveSuma(['caca','culo','culo']));
