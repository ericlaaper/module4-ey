import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the Mod4page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mod4page4',
  templateUrl: 'mod4page4.html',
})
export class Mod4page4Page {

  m4p4form: FormGroup;
  m4p4data:any;
  m4p4tekst:any;

  tussen:any;
  tussen1:any;
  voortgang: any;

  aantal: any = 50;
  vraag: any = 5;
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

    let m4p4data = parseInt(localStorage.getItem('m4p4data'));
    let m4p4tekst = localStorage.getItem('m4p4tekst');
    this.voort = localStorage.getItem('m4voort');

    console.log('laden data uit geheugen');
    this.tussen = m4p4data;
    this.tussen1 = m4p4tekst;
    this.navCtrl = navCtrl;


    this.m4p4form = formBuilder.group({
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
    if (this.m4p4form.valid) {
      window.localStorage.setItem('m4p4data', value.waarde);
      if (value.opm == null) {
        window.localStorage.setItem( 'm4p4tekst', 'geen opmerking geplaatst');
      }
      else{
        window.localStorage.setItem( 'm4p4tekst', value.opm);
      }
      this.m4p4form.reset();
      this.navCtrl.push('Mod4page5Page');

    }
  }


  OpenModal1() {
    let toel = {
      al1: 'Het succes van het familiebedrijf kan verbonden zijn aan specifieke medewerkers. Zij beschikken bijvoorbeeld over kennis, vaardigheden of toegang tot netwerken die belangrijk zijn voor de ambities van het bedrijf. Het is dan logisch om hen te boeien en binden aan het bedrijf. Een mogelijkheid is om hen als aandeelhouder mee te laten delen in de bedrijfsresultaten. ',

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
