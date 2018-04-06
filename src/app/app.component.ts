import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AuthService} from "./auth.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  activePage: any;
  homepage: 'HomePage';
  achtern:any;
  voorl:any;

  pages: Array<{title: string, component: any}>;

  constructor( authService: AuthService,
               public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.voorl = localStorage.getItem('voorletters');
    this.achtern = localStorage.getItem('achternaam');
    console.log (this.achtern);
    console.log(this.voorl);



    if(authService.authenticated) {
      this.rootPage = 'HomePage';}
    else {
      this.rootPage = 'LoginPage';




    }










    this.initializeApp();









    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Start', component: 'Mod4astartPage' },
      { title: 'Resultaat', component: 'ResultaatPage' },
      { title: 'Contact', component: 'ContactPage' },
      { title: 'Voorwaarden', component: 'JurPage' },
      { title: 'Verlaat de app', component: 'LoguitPage' }

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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  loguit() {
    localStorage.clear();
    this.nav.setRoot('LoginPage');
    this.nav.setRoot('LoginPage');

  }

}
