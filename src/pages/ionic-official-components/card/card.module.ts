/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CardListPage} from "./card";
import {CardSocialPageModule} from "./card-social/card-social.module";
import {CardImagePageModule} from "./card-image/card-image.module";
import {CardMapPageModule} from "./card-map/card-map.module";
import {CardBadgePageModule} from "./card-badge/card-badge.module";
import {CardBackgroundPageModule} from "./card-background/card-background.module";

@NgModule({
  declarations: [
    CardListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardListPage),
    CardSocialPageModule,
    CardImagePageModule,
    CardMapPageModule,
    CardBadgePageModule,
    CardBackgroundPageModule
  ],
  entryComponents: [
    CardListPage,
  ],
})
export class CardListPageModule {}
