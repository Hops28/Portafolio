import { Component } from '@angular/core';
import { Swiper } from 'swiper'

interface Proyecto {
  Nombre: string,
  ImagenPresentacion: string,
  Imagen: string[],
  Descripcion: string,
  Descripcion_Corta: string,
  Categoria: string,
  Clase: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  Proyectos: Proyecto[] = [
    {
      Nombre: "Web50: Project 3",
      ImagenPresentacion: "../../../assets/Proyectos/Django/proyecto1/01.png",
      Imagen: ["../../../assets/Proyectos/Django/proyecto1/01.png",
                      "../../../assets/Proyectos/Django/proyecto1/02.png",
                      "../../../assets/Proyectos/Django/proyecto1/03.png",
                      "../../../assets/Proyectos/Django/proyecto1/04.png"],

      Descripcion: "Sistema de gestión de ventas de alimentos de una pizzería <br/> Se mostrará la página de pedidos, donde aparecen: Pizza, Ensaladas, Bebidas, Subs, Pastas, Comida completa. <br/> Cada una con opciones diferentes donde se puede elegir lo que se desea comprar (Sólo uno). En la sección de pizza, además de seleccionar el tamaño y tipo de pizza, se podrán pedir los 'extras' o 'toppings' que irán incluidos en la orden. <br/>En cada sección hay un botón de 'añadir al carrito' donde se podrán añadir al carrito los platillos que quiera... <br/>Luego en la sección de 'carrito' se podrán ver todos los productos que se añadieron al carrito, siempre y cuando éste se encuentre en estado 'pendiente' (su campo en las tablas se llama solicitud) Donde dentro, habrán tres opciones 'Guardar como pendiente', 'Confirmar compra', 'Cancelar orden'. <br/>Guardar como pendiente: No sucederá nada más que regresarme a la sección de pedidos Confirmar compra: Se cambia el estado de la factura de 'pendiente' a 'listo' y la cantidad de productos se actualiza Cancelar orden: Se guarda la factura pero en un estado a 'cancelado' y la cantidad de productos se mantiene",

      Descripcion_Corta: "Sistema de gestión de ventas de alimentos de una pizzería",

      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },

    {
      Nombre: "Proyecto2",
      ImagenPresentacion: "../../../assets/Portada3.jpg",
      Imagen: ["../../../assets/Portada3.jpg",
                      "../../../assets/Portada3.jpg",
                      "../../../assets/Portada3.jpg"],
      Descripcion: "Descripción del proyecto 2",
      Descripcion_Corta: "Descripción corta del proyecto 2",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto3",
      ImagenPresentacion: "../../../assets/Portada4.jpg",
      Imagen: ["../../../assets/Portada4.jpg",
                      "../../../assets/Portada4.jpg"],
      Descripcion: "Descripción del proyecto 3",
      Descripcion_Corta: "Descripción corta del proyecto 3",
      Categoria: "Angular",
      Clase: "animate__animated animate__zoomIn"
    }
    // Agrega más proyectos aquí
  ];

  categorias: string[] = ['Todos', 'Django', 'Angular'];
  filtroCategoria: string = 'Todos';
  proyectosFiltrados: Proyecto[] = [];
  urlImagenes : string[] = [];

  constructor() {
    this.aplicarFiltro();
  }

  // ngAfterViewInit(){
  //   const element: HTMLElement | null = document.querySelector('.box-img');

  //   if (element) {
  //     element.style.setProperty('--animate-duration', '0.5s');
  //   }
  // }

  aplicarFiltro(): void {
    // Se ocultan las cajas
    this.ocultarCajas();

    // Se evalúa el filtro que se quiere hacer
    if (this.filtroCategoria === 'Todos') {

      // Después de 0.3s se aplican los filtros, en este caso se muestran todos
      setTimeout(() => {
        // Se asignan todos los proyectos que se quieren mostrar
        this.proyectosFiltrados = this.Proyectos;

        // Se muestran todas las cajas
        this.mostrarCajas();
      }, 300);
    }
    else // En caso de que no son todos, entonces es con un filtro específico
    {
      // Después de 0.3s se aplican los filtros, en este caso es uno de los diferentes que hay
      setTimeout(() => {
        // Se asignan los proyectos que van a ser filtrados y mostrados
        this.proyectosFiltrados = this.Proyectos.filter(proyecto => proyecto.Categoria === this.filtroCategoria);

        // Se muestran las cajas filtradas
        this.mostrarCajas();
      }, 300);
    }
  }

  /*****************************************************/

  ocultarCajas() : void {
    for (let i = 0; i < this.proyectosFiltrados.length; i++)
    {
      this.proyectosFiltrados[i].Clase = "animate__animated animate__flipOutX";
    }
  }

  mostrarCajas() : void {
    for (let i = 0; i < this.proyectosFiltrados.length; i++)
    {
      this.proyectosFiltrados[i].Clase = "animate__animated animate__flipInX";
    }
  }

  /******************************************************/

  hoverCaja(tipo : number, nombreProyecto : string): void {
    let indice = this.proyectosFiltrados.findIndex(proyecto => proyecto.Nombre === nombreProyecto);

    if (tipo == 1)
    {
      this.proyectosFiltrados[indice].Clase = "animate__animated animate__pulse"

      setTimeout(() => {
        this.proyectosFiltrados[indice].Clase = ""
      }, 300)
    }
  }

  mostrarModal(imagenes : string[], titulo : string, descripcion : string): void
  {
    let modal = document.getElementById("modalProject");
    if (modal)
    {

      this.urlImagenes = [];

      imagenes.forEach(url => {
        this.urlImagenes.push(url)
      });

      // console.log(this.urlImagenes);

      modal.classList.add("showModal");

      // Contenedor del slider donde se van a agregar los slider
      let theSwiper = new Swiper("swiper-container");

      // {
      //   autoplay : {
      //     delay : 5000
      //   },
      //   navigation : true,
      //   scrollbar : true,
      //   loop : true,
      //   slidesPerGroup : 1,
      //   slidesPerView : 1
      // }

      // if(contenedorSlider)
      // contenedorSlider.innerHTML = contenedorSlider.innerHTML

      theSwiper.init();

      // console.log(theSwiper);
    }
  }

  ocultarModal ()
  {
    let modal = document.getElementById("modalProject");

    if (modal)
    {
      modal.classList.remove("showModal");
    }
  }
}
