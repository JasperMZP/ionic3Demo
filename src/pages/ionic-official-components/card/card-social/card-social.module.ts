/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardSocialPage} from "./card-social";

@NgModule({
  declarations: [
    CardSocialPage,
  ],
  imports: [
    IonicPageModule.forChild(CardSocialPage),
  ],
  entryComponents: [
    CardSocialPage,
  ],
})
export class CardSocialPageModule {}
