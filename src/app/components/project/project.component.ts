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
  UrlGithub: string,
  UrlDeploy: string,
  IsPrivate: boolean
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

      Descripcion: "Sistema de gestión de ventas de alimentos de una pizzería <br/><br/> Se mostrará la página de pedidos, donde aparecen: Pizza, Ensaladas, Bebidas, Subs, Pastas, Comida completa. <br/><br/> Cada una con opciones diferentes donde se puede elegir lo que se desea comprar (Sólo uno). En la sección de pizza, además de seleccionar el tamaño y tipo de pizza, se podrán pedir los 'extras' o 'toppings' que irán incluidos en la orden. <br/>En cada sección hay un botón de 'añadir al carrito' donde se podrán añadir al carrito los platillos que quiera... <br/><br/>Luego en la sección de 'carrito' se podrán ver todos los productos que se añadieron al carrito, siempre y cuando éste se encuentre en estado 'pendiente' (su campo en las tablas se llama solicitud) Donde dentro, habrán tres opciones 'Guardar como pendiente', 'Confirmar compra', 'Cancelar orden'. <br/>Guardar como pendiente: No sucederá nada más que regresarme a la sección de pedidos Confirmar compra: Se cambia el estado de la factura de 'pendiente' a 'listo' y la cantidad de productos se actualiza Cancelar orden: Se guarda la factura pero en un estado a 'cancelado' y la cantidad de productos se mantiene",

      Descripcion_Corta: "Sistema de gestión de ventas de alimentos de una pizzería",

      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn",
      UrlGithub: "",
      UrlDeploy: "",
      IsPrivate: true
    },

    {
      Nombre: "Web50: Project 4",
      ImagenPresentacion: "../../../assets/Proyectos/Django/proyecto2/01.png",
      Imagen: ["../../../assets/Proyectos/Django/proyecto2/01.png",
                    "../../../assets/Proyectos/Django/proyecto2/02.png",
                    "../../../assets/Proyectos/Django/proyecto2/03.png",
                    "../../../assets/Proyectos/Django/proyecto2/04.png"],
      Descripcion: "Se conoce que en algunos negocios se utiliza un método de gestión del inventario de forma no automatizada, en el cual utilizan papel y lápiz y registran los datos de cada venta, entonces se quiere minimizar ese tipo de dificultades con este sistema, con el cual se pueden realizar procesos como las ventas, agregación de datos, eliminación, etc.<br/><br/>Luego de iniciar sesión correctamente se mostrará una interfaz con las siguientes secciones: Inventario, Gestión de ventas, Clientes (Sólo cuando se es admin), Proveedores, Empleados, Historial.<br/><br/>En Inventario sólo el admin puede añadir y eliminar los productos, mientras que si se es un Empleado normal, sólamente podrá ver los productos pero no podrá interactuar con esos productos. <br/><br/>En Gestión de ventas se seleccionan los productos y se añaden al carrito, cuando ya están listos los productos que se quiere vender, entonces se le da click a 'Realizar venta' y luego se selecciona al cliente que se le va a vender, en caso de no estar, entonces se tiene que crear. <br/><br/>En Clientes se podrán ver todos los clientes (Sólo si se es admin) pero si se es un empleado normal sólo se verán los clientes a los que ese empleado atendió. <br/><br/>(Parte del administrador) En Proveedores sólo se muestran los proveedores. <br/><br/>En Empleados sólo se pueden mostrar los empleados que no son administradores, como los vendedores, seguridad, etc. Se puede crear y eliminar a esos empleados. <br/><br/>En Historial se mostrarán todas las ventas que se realizaron",
      Descripcion_Corta: "Sistema de gestión al inventario de una tienda de productos para mascotas 'HappyPows'",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn",
      UrlGithub: "",
      UrlDeploy: "",
      IsPrivate: true
    },
    {
      Nombre: "Trivia",
      ImagenPresentacion: "../../../assets/Proyectos/Angular/proyecto1/01.png",
      Imagen: ["../../../assets/Proyectos/Angular/proyecto1/01.png",
                  "../../../assets/Proyectos/Angular/proyecto1/02.png",
                  "../../../assets/Proyectos/Angular/proyecto1/03.png",
                  "../../../assets/Proyectos/Angular/proyecto1/04.png"],
      Descripcion: "Haciendo prueba con consumo de API en Angular, es un proyecto que consiste en una trivia de preguntas de diferente categoría y dificultad, y tendrás que elegir la respuesta correcta.<br/><br/>Básicamente se trata de responder 10 preguntas, tal como una trivia cualquiera, consta de cualquier tipo de categoría, la dificultad puede variar (Fácil, medio, difícil) en el cual te pueden aparecer preguntas de verdadero y falso o simplemente preguntas donde tengas que seleccionar una de las 4 respuestas. Como primeras impresiones sobre el proyecto, siempre las preguntas van a variar:<br/><ol style='padding: 10px 10%; text-align: left;'><li>Si seleccionamos una de las opciones, podremos ver cuál tenemos seleccionada porque cambiará de color.</li><li>Una vez que estamos seguros de cuál es la respuesta, damos click al botón 'next' para verificar si la respuesta era correcta o no.</li><li>Una vez que damos click en 'next' nos daremos cuenta si la respuesta era correcta o no. <br/>Si seleccionamos una respuesta incorrecta se mostrará de color rojo (Además de saber cuál era la respuesta correcta), y si es correcta se mostrará de color verde.</li></ol>",
      Descripcion_Corta: "Trivia con 10 preguntas de cualquier categoría y dificultad",
      Categoria: "Angular",
      Clase: "animate__animated animate__zoomIn",
      UrlGithub: "https://github.com/Hops28/Trivia",
      UrlDeploy: "",
      IsPrivate: false
    },
    {
      Nombre: "Restaurante 'La Olla'",
      ImagenPresentacion: "../../../assets/Proyectos/Django/proyecto3/01.png",
      Imagen: ["../../../assets/Proyectos/Django/proyecto3/01.png",
      "../../../assets/Proyectos/Django/proyecto3/02.png",
      "../../../assets/Proyectos/Django/proyecto3/03.png",
      "../../../assets/Proyectos/Django/proyecto3/04.png",
      "../../../assets/Proyectos/Django/proyecto3/05.png",
      "../../../assets/Proyectos/Django/proyecto3/06.png",
      "../../../assets/Proyectos/Django/proyecto3/07.png",
      "../../../assets/Proyectos/Django/proyecto3/08.png",
      "../../../assets/Proyectos/Django/proyecto3/09.png",
    ],
      Descripcion: "Este es un sistema web específicamente para este restaurante, dicho restaurante que tiene más de 50 años de experiencia, y hasta la fecha siempre han manejado su información en papel (cuadernos, formularios, etc...).<br><br>Sus funciones principales son la de crear órdenes y realizar la venta confirmando las órdenes creadas. <br><br>En la primera vista (segunda imagen) se ven gráficas con datos generales sobre las ventas que se han realizado y los productos (platillos) que más se hayan vendido.<br><br>En la segunda vista (tercera imagen) se ven los platillos presentados como una tabla, ya que es donde se crean, modifican y 'eliminan' los platillos para el menú, además de que también se puede hacer lo mismo para las categorías de los platillos (Bebidas, Postres, Entradas, Extras, etc...)<br><br>En la tercera vista (cuarta y quinta imagen) está la parte más importante del proyecto, porque es donde se hacen las órdenes y se realizan las ventas, primero se selecciona el área (El restaurante es grande, así que se dividen en áreas), y luego de eso se selecciona el número de mesa, posterior a eso se seleccionan los platillos que se desean crear a la orden, una vez listos los platillos dentro de la orden solo se le da click al botón 'agregar orden' y se agrega la orden a una lista que se puede ver en la cuarta vista (sexta imagen).<br><br>En la cuarta vista se ve una lista de cada orden que se ha agregado, además de que podemos ver el estado de cada orden, agrupadas en 'pendientes', 'facturadas' y 'anuladas'. Y en las órdenes pendientes se aprecia un botón 'facturar' se le da click, se rellena un formulario para indicar con cuánto va a pagar el cliente y se confirma la venta.<br><br>Por último la quinta vista (séptima imagen) es igual a la segunda vista, pero esa maneja la información del personal del restaurante, donde al igual que la segunda vista, se pueden crear, modificar y 'eliminar' el personal.",
      Descripcion_Corta: "Sistema web para la gestión de órdenes y de ventas",
      Categoria: "Django",
      Clase: "animate__animated animate__zoomIn",
      UrlGithub: "https://github.com/Hops28/Trivia",
      UrlDeploy: "",
      IsPrivate: true
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
    // Se busca el proyecto donde se hace hover
    let indice = this.proyectosFiltrados.findIndex(proyecto => proyecto.Nombre === nombreProyecto);

    if (tipo == 1)
    {
      this.proyectosFiltrados[indice].Clase = "animate__animated animate__pulse"

      setTimeout(() => {
        this.proyectosFiltrados[indice].Clase = ""
      }, 300)
    }
  }

  mostrarModal(proyecto : Proyecto): void
  {
    // Se obtiene el elemento 'modal' personalizado
    let modal = document.getElementById("modalProject");

    // Se verifica si realmente se obtuvo
    if (modal)
    {
      // Se vacía la lista con las url de las imágenes
      this.urlImagenes = [];

      // Se agregan las url de las nuevas imágenes a la lista
      proyecto.Imagen.forEach(url => {
        this.urlImagenes.push(url)
      });

      // Se obtiene el elemento para el título
      let tituloModal = document.getElementById("tituloProjectModal");

      // Se obtiene el elemento para la descripcion
      let descripcionModal = document.getElementById("descripcionProjectModal");

      // Si existen esos elementos se procede a agregar el texto del título y el de la descripción
      if (tituloModal && descripcionModal)
      {
        tituloModal.textContent = proyecto.Nombre;
        descripcionModal.innerHTML = proyecto.Descripcion;
      }

      // Se obtiene el elemento con los dos botones de las url
      let botonesURL = document.getElementById("modalBotonesProject");

      // Se verifica el elemento con los botones url
      if (botonesURL)
      {
        // Si el proyecto está privado en Github entonces se ocultan los botones de las url
        if (proyecto.IsPrivate)
        {
          if (proyecto.UrlDeploy != "")
          {
            botonesURL.style.display = 'flex';
            // Se obtiene el elemento botón con la url de github
            let deployURL = document.getElementById("btnWorld");
            let githubURL = document.getElementById("btnGithub");

            // Se verifica ese elemento
            if (deployURL)
            {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              deployURL.setAttribute("href", proyecto.UrlDeploy);
              deployURL.style.opacity = "1";
            }

            if (githubURL)
            {
              githubURL.style.opacity = "0"
            }
          }
          else {
            botonesURL.style.display = 'none';
          }
        }
        else // En caso contrario si se mostrarán
        {
          botonesURL.style.display = 'flex';

          // Se verifica si realmente hay
          if (proyecto.UrlGithub != "")
          {
            // Se obtiene el elemento botón con la url de github
            let githubURL = document.getElementById("btnGithub");

            // Se verifica ese elemento
            if (githubURL)
            {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              githubURL.setAttribute("href", proyecto.UrlGithub);
            }
          }

          if (proyecto.UrlDeploy != "")
          {
            // Se obtiene el elemento botón con la url de github
            let deployURL = document.getElementById("btnWorld");

            // Se verifica ese elemento
            if (deployURL)
            {
              // Como ya verificamos que SI hay url entonces la establecemos al botón de github
              deployURL.setAttribute("href", proyecto.UrlDeploy);
            }
          }
        }
      }

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
