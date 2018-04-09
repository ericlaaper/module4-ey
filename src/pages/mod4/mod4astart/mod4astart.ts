import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-mod4astart',
  templateUrl: 'mod4astart.html',
})
export class Mod4astartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  begin(){
    this.navCtrl.push('Mod4abegin1Page')
  }




}
