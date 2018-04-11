import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind1',
  templateUrl: 'mod4aeind1.html',
})
export class Mod4aeind1Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;

  m4p1data:any;
  m4p2data:any;
  m4p3data:any;
  m4p4data:any;
  m4p5data:any;
  m4p6data:any;


  m4p1tekst:any;
  m4p2tekst:any;
  m4p3tekst:any;
  m4p4tekst:any;
  m4p5tekst:any;
  m4p6tekst:any;






  voortgang: any;
  aantal: any = 50;
  vraag: any = 8;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    this.m4p1data = parseInt(localStorage.getItem('m4p1data'));
    this.m4p2data = parseInt(localStorage.getItem('m4p2data'));
    this.m4p3data = parseInt(localStorage.getItem('m4p3data'));
    this.m4p4data = parseInt(localStorage.getItem('m4p4data'));
    this.m4p5data = parseInt(localStorage.getItem('m4p5data'));
    this.m4p6data = parseInt(localStorage.getItem('m4p6data'));

    this.m4p1tekst = localStorage.getItem('m4p1tekst');
    this.m4p2tekst = localStorage.getItem('m4p2tekst');
    this.m4p3tekst = localStorage.getItem('m4p3tekst');
    this.m4p4tekst = localStorage.getItem('m4p4tekst');
    this.m4p5tekst = localStorage.getItem('m4p5tekst');
    this.m4p6tekst = localStorage.getItem('m4p6tekst');


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
          data: [this.m4p1data,this.m4p2data,this.m4p3data,this.m4p4data,this.m4p5data,this.m4p6data],
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
    this.navCtrl.setRoot('Mod4abegin1Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin2Page');

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
