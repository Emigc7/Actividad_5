import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  title: string = "";
  text: string = "";
  img: string = "";
  fecha: string ="";
  arrNoticias: Noticia[] = [];
  

  //inicializo las dos noticias iniciales
  noticias_iniciales:string = ` <div class="noticia-container">
                                  <div class="contenido-principal">
                                      <h2 class="titulo-noticia">Nueva asignatura en UPM</h2>
                                      <img src="https://previews.123rf.com/images/auremar/auremar1704/auremar170400761/77058057-tenga-que-arreglar-la-impresora.jpg" class="imagen-noticia">
                                      <p class="texto-noticia"> Ante la alta demanda de recien graduados del grado de Ingeniería Informática que se les solicitaba arreglar la impresora de su vecino o familiar.
                                      La universidad politécnica de Madrid se ha visto obligado a agregar la asignatura: "Introducción a la reparación de impresoras".
                                      <br> <br> La propuesta está siendo un exito por el momento.</p>
                                  </div>
                                  <p class="fecha-noticia">Fecha publicación: 2023-02-13</p>
                                </div>

                                <div class="noticia-container">
                                <div class="contenido-principal">
                                    <h2 class="titulo-noticia">Ganador falso de la lotería</h2>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsCEHlA6K13pwymDH4QwMtxr7EIO5yeceUA&usqp=CAU" class="imagen-noticia">
                                    <p class="texto-noticia"> El anterior fin de semana este chico de Alicante recibió la noticia de haber ganado la lotería. Ante la emoción de haber ganado 50 millones de euros, el chico se fue de su empresa
                                    insultando a sus jefes. <br> Al llegar a la administración de lotería se dió cuenta de que la persona que le dió la noticia confundió un 8 con un 3.
                                    </p>
                                </div>
                                <p class="fecha-noticia">Fecha publicación: 2023-02-13</p>
                                </div>`;

noticias:string = this.noticias_iniciales;




  guardar(): void{

    if(!this.validarURL() || !this.validarCampos()){

      (!this.validarURL() && this.validarCampos()) ?   alert("La URL de la imagen seleccionada no es correcta") : alert("Debes rellenar todos los campos");
      
      
    }else{

      let noticia:Noticia = {
        title: this.title,
        text: this.text,
        img:this.img,
        date: this.fecha
      }
      
      this.arrNoticias.push(noticia)
    
      this.cargarDatos();
  
      this.title="";
      this.text="";
      this.img="";
      this.fecha  ="";
  

    }


  }

  validarURL(): boolean {
    let miurl = this.img;
    try {
   
      new URL(miurl);
      return true;
   
    } catch (err) {
   
      return false;
   
    }
  }

  validarCampos():boolean{
    if(this.title == "" || this.text == "" || this.fecha == "" || this.img == ""){
      return false;
    } else{
      return true;
    }
  }


  cargarDatos(): void{
    this.noticias=this.noticias_iniciales;
    this.arrNoticias.forEach(noticia => {
      this.noticias += `<div class="noticia-container">
                        <div class="contenido-principal">
                            <h2 class="titulo-noticia">${noticia.title}</h2>
                            <img src=${noticia.img} class="imagen-noticia">
                            <p class="texto-noticia"> ${noticia.text}</p>
                        </div>
                        <p class="fecha-noticia">Fecha de publicación: ${noticia.date}</p>
                        </div>`
    })

  }

}
