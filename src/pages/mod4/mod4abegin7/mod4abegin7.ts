import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Mod4abegin7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mod4abegin7',
  templateUrl: 'mod4abegin7.html',
})
export class Mod4abegin7Page {

  aantal: any = 50;
  vraag: any = 41;
  loadProgress: number = 0;
  voort:any;
  voortgang: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl:AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);
    this.voort = localStorage.getItem('m4voort');

  }

  ionViewDidLoad() {
    setInterval(() => {
      if(this.loadProgress < this.voortgang){
        this.loadProgress++;
      }
    }, 50);

    if(this.vraag > this.voort){
      localStorage.setItem( 'm4voort', this.vraag);

    }


  }

  verder(){
    this.navCtrl.push('Mod4page29Page')
  }

  stoppen() {
    let alert = this.alertCtrl.create({
      title: 'Stoppen',
      message: 'Weet u zeker dat u wil stoppen?',
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Nee',
          role: 'cancel',
          cssClass: 'exit-button',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ja',
          cssClass: 'cancel-button',
          handler: () => {
            this.navCtrl.setRoot('HomePage');
          }
        }
      ]
    });
    alert.present();
  }

}
