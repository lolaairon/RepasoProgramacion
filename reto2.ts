/*  2. Realizar un procedimiento que dado un país te imprima en que continente estás.
(Max 5 países por continente)*/
 
class Mundo{
    public paises:string;

    constructor(){
        this.paises = ''
    }

    public paiSes(paises:string):void{
        if(paises == 'Mexico' ||paises == 'Brasil'||paises == 'Ecuador'||paises == 'Chile'||paises == 'Argentina' ){
            console.log('Continente : Ámerica');
        }else if(paises == 'España' ||paises == 'Francia'||paises == 'Italia'||paises == 'Rep.Checa'||paises == 'Alemania'){
            console.log('Continente : Europa');
        }else if(paises == 'Tonga' ||paises == 'Samoa'||paises == 'Nueva Zelanda'||paises == 'Vanatu'||paises == 'Islas Salamón'){
            console.log('Continente : Oceania');
        }else if(paises == 'China' ||paises == 'Filipinas'||paises == 'Vietnam'||paises == 'Singapur'||paises == 'Malasia'){
            console.log('Continente : Asia');
        }else if(paises == 'Nigeria' ||paises == 'Kenia'||paises == 'Senegal'||paises == 'Ghana'||paises == 'Marruecos'){
            console.log('Continente : Africa');
        }
        


    }
}
 let x = new Mundo;
x.paiSes('China');

