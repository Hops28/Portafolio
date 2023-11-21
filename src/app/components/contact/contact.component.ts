import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  txtNombre : string = "";
  txtCorreo : string = "";
  txtAsunto : string = "";
  txtDescripcion : string = "";

  verificarValoresInputContact(event : any) {
    if (event)
    {
      let inputContact = event.target as HTMLInputElement;

      // console.log(inputContact);

      if (inputContact.value != "")
      {
        inputContact.classList.add("valido");
      }
      else
      {
        inputContact.classList.remove("valido");
      }
    }
  }

  async send() {
    // Se inicializa con la llave pública
    emailjs.init("-aysz7Za9OzzGP5kd");

    // Se envía el correo, se usó EmailJS
    await emailjs.send("service_vpordo8","template_e24v8jg", {
      subject: this.txtAsunto,
      to_name: "Josué",
      from_name: this.txtNombre,
      email: this.txtCorreo,
      message: this.txtDescripcion,
    }).then((response) => {
      // alert("Correo enviado correctamente: " + response);

      // Se muestra una alerta para avisar que se mandó correctamente
      Swal.fire({
        title: "¡El correo se envió correctamente!",
        icon: "success",
        background: "#214478",
        color: "#FFF"
      });

      // Se reinicia el formulario
      let formularioContactos = document.getElementById("FormularioContactos") as HTMLFormElement;
      formularioContactos.reset();

      // Se reinician los campos también
      let camposFormulario = document.querySelectorAll(".infoContactos") as NodeListOf<HTMLInputElement>;
      camposFormulario.forEach(element => {
        element.classList.remove("valido");
      });
    },
    (err) => {
      // alert("Error al intentar enviar el correo: " + err);

      // Se muestra una alerta para avisar que hubo un error
      Swal.fire({
        title: "Error al intentar enviar el correo: " + err.message,
        icon: "error",
        background: "#214478",
        color: "#FFF"
      });
    });
  }

//   emailjs.send("service_vpordo8","template_e24v8jg",{
    // subject: "Asunto",
    // to_name: "Josué",
    // from_name: "Hopsito",
    // email: "hopsito@gmail.com",
    // message: "Hola Josue",
// });

  // tecla : any;

  // cambiarCampo(event : any){
  //   if (event.target.tagName === 'INPUT')
  //   {
  //     this.tecla = event.target as HTMLInputElement
  //   }
  //   else if (event.target.tagName === 'TEXTAREA') {
  //     this.tecla = event.target as HTMLTextAreaElement
  //   }

  //   if (this.tecla.key === 'Enter'){

  //     console.log("entró");

  //     if (this.tecla.id === "txtEmailContact")
  //     {
  //       document.getElementById("txtTopicContact")?.focus();
  //     }
  //   }
  // }
}
