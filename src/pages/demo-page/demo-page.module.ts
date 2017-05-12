/**
 * Created by Jasper on 2017/5/11.
 */
import {DemoPage} from "./demo-page";
import {FormsModule} from "@angular/forms";
import {HighLightDirective} from "./highlight.directive";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {LoggerService} from "./logger.service";
import {ChildModule} from "./demo-child/child.module";
@NgModule({
  declarations: [
    DemoPage,
    HighLightDirective,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(DemoPage),
    ChildModule
  ],
  entryComponents: [
    DemoPage,
  ],
  providers:[LoggerService]
})
export class DemoPageModule {}
