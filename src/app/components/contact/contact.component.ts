import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  verificarValoresInputContact(event : any) {
    if (event)
    {
      let inputContact = event.target as HTMLInputElement;

      console.log(inputContact);

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
}
