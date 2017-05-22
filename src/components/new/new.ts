import { Component } from '@angular/core';

/**
 * Generated class for the NewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'new',
  templateUrl: 'new.html'
})
export class NewComponent {

  text: string;

  constructor() {
    console.log('Hello NewComponent Component');
    this.text = 'Hello World';
  }

}
