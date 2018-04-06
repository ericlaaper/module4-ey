


import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from "ionic-angular";


import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../app/auth.service";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  username ='';
  password ='';
  loginform:FormGroup;


  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    private formBuilder:FormBuilder,

  ) {

    this.loginform = formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'),
        ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.minLength(7)])]
    });
    console.log('laden form');



  }


  onSubmit(value:any) {
    const authenticated = this.authService.autheticate(value.username, value.password);
    if (authenticated){
      localStorage.setItem('username', value.username);
      localStorage.setItem('password', value.password);
      this.navCtrl.setRoot('HomePage')
    }
    else
      console.log('login failed');
  }




  login() {
    const authenticated = this.authService.autheticate(this.username, this.password);
    if (authenticated){
      this.navCtrl.setRoot('HomePage')
    }
    else
      console.log('login failed');
  }







}




// bewaar effe

// export class LoginPage {
//
//   username ='';
//   password ='';
//
//
//   constructor(
//     private authService: AuthService,
//     public navCtrl: NavController,
//     private modal:ModalController
//
//   ) {
//
//   }
//
//
//   login() {
//     const authenticated = this.authService.autheticate(this.username, this.password);
//     if (authenticated){
//       this.navCtrl.setRoot('HomePage')
//     }
//     else
//       console.log('login failed');
//   }
//
//   reg(){
//
//     this.navCtrl.setRoot('SigninPage')
//   }
//
//   forget() {
//     const mijnModal = this.modal.create('ForgetPage');
//     mijnModal.present();
//   }
//
//
//
// }



