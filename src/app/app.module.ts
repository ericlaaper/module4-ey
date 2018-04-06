import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {AuthService} from "./auth.service";


@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: 'Terug', backButtonIcon: 'ios-arrow-back'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProgressBarComponent,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
