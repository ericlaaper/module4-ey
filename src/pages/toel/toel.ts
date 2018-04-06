import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-toel',
  templateUrl: 'toel.html',
})
export class ToelPage {

al1:any;
  al2:any;
  al3:any;

  constructor(public navCtrl: NavController,
              public viewCtrl1 : ViewController,
              public navParams: NavParams) {


  }

  ionViewDidLoad() {

   console.log(this.navParams.get('al1'));
    this.al1 = this.navParams.get('al1');
    this.al2 = this.navParams.get('al2');
    this.al3 = this.navParams.get('al3');


    console.log('ionViewDidLoad ToelPage');
  }

  close1(){
    this.viewCtrl1.dismiss()
  }


}
