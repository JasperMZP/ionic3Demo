/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardBackgroundPage} from "./card-background";
@NgModule({
  declarations: [
    CardBackgroundPage,
  ],
  imports: [
    IonicPageModule.forChild(CardBackgroundPage),
  ],
  entryComponents: [
    CardBackgroundPage,
  ],
})
export class CardBackgroundPageModule {}
