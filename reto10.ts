/*
10. Utilizando las dos funciones anteriores indicar si es par o impar la suma de los
caracteres de cada uno de los siguientes arrays:
o [“Casa”, “Coche”, “Ciudad”, “Cesta”]
o [“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiesto”, “Brasil”]
o [“Venezuela”, “Veneno”, “Voltaje”]
*/
import { esPar } from "./reto9";
import { devuelveSuma} from "./reto8";

let sum1 = devuelveSuma(['Casa', 'Coche', 'Ciudad', 'Cesta']);
let reslt1= esPar(sum1);
let sum2 = devuelveSuma(['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']);
let reslt2= esPar(sum2);
let sum3 = devuelveSuma(['Venezuela','Veneno','Voltaje'])
let reslt3= esPar(sum3);

/*
console.log(reslt1)
console.log(reslt2)
console.log(reslt3)*/