import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind3',
  templateUrl: 'mod4aeind3.html',
})
export class Mod4aeind3Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;

  m4p11data:any;
  m4p12data:any;
  m4p13data:any;
  m4p14data:any;
  m4p15data:any;
  m4p16data:any;
  m4p17data:any;


  m4p11tekst:any;
  m4p12tekst:any;
  m4p13tekst:any;
  m4p14tekst:any;
  m4p15tekst:any;
  m4p16tekst:any;
  m4p17tekst:any;






  voortgang: any;
  aantal: any = 50;
  vraag: any = 23;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    this.m4p11data = parseInt(localStorage.getItem('m4p11data'));
    this.m4p12data = parseInt(localStorage.getItem('m4p12data'));
    this.m4p13data = parseInt(localStorage.getItem('m4p13data'));
    this.m4p14data = parseInt(localStorage.getItem('m4p14data'));
    this.m4p15data = parseInt(localStorage.getItem('m4p15data'));
    this.m4p16data = parseInt(localStorage.getItem('m4p16data'));
    this.m4p17data = parseInt(localStorage.getItem('m4p17data'));

    this.m4p11tekst = localStorage.getItem('m4p11tekst');
    this.m4p12tekst = localStorage.getItem('m4p12tekst');
    this.m4p13tekst = localStorage.getItem('m4p13tekst');
    this.m4p14tekst = localStorage.getItem('m4p14tekst');
    this.m4p15tekst = localStorage.getItem('m4p15tekst');
    this.m4p16tekst = localStorage.getItem('m4p16tekst');
    this.m4p17tekst = localStorage.getItem('m4p17tekst');


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
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4", "Stelling 5", "Stelling 6"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p11data,this.m4p12data,this.m4p13data,this.m4p14data,this.m4p15data,this.m4p16data,this.m4p17data],
          backgroundColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
          ],
          borderColor: [
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4',
            '#006ab4'
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
    this.navCtrl.setRoot('Mod4abegin3Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin4Page');

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
