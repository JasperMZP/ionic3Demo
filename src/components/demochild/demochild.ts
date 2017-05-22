import {Component, Input} from '@angular/core';

/**
 * Generated class for the DemochildComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'demochild',
  templateUrl: 'demochild.html'
})
export class DemochildComponent {
  @Input() private sayhello: string;

  constructor() {
    console.log('Hello DemochildComponent Component');
    console.log(this.sayhello);
  }

}
