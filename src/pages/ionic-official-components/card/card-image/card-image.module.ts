/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardImagePage} from "./card-image";
@NgModule({
  declarations: [
    CardImagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardImagePage),
  ],
  entryComponents: [
    CardImagePage,
  ],
})
export class CardImagePageModule {}
