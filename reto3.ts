/* 3. Realizar una función que imprima los números impares existentes hasta el
número indicado como parámetro de entrada.*/

function imparesXmil(num1:number){
    let num:number = num1
    let count:number = 1;
    while(count < num){
        if(count % 2 == 0){
        }else{
            console.log(`Números impares: ${count}`)
        } count++
}
}
imparesXmil(20);
