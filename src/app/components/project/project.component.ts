import { Component } from '@angular/core';

interface Proyecto {
  Nombre: string,
  Imagen: string,
  Descripcion: string,
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
      Imagen: "../../../assets/Portada2.jpg",
      Descripcion: "Descripción del proyecto 1",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto2",
      Imagen: "../../../assets/Portada3.jpg",
      Descripcion: "Descripción del proyecto 2",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto3",
      Imagen: "../../../assets/Portada4.jpg",
      Descripcion: "Descripción del proyecto 3",
      Categoria: "Flask",
      Clase: "animate__animated animate__zoomIn"
    },
    {
      Nombre: "Proyecto4",
      Imagen: "../../../assets/Portada5.png",
      Descripcion: "Descripción del proyecto 4",
      Categoria: "Flask",
      Clase: "animate__animated animate__zoomIn"
    }
    // Agrega más proyectos aquí
  ];

  categorias: string[] = ['Todos', 'Django', 'Flask'];
  filtroCategoria: string = 'Todos';
  proyectosFiltrados: Proyecto[] = [];

  constructor() {
    this.aplicarFiltro();
  }

  aplicarFiltro(): void {
    if (this.filtroCategoria === 'Todos') {
      for (let i = 0; i < this.proyectosFiltrados.length; i++)
      {
        this.proyectosFiltrados[i].Clase = "animate__animated animate__zoomOut animate__faster";
      }

      setTimeout(() => {
        this.proyectosFiltrados = this.Proyectos;

        for (let i = 0; i < this.proyectosFiltrados.length; i++)
        {
          this.proyectosFiltrados[i].Clase = "animate__animated animate__bounceIn animate__faster";
        }
      }, 500);
    } else {
      for (let i = 0; i < this.proyectosFiltrados.length; i++)
      {
        this.proyectosFiltrados[i].Clase = "animate__animated animate__zoomOut animate__faster";
      }

      setTimeout(() => {
        this.proyectosFiltrados = this.Proyectos.filter(proyecto => proyecto.Categoria === this.filtroCategoria);

        for (let i = 0; i < this.proyectosFiltrados.length; i++)
        {
          this.proyectosFiltrados[i].Clase = "animate__animated animate__bounceIn animate__faster";
        }
      }, 500);
    }
  }
}
