import { Component } from '@angular/core';

/**
 * Generated class for the LayHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lay-header',
  templateUrl: 'lay-header.html'
})
export class LayHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello LayHeaderComponent Component');
    this.text = 'Hello World';
  }

}
