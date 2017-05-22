import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemochildComponent } from './demochild';

@NgModule({
  declarations: [
    DemochildComponent,
  ],
  imports: [
    IonicPageModule.forChild(DemochildComponent),
  ],
  exports: [
    DemochildComponent
  ]
})
export class DemochildComponentModule {}
