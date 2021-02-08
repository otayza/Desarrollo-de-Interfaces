var dificultad=["FÁCIL","DIFÍCIL","HARCORE"];
var audio=["Componentes/audio1.mp3","Componentes/audio2.mp3","Componentes/audio3.mp3"];
var contador=0;
posicionv=0;
function crearPollo(){
    ele=document.createElement("div");
    ele.style.width="10%";
    ele.style.height="20%";
    ele.style.backgroundImage="url(./Imagenes/pollo.png)";
    ele.id="pollo";
    ele.style.backgroundSize="cover";
    ele.style.transition="all 1s ease 1s";
    ele.onclick=function(){
        numero=Math.floor(Math.random()*3);
        var sonido=new Audio(audio[numero]);
        sonido.play();
        this.style.display="none";
    }
    return ele;
}

function crearPolloVolador(){
    ele=document.createElement("div");
    ele.style.width="6.25%";
    ele.style.height="12.5%";
    ele.style.backgroundImage="url(./Imagenes/volandoa.png)";
    ele.id="pollov";
    ele.style.backgroundSize="cover";
    ele.style.transition="all 1s ease 1s";
    ele.onclick=function(){
        numero=Math.floor(Math.random()*3);
        var sonido=new Audio(audio[numero]);
        sonido.play();
        this.style.display="none";
    }
    return ele;
}

function jugar(){
    contenedor=document.querySelector("#contenedor");
    contenedor.innerHTML="";
    c1=tiempo();
    contenedor.append(c1);
    pollo=crearPollo();
    pollov=crearPolloVolador();
    setInterval(function(){
        /*if((contador%5)==0){
            pollo=crearPollo();
            document.querySelector("#contenedor").append(pollo);
            pollo.style.position="absolute";
            posicion2=Math.random()*80+1;
            pollo.style.top=70+"%";
            pollo.style.left=posicion2+"%";
            setTimeout(function(){
                contenedor.removeChild(pollo);
            },500);
        }*/
        pollov.style.transition="position 1s";
        pollov.style.position="relative";
        pollov.style.left=posicionv+"%";
        if(posicionv>95){
            posicionv=0;
            contenedor.removeChild(pollov);
        }else{
            posicionv=posicionv+10;
        }
        contador++;
    },600);
}

function tiempo(){
    cajatiempo=document.createElement("tiempo-juego");
    return cajatiempo;
}

function borrarTexto(){
    var texto=document.getElementById("texto");
    texto.innerHTML="";
    var cuadro=crearCuadro();
    texto.append(cuadro);
    cuadro.innerHTML="Hey, soy Eduardo Otayza y tengo 21 años. Estudio en el IES Clara del Rey y espero sacarme este año mi título de técnico de Desarrollo de aplicaciones Web";
}

function crearCuadro(){
    let ele=document.createElement("div");
    ele.style.backgroundImage="url('./Imagenes/madera.jpg')";
    ele.style.position="relative";
    ele.style.top="5%";
    ele.style.left="5%";
    ele.style.width="90%";
    ele.style.height="90%";
    ele.style.fontSize="2.25rem";
    ele.style.textAlign="center";
    ele.style.paddingTop="50px";
    ele.style.color="yellow";
    return ele;
}

function seleccionarDificultad(){
    var texto=document.getElementById("texto");
    texto.innerHTML="";
    var cuadro=crearCuadro();
    texto.append(cuadro);
    cuadro.style.display="flex";
    cuadro.style.flexDirection="column";
    cuadro.style.alignItems="center";
    cuadro.style.justifyContent="space-around";
    for(let i=0;i<3;i++){
        cuadro.append(niveles(i));
    }
    
}

function niveles(numero){
    let ele=document.createElement("button");
    ele.style.width="75%";
    ele.innerHTML=dificultad[numero];
    ele.style.backgroundColor="yellow";
    if(numero==2){
        ele.style.color="red";
    }
    return ele;
}

function instrucciones(){
    var texto=document.getElementById("texto");
    texto.innerHTML="";
    var cuadro=crearCuadro();
    texto.append(cuadro);
    cuadro.innerHTML="1. Se juega con RATÓN<br>2. Dispones de un tiempo limitado para disparar a los pollos, ¡consigue la cena para esta noche!<br>3.Cuantos más pollos, más comida";
}

class BotonJugar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.style.width="50%";
        this.style.height="20%";
        var ele=document.createElement("button");
        ele.innerHTML="Jugar";
        ele.id="jugar";
        
        

        this.append(ele);
        var obj=this;
        setInterval(function(){
            if(obj.childNodes[0].getAttribute("style")=="color:green"){
                obj.childNodes[0].setAttribute("style","color:yellow");          
            }else{
                obj.childNodes[0].setAttribute("style","color:green");
            }
        },1000)
    }
}

customElements.define('boton-jugar', BotonJugar);

class TiempoJuego extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML="<div id=tiempo></div>";
        tiempo=document.getElementById("tiempo");
        tiempo.style.width="10%";
        tiempo.style.height="10%";
        tiempo.style.fontSize="2rem";
        tiempo.innerHTML="1:00";
        var segundos=59;
        let int2=setInterval(function(){
            tiempo.innerHTML="0:"+segundos;
            if(segundos<10){
                tiempo.innerHTML="0:0"+segundos;
                tiempo.style.color="red";
            }
            if(segundos==0){
                window.alert("Se acabó el tiempo");
                clearInterval(int2);
            }
            
            segundos--;
            
        },1000);
    }
}

customElements.define('tiempo-juego', TiempoJuego);