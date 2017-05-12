import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PageOne} from "../pages/page-one/page-one";
import {DemoPage} from "../pages/demo-page/demo-page";
import {PopupModalsPage} from "../pages/popup-menu-model/popup-modal";
import {IonicOfficialComponentsPage} from "../pages/ionic-official-components/ionic-official-components";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Hello Ionic', component: HelloIonicPage},
      {title: 'My First List', component: ListPage},
      {title: 'Button', component: PageOne},
      {title: 'demo page', component: DemoPage},
      {title: 'popup model page',component:PopupModalsPage},
      {title:'Ionic Official Components',component:IonicOfficialComponentsPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
