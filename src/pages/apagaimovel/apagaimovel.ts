import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-apagaimovel',
  templateUrl: 'apagaimovel.html',
})
export class Apagaimovel {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Apagaimovel');
  }

}
