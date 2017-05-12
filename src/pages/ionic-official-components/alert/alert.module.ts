/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AlertsPage} from "./alert";

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPage),
  ],
  entryComponents: [
    AlertsPage,
  ],
})
export class AlertsPageModule {}
