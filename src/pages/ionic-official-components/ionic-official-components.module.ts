/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {IonicOfficialComponentsPage} from "./ionic-official-components";
import {CardListPageModule} from "./card/card.module";
import {CardBackgroundPageModule} from "./card/card-background/card-background.module";
import {ButtonsListPageModule} from "./button/button.module";
import {AlertsPageModule} from "./alert/alert.module";

@NgModule({
  declarations: [
    IonicOfficialComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicOfficialComponentsPage),
    CardListPageModule,
    CardBackgroundPageModule,
    ButtonsListPageModule,
    AlertsPageModule,
  ],
  entryComponents: [
    IonicOfficialComponentsPage,
  ],
})
export class IonicOfficialComponentsPageModule {}
