/* 3. Realizar una función que imprima los números impares existentes hasta el
número indicado como parámetro de entrada.*/
function imparesXmil(num1) {
    var num = num1;
    var count = 1;
    while (count < num) {
        if (count % 2 == 0) {
        }
        else {
            console.log("N\u00FAmeros impares: ".concat(count));
        }
        count++;
    }
}
imparesXmil(20);
