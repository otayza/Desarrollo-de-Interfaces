
function fadeIn(elemento,duracion,callback){
    if(duracion==null||duracion==0||isNaN(duracion)){
        elemento.style.opacity="1";
    }else{
        var opacidad=parseFloat(elemento.style.opacity);
        var incremento=(1-opacidad)/duracion;
        int1=setInterval(function(){
            opacidad=opacidad+incremento;
            elemento.style.opacity=opacidad;
            if(opacidad>=1){
                clearInterval(int1);
            }
        },1000);
    }
}

function fadeOut(elemento,duracion,callback){
    if(duracion==null||duracion==0||isNaN(duracion)){
        elemento.style.opacity="0";
    }else{
        var opacidad=elemento.style.opacity;
        var decremento=(opacidad/duracion);
        int2=setInterval(function(){
            opacidad=opacidad-decremento;
            elemento.style.opacity=opacidad;
            if(opacidad<=0){
                clearInterval(int2);
            }
        },1000);
    }
}

function callback(){
    
}