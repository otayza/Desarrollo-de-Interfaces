
            class Pollo{
                direccionPollo=["url('./Imagenes/volandoa.png')","url(./Imagenes/volandob.png)"];
                pollo=document.createElement("div");
                audio=["Componentes/audio1.mp3","Componentes/audio2.mp3","Componentes/audio3.mp3"];
                numero=Math.floor(Math.random()*65+5);

                constructor(direccion){
                    this.posicion=null;
                    this.incremento=null;
                    this.limite=null;
                    this.setAtributos=direccion;
                }

                get getPosicion(){
                    return this.posicion;
                }

                set setAtributos(direccion){
                    if(direccion){
                        this.posicion=0;
                        this.incremento=1;
                        this.pollo.style.backgroundImage=this.direccionPollo[0];
                        
                    }else{
                        this.posicion=80;
                        this.incremento=-1;
                        this.pollo.style.backgroundImage=this.direccionPollo[1];
                    }
                }

                get getIncremento(){
                    return this.incremento;
                }

                get getPollo(){
                    this.pollo.style.width="6.25%";
                    this.pollo.style.height="12.5%";
                    this.pollo.id="pollo";
                    this.pollo.style.backgroundSize="contain";
                    this.pollo.style.backgroundRepeat="no-repeat";
                    this.pollo.style.position="absolute";
                    this.pollo.style.left=this.getPosicion+"%"; 
                    this.pollo.style.top=this.numero+"%";
                    var audio=this.audio;
                    this.pollo.onclick=function(){
                        var numero=Math.floor(Math.random()*3);
                        var sonido=new Audio(audio[numero]);
                        sonido.play();
                        this.parentNode.removeChild(this);
                    }
                    return this.pollo;
                }

            }
