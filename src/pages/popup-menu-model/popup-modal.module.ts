/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HintModalPage} from "./hint-modal/hint-modal";
import {PopupModalsPage} from "./popup-modal";
import {SignupModalPage} from "./signup-modal/signup-modal";
import {WalkthroughModalPage} from "./walkthrough-modal/walkthrough-modal";
@NgModule({
  declarations: [
    PopupModalsPage,
    HintModalPage,
    SignupModalPage,
    WalkthroughModalPage
  ],
  imports: [
    IonicPageModule.forChild(PopupModalsPage),
  ],
  entryComponents: [
    PopupModalsPage,
    HintModalPage,
    SignupModalPage,
    WalkthroughModalPage
  ],
})
export class PopupModelModule {}
