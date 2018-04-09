import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-mod4aeind7',
  templateUrl: 'mod4aeind7.html',
})
export class Mod4aeind7Page {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  btw:any;


  m4p29data:any;
  m4p30data:any;
  m4p31data:any;



  m4p29tekst:any;
  m4p30tekst:any;
  m4p31tekst:any;







  voortgang: any;
  aantal: any = 50;
  vraag: any = 45;
  voort:any;
  loadProgress: number = 0;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController) {

    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);


    this.m4p29data = parseInt(localStorage.getItem('m4p29data'));
    this.m4p30data = parseInt(localStorage.getItem('m4p30data'));
    this.m4p31data = parseInt(localStorage.getItem('m4p31data'));



    this.m4p29tekst = localStorage.getItem('m4p29tekst');
    this.m4p30tekst = localStorage.getItem('m4p30tekst');
    this.m4p31tekst = localStorage.getItem('m4p31tekst');



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
          data: [this.m4p29data,this.m4p30data,this.m4p31data],
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
    this.navCtrl.setRoot('Mod4abegin7Page');
  }

  verder(){
    this.navCtrl.setRoot('Mod4abegin8Page');

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
