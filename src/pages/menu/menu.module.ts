import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import {NewComponentModule} from "../../components/new/new.module";

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    NewComponentModule
  ],
  exports: [
    MenuPage
  ]
})
export class MenuPageModule {}
