
            class Pollo{
                direccionPollo=["url('./Imagenes/volandoa.png')","url(./Imagenes/volandob.png)"];
                pollo=document.createElement("div");
                audio=["Componentes/audio1.mp3","Componentes/audio2.mp3","Componentes/audio3.mp3"];

                constructor(direccion){
                    this.posicion="";
                    this.incremento="";
                    this.setPosicion=direccion;
                    this.setIncremento=direccion;
                    this.setFondo=direccion;
                }

                get getPosicion(){
                    return this.posicion;
                }

                set setPosicion(direccion){
                    direccion==1?this.posicion=0:this.posicion=100;
                }

                set setIncremento(direccion){
                    direccion==1?this.incremento=-1:this.incremento=1;
                }

                get getIncremento(){
                    return this.incremento;
                }

                set setFondo(direccion){
                    direccion==1?this.pollo.style.backgroundImage=this.direccionPollo[0]:this.pollo.style.backgroundImage=this.direccionPollo[1];
                }

                get getPollo(){
                    this.pollo.style.width="6.25%";
                    this.pollo.style.height="12.5%";
                    this.pollo.id="pollo";
                    this.pollo.style.backgroundSize="contain";
                    this.pollo.style.backgroundRepeat="no-repeat";
                    this.pollo.onclick=function(){
                        var numero=Math.floor(Math.random()*3);
                        var sonido=new Audio(this.audio[numero]);
                        sonido.play();
                        this.style.display="none";
                    }
                    return this.pollo;
                }

            }
