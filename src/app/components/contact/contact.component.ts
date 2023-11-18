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

  tecla : any;

  cambiarCampo(event : any){
    if (event.target.tagName === 'INPUT')
    {
      this.tecla = event.target as HTMLInputElement
    }
    else if (event.target.tagName === 'TEXTAREA') {
      this.tecla = event.target as HTMLTextAreaElement
    }

    if (this.tecla.key === 'Enter'){

      console.log("entró");

      if (this.tecla.id === "txtEmailContact")
      {
        document.getElementById("txtTopicContact")?.focus();
      }
    }
  }
}
