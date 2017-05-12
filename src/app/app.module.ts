import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PageOneModule} from "../pages/page-one/page-one.module";
import {DemoPageModule} from "../pages/demo-page/demo-page.module";
import {PopupModelModule} from "../pages/popup-menu-model/popup-modal.module";
import {IonicOfficialComponentsPageModule} from "../pages/ionic-official-components/ionic-official-components.module";
import {ListPageModule} from "../pages/list/list.module";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    PageOneModule,
    DemoPageModule,
    PopupModelModule,
    IonicOfficialComponentsPageModule,
    ListPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
