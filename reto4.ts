/*4. Realizar una función que como parámetro de entrada reciba un array y como
salida devuelva el array revertido. */
 
let arrNum:number[] = [];
//let arrNum1:number[] = [];
function invertir(arrNum:number[]){
    let arrNum1:number[] = [];
    for(let i = arrNum.length -1; i>=0; i--){
         arrNum1.push(arrNum[i])
    }
    return arrNum1
}
console.log(invertir([4,5,6]));