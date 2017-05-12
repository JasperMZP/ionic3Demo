/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ButtonComponentsPage} from "./button-components";

@NgModule({
  declarations: [
    ButtonComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonComponentsPage),
  ],
  entryComponents: [
    ButtonComponentsPage,
  ],
})
export class ButtonComponentsPageModule {}
