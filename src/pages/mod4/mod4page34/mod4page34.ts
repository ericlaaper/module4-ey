import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@IonicPage()
@Component({
  selector: 'page-mod4page34',
  templateUrl: 'mod4page34.html',
})
export class Mod4page34Page {

  m4p34form: FormGroup;
  m4p34data:any;
  m4p34tekst:any;

  tussen:any;
  tussen1:any;
  voortgang: any;

  aantal: any = 50;
  vraag: any = 49;
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

    let m4p34data = parseInt(localStorage.getItem('m4p34data'));
    let m4p34tekst = localStorage.getItem('m4p34tekst');
    this.voort = localStorage.getItem('m4voort');

    console.log('laden data uit geheugen');
    this.tussen = m4p34data;
    this.tussen1 = m4p34tekst;
    this.navCtrl = navCtrl;


    this.m4p34form = formBuilder.group({
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
    if (this.m4p34form.valid) {
      window.localStorage.setItem('m4p34data', value.waarde);
      if (value.opm == null) {
        window.localStorage.setItem( 'm4p34tekst', 'geen opmerking geplaatst');
      }
      else{
        window.localStorage.setItem( 'm4p34tekst', value.opm);
      }
      this.m4p34form.reset();
      this.navCtrl.push('Mod4aeind8Page');

    }
  }


  OpenModal1() {
    let toel = {
      al1: 'even een tekst',
      al2: 'nog een tweede tekst',
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
