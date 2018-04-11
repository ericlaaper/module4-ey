import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind6',
  templateUrl: 'mod4aeind6.html',
})
export class Mod4aeind6Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;


  m4p25data:any;
  m4p26data:any;
  m4p27data:any;
  m4p28data:any;




  m4p25tekst:any;
  m4p26tekst:any;
  m4p27tekst:any;
  m4p28tekst:any;







  voortgang: any;
  aantal: any = 50;
  vraag: any = 40;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);


    this.m4p25data = parseInt(localStorage.getItem('m4p25data'));
    this.m4p26data = parseInt(localStorage.getItem('m4p26data'));
    this.m4p27data = parseInt(localStorage.getItem('m4p27data'));
    this.m4p28data = parseInt(localStorage.getItem('m4p28data'));



    this.m4p25tekst = localStorage.getItem('m4p25tekst');
    this.m4p26tekst = localStorage.getItem('m4p26tekst');
    this.m4p27tekst = localStorage.getItem('m4p27tekst');
    this.m4p28tekst = localStorage.getItem('m4p28tekst');



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
        labels: ["Stelling 1", "Stelling 2", "Stelling 3",  "Stelling 4"],
        datasets: [{
          label: 'uw mening',
          data: [this.m4p25data,this.m4p26data,this.m4p27data,this.m4p28data],
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
    this.navCtrl.setRoot('Mod4abegin6Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin7Page');

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
