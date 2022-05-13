"use strict";
exports.__esModule = true;
/*
10. Utilizando las dos funciones anteriores indicar si es par o impar la suma de los
caracteres de cada uno de los siguientes arrays:
o [“Casa”, “Coche”, “Ciudad”, “Cesta”]
o [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
o [“Venezuela”, “Veneno”, “Voltaje”]
*/
var reto9_1 = require("./reto9");
var reto8_1 = require("./reto8");
var sum1 = (0, reto8_1.devuelveSuma)(['Casa', 'Coche', 'Ciudad', 'Cesta']);
var reslt1 = (0, reto9_1.esPar)(sum1);
var sum2 = (0, reto8_1.devuelveSuma)(['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']);
var reslt2 = (0, reto9_1.esPar)(sum2);
var sum3 = (0, reto8_1.devuelveSuma)(['Venezuela', 'Veneno', 'Voltaje']);
var reslt3 = (0, reto9_1.esPar)(sum3);
console.log(reslt1);
console.log(reslt2);
console.log(reslt3);
