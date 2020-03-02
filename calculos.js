
function agregarNumero(numero){
    var mostrar="";
    var pantalla= document.getElementById("textoPantalla").value;
    console.log(pantalla);
    mostrar= pantalla + numero;
    document.getElementById("textoPantalla").value = mostrar;
    
}

function resta(){
    var pant=document.getElementById("textoPantalla").value;
    var resta = pant.indexOf("-");
    if(resta!=-1){
        var primero= pant.split("-");
        var resultado= parseInt(primero[0])-parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }
}

function suma(){
    var pant=document.getElementById("textoPantalla").value;
    var resta = pant.indexOf("+");
    if(resta!=-1){
        var primero= pant.split("+");
        var resultado= parseInt(primero[0])+parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }
}
function multiplicacion(){
    var pant=document.getElementById("textoPantalla").value;
    var resta = pant.indexOf("*");
    if(resta!=-1){
        var primero= pant.split("*");
        var resultado= parseInt(primero[0])/parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }
}
function division(){
    var pant=document.getElementById("textoPantalla").value;
    var resta = pant.indexOf("/");
    if(resta!=-1){
        var primero= pant.split("/");
        var resultado= parseInt(primero[0])/parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }
}

function borradoTotal(){
    document.getElementById("textoPantalla").value = "";
}
function resultado(){
    var pant=document.getElementById("textoPantalla").value;
    var suma = pant.indexOf("+");
    var resta = pant.indexOf("-");
    var multi = pant.indexOf("*");
    var division = pant.indexOf("/");
    if(suma!=-1){
        var primero= pant.split("+");
        var resultado= parseInt(primero[0])+parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }else if(resta!=-1){
        var primero= pant.split("-");
        var resultado= parseInt(primero[0])-parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }else if(multi!=-1){
        var primero= pant.split("*");
        var resultado= parseInt(primero[0])*parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    } else if(division!=-1){
        var primero= pant.split("/");
        var resultado= parseInt(primero[0])/parseInt(primero[1]);
        borradoTotal();
        document.getElementById("textoPantalla").value=parseFloat(resultado);
    }
} 

