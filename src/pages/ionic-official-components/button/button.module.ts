/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ButtonsListPage} from "./button";
import {ButtonComponentsPageModule} from "./button-components/button-components.module";
import {IButtonStylesPageModule} from "./button-styles/button-styles.module";
import {IconButtonsPageModule} from "./icon-buttons/icon-buttons.module";


@NgModule({
  declarations: [
    ButtonsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsListPage),
    ButtonComponentsPageModule,
    IButtonStylesPageModule,
    IconButtonsPageModule,
  ],
  entryComponents: [
    ButtonsListPage,
  ],
})
export class ButtonsListPageModule {}
