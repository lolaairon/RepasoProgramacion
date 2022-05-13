/*
9. Realizar una función que te imprima por consola el siguiente mensaje:
o “El numero es par”, si el numero introducido como parámetro de entrada
es par
o “El numero es impar”, si el numero introducido como parámetro de
entrada es impar */

export function esPar(numero:number){

    if(numero % 2== 0){
       return 'El numero es par'
    }else{
      return   'El numero es impar'
    }
}
/*
esPar(1);
esPar(4);
esPar(7);
esPar(9);
esPar(11);
esPar(143);
esPar(5500);*/