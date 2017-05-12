/**
 * Created by Jasper on 2017/5/11.
 */
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ListPage} from "./list";
import {ItemDetailsPageModule} from "./item-details/item-details.module";


@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    ItemDetailsPageModule
  ],
  entryComponents: [
    ListPage,
  ],
})
export class ListPageModule {}
