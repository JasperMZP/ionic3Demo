/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {IconButtonsPage} from "./icon-buttons";


@NgModule({
  declarations: [
    IconButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(IconButtonsPage),
  ],
  entryComponents: [
    IconButtonsPage,
  ],
})
export class IconButtonsPageModule {}
