import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewComponent } from './new';

@NgModule({
  declarations: [
    NewComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewComponent),
  ],
  exports: [
    NewComponent
  ]
})
export class NewComponentModule {}
