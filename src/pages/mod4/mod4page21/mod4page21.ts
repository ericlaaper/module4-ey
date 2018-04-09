import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@IonicPage()
@Component({
  selector: 'page-mod4page21',
  templateUrl: 'mod4page21.html',
})
export class Mod4page21Page {

  m4p21form: FormGroup;
  m4p21data:any;
  m4p21tekst:any;

  tussen:any;
  tussen1:any;
  voortgang: any;

  aantal: any = 50;
  vraag: any = 28;
  voort:any;
  loadProgress: number = 0;

  constructor(public navCtrl: NavController,
              private modal1: ModalController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public viewCtrl: ViewController,
  ) {


    this.voortgang = ((this.vraag / this.aantal) * 100).toFixed(0);

    let m4p21data = parseInt(localStorage.getItem('m4p21data'));
    let m4p21tekst = localStorage.getItem('m4p21tekst');
    this.voort = localStorage.getItem('m4voort');

    console.log('laden data uit geheugen');
    this.tussen = m4p21data;
    this.tussen1 = m4p21tekst;
    this.navCtrl = navCtrl;


    this.m4p21form = formBuilder.group({
      waarde: [this.tussen],
      opm:[this.tussen1, Validators.maxLength(50)],
    });
    console.log('laden form');
  }


  ionViewDidLoad(){
    setInterval(() => {
      if(this.loadProgress < this.voortgang){
        this.loadProgress++;
      }
    }, 50);

    if(this.vraag > this.voort){
      localStorage.setItem( 'm4voort', this.vraag);

    }

  }

  onSubmit(value: any) {
    if (this.m4p21form.valid) {
      window.localStorage.setItem('m4p21data', value.waarde);
      if (value.opm == null) {
        window.localStorage.setItem( 'm4p21tekst', 'geen opmerking geplaatst');
      }
      else{
        window.localStorage.setItem( 'm4p21tekst', value.opm);
      }
      this.m4p21form.reset();
      this.navCtrl.push('Mod4aeind4Page');

    }
  }


  OpenModal1() {
    let toel = {
      al1: 'Stel dat er 3 kinderen (tweede generatie) en 9 kleinkinderen (derde generatie), dan kan met deze afspraak het aandelenkapitaal na verloop als volgt verdeeld zijn. 1 aandeelhouder met 33% (kind1 met 1 kleinkind), 5 aandeelhouders met ieder 6,67% aandelenbezit en 4 aandeelhouders met ieder 8,25% aandelenbezit. Voor de eerste staak is het geen probleem om tot een standpunt te komen, voor de andere staken is dit lastiger. Deze problematiek doet zich vooral voor bij grotere familiebedrijven.',

    };


    const mijnModal = this.modal1.create('ToelPage', toel);

    mijnModal.present();
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
