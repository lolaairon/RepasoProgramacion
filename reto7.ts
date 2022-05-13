/*
7. Realizar una función que reciba un array de nombres y te devuelva verdadero si
y solo si todos los nombres empiezan por M.*/ 



function nombresXm(arrNombres:string[]){
    let nombreSs:boolean = true;
    let i:number = 0;
    while(nombreSs && i< arrNombres.length){
        if(arrNombres[i][0] == 'M'){
           
           
        }else{
            nombreSs  = false
        }
       i++
    }
    return nombreSs

}
console.log(nombresXm(['Maria', 'Julia', 'Marta', 'Paula', 'Miriam','Sonia']));
console.log(nombresXm(['Maria', 'Marta',  'Miriam']));