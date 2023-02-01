function recargo_cuotas (valor, cuotas) {
    if ( cuotas == 3){
        let recargo = valor *0.20
        return recargo
    
    }

    else if( cuotas == 6){
        let recargo = valor *0.40
        return recargo
    }

    else if( cuotas == 12){
        let recargo = valor *0.60
        return recargo
    }

    else if ( cuotas == 12){
        let recargo = valor *0.80
        return recargo
    }

    else if ( cuotas == 16){
        let recargo = valor *1.00
        return recargo
    }


}




console.log ("Le damos la bienvida a nuestra plataforma comercial");
let valor  = prompt ("Ingrese el valor del producto que desea adquirir en cuotas:");
valor = parseInt (valor)
let cuotas = prompt ("Ingrese la cantidad de cuotas que desea: 3, 6, 12 o 16");
let total =  recargo_cuotas ( valor, cuotas);
total = parseInt (total);


console.log ("Ingresaste:", valor);
console.log ( "Cuotas", cuotas);
console.log ("Total del recargo", total);
console.log ("Pagas de recargo por cuotas", total/cuotas);
console.log ("Valor final de la cuota", (valor + total ) );

let repetir = false ;
do{
    console.log ( "Gracias vuelva pronto.")
}while (repetir)


