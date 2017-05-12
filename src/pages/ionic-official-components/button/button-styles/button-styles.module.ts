/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ButtonStylesPage} from "./button-styles";


@NgModule({
  declarations: [
    ButtonStylesPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonStylesPage),
  ],
  entryComponents: [
    ButtonStylesPage,
  ],
})
export class IButtonStylesPageModule {}
