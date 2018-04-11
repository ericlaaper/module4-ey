import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the Mod4aeind5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mod4aeind5',
  templateUrl: 'mod4aeind5.html',
})
export class Mod4aeind5Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;

  m4p22data:any;
  m4p23data:any;
  m4p24data:any;


  m4p22tekst:any;
  m4p23tekst:any;
  m4p24tekst:any;






  voortgang: any;
  aantal: any = 50;
  vraag: any = 34;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    this.m4p22data = parseInt(localStorage.getItem('m4p22data'));
    this.m4p23data = parseInt(localStorage.getItem('m4p23data'));
    this.m4p24data = parseInt(localStorage.getItem('m4p24data'));


    this.m4p22tekst = localStorage.getItem('m4p22tekst');
    this.m4p23tekst = localStorage.getItem('m4p23tekst');
    this.m4p24tekst = localStorage.getItem('m4p24tekst');



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


    this.barChart = new Chart(this.barCanvas.nativeElement, {


      type: 'horizontalBar',

      data: {
        labels: ["Stelling 1", "Stelling 2", "Stelling 3"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p22data,this.m4p23data,this.m4p24data],
          backgroundColor: [
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600'
          ],
          borderColor: [
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600',
            '#FFE600'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -100,
              suggestedMax: 100
            }
          }],
          xAxes: [{
            ticks: {
              min: -100,
              max: 100
            }
          }]
        }
      }

    });

  }

  aanpassen() {
    this.navCtrl.setRoot('Mod4abegin5Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin6Page');

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
