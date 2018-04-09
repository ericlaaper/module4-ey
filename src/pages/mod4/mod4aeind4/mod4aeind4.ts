import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind4',
  templateUrl: 'mod4aeind4.html',
})
export class Mod4aeind4Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;

  m4p18data:any;
  m4p19data:any;
  m4p20data:any;
  m4p21data:any;


  m4p18tekst:any;
  m4p19tekst:any;
  m4p20tekst:any;
  m4p21tekst:any;






  voortgang: any;
  aantal: any = 50;
  vraag: any = 29;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    this.m4p18data = parseInt(localStorage.getItem('m4p18data'));
    this.m4p19data = parseInt(localStorage.getItem('m4p19data'));
    this.m4p20data = parseInt(localStorage.getItem('m4p20data'));
    this.m4p21data = parseInt(localStorage.getItem('m4p21data'));


    this.m4p18tekst = localStorage.getItem('m4p18tekst');
    this.m4p19tekst = localStorage.getItem('m4p19tekst');
    this.m4p20tekst = localStorage.getItem('m4p20tekst');
    this.m4p21tekst = localStorage.getItem('m4p21tekst');



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
          data: [this.m4p18data,this.m4p19data,this.m4p20data,this.m4p21data],
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
    this.navCtrl.setRoot('Mod4abegin4Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin5Page');

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
