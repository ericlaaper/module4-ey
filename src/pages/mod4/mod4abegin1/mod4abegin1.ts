import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mod4abegin1',
  templateUrl: 'mod4abegin1.html',
})
export class Mod4abegin1Page {

  aantal: any = 50;
  vraag: any = 1;
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

    if(this.voort < 1 ) {
      localStorage.setItem('m4voort', this.vraag);
    }


  }

  verder(){
    this.navCtrl.push('Mod4page1Page')
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
