/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardBadgePage} from "./card-badge";
@NgModule({
  declarations: [
    CardBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(CardBadgePage),
  ],
  entryComponents: [
    CardBadgePage,
  ],
})
export class CardBadgePageModule {}
