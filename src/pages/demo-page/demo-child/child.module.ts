/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ChildPage} from "./child";

@NgModule({
  declarations: [
    ChildPage
  ],
  imports: [
    IonicPageModule.forChild(ChildPage),
  ],
  entryComponents: [
    ChildPage,
  ],
})
export class ChildModule {}
