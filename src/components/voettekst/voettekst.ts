import { Component } from '@angular/core';

/**
 * Generated class for the VoettekstComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'voettekst',
  templateUrl: 'voettekst.html'
})
export class VoettekstComponent {

  text: string;

  constructor() {
    console.log('Hello VoettekstComponent Component');
    this.text = 'Hello World';
  }

}
