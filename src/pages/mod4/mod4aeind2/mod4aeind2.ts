import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind2',
  templateUrl: 'mod4aeind2.html',
})
export class Mod4aeind2Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;

  m4p7data:any;
  m4p8data:any;
  m4p9data:any;
  m4p10data:any;



  m4p7tekst:any;
  m4p8tekst:any;
  m4p9tekst:any;
  m4p10tekst:any;







  voortgang: any;
  aantal: any = 50;
  vraag: any = 14;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    this.m4p7data = parseInt(localStorage.getItem('m4p7data'));
    this.m4p8data = parseInt(localStorage.getItem('m4p8data'));
    this.m4p9data = parseInt(localStorage.getItem('m4p9data'));
    this.m4p10data = parseInt(localStorage.getItem('m4p10data'));


    this.m4p7tekst = localStorage.getItem('m4p7tekst');
    this.m4p8tekst = localStorage.getItem('m4p8tekst');
    this.m4p9tekst = localStorage.getItem('m4p9tekst');
    this.m4p10tekst = localStorage.getItem('m4p10tekst');



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
          data: [this.m4p7data,this.m4p8data,this.m4p9data,this.m4p10data],
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
    this.navCtrl.setRoot('Mod4abegin2Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin3Page');

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
