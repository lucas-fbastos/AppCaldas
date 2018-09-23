import { Infoperfil } from './../infoperfil/infoperfil';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  entrar(){
    this.navCtrl.setRoot(Infoperfil);
  }
}
