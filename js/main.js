//Separación de propiedades y funciones (métodos)
// OBJETOS CON LAS PROPIEDADES 

let propiedades = {
    teclas: document.querySelectorAll('#calculadora ul li'), //tomamos cada li del html
    accion: null,
    digito: null,
    operaciones: document.querySelector('#operaciones'),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false
}

// OBJETOS CON LOS METODOS 
let metodos = {
    inicio: function(){
        for(var i = 0; i < propiedades. teclas.length; i++){ //en toda la cantidad de li
            //console.log(i)
            propiedades.teclas[i].addEventListener("click", metodos.oprimirTecla) //Cada que se oprima un li se produce el evento funcion "oprimirTecla"
        }
    }, 
    teclado: function(){ //clicks con teclado
        document.addEventListener("keydown", metodos.oprimir)
    },
    oprimir: function(tecla){
        //console.log(tecla.keyCode); identificar que tecla estoy apretando

        //NUMEROS
        if(tecla.keyCode == 48 || tecla.keyCode == 96){
            propiedades.accion = "numero";
            propiedades.digito = 0;
        }
        if(tecla.keyCode == 49 || tecla.keyCode == 97){
            propiedades.accion = "numero";
            propiedades.digito = 1;
        }
        if(tecla.keyCode == 50 || tecla.keyCode == 98){
            propiedades.accion = "numero";
            propiedades.digito = 2;
        }
        if(tecla.keyCode == 51 || tecla.keyCode == 99){
            propiedades.accion = "numero";
            propiedades.digito = 3;
        }
        if(tecla.keyCode == 52 || tecla.keyCode == 100){
            propiedades.accion = "numero";
            propiedades.digito = 4;
        }
        if(tecla.keyCode == 53 || tecla.keyCode == 101){
            propiedades.accion = "numero";
            propiedades.digito = 5;
        }
        if(tecla.keyCode == 54 || tecla.keyCode == 102){
            propiedades.accion = "numero";
            propiedades.digito = 6;
        }
        if(tecla.keyCode == 55 || tecla.keyCode == 103){
            propiedades.accion = "numero";
            propiedades.digito = 7;
        }
        if(tecla.keyCode == 56 || tecla.keyCode == 104){
            propiedades.accion = "numero";
            propiedades.digito = 8;
        }
        if(tecla.keyCode == 57 || tecla.keyCode == 105){
            propiedades.accion = "numero";
            propiedades.digito = 9;
        }

        //SIGNOS

        if(tecla.keyCode == 187 || tecla.keyCode == 107){
            propiedades.accion = "signo";
            propiedades.digito = "+";
        }

        if(tecla.keyCode == 189 || tecla.keyCode == 109){
            propiedades.accion = "signo";
            propiedades.digito = "-";
        }

        if(tecla.keyCode == 88 || tecla.keyCode == 106){
            propiedades.accion = "signo";
            propiedades.digito = "*";
        }

        if(tecla.keyCode == 111){
            propiedades.accion = "signo";
            propiedades.digito = "/";
        }

        //DECIMAL

        if(tecla.keyCode == 190 || tecla.keyCode == 110){
            propiedades.accion = "decimal";
            propiedades.digito = ".";
        }

        //IGUAL

        if(tecla.keyCode == 13){
            propiedades.accion = "igual";
        }

        //BORRAR

        if(tecla.keyCode == 8){
            metodos.borrarCalculadora();
        }

        metodos.calculadora(propiedades.accion, propiedades.digito);
    },
    oprimirTecla: function(tecla){ //recibe la tecla clickeada
        //console.log("hola");
        propiedades.accion = tecla.target.getAttribute("class");//Agarro la clase de cada li y guardo en la propiedad accion
        //console.log(propiedades.accion)
        propiedades.digito = tecla.target.innerHTML; //Guardo el contenido de la etiqueta li, tipo el 1 2 3 + etc. 
        //console.log(propiedades.digito)
        metodos.calculadora(propiedades.accion,propiedades.digito) // Funcion calculadora
    },
    calculadora: function(accion, digito){
        switch(accion){
            case "numero":
                //console.log("Es un numero");
                //console.log(accion);
                //console.log(digito);

                propiedades.cantidadSignos = 0;

                if(propiedades.operaciones.innerHTML == 0){
                    propiedades.operaciones.innerHTML = digito;
                }
                else{
                    if(propiedades.resultado == true){
                        propiedades.resultado = false;
                        propiedades.operaciones.innerHTML = digito;
                    }else{
                        propiedades.operaciones.innerHTML += digito;
                    }
                }
            break;

            case "signo":
                //console.log("es signo");
                //console.log(accion);
                //console.log(digito);
                
                propiedades.cantidadSignos++;

                if(propiedades.cantidadSignos == 1){
                    if(propiedades.operaciones.innerHTML == 0){
                        propiedades.operaciones.innerHTML = 0;
                    }else{

                        propiedades.operaciones.innerHTML += digito;
                        propiedades.cantidadDecimal = false;
                        propiedades.resultado = false;
                    }
                }
                
            break;

            case "decimal":
                //console.log("decimaaal");
                //console.log(accion);
                //console.log(digito);

                if(propiedades.cantidadDecimal == false){
                    propiedades.operaciones.innerHTML += digito;
                    propiedades.cantidadDecimal = true;
                    propiedades.resultado = false;
                }
                
            break;

            case "igual":
                //console.log("es igual");
                //console.log(accion);
                //console.log(digito);
                
                propiedades.operaciones.innerHTML = eval(propiedades.operaciones.innerHTML); //eval() agarra la cadena de string dentro de operaciones y si encuentra signos matematicos, realiza las operaciones matematicas que esten dentro de sus parentesis
                propiedades.resultado = true;

            break;

            default:
                console.log("Esta oprimiendo cualquier cosa");
            break;

        }
    },
    borrarCalculadora: function(){
        propiedades.operaciones.innerHTML = 0;
    }
}

metodos.inicio();
metodos.teclado();