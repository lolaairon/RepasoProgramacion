/* 5. Realizar una función que reciba como parámetro un array de strings que
contenga colores y te imprima en cada caso si el color está en el arcoíris o no.*/

let coloresS:string[] = ['blanco','amarillo','naranja','rosa','rojo','morado','verde','azul','marron','negro','añil','violeta']
//let coloresArcoiris:string[] = ['rojo','amarillo','naranja','verde','azul','añil','violeta']
function arcoIrisS(colores:string[]){
    for(let i=0; i<coloresS.length; i++){
        if((coloresS[i] == 'rojo') || (coloresS[i] == 'amarillo') || (coloresS[i] == 'naranja')|| (coloresS[i] == 'verde')|| (coloresS[i] == 'azul')|| (coloresS[i] == 'añil')|| (coloresS[i] == 'violeta') ){
            console.log(`El color ${coloresS[i]} esta en el arcoiris`)
        }else{
            console.log(`El color ${coloresS[i]} NO esta en el arcoiris`)
        }
    }

}
arcoIrisS(coloresS);


