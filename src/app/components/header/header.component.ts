import { Component, OnInit } from '@angular/core';
import {  HostListener } from "@angular/core";


// declare var particlesJS: any; // declara la variable global de Particles.js

// import '../../../assets/particles/app.js'
// import '../../../assets/particles/particles.js'

declare var window: Window;

interface objeto {
  duracion: number,
  retraso: number
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit
{
  // arreglo donde se guardará en valores numéricos para el retraso de la animación de las esferas
  retraso :objeto[] = [];

  datos = {
    burbujas : 25,
    ancho : 1300
  }

  // Consructor
  constructor() {

    // var elemento = document.getElementById('mi-elemento');
    // elemento.style.setProperty('--mi-variable', 'valor personalizado');

    // En el constructor solo asignamos el retraso de las burbujas que aparecen (valores entre 10 y 30)
    this.datos.ancho = window.innerWidth;
    this.datos.burbujas = Math.floor(this.datos.ancho / 50);

    this.edit_burbujas(this.datos.burbujas, 1);
  }

  ngOnInit(): void {
    // particlesJS.load('mi-canvas', 'assets/particles/particlesjs-config.json', function() {
    //   console.log('Carga completada.');
    // });
  }

  /*************** FUNCIONES PROPIAS ***********************/
  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.datos.ancho = window.innerWidth;
    this.datos.burbujas = Math.floor(this.datos.ancho / 50);

    this.edit_burbujas(this.datos.burbujas, 2);
  }

  // Función para modificar el arreglo de burbujas
  edit_burbujas (burbujas : number, tipo : number){
    // Si el tipo es 1, entonces se generan las burbujas
    if (tipo == 1)
    {
      for(let i = 0; i < burbujas; i++)
      {
        let obj = {
          duracion : Math.floor(Math.random() * 40) + 10,
          retraso : Math.floor(Math.random() * 5) + 1
        };

        this.retraso.push(obj);
      }
    }
    else if (tipo == 2) // Si es de tipo 2 entonces es de modificación
    {
      if(burbujas > this.retraso.length) // Si lo calculado es mayor a las burbujas actuales entonces se agregan más
      {
        let burbujas_faltantes  = burbujas - this.retraso.length;

        for(let i = 0; i < burbujas_faltantes; i++)
        {
          // Se agrega un valor aleatorio, ese valor significa la duración de la animación
          let obj = {
            duracion : Math.floor(Math.random() * 40) + 10,
            retraso : Math.floor(Math.random() * 5) + 1
          };

          this.retraso.push(obj);
        }
      }
      else if (burbujas < this.retraso.length) // Y si es menor, entonces se eliminan algunas
      {
        let burbujas_eliminables  = this.retraso.length - burbujas;

        for(let i = 0; i < burbujas_eliminables; i++)
        {
          // Se eliminan tantos valores como sean necesarios
          this.retraso.pop();
        }

        // console.log(this.retraso);
      }
    }
  }

  menuCambio()
  {
    var icono = document.querySelector("#menu-icon");
    var nav = document.querySelector("#menu");

    console.log(icono)
    console.log(nav)

    icono?.classList.toggle("bx-x");
    nav?.classList.toggle("open");
  }
}

// window.addEventListener("resize", () => {
//   var width = window.innerWidth;
// });

window.addEventListener("scroll", () => {
  var navbar = document.querySelector("header");

  navbar?.classList.toggle("sticky",  window.scrollY > 400);

  var fondito = document.getElementById("fondito");

  if (fondito)
  {
    if(window.scrollY > 400)
    {
      fondito.classList.add('animate__animated', 'animate__fadeIn');
    }
    else
    {
      fondito.classList.remove('animate__animated', 'animate__fadeIn');
    }
  }
})

/************* H A M B U R G U E S A ****************/


