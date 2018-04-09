import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@IonicPage()
@Component({
  selector: 'page-mod4page2',
  templateUrl: 'mod4page2.html',
})
export class Mod4page2Page {

  m4p2form: FormGroup;
  m4p2data:any;
  m4p2tekst:any;

  tussen:any;
  tussen1:any;
  voortgang: any;

  aantal: any = 50;
  vraag: any = 3;
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

    let m4p2data = parseInt(localStorage.getItem('m4p2data'));
    let m4p2tekst = localStorage.getItem('m4p2tekst');
    this.voort = localStorage.getItem('m4voort');

    console.log('laden data uit geheugen');
    this.tussen = m4p2data;
    this.tussen1 = m4p2tekst;
    this.navCtrl = navCtrl;


    this.m4p2form = formBuilder.group({
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
    if (this.m4p2form.valid) {
      window.localStorage.setItem('m4p2data', value.waarde);
      if (value.opm == null) {
        window.localStorage.setItem( 'm4p2tekst', 'geen opmerking geplaatst');
      }
      else{
        window.localStorage.setItem( 'm4p2tekst', value.opm);
      }
      this.m4p2form.reset();
      this.navCtrl.push('Mod4page3Page');

    }
  }


  OpenModal1() {
    let toel = {
      al1: 'Alleen werkzame familieleden als aandeelhouder kan de complexiteit van besluitvorming verminderen, bijvoorbeeld ten aanzien van de verdeling van de jaarlijkse winst (herinvesteren of dividend). Tegelijkertijd kan het de complexiteit weer groter maken, bijvoorbeeld in de situatie van overlijden van een familielid. Gebruikelijk is dat via testament of erfrecht de aandelen in handen komen van de erfgenamen (partner, kinderen). Het kan echter zo zijn dat zij geen van allen werkzaam zijn in het familiebedrijf of één erfgenaam wel en één erfgenaam niet.',

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
