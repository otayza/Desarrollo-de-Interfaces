var dificultad=["FÁCIL","DIFÍCIL","HARCORE"];
var audio=["Componentes/audio1.mp3","Componentes/audio2.mp3","Componentes/audio3.mp3"];

function crearPollo(){
    ele=document.createElement("img");
    ele.style.width="15%";
    ele.style.height="30%";
    ele.src="./Imagenes/pollo.png";
    ele.id="pollo";
    ele.style.transition="display 0.5s";
    ele.onclick=function(){
        numero=Math.floor(Math.random()*3);
        console.log(numero);
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
    document.querySelector("#contenedor").append(pollo);
    var int1=setInterval(function(){
        pollo.style.display="none";
        pollo=crearPollo();
        document.querySelector("#contenedor").append(pollo);
        pollo.style.position="relative";
        posicion1=Math.random()*65+1;
        posicion2=Math.random()*80+1;
        pollo.style.top=posicion1+"%";
        pollo.style.left=posicion2+"%";
    },1000);
}

function tiempo(){
    cajatiempo=document.createElement("div");
    cajatiempo.innerHTML="1:00";
    cajatiempo.style.width="100%";
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
