import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public navCtrl: NavController) {}

  login(){
    this.navCtrl.push(LoginPage);
   }
  
   register(){
    this.navCtrl.push(RegisterPage);
   }

}