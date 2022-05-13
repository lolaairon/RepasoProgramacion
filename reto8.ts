/*
8. Realizar una función que te devuelva la suma del numero de caracteres de las
palabras almacenadas en un array.
*/

export function devuelveSuma(arrDel:string[]){
    let count:number = 0;
    for( let i=0 ; i<arrDel.length ; i++){
        count += arrDel[i].length
    }
    return count
}

//console.log(devuelveSuma(['caca','culo','culo']));