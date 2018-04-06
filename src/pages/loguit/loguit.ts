import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoguitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loguit',
  templateUrl: 'loguit.html',
})
export class LoguitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoguitPage');
  }


  loguit() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
    this.navCtrl.setRoot('LoginPage');

  }



}
