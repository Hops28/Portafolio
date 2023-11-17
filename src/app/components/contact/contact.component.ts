import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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

  /*Declarar oyentes de acción que van a detectar si se escribió algo en los campos de contactos para posteriormente habilitar el botón de enviar*/

  verificarCorreo () {
    console.log(this.txtCorreo, this.txtAsunto, this.txtDescripcion);
    // let btnEnviar = document.getElementById("btnEnviar");

    // if (this.txtCorreo != "" && this.txtAsunto != "" && this.txtDescripcion != "")
    // {
    //   if (btnEnviar)
    //   {
    //     let btn = btnEnviar as HTMLInputElement;
    //     btn.disabled = false;
    //   }
    // }
    // else{
    //   if (btnEnviar)
    //   {
    //     let btn = btnEnviar as HTMLInputElement;
    //     btn.disabled = true;
    //   }
    // }
  }
}
