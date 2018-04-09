import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind8',
  templateUrl: 'mod4aeind8.html',
})
export class Mod4aeind8Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;


  m4p32data:any;
  m4p33data:any;
  m4p34data:any;




  m4p32tekst:any;
  m4p33tekst:any;
  m4p34tekst:any;







  voortgang: any;
  aantal: any = 50;
  vraag: any = 50;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);


    this.m4p32data = parseInt(localStorage.getItem('m4p32data'));
    this.m4p33data = parseInt(localStorage.getItem('m4p33data'));
    this.m4p34data = parseInt(localStorage.getItem('m4p34data'));



    this.m4p32tekst = localStorage.getItem('m4p32tekst');
    this.m4p33tekst = localStorage.getItem('m4p33tekst');
    this.m4p34tekst = localStorage.getItem('m4p34tekst');



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
          data: [this.m4p32data,this.m4p33data,this.m4p34data],
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
    this.navCtrl.setRoot('Mod4abegin8Page');
  }

  verder(){
    this.navCtrl.setRoot('HomePage');

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
