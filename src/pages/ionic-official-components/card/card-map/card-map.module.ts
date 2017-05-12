/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardMapPage} from "./card-map";

@NgModule({
  declarations: [
    CardMapPage,
  ],
  imports: [
    IonicPageModule.forChild(CardMapPage),
  ],
  entryComponents: [
    CardMapPage,
  ],
})
export class CardMapPageModule {}
