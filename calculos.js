
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

function borradoTotal(){
    document.getElementById("textoPantalla").value = "";
}

//Pa que lo vean
function resultado(){
    var pant=document.getElementById("textoPantalla").value;
    var suma = pant.indexOf("+");
    var resta = pant.indexOf("-");
    var multi = pant.indexOf("*");
    var division = pant.indexOf("/");
    var residuo = pant.indexOf("%");
    var raiz = pant.indexOf("v");
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
    }else if(residuo!=-1){
        var primero= pant.split("%");
        var resultado= parseInt(primero[0])%100;
        borradoTotal();
        document.getElementById("textoPantalla").value=resultado;
    }else if(raiz!=-1){
        var primero= pant.split("v");
        var resultado=Math.sqrt(parseFloat(primero[1]));
        borradoTotal();
        document.getElementById("textoPantalla").value=parseFloat(resultado);
    }     
}