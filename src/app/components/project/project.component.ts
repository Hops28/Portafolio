import { Component } from '@angular/core';

interface Proyecto {
  Nombre: string,
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
      Nombre: "Proyecto1",
      Imagen: ["../../../assets/Portada2.jpg"],
      Descripcion: "Descripción del proyecto 1",
      Descripcion_Corta: "Descripción corta del proyecto 1",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto2",
      Imagen: ["../../../assets/Portada3.jpg"],
      Descripcion: "Descripción del proyecto 2",
      Descripcion_Corta: "Descripción corta del proyecto 2",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto3",
      Imagen: ["../../../assets/Portada4.jpg"],
      Descripcion: "Descripción del proyecto 3",
      Descripcion_Corta: "Descripción corta del proyecto 3",
      Categoria: "Angular",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto4",
      Imagen: ["../../../assets/Portada5.png"],
      Descripcion: "Descripción del proyecto 4",
      Descripcion_Corta: "Descripción corta del proyecto 4",
      Categoria: "Flask",
      Clase: "animate__animated animate__zoomIn"
    }
    // Agrega más proyectos aquí
  ];

  categorias: string[] = ['Todos', 'Django', 'Flask', 'Angular'];
  filtroCategoria: string = 'Todos';
  proyectosFiltrados: Proyecto[] = [];

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
      let contenedorSlider = document.querySelector("swiper-container");
      // let contenidoSlider : string = "";

      // imagenes.forEach(element => {
      //   contenidoSlider += "<swiper-slide><img src='../../../assets/Portada2.jpg' alt=''></swiper-slide>"
      // });

      console.log(imagenes)

      modal.classList.add("showModal");
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
